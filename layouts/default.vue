<template>
  <v-app>
    <v-app-bar flat dark app dense height="40px">
      <v-btn
        :to="switchLocalePath('ar')"
        text
        class="white--text"
        v-if="$i18n.locale == 'en'"
      >
        <v-avatar class="mr-2" size="25px">
          <img
            src="https://www.flaticon.com/premium-icon/icons/svg/3373/3373319.svg"
            alt="alt"
          />
        </v-avatar>
        <h4 class="text-h6">{{ lan }}</h4>
      </v-btn>
      <v-btn
        :to="switchLocalePath('en')"
        v-if="$i18n.locale == 'ar'"
        text
        class="white--text"
      >
        <h4 class="text-h6">{{ lan }}</h4>
        <v-avatar class="mr-2" rounded size="25px">
          <img
            src="https://www.flaticon.com/svg/static/icons/svg/1377/1377975.svg"
            alt="alt"
          />
        </v-avatar>
      </v-btn>
      <v-divider vertical></v-divider>
      <v-btn icon class="ml-3 d-none d-md-flex">
        <v-icon class="mr-4" large color="blue">mdi-facebook</v-icon>
      </v-btn>

      <v-divider vertical></v-divider>
      <v-btn icon class="ml-2">
        <v-icon class="mr-4 d-none d-md-flex" large color="deep-orange"
          >mdi-instagram</v-icon
        >
      </v-btn>

      <v-spacer></v-spacer>
      <v-btn v-if="$i18n.locale == 'en'" icon tag="span" class="">
        <v-icon large color="white">mdi-phone</v-icon>
      </v-btn>
      <p class="white--text font-weight-bold mt-4">0963-934952316</p>
      <v-btn icon tag="span">
        <v-icon v-if="$i18n.locale == 'ar'" large color="white"
          >mdi-phone</v-icon
        >
      </v-btn>
      <v-btn
        v-if="$i18n.locale == 'en'"
        icon
        tag="span"
        class="d-none d-md-flex"
      >
        <v-icon large color="white">mdi-phone</v-icon>
      </v-btn>
      <p class="white--text font-weight-bold mt-4 d-none d-md-flex">88 801</p>
      <v-btn
        v-if="$i18n.locale == 'ar'"
        icon
        tag="span"
        class="d-none d-md-flex"
      >
        <v-icon large color="white">mdi-phone</v-icon>
      </v-btn>
    </v-app-bar>
    <drawer v-model="drawer_app" :items="item" />
    <v-main>
      <v-container fluid class="ma-0 pa-0">
        <v-toolbar
          flat
          id="home-app-bar"
          height="60px"
          style="background-color: #f2f2f2"
        >
          <nuxt-link :to="localePath('/')" tag="label" style="cursor: pointer">
            <v-toolbar-title class="ml-18">
              <!-- <h2 class="font-weight-bold r">
                <v-icon
                  v-if="$i18n.locale == 'en'"
                  class="mb-4"
                  color="amber accent-4"
                  x-large
                  >mdi-car</v-icon
                >
                ALBASHER

                <span class="text-subtitle-1 caption black--text"
                  >Car Rent</span
                >
                <v-icon
                  v-if="$i18n.locale == 'ar'"
                  class="mb-4"
                  color="amber accent-4"
                  x-large
                  >mdi-car</v-icon
                >
              </h2> -->

                <v-img :src="require('~/assets/k.svg')"  alt="alt" >
                </v-img>
            </v-toolbar-title>
          </nuxt-link>

          <v-spacer></v-spacer>
          <div>
            <v-tabs class="hidden-sm-and-down" optional>
              <v-tab
                v-for="(name, i) in item"
                :key="i"
                :to="localePath('/' + name.path)"
                :exact="name === 'home'"
                :ripple="false"
                active-class="text--primary"
                class="font-weight-bold text-h6"
                min-width="96"
                text
                style="background-color: #f1f1f1"
              >
                {{ $t(name.name) }}
              </v-tab>
            </v-tabs>
          </div>
          <v-app-bar-nav-icon
            @click="drawer_app = true"
            class="hidden-md-and-up"
          ></v-app-bar-nav-icon>
        </v-toolbar>
        <v-btn color="green" fab medium dark bottom right fixed>
          <v-icon>mdi-whatsapp</v-icon>
        </v-btn>
        <!-- If using vue-router -->
        <v-expand-x-transition>
          <nuxt />
        </v-expand-x-transition>
      </v-container>
    </v-main>
    <v-footer app dark padless absolute :max-height="max">
      <v-container fluid class="ma-0 pa-0">
        <v-row no-gutters>
          <v-col cols="12" class="text-center">
            <base-btn
              text
              v-for="(item, i) in icons"
              :key="i"
              class="mb-2"
              color="primary"
              square
              target="_blank"
            >
              <v-icon size="40" v-text="item.icon" :color="item.color" />
            </base-btn>
          </v-col>
        </v-row>
      </v-container>
      <!-- <v-card class="flex" tile>
        <v-card-text class="py-2 white--text text-center">
          {{ new Date().getFullYear() }} — <strong>ALBASHER</strong>
        </v-card-text>
      </v-card> -->
    </v-footer>
  </v-app>
</template>
<script>
import drawer from "~/components/base/drawer.vue";
import BaseBtn from "~/components/base/btn";
export default {
  components: { drawer },
  data: () => ({
    drawer_app: false,
    lan: "",
    icons: [
      { icon: "mdi-facebook", color: "blue" },
      { icon: "mdi-whatsapp", color: "green" },
      { icon: "mdi-snapchat", color: "yellow accent-2" },
      { icon: "mdi-instagram", color: "deep-orange" },
    ],
    item: [
      { name: "home", path: "/" },
      { name: "view_all_cars", path: "viewcars" },
      { name: "search_car", path: "search" },
      { name: "about", path: "about" },
    ],
  }),
  computed: {
    lang() {
      return this.$i18n.locale;
    },
    max() {
      return this.$vuetify.breakpoint.xs ? 120 : 60;
    },
  },
  components: {
    drawer,
    BaseBtn,
  },
  watch: {
    lang(val) {
      if (val == "en") {
        this.lan = "العربية";
        this.$vuetify.rtl = false;
      } else if (val == "ar") {
        this.lan = "English";
        this.$vuetify.rtl = true;
      }
    },
  },
  mounted() {
    let len = this.$i18n.locale;
    if (len == "en") {
      this.lan = "العربية";
      this.$vuetify.rtl = false;
    } else if (len == "ar") {
      this.lan = "English";
      this.$vuetify.rtl = true;
    }
  },
};
</script>
<style lang="sass">
#home-app-bar
  .v-tabs-slider
    max-width: 24px
    margin: 0 auto

    .v-tab
      &::before
        display: none

  .extra-padding
    padding-bottom: 96px !important
    padding-top: 96px !important

    @media screen and (max-width: 959px)
      padding-top: 48px !important
      padding-bottom: 48px !important
</style>
