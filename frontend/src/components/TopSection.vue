<template>
  <v-container fluid class="bg-grey-lighten-2 px-16 pt-6 pb-12">
    <div class="text-center">
      <h1>Download Commons files</h1>
      <p class="mt-2">
        Welcome to the Imagebulk tool from Wikimedia Commons. Feel free to copy
        the commons link of any image file or category and paste in the textbox
        below, then hit the <strong>Load</strong> button.
      </p>
    </div>

    <div class="d-flex justify-center">
      <tool-form />
    </div>

    <v-row
      class="mt-4 mx-1 d-flex justify-space-between"
      v-if="filesLength > 0"
    >
      <p class="mb-0">
        {{ filesLength }}
        {{ filesLength > 1 ? "images" : "image" }} loading...
      </p>

      <div class="mb-0">
        Total Size:
        <span class="text-success font-weight-bold">{{ totalSize }}</span>
      </div>
    </v-row>
  </v-container>
</template>

<script>
import ToolForm from "./ToolForm.vue";

import { mapGetters } from "vuex";

export default {
  components: { ToolForm },
  name: "TopSection",

  data: () => ({}),

  methods: {},

  computed: {
    ...mapGetters(["getFileLength", "getTotalSize"]),

    filesLength() {
      return this.getFileLength ? this.getFileLength : 0;
    },

    totalSize() {
      return this.getTotalSize ? this.getTotalSize : "0 KB";
    },
  },

  created() {},
};
</script>

<style scoped>
.title {
  font-size: 50px;
}
.subtitle {
  font-size: 32px;
}
.benefit {
  font-size: 26px;
}
</style>