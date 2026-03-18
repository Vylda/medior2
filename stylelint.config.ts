import type { Config } from 'stylelint';

export default {
  'extends': 'stylelint-config-standard',
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'apply',
          'config',
          'custom-variant',
          'layer',
          'plugin',
          'reference',
          'responsive',
          'screen',
          'tailwind',
          'theme',
          'utility',
          'use',
          'variants',
        ],
      },
    ],
    'custom-property-pattern': [
      '^[a-z]{2,}[a-zA-Z0-9]+$',
      {
        message: 'Expected custom variable includes letters (starts with two lowercased letters) and numbers, min. size three characters; prefer PascalCase.',
      },
    ],
    'function-no-unknown': [
      true,
      {
        ignoreFunctions: [
          'theme',
        ],
      },
    ],
    'selector-class-pattern': [
      '^[a-z]{2,}[a-zA-Z0-9-_.]+$',
      {
        message: 'Expected class selector includes letters (starts with two lowercased letters), numbers, dash and underscore, min. size three characters; prefer PascalCase.',
      },
    ],
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global'],
      },
    ],
  },
} satisfies Config;
