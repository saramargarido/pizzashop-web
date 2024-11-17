// @ts-check
import eslint from '@eslint/js'
import eslintPluginReactHooks from 'eslint-plugin-react-hooks'
import eslintPluginSimpleImportSort from 'eslint-plugin-simple-import-sort'
import globals from 'globals'
import neostandard, { resolveIgnoresFromGitignore } from 'neostandard'
import tseslint from 'typescript-eslint'

export default [
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...neostandard({
    ignores: resolveIgnoresFromGitignore(),
  }),
  {
    plugins: {
      'react-hooks': eslintPluginReactHooks,
      'simple-import-sort': eslintPluginSimpleImportSort,
    },
    rules: {
      ...eslintPluginReactHooks.configs.recommended.rules,
      'simple-import-sort/imports': 'error',
      'no-useless-constructor': 'off',
      '@stylistic/max-len': ['warn', {
        code: 80,
        tabWidth: 2,
        ignoreUrls: true,
        ignoreComments: false,
        ignoreStrings: true,
      }],
      '@stylistic/space-before-function-paren': ['error',
        {
          anonymous: 'always',
          asyncArrow: 'always',
          named: 'never',
        },
      ],
      '@stylistic/jsx-quotes': ['error', 'prefer-double'],
      '@stylistic/comma-dangle': ['error', 'always-multiline'],
      '@stylistic/multiline-ternary': ['error', 'always'],
      'react/jsx-handler-names': 'off',
      'react/self-closing-comp': ['error', {
        component: false,
        html: false,
      }],
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        
      },
    },
    env: {
      'vitest/env': true
    },
  },
]
