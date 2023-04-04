const num = parseInt(prompt("Escolha e digite um numero inteiro:"));

const raizQuadrada = Math.sqrt(num);
const raizCubica = Math.cbrt(num);
const potencia = Math.pow(num, 2);

alert(`A raiz quadrada de ${num}: ${raizQuadrada}\nA raiz cubica de ${num}: ${raizCubica}\n${num} A potência do número é: ${potencia}`);