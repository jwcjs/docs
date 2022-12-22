# Quick Start

## Overview

Jwc.js is a JavaScript framework for using JSX to write web components on the web. It includes:

- `Runtime`: A package for creating and rendering web components, it uses [Virtual DOM](https://en.wikipedia.org/wiki/Virtual_DOM) and Diff to update the DOM efficiently.
- `Reactivity`: A package for creating reactive data bindings, it uses [Proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy) to track changes.
- `Core`: A package for creating and defining custom elements, it uses [Custom Elements](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements) to define custom elements.

The goal of Jwc is to provide a simple, lightweight, and performant way to write web components.

You can find more information about Jwc in the [What is Jwc?](/guide/what-is-jwc) section.
## Scaffolding Your First jwc.js Project

::: warning
This guide assumes you have Node.js 14.18+, 16+ installed. If you don't have Node.js installed, please install it from [here](https://nodejs.org/en/download/).
:::

We provide a CLI tool to help you get started with jwc.js. It is called `create-jwcjs`, and you can use it to create a new template project with a single command:

::: code-group
```bash [npm]
npm init jwcjs@latest
```

```bash [yarn]
yarn create jwcjs@latest
```

```bash [pnpm]
pnpm create jwcjs@latest
```
:::

You can also directly specify the project name and the template you want to use via additional command line options. For example, to scaffold a Vite + TypeScript + Jwc.js project, run:

::: code-group
```bash [npm 6.x]
npm init jwcjs@latest <project-name> --template starter-vite-ts
```

```bash [npm 7.x+]
npm init jwcjs@latest <project-name> -- --template starter-vite-ts
```

```bash [yarn]
yarn create jwcjs@latest <project-name> --template starter-vite-ts
```

```bash [pnpm]
pnpm create jwcjs@latest <project-name> --template starter-vite-ts
```
:::


### Our Templates

We provide a few templates to help you get started with jwc.js. You can use them as a starting point for your project.

| Template | Description |
| --- | --- |
| [`starter-vite-ts`](https://github.com/jwcjs/core/tree/main/packages/create-jwc/starter-vite-ts) | A starter template for Vite + TypeScript + Jwc.js |

You should see something similar to the following:

```
✔ Project name: … my-jwc-app
✔ Select a template: › Starter (Vite + TypeScript)
✔ Select a package manager: › pnpm
✔ Created project in /<path>/my-jwc-app.
✔ To get started:
  cd my-jwc-app
  pnpm install
  pnpm run dev
```

Once the project is created, follow the instructions to install dependencies and start the dev server:

::: code-group

```bash [npm]
cd <project-name>
npm install
npm run dev
```

```bash [yarn]
cd <project-name>
yarn
yarn dev
```

```bash [pnpm]
cd <project-name>
pnpm install
pnpm dev
```
:::

You should now have your Jwc project running! When you are ready to deploy, use the build command:

::: code-group

```bash [npm]
npm run build
```

```bash [yarn]
yarn build
```

```bash [pnpm]
pnpm build
```
:::

This will create a js file in the dist directory. You can use it in your project like this:

```html
<script src="/dist/index.js"></script>

<app-element count="1" ></app-element>
```


## Install jwcjs in an Existing Project

You can use npm, yarn or pnpm to install jwcjs. We recommend using pnpm, it is faster and more efficient. 

You can install it with the following command:

::: code-group

```bash [npm]
npm install jwcjs
```

```bash [yarn]
yarn add jwcjs
```

```bash [pnpm]
pnpm add jwcjs
```
:::

Then, configure your tsconfig.json file to use the JSX factory and fragment factory:

```json
{
  "compilerOptions": {
    "jsx": "react",
    "jsxFactory": "h",
    "jsxFragmentFactory": "Fragment"
  }
}
```

These commands will install jwcjs. You can use Vite, Rollup, Webpack, or any other build tool to build your project.
