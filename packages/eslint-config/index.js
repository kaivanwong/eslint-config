const { isPackageExists } = require('local-pkg')

const Extends = []

const TS = isPackageExists('typescript')
const VUE = isPackageExists('vue')

if (TS) {
  Extends.push('@kaivanwong/eslint-config-ts')
}
else {
  Extends.push('@kaivanwong/eslint-config-base')
  console.warn('[@kaivanwong/eslint-config] TypeScript is not installed, fallback to JS only.')
}

if (VUE)
  Extends.push('@kaivanwong/eslint-config-vue')

module.exports = {
  extends: Extends,
}
