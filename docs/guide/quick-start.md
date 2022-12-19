# Quick Start

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

These commands will install jwcjs. You can use Vite, Rollup, Webpack, or any other build tool to build your project.