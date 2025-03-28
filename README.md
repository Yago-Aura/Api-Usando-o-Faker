# Api-Usando-o-Faker

Este projeto é um aplicativo React Native que exibe uma lista de usuários gerados aleatoriamente. Os dados são armazenados em um servidor JSON local e podem ser editados diretamente no app.

Requisitos

Antes de rodar o projeto, certifique-se de ter instalado:

Node.js

Expo CLI

JSON Server

Instalação

Clone este repositório:

git clone https://github.com/Yago-Aura/Api_Fetch.git
cd Api_Fetch

Instale as dependências do projeto:

npm install

Gerando Dados com Faker.js

Instale o Faker.js e o Lodash:

npm install @faker-js/faker lodash

Execute o script para gerar dados simulados:

node generateData.js

O script utiliza Faker.js para criar usuários fictícios com nomes, avatares, endereços e e-mails.

Rodando o Servidor JSON

Inicie o JSON Server:

npx json-server --watch db.json --port 3000

Se estiver rodando em um dispositivo físico, substitua localhost pelo IP da sua máquina no código.

Rodando o App

Inicie o Expo:

npx expo start

Escolha uma das opções:

Emulador Android: Pressione a

Emulador iOS (Mac apenas): Pressione i

Celular físico: Leia o QR Code no Expo Go

Estrutura do Projeto

Api_Fetch/
├── App.js              # Componente principal do React Native
├── UserList.js         # Tela que exibe a lista de usuários
├── UserDetail.js       # Tela de detalhes e edição de um usuário
├── generateData.js     # Script para gerar dados simulados
├── db.json             # Banco de dados local gerado pelo JSON Server
├── package.json        # Dependências do projeto

Funcionalidades

Exibição de uma lista de usuários com imagens e detalhes

Atualização dos dados dos usuários diretamente no app

Interface responsiva com suporte a temas escuros

Tecnologias Utilizadas

React Native (Expo)

React Navigation para navegação

Axios para consumir a API

JSON Server para simular um backend

Faker.js para gerar dados aleatórios

Lodash para manipulação de listas

Autor

Criado por Yago-Aura.

