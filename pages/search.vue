<template>
  <div id="ser">
    <base-image
      :src="require('~/assets/66.jpg')"
      :title="$t('search_car')"
      item="Search Car"
    />
    <base-section>
      <base-head :title="$t('All_Brands')" />
      <v-container>
        <v-row>
          <v-btn
            v-for="n in type"
            fab
            text
            :key="n.logo"
            class="mr-6 ml-6 mb-6"
          >
            <v-avatar @click="search(n.name)" size="70">
              <img :src="n.logo" alt="alt" />
            </v-avatar>
          </v-btn>
        </v-row>

        <v-row v-if="!new_car">
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
                :src="'http://api.albasheerrentcar.com/demo/ecom/storage/' + n.image"
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

        <v-row v-if="new_car">
          <v-col
            cols="12"
            xs="12"
            sm="6"
            md="4"
            v-for="n in new_car"
            :key="n.id"
          >
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
                :src="'http://api.albasheerrentcar.com/demo/ecom/storage/' + n.image"
              >
              </v-img>
              <v-card-title>
                {{ n.name }}
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

        <div class="text-center" v-if="!new_car">
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
import goTo from "vuetify/es5/services/goto";
export default {
  data() {
    return {
      cars: [
        {
          logo:
            "https://www.car-logos.org/wp-content/uploads/2011/09/abarth1.png",
          name: "Abarth",
        },
        {
          logo:
            "https://www.car-logos.org/wp-content/uploads/2011/09/ac-cars.png",
          name: "AC",
        },
        {
          logo:
            "https://www.car-logos.org/wp-content/uploads/2011/09/acura.png",
          name: "Acura",
        },
        {
          logo:
            "https://www.car-logos.org/wp-content/uploads/2011/09/aixam.png",
          name: "Aixam",
        },
        {
          logo:
            "https://www.car-logos.org/wp-content/uploads/2011/09/alfa_romeo.png",
          name: "Alfa Romeo",
        },
        {
          logo:
            "https://www.car-logos.org/wp-content/uploads/2011/09/ariel.png",
          name: "Ariel",
        },
        {
          logo:
            "https://www.car-logos.org/wp-content/uploads/2011/10/arrinera-logo.png",
          name: "Arrinera",
        },
        {
          logo:
            "https://www.car-logos.org/wp-content/uploads/2011/09/aston_martin.png",
          name: "Aston Martin",
        },
        {
          logo: "https://www.car-logos.org/wp-content/uploads/2011/09/audi.png",
          name: "Audi",
        },
        {
          logo:
            "https://www.car-logos.org/wp-content/uploads/2011/09/bentley.png",
          name: "Bentley",
        },
        {
          logo: "https://www.car-logos.org/wp-content/uploads/2011/09/bmw.png",
          name: "BMW",
        },
        {
          logo:
            "https://www.car-logos.org/wp-content/uploads/2011/09/bugatti.png",
          name: "Bugatti",
        },
        {
          logo:
            "https://www.car-logos.org/wp-content/uploads/2011/09/buick.png",
          name: "Buick",
        },
        {
          logo:
            "https://www.car-logos.org/wp-content/uploads/2011/09/cadillac.png",
          name: "Cadillac",
        },
        {
          logo:
            "https://www.car-logos.org/wp-content/uploads/2011/09/caterham.png",
          name: "Caterham",
        },
        {
          logo:
            "https://www.car-logos.org/wp-content/uploads/2011/09/chevrolet.png",
          name: "Chevrolet",
        },
        {
          logo:
            "https://www.car-logos.org/wp-content/uploads/2011/09/chrysler.png",
          name: "Chrysler",
        },
        {
          logo:
            "https://www.car-logos.org/wp-content/uploads/2011/09/citroen.png",
          name: "Citroën",
        },
        {
          logo:
            "https://www.car-logos.org/wp-content/uploads/2011/09/corvette.png",
          name: "Corvette",
        },
        {
          logo:
            "https://www.car-logos.org/wp-content/uploads/2011/09/dacia.png",
          name: "Dacia",
        },
        {
          logo: "https://www.car-logos.org/wp-content/uploads/2011/09/daf.png",
          name: "Daf",
        },
        {
          logo:
            "https://www.car-logos.org/wp-content/uploads/2011/09/daihat.png",
          name: "Daihatsu",
        },
        {
          logo:
            "https://www.car-logos.org/wp-content/uploads/2011/09/dodge.png",
          name: "Dodge",
        },
        {
          logo:
            "https://www.car-logos.org/wp-content/uploads/2011/10/drmotor.png",
          name: "DR Motor",
        },
        {
          logo:
            "https://www.car-logos.org/wp-content/uploads/2011/09/elfin.png",
          name: "Elfin",
        },
        {
          logo:
            "https://www.car-logos.org/wp-content/uploads/2011/09/ferrari.png",
          name: "Ferrari",
        },
        {
          logo: "https://www.car-logos.org/wp-content/uploads/2011/09/fiat.png",
          name: "Fiat",
        },
        {
          logo: "https://www.car-logos.org/wp-content/uploads/2011/09/ford.png",
          name: "Ford",
        },
        {
          logo: "https://www.car-logos.org/wp-content/uploads/2011/09/gaz.png",
          name: "Gaz",
        },
        {
          logo:
            "https://www.car-logos.org/wp-content/uploads/2011/09/geely.png",
          name: "Geely",
        },
        {
          logo:
            "https://www.car-logos.org/wp-content/uploads/2011/09/gillet.png",
          name: "Gillet",
        },
        {
          logo:
            "https://www.car-logos.org/wp-content/uploads/2011/09/ginetta.png",
          name: "Ginetta",
        },
        {
          logo: "https://www.car-logos.org/wp-content/uploads/2011/09/gm.png",
          name: "General Motors",
        },
        {
          logo: "https://www.car-logos.org/wp-content/uploads/2011/09/gmc.png",
          name: "GMC",
        },
        {
          logo:
            "https://www.car-logos.org/wp-content/uploads/2013/10/Great-Wall.png",
          name: "Great Wall",
        },
        {
          logo:
            "https://www.car-logos.org/wp-content/uploads/2011/09/gumpert.png",
          name: "Gumpert",
        },
        {
          logo:
            "https://www.car-logos.org/wp-content/uploads/2011/10/hennessey.png",
          name: "Hennessey logo",
        },
        {
          logo:
            "https://www.car-logos.org/wp-content/uploads/2011/10/holden.png",
          name: "Holden",
        },
        {
          logo:
            "https://www.car-logos.org/wp-content/uploads/2011/09/honda.png",
          name: "Honda",
        },
        {
          logo:
            "https://www.car-logos.org/wp-content/uploads/2011/09/hummer.png",
          name: "Hummer",
        },
        {
          logo:
            "https://www.car-logos.org/wp-content/uploads/2011/09/hyundai.png",
          name: "Hyundai",
        },
        {
          logo: "https://www.car-logos.org/wp-content/uploads/2011/09/inf.png",
          name: "Infiniti",
        },
        {
          logo:
            "https://www.car-logos.org/wp-content/uploads/2011/09/isuzu.png",
          name: "Isuzu",
        },
        {
          logo: "https://www.car-logos.org/wp-content/uploads/2011/09/jagu.png",
          name: "Jaguar",
        },
        {
          logo: "https://www.car-logos.org/wp-content/uploads/2011/09/jeep.png",
          name: "Jeep",
        },
        {
          logo: "https://www.car-logos.org/wp-content/uploads/2011/09/joss.png",
          name: "Joss",
        },
        {
          logo: "https://www.car-logos.org/wp-content/uploads/2011/09/kia.png",
          name: "Kia",
        },
        {
          logo:
            "https://www.car-logos.org/wp-content/uploads/2011/09/koenigsegg.png",
          name: "Koenigsegg",
        },
        {
          logo: "https://www.car-logos.org/wp-content/uploads/2011/09/lada.png",
          name: "Lada",
        },
        {
          logo: "https://www.car-logos.org/wp-content/uploads/2011/09/lamb.png",
          name: "Lamborghini",
        },
        {
          logo:
            "https://www.car-logos.org/wp-content/uploads/2011/09/lancia.png",
          name: "Lancia",
        },
        {
          logo:
            "https://www.car-logos.org/wp-content/uploads/2011/09/land-rover.png",
          name: "Land Rover",
        },
        {
          logo:
            "https://www.car-logos.org/wp-content/uploads/2011/09/lexus.png",
          name: "Lexus",
        },
        {
          logo: "https://www.car-logos.org/wp-content/uploads/2011/09/linc.png",
          name: "Lincoln",
        },
        {
          logo:
            "https://www.car-logos.org/wp-content/uploads/2011/09/lotus.png",
          name: "Lotus",
        },
        {
          logo:
            "https://www.car-logos.org/wp-content/uploads/2011/11/luxgen-logo.png",
          name: "Luxgen",
        },
        {
          logo:
            "https://www.car-logos.org/wp-content/uploads/2011/11/mahindra.png",
          name: "Mahindra",
        },
        {
          logo:
            "https://www.car-logos.org/wp-content/uploads/2011/12/Maruti_Suzuki.png",
          name: "Maruti Suzuki",
        },
        {
          logo: "https://www.car-logos.org/wp-content/uploads/2011/09/mase.png",
          name: "Maserati",
        },
        {
          logo:
            "https://www.car-logos.org/wp-content/uploads/2011/09/maybach.png",
          name: "Maybach",
        },
        {
          logo:
            "https://www.car-logos.org/wp-content/uploads/2011/09/mazda.png",
          name: "Mazda",
        },
        {
          logo:
            "https://www.car-logos.org/wp-content/uploads/2011/09/mclaren.png",
          name: "Mclaren",
        },
        {
          logo:
            "https://www.car-logos.org/wp-content/uploads/2011/09/marchedrs.png",
          name: "Mercedes",
        },
        {
          logo: "https://www.car-logos.org/wp-content/uploads/2011/09/mg.png",
          name: "MG",
        },
        {
          logo: "https://www.car-logos.org/wp-content/uploads/2011/09/mini.png",
          name: "Mini",
        },
        {
          logo:
            "https://www.car-logos.org/wp-content/uploads/2011/09/mitub.png",
          name: "Mitsubishi",
        },
        {
          logo:
            "https://www.car-logos.org/wp-content/uploads/2011/09/morgan.png",
          name: "Morgan Motor",
        },
        {
          logo:
            "https://www.car-logos.org/wp-content/uploads/2011/09/mustang.png",
          name: "Mustang logo",
        },
        {
          logo:
            "https://www.car-logos.org/wp-content/uploads/2011/09/nissan.png",
          name: "Nissan",
        },
        {
          logo:
            "https://www.car-logos.org/wp-content/uploads/2011/09/noble.png",
          name: "Noble",
        },
        {
          logo: "https://www.car-logos.org/wp-content/uploads/2011/09/opel.png",
          name: "Opel",
        },
        {
          logo:
            "https://www.car-logos.org/wp-content/uploads/2011/09/pagani.png",
          name: "Pagani",
        },
        {
          logo:
            "https://www.car-logos.org/wp-content/uploads/2011/09/panoz.png",
          name: "Panoz",
        },
        {
          logo:
            "https://www.car-logos.org/wp-content/uploads/2011/09/perodua.png",
          name: "Perodua",
        },
        {
          logo: "https://www.car-logos.org/wp-content/uploads/2011/09/peug.png",
          name: "Peugeot",
        },
        {
          logo:
            "https://www.car-logos.org/wp-content/uploads/2011/09/piaggio.png",
          name: "Piaggio",
        },
        {
          logo:
            "https://www.car-logos.org/wp-content/uploads/2011/09/pininfarina.png",
          name: "Pininfarina",
        },
        {
          logo:
            "https://www.car-logos.org/wp-content/uploads/2011/09/porsche.png",
          name: "Porsche",
        },
        {
          logo:
            "https://www.car-logos.org/wp-content/uploads/2011/09/proton.png",
          name: "Proton",
        },
        {
          logo:
            "https://www.car-logos.org/wp-content/uploads/2011/09/renault.png",
          name: "Renault",
        },
        {
          logo: "https://www.car-logos.org/wp-content/uploads/2011/09/reva.png",
          name: "Reva",
        },
        {
          logo:
            "https://www.car-logos.org/wp-content/uploads/2012/01/rimac-150x150.png",
          name: "Rimac",
        },
        {
          logo:
            "https://www.car-logos.org/wp-content/uploads/2011/09/rolls-royce.png",
          name: "Rolls Royce",
        },
        {
          logo: "https://www.car-logos.org/wp-content/uploads/2011/09/ruf.png",
          name: "Ruf logo",
        },
        {
          logo: "https://www.car-logos.org/wp-content/uploads/2011/09/saab.png",
          name: "Saab",
        },
        {
          logo:
            "https://www.car-logos.org/wp-content/uploads/2011/09/scania.png",
          name: "Scania",
        },
        {
          logo:
            "https://www.car-logos.org/wp-content/uploads/2011/09/scion.png",
          name: "Scion",
        },
        {
          logo: "https://www.car-logos.org/wp-content/uploads/2011/09/seat.png",
          name: "Seat",
        },
        {
          logo:
            "https://www.car-logos.org/wp-content/uploads/2011/10/shelby.png",
          name: "Shelby",
        },
        {
          logo:
            "https://www.car-logos.org/wp-content/uploads/2011/09/skoda.png",
          name: "Skoda",
        },
        {
          logo:
            "https://www.car-logos.org/wp-content/uploads/2011/09/smart.png",
          name: "Smart",
        },
        {
          logo:
            "https://www.car-logos.org/wp-content/uploads/2011/09/spyker.png",
          name: "Spyker",
        },
        {
          logo:
            "https://www.car-logos.org/wp-content/uploads/2011/09/ssangyong.png",
          name: "Ssangyong",
        },
        {
          logo: "https://www.car-logos.org/wp-content/uploads/2011/10/ssc.png",
          name: "SSC",
        },
        {
          logo:
            "https://www.car-logos.org/wp-content/uploads/2011/09/subaru.png",
          name: "Subaru",
        },
        {
          logo:
            "https://www.car-logos.org/wp-content/uploads/2011/09/suzuki.png",
          name: "Suzuki",
        },
        {
          logo: "https://www.car-logos.org/wp-content/uploads/2011/09/tata.png",
          name: "Tata",
        },
        {
          logo:
            "https://www.car-logos.org/wp-content/uploads/2011/09/tatra.png",
          name: "Tatra",
        },
        {
          logo:
            "https://www.car-logos.org/wp-content/uploads/2011/09/tesla.png",
          name: "Tesla",
        },
        {
          logo:
            "https://www.car-logos.org/wp-content/uploads/2011/09/toyota.png",
          name: "Toyota",
        },
        {
          logo:
            "https://www.car-logos.org/wp-content/uploads/2011/09/1176359_187686584745478_1792749640_n.jpg",
          name: "Tramontana",
        },
        {
          logo:
            "https://www.car-logos.org/wp-content/uploads/2011/09/troller.png",
          name: "Troller",
        },
        {
          logo: "https://www.car-logos.org/wp-content/uploads/2011/09/tvr.png",
          name: "TVR",
        },
        {
          logo: "https://www.car-logos.org/wp-content/uploads/2011/09/uaz.png",
          name: "UAZ",
        },
        {
          logo:
            "https://www.car-logos.org/wp-content/uploads/2011/09/vandenbrink_design.png",
          name: "Vandenbrink",
        },
        {
          logo:
            "https://www.car-logos.org/wp-content/uploads/2011/09/vauxhall.png",
          name: "Vauxhall",
        },
        {
          logo:
            "https://www.car-logos.org/wp-content/uploads/2011/09/vector_motors.png",
          name: "Vector Motors",
        },
        {
          logo:
            "https://www.car-logos.org/wp-content/uploads/2011/09/venturi.png",
          name: "Venturi",
        },
        {
          logo:
            "https://www.car-logos.org/wp-content/uploads/2011/09/volkswagen.png",
          name: "Volkswagen",
        },
        {
          logo:
            "https://www.car-logos.org/wp-content/uploads/2011/09/volvo.png",
          name: "Volvo",
        },
        {
          logo:
            "https://www.car-logos.org/wp-content/uploads/2011/09/wiesmann.png",
          name: "Wiesmann",
        },
        {
          logo:
            "https://www.car-logos.org/wp-content/uploads/2011/09/zagato.png",
          name: "Zagato",
        },
        {
          logo: "https://www.car-logos.org/wp-content/uploads/2011/09/zaz.png",
          name: "Zaz",
        },
        {
          logo: "https://www.car-logos.org/wp-content/uploads/2011/09/zil.png",
          name: "Zil",
        },
      ],
      type: [],
      new_car: null,
      page: 1,
      count: "",
      cars2: "",
    };
  },
  methods: {
    season(val) {
      return this.icons[val];
    },
    search(item) {
      let new_item = [];
      this.cars2.forEach((element) => {
        if (element.type == item) {
          new_item.push(element);
        }
      });
      this.new_car = new_item;
      goTo(650);
    },
  },
  computed: {
    item() {
      this.cars2 = this.$store.getters.cars;
      const type = [];
      this.cars2.forEach((element) => {
        let index = type.findIndex((mm) => mm == element.type);
        if (index < 0) {
          type.push(element.type);
        }
      });

      type.forEach((element) => {
        let re = this.cars.find(({ name }) => {
          return name == element;
        });
        this.type.push(re);
      });
      this.count = Math.ceil(this.cars2.length / 9);
      const page = this.cars2.slice(this.page * 9 - 9, this.page * 9);
      return page;
    },
  },
  mounted() {
    goTo(0);
  },
  head() {
    return {
      title: this.$t("search_car"),
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
    BaseImage: () => import("@/components/about/index"),
    BaseSection: () => import("@/components/base/sectiom"),
    BaseHead: () => import("@/components/base/head"),
    bbtn: () => import("@/components/base/btn"),
  },
};
</script>
<style scoped>
#ser {
  background-color: #f2f2f2;
}
</style>
