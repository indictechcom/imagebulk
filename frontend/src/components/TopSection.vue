<template>
  <v-container fluid class="bg-grey-lighten-2 px-16 py-12">
    <v-row class="">
      <v-col cols="6">
        <h1 class="font-weight-medium title">Imagebulk tool!</h1>
        <h3 class="font-weight-regular subtitle">
          The tool for Wikimedia file downloads
        </h3>

        <v-list dense class="bg-transparent px-0 ml-0 mt-3">
          <v-list-item
            class="px-0"
            v-for="(benefit, index) in benefits"
            :key="benefit + index"
          >
            <template v-slot:prepend>
              <v-icon icon="mdi-check-circle-outline"></v-icon>
            </template>
            <v-list-item-title class="benefit py-2">{{
              benefit
            }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-col>

      <v-col cols="6" class="mt-12">
        <tool-form />
      </v-col>
    </v-row>

    <v-row class="px-4 mt-4 d-flex justify-space-between">
      <p class="mb-0">10 images downloaded</p>

      <div class="mb-0">
        Total Size: <span class="text-success font-weight-bold">15MB</span>
      </div>
    </v-row>
  </v-container>
</template>

<script>
import ToolForm from "./ToolForm.vue";
export default {
  components: { ToolForm },
  name: "TopSection",

  data: () => ({
    benefits: [
      "Free online images download",
      "Bulk image download",
      "Wikimedia images only",
    ],
  }),

  methods: {},
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