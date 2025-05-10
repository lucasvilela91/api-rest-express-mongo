import js from '@eslint/js';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...js.configs.recommended.languageOptions.globals,
        // inclui node globals
      },
    },
    plugins: {
      js,
    },
    rules: {
      ...js.configs.recommended.rules,
      indent: ['error', 2],
      'linebreak-style': ['error', 'windows'],
      quotes: ['error', 'double'],
      semi: ['error', 'always'],
    },
  },
]);
