# Modern JS: To-Do Sample

A simple To-Do application written in modern, vanilla JS.

## Prerequisites

### 1. Install `http-server`

```cmd
npm install http-server -g
```

### 2. Install the latest Chrome version

If Chrome is already installed, just update it to the latest version.

## Running the application

### 1. Start the server

```cmd
server
```

If using PowerShell:
```
.\server
```

### 2. Navigate to [http://localhost:4000](http://localhost:4000)

## Possible improvements

### Use templates

One way to improve our maintenance of the HTML markup for each component is to use _templates_.

[Mustache](https://github.com/janl/mustache.js) is a small templating library we could utilize instead of manually building our HTML (`document.createElement()`).

> Obviously, if we do this, it's not "Vanilla JS" anymore.

> There is an available CDN link (so we don't have to use NPM or Webpack):
> [https://cdnjs.com/libraries/mustache.js/](https://cdnjs.com/libraries/mustache.js/)

### Use Sass

Currently, our CSS is written in [BEM](http://getbem.com/). It looks unwieldy to write in pure CSS. However, it shines when you use Sass (or any other CSS language extension).

It allows us to structure our CSS in a DRY way and also be able to bundle them into a single CSS file.

More info: [Sass: CSS with superpowers](https://sass-lang.com/)

### Use React

Well, this is not really an improvement of the code base but more of an improvement in how we write web apps.

The ideas used in creating this app was inspired by how code is structured and organized in React: as _Components_. Writing code by building on top of modular pieces has been a staple of writing complex programs, however, for web pages, we tend to think of them as whole pages rather than individual components making up the page. React allows us to use the same modular thinking in writing web UI.

Performance is another key feature of React. As you may have noticed, we completely discard the To-Do items list whenever we make changes in the data. For our small app, this is not an issue, but if we use the same method in updating a large app with multiple visual components, and hundreds of rows of data, it will slow down to a crawl. React solves this by just updating the affected components. It does this by maintaining its own copy of the DOM called _Virtual DOM_. It first applies the changes to the _Virtual DOM_ then compares it to the actual DOM. It searches for the differences, and then only applies the differences to the DOM.

More info: [React](https://reactjs.org/)
