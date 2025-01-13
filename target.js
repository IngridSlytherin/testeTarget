// Bloco 1: Soma dos números de 1 a 13
function calcularSoma() {
   let INDICE = 13, SOMA = 0, K = 0;

   // Loop que soma números de 1 até o valor do INDICE
   while (K < INDICE) {
       K += 1; // Incrementa K
       SOMA += K; // Soma o valor de K à variável SOMA
   }

   console.log("Bloco 1 - Soma:", SOMA);
}

// Bloco 2: Verifica se um número pertence à sequência de Fibonacci
function verificarFibonacci(number) {
   let a = 0, b = 1;

   // Gera a sequência até que o valor b seja maior ou igual ao número informado
   while (b < number) {
       let temp = b;
       b = a + b; // Atualiza b com a soma de a e b
       a = temp;  // Atualiza a com o valor anterior de b
   }

   // Verifica se o número pertence à sequência de Fibonacci
   const pertence = b === number || number === 0;
   console.log(`Bloco 2 - O número ${number} pertence à sequência de Fibonacci? ${pertence}`);
}

// Bloco 3: Processa o faturamento diário e calcula valores estatísticos
function processarFaturamentoDiario(faturamento) {
   // Filtra valores acima de 0 e cria um array com os valores de faturamento
   const valores = faturamento.filter(d => d.valor > 0).map(d => d.valor);

   // Calcula o menor, maior e média do faturamento
   const menor = Math.min(...valores);
   const maior = Math.max(...valores);
   const media = valores.reduce((acc, val) => acc + val, 0) / valores.length;

   // Conta os dias em que o faturamento foi maior que a média
   const diasAcimaMedia = valores.filter(v => v > media).length;

   console.log("Bloco 3 - Faturamento Diário:");
   console.log({ menor, maior, diasAcimaMedia });
}

// Bloco 4: Calcula o percentual de faturamento por estado
function calcularPercentualPorEstado(faturamentoMensal) {
   // Calcula o total do faturamento mensal
   const total = Object.values(faturamentoMensal).reduce((acc, val) => acc + val, 0);

   // Calcula o percentual de cada estado em relação ao total
   const percentuais = Object.entries(faturamentoMensal).map(([estado, valor]) => ({
       estado,
       percentual: ((valor / total) * 100).toFixed(2)
   }));

   console.log("Bloco 4 - Percentual por Estado:", percentuais);
}

// Bloco 5: Inverte uma string
function inverterString(str) {
   let invertida = "";

   // Loop que percorre a string de trás para frente e cria a string invertida
   for (let i = str.length - 1; i >= 0; i--) {
       invertida += str[i];
   }

   console.log(`Bloco 5 - String invertida: ${invertida}`);
}

// Execução das funções

// Bloco 1
calcularSoma();

// Bloco 2
verificarFibonacci(21);

// Bloco 3
processarFaturamentoDiario([
   { dia: 1, valor: 221.5 },
   { dia: 2, valor: 173.3 },
   { dia: 3, valor: 0 },
   { dia: 4, valor: 245.0 },
   { dia: 5, valor: 0 },
   { dia: 6, valor: 0 },
   { dia: 7, valor: 198.7 }
]);

// Bloco 4
calcularPercentualPorEstado({
   SP: 67836.43,
   RJ: 36678.66,
   MG: 29229.88,
   ES: 27165.48,
   Outros: 19849.53
});

// Bloco 5
inverterString("javascript");

/* 
Para rodar o código:
1. Certifique-se de que o Node.js está instalado.
2. Salve este arquivo como `target.js`.
3. Navegue até a pasta do arquivo no terminal.
4. Execute o comando: `node target.js`.
*/
