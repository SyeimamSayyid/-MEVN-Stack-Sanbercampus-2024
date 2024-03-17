<template>
  <v-app-bar color="#1DE9B6" name="app-bar" prominent>
    <template v-slot:prepend>
      <v-app-bar-nav-icon @click.stop="$emit('openClose')"></v-app-bar-nav-icon>
    </template>

    <v-app-bar-title>Final Project</v-app-bar-title>

    <v-spacer></v-spacer>

    <v-btn @click ="dialog = true">Login/Register</v-btn>


    <v-dialog v-model="dialog">
  <v-card class="mx-auto" width="500" rounded="lg">
    <v-tabs v-model="tab" bg-color="primary">
      <v-tab value="Register">Register</v-tab>
      <v-tab value="Login">Login</v-tab>
    </v-tabs>
    <v-card-text>
      <v-window v-model="tab">
        <v-window-item value="Login">
          <Forminputauth isLogin="true"/>
        </v-window-item>
        <v-window-item value="Register">
          <Forminputauth />
        </v-window-item>
      </v-window>
    </v-card-text>
  </v-card>
</v-dialog>

  </v-app-bar>
</template>

<script setup>
import { ref } from "vue";
import { defineEmits } from "vue";
import Forminputauth from "../FI/FIA.vue"

// State
const dialog = ref(false);
const tab = ref("Login");

// Emits
defineEmits(["openClose"]);
</script>
