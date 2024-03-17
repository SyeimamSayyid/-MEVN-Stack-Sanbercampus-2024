<template>
  <div>
    <h1>Dashboard</h1>
    <div v-if="user">
      <v-card max-width="344" hover>
        <v-card-item>
          <v-card-title>{{ user.name }}</v-card-title>
          <v-card-subtitle>{{ user.email }} ({{ user.role }})</v-card-subtitle>
        </v-card-item>

        <v-card-text v-if="user.Profile">
          Anda Belum Melengkapi Profil, Silahkan Lengkapi Profil Anda
        </v-card-text>
        <v-card-text v-else>Anda Belum Melengkapi Profil</v-card-text>

        <!-- Tombol navigasi ke halaman profil -->
        <v-btn color="primary" @click="navigateToProfile">Profil</v-btn>
      </v-card>
    </div>

    <!-- Bar Chart -->
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>Bar Chart</v-card-title>
          <v-card-text>
            <v-chart :options="chartOptions" :data="chartData" type="bar"></v-chart>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- List History Perubahan -->
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>History Perubahan</v-card-title>
          <v-card-text>
            <v-list>
              <v-list-item v-for="(change, index) in changes" :key="index">
                <v-list-item-content>
                  <v-list-item-title>{{ change.name }}</v-list-item-title>
                  <v-list-item-subtitle>{{ change.date }}</v-list-item-subtitle>
                  <v-list-item-subtitle>{{ change.details }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'; // Import useRouter dari vue-router

// Kode data dan fungsi lainnya ditangani secara otomatis oleh Vue 3
const chartData = {
  labels: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'],
  datasets: [
    {
      label: 'Data 1',
      backgroundColor: '#f87979',
      data: [40, 20, 35, 25, 50]
    },
    {
      label: 'Data 2',
      backgroundColor: '#7db8ff',
      data: [60, 80, 65, 75, 50]
    }
  ]
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    xAxes: [{
      ticks: {
        autoSkip: false
      }
    }],
    yAxes: [{
      ticks: {
        beginAtZero: true
      }
    }]
  }
};

const user = {
  name: 'Admin',
  email: 'Admin@example.com',
  role: 'Admin',
  Profile: true // Contoh profil telah diisi
};

// Data list history perubahan
const changes = [
  {
    name: 'Nama diubah menjadi "Admin Baru"',
    date: '10 Maret 2024',
    details: 'Deskripsi: Seorang administrator baru ditugaskan.'
  },
  {
    name: 'Role diubah menjadi "Kasir"',
    date: '9 Maret 2024',
    details: 'Deskripsi: Hak akses diperbarui.'
  }
];

// Menggunakan useRouter untuk mendapatkan instance dari router
const router = useRouter();

// Fungsi untuk menavigasi ke halaman profil
const navigateToProfile = () => {
  router.push('/profil'); // Menavigasi ke halaman profil
};
</script>
