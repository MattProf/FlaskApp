<script>
    import ProductManager from "./ProductManager.svelte";
    import OrderManager from "./OrderManager.svelte";
    import UserManager from "./UserManager.svelte";
    import SalesReport from "./SalesReport.svelte";
    import PromotionManager from "./PromotionManager.svelte";
    import ReviewManager from "./ReviewManager.svelte";

    let selectedTab = "products";
</script>

<div class="container">
    <div class="row">
        <div class="col-3">
            <div class="list-group">
                <button
                    class="list-group-item list-group-item-action"
                    on:click={() => (selectedTab = "products")}
                    >Manage Products</button
                >
                <button
                    class="list-group-item list-group-item-action"
                    on:click={() => (selectedTab = "orders")}
                    >Manage Orders</button
                >
                <button
                    class="list-group-item list-group-item-action"
                    on:click={() => (selectedTab = "users")}
                    >Manage Users</button
                >
                <button
                    class="list-group-item list-group-item-action"
                    on:click={() => (selectedTab = "sales")}
                    >View Sales Reports</button
                >
                <button
                    class="list-group-item list-group-item-action"
                    on:click={() => (selectedTab = "promotions")}
                    >Manage Promotions</button
                >
                <button
                    class="list-group-item list-group-item-action"
                    on:click={() => (selectedTab = "reviews")}
                    >Manage Reviews</button
                >
            </div>
        </div>
        <div class="col-9">
            {#if selectedTab === "products"}<ProductManager />{/if}
            {#if selectedTab === "orders"}<OrderManager />{/if}
            {#if selectedTab === "users"}<UserManager />{/if}
            {#if selectedTab === "sales"}<SalesReport />{/if}
            {#if selectedTab === "promotions"}<PromotionManager />{/if}
            {#if selectedTab === "reviews"}<ReviewManager />{/if}
        </div>
    </div>
</div>
