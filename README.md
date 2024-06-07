# GERADOR DE SEQUÊNCIAS DE CORES ALEATÓRIAS

Este é um gerador feito em Node.js que utiliza uma base com pesos predefinidos para cada cor, gerando sequências e as salvando em um arquivo .txt chamado "resultado".

## Requisitos

- Node.js

## Instalação

Para utilizar este gerador, siga estas etapas:

1. Certifique-se de ter o Node.js instalado em seu sistema.
2. Baixe este gerador para o seu ambiente de trabalho ou diretório de sua preferência.
3. Abra um terminal e navegue até o diretório onde o gerador está localizado.
4. Execute o gerador digitando no terminal: `node geradordesequencias.js`

## Descrição do Código

- **Módulo fs:** Utilizado para trabalhar com arquivos no sistema de arquivos.
- **Variável Cores:** Define as cores disponíveis e seus respectivos pesos.
- **Variável Peso Total:** Calcula o peso total somando os pesos de cada cor.
- **Função corAleatoria():** Retorna uma cor aleatória com base nos pesos definidos.
- **Função sequencia():** Gera uma sequência de 4 cores aleatórias.
- **Função sequencias(num):** Gera várias sequências de um número específico.
- **Função salvarSequenciasNoArquivo(sequencias, nomeArquivo):** Salva as sequências geradas em um arquivo.
- **Função contarCores(nomeArquivo):** Conta quantas vezes cada cor aparece nas sequências salvas no arquivo.
- **Execução Principal:** Gera 1000 sequências, salva essas sequências no arquivo 'resultado.txt' e conta quantas vezes cada cor aparece no arquivo.

## Versão

Versão 1.0

## Autor

Luís Gustavo Maia

GitHub: [lulmaia](https://github.com/lulmaia)