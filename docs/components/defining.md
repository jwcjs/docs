# Defining a Component

Define a Jwc component by creating a class that extends `JwcComponent` or a function that returns a `JSX Element`.

::: code-group

```tsx [Class Based]
@JwcComponent({ name: "app-element" })
export class App extends JwcComponent {
  /* ... */
}
```

```js [Function Based <Badge text="Not yet implemented" type="danger"/>]
// no yet implemented
```

:::

## Class Based

The `@JwcComponent` decorator is used to define a Jwc component. It takes an object with the following properties:

- `name` - The name of the component. This is used to identify the component in the DOM. It must be unique.
- [`css`](./styles.md) - The CSS to be applied to the component. The CSS is applied to the shadow DOM of the component.
- `options` - The options to be passed to the component. Follows the ElementDefinitionOptions interface from the [Custom Elements API](https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry/define#Parameters).

I recommend you do not use JavaScript to define your component. Instead, use TypeScript. This will allow you to use the `@JwcComponent` decorator to define your component.

But if you do use JavaScript or you want to define without using the decorator:

```js
  const options = { // [!code ++]
    name: "app-element", // [!code ++]
    /* ... */
  }; // [!code ++]

  @JwcComponent({ name: "app-element" /* ... */ }) // [!code --]
export class App extends JwcComponent {
  constructor() {
    super();
    // inject options into the component
    this.$options.options = options; // [!code ++]
    /* ... */
  }
  /* ... */
}
  customElements.define("app-element", App, options.options); // [!code ++]
```

Make sure to inject the options into the component. This is required for the component to work properly.

```js
/* ... */
export class App extends JwcComponent {
  constructor() {
    super();
    // MAKE SURE: inject options into the component// [!code focus]
    this.$options.options = options; // [!code focus]
    /* ... */
  }
  /* ... */
}
/* ... */
```

::: warning
Although you can define a component without using the `@JwcComponent` decorator, it is not recommended. We won't use that in our documentation.
:::


## Function Based <Badge text="Not yet implemented" type="danger"/>

Not yet implemented.