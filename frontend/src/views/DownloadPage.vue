<template>
  <v-container style="height: 500px">
    <v-row class="fill-height" align-content="center" justify="center">
      <v-col class="text-subtitle-1 text-center" cols="12">
        Getting your files
      </v-col>
      <v-col cols="6">
        <v-progress-linear
          color="secondary"
          indeterminate
          rounded
          height="6"
        ></v-progress-linear>
      </v-col>
      <v-col cols="12" class="text-center">
        <v-btn color="primary">Download</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data: () => ({}),

  computed: {
    ...mapGetters(["getImageData"]),
  },

  created() {
    this.getImageData?.forEach((data) => {
      console.log("get image data: ", data.title);
    });
  },
};
</script>