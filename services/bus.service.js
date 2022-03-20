/**
 * @package     Qwerteach front
 * @component   EventBus Plugin
 * @author      Maxime Bartier <maxime.bartier@qwerteach.com>
 */
import Vue from 'vue'

const eventBus = {}

eventBus.install = (Vue) => {
  Vue.prototype.$bus = new Vue()
}

Vue.use(eventBus)
