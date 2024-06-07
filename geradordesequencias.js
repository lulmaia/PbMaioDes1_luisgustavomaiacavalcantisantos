const fs = require('fs'); // Módulo fs para trabalhar com arquivos

// Variável fixa para leitura dos pesos
const cores = [
  { cor: 'verde', peso: 1 },
  { cor: 'azul', peso: 2 },
  { cor: 'amarelo', peso: 3 },
  { cor: 'vermelho', peso: 5 },
];

// Variável para calcular o peso total somando os pesos de cada cor
let pesoTotal = 0;
for (const { peso } of cores) {
    pesoTotal += peso;
}

// Função para obter uma cor aleatória, considerando os pesos
function corAleatoria() {
  let aleatorio = Math.random() * pesoTotal; // Chamando função Math.random para retornar um número aléatorio.
  for (const { cor, peso } of cores) {
    if ((aleatorio -= peso) < 0) {
      return cor;
    }
  }
}

// Função para gerar uma sequência de 4 cores aleatórias
function sequencia() {
    const sequencia = [];
    for (let i = 0; i < 4; i++) {
      sequencia.push(corAleatoria());
    }
    return sequencia.join(',');
  }

// Função para gerar várias sequências de um número específico
function sequencias(num) {
    const sequenciasGeradas = [];
    for (let i = 0; i < num; i++) {
      sequenciasGeradas.push(sequencia());
    }
    return sequenciasGeradas;
  }

// Função para salvar as sequências geradas em um arquivo
function salvarSequenciasNoArquivo(sequencias, nomeArquivo) {
    const data = sequencias.join('\n');
    fs.writeFileSync(nomeArquivo, data, 'utf8');
  }

// Função para contar quantas vezes cada cor aparece nas sequências salvas no arquivo
function contarCores(nomeArquivo) {
  const dados = fs.readFileSync(nomeArquivo, 'utf8');
  const contagemCores = { verde: 0, azul: 0, amarelo: 0, vermelho: 0 };
// Itera e verificação
  for (const linha of dados.split('\n')) {
    for (const cor of linha.split(',')) {
      if (cor) { // Ignorar entradas vazias
        if (contagemCores.hasOwnProperty(cor)) {
          contagemCores[cor]++;
        }
      }
    }
  }

  console.log(contagemCores);
}

// Execução principal
const sequenciasGeradas = sequencias(1000); // Gera 1000 sequências
salvarSequenciasNoArquivo(sequenciasGeradas, 'resultado.txt'); // Salva as sequências no arquivo 'resultado.txt'
contarCores('resultado.txt'); // Conta e exibe quantas vezes cada cor aparece no arquivo
