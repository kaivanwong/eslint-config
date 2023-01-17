# @kaivanwong/eslint-config

Kaivanwong's ESLint config presets

## Usage

```sh
pnpm i eslint @kaivanwong/eslint-config -D 
```

Add `.eslintrc` to your project directory

```json
{
  "extends": "@kaivanwong"
}
```

> You don't need .eslintignore normally as it has been provided by the preset.

Add script for package.json

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

Config VS Code auto fix

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

## License

[MIT licensed](./LICENSE) © 2022-PRESENT [Kaivan Wong](https://github.com/kaivanwong)
