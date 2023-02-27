const { isPackageExists } = require('local-pkg')

const TS = isPackageExists('typescript')
const VUE = isPackageExists('vue')
const REACT = isPackageExists('react')
const NEST = isPackageExists('@nestjs/core') || isPackageExists('@nestjs/common') || isPackageExists('@nestjs/cli')

const Extends = ['@kaivanwong/eslint-config-base']

if (TS) {
  Extends = ['@kaivanwong/eslint-config-ts']
}

if (VUE) {
  Extends = ['@kaivanwong/eslint-config-vue']
}

if (REACT) {
  Extends = ['@kaivanwong/eslint-config-react']
}

if (NEST) {
  Extends = ['@kaivanwong/eslint-config-nest']
}

module.exports = {
  extends: Extends,
}
