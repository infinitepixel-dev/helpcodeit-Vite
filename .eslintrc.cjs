module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:react-hooks/recommended',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
    settings: { react: { version: '18.2' } },
    plugins: ['react-refresh'],
    rules: {
        'react-refresh/only-export-components': [
            'warn',
            { allowConstantExport: true },
        ],
    },
    overrides: [
        {
            files: ['src/components/Product_Management/productServer.js'],
            env: {
                node: true, // Enable Node.js environment for this file
            },
            rules: {
                'global-require': 'off', // Allow the use of require()
                'no-undef': 'off', // Allow undefined variables like 'require'
            },
        },
    ],
}
