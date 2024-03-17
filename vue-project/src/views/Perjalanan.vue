<template>
    <v-container>
      <v-row justify="space-around">
        <!-- Card 1 -->
        <v-card width="400">
          <v-img
            class="text-white"
            height="200"
            src="buku.jpg"
            cover
          >
            <v-toolbar
              color="rgba(0, 0, 0, 0)"
              theme="dark"
            >
              <template v-slot:prepend>
                <v-btn icon="$menu"></v-btn>
              </template>
  
              <v-toolbar-title class="text-h6">
                Status Pengiriman
              </v-toolbar-title>
  
              <template v-slot:append>
                <v-btn icon="mdi-dots-vertical"></v-btn>
                <v-btn @click="showTransactionStatus(1)" icon color="primary">
                  <v-icon>mdi-check-circle-outline</v-icon>
                </v-btn>
              </template>
            </v-toolbar>
          </v-img>
  
          <!-- Card content -->
          <v-card-text>
            <div class="font-weight-bold ms-1 mb-2">
              Today
            </div>
  
            <v-timeline align="start" density="compact">
              <v-timeline-item
                v-for="message in messages1"
                :key="message.time"
                :dot-color="message.color"
                size="x-small"
              >
                <div class="mb-4">
                  <div class="font-weight-normal">
                    <strong>{{ message.from }}</strong> @{{ message.time }}
                  </div>
                  <div>{{ message.message }}</div>
                </div>
              </v-timeline-item>
            </v-timeline>
          </v-card-text>
        </v-card>
  
        <!-- Card 2 -->
        <v-card width="400">
          <v-img
            class="text-white"
            height="200"
            src="baju.jpg"
            cover
          >
            <v-toolbar
              color="rgba(0, 0, 0, 0)"
              theme="dark"
            >
              <template v-slot:prepend>
                <v-btn icon="$menu"></v-btn>
              </template>
  
              <v-toolbar-title class="text-h6">
                Status Pengiriman
              </v-toolbar-title>
  
              <template v-slot:append>
                <v-btn icon="mdi-dots-vertical"></v-btn>
                <v-btn @click="showTransactionStatus(2)" icon color="primary">
                  <v-icon>mdi-check-circle-outline</v-icon>
                </v-btn>
              </template>
            </v-toolbar>
          </v-img>
  
          <!-- Card content -->
          <v-card-text>
            <div class="font-weight-bold ms-1 mb-2">
              Today
            </div>
  
            <v-timeline align="start" density="compact">
              <v-timeline-item
                v-for="message in messages2"
                :key="message.time"
                :dot-color="message.color"
                size="x-small"
              >
                <div class="mb-4">
                  <div class="font-weight-normal">
                    <strong>{{ message.from }}</strong> @{{ message.time }}
                  </div>
                  <div>{{ message.message }}</div>
                </div>
              </v-timeline-item>
            </v-timeline>
          </v-card-text>
        </v-card>
  
        <!-- Card 3 -->
        <v-card width="400">
          <v-img
            class="text-white"
            height="200"
            src="celana.jpg"
            cover
          >
            <v-toolbar
              color="rgba(0, 0, 0, 0)"
              theme="dark"
            >
              <template v-slot:prepend>
                <v-btn icon="$menu"></v-btn>
              </template>
  
              <v-toolbar-title class="text-h6">
                Status Pengiriman
              </v-toolbar-title>
  
              <template v-slot:append>
                <v-btn icon="mdi-dots-vertical"></v-btn>
                <v-btn @click="showTransactionStatus(3)" icon color="primary">
                  <v-icon>mdi-check-circle-outline</v-icon>
                </v-btn>
              </template>
            </v-toolbar>
          </v-img>
  
          <!-- Card content -->
          <v-card-text>
            <div class="font-weight-bold ms-1 mb-2">
              Today
            </div>
  
            <v-timeline align="start" density="compact">
              <v-timeline-item
                v-for="message in messages3"
                :key="message.time"
                :dot-color="message.color"
                size="x-small"
              >
                <div class="mb-4">
                  <div class="font-weight-normal">
                    <strong>{{ message.from }}</strong> @{{ message.time }}
                  </div>
                  <div>{{ message.message }}</div>
                </div>
              </v-timeline-item>
            </v-timeline>
          </v-card-text>
        </v-card>
  
        <!-- Card 4 -->
        <v-card width="400">
          <v-img
            class="text-white"
            height="200"
            src="kue.jpg"
            cover
          >
            <v-toolbar
              color="rgba(0, 0, 0, 0)"
              theme="dark"
            >
              <template v-slot:prepend>
                <v-btn icon="$menu"></v-btn>
              </template>
  
              <v-toolbar-title class="text-h6">
                Status Pengiriman
              </v-toolbar-title>
  
              <template v-slot:append>
                <v-btn icon="mdi-dots-vertical"></v-btn>
                <v-btn @click="showTransactionStatus(4)" icon color="primary">
                  <v-icon>mdi-check-circle-outline</v-icon>
                </v-btn>
              </template>
            </v-toolbar>
          </v-img>
  
          <!-- Card content -->
          <v-card-text>
            <div class="font-weight-bold ms-1 mb-2">
              Today
            </div>
  
            <v-timeline align="start" density="compact">
              <v-timeline-item
                v-for="message in messages4"
                :key="message.time"
                :dot-color="message.color"
                size="x-small"
              >
                <div class="mb-4">
                  <div class="font-weight-normal">
                    <strong>{{ message.from }}</strong> @{{ message.time }}
                  </div>
                  <div>{{ message.message }}</div>
                </div>
              </v-timeline-item>
            </v-timeline>
          </v-card-text>
        </v-card>
      </v-row>
    </v-container>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  
  // Data untuk setiap card
  const messages1 = [
    {
      from: 'Transaksi',
      message: `Transaksi Berhasil`,
      time: '23 Febuari, 20:05 WIB',
      color: 'green',
    },
    {
      from: 'Paket Dikirim',
      message: 'Paket dikirim dari Sulawesi Selatan',
      time: '24 Febuari, 09:45 WIB',
      color: 'green',
    },
    {
      from: 'Perjalanan',
      message: 'Paket dalam perjalanan, Jakarta',
      time: '26 Febuari, 10:00 WIB',
      color: 'red-accent-4',
    },
  ];
  
  // Data untuk Card 2
  const messages2 = [
    {
      from: 'Transaksi',
      message: `Transaksi Berhasil`,
      time: '10 Febuari, 21:05 WIB',
      color: 'green',
    },
    {
      from: 'Paket Dikirim',
      message: 'Paket dikirim dari Sulawesi Barat',
      time: '17 Febuari, 07:45 WIB',
      color: 'green',
    },
    {
      from: 'Perjalanan',
      message: 'Paket dalam perjalanan, Bandung',
      time: '24 Febuari, 11:00 WIB',
      color: 'red-accent-4',
    },
  ];
  
  // Data untuk Card 3
  const messages3 = [
    {
      from: 'Transaksi',
      message: `Transaksi Berhasil`,
      time: '18 Febuari, 17:05 WIB',
      color: 'green',
    },
    {
      from: 'Paket Dikirim',
      message: 'Paket dikirim dari Sulawesi Tengah',
      time: '19 Febuari, 20:45 WIB',
      color: 'green',
    },
    {
      from: 'Perjalanan',
      message: 'Paket dalam perjalanan, Bandung',
      time: '24 Febuari, 11:00 WIB',
      color: 'red-accent-4',
    },
  ];
  
  // Data untuk Card 4
  const messages4 = [
    {
      from: 'Transaksi',
      message: `Transaksi Berhasil`,
      time: '29 Febuari, 21:05 WIB',
      color: 'green',
    },
    {
      from: 'Paket Dikirim',
      message: 'Paket dikirim dari Sulawesi Selatan',
      time: '02 Maret, 07:45 WIB',
      color: 'green',
    },
    {
      from: 'Perjalanan',
      message: 'Paket dalam perjalanan, Bandung',
      time: '04 Maret, 11:00 WIB',
      color: 'red-accent-4',
    },
  ];
  
  // Fungsi untuk menampilkan status transaksi
  const showTransactionStatus = (cardNumber) => {
    // Tambahkan logika untuk menampilkan status transaksi di sini
    console.log('Menampilkan status transaksi untuk Card ' + cardNumber);
    // Contoh: Menavigasi ke halaman pesanan
    router.push({ name: 'pesanan' });
  };
  </script>
  