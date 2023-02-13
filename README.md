# @kaivanwong/eslint-config

Kaivanwong's ESLint config presets

## Usage

### Install

```sh
pnpm i eslint @kaivanwong/eslint-config -D 
```

### Config .eslintrc

Add `.eslintrc` to your project directory

```json
{
  "extends": "@kaivanwong"
}
```

> You don't need .eslintignore normally as it has been provided by the preset.
In the case of monorepo, you need to add `"root":true` to `.eslintrc` to specify the root configuration file

### Add script for package.json

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

### Config VS Code auto fix

Install [VS Code ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) extension and create `.vscode/settings.json`

```json
{
  "prettier.enable": false,
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

### Customization rules

Add you like rules to your `.eslintrc` file:

```json
{
  "extends": [
    "@kaivanwong"
  ],
  "rules": {
    // ...
  }
}
```

### TypeScript Aware Rules

Type aware rules are enabled when a `tsconfig.eslint.json` is found in the project root, which will introduce some stricter rules into your project. If you want to enable it while have no `tsconfig.eslint.json` in the project root, you can change tsconfig name by modifying `ESLINT_TSCONFIG` env. 

```js
// .eslintrc.js
process.env.ESLINT_TSCONFIG = 'tsconfig.json'
module.exports = {
  extends: '@kaivanwong'
}
```

## Thanks

This project is based on [@antfu/eslint-config](https://github.com/antfu/eslint-config)

## License

[MIT licensed](./LICENSE) © 2022-PRESENT [Kaivan Wong](https://github.com/kaivanwong)
