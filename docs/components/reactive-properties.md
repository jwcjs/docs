# Reactive properties

::: warning
Jwc only has reactive properties. It means that you can't define a reactive state in a component.
:::

Jwc components have reactive properties. These properties are automatically updated when the component is updated. 


::: code-group

```tsx [Class Based]
@JwcComponent({ name: "app-element" })
export class App extends JwcComponent {
  @Prop() name: string = "World";
  override render() {
    return <div>{this.name}</div>;
  }
}
```

```ts [Function Based <Badge text="Not yet implemented" type="danger"/>]
// no yet implemented
```

```html [index.html]
<app-element name="John"></app-element>
```
:::

## Class Based

In a class based component, you can define reactive properties by adding a `@Prop` decorator to a property. 

```ts
@Prop({ type: String, default: "World" }) name: string;
```

The `@Prop` decorator takes an object with the following properties:

- `type` - The type of the property. This is used to convert the property to the correct type. The default type is `string`.
- `default` - The default value of the property. This is used when the property is not set. The default value is `undefined`.

To define the value of the property (like `name`) in html, you can use the `name` attribute.

```html
<app-element name="John"></app-element>
```

## Function Based <Badge text="Not yet implemented" type="danger"/>

Not yet implemented