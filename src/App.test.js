// import sumar from "./App.js";
import calcularTotal from "./App.js";
import multiplicar from "./App.js";

// describe("Sumar", () => {
//   it("deberia sumar dos numeros", () => {
//     expect(sumar(3, 2)).toEqual(5);
//   });
// });

// describe("Multiplicar", () => {
//   it("deberia multiplicar dos numeros", () => {
//     expect(multiplicar(3, -2)).toEqual(-6);
//   });
//   it("deberia multiplicar dos numeros", () => {
//     expect(multiplicar(5, 0)).toEqual(0);
//   });
//   it("deberia multiplicar dos numeros", () => {
//     expect(multiplicar(5, 4)).toEqual(20);
//   });
// });
describe("Calcular Total", () =>{
  it("deberia darnos el total", () => {
    expect(calcularTotal(3, 8)).toEqual(2);
  });
});