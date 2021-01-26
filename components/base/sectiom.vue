<template>
  <section
    v-bind="$attrs"
    :style="styles"
    v-on="$listeners"
  >
    <slot />
  </section>
</template>

<script>

  export default {
    name: 'BaseSection',
    props: {
      space: {
        type: [Number, String],
        default: 60,
      },
    },

    computed: {
      styles () {
        const space = this.$vuetify.breakpoint.mdAndUp
          ? this.space
          : this.space / 2

        return {
          ...this.measurableStyles,
          padding: `${space}px 0`,
        }
      },
    },
  }
</script>
