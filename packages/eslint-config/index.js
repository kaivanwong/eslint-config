const { isPackageExists } = require('local-pkg')

const Extends = []

const VUE = isPackageExists('vue')
const REACT = isPackageExists('react')
const NEST = isPackageExists('@nestjs/core')

if (VUE)
  Extends.push('@kaivanwong/eslint-config-vue')

if (REACT)
  Extends.push('@kaivanwong/eslint-config-react')

if (NEST)
  Extends.push('@kaivanwong/eslint-config-nest')

module.exports = {
  extends: '@kaivanwong/eslint-config-vue',
}
