<template>
  <div>
    <v-carousel height="600">
      <v-carousel-item
        v-for="item in item"
        :key="item.id"
        :min-height="minHeight"
        :src="'http://api.albasheerrentcar.com/storage/' + item.path"
        class="white--DEl"
        gradient="to right, rgba(5, 11, 31, .6), rgba(5, 11, 31, .6)"
      >
        <v-container>
          <v-row>
            <v-col cols="12" align="center" @click="delet(item.id)">
              <v-btn color="error">DElET</v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-carousel-item>
    </v-carousel>
    <v-container>
      <v-row>
        <v-col align="center">
          <v-btn @click="chossefile" color="primary">Add New photo</v-btn>
          <input
            type="file"
            style="display: none"
            ref="fileInput"
            accept="image/*"
            @change="putfile"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  layout: "admin",
  data() {
    return {
      src: "",
      image: "",
    };
  },
  computed: {
    minHeight() {
      const height = this.$vuetify.breakpoint.mdAndUp ? "100vh" : "50vh";

      return `calc(${height} - ${this.$vuetify.application.top}px)`;
    },
    item() {
      return this.$store.getters.back;
    },
  },
  methods: {
    chossefile() {
      this.$refs.fileInput.click();
    },
    putfile(event) {
      const file = event.target.files;
      if (!file[0] || file[0].type.indexOf("image/") !== 0) return;
      let filename = file[0].name;
      if (filename.lastIndexOf(".") <= 0) {
        return alert("plase enter image");
      }
      this.image = file[0];
      let formData = new FormData();
      formData.append("file", this.image);
      this.$axios.$post("back", formData).then((re) => {
        this.$store.dispatch("addback", re);
      });
    },
    delet(id) {
      if (this.item.length > 1) {
        this.$axios.$post(`delete/${id}`).then((re) => {
          this.$store.dispatch("deletback", id);
        });
      }
    },
  },
};
</script>
