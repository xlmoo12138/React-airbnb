const path = require('path')

const resolve = pathname => path.resolve(__dirname, pathname)

module.exports = {
  // less
  // webnpack
  webpack: {
    alias: {
      "@": resolve('src'),
      "components": resolve("src/components"),
      "utils": resolve("src/utils")
    }
   }
}
