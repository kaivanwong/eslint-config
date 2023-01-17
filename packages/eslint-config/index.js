const { isPackageExists } = require('local-pkg')

const TS = isPackageExists('typescript')

if(!TS) {
  console.warn('[@kaivanwong/eslint-config] TypeScript is not installed, fallback to JS only.')
}

module.exports = {
  extends: [
    TS
    ? '@antfu/eslint-config-ts'
    : '@antfu/eslint-config-base',
  ],
}
