function saveToLocalStorage(items) {
  localStorage.setItem('groceryItems', JSON.stringify(items));
}

function loadFromLocalStorage() {
  const stored = localStorage.getItem('groceryItems');
  return stored ? JSON.parse(stored) : [];
}
