<template>
  <div class="text-h3 text-center">
    {{ isLogin ? "Login" : "Register" }}
  </div>
  <v-divider></v-divider>
 
  <v-form v-model="form" @submit.prevent="handleSubmit">
    <v-text-field v-if="!isLogin" :readonly="loading" class="mb-2" label="Name" clearable v-model="User.Name" type="string"></v-text-field>

    <v-text-field :readonly="loading" class="mb-2" label="Email" clearable v-model="User.Email" type="email"></v-text-field>

    <v-text-field :readonly="loading" label="Password" placeholder="Enter your password" clearable v-model="User.Password" type="password"></v-text-field>

    <br>

    <v-btn :disabled="!isFormValid || loading" :loading="loading" color="success" size="large" type="submit" variant="elevated" block>
      Sign In
    </v-btn>
  </v-form>
</template>

<script setup>
import { ref, reactive, computed } from "vue";
const form = ref(false);
const loading = ref(false);
const User = reactive({
  Name: "",
  Email: "",
  Password: ""
});

const isFormValid = computed(() => {
  // Periksa apakah bidang email dan password tidak kosong
  return User.Email && User.Password;
});

const handleSubmit = () => {
  // Periksa apakah bidang email atau password kosong
  if (!isFormValid.value) {
    alert("Email dan password harus diisi.");
    return;
  }

  // Jika semua syarat terpenuhi, lanjutkan dengan mengirimkan formulir
  alert("Email Telah dikirim.");
};

// Define props di luar blok setup
const props = defineProps({
  isLogin: {
    type: Boolean,
    default: false
  }
});
</script>
