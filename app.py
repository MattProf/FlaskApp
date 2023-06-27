import os
from flask import Flask, render_template, request, redirect, session, url_for, jsonify
from pymongo import MongoClient
import uuid
from dotenv import load_dotenv
from python.find_html_files import search_files

load_dotenv()
user = os.getenv("DB_USER")
passw = os.getenv("DB_PASS")
secretkey = os.getenv("DB_SECRET")

# Connect to your MongoDB database
client = MongoClient(
    f"mongodb+srv://{user}:{passw}@clusterprofile.v0bdrot.mongodb.net/"
)

db = client["product_database"]  # Use your own database name
collection = db["products"]  # Use your own collection name


app = Flask(__name__)
app.config["SECRET_KEY"] = secretkey


def cart_count():
    cart = session.get("cart", {})
    return sum(item["quantity"] for item in cart.get("items", []))


app.jinja_env.globals.update(cart_count=cart_count)


@app.route("/")
def home():
    return render_template("home.html")


@app.route("/about")
def about():
    return render_template("about.html")


@app.route("/contact")
def contact():
    return render_template("contact.html")


@app.route("/svelteapp")
def svelte_app():
    return render_template("svelte_app.html")


@app.route("/search", methods=["POST"])
def search():
    search_term = request.form.get("search")
    print(search_term)
    # Perform a text search on the 'name' field
    products = db.products.find({"$text": {"$search": search_term}})

    # Convert the results to a list
    product_list = list(products)
    print(product_list)
    # Render the results in a template
    return render_template("macros/search_results.html", products=product_list)


@app.route("/api/search")
def api_search():
    query = request.args.get("query")
    results = collection.find({"$text": {"$search": query}})
    results = [
        {"id": str(r["_id"]), "name": r["name"], "price": r["price"]} for r in results
    ]
    return jsonify(results)


@app.route("/blog")
def blog():
    html_files = search_files(base_path="./templates/blog_posts")
    for file in html_files:
        print(file)
    return render_template("blog.html")


@app.route("/blog/<post>")
def blog_post(post):
    return render_template("blog_posts/" + post + ".html")


@app.route("/products")
def product_list():
    # Fetch all products from the MongoDB collection
    products = list(collection.find())

    return render_template("products.html", products=products)


@app.route("/reporting")
def reporting():
    return render_template("reporting.html")


@app.route("/add_product", methods=["GET", "POST"])
def add_product():
    on = False
    if request.method == "POST":
        if on == True:
            product = {
                # "_id": request.form.get("id"),
                "name": request.form.get("name"),
                "price": float(request.form.get("price")),
            }
            try:
                collection.insert_one(product)
                return redirect(url_for("product_list"))
            except:
                return "Error: Product with this ID already exists!"
        else:
            return redirect(url_for("product_list"))

    return render_template("add_product.html")


@app.route("/product/<string:product_id>")
def product_detail(product_id):
    # Normally, you'd fetch this from your database, but we're keeping things simple.
    product = {"id": product_id, "name": f"Product {product_id}", "price": 99.99}
    return render_template("product_detail.html", product=product)


@app.route("/cart", methods=["GET"])
def cart():
    if "cart" not in session:
        cart_items = []
    else:
        cart_items = session["cart"]["items"]

    # Calculate the total price
    total_price = 0
    for product in cart_items:
        total_price += product["price"] * product["quantity"]

    return render_template("cart.html", cart=cart_items, total_price=total_price)


