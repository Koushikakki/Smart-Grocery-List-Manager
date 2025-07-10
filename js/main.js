const groceryItems = loadFromLocalStorage();
renderList(groceryItems);
setupEventListeners(groceryItems);
setupFilters(groceryItems);
