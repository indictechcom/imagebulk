<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <div class="text-h5">{{ $t('nav-name') }}</div>
      </div>
    </v-app-bar>

    <v-main>
      <ImageBulkComponent />
    </v-main>
  </v-app>
</template>

<script>
import ImageBulkComponent from "./components/ImageBulkComponent.vue";

export default {
  name: "App",

  components: {
    ImageBulkComponent,
  },

  data: () => ({
    //
  }),
};
</script>
