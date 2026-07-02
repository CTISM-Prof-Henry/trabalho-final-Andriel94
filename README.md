[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/eQknZL50)
# trabalho-final-paginas-web

> [!NOTE]
> Siga para a Seção [Ajuda](AJUDA.md) para visualizar dicas de como baixar os arquivos do GitHub para seu computador e
> enviá-los de volta para o GitHub depois de modificá-los. 

Neste repositório você deve desenvolver o trabalho final da disciplina de **Construção de Páginas Web.**
O objetivo da atividade é desenvolver um pequeno site utilizando **HTML, CSS e JavaScript**, aplicando os conceitos estudados em aula.

O projeto deve ser publicado no **GitHub Pages** e apresentado em aula para o professor.

## 📌 Checklist

* [✅] meu site tem pelo menos um arquivo do tipo `.html` 
* [ ] estou usando CSS externo, em um arquivo separado `.css`
* [✅] estou usando Javascript externo, em um arquivo separado `.js`
* [✅] os arquivos do meu site estão na pasta `site`
* [✅] a pasta `site` tem um arquivo `index.html`, que é a página inicial do meu site; sem esse arquivo, o GitHub Pages 
      não vai funcionar
* [✅] estou ciente que, se eu modificar ou excluir arquivos que não estejam na pasta `site` 
      (por exemplo, `.github` ou `README.md`), isso pode afetar o funcionamento do meu site
* [✅] respondi todas as perguntas e preenchi todos os checkboxes abaixo
* [✅] meu site está hospedado no GitHub Pages, no link `<escreva aqui o link do seu site>`

## 📖 Descrição do projeto

Descreva abaixo **sobre o que se trata seu site:**

- **Tema:**
Tema do site loja de itens personalizados
- **Público-alvo:**
Comunidade Gamer,Nerd em geral mais
voltado para os espectadores do Streamer(Andriel94) 
- **Funcionalidades:**
Animação de compra
animação em destaques da loja

Um carrocel no inicio onde mostra as novidades recentes(com transição suave)
permissão para cookie 
carrinho funcional usando localstorage
descrição ao clicar na imagem de um produto(tendo foto video imagem e adicionar ao carrinho)
Barras de pesquisas funcionais 
barras de pesquisa funcionais de cada categoria(com filtro de preço e teg)

Compra funcional!
## Uso de IA

Se você utilizou uma IA, marque a caixa abaixo e preencha os campos:

* [✅] declaro que utilizei uma IA para me auxiliar na elaboração do trabalho, mas que domino os conceitos vistos em aula
  e saberei explicá-los quando indagado pelo professor.

* **IA utilizada:**
* **Forma de utilização da IA:**
  * [✅] fiz perguntas pontuais à IA, mas eu programei o código do meu site
  * [ ] dei um prompt para a IA, ela me deu um código e eu colei o código nos arquivos do meu site

## 🧩 Componentes HTML utilizados

Marque com `[✅]` os elementos que **foram implementados no seu site**. Você não precisa implementar todos.

### 🏗 HTML

#### Estrutura básica

- [✅] `<!DOCTYPE html>`
- [✅] `<html>`
- [✅] `<head>`
- [✅] `<title>`
- [✅] `<body>`

#### Estrutura semântica

- [ ] `<header>`
- [✅] `<nav>`
- [ ] `<main>`
- [ ] `<section>`
- [ ] `<article>`
- [ ] `<aside>`
- [ ] `<footer>`

#### Conteúdo

- [✅] Títulos (`h1`, `h2`, `h3`, etc.)
- [✅] Parágrafos (`p`)
- [✅] Imagens (`img`)
- [✅] Links (`a`)
- [ ] Listas:
  - [ ] `ul`
  - [ ] `ol`

#### Formulários

- [ ] `<form>`
- [✅] `<input>`
- [✅] `<label>`
- [ ] `<textarea>`
- [✅] `<button>`

### 🎨 CSS

- Seletor de...
  - [✅] Classes (`.classe`)
  - [✅] IDs (`#id`)
  - [✅] pseudoclasse (`#a::hover`)
