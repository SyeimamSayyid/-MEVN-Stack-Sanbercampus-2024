<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer v-model="drawer" color="#00BFA5">
        <v-list nav>
          <v-list-item to="/dashboard">
            <v-list-item-icon>
              <v-icon>mdi-view-dashboard</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Dashboard</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item to="/daftar">
            <v-list-item-icon>
              <v-icon>mdi-view-list</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Daftar</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item to="/pesanan">
            <v-list-item-icon>
              <v-icon>mdi-invoice-list</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Transaksi</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item to="/PA">
            <v-list-item-icon>
              <v-icon>mdi-basket-check</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Pesanan</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item @click="openLogoutDialog">
            <v-list-item-icon>
              <v-icon>mdi-logout</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Logout</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-main style="height: 250px"></v-main>
    </v-layout>
  </v-card>

  <!-- Dialog logout -->
  <v-dialog v-model="logoutDialog" max-width="300">
    <v-card>
      <v-card-title class="headline">Konfirmasi Logout</v-card-title>
      <v-card-text>
        Apakah Anda ingin keluar dari akun ini?
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" text @click="logout">Ya</v-btn>
        <v-btn text @click="closeLogoutDialog">Tidak</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from 'vue-router';

const drawer = ref(false);
const logoutDialog = ref(false);
const router = useRouter();

function openLogoutDialog() {
  logoutDialog.value = true;
}

function closeLogoutDialog() {
  logoutDialog.value = false;
}

function logout() {
  console.log('Anda telah logout');
  // Misalnya arahkan ke halaman login setelah logout
  router.push('/login');
}
</script>
