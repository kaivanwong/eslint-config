const { isPackageExists } = require('local-pkg')

const TS = isPackageExists('typescript')

module.exports = {
  exports: [
    TS
      ? '@kaivanwong/eslint-config-ts'
      : '@kaivanwong/eslint-config-base',
  ],
  rules: {
    '@typescript-eslint/consistent-type-imports': 'off',
  },
}
