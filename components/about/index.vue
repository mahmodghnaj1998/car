<template>
  <div>
    <v-img
      v-bind="$attrs"
      v-on="$listeners"
      :height="$vuetify.breakpoint.mdAndUp ? 350 : 225"
      :src="src"
      gradient="to right, rgba(5, 11, 31, .8), rgba(5, 11, 31, .8)"
      color="#45516b"
      flat
      max-width="100%"
      tile
    >
      <v-row
        align="center"
        class="ma-0 fill-height text-center"
        justify="center"
      >
        <v-col cols="12">
          <base-heading
            class="text-center"
            :title="title"
            space="2"
            weight="500"
          />
          <base-divider class="ma-auto" align-center color="primary" />
          <v-breadcrumbs
            v-if="$i18n.locale == 'ar'"
            :items="items"
            class="justify-center pa-0"
            divider="/"
          />
          <v-breadcrumbs
            v-if="$i18n.locale == 'en'"
            :items="items"
            class="justify-center pa-0"
            divider="/"
          />
        </v-col>
      </v-row>
    </v-img>
  </div>
</template>
<script>
export default {
  computed: {
    items() {
      if (this.$i18n.locale == "en") {
        return [{ text: "HOME", to: "/en" }, { text: this.item }];
      } else {
        return [{ text:  this.item }, { text: "HOME", to: "/" }];
      }
    },
  },

  components: {
    BaseHeading: () => import("@/components/base/title"),
    BaseDivider: () => import("@/components/base/divider"),
  },
  provide: {
    theme: { isDark: true },
  },
  props:{
    src:{
      type:String,
    },
    title:{
      type:String
    },
    item:{
      type:String
    }
  }
};
</script>
