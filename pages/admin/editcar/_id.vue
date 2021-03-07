<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12" align="center">
          <h1 class="primary--text">Edit Car</h1>
        </v-col>
        <v-col cols="12" md="6" xs="12" offset-md="3" align="center">
            <v-alert border="top" v-if="erorr" type="error" dark>
            "Name Alread"
          </v-alert>
          <form @submit.prevent>
            <v-text-field
              :rules="rules"
              color="red"
              label="Nmae car*"
              required
              v-model="name"
            ></v-text-field>
            <v-autocomplete
              v-model="value"
              :rules="rules"
              :items="items"
              dense
              filled
              label="Type Car"
            ></v-autocomplete>
            <v-text-field
              :rules="rules"
              id="model"
              name="model"
              color="red"
              label="Model*"
              required
              v-model="model"
              type="number"
            ></v-text-field>
            <v-text-field
              :rules="rules"
              id="price"
              name="price"
              color="red"
              label="Price*"
              required
              v-model="price"
              type="number"
              prefix="AED"
            ></v-text-field>
            <v-btn class="red" @click="onpickfile()"
              >photo Car
              <v-icon right dark> mdi-cloud-upload </v-icon>
            </v-btn>
            <input
              type="file"
              style="display: none"
              ref="fileInput"
              accept="image/*"
              @change="onfilepick"
            /><br />
            <img class="mt-4" :src="imageUrl" height="200" /><br />

            <v-btn color="primary" class="mt-4" @click="onpickfile2()"
              >photo Reality
              <v-icon right dark> mdi-cloud-upload </v-icon>
            </v-btn>
            <input
              type="file"
              style="display: none"
              ref="fileInput2"
              accept="image/*"
              multiple
              @change="onfilepick2"
            /><br />
            <div v-if="!imageUrls.length == 0">
              <v-carousel>
                <v-carousel-item
                  v-for="(item, i) in imageUrls"
                  :key="i"
                  :src="item"
                ></v-carousel-item>
              </v-carousel>
            </div>
            <v-text-field
              :rules="rules"
              id="size"
              name="size_car"
              color="red"
              label="Size Engine*"
              required
              v-model="size"
            ></v-text-field>
            <v-row>
              <v-col cols="12" md="4">
                <v-switch v-model="Bluetooth" label="Bluetooth"></v-switch>
              </v-col>
              <v-col cols="12" md="4">
                <v-switch
                  v-model="controlspeed"
                  label="CruiseControl"
                ></v-switch>
              </v-col>
              <v-col cols="12" md="4">
                <v-switch v-model="aux" label="`Aux"></v-switch>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12" md="4">
                <v-switch v-model="usb" label="USB"></v-switch>
              </v-col>
              <v-col cols="12" md="4">
                <v-switch v-model="fifeSeater" label="5 Seater"></v-switch>
              </v-col>
              <v-col cols="12" md="4">
                <v-switch v-model="sevenseater" label="7 Seater"></v-switch>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12" md="4">
                <v-switch v-model="camera" label="Reverse Camera"></v-switch>
              </v-col>
              <v-col cols="12" md="4">
                <v-switch v-model="cartype" label="Car Type 4"></v-switch>
              </v-col>
              <v-col cols="12" md="4">
                <v-switch v-model="Bags" label="Front Air Bags	"></v-switch>
              </v-col>
            </v-row>
            <v-btn block :disabled="!validet" @click="edit" class="red"
              >EDIT</v-btn
            >
          </form>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import goTo from "vuetify/es5/services/goto";
