function renderList(items) {
  const list = document.getElementById('grocery-list');
  list.innerHTML = '';

  const sorted = [...items].sort((a, b) => {
    if (a.priority !== b.priority) return b.priority - a.priority;
    if (a.purchased !== b.purchased) return a.purchased - b.purchased;
    return a.name.localeCompare(b.name);
  });

  sorted.forEach((item, index) => {
    const li = document.createElement('li');
    if (item.purchased) li.classList.add('purchased');
    if (item.priority) li.classList.add('priority');

    const left = document.createElement('div');
    left.className = 'left';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = item.purchased;
    checkbox.addEventListener('change', () => {
      item.purchased = checkbox.checked;
      saveToLocalStorage(items);
      renderList(items);
    });

    const text = document.createElement('span');
    text.textContent = `${item.name} (${item.quantity}) - ${item.category}`;

    left.appendChild(checkbox);
    left.appendChild(text);

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.className = 'remove-btn';
    removeBtn.addEventListener('click', () => {
      items.splice(index, 1);
      saveToLocalStorage(items);
      renderList(items);
    });

    li.appendChild(left);
    li.appendChild(removeBtn);
    list.appendChild(li);
  });

  document.getElementById('total-count').textContent = items.length;
  document.getElementById('remaining-count').textContent =
    items.filter(item => !item.purchased).length;
}
