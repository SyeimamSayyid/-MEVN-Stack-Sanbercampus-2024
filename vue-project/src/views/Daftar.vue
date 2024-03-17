<template>
  <v-card>
    <h1 class="text-center">Rekomendasi Barang</h1>
    <v-container>
      <v-row align="center" justify="center">
        <v-col v-for="(item, index) in items" :key="index" cols="auto">
          <v-card :variant="item.name" class="mx-auto" max-width="344">
            <v-img :src="item.image" height="200" contain></v-img>
            <v-card-item>
              <div>
                <div class="text-overline mb-1">{{ item.name }}</div>
                <div class="text-h6 mb-1">Lorem</div>
                <div class="text-caption">{{ item.description }}</div>
              </div>
            </v-card-item>
            <v-card-actions>
              <v-btn color="primary" @click="openDialog(item)">Beli</v-btn>
              <v-btn>{{ item.price }}</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <!-- Tombol untuk daftar pesanan -->
    <router-link to="/perjalanan">
      <v-btn color="primary" class="order-button">Daftar Pesanan Anda</v-btn>
    </router-link>
    <!-- Dialog konfirmasi pembelian -->
    <v-dialog v-model="dialog" max-width="300">
      <v-card>
        <v-card-title class="headline">Konfirmasi Pembelian</v-card-title>
        <v-card-text>
          <div class="text-body-1">Apakah Anda ingin membeli barang ini dengan harga:</div>
          <div class="text-h6">{{ selectedPrice }}</div> <!-- Menampilkan harga barang yang dipilih -->
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" text @click="confirmPurchase(true)">Ya</v-btn>
          <v-btn text @click="confirmPurchase(false)">Tidak</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const items = [
  {
      name: 'Bantal Emas',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et libero lectus.',
      price: 'RP80.000',
      image: 'bantal.jpg'
    },
    {
      name: 'Lampu Tidur Ajaib',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et libero lectus.',
      price: 'RP120.000',
      image: 'lampu.jpg'
    },
    {
      name: 'Tas Tahan Lama',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et libero lectus.',
      price: 'RP100.000',
      image: 'tas.jpg'
    },
    {
      name: 'Sepatu Berjalan',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et libero lectus.',
      price: 'RP150.000',
      image: 'sepatu.jpg'
    },
    {
      name: 'Gelas Peningkat Kecerdasan',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et libero lectus.',
      price: 'RP70.000',
      image: 'gelas.jpg'
    },
    {
      name: 'Topi Ajaib',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et libero lectus.',
      price: 'RP90.000',
      image: 'topi.jpg'
    },
    {
      name: 'Buku Panduan Petualangan',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et libero lectus.',
      price: 'RP50.000',
      image: 'novel.jpg'
    },
    {
      name: 'Botol Minum Dua Arah',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et libero lectus.',
      price: 'RP40.000',
      image: 'TM.jpg'
    },
    {
      name: 'Pensil Pemecah Kebosanan',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et libero lectus.',
      price: 'RP30.000',
      image: 'pensil.jpg'
    },
    {
      name: 'Jam Tangan Anti-Gravitasi',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et libero lectus.',
      price: 'RP110.000',
      image: 'jam.jpg'
    }

  ];


const dialog = ref(false);
const selectedPrice = ref('');

function openDialog(item) {
  console.log("Anda ingin membeli barang:", item.name);
  // Validasi harga sebelum menetapkannya
  if (item.price) {
    selectedPrice.value = item.price;
    dialog.value = true;
  } else {
    console.error('Harga barang tidak valid.');
  }
}

function confirmPurchase(isConfirmed) {
  console.log("Anda memilih:", isConfirmed ? "Ya" : "Tidak");
  dialog.value = false;
  if (isConfirmed) {
    router.push({ name: 'kasir' }); // Arahkan pengguna ke router "perjalanan"
  }
}
</script>

<style scoped>
/* Gaya untuk tombol "Daftar Pesanan Anda" */
.order-button {
  margin-top: 20px; /* Berikan jarak antara tombol dengan konten sebelumnya */
}
</style>
