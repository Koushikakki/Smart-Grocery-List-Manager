function saveToLocalStorage() {
  localStorage.setItem('groceryItems', JSON.stringify(groceryItems));
}



function loadFromLocalStorage() {
  const saved = localStorage.getItem('groceryItems');
  if (saved) {
    groceryItems = JSON.parse(saved);
    displayItems();
  }
}