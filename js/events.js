function setupEventListeners(items) {
  const form = document.getElementById('grocery-form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('item-name').value.trim();
    const quantity = parseInt(document.getElementById('item-quantity').value);

    if (name && quantity > 0) {
      items.push({ name, quantity, purchased: false });
      saveToLocalStorage(items);
      form.reset();
      renderList(items);
    }
  });

  document.getElementById('clear-all').addEventListener('click', () => {
    if (confirm("Are you sure you want to clear all items?")) {
      items.length = 0;
      saveToLocalStorage(items);
      renderList(items);
    }
  });

  document.getElementById('mark-all').addEventListener('click', () => {
    items.forEach(item => item.purchased = true);
    saveToLocalStorage(items);
    renderList(items);
  });
}