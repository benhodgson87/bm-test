const cssnext = require('postcss-cssnext')

module.exports = {
  extensions: ['.css'],
  plugins: [cssnext()],
}
