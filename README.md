# LabApp

## Indice

  - [Instalação](#instalação)
  - [Arquitetura do Projeto](#arquitetura-do-projeto)
  - [Documentação](#documentação)
  - [Observações](#obervações)

## Instalação
**Instalar repositório:**
  - Ter docker e docker compose instalado

  1. Acessar o diretório do projeto (labApp)

  2. Executar o comando de instalação 
```bash
$ npm install ou yarn (caso tenha instalado)
```
  3. Executar o comando para subir a aplicação no docker
```bash
$ docker compose up -d
```
  4. Após executar o comando acima, rodar as migrations para criação das tabelas

```bash
$ npm run typeorm migration:run
```

## Arquitetura do Projeto
```
  Projeto desenvolvido em Typescript.
  Foi criado utilizando a Arquitetura SOLID, DOCKER e DOCKER COMPOSE

  - Bibliotecas utilizadas
  . Express
  . TypeOrm
  . Tsyringe
  . Swagger-ui-express
  . etc

  - Banco de dados utilizado
  . Postgres
    
```


## Documentação 

  Documentação realizada com swagger

  http://localhost:3333/api-docs  


## Observações
  Consegui colocar em prática os principais conceitos que aprendi ao longo dos
  meus estudos / experiência com essas tecnologias, além do desafio de ter criado tudo do "zero".
  Não fiz a publicação do projeto em ambiente cloud por ter expirado minha conta (versão gratuita) da AWS, porém, 
  possuo experiência com arquitetura cloud, serverless, criação de lambdas, SQS, SNS, CodePipeline, Codebuild etc.

  Só não criei o endpoint para cadastro / edição / exclusão em lote devido ao tempo. Mas tenho experiência utilizando
  Redis ou até mesmo leitura por stream de algum arquivo .csv etc.

