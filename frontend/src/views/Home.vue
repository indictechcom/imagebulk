<template>
  <div class="home">
    <top-section />

    <body-section />
  </div>
</template>

<script>
import TopSection from "@/components/TopSection.vue";
import BodySection from "@/components/BodySection.vue";
// @ is an alias to /src

export default {
  name: "Home",
  components: {
    TopSection,
    BodySection,
  },
};
</script>
