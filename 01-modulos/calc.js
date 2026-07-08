// Usando CommonJS, você pode importar a função assim:

var somaFunc = require("./soma.js") // O require importa a função soma do arquivo soma.js
var subFunc = require("./sub.js") // O require importa a função sub do arquivo sub.js
var multFunc = require("./mult.js") // O require importa a função mult do arquivo mult.js
var divFunc = require("./div.js") // O require importa a função div do arquivo div.js

console.log(somaFunc(2,5));
console.log(subFunc(2,5));
console.log(multFunc(2,5));
console.log(divFunc(10,5));

/* Se for usando ES Modules, você pode importar a função assim:

import { soma } from './soma.js';  --> Uma forma de importar a função soma
'import soma from './soma.js';  --> Outra forma de importar a função soma
*/