# Styles

Styles are one of the most important parts of a component. You can define the styles of a component in two ways.

::: code-group
```tsx [Class Based]
import styles from "./app.css";
@JwcComponent({ name: "app-element", css: styles })
export class App extends JwcComponent {
  /* ... */
}
```

```js [Function Based <Badge text="Not yet implemented" type="danger"/>]
// no yet implemented
```
:::

## Class Based

The `css` property of the `@JwcComponent` decorator is used to define the CSS of the component. The CSS is applied to the shadow DOM of the component.

```ts
@JwcComponent({ name: "app-element", css: styles })
```

The `styles` variable is a string that contains the CSS. You can use any CSS preprocessor you want. The CSS is automatically compiled to CSS.

```ts
import styles from "./app.css";
```

::: warning
In `Vite`, the CSS import method is became different. You should add `?inline` to the end of the import statement.

```ts
// In Vite
import styles from "./app.css?inline";
```
:::

## Function Based <Badge text="Not yet implemented" type="danger"/>

Not yet implemented