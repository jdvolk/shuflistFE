module.exports ={
  extends: [
    "stylelint-config-standard",
    "stylelint-config-prettier"
  ],
  defaultSeverity: 'warning',
  customSyntax: "postcss-styled-syntax",
  rules: {
    "no-empty-source": null,
    "length-zero-no-unit": null,
    "media-feature-range-notation" : null
  }
}