<template>
  <component
    :is="tag"
    :class="classes"
    :style="styles"
    class="base-body body-1"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <!-- Only use v-html for user data -->

    <slot  />
  </component>
</template>

<script>
  // Mixins
  import Heading from '~/mix/body'

  export default {
    name: 'BaseBody',

    mixins: [Heading],

    inject: ['theme'],

    props: {
      html: String,
      maxWidth: {
        type: [Number, String],
        default: undefined,
      },
      space: {
        type: [Number, String],
        default: 10,
      },
      tag: {
        type: String,
        default: 'p',
      },
      text: String
    },

    computed: {
      classes () {
        return [
          'grey--text',
          this.theme.isDark ? 'text--lighten-1' : 'text--darken-1',
          `text-${this.heading.align}`,
          `mb-${this.space}`,
           this.theme.isDark ? 'text-h5' : 'text-h6',
           'font-weight-bold',
        ]
      },
      styles () {
        return {
          maxWidth: `${this.maxWidth}px`,
        }
      },
    },
  }
</script>
