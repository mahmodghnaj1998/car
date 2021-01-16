<template>
  <div>
    <v-container fluid class="ma-0 pa-0">

      <v-row>
        <v-col cols="12" sm="12">
          <v-card>
            <v-card-title class="text-center justify-center">
              <h1 class="rr display-3">{{ $t("albasher") }}</h1>
            </v-card-title>
            <v-card-text>
              <p
                class="text-center justify-center text-h6 ma-2 pa-2 font-weight-bold"
              >
                {{ $t("aboutt") }}
              </p>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
    head() {
    return {
      title: this.$t("about"),
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.$t("aboutt"),
        },
        {
          hid: "keywords",
          name: "keywords",
          content: this.$t("cd2")
         },
      ],
    };
  },
}
</script>
