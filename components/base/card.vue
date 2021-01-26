<template>

  <v-theme-provider :dark="dark">
    <v-container class="pa-0">
      <v-row
        :justify="justify"
        no-gutters
      >
        <v-col
          v-if="icon"
          :class="`text-${align}`"
          cols="12"
          class="mb-4"
        >
          <bicon :color="color">
            {{ icon }}
          </bicon>
        </v-col>

        <v-col
          v-if="title || subtitle"
          :cols="callout ? 9 : 12"
        >
          <bsubtitle
            v-if="subtitle"
            :title="subtitle"
            space="1"
          />

          <btitle
            :title="title"
            class="text-uppercase"
            space="1"
          />

          <bdivider v-if="divider" :color="color" />

          <Body
            v-if="text || $slots.default"
            :text="text"
            space="6"
          >
          {{text}}
            <slot />
          </Body>
        </v-col>

        <v-col
          v-if="callout"
          cols="2"
        >
          <div
            class="display-3 grey--text text--lighten-4 font-weight-bold pr-8"
            v-text="callout"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-theme-provider>
</template>

<script>
import bicon from './icon'
import bsubtitle from './subtitle'
import btitle from './title1'
import bdivider from './divider'
import Body from './body'


  // Mixins
  import Heading from '~/mix/body'

  export default {
    components:{
      bicon,
      bsubtitle,
      btitle,
      bdivider,
      Body
    },
    name: 'BaseInfoCard',

    mixins: [Heading],

    props: {
      dark: Boolean,
      callout: String,
      color: {
        type: String,
        default: 'primary',
      },
      icon: String,
      subtitle: String,
      text: String,
      title: String,
      divider:{
        type:Boolean,
        default:true
      }
    },
  }
</script>
