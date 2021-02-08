<template>
  <base-section>
    <b-head :title="$t('loction')">
    </b-head>
    <iframe
      allowfullscreen
      aria-hidden="false"
      frameborder="0"
      height="500"
     src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14431.225952973984!2d55.3141524!3d25.2770943!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x25aa2161cb0503e!2z2KfZhNio2LTZitixINmE2KrYo9is2YrYsSDYp9mE2LPZitin2LHYp9iqIHJlbnQgY2Fycw!5e0!3m2!1sar!2sro!4v1612797415866!5m2!1sar!2sro"
      style="border:0; display: block;"
      tabindex="0"
      width="100%"
    />
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
