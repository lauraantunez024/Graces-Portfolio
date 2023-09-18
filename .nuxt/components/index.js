export const AboutMe = () => import('../../components/AboutMe.vue' /* webpackChunkName: "components/about-me" */).then(c => wrapFunctional(c.default || c))
export const ContactForm = () => import('../../components/ContactForm.vue' /* webpackChunkName: "components/contact-form" */).then(c => wrapFunctional(c.default || c))
export const MyTestimonials = () => import('../../components/MyTestimonials.vue' /* webpackChunkName: "components/my-testimonials" */).then(c => wrapFunctional(c.default || c))
export const NuxtLogo = () => import('../../components/NuxtLogo.vue' /* webpackChunkName: "components/nuxt-logo" */).then(c => wrapFunctional(c.default || c))
export const ServicesList = () => import('../../components/ServicesList.vue' /* webpackChunkName: "components/services-list" */).then(c => wrapFunctional(c.default || c))
export const TransitionSlide = () => import('../../components/TransitionSlide.vue' /* webpackChunkName: "components/transition-slide" */).then(c => wrapFunctional(c.default || c))
export const Tutorial = () => import('../../components/Tutorial.vue' /* webpackChunkName: "components/tutorial" */).then(c => wrapFunctional(c.default || c))
export const VuetifyLogo = () => import('../../components/VuetifyLogo.vue' /* webpackChunkName: "components/vuetify-logo" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
