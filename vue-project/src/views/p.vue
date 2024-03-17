<template>
  <v-card
    class="mx-auto"
    max-width="434"
    rounded="0"
  >
    <v-img
      height="100%"
      src=""
      cover
    >
      <v-avatar
        color="grey"
        rounded="0"
        size="150"
      >
        <v-img src="User.jpeg" cover></v-img>
      </v-avatar>
      <v-list-item
        class="Admin"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        title="User"
      ></v-list-item>

      <!-- Button Edit -->
      <v-btn @click="openEditDialog" color="primary" class="ma-4">Edit</v-btn>
      <!-- Button Back -->
      <v-btn @click="navigateToDashboard" color="primary" class="ma-4">Back</v-btn>
      
      <!-- Button Tambah Produk -->
      <v-btn @click="openAddProductDialog" color="primary" class="ma-4">Tambah Produk</v-btn>

      <!-- Dialog for Adding Product -->
      <v-dialog v-model="addProductDialog" max-width="500px">
        <v-card>
          <v-card-title>Tambah Produk</v-card-title>
          <v-card-text>
            <!-- Form for Adding Product -->
            <v-form>
              <v-text-field v-model="productName" label="Nama Produk"></v-text-field>
              <v-text-field v-model="storeName" label="Nama Toko"></v-text-field>
              <v-text-field v-model="price" label="Harga"></v-text-field>
              <v-select v-model="type" :items="productTypes" label="Tipe"></v-select>
              <v-file-input v-model="productImage" label="Gambar Produk"></v-file-input>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" @click="addProduct">Tambah</v-btn>
            <v-btn color="secondary" @click="closeAddProductDialog">Batal</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <!-- Dialog for Editing Profile -->
      <v-dialog v-model="editDialog" max-width="500px">
        <v-card>
          <v-card-title>Edit Profile</v-card-title>
          <v-card-text>
            <!-- Form for Editing Profile -->
            <v-form>
              <v-file-input v-model="selectedFile" label="Pilih Foto"></v-file-input>
              <v-text-field v-model="editedName" label="Nama"></v-text-field>
              <v-select v-model="selectedRole" :items="roles" label="Role"></v-select>
              <v-textarea v-model="editedDescription" label="Deskripsi"></v-textarea>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" @click="saveProfile">Save</v-btn>
            <v-btn color="secondary" @click="closeEditDialog">Cancel</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-img>
  </v-card>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// State untuk tampilan dialog dan data yang akan diubah
const editDialog = ref(false);
const selectedFile = ref(null);
const editedName = ref('');
const selectedRole = ref('');
const editedDescription = ref('');

// Role yang tersedia
const roles = ['Admin', 'Pedagang'];

// Fungsi untuk membuka dialog edit
const openEditDialog = () => {
  editDialog.value = true;
};

// Fungsi untuk menutup dialog edit
const closeEditDialog = () => {
  editDialog.value = false;
};

// Fungsi untuk menyimpan profil yang diedit
const saveProfile = () => {
  // Lakukan proses penyimpanan profil yang diedit di sini
  // Setelah proses selesai, tutup dialog edit
  closeEditDialog();
};

// Fungsi untuk membuka dialog tambah produk
const openAddProductDialog = () => {
  addProductDialog.value = true;
};

// Fungsi untuk menutup dialog tambah produk
const closeAddProductDialog = () => {
  addProductDialog.value = false;
};

// Fungsi untuk menambahkan produk
const addProduct = () => {
  // Lakukan proses penambahan produk di sini
  // Setelah proses selesai, tutup dialog tambah produk
  closeAddProductDialog();
};

// Fungsi untuk menavigasi ke halaman dashboard
const navigateToDashboard = () => {
  router.push('/dashboard');
};
</script>
