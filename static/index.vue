<template>
  <bsection>
    <bhead :title="$t('cars')" />
    <no-ssr>
         <div class="carousel-wrapper">
    <VueSlickCarousel v-bind="slickOptions">
      <div v-for="i in 5" :key="i" class="img-wrapper">
        <img :src="`./${i}.jpg`" />
      </div>
    </VueSlickCarousel>
  </div>
    </no-ssr>

    <!-- <v-container>
      <v-row align="center" no-gutters>
        <v-col cols="12" sm="1" class="d-none d-sm-flex">
          <bicon tag="a" size="40" left @click="blath()">mdi-arrow-right</bicon>
        </v-col>

        <v-col cols="12" sm="10" xs="12">
          <v-row>

            <v-col cols="12" sm="4" xs="12" v-for="n in item" :key="n.id">
 <transition name="slide-fade">
              <v-card link elevation="24" width="100%">
                <v-img
                  contain
                  src="https://res.cloudinary.com/cazoo/image/upload/c_scale,f_auto,h_550,q_auto,w_978/aos-cazoo-imagery/2657/cazoo/GF69LUY/05.jpg"
                >
                </v-img>
                <v-card-title>
                  {{ n.title }}
                </v-card-title>
                <v-card-subtitle> 1.5 L </v-card-subtitle>
                <v-chip label class="mr-2 ml-2 mt-n4 mb-2 text-subtitle-2">
                  موديل 2010
                </v-chip>
                <v-chip label class="mr-2 ml-2 mt-n4 mb-2 text-subtitle-2">
                  Automatic
                </v-chip>
                <v-card-text>
                  <p class="text-h6 font-weight-bold black--text">
                    {{ n.sala }} {{ $t("doller") }} / {{ $t("day") }}
                  </p>
                  <v-card-actions>
                    <bbtn outlined color="red" block class="text-h6">
                      {{ $t("details") }}
                    </bbtn>
                  </v-card-actions>
                </v-card-text>
              </v-card>
 </transition>
            </v-col>

          </v-row>
        </v-col>
        <v-col cols="12" sm="1" class="text-right d-none d-sm-flex">
          <bicon tag="a" size="40" left>mdi-arrow-left</bicon>
        </v-col>
      </v-row>
    </v-container> -->
  </bsection>
</template>

<script>
import bsection from "../base/sectiom";
import bhead from "../base/head";
export default {
  data() {
    return {
      page_one: 0,
      page_last: 3,
       slickOptions: {
        slidesToShow: 3,
        arrows: false
      }
    };
  },
  components: {
    bsection,
    bhead,
    bbtn: () => import("@/components/base/btn"),
    bicon: () => import("@/components/base/icon"),
  },
  provide: {
    theme: { isDark: false },
  },
  computed: {
    item() {
      const item = this.$store.getters.cars;
      const m = this.$vuetify.breakpoint.xs
        ? item.slice(0, 1)
        : item.slice(this.page_one, this.page_last);
      return m;
    },
  },
};
</script>
<style >
  .carousel-wrapper {
  padding: 40px;
}
.img-wrapper img {
  margin: auto;
  width: 200px;
  height: 100px;
  background-image: linear-gradient(gray 100%, transparent 0);
}
</style>





