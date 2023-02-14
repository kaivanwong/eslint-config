const { isPackageExists } = require('local-pkg')

const VUE = isPackageExists('vue')
const REACT = isPackageExists('react')

const Extends = []

if (VUE) {
  Extends.push('@kaivanwong/eslint-config-vue')
}

if (REACT) {
  Extends.push('@kaivanwong/eslint-config-react')
}

module.exports = {
  extends: [
    '@kaivanwong/eslint-config-vue',
  ],
}
