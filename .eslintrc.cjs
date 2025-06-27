module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended'
    ],
    plugins: ['@typescript-eslint'],
    env: {
      node: true,
      es2022: true,
      jest: true
    },
    rules: {
      '@typescript-eslint/explicit-function-return-type': 'off'
    }
  }
  