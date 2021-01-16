<template>
  <div>
    <v-row>
      <v-col cols="12" xs="12">
        <v-carousel cycle height="500" :show-arrows="false" hide-delimiters>
          <v-carousel-item :src="require('~/assets/bg2.jpg')">
            <v-overlay absolute="absolute">
              <h1>
                <p class="font-weight-bold display-2 text-h2">
                  {{ $t("title1") }}
                </p>
                <p
                  class="font-weight-bold display-1 text-h4"
                  v-html="$t('title2')"
                ></p>
              </h1>
            </v-overlay>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
    <v-container fluid class="grey lighten-5">
      <v-row class="mt-5">
        <v-col>
          <h1 class="text-center font-weight-bold display-2">
            {{ $t("servrs") }}
          </h1>
          <p class="text-center font-weight-bold display-1 ma-n6 r">
            ـــــــــــــــــــــــــــــ
          </p>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="4" xs="12">
          <v-card flat>
            <v-card-title class="text-center justify-center">
              <v-avatar size="200px">
                <v-icon x-large color="amber accent-4"
                  >mdi-cash-multiple</v-icon
                >
              </v-avatar>
              <h2 v-html="$t('s1')"></h2>
            </v-card-title>
            <v-card-text>
              <h3 class="text-center justify-center">
                {{ $t("s11") }}
              </h3>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" md="4" xs="12">
          <v-card flat>
            <v-card-title class="text-center justify-center">
              <v-avatar size="200px">
                <v-icon x-large color="amber accent-4">mdi-key-chain</v-icon>
              </v-avatar>
              <h2 v-html="$t('s2')"></h2>
            </v-card-title>
            <v-card-text>
              <h3 class="font-weight-bold text-center justify-center">
                {{ $t("s22") }}
              </h3>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" md="4" xs="12">
          <v-card flat>
            <v-card-title class="text-center justify-center">
              <v-avatar size="200px">
                <v-icon x-large color="amber accent-4"
                  >mdi-currency-usd-off</v-icon
                >
              </v-avatar>
              <h2>{{ $t("s3") }}</h2>
            </v-card-title>
            <v-card-text>
              <h3 class="font-weight-bold text-center justify-center">
                {{ $t("s33") }}
              </h3>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <v-row class="mt-6 mb-6 t">
        <v-col cols="12" md="12">
          <h1 class="text-center font-weight-bold display-2">cars</h1>
          <h1></h1>
        </v-col>

        <v-col v-for="item in item" :key="item.id" cols="12" md="4" sm="6">
          <v-card
            max-width="350"
            height="500"
            class="justify-center text-center align-center"
            elevation="24"
            link
            :to="localePath('/' + item.slug)"
          >
            <v-img
              height="350"
              width="100%"
              src="https://media.wired.com/photos/5d09594a62bcb0c9752779d9/master/w_2560%2Cc_limit/Transpo_G70_TA-518126.jpg"
            >
            </v-img>
            <v-card-text>
              <h1 class="text-center justify-center font-wieght-bold">
                {{ item.title }}
              </h1>
              <!-- <v-divider class="mx-4"></v-divider> -->
              <h2 class="mt-6">
                {{ item.sala }} {{ $t("doller") }} / {{ $t("day") }}
              </h2>
            </v-card-text>
            <v-card-actions class="justify-center">
              <v-btn block color="success">
                <h2 class="font-weight-bold text-h5">
                  {{ $t("details") }}
                </h2>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" justify="center" align="center" class="mt-n6">
          <v-btn
            large
            color="light-green accent-2"
            :to="localePath('/viewcars')"
          >
            <h2 class="text-h4 font-wieght-bold">{{ $t("view_all_cars") }}</h2>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  computed: {
     item(){
       const cars = this.$store.getters.cars
      return cars.slice(0,3)
    }
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
};
</script>
<style scoped>
.rr {
  color: #f7ac3d;
}
</style>

