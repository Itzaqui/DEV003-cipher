import cipher from "./cipher.js";

document.getElementById("mensaje").addEventListener("keyup", mayuscula);
function mayuscula() {
  const strg = document.getElementById("mensaje");
  strg.value = strg.value.toUpperCase();
}
document.getElementById("cifrar").addEventListener("click", function () {
  const box1 = document.getElementById("mensaje").value;
  const shift = parseInt(document.getElementById("desplaz").value);
  const result = cipher.encode(shift, box1);
  document.getElementById("respuesta").value = result;
});

document.getElementById("descifrar").addEventListener("click", function () {
  const box2 = document.getElementById("mensaje").value;
  const shift2 = parseInt(document.getElementById("desplaz").value);
  const result2 = cipher.decode(shift2, box2);
  document.getElementById("respuesta").value = result2;
});

//console.log(cipher)
