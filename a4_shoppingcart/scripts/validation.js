function validateAndProcessInput(input, sku, carrito) {
  const matches = input.value.match(/^\d+/);
  let value = matches ? parseInt(matches[0], 10) : 0;

  if (value > 10) {
    value = 10;
    alert(
      "Tenga en cuenta que sólo puede pedir 10 unidades de cada artículo en nuestra tienda."
    );
  }

  input.value = value;
  carrito.actualizarUnidades(sku, value);
  updateTable(carrito);
}

function setupInputListeners(input, sku, carrito) {
  input.addEventListener("change", () =>
    validateAndProcessInput(input, sku, carrito)
  );
  input.addEventListener("input", () =>
    validateAndProcessInput(input, sku, carrito)
  );
  input.addEventListener("focus", () => input.select());
}

function setupButtonListeners(minus, plus, input, sku, carrito) {
  minus.addEventListener("click", () => {
    let currentValue = parseInt(input.value, 10) || 0;
    if (currentValue > 0) {
      currentValue -= 1;
    }
    input.value = currentValue;
    validateAndProcessInput(input, sku, carrito);
  });

  plus.addEventListener("click", () => {
    let currentValue = parseInt(input.value, 10) || 0;
    if (currentValue < 10) {
      currentValue += 1;
    }
    input.value = currentValue;
    validateAndProcessInput(input, sku, carrito);
  });
}
