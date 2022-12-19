# What is Jwc?

Jwc is a JavaScript framework for using JSX to write web components on the web. It builds on the [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components) standard and provides a simple function-based API for writing components.

::: warning
JWC is currently in `alpha`. The API is not stable and may change at any time.
:::

The goal of JWC is to provide a simple, lightweight, and performant way to write web components. It is not a full framework like React or Vue. It is not a library like LitElement or Stencil. It is a framework for writing web components.

## Why Jwc?

Jwc supports the following features:

- Function-based API <Badge text="Not yet implemented" type="danger"/>
- JSX
- TypeScript
- Web Components

If you are looking for a way to build web components, Jwc is a great choice. You just need some basic knowledge of JavaScript and JSX. You don't need to learn a new templating language.

You have two choices for writing web components: **Class-based** or **function-based**: 

::: code-group
```js [Class Based]
import { JwcComponent, Component, h, Props } from "@jwcjs/core";
import style from './App.css?inline'

@Component({ name: "app-element" })
export class App extends JwcComponent {
  override render() {
    return (
      <div>
        <h1>Hello World</h1>
        <span>{this.hello}</span>
      </div>
    )
  }
}
// <app-element hello="Hello !!!"></app-element>
```

```js [Function Based <Badge text="Not yet implemented" type="danger"/>]
// no yet implemented
```
:::

## Why Web Components?

Web Components are a set of standards that allow you to write custom HTML elements. They are a native browser feature that is supported by all modern browsers. They are the future of the web.

Web Components are a great way to write reusable components. They are a standard that is not tied to any framework. They can be used in any framework or without a framework at all.