const { isPackageExists } = require('local-pkg')

const TS = isPackageExists('typescript')
const VUE = isPackageExists('vue')
const REACT = isPackageExists('react')
const NEST = isPackageExists('@nestjs/core')

const Extends = []

if (TS) {
  Extends.push('@kaivanwong/eslint-config-ts')
}
else {
  Extends.push('@kaivanwong/eslint-config-base')
  console.warn('[@kaivanwong/eslint-config] TypeScript is not installed, fallback to JS only.')
}

if (VUE)
  Extends.push('@kaivanwong/eslint-config-vue')

if (REACT)
  Extends.push('@kaivanwong/eslint-config-react')

if (NEST)
  Extends.push('@kaivanwong/eslint-config-nest')

module.exports = {
  extends: Extends,
}
