# JavaScript revision and TypeScript introduction



## Before the lesson
1. Install Node.js 22 or 24 and VS Code on the machines. These exercises do not require Angular.
2. Extract this archive and open the starter-pack folder in VS Code.
3. In 03-typescript, run npm install before class. This downloads the pinned TypeScript compiler. Internet is needed for that initial installation only.
4. Return to starter-pack and run node serve.mjs. Keep this terminal running.
5. Open http://localhost:8080/. Use the browser Developer Tools console and Network tab.

The local server uses only Node built-in modules. Do not double-click the HTML files, because ES modules and fetch need HTTP in this pack. If port 8080 is occupied, stop the conflicting process or change the port in serve.mjs and in the URL.

## Included
- 00-demos: runnable JavaScript foundations and local JSON/fetch demonstration.
- 01-js-logic: product-function starter.
- 02-browser-list: browser UI starter.
- 03-typescript: typed-function starter.

No external API, backend database or global npm package is needed. Browser changes are stored in memory and reset on refresh. This is deliberate preparation for later state-management lessons.

## Exercise 1
Complete the three functions in 01-js-logic/starter/inventory.js:
1. getAvailableProducts: stock greater than zero.
2. findProductById: matching numeric ID, or undefined.
3. inventoryValue: total price multiplied by stock.
Optional: productNames using map.
Run in the browser, or from the root with node 01-js-logic/starter/app.js.

Expected solution output:
Available: Keyboard, Monitor
Product 3: Monitor
Product 99: Not found
Inventory value: EUR 550.00
Optional names: Keyboard, Mouse, Monitor

## Exercise 2
Open 02-browser-list/starter/app.js. Complete only the three TODO functions. HTML, CSS, rendering and event wiring are provided.
1. Filter names case-insensitively and ignore surrounding search spaces.
2. Add a product with a trimmed name and a finite price of zero or more. Use nextId++ and stock: 1. Return false for invalid inputs and true on success.
3. Delete by ID. Preserve other records.
Check: KEY finds Keyboard, blank search shows all products, zero price is accepted, negative price and empty name are rejected, and deletion still works after filtering.

## Exercise 3
Type and implement the inventory functions. Build and run in 03-typescript/starter.
Then fix the three mistakes in errors-to-fix.ts by creating src/error-fixes.ts. Explanations and working answers are in the solution folder and lecturer guide.


