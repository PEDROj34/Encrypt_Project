# Segurança Informática - Trabalho de Avaliação Continua

## O projeto está em live [aqui](https://anonops-si.vercel.app).

## Instalação de Dependências

Rodar o comando `yarn` no terminal.

> YARN é um gestor de pacotes, mais informações: https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable

## Correr o projeto localmente

Rodar o comando `yarn dev` no terminal e abrir o browser em http://localhost:5173

## A Começar

- Ao abrir o site, podemos ver a página inicial com o logótipo da AnonOPS.
- Depois escolhemos o tipo de encriptação que queremos nomeadamente texto, imagens e ficheiros.
- Quando selecionado qualquer encriptação em cima, há uma barra de navegação para aceder a outras encriptações.

### Chave e vetor inicial

- Tanto a chave quanto o vetor inicial são estáticos!

### Encriptação

##### Texto

1. Escrever o texto no bloco da esquerda.
2. Clicar no botão abaixo para proceder á encriptação.
3. O texto encriptado vai aparecer no bloco da direita.

##### Imagem

1. Clicar na área designada para o input da imagem.
2. Proceder á seleção da imagem(apenas aceita imagens).
3. Clicar no botão para encriptar e fazer o download da imagem encriptada.
4. Realizar o mesmo procedimento para a desencriptação.

##### Ficheiro

1. Clicar na área designada para o input do ficheiro.
2. Proceder á seleção do ficheiro.
3. Clicar no botão para encriptar e fazer download do ficheiro encriptado.
4. Realizar o mesmo procedimento para a desencriptação.

## Falhas

- Não coloquei a chave secreta á escolha do utilizador e como referi em cima é uma chave estática.

#### Tecnologias usadas

- [x] [Vite.js](https://vitejs.dev)