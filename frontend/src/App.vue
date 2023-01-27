<template>
  <v-app>
    <v-app-bar
      title="Imagebulk"
      class="px-12"
      color="blue-darken-2"
      density="flat"
    >
      <div class="d-none d-sm-flex flex-row nav-links align-center pr-8">
        <div @click="$router.push('/')"><span>Home</span></div>
        <div @click="$router.push('/about')"><span>About</span></div>
        <div @click="$router.push('/support')">
          <span>Support</span>
        </div>
      </div>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: { Footer },

  data: () => ({
    languages: [
      { title: "En", iso: "gb" },
      { title: "Hi", iso: "in" },
    ],
    activeLang: { title: "En", iso: "gb" },
    languageMenu: false,
  }),

  methods: {
    changeLanguage(lang) {},
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Raleway&display=swap");

* {
  font-family: Raleway, sans-serif;
}

.nav-links div {
  margin-left: 20px;
  cursor: pointer;
}
.nav-links span {
  color: rgb(222, 224, 222);
}
.nav-links span:hover {
  color: rgb(248, 253, 249);
  font-size: 16px;
}
.v-toolbar-title__placeholder {
  letter-spacing: 2px !important;
  font-size: 25px !important;
  cursor: pointer;
}
</style>