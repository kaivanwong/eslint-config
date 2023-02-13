const { isPackageExists } = require('local-pkg')

const TS = isPackageExists('typescript')
const VUE = isPackageExists('vue')
const REACT = isPackageExists('react')
const NEST = isPackageExists('@nestjs/core')

let Extends = []

if (TS) {
  Extends = ['@kaivanwong/eslint-config-ts']
}
else {
  Extends = ['@kaivanwong/eslint-config-base']
  console.warn('[@kaivanwong/eslint-config] TypeScript is not installed, fallback to JS only.')
}

if (VUE)
  Extends = ['@kaivanwong/eslint-config-vue']

if (REACT)
  Extends = ['@kaivanwong/eslint-config-react']

if (NEST)
  Extends = ['@kaivanwong/eslint-config-nest']

module.exports = {
  extends: Extends,
}
