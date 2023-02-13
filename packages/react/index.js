const { isPackageExists } = require('local-pkg')

const TS = isPackageExists('typescript')

if (!TS)
  console.warn('[@kaivanwong/eslint-config] TypeScript is not installed, fallback to JS only.')

module.exports = {
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    TS
      ? '@kaivanwong/eslint-config-ts'
      : '@kaivanwong/eslint-config-base',
  ],
  settings: {
    react: {
      version: '17.0',
    },
  },
  rules: {
    'jsx-quotes': [
      'error',
      'prefer-double',
    ],
    'react/react-in-jsx-scope': 'off',
  },
}
