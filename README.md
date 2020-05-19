# Examen Parcial - 2508

Examen parcial para el grupo 2508 de la materia de Análisis y diseño de algoritmos.

## Index

* [Getting Started](#Getting-Started)
    * [Prerequisites](#Prerequisites)
* [First part](#First-part)
* [Second part](#Second-part)
    * [Running the tests](#Running-the-tests)


## Getting Started

El examen constará de dos partes: una teórica y una práctica.

La parte teórica constará de 3 preguntas y representará el 20% de la calificación total.

La parte práctica constará de un ejercicio, ya sea en javascript o en python y representaría el 60% de la calificación total.

### Prerequisites

Para poder ejecutar los scripts de la parte práctica, se requiere que se tenga instalada una versión de `Python` mayor o igual a la 3.7 o una versión de `Node` mayor o igual a la 10.16.3.

Para instalar `Node` puedes seguir [estas instrucciones](https://github.com/nvm-sh/nvm#installing-and-updating) para instalarlo en un ambiente GNU/Linux o en MacOS.
Para instalar la última versión estable (recomendado) en un ambiente Windows, puedes descargarlo desde este [otro enlace](https://nodejs.org/en/).

Una vez instalado, debes instalar el paquete llamado `Jest` para correr las pruebas. Con el siguiente comando se instalará de manera global.

```bash
$ npm i -g jest
```

Para instalar `Python` en Windows, puedes descargarlo desde [este enlace](https://www.python.org/downloads/windows/).

La mayoría de las versiones más actuales de MacOS y de GNU/Linux ya cuentan con una versión de `Python` por defecto; puedes verificar qué versión tienes instalada con el siguiente comando:

```bash
$ python --version 
```

o bien:

```bash
$ python3 --version 
Python 3.7.6
```

Debido a que es necesario clonar este repositorio en tu computadora, es necesario que se tenga instalado `git`. Se puede descargar desde [este enlace](https://git-scm.com/).

Una vez instalado, se debe proceder a descargar este repositorio:

```bash
$ git clone git@github.com:driverInside/exam-2508.git
```

Esto creará una carpeta llamada `exam-2508`.

## First part

La parte teórica del examen constará de 3 preguntas que se deberán responder y desarrollar según corresponda.

Dichas preguntas se encuentran en el archivo `questions.txt`.

## Second part

La parte práctica del examen consta de diseñar una solución e implementarla dentro de un programa así como el cálculo de su complejidad en función al tiempo que tarda (teórico) en ejecutar la tarea específica.

Para considerar la solución propuesta como funcional y así poder acreditar satisfactoriamente esta parte del examen, se deben de pasar todas las pruebas que se aplicarán al programa así como el **análisis del algoritmo implementado** debidamente desarrollado parte por parte y luego simplificado (si es que aplica); **dicho análisis deberá ser agregado dentro del código como comentarios**; además se deben incluir diagrama de flujo y pseudocódigo.

**Se considerarán respuestas parciales** y la calificación sera calculada de la siguiente forma:

```
Cp = (Ta * 0.8) + (Aa * 0.2)
```

Donde: 
* Cp = Calificación parte teórica.
* Ta = Test aprobados.
* Aa = Análisis del algoritmo.

Se puede optar por codificar el algoritmo que resuelve el problema en dos lenguajes: `Javascript` o `Python`.

Instrucciones para `Javascript`:

Se debe de navegar hasta la carpeta que se crea al clonar el repositorio y una vez dentro, hacia la carpeta llamada `js`:

```bash
$ cd exam-2508
$ cd js
```

Las instrucciones del problema a resolver se encuentran en el archivo `index.js` y la solución propuesta deberá ser implementada ahí.

```js
/**
 * index.js
 * 
 * Instrucciones: escribir una función ...
 * 
 * Consideraciones:
 * - 
 * - 
 * - 
 * Ejemplos:
 * 
 * foo('x') // -> 'x'
 */

/**
 * foo
 * @param {String} x - Lorem ipsum
 * @returns {Integer} - Foo bar
 */
function foo(x) {
  //
} // O(n)

module.exports = reverseInt
```

En el archivo `test.js` se encuentran las pruebas que se ejecutarán al código implementado en en archivo correspondiente:

```js
const foo = require('./index')

describe('Examen. ......', () => {
  it('La función debería de estar definida', () => {
    expect(foo).toBeDefined()
  })

  // ...
})

```

Instrucciones para `Python`:

### Running the tests

Instrucciones para `Node`:

Una vez clonado el repositorio, se debe ingresar a la carpeta creada y después a la carpeta llamada `js` desde una terminal:

```bash
$ cd exam-2508
$ cd js
```

Una vez dentro, se podrán observar dos archivos; uno llamado `index.js` y otro con el nombre `test.js`:

```bash
$ ls
index.js  package.json  test.js
```

Luego:

```bash
$ jest test.js --watch
```

La opción `--watch` correrá los tests cada vez que se guarde un nuevo cambio realizado en el archivo `index.js`.

Instrucciones para `Python`:

Ingresar al directorio `python`:

```bash
$ cd exam-2508
$ cd python
```

Para correr los tests, se ejecuta:

```bash
$ python3 tests.js

..
----------------------------------------------------------------------
Ran 2 tests in 0.000s

OK
```
