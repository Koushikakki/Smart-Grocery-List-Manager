function setupEventListeners(items) {
  const form = document.getElementById('grocery-form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('item-name').value.trim();
    const quantity = parseInt(document.getElementById('item-quantity').value);
    const category = document.getElementById('item-category').value;
    const priority = document.getElementById('item-priority').checked;
    const reminderMin = parseInt(document.getElementById('reminder-time').value);

    if (name && quantity > 0 && category) {
      const item = { name, quantity, category, priority, purchased: false };
      items.push(item);
      saveToLocalStorage(items);
      renderList(items);
      form.reset();

      if (!isNaN(reminderMin) && reminderMin > 0) {
        setTimeout(() => {
          alert(`⏰ Reminder: Buy ${item.name} (${item.category})`);
        }, reminderMin * 60000);
      }
    }
  });
}
