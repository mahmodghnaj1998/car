<template>
  <div id="home">
    <section id="hero">
      <v-carousel cycle height="600" :show-arrows="false" hide-delimiters>
        <v-carousel-item
          v-for="(item, i) in src"
          :key="i"
          :min-height="minHeight"
          :src="require(`@/assets/${item.path}.jpg`)"
          class="white--text"
          gradient="to right, rgba(5, 11, 31, .6), rgba(5, 11, 31, .6)"
        >
          <v-container class="fill-height px-4 py-12">
            <v-responsive
              class="d-flex align-center"
              height="100%"
              max-width="700"
              width="100%"
            >
              <Title :title="$t('title1')" />

              <Body>
                {{ $t("title2") }}
              </Body>

              <div
                :class="
                  $vuetify.breakpoint.xsAndDown
                    ? 'flex-column align-start'
                    : 'align-center'
                "
                class="d-flex flex-wrap"
              >
                <Btn :to="localePath('/search')" class="pa-1 text-h6">
                  {{ $t("search_car") }}
                </Btn>

                <span class="font-weight-bold ml-6 mr-4 my-4">{{
                  $t("or")
                }}</span>

                <Btn
                  :to="localePath('/viewcars')"
                  :ripple="false"
                  class="pa-1 text-h6"
                  height="auto"
                  text
                >
                  {{ $t("view_all_cars") }}
                </Btn>
              </div>
            </v-responsive>
          </v-container>
        </v-carousel-item>
      </v-carousel>
    </section>
    <servic />
    <bcard />
    <cars />
    <servicc />
    <bimg />
  </div>
</template>
<script>
import Title from "~/components/base/title";
import Btn from "~/components/base/btn.vue";
import Body from "~/components/base/body";
import servic from "~/components/servic/index";
import bcard from "~/components/servic/card";
import cars from "~/components/cars/index";
import servicc from "~/components/servic2/index";
import bimg from "~/components/img/img";

export default {
  data() {
    return {
      src: [{ path: "11" }, { path: "22" }, { path: "33" }],
    };
  },
  computed: {
    item() {
      const cars = this.$store.getters.cars;
      return cars.slice(0, 3);
    },
    minHeight() {
      const height = this.$vuetify.breakpoint.mdAndUp ? "100vh" : "50vh";

      return `calc(${height} - ${this.$vuetify.application.top}px)`;
    },
  },
  head() {
    return {
      title: this.$t("title"),
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.$t("con1"),
        },
      ],
    };
  },
  components: {
    Btn,
    Title,
    Body,
    servic,
    bcard,
    cars,
    servicc,
    bimg,
  },
  provide: {
    theme: { isDark: true },
  },
};
</script>
<style scoped>
#home {
  background-color: #f2f2f2;
}
.rr {
  color: #f7ac3d;
}
</style>

