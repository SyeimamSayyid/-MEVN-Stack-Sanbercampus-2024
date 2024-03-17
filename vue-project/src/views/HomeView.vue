<template>
    <div class="welcome-message">
      <h3>Selamat Datang ke Pusat Store</h3>
      <p>Silakan jelajahi koleksi kami dan temukan produk terbaik untuk Anda!</p>
      <router-link to="/daftar">
        <v-btn color="primary" class="explore-button">Jelajahi</v-btn>
      </router-link>
    </div>
  </template>
  
  <style scoped>
  .welcome-message {
    text-align: center; /* Mengatur teks ke tengah */
    margin-top: 50px; /* Memberi jarak dari atas */
    font-family: 'Arial', sans-serif; /* Mengubah font teks */
    color: #333; /* Warna teks */
  }
  
  h3 {
    font-size: 24px; /* Ukuran teks */
    font-weight: bold; /* Ketebalan teks */
    color: #ff6600; /* Warna teks judul */
  }
  
  p {
    margin-top: 20px; /* Memberi jarak antara judul dan teks */
  }
  
  .explore-button {
    margin-top: 30px; /* Memberi jarak antara teks dan tombol */
  }
  </style>
  