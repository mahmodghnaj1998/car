<template>
  <base-section>
    <b-head icon="mdi-car" :title='$t("title")'>
      {{$t('aboutt')}}
     </b-head>
  </base-section>
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
