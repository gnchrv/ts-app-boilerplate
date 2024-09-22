import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import perfectionist from 'eslint-plugin-perfectionist'

export default [
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    { languageOptions: { globals: globals.node } },

    {
        // A list of files to lint
        files: ['**/*.{js,mjs,cjs,ts}'],

        // Custom plugins
        plugins: { perfectionist },

        // Custom rules
        rules: {
            'semi': ['warn', 'never'],
            'indent': ['warn', 4],
            'eol-last': ['warn', 'never'],
            'no-unused-expressions': 'warn',
            'no-irregular-whitespace': 'off',
            'comma-dangle': ['warn', 'never'],
            '@typescript-eslint/no-unused-vars': 'warn',
            'quotes': ['warn', 'single', { 'allowTemplateLiterals': true }],
            'perfectionist/sort-imports': ['warn', {
                newlinesBetween: 'never',
                type: 'line-length'
            }]
        }
    },
    {
        /* A list of files and directories to ignore. To affect @typescript-eslint config, this directive should be placed at the top level of the configuration array, not inside the object that specifies the files to lint */
        ignores: ['dist/**/*']
    }
]