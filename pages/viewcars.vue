<template>
  <div id="view">
    <base-image
      :src="require('~/assets/77.jpg')"
      :title="$t('view_all_cars')"
      item="ALL VIEW CARS"
    />
    <base-section>
      <base-head :title="$t('view_all_cars')" />
      <v-container>
        <v-row>
          <v-col cols="12" xs="12" sm="6" md="4" v-for="n in item" :key="n.id">
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
                :src="'https://api.albasheerrentcar.com/storage/' + n.image"
              >
              </v-img>
              <v-card-title>
                {{ n.name.toUpperCase() }}
              </v-card-title>
              <v-card-subtitle> {{ n.size }} </v-card-subtitle>
              <v-chip label class="mr-2 ml-2 mt-n4 mb-2 text-subtitle-2">
                {{ $t("a19") }} {{ n.model }}
              </v-chip>
              <v-chip label class="mr-2 ml-2 mt-n4 mb-2 text-subtitle-2">
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
          </v-col>
        </v-row>
        <div class="text-center">
          <v-container>
            <v-row justify="center">
              <v-col cols="8">
                <v-container class="max-width">
                  <v-pagination
                    v-model="page"
                    class="my-4"
                    :length="count"
                  ></v-pagination>
                </v-container>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </v-container>
    </base-section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      page: 1,
      count: "",
    };
  },
  computed: {
    item() {
      const cars2 = this.$store.getters.cars;
      this.count = Math.ceil(cars2.length / 9);
      const page = cars2.slice(this.page * 9 - 9, this.page * 9);
      return page;
    },
  },
  head() {
    return {
      title: this.$t("view_all_cars"),
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.$t("con2"),
        },
        {
          hid: "keywords",
          name: "keywords",
          content: this.$t("cd"),
        },
      ],
    };
  },
  components: {
    BaseImage: () => import("@/components/about/index"),
    BaseSection: () => import("@/components/base/sectiom"),
    BaseHead: () => import("@/components/base/head"),
    bbtn: () => import("@/components/base/btn"),
  },
};
</script>
<style scoped>
#view {
  background-color: #f2f2f2;
}
</style>
