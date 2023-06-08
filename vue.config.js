const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            'vue-style-loader',
            'sass-loader',
            'css-loader',
          ]
        }
      ],
    },
  },
  transpileDependencies: true,  
})
