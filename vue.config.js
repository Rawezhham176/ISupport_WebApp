module.exports = {
 devServer : {
   proxy: {
    '^/api': {
      target: "https://127.0.0.1:5000",
      changeOrigin: true,
      logLevel: 'debug',
      pathRewrite: { '^/api': '/'}
   }
 }
}
}
