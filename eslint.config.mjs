// @ts-check

import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'

export default tseslint.config(
    eslint.configs.recommended,
    tseslint.configs.recommendedTypeChecked,
    {
        ignores: [
            'dist',
            'node_modules',
            'eslint.config.mjs',
            'jest.config.js',
            'scripts/**/*',
            '**/*.mjs',
            'coverage',
            '.github',
            '**/*.js'
        ],
    },
    {
        languageOptions: {
            parserOptions: {
                project: './tsconfig.eslint.json', // ← Changed from projectService
                tsconfigRootDir: import.meta.dirname,
            },
        },
        rules: {
            // 'no-console': 'error',
            // 'dot-notation': 'error',
        },
    },
)
