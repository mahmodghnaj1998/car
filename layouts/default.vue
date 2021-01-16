<template>
  <v-app>
    <v-app-bar flat color="black" app dense height="40px">
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
        <v-icon class="mr-4" large color="white">mdi-facebook</v-icon>
      </v-btn>

      <v-divider vertical></v-divider>
      <v-btn icon class="ml-2">
        <v-icon class="mr-4 d-none d-md-flex" large color="white"
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
    <v-navigation-drawer app v-model="drawer" absolute  temporary>
      <v-btn exact block text :to="localePath('/')" class="mb-4">
        <h2 class="font-weight-bold">{{ $t("home") }}</h2>
      </v-btn>

      <v-btn block text class="mb-4" :to="localePath('/viewcars')">
        <h2 class="font-weight-bold">{{ $t("view_all_cars") }}</h2>
      </v-btn>

      <v-btn :to="localePath('/search')" block text color="black" class="mb-4">
        <h2 class="font-weight-bold">{{ $t("search_car") }}</h2>
      </v-btn>

      <v-btn :to="localePath('/about')" block text color="black" class="mb-4">
        <h2 class="font-weight-bold">{{ $t("about") }}</h2>
      </v-btn>
    </v-navigation-drawer>

    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid class="ma-0 pa-0">
        <v-toolbar>
          <nuxt-link :to="localePath('/')" tag="label" style="cursor: pointer">
            <v-toolbar-title class="ml-18">
              <h2 class="font-weight-bold r">
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
              </h2>
            </v-toolbar-title>
          </nuxt-link>
          <v-spacer></v-spacer>
          <v-app-bar-nav-icon
            @click="drawer = true"
            class="black--text d-md-none d-xs-flex txet--h2 amber accent-4"
          ></v-app-bar-nav-icon>

          <v-toolbar-items class="d-none d-md-flex">
            <v-item class="ml-2 mr-2">
              <v-btn exact text :to="localePath('/')">
                <h2 class="font-weight-bold">{{ $t("home") }}</h2>
              </v-btn>
            </v-item>

            <v-item class="ml-2 mr-2">
              <v-btn text :to="localePath('/viewcars')">
                <h2 class="font-weight-bold text">{{ $t("view_all_cars") }}</h2>
              </v-btn>
            </v-item>

            <v-item class="ml-2 mr-2">
              <v-btn :to="localePath('/search')" text color="black">
                <h2 class="font-weight-bold text">{{ $t("search_car") }}</h2>
              </v-btn>
            </v-item>

            <v-item class="ml-2 mr-2">
              <v-btn :to="localePath('/about')" text color="black">
                <h2 class="font-weight-bold text">{{ $t("about") }}</h2>
              </v-btn>
            </v-item>
          </v-toolbar-items>
        </v-toolbar>
        <!-- If using vue-router -->
        <nuxt />
        <v-btn color="green" fab medium dark bottom right fixed>
          <v-icon>mdi-whatsapp</v-icon>
        </v-btn>
      </v-container>
    </v-main>

    <v-footer app dark padless absolute>
      <v-card class="flex" tile>
        <v-card-text class="py-2 white--text text-center">
          {{ new Date().getFullYear() }} — <strong>ALBASHER</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>
<script>
export default {
  data: () => ({
    drawer: false,
    lan: "",
    icons: ["mdi-facebook", "mdi-whatsapp", "mdi-instagram"],
  }),
  computed: {
    lang() {
      return this.$i18n.locale;
    },
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
<style  >
.v-btn--active {
  border-bottom: 5px solid #ffab00;
}
.rr {
  color: #f7ac3d;
}
</style>
