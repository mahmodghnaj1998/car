<template>
  <div id="car">
    <v-container>
      <v-row>
        <v-col cols="12" xs="12" md="8">
          <v-img
            class="mb-5"
            src="https://res.cloudinary.com/cazoo/image/upload/c_scale,f_auto,h_550,q_auto,w_978/aos-cazoo-imagery/2657/cazoo/GF69LUY/05.jpg"
          >
          </v-img>
          <b-btn
            class="text-h6 white--text"
            color="deep-purple darken-4"
            @click="dialog = true"
          >
            <v-icon size="35" class="mr-2 ml-2">mdi-image-multiple</v-icon>
            {{ $t("photos") }}
          </b-btn>
        </v-col>
        <v-col cols="12" xs="12" md="4">
          <b-title :title="car.title" :class="classes" class="pt-4" />
          <b-stitle
            title="L1.5 sport"
            size="text-h6"
            :class="classes"
          ></b-stitle>
          <v-card color="grey lighten-3" flat  elevation="5">
            <v-card-title :class="$i18n.locale == 'ar' ? 'justify-end' : ''">
              {{ car.sala }} {{ $t("doller") }} / {{ $t("day") }}
            </v-card-title>
            <v-chip label class="mr-2 ml-2 mt-n4 mb-2 text-subtitle-2">
              {{ $t("a19") }} 2010
            </v-chip>
            <v-chip label class="mr-2 ml-2 mt-n4 mb-2 text-subtitle-2">
              Automatic
            </v-chip>
            <v-card-text>
              <v-btn block color="info" @click="dialog = true">
                <h2 class="text-h5 font-weight-bold">{{ $t("photos") }}</h2>
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
        </v-col>
      </v-row>
      <b-section>
        <b-head :title="$t('CarFeatures')" />
        <v-container>
          <v-row justify="center" class="mb-4">
            <v-col cols="12" md="7">
              <v-simple-table >
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
                  <tr class="blue-grey lighten-5">
                    <td class="font-weight-bold text-h6">{{ $t("a20") }}</td>
                    <td class="font-weight-bold text-h6 text-left">yes</td>
                  </tr>
                  <tr class="blue-grey lighten-5">
                    <td class="font-weight-bold text-h6">{{ $t("a21") }}</td>
                    <td class="font-weight-bold text-h6 text-left">yes</td>
                  </tr>
                </tbody>
              </v-simple-table>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col cols="12">
              <b-head :title="$t('order')" />
            </v-col>
            <v-col cols="12" md="6">
              <v-card class="mb-3" elevation="5">
                <v-toolbar color="blue-grey lighten-5" dense>
                  <v-toolbar-title>
                    <h4 class="font-weight-bold">
                      <v-icon size="30" class="mb-2">mdi-wan</v-icon>
                      {{ $t("aa") }}
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
            </v-col>
            <v-col>
              <v-card class="mb-5" elevation="5">
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
      </b-section>
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
        <v-btn color="red" @click="dialog = false">Close</v-btn>
      </v-dialog>
    </v-container>
  </div>
</template>
<script>
import goTo from "vuetify/es5/services/goto";
export default {
  data() {
    return {
      item: this.$store.getters.cars,
      dialog: false,
    };
  },
  computed: {
    car() {
      const car = this.$route.params.car;
      const re = this.item.find(({ slug }) => {
        return slug == car;
      });
      return re;
    },
    classes() {
      return this.$vuetify.breakpoint.xs ? "text-center" : "";
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
          content: this.$t("cd2"),
        },
      ],
    };
  },
  components: {
    BBtn: () => import("@/components/base/btn"),
    BTitle: () => import("@/components/base/title"),
    BStitle: () => import("@/components/base/subhead"),
    BSection: () => import("@/components/base/sectiom"),
    BHead: () => import("@/components/base/head"),
  },
  mounted() {
    goTo(0);
  },
};
</script>
<style >
#car {
  background-color: #f2f2f2;
}
</style>

