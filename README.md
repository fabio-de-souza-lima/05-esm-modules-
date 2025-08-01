# 📦 Projeto: 05-esm-modules

Este projeto é parte do meu aprendizado de JavaScript utilizando **ECMAScript Modules (ESM)**. Aqui, explorei diferentes formas de importar e exportar módulos em JavaScript moderno, com foco em modularização e organização de código.

## 🔍 Objetivo

Demonstrar o uso de módulos ESM no Node.js com diferentes formas de importação/exportação, além de simular uma conexão com banco de dados e requisições a uma API.

---

## 🧠 Conceitos Abordados

### 📁 Estrutura de Importação

1. **Importação Individual:**
   ```js
   import connectToDatabase from "./utils/database.js";
Utiliza apenas uma função específica do arquivo.

Importação de Tudo:
import * as database from './utils/database.js';

Desestruturação Direta (Forma Moderna):
import { disconnectToDatabase ,databaseType } from "./utils/database.js";
import { getDataFromApi } from "./utils/api.js";

📂 Estrutura de Pastas
05-esm-modules/
│
├── package.json
└── src/
    ├── main.js
    └── utils/
        ├── database.js
        └── api.js
        
⚙️ Funcionalidades
database.js
Simula conexão e desconexão com banco de dados:
export async function connectToDatabase(dataName) {
  console.log(`conectado ao banco de dados ${dataName}`);
}

export async function disconnectToDatabase(dataName) {
  console.log(`desconectado do banco de dados ${dataName}`);
}

export const databaseType = {
  userType: "admin",
  typeData: "datalocal",
};

api.js
Simula busca de dados de uma API:
export const getDataFromApi = () => {
  console.log("dados da api sendo buscados...");
};

📝 package.json
Define o projeto como um módulo:
{
  "name": "05-esm-modules",
  "version": "1.0.0",
  "type": "module"
}

🚀 Como Executar
Clone o repositório:
git clone https://github.com/fabio-de-souza-lima/05-esm-modules.git

Navegue até a pasta do projeto:
cd 05-esm-modules/src

Execute o projeto:
node src/main.js

📚 Aprendizado
Neste projeto, pratiquei:

Criação de módulos JavaScript usando export e import

Modularização do código

Simulação de banco de dados e requisições API

Utilização do "type": "module" no package.json

👨‍💻 Autor
Fabio de Souza Lima