- [✅] Cores
- [✅] Tipografia (e.g. `font-family`)
- [✅] Margem e padding
- [✅] Layout com `flexbox`
- [ ] Layout com `grid`
- [✅] Responsividade (`media queries`)
- [✅] Animações ou transições

## ⚙️ JavaScript

- [✅] Manipulação do DOM
- [✅] Eventos (`click`, `submit`, etc.)
- [ ] Validação de formulário
- [✅] Alteração dinâmica de conteúdo
- [✅] Uso de funções
- [✅] Uso de arrays ou objetos
- [ ] Uso de `fetch` ou API externa
- [✅] local Storage


## 📂 Estrutura do projeto

Descreva brevemente a organização dos arquivos do seu projeto.

Exemplo:

```
site/
│
├── index.html
│
├── .idea/
│   ├── .gitignore
│   ├── modules.xml
│   ├── untitled1.iml
│   ├── workspace.xml
│   │
│   └── inspectionProfiles/
│       └── Project_Default.xml
│
├── css/
│   └── index.css
│
├── images/
│   ├── Azzylogo1.png
│   ├── Azzylogo2.png
│   ├── Azzylogo3.png
│   ├── cookie.png
│   ├── favicon.png
│   ├── icone.png
│   ├── load_1.png
│   ├── load_2.png
│   ├── redbull_emoji.png
│   │
│   ├── canecasMENU/
│   │   ├── 1AzzyDark.png
│   │   ├── 1AzzyDoctype.png
│   │   ├── 1azzy_longo.png
│   │   ├── 2AzzyDark.png
│   │   ├── 2AzzyDoctype.png
│   │   ├── 2azzy_longo.png
│   │   ├── 3AzzyDark.png
│   │   ├── 3AzzyDoctype.png
│   │   ├── 3azzy_longo.png
│   │   └── 4azzyDoctype.mp4
│   │
│   └── Carrocel/
│       ├── 1.jpg
│       ├── 2.png
│       ├── 3.png
│       ├── 4.png
│       └── azzygit.png
│
├── js/
│   ├── index.js
│   └── products.js
│
└── Pages/
    ├── adesivos.html
    ├── canecas.html
    ├── Carrinho.html
    ├── HomePage.html
    ├── NAVEBARbase.html
    ├── pelucias.html
    ├── pins.html
    ├── roupas.html
    │
    └── Categorias/
```

## 💡 Observações

Utilize este espaço para comentar:

- dificuldades encontradas
Estive bastante dificuldade em Js tentei aplicar o maximo que aprendi nesse meio tempo

Problemas com codigos estremamente quebrados , CSS falando que n estava utilizado removendo 
quebrava outra coisa do site , no final teve muitos alertas """"falso"""" que fizeram eu parar
para resolvelos mas ignorando tudo funcionava , não recomendado mas o site esta ""funcionando""

problemas com caminhos de pastas de arquivos sendo criado a todo instante (resultados de cofigos quebrados)

- decisões de design
Disign foi aparecendo com tempo fui atribuindo de algumas cores da minha OC(Personagem Original)
percebi que vermelho e preto davam um destaque otimo ainda mais em alguma loja mantive fontes grandes
pois são fontes que eu uso do dia a dia em crianção de videos stream thumbs etc.

- melhorias que podem ser feitas no futuro
Bastante coisa a melhorar:
criar uma navbar unica : Com tempo que sobrou percebi que perdi mais tempo resolvendo 
todos bugs de todas Barra de navegação de cada .html do site , criar algo universal seria 
Mais dinamico e leve a cada momento ele analisa o que tem no local storage carrega produtos,
realemten da para perceber esse deley e atraso.

criar um sistema de compra proprio usando Mercado Pago Developers Sistema de compra funcional 
sem depender dos formularios do google que foi um meio de ja deixar o site ativo de forma rapida .

visualisação dos produtos melhores parecem estarem muito afastado 

INDISPENSAVEL:Versão mobile compativel , acaba ficando tudo espremido na tela e como cada navbar é um "parente de outra consertada"
deve gerar muito mais conflitos
