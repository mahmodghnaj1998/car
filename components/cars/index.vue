<template>
  <bsection>
    <bhead :title="$t('cars')" />

    <v-container>
      <v-row align="center" no-gutters>
        <v-col cols="12" sm="1" class="d-none d-sm-flex">
          <bicon
            v-if="$i18n.locale == 'ar'"
            tag="a"
            size="40"
            left
            @click="showNext"
            class="mr-auto"
            >mdi-arrow-right</bicon
          >
          <bicon
            v-if="$i18n.locale == 'en'"
            tag="a"
            size="40"
            left
            @click="showPrev"
            class="mr-auto"
            >mdi-arrow-left</bicon
          >
        </v-col>

        <v-col cols="12" sm="10" xs="10">
          <v-row>
            <v-col cols="12">
              <client-only>
                <div class="carousel-wrapper">

                  <VueSlickCarousel v-bind="slickOptions" ref="carousel" v-if="item.length" >
                    <div v-for="n in item" :key="n.id">
                      <v-card
                        flat
                        link
                        elevation="10"
                        width="300"
                        outlined
                        :to="localePath('/' + n.slug)"
                      >
                        <v-img
                          height="200"
                          :src="'http://127.0.0.1:8000/storage/' + n.image"
                        >
                        </v-img>
                        <v-card-title>
                          {{ n.name.toUpperCase() }}
                        </v-card-title>
                        <v-card-subtitle> {{ n.size }} </v-card-subtitle>
                        <v-chip
                          label
                          class="mr-2 ml-2 mt-n4 mb-2 text-subtitle-2"
                        >
                          {{ $t("a19") }} {{ n.model }}
                        </v-chip>
                        <v-chip
                          label
                          class="mr-2 ml-2 mt-n4 mb-2 text-subtitle-2"
                        >
                          Automatic
                        </v-chip>
                        <v-card-text>
                          <p class="text-h6 font-weight-bold black--text">
                            {{ n.price }} {{ $t("doller") }} / {{ $t("day") }}
                          </p>
                          <v-card-actions>
                            <bbtn outlined color="red" block class="text-h6">
                              {{ $t("details") }}
                            </bbtn>
                          </v-card-actions>
                        </v-card-text>
                      </v-card>
                    </div>
                  </VueSlickCarousel>
                </div>
              </client-only>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" sm="1" class="text-right d-none d-sm-flex">
          <bicon
            v-if="$i18n.locale == 'ar'"
            tag="a"
            size="40"
            left
            @click="showPrev"
            >mdi-arrow-left</bicon
          >
          <bicon
            v-if="$i18n.locale == 'en'"
            tag="a"
            size="40"
            left
            @click="showNext"
            >mdi-arrow-right</bicon
          >
        </v-col>
      </v-row>
      <v-row align="center" class="d-sm-none d-xs-flex">
        <v-col cols="12" align="center">
          <bicon
            v-if="$i18n.locale == 'ar'"
            tag="a"
            size="40"
            left
            @click="showNext"
            >mdi-arrow-right</bicon
          >
          <bicon
            v-if="$i18n.locale == 'en'"
            tag="a"
            size="40"
            left
            @click="showPrev"
            >mdi-arrow-left</bicon
          >

          <bicon
            v-if="$i18n.locale == 'ar'"
            tag="a"
            size="40"
            left
            @click="showPrev"
            >mdi-arrow-left</bicon
          >
          <bicon
            v-if="$i18n.locale == 'en'"
            tag="a"
            size="40"
            left
            @click="showNext"
            >mdi-arrow-right</bicon
          >
        </v-col>
      </v-row>
      <v-row>
        <v-col align="center" class="mt-4">
          <bbtn
            :to="localePath('/search')"
            class="white--text text-h6"
            color="grey darken-4"
          >
            {{ $t("search_car") }}
          </bbtn>
        </v-col>
      </v-row>
    </v-container>
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
        arrows: false,
        initialSlide: 2,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 3,
        swipeToSlide: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      },
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
      return this.$store.getters.cars;
    },
  },
  methods: {
    showNext() {
      this.$refs.carousel.next();
    },
    showPrev() {
      this.$refs.carousel.prev();
    },
  },
};
</script>
<style >
</style>