export default {
  layout: "admin",
  data() {
    return {
      rules: [(value) => !!value || "Required."],
      name: "",
      items: [
        "Abarth",
        "AC",
        "Acura",
        "Aixam",
        "Alfa Romeo",
        "Ariel",
        "Arrinera",
        "Aston Martin",
        "Audi",
        "Bentley",
        "BMW",
        "Bugatti",
        "Buick",
        "Cadillac",
        "Caterham",
        "Chevrolet",
        "Chrysler",
        "Citroën",
        "Corvette",
        "Dacia",
        "Daf",
        "Daihatsu",
        "Dodge",
        "DR Motor",
        "Elfin",
        "Ferrari",
        "Fiat",
        "Ford",
        "Gaz",
        "Geely",
        "Gillet",
        "Ginetta",
        "General Motors",
        "GMC",
        "Great Wall",
        "Gumpert",
        "Hennessey logo",
        "Holden",
        "Honda",
        "Hummer",
        "Hyundai",
        "Infiniti",
        "Isuzu",
        "Jaguar",
        "Jeep",
        "Joss",
        "Kia",
        "Koenigsegg",
        "Lada",
        "Lamborghini",
        "Lancia",
        "Land Rover",
        "Lexus",
        "Lincoln",
        "Lotus",
        "Luxgen",
        "Mahindra",
        "Maruti Suzuki",
        "Maserati",
        "Maybach",
        "Mazda",
        "Mclaren",
        "Mercedes",
        "MG",
        "Mini",
        "Mitsubishi",
        "Morgan Motor",
        "Mustang logo",
        "Nissan",
        "Noble",
        "Opel",
        "Pagani",
        "Panoz",
        "Perodua",
        "Peugeot",
        "Piaggio",
        "Pininfarina",
        "Porsche",
        "Proton",
        "Renault",
        "Reva",
        "Rimac",
        "Rolls Royce",
        "Ruf logo",
        "Saab",
        "Scania",
        "Scion",
        "Seat",
        "Shelby",
        "Skoda",
        "Smart",
        "Spyker",
        "Ssangyong",
        "SSC",
        "Subaru",
        "Suzuki",
        "Tata",
        "Tatra",
        "Tesla",
        "Toyota",
        "Tramontana",
        "Troller",
        "TVR",
        "UAZ",
        "Vandenbrink",
        "Vauxhall",
        "Vector Motors",
        "Venturi",
        "Volkswagen",
        "Volvo",
        "Wiesmann",
        "Zagato",
        "Zaz",
        "Zil",
      ],
      value: null,
      model: "2010",
      price: "",
      imageUrl: "",
      image: null,
      imageUrls: [],
      images: [],
      size: "",
      Bluetooth: "",
      controlspeed: false,
      aux: false,
      usb: false,
      fifeSeater: false,
      sevenseater: false,
      camera: false,
      cartype: false,
      Bags: false,
      id: "",
      oldname: "",
      update:false,
      erorr:false
    };
  },
  computed: {
    item() {
      return this.$store.getters.cars;
    },
    validet() {
      return (
        this.name !== "" &&
        this.value !== null &&
        this.model !== "" &&
        this.price !== "" &&
        this.imageUrl !== "" &&
        this.size !== ""
      );
    },
  },
  methods: {
    onpickfile() {
      this.$refs.fileInput.click();
    },
    onfilepick(event) {
      const file = event.target.files;
      if (!file[0] || file[0].type.indexOf("image/") !== 0) return;
      let filename = file[0].name;
      if (filename.lastIndexOf(".") <= 0) {
        return alert("plase enter image");
      }

      const fileReader = new FileReader();
      fileReader.readAsDataURL(file[0]);
      fileReader.addEventListener("load", () => {
        this.imageUrl = fileReader.result;
      });
      this.image = file[0];
    },
    onpickfile2() {
      this.$refs.fileInput2.click();
    },
    onfilepick2(event) {
      const files = event.target.files;
      this.imageUrls = []
      this.update = true
      files.forEach((element) => {
        if (!element || element.type.indexOf("image/") !== 0) return;
        let filename = element.name;
        if (filename.lastIndexOf(".") <= 0) {
          return alert("plase enter image");
        }
        const fileReader = new FileReader();
        fileReader.readAsDataURL(element);
        fileReader.addEventListener("load", () => {
          this.imageUrls.push(fileReader.result);
        });
        this.images.push(element);
      });
    },
    edit() {
      const info = {
        name: this.name,
        type: this.value,
        model: this.model,
        price: this.price,
        size: this.size,
        bluetooth: this.Bluetooth,
        controlspeed: this.controlspeed,
        aux: this.aux,
        usb: this.usb,
        fifeSeater: this.fifeSeater,
        sevenseater: this.sevenseater,
        camera: this.camera,
        cartype: this.cartype,
        Bags: this.Bags,
      };
      this.name == this.oldname ? delete info.name : this.name;
      this.image == "" ? (info.image = this.imageUrl) : false;
      let formData = new FormData();
      formData.append("file", this.image);
      if(this.update == true){
        let count = this.imageUrls.length;
      formData.append("count", count);
      formData.append("id", this.idd);
        this.images.forEach((value, key) => {
        formData.append("key" + key, value);
      })
      }
      Object.entries(info).forEach(([key, value]) => {
        formData.append(key, value);
      });
      this.$axios
        .$post(`update/${this.id}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((re) => {
          if(re.data){
          this.$store.dispatch("updatecar", re.data);
          this.$router.push("/admin/editcar/")
          }else{
            this.erorr = true
            goTo(0)
          }


        });
    },
  },
  mounted() {
    const car = this.$route.params.id;
    const re = this.item.find(({ slug }) => {
      return slug == car;
    });
    this.name = re.name;
    this.oldname = re.name;
    this.price = re.price;
    this.value = re.type;
    this.model = re.model;
    this.imageUrl = "http://api.albasheerrentcar.com/storage/" + re.image;
    this.size = re.size;
    this.Bluetooth = re.bluetooth == "true" ? true : false;
    this.controlspeed = re.controlspeed == "true" ? true : false;
    this.aux = re.aux == "true" ? true : false;
    this.usb = re.usb == "true" ? true : false;
    this.fifeSeater = re.fifeSeater == "true" ? true : false;
    this.sevenseater = re.sevenseater == "true" ? true : false;
    this.camera = re.camera == "true" ? true : false;
    this.cartype = re.cartype == "true" ? true : false;
    this.Bags = re.Bags == "true" ? true : false;
    if (re.photos) {
      re.photos.forEach((element) => {
        this.imageUrls.push('http://api.albasheerrentcar.com/storage/'+element.path);
      });
    }
    this.id = re.slug;
    this.idd = re.id
  },
};
</script>
