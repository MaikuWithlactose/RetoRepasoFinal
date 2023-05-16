import { isEven } from './isEven';
import { add } from './add';

const arrays = [
  ["Casa", "Coche", "Ciudad", "Cesta"],
  ["Barco", "Baca", "Bicicleta", "Balon", "Bisiesto", "Brasil"],
  ["Venezuela", "Veneno", "Voltaje"]
];

arrays.forEach((array) => {
  const total = add(array.join('')).length;
  const result = isEven(total) ? 'par' : 'impar';
  console.log(`La suma de los caracteres de [${array}] es ${result}.`);
});
