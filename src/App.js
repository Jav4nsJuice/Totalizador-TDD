function sumar(a, b) {
  return a + b;
}

function multiplicar(a,b){
  return a * b;
}

function impuestoPorEstado(estado){
  var impuestoEstado = 0;
  switch (estado){
      case "UT":
          impuestoEstado = 0.0665;
          break;
      case "NV":
          impuestoEstado = 0.08;
          break;
      case "TX":
          impuestoEstado = 0.0625;
          break;
      case "AL":
          impuestoEstado = 0.04;
          break;
      default :
          break;
  }
  return impuestoEstado;
}

function calcularTotal(cantidad, precio){
  return cantidad * precio;
}

function calcularTotalConEstado(cantidad, precio, estado){
  var tax = impuestoPorEstado(estado); 
  var total = calcularTotal(cantidad, precio);
  return (total) - (total * tax);
}



// export default sumar;
export default calcularTotalConEstado;
// export {sumar, multiplicar}; 