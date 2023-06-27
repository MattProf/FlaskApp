# Use an official Python runtime as a parent image
FROM python:3.10-slim

# Set the working directory in the container to /app
WORKDIR /app

# Add the current directory contents into the container at /app
ADD . /app

# Install system dependencies
RUN apt-get update && apt-get install -y curl build-essential && \
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash && \
    . ~/.nvm/nvm.sh && nvm install 14 && nvm alias default 14 && \
    rm -rf /var/lib/apt/lists/*

# Install any needed packages specified in requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Navigate to your Svelte app directory (change 'my-svelte-app' to your actual Svelte app directory)
WORKDIR /app/svelte-app

# Install the NPM dependencies for your Svelte app
RUN . ~/.nvm/nvm.sh && npm install

# Build your Svelte app
RUN . ~/.nvm/nvm.sh && npm run build

# Navigate back to your main app directory
WORKDIR /app

# Make port 5000 available to the world outside this container
EXPOSE 5000

# Run app.py when the container launches
CMD gunicorn --bind 0.0.0.0:5000 app:app