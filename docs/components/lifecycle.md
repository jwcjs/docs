---
outline: deep
---

# Lifecycle

Web components have a lifecycle. This lifecycle is similar to the lifecycle of a Vue component. The lifecycle of a web component is as follows:

- `constructor` - The constructor is called when the component is created. This is where you can initialize the component.
- `connectedCallback` - The connected callback is called when the component is added to the DOM.
- `disconnectedCallback` - The disconnected callback is called when the component is removed from the DOM.
- `attributeChangedCallback` - The attribute changed callback is called when an attribute of the component is changed.
- `adoptedCallback` - The adopted callback is called when the component is moved to a new document.

In class-based components, you can override these methods. In function-based components, you maybe use another way to do this.

## Class Based

### Constructor

The constructor is called when the component is created. This is where you can initialize the component.

```ts
@JwcComponent({ name: "app-element" })
export class App extends JwcComponent {
  constructor() {
    super();
    // Initialize the component
  }
}
```

Jwc will get the `options` property from the `@JwcComponent` decorator and pass it to the constructor. Then initialize the reactive properties of the component.

### Connected callback

The connected callback is called when the component is added to the DOM.

```ts
@JwcComponent({ name: "app-element" })
export class App extends JwcComponent {
  override connectedCallback() {
    super.connectedCallback();
    // The component is added to the DOM
  }
}
```

Jwc will call the `connectedCallback` method of the parent class. Then call the `connectedCallback` method of the child class.

Jwc will init shadowRoot in the `connectedCallback` method. Then setAttributes and setProperties in the `connectedCallback` method.

At last, Jwc will render the component in the `connectedCallback` method and append the rendered result to the shadowRoot.

### Disconnected callback

The disconnected callback is called when the component is removed from the DOM.

```ts
@JwcComponent({ name: "app-element" })
export class App extends JwcComponent {
  override disconnectedCallback() {
    super.disconnectedCallback();
    // The component is removed from the DOM
  }
}
```

Jwc will call the `disconnectedCallback` method of the child class. Then call the `disconnectedCallback` method of the parent class.

Jwc will remove the rendered result from the shadowRoot in the `disconnectedCallback` method.

### Attribute changed callback

The attribute changed callback is called when an attribute of the component is changed.

```ts
@JwcComponent({ name: "app-element" })
export class App extends JwcComponent {
  override attributeChangedCallback(
    name: string,
    oldValue: string | null,
    newValue: string | null
  ) {
    super.attributeChangedCallback(name, oldValue, newValue);
    // An attribute of the component is changed
  }
}
```

Jwc will call the `attributeChangedCallback` method of the parent class. Then call the `attributeChangedCallback` method of the child class.

Jwc will update dom in the `attributeChangedCallback` method.

### Adopted callback

The adopted callback is called when the component is moved to a new document.

```ts
@JwcComponent({ name: "app-element" })
export class App extends JwcComponent {
  override adoptedCallback() {
    super.adoptedCallback();
    // The component is moved to a new document
  }
}
```

Jwc do nothing in the `adoptedCallback` method by default.

## Function Based <Badge text="Not yet implemented" type="danger"/>

Not yet implemented