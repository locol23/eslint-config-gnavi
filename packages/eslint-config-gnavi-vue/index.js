module.exports = {
  extends: ['plugin:vue/recommended'],
  rules: {
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: [
          'state',
          'acc',
          'accumulator',
          'e',
          'ctx',
          'req',
          'request',
          'res',
          'response',
          '$scope',
        ],
      },
    ],
    'vue/array-bracket-spacing': 'error',
    'vue/arrow-spacing': 'error',
    'vue/block-spacing': 'error',
    'vue/brace-style': ['error', '1tbs', { allowSingleLine: true }],
    'vue/camelcase': ['error', { properties: 'never', ignoreDestructuring: true }],
    'vue/comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
      },
    ],
    'vue/component-name-in-template-casing': 'error',
    'vue/eqeqeq': ['error', 'always', { null: 'ignore' }],
    'vue/key-spacing': ['error', { beforeColon: false, afterColon: true }],
    'vue/match-component-file-name': ['error', { extensions: ['js', 'jsx', 'vue'], shouldMatchCase: true }],
    'vue/no-boolean-default': ['warn', 'default-false'],
    'vue/no-restricted-syntax': ['error', 'ForInStatement', 'LabeledStatement', 'WithStatement'],
    'vue/object-curly-spacing': ['error', 'always'],
    'vue/require-direct-export': 'error',
    'vue/script-indent': [
      'error',
      2,
      {
        baseIndent: 0,
        switchCase: 1,
        ignores: [],
      },
    ],
    'vue/space-infix-ops': 'error',
    'vue/space-unary-ops': ['error', { words: true, nonwords: false, overrides: {} }],
    'vue/v-on-function-call': 'error',
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        'import/prefer-default-export': 'error',
        'import/no-default-export': 'off',
      },
    },
  ],
}
