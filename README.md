
# Boilerplate - 👩‍💻

- HTML : `index.html`
- CSS : `style.css`
- JS : `script.js`


```bash
npm init
```

### Tech Stack - 🛠


- Vite [https://vitejs.dev/guide/]
- Jest [https://jestjs.io/fr/docs/getting-started]
- ESLint [https://eslint.org/docs/latest/use/getting-started]
- Prettier [https://prettier.io/docs/en/install.html]
- Husky [https://typicode.github.io/husky/]
- TailwindCSS [https://tailwindcss.com/docs/installation]


# Installation - 🚀


## - Vite

```bash
npm install vite
```

### - Add

`node_modules` + `package-lock.json`

<br>

***

<br>

## - Jest

```bash
npm install --save-dev jest
```

### - Add

- `__tests__`
- `sum.js`
```js

function sum(a, b) {
  return a + b;
}

module.exports = sum;
```
- `sum.test.js`
```js

const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
```

```json
"scripts": {
    "test": "jest"
  }
```

Run ` npm run test `

<br>

***

<br>

## - ESLint

### - Add : 
- `.eslintrc.json`

```json
{
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
        "indent": [
            "error",
            "tab"
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
}
```
#### --- OR ---
-  Run `eslint --init`

<br>

***

<br>


## - Prettier

```bash
npm install --save-dev --save-exact prettier
```
<br>

> extension : [https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode]

### - Add automaticaly : 
- `pre-commit` 
- run automatically `npm test` before each commit.

<br>

***

<br>


## - Husky

```bash
npx husky-init && npm install
```

### - Add automaticaly : 
- `pre-commit` 
- run automatically `npm test` before each commit.

<br>

***

<br>

## - Tailwind

`npm install -D tailwindcss`
`npx tailwindcss init`

### - Add : 

-`style.css`
``` css
`@tailwind base;`
`@tailwind components;`
`@tailwind utilities;`
```


- `tailwind.config.js` 

``` js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```


