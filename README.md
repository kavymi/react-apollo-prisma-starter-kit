<h1 align="center"><strong>Starter project for Fullstack React Apollo GraphQL with Prisma</strong></h1>

<div align="center"><strong>This starter is extended from [React Full Stack Graphql](https://github.com/graphql-boilerplates/react-fullstack-graphql)</strong></div>

<br />

![](https://imgur.com/ousyQaC.png)

## Features

- **Pre-configured Apollo Client:** The project comes with a preconfigured setup for Apollo Client
- **GraphQL database:** Includes GraphQL database binding to [Prisma](https://www.prismagraphql.com) (running on MySQL)
- **Tooling**: Out-of-the-box support for [GraphQL Playground](https://github.com/prisma/graphql-playground) & [query performance tracing](https://github.com/apollographql/apollo-tracing)

## Requirements

You need to have the [GraphQL CLI](https://github.com/graphql-cli/graphql-cli) installed to bootstrap your GraphQL server using `graphql create`.
You need to have docker installed to deploy the database and the prisma service to docker instances.

```sh
npm i -g graphql-cli
npm i -g docker
```

## Getting started

```sh
# 1. Deploy the docker instances
cd <project folder>
yarn setup

# 2. Navigate into the `server` directory of the new project
cd <project folder>/server

# 3. Start the server
yarn dev # runs server on http://localhost:4000, and opens GraphQL PLayground on http://localhost:5000

# 4. Open a new tab in the terminal and navigate back into my-app;
# then run the app
cd ..
yarn start
```

## Documentation

### Commands

* `yarn start` starts GraphQL server on `http://localhost:4000`
* `yarn dev` starts GraphQL server on `http://localhost:4000` _and_ opens GraphQL Playground on `http://localhost:5000`

| File name 　　　　　　　　　　　　　　| Description 　　　　　　　　<br><br>| 
| :--  | :--         |
| `├── .graphqlconfig.yml` | Configuration file based on [`graphql-config`](https://github.com/prisma/graphql-config) (e.g. used by GraphQL Playground).|
| `└── database ` (_directory_) | _Contains all files that are related to the Prisma database service_ |\
| `　　├── prisma.yml` | The root configuration file for your Prisma database service ([docs](https://www.prismagraphql.com/docs/reference/prisma.yml/overview-and-example-foatho8aip)) |
| `　　└── datamodel.graphql` | Defines your data model (written in [GraphQL SDL](https://blog.graph.cool/graphql-sdl-schema-definition-language-6755bcb9ce51)) |
| `└── src ` (_directory_) | _Contains the source files for your GraphQL server_ |
| `　　├── index.js` | The entry point for your GraphQL server |
| `　　├── schema.graphql` | The **application schema** defining the API exposed to client applications  |
| `　　└── generated` (_directory_) | _Contains generated files_ |
| `　　　　└── prisma.grapghql` | The **Prisma database schema** defining the Prisma GraphQL API  |