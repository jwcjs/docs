# Quick Start

## Create a new Jwc project

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

### Create a new project

::: danger SORRY
We have not yet published the package to npm, so you can only install it from github. And CLI is not yet available, so you can only use it in the project directory.
:::

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

<app-element cound="1" ></app-element>
```