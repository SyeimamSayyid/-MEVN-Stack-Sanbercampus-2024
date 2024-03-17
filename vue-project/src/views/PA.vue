<template>
  <h1>Daftar Belanjaan Anda</h1>
  <v-container>
    <v-row align="center" justify="center">
      <v-col v-for="(item, index) in items" :key="index" cols="auto">
        <v-card class="mx-auto" max-width="344">
          <v-card-item>
            <img :src="item.img" alt="Product Image" width="200" height="200">
            <div>
              <div class="text-overline mb-1">Toko: {{ item.toko }}</div>
              <div class="text-h6 mb-1">Jenis: {{ item.jenis }}</div>
              <div class="text-caption">{{ item.desc }}</div>
            </div>
          </v-card-item>

          <v-card-actions>
            <v-btn>{{ item.harga }}</v-btn>
            <!-- Perubahan pada bagian ini -->
            <v-btn @click="handleButtonClick(item)">Detail</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const items = [
  {
    img: 'buku.jpg',
    toko: 'A',
    jenis: 'Buku',
    desc: 'Lorem ipsum',
    harga: 'RP.100.000',
  },
  {
    img: 'baju.jpg',
    toko: 'B',
    jenis: 'Baju',
    desc: 'Lorem ipsum',
    harga: 'Rp.25.000',
  },
  {
    img: 'celana.jpg',
    toko: 'C',
    jenis: 'celana',
    desc: 'Lorem ipsum',
    harga: 'RP.100.000',
  },
  {
    img: 'kue.jpg',
    toko: 'D',
    jenis: 'Makanan',
    desc: 'Lorem ipsum',
    harga: 'RP.50.000',
  },
  {
    img: 'tambah.jpg',
    toko: '-',
    jenis: '-',
    desc: '-',
    harga: '-',
  },
];

// Fungsi untuk menangani klik pada button
const handleButtonClick = (item) => {
  if (item.toko !== '-' && item.jenis !== '-' && item.desc !== '-' && item.harga !== '-') {
    // Mengarahkan pengguna ke halaman transaksi
    router.push({ name: 'perjalanan' });
  }
};
</script>
