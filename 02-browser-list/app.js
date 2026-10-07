import { products as initialProducts } from './products.js';
let products = initialProducts.map(product => ({ ...product }));
let nextId = Math.max(...products.map(product => product.id)) + 1;
const search = document.querySelector('#search');
const rows = document.querySelector('#rows');
const form = document.querySelector('#add-form');
const nameInput = document.querySelector('#name');
const priceInput = document.querySelector('#price');
const status = document.querySelector('#status');

function getVisibleProducts(query) {
  // TODO 1: Case-insensitive name filter. Empty query should return all products.
  const term = query.trim().toLowerCase();
  if(!term) return products;
  return products.filter(p => p.name.toLowerCase().includes(term));
}

function addProduct(name, price) {
  // TODO 2: Trim name. Reject empty names, non-finite prices and negative prices.
  // Add { id: nextId++, name: cleanName, price, stock: 1 } and return true.#
  const trimmedName = name.trim();
  if(!trimmedName) return false;
  if(price < 0 || !Number.isFinite(price)) return false;
  products.push({id: nextId++, name: trimmedName, price, stock:1});
  return true;
};

function deleteProduct(id) {
  // TODO 3: Keep every product except the one with this id.
  products = products.filter(p => p.id !== id);
}

// Render helper and event wiring are provided so you can focus on the TODOs.
function renderProducts() {
  const visible = getVisibleProducts(search.value);
  rows.replaceChildren();
  for (const product of visible) {
    const row = document.createElement('tr');
    for (const value of [product.name, `EUR ${product.price.toFixed(2)}`, product.stock]) {
      const cell = document.createElement('td');
      cell.textContent = String(value);
      row.append(cell);
    }
    const cell = document.createElement('td');
    const button = document.createElement('button');
    button.type = 'button'; button.textContent = 'Delete';
    button.setAttribute('aria-label', `Delete ${product.name}`);
    button.addEventListener('click', () => {
      deleteProduct(product.id); renderProducts();
      status.textContent = `${product.name} deleted.`;
    });
    cell.append(button); row.append(cell); rows.append(row);
  }
  document.querySelector('#summary').textContent = `${visible.length} of ${products.length} products shown`;
  document.querySelector('#empty').hidden = visible.length !== 0;
}
search.addEventListener('input', renderProducts);
form.addEventListener('submit', event => {
  event.preventDefault();
  if (priceInput.value.trim() === '') { status.textContent = 'Enter a price.'; return; }
  if (!addProduct(nameInput.value, Number(priceInput.value))) {
    status.textContent = 'Enter a name and a price of zero or more.'; return;
  }
  status.textContent = 'Product added. Clear the filter if it is hidden.';
  form.reset(); renderProducts(); nameInput.focus();
});
renderProducts();
