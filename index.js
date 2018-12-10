module.exports = {
  extends: ['airbnb-base'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  rules: {
    semi: ['error', 'never'],
    'max-len': ['error', { code: 120 }],
  },
}
