import antfu from '@antfu/eslint-config'

const config = await antfu({
  vue: true,
  rules: {
    'style/brace-style': ['error', '1tbs'],
    'style/space-before-function-paren': ['error', 'always'],
    'import/newline-after-import': 'off',
    'import/first': 'off',
    'perfectionist/sort-imports': 'off',
    'node/prefer-global/buffer': 'off',
    'node/prefer-global/process': 'off',
    'no-console': 'off',
  },
  ignores: [
    '**/build/*',
    '**/dist_electron',
    '**/pac.js',
    'packages/mitmproxy/test/**/*.mjs',
    '**/.github/**',
    '**/doc/**',
  ],
  formatters: {
    css: true,
    html: true,
  },
})

export default [
  ...config,
  {
    files: ['**/*.md'],
    rules: {
      'markdown/no-multiple-h1': 'off',
      'markdown/require-alt-text': 'off',
    },
  },
]
