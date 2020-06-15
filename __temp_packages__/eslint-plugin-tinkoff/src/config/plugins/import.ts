export const importConfig = {
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts'],
      },
      typescript: {},
      webpack: {},
    },
  },

  rules: {
    'import/no-commonjs': 'warn',
    'import/unambiguous': 'warn',
    'import/no-deprecated': 'warn',
    'import/prefer-default-export': 'off', // default imports is evil
    'import/default': 'error', // enable default import validation
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/order': ['warn', { groups: [['builtin', 'external', 'internal']] }],
    'import/no-extraneous-dependencies': 'off', // need fine tuning
    'import/no-cycle': 'off',
  },
};