@app.route("/add_to_cart/<string:product_id>")
def add_to_cart(product_id):
    # Fetch the product from the MongoDB collection
    from bson.objectid import ObjectId

    product = collection.find_one({"_id": ObjectId(product_id)})
    if not product:
        return "Error: Product not found!", 404
    # Get the cart from the MongoDB cart collection
    cart_collection = db["carts"]
    if "cart_id" not in session:
        session["cart_id"] = str(uuid.uuid4())

    cart = cart_collection.find_one({"session_id": session["cart_id"]})

    if cart is None:
        # This is a new session that isn't in the db yet, so initialize it
        cart = {"session_id": str(session["cart_id"]), "items": []}
    else:
        cart["session_id"] = str(cart["session_id"])
        for item in cart["items"]:
            item["product_id"] = str(
                item["product_id"]
            )  # Ensure the product_id is a string

    # Check if the product is already in the cart
    for item in cart["items"]:
        if item["product_id"] == product_id:
            item["quantity"] += 1
            break
    else:
        # If the product is not in the cart, add it
        cart["items"].append(
            {
                "product_id": product_id,
                "quantity": 1,
                "name": product["name"],
                "price": product["price"],
            }
        )
    # Update the cart in the MongoDB cart collection
    cart_collection.replace_one({"session_id": session["cart_id"]}, cart, upsert=True)
    # Update the session cart
    session_cart = cart.copy()
    try:
        session_cart["_id"] = str(session_cart["_id"])  # Convert _id to string
    except KeyError:
        pass
    session["cart"] = session_cart
    return redirect(url_for("product_list"))


@app.route("/reduce_quantity/<string:product_id>", methods=["POST"])
def reduce_quantity(product_id):
    # Fetch the cart from the MongoDB cart collection
    cart_collection = db["carts"]

    if "cart_id" not in session:
        # If there's no cart in the session, redirect to the cart page
        return redirect(url_for("cart"))

    cart = cart_collection.find_one({"session_id": session["cart_id"]})

    # If there's no cart in the database, redirect to the cart page
    if cart is None:
        return redirect(url_for("cart"))

    # Find the product in the cart and reduce its quantity
    for item in cart["items"]:
        if item["product_id"] == product_id:
            if item["quantity"] > 1:
                item["quantity"] -= 1
            else:
                # If the quantity is 1, remove the product from the cart
                cart["items"].remove(item)
            break

    # Update the cart in the MongoDB cart collection
    cart_collection.replace_one({"session_id": session["cart_id"]}, cart, upsert=True)

    # Update the session cart
    session_cart = cart.copy()
    session_cart["_id"] = str(session_cart["_id"])  # Convert _id to string
    session["cart"] = session_cart

    # Redirect back to the cart page
    return redirect(url_for("cart"))


@app.route("/checkout", methods=["GET", "POST"])
def checkout():
    # Calculate the total price
    total_price = 0
    for product in session["cart"]["items"]:
        total_price += product["price"] * product["quantity"]
    if "cart" not in session or len(session["cart"]) == 0:
        return redirect(url_for("product_list"))
    if request.method == "POST":
        # Save shipping details and redirect to payment page
        session["shipping"] = request.form
        return redirect(url_for("payment"))
    return render_template(
        "checkout.html", cart=session["cart"]["items"], total_price=total_price
    )


@app.route("/payment", methods=["GET", "POST"])
def payment():
    if "cart" not in session or len(session["cart"]) == 0 or "shipping" not in session:
        return redirect(url_for("product_list"))
    if request.method == "POST":
        # In a real application, you'd process the payment here
        return redirect(url_for("thank_you"))
    return render_template("payment.html")


@app.route("/thank_you")
def thank_you():
    if "cart" not in session or len(session["cart"]) == 0 or "shipping" not in session:
        return redirect(url_for("product_list"))

    # Fetch the cart from the MongoDB cart collection
    cart_collection = db["carts"]

    if "cart_id" in session:
        # Remove the user's cart from the MongoDB database
        cart_collection.delete_one({"session_id": session["cart_id"]})

        # Remove cart_id from the session
        del session["cart_id"]

    # Clear the shopping cart and shipping details
    del session["cart"]
    del session["shipping"]

    return render_template("thank_you.html")


@app.route("/sitemap", methods=["GET"])
def sitemap():
    html_files = search_files()

    urls = [f"http://127.0.0.1:5000/{os.path.splitext(html)[0]}" for html in html_files]

    return render_template("sitemap.xml", urls=urls)


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=False)
