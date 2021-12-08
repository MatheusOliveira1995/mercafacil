# Processo seletivo para vaga de desenvolvedor fullstack realizado para a empresa Mercafacil ;)


#Requisitos da aplicação frontend:

Desenvolver um SPA utilizando VueJS ou React que usa como backend a API pública em GraphQL que contém dados sobre os personagens e episódios do desenho Rick and Morty.

O SPA deve conter as seguintes funcionalidades funcionalidades:
- Personagens
    - Lista de personagens com busca e ordenação
    - Informação do personagem contendo a localização de origem e os episódios nos quais participou
- Episódios
    - Lista de episódios com busca e ordenação
    - Informação do episódio, contendo o nome, a data de exibição e os personagens que participaram

Recomendado o uso de bibliotecas de components (por exemplo o Vuetify).

Diferenciais:
- O projeto pode conter um Storybook (ou ferramenta equivalente) que expõe os componentes reutilizáveis utilizados durante o desenvolvimento.
- O projeto pode conter testes automatizados.

Links para as APIs e documentações:
https://rickandmortyapi.com/documentation/#graphql
https://rickandmortyapi.com/graphql
https://storybook.js.org/
https://apollo.vuejs.org/


#Requisitos da aplicação backend:

O objetivo deste teste é avaliar seu desempenho em desenvolver uma solução de integração entre sistemas.

O problema consiste em receber 1 ou mais contatos de celulares através de uma API Rest e adicioná-los ao banco de dados do cliente Macapá ou do cliente VareJão.

Fluxo de Ações
- A API receberá um JSON via POST contendo o nome e celular;
- O cliente deverá estar autenticado para inserir o contato na base
- O contato deverá ser inserido no banco de dados do cliente seguindo as regras de cada cliente

Especificações da API:
- A autenticação será através de um token JWT no Authorization Header
- Cada cliente tem 1 uma chave única
- A lista de contatos que será inserido em cada cliente está no arquivo contato.json

Especificações do Cliente Macapá:
- Banco de dados Mysql
- Formato do Nome é somente maiúsculas
- O formato de telefone segue o padrão +55 (41) 93030-6905
- Em anexo está o sql de criação da tabela

Especificações do Cliente VareJão:
- Banco de dados Postgresql
- Formato do Nome é livre
- O formato de telefone segue o padrão 554130306905
- Em anexo está o sql de criação da tabela

A criação de um ambiente de testes usando Docker para simular o banco de dados do cliente é altamente recomendada. A solução poderá ser desenvolvida em Golang ou Node.js. Fique livre para desenhar a solução da maneira que achar mais conveniente e supor qualquer cenário que não foi abordado nas especificações acima. Se, por qualquer motivo, você não consiga completar este teste, recomendamos que nos encaminhe o que foi desenvolvido de qualquer maneira. A falta de cumprimento de alguns dos requisitos aqui descritos não implica necessariamente na desconsideração do candidato.
