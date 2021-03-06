const tools = require('@mockyeah/tools/.eslintrc.js');

const rules = {
  ...tools.rules,
  '@typescript-eslint/ban-ts-ignore': 0,
  'import/extensions': 0,
  'import/no-unresolved': 0,
  'no-undef': 0
};

module.exports = {
  ...tools,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['airbnb-base', 'prettier', 'plugin:@typescript-eslint/recommended'],
  env: {
    ...tools.env,
    jest: true
  },
  rules,
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts']
    }
  }
};
