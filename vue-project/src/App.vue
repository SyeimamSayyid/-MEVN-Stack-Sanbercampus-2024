<!-- app.vue -->
<script setup>
import { ref } from "vue";
import Header from "./components/layouts/header.vue";
import Sidebar from "./components/layouts/drawerlist.vue";

const drawer = ref(false);
const drawerOpenClose = () => {
  drawer.value = !drawer.value;
};
</script>

<template>
  <v-app ref="app">
    <v-navigation-drawer
      v-model="drawer"
      color="#00BFA5"
    >
      <Sidebar />
    </v-navigation-drawer>

    <Header @open-close="drawerOpenClose" />

    <v-main style="height: 500px;">
      <v-card-text>
        <router-view />
      </v-card-text>
    </v-main>
  </v-app>
</template>
