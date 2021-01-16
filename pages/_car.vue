<template>
  <div>
    <v-container fluid class="ma-0 pa-0" v-if="car !== null && car !==  undefined">
      <v-row>
        <v-col cols="12" md="4" class="mt-2 mb-5">
          <v-card class="mr-3 ml-3">
            <v-toolbar color="amber accent-4" dense>
              <v-toolbar-title>
                <h4 class="font-weight-bold">
                  {{ $t("CarFeatures") }}
                  <v-icon class="mb-2" large>mdi-car</v-icon>
                </h4>
              </v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-simple-table>
                <tbody>
                  <tr class="blue-grey lighten-5">
                    <td class="font-weight-bold text-h6">{{ $t("a1") }}</td>
                    <td class="font-weight-bold text-h6 text-left">yes</td>
                  </tr>
                  <tr class="blue-grey lighten-5">
                    <td class="font-weight-bold text-h6">{{ $t("a2") }}</td>
                    <td class="font-weight-bold text-h6 text-left">yes</td>
                  </tr>
                  <tr class="blue-grey lighten-5">
                    <td class="font-weight-bold text-h6">{{ $t("a3") }}</td>
                    <td class="font-weight-bold text-h6 text-left">yes</td>
                  </tr>
                  <tr class="blue-grey lighten-5">
                    <td class="font-weight-bold text-h6">{{ $t("a4") }}</td>
                    <td class="font-weight-bold text-h6 text-left">yes</td>
                  </tr>
                  <tr class="blue-grey lighten-5">
                    <td class="font-weight-bold text-h6">{{ $t("a5") }}</td>
                    <td class="font-weight-bold text-h6 text-left">yes</td>
                  </tr>
                  <tr class="blue-grey lighten-5">
                    <td class="font-weight-bold text-h6">{{ $t("a6") }}</td>
                    <td class="font-weight-bold text-h6 text-left">yes</td>
                  </tr>
                  <tr class="blue-grey lighten-5">
                    <td class="font-weight-bold text-h6">{{ $t("a7") }}</td>
                    <td class="font-weight-bold text-h6 text-left">yes</td>
                  </tr>
                  <tr class="blue-grey lighten-5">
                    <td class="font-weight-bold text-h6">{{ $t("a8") }}</td>
                    <td class="font-weight-bold text-h6 text-left">yes</td>
                  </tr>
                  <tr class="blue-grey lighten-5">
                    <td class="font-weight-bold text-h6">{{ $t("a9") }}</td>
                    <td class="font-weight-bold text-h6 text-left">yes</td>
                  </tr>
                </tbody>
              </v-simple-table>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" xs="12" md="4" >
          <v-card
            max-width="400"
            height="700"
            class="justify-center text-center align-center"
            elevation="24"
          >
            <v-img
              width="100%"
              src="https://media.wired.com/photos/5d09594a62bcb0c9752779d9/master/w_2560%2Cc_limit/Transpo_G70_TA-518126.jpg"
            >
            </v-img>
            <v-card-text>
              <h1 class="text-center justify-center font-weight-bold text-h4">
                {{ car.title }}
              </h1>
              <!-- <v-divider class="mx-4"></v-divider> -->
              <h2 class="mt-6 text-h4 black--text font-weight-bold">
                {{ car.sala }} {{ $t("doller") }} / {{ $t("day") }}
              </h2>
              <v-divider class="mb-4"></v-divider>
              <v-btn block color="info" @click="dialog = true">
                <h2 class="text-h5 font-weight-bold"> {{$t("photos")}}</h2>
              </v-btn>
              <h2 class="mt-8 text-h4 black--text font-weight-bold">
                {{ $t("Lowest_Price_Guarantee") }}
              </h2>
              <h2 class="text-h3 black--text font-weight-bold">
                {{ $t("Book_now") }}
              </h2>
            </v-card-text>
            <v-card-actions>
              <v-btn color="info">
                096654564654 <v-icon>mdi-phone</v-icon></v-btn
              >
              <v-spacer></v-spacer>
              <v-btn color="success"
                >Whatsapp <v-icon>mdi-whatsapp</v-icon></v-btn
              >
            </v-card-actions>
          </v-card>
          <v-dialog
            v-model="dialog"
            transition="dialog-bottom-transition"
            max-width="600"
          >
            <v-carousel>
              <v-carousel-item
                v-for="(item, i) in item"
                :key="i"
                 src="https://media.wired.com/photos/5d09594a62bcb0c9752779d9/master/w_2560%2Cc_limit/Transpo_G70_TA-518126.jpg"
               contain
              ></v-carousel-item>
            </v-carousel>
            <v-btn  color="red" @click="dialog =false " >Close</v-btn>
          </v-dialog>
        </v-col>
        <v-col cols="12" xs="12" md="4" class="mt-2">
          <v-card class="mb-3">
            <v-toolbar color="blue-grey lighten-5" dense>
              <v-toolbar-title>
                <h4 class="font-weight-bold">
                  <v-icon size="30" class="mb-2">mdi-wan</v-icon> {{ $t("aa") }}
                </h4>
              </v-toolbar-title>
            </v-toolbar>
            <v-simple-table class="mb-5">
              <tbody>
                <tr class="blue-grey lighten-5">
                  <td class="font-weight-bold text-h6">{{ $t("a11") }}</td>
                </tr>
                <tr class="blue-grey lighten-5">
                  <td class="font-weight-bold text-h6">
                    {{ $t("a12") }}
                  </td>
                </tr>
                <tr class="blue-grey lighten-5">
                  <td class="font-weight-bold text-h6">
                    {{ $t("a13") }}
                  </td>
                </tr>
              </tbody>
            </v-simple-table>
          </v-card>
          <v-card class="mb-5">
            <v-toolbar color="blue-grey lighten-5" dense>
              <v-toolbar-title>
                <h4 class="font-weight-bold">
                  <v-icon size="30" class="mb-2">mdi-account</v-icon>
                  {{ $t("a14") }}
                </h4>
              </v-toolbar-title>
            </v-toolbar>
            <v-simple-table class="mb-5">
              <tbody>
                <tr class="blue-grey lighten-5">
                  <td class="font-weight-bold text-h6">{{ $t("a15") }}</td>
                </tr>
                <tr class="blue-grey lighten-5">
                  <td class="font-weight-bold text-h6">
                    {{ $t("a16") }}
                  </td>
                </tr>
                <tr class="blue-grey lighten-5">
                  <td class="font-weight-bold text-h6">
                    {{ $t("a17") }}
                  </td>
                </tr>
              </tbody>
            </v-simple-table>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {

  data() {
    return {
      item: [
        {
          id: 1,
          title: "BMW",
          sala: "155",
          slug: "BMW",
        },
        {
          id: 2,
          title: "KIA",
          sala: "155",
          slug: "KIA",
        },
        {
          id: 3,
          title: "DACIA",
          sala: "155",
          slug: "DACIA",
        },
      ],
      dialog: false,
    };
  },
  computed: {
    car() {
      const car = this.$route.params.car;
      const re = this.item.find(({ slug }) => {
        return slug == car;
      });
      return re

    },
  },
    head() {
    return {
      title: this.$route.params.car,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.$t("con3"),
        },
        {
          hid: "keywords",
          name: "keywords",
          content: this.$t("cd2")
         },
      ],
    };
  },
};
</script>
<style  >
.v-btn--active {
  border-bottom: 5px solid white;
}
.rr {
  color: #f7ac3d;
}
</style
