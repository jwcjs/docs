# Rendering a Component

You have 2 choices for rendering a component:

::: code-group

```tsx [Class Based]
@JwcComponent({ name: "app-element" })
export class App extends JwcComponent {
  /* ... */
  override render() {
    return <div>Hello World</div>;
  }
}
```

```ts [Function Based <Badge text="Not yet implemented" type="danger"/>]
// no yet implemented
```
:::

## Class Based

Add a template to your component by adding a `render` method. The `render` method returns a `JSX Element`.

::: warning
Different from React, we use `class` to define component className. Like this:

```tsx
<div class="my-class"></div> 
// not <div className="my-class"></div>
```
:::

`render` method will return a VNode, which is a virtual node. It is a lightweight representation of a DOM node. It is used to create the DOM node.

we will call `render` method when the component is connected to the DOM.

## Function Based <Badge text="Not yet implemented" type="danger"/>

Not yet implemented