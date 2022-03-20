/**
 * @package     ESC Buddy Front
 * @component   GlobalBaseMixin Plugin
 * @author      Maxime Bartier <m.bartier@arkdevel.be>
 */

export default async (ctx) => {
  await ctx.store.dispatch('nuxtClientInit', ctx)
}
