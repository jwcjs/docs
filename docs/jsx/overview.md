# Overview

JSX is a syntax extension to JavaScript. It was developed by Facebook to improve the development experience of writing JavaScript code for React applications. It is similar to a template language, but it has full power of JavaScript.

::: warning
You might think that HTML is very similar to JSX, but the key difference is that JSX has full power of JavaScript. Also, JSX syntax is different from HTML syntax, so you can't just drop JSX into a HTML file and expect it to work.

You can see how to convert HTML to JSX in the [Converting HTML to JSX](./writing-jsx.md#converting-html-to-jsx) section of the [Writing JSX](./writing-jsx.md) page. It also describes how to convert JSX back to HTML.
:::

JSX is not a requirement for using React, but it is a common way to describe what the UI should look like. JSX may remind you of a template language, but it comes with the full power of JavaScript.

## JSX Demo

JSX is not a separate programming language, but rather a syntax extension for JavaScript. This means that you can use JSX within your JavaScript code, just like you would use any other JavaScript expression.

JSX uses angle brackets (`< >`) to enclose HTML-like tags, which can contain attributes and children. For example, you can use JSX to create a simple component like this:

```js
const element = <h1>Hello, world!</h1>;
```

JSX tags may contain children:

```js
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);
```

JSX tags may contain expressions:

```js
const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;
```