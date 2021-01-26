<template>
  <bsection id="features" class="secondary">
    <v-responsive class="mx-auto" max-width="1350">
      <v-container fluid>
        <v-row>
          <v-col
            v-for="card in cards"
            :key="card.title"
            cols="12"
            sm="4"
            md="3"
          >
            <bcard align="center" dark v-bind="card" />
          </v-col>
        </v-row>
      </v-container>
    </v-responsive>
  </bsection>
</template>

<script>
import bsection from "../base/sectiom";
import bcard from "../base/card";
export default {
  name: "SectionFeatures",
  components: {
    bsection,
    bcard,
  },
  data () {
    return{
cards: [
      {
          icon: 'mdi-cash-multiple',
          title: this.$t('s1'),
          text: this.$t('s11'),
        },
        {
          icon: 'mdi-key-chain',
          title: this.$t("s2"),
          text: this.$t("s22"),
        },
        {
          icon: 'mdi-currency-usd-off',
          title: this.$t("s3"),
          text: this.$t("s33"),
        },
        {
          icon: 'mdi-headphones',
          title: this.$t("s4"),
          text: this.$t("s44"),
        },
    ],
    }

  },
};
</script>
