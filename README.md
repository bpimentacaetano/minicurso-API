# Skeleton project for Swagger


# Comandos utilizadaos no minicurso:

# API node swagger

#### Baixar e Instalar o  Nodejs:

`<link>` : <https://nodejs.org/en/download/>

#### Instalar o swagger

`$ npm install -g swagger`

#### Criar projeto
`$ swagger project create curso-api`

#### Add documentação automática
`$ npm i swagger-ui-express --save`

#### Ajustar código da API
##### app.js
```javascript
const swaggerUi = require('swagger-ui-express');

const swaggerUiMiddleware = swaggerUi.setup(
    swaggerExpress.runner.swagger
  );

app.use('/api-docs', swaggerUi.serve, swaggerUiMiddleware);
```

# Adicionando o ORM Sequelize:

#### Instalação dos pacotes

`$ npm i sequelize sequelize-cli --save`

#### Criação dos arquivos de configuração do Sequelize no código do projeto
`$ npx sequelize-cli init`

#### Criação automática de models
`$ npx sequelize-cli model:generate --name rna --attributes id:integer,upi:string,timestamp:date,userstamp:string,crc64:string,len:integer,seq_short:string,seq_long:string,md5:string`
