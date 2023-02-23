<template>
  <v-app>
    <v-app-bar
      title="Imagebulk"
      class="px-12"
      color="blue-darken-2"
      density="flat"
    >
      <div class="d-none d-sm-flex flex-row nav-links align-center pr-8">
        <div @click="$router.go('/')"><span>Home</span></div>
        <div @click="$router.go('/')"><span>About</span></div>
        <div @click="$router.go('/')"><span>Support</span></div>
        <v-menu v-model="languageMenu" offset-y>
          <template v-slot:activator="{ props }">
            <v-btn class="text-uppercase" v-bind="props" text>
              <flag :iso="activeLang.iso" class="mr-1" />
              {{ activeLang.title }}
              <v-icon small right>mdi-menu-down</v-icon>
            </v-btn>
          </template>
          <v-list dense>
            <v-list-item
              v-for="(lang, index) in languages"
              :key="index"
              @click="changeLanguage(lang)"
            >
              <template v-slot:prepend>
                <flag :iso="lang.iso" class="mr-1" />
              </template>
              <v-list-item-title class="text-uppercase">{{
                lang.title
              }}</v-list-item-title>
            </v-list-item>
            <v-divider></v-divider>
          </v-list>
        </v-menu>
      </div>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>

    <Footer />
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
.v-text-field input#commonsField {
  text-align: center !important;
}
</style>