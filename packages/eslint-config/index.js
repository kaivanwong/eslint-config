const { isPackageExists } = require('local-pkg')

const VUE = isPackageExists('vue')
const REACT = isPackageExists('react')
const NEST = isPackageExists('@nestjs/core') || isPackageExists('@nestjs/common') || isPackageExists('@nestjs/cli')

const Extends = []

if (VUE) {
  Extends.push('@kaivanwong/eslint-config-vue')
}

if (REACT) {
  Extends.push('@kaivanwong/eslint-config-react')
}

if (NEST) {
  Extends.push('@kaivanwong/eslint-config-nest')
}

module.exports = {
  extends: Extends,
}
