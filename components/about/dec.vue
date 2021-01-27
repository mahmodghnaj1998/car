<template>
<div id="dec">
  <base-section >
    <b-head icon="mdi-car" :title='$t("title")'>
      {{$t('aboutt')}}
     </b-head>
  </base-section>
  </div>
</template>
<script>
export default {
  components: {
    BaseSection: () => import("@/components/base/sectiom"),
    BHead: () => import("@/components/base/head"),
  },
  provide: {
    theme: { isDark: false },
  },
};
</script>
<style  scoped>
#dec{
  background-color: white;
}
</style>
