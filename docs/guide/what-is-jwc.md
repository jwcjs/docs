<script>
import './demo.js';
</script>

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
@Component({ name: "app-element", css: styles })
export class App extends JwcComponent {
	constructor() { super(); }

	@Prop({ default: 0, attr: "count" }) count = 0;
	public onClick = () => { this.count++; }}

  override render() {
		return (
			<div class={"card"}>
				<button onClick={this.onClick}>
					count is {String(this.count)}
				</button>
			</div>
		);
	}
}

```

```js [Function Based <Badge text="Not yet implemented" type="danger"/>]
// no yet implemented
```

:::

With the example code and css style, you can create your own web component, like this: *(If you can't see this component, refresh it and try again)*

<app-element count="2022"></app-element>

## Why Web Components?

Web Components are a set of standards that allow you to write custom HTML elements. They are a native browser feature that is supported by all modern browsers. They are the future of the web.

Web Components are a great way to write reusable components. They are a standard that is not tied to any framework. They can be used in any framework or without a framework at all.
