# TypeScript

## The why

When you define a web components, TypeScript doesn't know anything about it, all the props will be `any` type. Unless you define it.

## Define for TypeScript

```ts
@Component({ name: "app-element" })
export class App extends JwcComponent {
  @Prop() name: string = "World";
  override render() {
    return <div>{this.name}</div>;
  }
}

declare global { // [!code focus]
    interface HTMLElementTagNameMap { // [!code focus]
        "app-element": App; // [!code focus]
    } // [!code focus]
} // [!code focus]
```

Then, you can get full type intelligence on this component:

```ts
// Auto complete component name.
const app = document.createElement('app-element') 
// Will get type error in IDE.
app.name = 1
```

## Define for TSX

In `.tsx`, your component will perform well, but still get type error, becasue jsx compiler have it's own type defination.

Add following code to fix it.

```ts
type Reactify<T> = Partial<T> &
    React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLDivElement>,
        HTMLDivElement
    >;

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'app-element': Reactify<App>;
        }
    }
}
```
