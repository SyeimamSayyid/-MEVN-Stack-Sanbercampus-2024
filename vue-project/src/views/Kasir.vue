<template>
  <v-card
    class="mx-auto"
    prepend-icon="mdi-home"
    width="400"
  >
    <template v-slot:title>
      Transaksi Anda Berhasil
    </template>

    <v-card-text>
      Barang segera dikirim
    </v-card-text>

    <!-- Button untuk kembali ke router daftar -->
    <v-card-actions>
      <v-btn color="primary" @click="redirectToDaftar">Kembali ke Daftar</v-btn>
      <!-- Tombol untuk menuju ke router perjalanan -->
      <router-link to="/perjalanan">
        <v-btn color="primary">Ke Pesanan Anda</v-btn>
      </router-link>
    </v-card-actions>
  </v-card>
</template>

<script>
import Daftar from './Daftar.vue'; // Pastikan untuk mengimpor komponen Daftar yang tepat

export default {
  methods: {
    // Fungsi untuk mengarahkan kembali ke router daftar
    redirectToDaftar() {
      this.$router.push({ name: 'daftar' }); // Menggunakan nama rute
    }
  }
}
</script>

