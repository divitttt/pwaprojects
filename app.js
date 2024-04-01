// Sample product data (replace with your actual product data)
const products = [
    { id: 1, name: 'Rose', price: 15, imageUrl: 'rose.jpeg' },
    { id: 2, name: 'Tulip', price: 12, imageUrl: 'tulip.jpg' },
    { id: 3, name: 'Daisy', price: 10, imageUrl: 'daisy.jpg' }
];

// Function to display products on the page
function displayProducts() {
    const mainElement = document.querySelector('main');

    // Clear existing content
    mainElement.innerHTML = '';

    // Loop through products and create HTML elements
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');

        // Create img element
        const imgElement = document.createElement('img');
        imgElement.src = product.imageUrl; // Set src attribute to image URL
        imgElement.alt = product.name; // Set alt attribute for accessibility
        productElement.appendChild(imgElement); // Append img element to product element

        if ('serviceWorker' in navigator) {
            window.addEventListener('load', function() {
              navigator.serviceWorker.register('/sw.js').then(function(registration) {
                console.log('ServiceWorker registration successful with scope: ', registration.scope);
              }, function(err) {
                console.log('ServiceWorker registration failed: ', err);
              });
            });
          }
          
        productElement.innerHTML += `
            <h2>${product.name}</h2>
            <p>$${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;

        mainElement.appendChild(productElement);
    });
}

// Function to add product to cart
function addToCart(productId) {
    // Implement your logic to add product to cart here
    console.log(`Product with ID ${productId} added to cart`);
}

// Call displayProducts function to render products on page load
displayProducts();

  

