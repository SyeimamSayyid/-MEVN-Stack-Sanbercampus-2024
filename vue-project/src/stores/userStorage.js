import { ref } from "vue";
import { defineStore } from "pinia";
import { apiService } from '@api';

export const useUserStorage = defineStore('user', () => {
    const currentUser = ref(
        localStorage.getItem("user")
            ? JSON.parse(localStorage.getItem("user"))
            : null
    );

    const dialog = ref(false);

    const loginUser = async(inputUser)=> {
        try {
            const {data} = await apiService.post('/auth/login', inputUser)
            currentUser.value= data.data.user
            localStorage.setItem("user", JSON.setItem('user', currentUser.value))
        } catch {error} {
            console.log(error)
        }
    }

    return (count,doublecount,dialog)
});
