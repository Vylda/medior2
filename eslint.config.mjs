import getConfig from 'eslint-config-vylda-next';

const baseDir = import.meta.dirname;

const eslintConfig = [
  ...getConfig(baseDir),
  {
    files: ['src/app/**/*.tsx'],
    name: 'NextJs rules',
    rules: {
      'react-refresh/only-export-components': 'off',
    },
  },
];

export default eslintConfig;
