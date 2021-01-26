<template>
  <div>
    <bsection >
      <v-img
      :src="require('~/assets/44.png')"
      :min-height="minHeight"
      >
       <v-container class="fill-height px-4 py-12 ">
        <v-responsive
          class="d-flex align-start mr-auto"
          height="100%"
          max-width="700"
          width="100%"
        >
          <base-heading :divier="false"  :title="$t('img')" />

          <base-body >
           <span class="b"> {{$t("imgd")}} </span>
          </base-body>

          <div
            :class="$vuetify.breakpoint.smAndDown ? 'flex-column align-start' : 'align-center'"
            class="d-flex flex-wrap"
          >
            <base-btn
           @click="$vuetify.goTo(10000)"
            color="red"
            class="mr-auto text-h6"
            >
              {{$t("us")}}
            </base-btn>
          </div>
        </v-responsive>
      </v-container>

      </v-img>
    </bsection>
  </div>
</template>
<script>
export default {
    components: {
    bsection: () => import("@/components/base/sectiom"),
    BaseHeading: () => import("@/components/base/head"),
    BaseBtn:() => import("@/components/base/btn"),
    BaseBody:() => import("@/components/base/body")
  },
  computed: {
      minHeight () {
        const height = this.$vuetify.breakpoint.mdAndUp ? '100vh' : '50vh'

        return `calc(${height} - ${this.$vuetify.application.top}px)`
      },
    },
     provide: {
    theme: { isDark: false },
  }
}
</script>
<style >
  .b{
    color:#881010;;
  }
</style>
