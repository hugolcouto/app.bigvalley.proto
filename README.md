# app.bigvalley.proto

Desenvolvimento do site da comunidade Big Valley


## Descrição
O projeto do site Big Valley visa focar em algumas premissas, como:
* SEO
* Acessibilidade
* Velocidade
* Tecnologia
* Simplicidade

Trata-se de um site simples com foco no conteúdo.

Desenvolvido utilizando a tecnologia Nuxt JS (Vue) para renderização em servidor (Server Side Rendering, SSR), que une velocidade e ótimo score em benchmarks como Google Light House, por exemplo, ajudando no ranking do SEO, além de ser uma tecnologia mais moderna.

<hr />

## Instruções

Após a clonagem do repositório, o projeto deverá ser instalado utilizando o comando ```yarn install``` ou ```npm install```.

O front deverá ser iniciado com o comando ```yarn dev``` ou ```npm run dev```.

Para utilizar o mockup da api do Sympla, que utiliza dados fictícios da API de eventos (localizdos no arquivo ```mock/sympla.json```), deverá instalar o pacote global Json Server utilizando o comando ```yarn add global json-server``` ou ```npm i -g json-server```. Após sua instalação, rodar o comando ```yarn db:sympla``` ou ```npm run db:sympla```. O serviço será iniciado na porta 2112.
