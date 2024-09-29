var cantidad = 1;
var precioProducto = 400000;
var Total = cantidad * precioProducto;
var precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precioProducto;

var PrecioSpan = document.querySelector(".valor-total");
PrecioSpan.innerHTML = Total;

var CantidadSpan = document.querySelector(".cantidad");
CantidadSpan.innerHTML = cantidad;

var BotonSumar = document.querySelector("#Sumar");
var BotonRestar = document.querySelector("#Restar");

BotonSumar.addEventListener("click", function () {
  cantidad = cantidad + 1;
  Total = cantidad * precioProducto;
  CantidadSpan.innerHTML = cantidad;
  PrecioSpan.innerHTML = Total;
});

BotonRestar.addEventListener("click", function () {
  Total = cantidad * precioProducto;
  cantidad = cantidad - 1;
  CantidadSpan.innerHTML = cantidad;
  PrecioSpan.innerHTML = Total;
});
