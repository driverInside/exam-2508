/**
 * index.js
 * 
 * Instrucciones: escribir una función que reciba una cadena y 
 * determine si esta es un palíndromo o no.
 * 
 * Consideraciones: 
 * 
 * - La función debería de regresar un valor booleano
 * - La función puede recibir una cadena vacía
 * 
 * 
 * Ejemplos:
 * 
 * esPalindromo('ana') // true
 * esPalindromo('aabbcc') // false
 * esPalindromo('()()') // false
 * esPalindromo('arroz') // false
 * esPalindromo('') // false
 * 
 * 
 */

function esPalindromo(str) {
  if (str === '') { // O(1)
    return false
  }
  
  for (let i = 0, j = str.length -1; i < str.length / 2; i++, j--) {
    if (str[i] !== str[j]) {
      return false
    } // o(1)
  } // o(n/2) * O(1) = O(n/2)

  return true
} // O(1) + O(n/2) -> 1/2 * O(n)

module.exports = esPalindromo
