const form = document.getElementById('grocery-form');
const list = document.getElementById('grocery-list');
const totalCount = document.getElementById('total-count');
const remainingCount = document.getElementById('remaining-count');

let groceryItems = [];

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const itemName = document.getElementById('item-name').value.trim();
  const itemQuantity = parseInt(document.getElementById('item-quantity').value);

    
  if (itemName && itemQuantity > 0) {
    
    groceryItems.push({
      name: itemName,
      quantity: itemQuantity,
      purchased: false 
    });
}

});