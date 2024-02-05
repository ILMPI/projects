document.addEventListener("DOMContentLoaded", function (event) {
  fetch("https://jsonblob.com/api/jsonBlob/1200125876422696960")
    .then((response) => response.json())
    .then(({ currency, products }) => {
      const carrito = new Carrito({ currency, products });
      dataDraw(currency, products, carrito);
    });
});
