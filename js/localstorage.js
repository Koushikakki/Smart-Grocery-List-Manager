function saveToLocalStorage(items) {
  localStorage.setItem('groceryItems', JSON.stringify(items));
}

function loadFromLocalStorage() {
  const saved = localStorage.getItem('groceryItems');
  return saved ? JSON.parse(saved) : [];
}