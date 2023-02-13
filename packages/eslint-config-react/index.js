const { isPackageExists } = require('local-pkg')

const TS = isPackageExists('typescript')

module.exports = {
  extends: [
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    TS
      ? '@kaivanwong/eslint-config-ts'
      : '@kaivanwong/eslint-config-base',
  ],
  settings: {
    react: {
      version: '17',
    },
  },
  rules: {
    'jsx-quotes': [
      'error',
      'prefer-double',
    ],
    'react/react-in-jsx-scope': 'off',
    'react/button-has-type': 'off',
    'react/display-name': ['error', { ignoreTranspilerName: false }],
    'react/default-props-match-prop-types': 'error',
    'react/forbid-foreign-prop-types': 'error',
    'react/forbid-prop-types': ['error', { forbid: ['any', 'array'] }],
    'react/function-component-definition': [
      'error',
      { namedComponents: 'arrow-function', unnamedComponents: 'arrow-function' },
    ],
    'react/jsx-fragments': ['error', 'syntax'],
    'react/no-access-state-in-setstate': 'error',
    'react/no-array-index-key': 'error',
    'react/no-did-update-set-state': 'error',
    'react/no-redundant-should-component-update': 'error',
    'react/no-this-in-sfc': 'error',
    'react/no-typos': 'error',
    'react/no-unsafe': ['error', { checkAliases: true }],
    'react/no-unused-prop-types': 'error',
    'react/no-unused-state': 'error',
    'react/no-will-update-set-state': 'error',
    'react/prefer-stateless-function': ['error', { ignorePureComponents: true }],
    'react/self-closing-comp': 'error',
    'react/state-in-constructor': ['error', 'never'],
    'react/style-prop-object': 'error',
    'react/void-dom-elements-no-children': 'error',
    'react/jsx-newline': 'off',
    'react/jsx-no-script-url': 'error',
    'react/jsx-no-constructed-context-values': 'error',
    'react/jsx-boolean-value': 'error',
    'react/jsx-child-element-spacing': 'error',
    'react/jsx-closing-bracket-location': ['error', { location: 'tag-aligned' }],
    'react/jsx-closing-tag-location': 'error',
    'react/jsx-curly-brace-presence': ['error', { propElementValues: 'always' }],
    'react/jsx-curly-spacing': ['error', 'never', { allowMultiline: true }],
    'react/jsx-equals-spacing': ['error', 'never'],
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-indent': ['error', 2],
    'react/jsx-key': [
      'error',
      {
        checkFragmentShorthand: true,
        checkKeyMustBeforeSpread: true,
      },
    ],
    'react/jsx-first-prop-new-line': ['error', 'multiline'],
    'react/jsx-max-props-per-line': ['error', { maximum: { single: 5, multi: 1 } }],
    'react/jsx-no-useless-fragment': ['error', { allowExpressions: true }],
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-pascal-case': [
      'error',
      {
        allowNamespace: true,
        allowLeadingUnderscore: true,
      },
    ],
    'react/jsx-props-no-multi-spaces': 'error',
    'react/jsx-tag-spacing': 'error',
    'react/jsx-wrap-multilines': 'error',
  },
}
