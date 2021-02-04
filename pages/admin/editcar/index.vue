<template>
  <div id="view">
    <v-container>
      <v-row>
        <v-col cols="12" xs="12" sm="6" md="4" v-for="n in item" :key="n.id">
          <v-card flat elevation="10" width="300" outlined>
            <v-img
              height="200"
              :src="'http://127.0.0.1:8000/storage/' + n.image"
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
                <v-btn
                  color="success"
                  :to="`/admin/editcar/${n.slug}`"
                  class="text-h6"
                >
                  EDIT
                </v-btn>
                <v-btn color="red" @click="delet(n.id)" class="text-h6">
                  DElET
                </v-btn>
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
  methods: {
    delet(id) {
      this.$axios.$delete(`car/${id}`).then((re) => {
        this.$store.dispatch("deletcar", id);
      });
    },
  },
  layout: "admin",
};
</script>
<style scoped>
#view {
  background-color: #f2f2f2;
}
</style>
