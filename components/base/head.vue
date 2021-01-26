<template>
  <div
    :class="classes"
    class="base-section-heading"
  >
    <Avatar
      v-if="icon"
      :icon="icon"
      :outlined="outlined"
      class="mb-4"
      color="primary"
      dark
    />

    <Subtitle
      v-if="subtitle"
      :title="subtitle"
      space="1"
      tag="h2"
    />

    <Subhead
      v-if="title"
      :align="align"
      :title="title"
      class="text-uppercase text-h4"
      space="2"
    />

    <Divier v-if="divier" :color="color" />

    <Body
      v-if="$slots.default || text"
      class="mx-auto"
      max-width="700"
    >
      <slot v-if="$slots.default" />

      <template v-else>
        {{ text }}
      </template>
    </Body>
  </div>
</template>

<script>
  // Mixins
  import Heading from '~/mix/body'
  import Avatar from "./avater"
  import Subtitle from "./subhead"
  import Subhead from "./subtitle"
  import Divier from './divider'
import Body from './body'

  export default {
    name: 'BaseSectionHeading',

    mixins: [Heading],
    components:{
      Avatar,
      Subtitle,
      Subhead,
      Divier,
      Body
    },

    props: {
      align: {
        type: String,
        default: 'center',
      },
      color: {
        type: String,
        default: 'primary',
      },
      icon: String,
      outlined: Boolean,
      space: {
        type: [Number, String],
        default: 12,
      },
      subtitle: String,
      text: String,
      title: String,
      divier:{
        type:Boolean,
        default:true
      }
    },

    computed: {
      classes () {
        return [
          `text-${this.align}`,
          `mb-${this.space}`,
        ]
      },
    },
  }
</script>
