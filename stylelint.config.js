export default {
  extends: ['stylelint-config-standard-scss'],
  ignoreFiles: ['dist/**', 'node_modules/**', 'coverage/**'],
  rules: {
    'scss/at-use-no-unnamespaced': null,
  },
}
