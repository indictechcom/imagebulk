<template>
  <v-footer class="bg-grey-lighten-3">
    <v-container class="py-10">
      <v-row class="px-12 mb-6 mt-n8 justify-space-between align-center">
        <!-- <router-link to="/" class="text-h4"> -->
        <v-btn
          @click="$router.go('/')"
          variant="plain"
          class="text-capitalize text-h3"
          >Imagebulk</v-btn
        >
        <!-- </router-link> -->

        <div class="mb-n8">
          <v-btn v-for="link in links" :key="link" variant="plain" class="mx-2">
            {{ link }}
          </v-btn>
        </div>
      </v-row>

      <v-divider class="mt-8"></v-divider>

      <v-col class="text-center mt-8" cols="12">
        &copy;
        <strong>Wikimedia Commons</strong>,
        {{ new Date().getFullYear() }}
      </v-col>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    links: ["Home", "About", "Support"],
  }),
};
</script>