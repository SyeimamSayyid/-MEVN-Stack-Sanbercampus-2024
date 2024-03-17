<template>
  <div>
    <h2>Status pesanan Anda</h2>
    <!-- Tombol kembali ke halaman beranda -->
    <v-btn to="/">Kembali</v-btn>
    <v-table>
      <thead>
        <tr>
          <th class="text-left">Name</th>
          <th class="text-left">Harga</th>
          <th class="text-left">Status Transaksi</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="barang in books" :key="barang.name">
          <td>{{ barang.name }}</td>
          <td>{{ barang.harga }}</td>
          <!-- Menampilkan status transaksi sebagai "Lunas" hanya jika informasi transaksi tersedia -->
          <td>{{ barang.status ? 'Lunas' : '' }}</td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      books: [
        {
          name: 'A.Buku',
          harga: 'RP 100.000',
          status: true // Status transaksi tersedia
        },
        {
          name: 'B.Baju',
          harga: 'RP 25.000',
          status: true // Status transaksi tersedia
        },
        {
          name: 'C.Celana',
          harga: 'RP 100.000',
          status: true // Status transaksi tersedia
        },
        {
          name: 'D.Makanan',
          harga: 'RP 50.000',
          status: true // Status transaksi tersedia
        },
        {
          name: 'Tidak Ada',
          harga: '-----',
          status: false // Tidak ada informasi transaksi
        }
      ]
    };
  }
};
</script>
