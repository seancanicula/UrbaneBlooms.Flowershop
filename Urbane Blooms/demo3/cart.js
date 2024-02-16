function addToCart(productName, price) {
    // Get the cart and total elements
    let cartElement = document.getElementById('cart-items');
    let totalElement = document.getElementById('cart-total');
  
    // Create a new list item for the cart
    let listItem = document.createElement('li');
    listItem.textContent = `${productName} - Php ${price.toFixed(2)}`;
  
    // Append the new item to the cart
    cartElement.appendChild(listItem);
  
    // Update the total amount
    let currentTotal = parseFloat(totalElement.textContent);
    totalElement.textContent = (currentTotal + price).toFixed(2);
  }