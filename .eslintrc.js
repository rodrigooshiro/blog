module.exports = {
  "root": true,
  "env": {
    "browser": true
  },
  "extends": [ "standard" ],
  "plugins": [ "html", "markdown", "promise", "standard" ],
  "parser": "babel-eslint",
  "parserOptions": {
    "parser": "babel-eslint",
    "sourceType": "module"
  },
  "rules": {
    "no-eval": 0,
    "space-before-function-paren": 0,
    "arrow-parens": 0,
    "generator-star-spacing": 0
  }
}

