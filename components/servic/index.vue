<template>
  <div id="ser">
  <bsection id="theme-features">
    <bhead :title="$t('servrs')">
      {{$t('servrsd')}}
    </bhead>
  </bsection>
  </div>
</template>

<script>
import bsection from "../base/sectiom"
import bhead from "../base/head"

  export default {
    name: 'SectionThemeFeatures',

    data () {
      return{
       cards: [
        {
          title: this.$t('s1'),
          icon: 'mdi-cash-multiple',
          text:this.$t('s11'),
        },
         {
          title: this.$t('s2'),
          icon: 'mdi-key-chain',
          text:this.$t('s22'),
        },
         {
          title: this.$t('s3'),
          icon: 'mdi-currency-usd-off',
          text:this.$t('s33'),
        },
      ],
      }

    },
    components:{
      bsection,
      bhead,
    },
      provide: {
    theme: { isDark: false },
  },
  }
</script>
<style  scoped>
#ser{
  background-color: white;
}
</style>
