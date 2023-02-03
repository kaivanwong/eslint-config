module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json'],
    sourceType: 'module',
    ecmaVersion: 'es2019',
  },
  extends: ['plugin:@darraghor/nestjs-typed/recommended'],
  plugins: ['@darraghor/nestjs-typed'],
}
