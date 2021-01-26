<template>
  <base-section>
    <b-head :title="$t('loction')">
    </b-head>
    <iframe
      allowfullscreen
      aria-hidden="false"
      frameborder="0"
      height="500"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1007.6758861687902!2d55.27511576350246!3d25.19718436499437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43348a67e24b%3A0xff45e502e1ceb7e2!2z2KjYsdisINiu2YTZitmB2Kk!5e0!3m2!1sar!2s!4v1611525730800!5m2!1sar!2s"
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
