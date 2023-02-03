module.exports = {
  extends: ['plugin:@darraghor/nestjs-typed/recommended'],
  overrides: [
    {
      files: ['*.ts'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: ['./tsconfig.json'],
      },
    },
  ],
  plugins: ['@darraghor/nestjs-typed'],
}
