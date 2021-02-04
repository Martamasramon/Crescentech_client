module.exports = {
   /* other options*/
    target: 'web',
    node: {
        fs: 'empty'
    },
    devServer: {
      proxy: {
        '/api': {
          target: 'https://evening-eyrie-40887.herokuapp.com/',
          secure: false
        }
      }
  }
/* ... */
}
