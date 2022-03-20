/**
 * @doc   https://i18n.nuxtjs.org/lang-switcher
 */
import { omit } from '@poulycroc/js-utils'

const env = require('dotenv').config().parsed
const resources = ['index']

/**
 * @param {String} locale
 * @return {Object}
 */
const construcMessage = (locale) => {
  /* webpackChunkName: "lang-[request]" */
  let sources = {}
  resources.forEach((e) => {
    const _r = require(`./../locales/${locale}/${e}.json`)
    sources = Object.assign(sources, _r)
  })

  const message = {
    [locale]: {
      ...sources.index,
      ...omit(['index'], sources),
    },
  }

  return message
}

/**
 * @param {Array} locales
 * @return {Object}
 */
const loadMessages = (locales) => {
  let res = {}
  locales.forEach((l) => {
    const _ = construcMessage(l.code)
    res = Object.assign(res, _)
  })
  return res
}

const locales = [
  {
    code: 'en',
    name: 'English',
  },
]

module.exports = [
  'nuxt-i18n',
  {
    strategy: 'prefix_and_default',
    defaultLocale: env.LANG,
    locales,
    parsePages: false,
    pages: {
      login: {
        fr: '/se-connecter',
      },
    },
    vueI18n: {
      fallbackLocale: env.LANG,
      messages: loadMessages(locales),
    },
  },
]
