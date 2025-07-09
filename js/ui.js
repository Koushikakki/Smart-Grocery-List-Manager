function updateSummary(items) {
  const total = items.length;
  const remaining = items.filter(item => !item.purchased).length;

  document.getElementById('total-count').textContent = total;
  document.getElementById('remaining-count').textContent = remaining;
}

function renderList(items) {
  const itemList = document.getElementById('grocery-list');
  itemList.innerHTML = '';

  items.forEach((item, index) => {
    const li = document.createElement('li');
    if (item.purchased) li.classList.add('purchased');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = item.purchased;
    checkbox.addEventListener('change', () => {
      item.purchased = checkbox.checked;
      saveToLocalStorage(items);
      renderList(items);
    });

    const span = document.createElement('span');
    span.textContent = `${item.name} (${item.quantity})`;

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.classList.add('remove-btn');
    removeBtn.addEventListener('click', () => {
      items.splice(index, 1);
      saveToLocalStorage(items);
      renderList(items);
    });

    const left = document.createElement('div');
    left.className = 'left';
    left.appendChild(checkbox);
    left.appendChild(span);

    li.appendChild(left);
    li.appendChild(removeBtn);
    itemList.appendChild(li);
  });

  updateSummary(items);
}