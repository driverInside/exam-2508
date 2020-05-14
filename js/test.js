const esPalindromo = require('./index')

describe('Examen. Tests de la función', () => {
  it('esPalindromo debería de estar definido', () => {
    expect(esPalindromo).toBeDefined()
  })

  it('La función debería aceptar una cadena vacía', () => {
    expect(esPalindromo('')).toBe(false)
  })

  it('La función debería de regresar un booleano', () => {
    const result = esPalindromo('foo')
    expect(typeof result).toBe('boolean')    
  })

  it('La función debería de determinar si la cadena recibida es un palíndromo o no', () => {
    expect(esPalindromo('ana')).toBe(true)
    expect(esPalindromo('arroz')).toBe(false)
    expect(esPalindromo('')).toBe(false)
    expect(esPalindromo('()()')).toBe(false)
    expect(esPalindromo('ico')).toBe(false)
    expect(esPalindromo('09890')).toBe(true)
  })
})
