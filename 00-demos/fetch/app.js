const status = document.querySelector('#status');
const output = document.querySelector('#output');
const buttons = [...document.querySelectorAll('button')];

async function loadProducts(url) {
  status.textContent = 'Loading...'; output.textContent = '';
  buttons.forEach(button => { button.disabled = true; });
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const products = await response.json();
    output.textContent = JSON.stringify(products, null, 2);
    status.textContent = `Loaded ${products.length} products.`;
  } catch (error) {
    status.textContent = `Could not load products: ${error.message}`;
  } finally {
    buttons.forEach(button => { button.disabled = false; });
  }
}
document.querySelector('#load').addEventListener('click', () => loadProducts('./products.json'));
document.querySelector('#fail').addEventListener('click', () => loadProducts('./missing.json'));
