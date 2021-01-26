<template>
 <bsection class="grey lighten-5">
   <bhead class="mt-n10"  :title="$t('servrs2')" />
<v-responsive>
<v-container>
  <v-row>
        <v-col
            v-for="card in cards"
            :key="card.title"
            cols="12"
            sm="4"
            md="4"
          >
          <bcard :divider="false" align="center"  v-bind="card"/>
          </v-col>
  </v-row>

</v-container>
</v-responsive>
 </bsection>
</template>
<script>
export default {
  data () {
    return {
      cards:[
        {icon:"mdi-car",title:this.$t("e1"),text:this.$t("e11")},
        {icon:"mdi-car",title:this.$t("e2"),text:this.$t("e22")},
         {icon:"mdi-car",title:this.$t("e3"),text:this.$t("e33")},
      ]
    }
  },
  components: {
    bsection: () => import("@/components/base/sectiom"),
    bhead: () => import("@/components/base/head"),
    bcard : () => import("@/components/base/card"),
    bdivider: () => import("@/components/base/divider"),
  },
    provide: {
    theme: { isDark: false },
  },
};
</script>
