/**
 * @package     ESC Buddy Front
 * @component   Axios Plugin
 * @package     axios
 * @author      Maxime Bartier <m.bartier@arkdevel.be>
 *
 * @doc         https://axios.nuxtjs.org/helpers
 */

export default function ({ $axios, store: $store, i18n: $i18n }) {
  $axios.onRequest((request) => {
    const { accessToken: token } = $store.state.auth

    const lang = $i18n.locale || navigator.language

    if (token) request.headers.common.Authorization = `Bearer ${token}`
    if (lang) request.headers.common['Accept-Language'] = lang
  })

  $axios.onError((err) => {
    // if (isNil(err.response)) return redirect('/error/500')
    const code = parseInt(err.response && err.response.status)
    switch (code) {
      case 401 || 403:
        // await $store.dispatch('auth/deleteAll')
        // redirect('/login')
        break
      case 404:
        break
      case 422:
        console.error('error 422')
        break
      case 500:
        console.log('error 500')
        break
    }
  })
}
