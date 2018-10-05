# Folha de respostas

## Javascript Questão 2:

### a) No import da api do google maps no index.html, para que servem as tags async e defer?
R: A tag async permite que o browser renderize a página enquanto a API é carregada.
Para navegadores que não permitem o async, o defer é utilizado para carregar
a API em paralelo com a renderização da página.

### b) Para que serve o parâmetro &callback=initMap na url da api do google maps?
R: Assim que a API for carregada e estiver pronta, a função initMap do script será chamada.

### c) O que acontece quando removemos o parâmetro &callback=initMap da url da api do google maps? Explique o porque.
R: A função initMap insere o mapa da API na tag div com id=map, entretanto se o parâmetro &callback=initMap
for removido, a função nunca será chamada e o mapa não irá aparecer no browser.

### d) Descreva pelo menos uma forma de como podemos fazer com que a aplicação funcione corretamente mesmo sem este parâmetro.
R: Uma forma é remover as tags async e defer do <script> e inserir uma chamada da função initMap() dentro do arquivo index.js.

### e) Explique para que servem as seguintes tags do index.html: 
  `<link rel="manifest" href="manifest.json">
  <meta name="theme-color" content="">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black">`

R: Essas tags servem para informar o navegador de um PC ou celular
sobre o aplicativo que está sendo executado.
Neste caso há informações sobre a inicialização do visual do aplicativo
e que será exibido em tela cheia, sem a barra de endereço e a barra de navegação.

### f) Está aplicação pode ser considerada um PWA? Em caso negativo, explique o que falta para que seja.
R: A aplicação possui um manifesto web que é obrigatório para ser um PWA, é cross-browser,
cada página tem sua URL e parece carregar rápido em 3G.

## Angular Questão 4:

### a) Para que serve o método ngOnInit, quais são os outros métodos do Angular lifecycle hooks e para que servem?
R:

### b) Neste projeto, estamos usando os componentes gráficos da versão 4 da biblioteca gráfica do Ionic. Nesta versão, os componentes são Web Components. Explique o que são Web Components e explique quais são as vantagens deles.
R: 

### c) Para que serve a tag ngFor do angular?
R:


### d) O que o codigo abaixo representa no arquivo list.page.ts?
`legends: Array<string> = []`
R

### e) Como funciona a api Events do Ionic? Para que serve?
R: 

### f) O que é flexbox? Para que servem as tags ion-grid, ion-row, ion-col? Quais as vantagens em utilizálas?
R: 

## Angular Questão 6:

### a) Quais foram os problemas que você identificou?
R:

### b) Ordene os problemas por ordem de criticidade, ou seja, liste todos os problemas encontrados na ordem de quais deveriam ser corrigidos primeiro em um cenário onde devessemos priorizar as correções.
R:

### c) Justifique a ordem proposta no item anterior em termos de impacto para os usuários e dificuldade para corrigir o problema.
R: 

### d) Para que servem os comandos async e await, encontrados na função presentLoading do arquivo home.page.ts?
R:

### f) Quais as vantagens de utilizar async/await em códigos javascript/typescript?
R: