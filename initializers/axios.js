/**
 * @package     ESC Buddy Front
 * @component   Axios module
 * @author      Maxime Bartier <m.bartier@arkdevel.be>
 *
 * @doc         https://axios.nuxtjs.org/usage
 * @doc         https://github.com/nuxt-community/axios-module#options
 */
const env = require('dotenv').config().parsed

module.exports = [
  '@nuxtjs/axios',
  {
    baseURL: env.BASE_API || 'http://localhost:1337',
    retry: { retries: 3 },
    proxyHeaders: false,
    credentials: false,
  },
]
