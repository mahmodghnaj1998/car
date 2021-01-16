<template>
  <div>
    <v-container fluid class="ma-0 pa-0">
      <v-row>
        <v-col v-for="item in item" :key="item.id" cols="12" md="4" sm="6">
          <v-card
            :to="localePath('/' + item.slug)"
            max-width="350"
            height="500"
            class="justify-center text-center align-center"
            elevation="24"
            link
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
    </v-container>
  </div>
</template>
<script>
export default {
  computed: {
     item(){
      return this.$store.getters.cars
    }
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
          content: this.$t("cd")
         },
      ],
    };
  },
};
</script>
