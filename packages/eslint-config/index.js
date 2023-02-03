const { isPackageExists } = require('local-pkg')

const Extends = []

const TS = isPackageExists('typescript')
const VUE = isPackageExists('vue')
const REACT = isPackageExists('react')
const NEST = isPackageExists('@nestjs/core')

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

console.warn(Extends)

module.exports = {
  extends: Extends,
}
