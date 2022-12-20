# Writing JSX

## Converting HTML to JSX

Here is an example of how you might convert a simple HTML file to JSX:

```html
<div class="container">
  <h1>Hello World!</h1>
  <h2>Good to see you here.</h2>
  <img src="https://example.com/favicon.ico" alt="Logo" >
</div>
```

If you put it into JSX, it would create a error. JSX tags must have a closing tag, and the `<img>` tag doesn't have a closing tag. So you need to add a closing tag to the `<img>` tag.

So the JSX version of the above HTML would be:

```js
<div className="container">
  <h1>Hello World!</h1>
  <h2>Good to see you here.</h2>
  <img src="https://example.com/favicon.ico" alt="Logo" /> // [!code focus]
</div>
```

## Rules of JSX

### Must return a single element

JSX must have a single root element. If you want to return multiple elements, you need to wrap them in a single element.

Here is a wrong example:

```js
const element = (
  <h1>Hello!</h1>
  <h2>Good to see you here.</h2>
);
```

Here is a correct example:

```js
const element = (
  <div>
    <h1>Hello!</h1>
    <h2>Good to see you here.</h2>
  </div>
);
```

### Don't want to add a wrapper element？

If you don't want to add a wrapper element, you can use Fragment to wrap multiple elements.

```js
const element = (
  <>
    <h1>Hello!</h1>
    <h2>Good to see you here.</h2>
  </>
);
```

`<>` is a shorthand for `Fragment`. It is a common pattern to use Fragment to wrap multiple elements. It is also a good practice to use Fragment when you don't want to add a wrapper element.

```js
const element = (
  <Fragment>
    <h1>Hello!</h1>
    <h2>Good to see you here.</h2>
  </Fragment>
);
```

### Must be closed

JSX tags must be closed. If you don't want to add a child element, you can use self-closing tag.

```js 
<div>
  <h1>Hello!</h1>
  <br /> // [!code focus]
  <h2>Good to see you here.</h2>
  <hr />  // [!code focus]
  <img src="https://example.com/favicon.ico" alt="Logo" />  // [!code focus]
</div>
```

### camelCase all HTML attributes (except `class` )

JSX in jwc.js is different from usual JSX. We have changed some attributes to the original attribute name.

::: warning
Because jwc.js still in `alpha` status, we may change the attribute name in the future.
:::

1. camelCase all most of the **event** names. For example, `onclick` becomes `onClick`.

```js
<button onClick={handleClick}>Click me</button>
```

2. `class` remains the same <Badge text="Pending" type="warning" />. It's different from React, which uses `className`.

```js
<div class="container"></div>
```
