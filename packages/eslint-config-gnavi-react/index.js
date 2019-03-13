module.exports = {
  env: {
    browser: true,
  },
  extends: ['plugin:react/recommended', 'plugin:jsx-a11y/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: { version: 'detect' },
  },
  plugins: ['react', 'react-hooks'],
  rules: {
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.tsx'] }],
    'react/prop-types': 'off',
    'react/jsx-boolean-value': 2,
    'react/destructuring-assignment': ['error', 'never'],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
}
