<template>
  <div
    :class="classes"
    class="pt-2"
  >
    <bavatar
      v-if="icon"
      :color="color"
      :dark="dark"
      :icon="icon"
      :outlined="outlined"
      :size="size"
      class="mb-3"
    />

    <div :class="horizontal && title && 'ml-6'">

      <btitle
        :title="title"
        class="text-uppercase"
        space="3"
      />

      <bbody
        v-if="text || $slots.default"
        :space="horizontal ? 0 : undefined"
        :text="text"
        class="mx-auto"
        max-width="700"
      >
        <slot />
      </bbody>
    </div>
  </div>
</template>

<script>
import bavatar from './avater'
import bbody from './body'
import btitle from './title1'

  // Mixins
  import Heading from '~/mix/body'

  export default {
    name: 'BaseAvatarCard',

    mixins: [Heading],

    props: {
      align: {
        type: String,
        default: 'left',
      },
      color: String,
      dark: Boolean,
      horizontal: Boolean,
      icon: String,
      outlined: {
        type: Boolean,
        default: true,
      },
      space: {
        type: [Number, String],
        default: 8,
      },
      size: {
        type: [Number, String],
        default: 72,
      },
      text: String,
      title: String,
    },

    computed: {
      classes () {
        const classes = [
          `mb-${this.space}`,
        ]

        if (this.horizontal) {
          classes.push('d-flex')

          if (!this.$slots.default && !this.text) {
            classes.push('align-center')
          }
        }

        return classes
      },
    },
    components:{
      bavatar,
      bbody,
      btitle
    }
  }
</script>
