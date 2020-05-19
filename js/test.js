const divideArreglo = require('./index')

describe('Examen: Función divideArreglo', () => {
  it('Debería de dividir un arreglo de 10 elementos en subarreglos de 2 de longitud', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const result = divideArreglo(arr, 2);

    expect(result).toEqual([[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]])
  })

  it('Debería de dividir el arreglo en subarreglos de 1', () => {
    const arr = [1, 2, 3];
    const result = divideArreglo(arr, 1);

    expect(result).toEqual([[1], [2], [3]])
  })

  it('Debería dividir el arreglo en subarreglos de 3', () => {
    const arr = [1, 2, 3, 4, 5]
    const result = divideArreglo(arr, 3)
  
    expect(result).toEqual([[1, 2, 3], [4, 5]])
  })
  
  it('Debería de dividir el arreglo en subarreglos de 5', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    const result = divideArreglo(arr, 5)
  
    expect(result).toEqual([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13]])
  })

  it('Debería de dividir el arreglo en subarreglos de 10', () => {
    const arr = [1, 2, 3, 4, 5]
    const result = divideArreglo(arr, 10)
  
    expect(result).toEqual([[ 1, 2, 3, 4, 5]])
  })
})