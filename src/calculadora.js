function calcularTotal(precio, cantidad) {
  return precio * cantidad;
}

function aplicarDescuento(monto, porcentaje) {
  // Se calcula el descuento como porcentaje del monto.
  return monto - (monto * porcentaje) / 100;
}

module.exports = {
  calcularTotal,
  aplicarDescuento
};
