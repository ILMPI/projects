function dataDraw(currency, products, carrito) {
  const tableProducts = document.querySelector("#product_list");

  products.forEach((product) => {
    const row = document.createElement("tr");
    row.setAttribute("data-sku", product.SKU);
    row.classList.add("product_row");

    const productoCell = document.createElement("td");
    const title = document.createElement("h4");
    title.innerText = product.title;
    const ref = document.createElement("p");
    ref.innerText = `Ref: ${product.SKU}`;
    productoCell.append(title, ref);
    row.append(productoCell);

    const cantidadCell = document.createElement("td");
    const minus = document.createElement("button");
    minus.innerText = "-";
    minus.classList.add("square-button");
    minus.setAttribute("data-action", "decrement");

    const input = document.createElement("input");
    input.type = "text";
    input.value = "0";
    input.classList.add("square-input");
    input.setAttribute("data-sku", product.SKU);

    const plus = document.createElement("button");
    plus.innerText = "+";
    plus.classList.add("square-button");
    plus.setAttribute("data-action", "increment");

    cantidadCell.append(minus, input, plus);
    row.append(cantidadCell);

    const unidadCell = document.createElement("td");
    unidadCell.innerText = `${product.price} ${currency}`;
    row.append(unidadCell);

    const totalPerProductCell = document.createElement("td");
    totalPerProductCell.innerText = `0 ${currency}`;
    row.append(totalPerProductCell);

    tableProducts.append(row);

    setupInputListeners(input, product.SKU, carrito);
    setupButtonListeners(minus, plus, input, product.SKU, carrito);
  });
}

function updateTable(carrito) {
  const tableTotal = document.querySelector("#total_list");
  const cartInfo = carrito.obtenerCarrito();

  tableTotal.innerText = "";

  cartInfo.products.forEach((product) => {
    const row = document.createElement("tr");
    const titleCell = document.createElement("td");
    titleCell.innerText = product.title;
    const totalCell = document.createElement("td");
    totalCell.innerText = `${product.total.toFixed(2)} ${carrito.currency}`;
    row.append(titleCell, totalCell);
    tableTotal.append(row);
  });

  const totalRow = document.createElement("tr");
  const totalTitleCell = document.createElement("td");
  totalTitleCell.innerText = "Total";
  const totalValueCell = document.createElement("td");
  totalValueCell.innerText = `${cartInfo.total} ${carrito.currency}`;
  totalRow.append(totalTitleCell, totalValueCell);
  tableTotal.append(totalRow);

  document.querySelectorAll(".product_row").forEach((row) => {
    const sku = row.getAttribute("data-sku");
    const productInfo = carrito.obtenerInformacionProducto(sku);
    const totalCell = row.lastChild;
    totalCell.innerText = `${productInfo.total.toFixed(2)} ${carrito.currency}`;
  });
}
