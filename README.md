# SPA ANGULAR – FUTEBOL

Este projeto foi desenvolvido como parte do aprimoramento nos estudos de Angular no Bootcamp Avanade Angular Developer da Digital Innovation One

Este projeto foi gerado utilizando a versão Angular CLI 11.2.5

Node versão 14.16.0

Sistema operacional: Windows 10 64 bits

 

No site: ( https://angular.io/ ): Tutoriais, Dicas, Ferramentas do Angular, Melhores Práticas, entre outros...

No site: ( https://angular.io/guide/setup-local ): instruções para configuração de seu ambiente, utilizando o Angular CLI. 

 

Instalação do Node ( https://nodejs.org/en/ )

·     node –v (versão instalada)

 Instalação do Angular CLI

·     npm install –g @angular/cli (necessário para realizar o build da nossa aplicação, criando componentes, diretivas, pipes)

·     ng v (visualizando a versão do Angular que foi instalada)

 

### Criando um novo projeto

 Abra o terminal no modo administrador
 
 ng new nomedoprojeto --prefix-spa

 **Would you like to add Angular Routing?** Ao responder “Yes" ele cria um arquivo de rota em nossa aplicação.

**Which stylesheet format would you like to use?** CSS

**cd nomedoprojeto**: navegue até a pasta do projeto

**ng serve --o**: Comando para iniciar o servidor. A cada mudança nos arquivos, ele reconstrói “rebuild” a aplicação

 No navegador, caso não abra automático, abra uma nova aba e digite**: http://localhost:4200/**

 Para parar a aplicação: CTRL + C à Yes

 Para criarmos componente, iremos utilizar o comando abaixo:

**ng g c home** (g = generate / c = component / home = nome do nosso componente.
