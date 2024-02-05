class Carrito {
  constructor({ currency, products }) {
    this.currency = currency;
    this.products = products.map((product) => ({
      ...product,
      quantity: 0,
      total: 0,
    }));
  }

  actualizarUnidades(sku, unidades) {
    const product = this.products.find((product) => product.SKU === sku);
    if (product) {
      product.quantity = unidades;
      product.total = Number(product.price) * unidades;
    }
  }

  obtenerInformacionProducto(sku) {
    return this.products.find((product) => product.SKU === sku) || null;
  }

  obtenerCarrito() {
    const total = this.products.reduce(
      (acc, product) => acc + product.total,
      0
    );
    return {
      total: total.toFixed(2),
      currency: this.currency,
      products: this.products.filter((product) => product.quantity > 0),
    };
  }
}
