<template>
  <div id="about">
    <base-image
      :title="$t('about')"
      :src="require('@/assets/55.jpg')"
      item="ABOUT US"
    />
    <base-des />
    <base-map />
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
          content: this.$t("cd2"),
        },
      ],
    };
  },
  components: {
    BaseImage: () => import("@/components/about/index"),
    BaseDes: () => import("@/components/about/dec"),
    BaseMap: () => import("@/components/about/map"),
  },
};
</script>
<style scoped>
#about {
  background-color: #f2f2f2;
}
</style>
