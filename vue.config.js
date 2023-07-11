const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  outputDir: "../src/main/resources/static",
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080', // 기본 URL 설정
        changeOrigin: true, // cross origin 허용
        pathRewrite: {
          '^/api': '/api', // 프록시 경로 재작성
        },
      },
      '/wid': {
        target: 'http://www.kma.go.kr',
      },
    },
  },
})