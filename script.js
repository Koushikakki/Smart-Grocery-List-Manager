const form = document.getElementById('grocery-form');
const list = document.getElementById('grocery-list');
const totalCount = document.getElementById('total-count');
const remainingCount = document.getElementById('remaining-count');

let groceryItems = [];

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('item-name').value.trim();
  const quantity = parseInt(document.getElementById('item-quantity').value);

  if (name && quantity > 0) {
    groceryItems.push({ name, quantity, purchased: false });
    saveToLocalStorage(items);
    form.reset();
    updateList();
  }
});

function updateList() {
  list.innerHTML = '';
  let remaining = 0;

  groceryItems.forEach((item, index) => {
    const li = document.createElement('li');
    li.className = item.purchased ? 'purchased' : '';

    const leftDiv = document.createElement('div');
    leftDiv.className = 'left';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = item.purchased;
    checkbox.addEventListener('change', () => {
      item.purchased = checkbox.checked;
      updateList();
    });

    const span = document.createElement('span');
    span.textContent = `${item.name} (${item.quantity})`;

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.className = 'remove-btn';
    removeBtn.addEventListener('click', () => {
      groceryItems.splice(index, 1);
      updateList();
    });

    leftDiv.appendChild(checkbox);
    leftDiv.appendChild(span);

    li.appendChild(leftDiv);
    li.appendChild(removeBtn);

    list.appendChild(li);

    if (!item.purchased) remaining++;
  });

  totalCount.textContent = groceryItems.length;
  remainingCount.textContent = remaining;
}



