<template>
  <v-container class="px-10">
    <!-- grid and download-button section -->

    <!-- file download area -->
    <v-row>
      <v-col cols="12">
        <DownloadArea :filename="'The Earth seen from Apollo.jpg'" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import DownloadArea from "./DownloadArea.vue";

export default {
  components: { DownloadArea },
};
</script>