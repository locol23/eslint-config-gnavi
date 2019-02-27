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
    camelcase: ['error', { ignoreDestructuring: true }],
    'prefer-object-spread': ['error'],
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'no-invalid-this': 'off',
    'no-param-reassign': ['error', { props: true, ignorePropertyModificationsFor: [] }],
    'no-restricted-syntax': ['error', 'ForInStatement', 'LabeledStatement', 'WithStatement'],
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'error',
    'import/no-named-default': 'off',
  },
}
