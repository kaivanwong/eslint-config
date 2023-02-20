const { isPackageExists } = require('local-pkg')

const TS = isPackageExists('typescript')

if (!TS)
  console.warn('[@kaivanwong/eslint-config] TypeScript is not installed, fallback to JS only.')

module.exports = {
  extends: [
    TS
      ? '@kaivanwong/eslint-config-ts'
      : '@kaivanwong/eslint-config-base',
  ],
  overrides: [
    {
      files: ['*.ts'],
      rules: {
        ...(TS
          ? { '@typescript-eslint/consistent-type-imports': 'off', }
          : null),
      },
    },
  ],
}
