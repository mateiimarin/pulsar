<template>
    <div class="flex h-screen items-center justify-center bg-main">
        <div class="w-1/4 p-8 bg-white rounded-xl">
            <h1 class="text-3xl font-bold mb-2 font-main">Welcome back</h1>
            <span class="text-[17px] font-main text-gray-400">Log into your account</span>
            <hr class="mb-8 mt-3"/>
            <form  @submit.prevent="login">
                <input type="email" placeholder="Your Email" autocomplete="on" v-model="credentials.email" class="focus:outline-none focus:border-blue-400 bg-gray-50 focus:bg-white transition mb-4 px-3 py-2 w-full border-2 rounded border-gray-200" required/>
                <input type="password" placeholder="Your Password" autocomplete="on" v-model="credentials.password" class="focus:outline-none focus:border-blue-400 bg-gray-50 focus:bg-white transition mb-5 px-3 py-2 w-full border-2 rounded border-gray-200" required/>
                <div class="mt-8">
                    <p v-if="errorMessage" class="text-center w-full text-red-500 font-bold mb-3.5">{{ errorMessage }}</p>
                    <input type="submit" class="w-full bg-black rounded p-3 text-white text-sm tracking-wider font-semibold mb-5 cursor-pointer" value="Login"/>
                </div>
            </form>
            <p class="text-center"><span class="text-gray-500">Don't have an account?</span> <NuxtLink to="/signup" class="font-bold">Signup</NuxtLink></p>
        </div>
    </div>
</template>

<script setup>
import { signInWithEmailAndPassword } from "firebase/auth";

definePageMeta({
  layout: false,
});

const credentials = ref({ email: "", password: ""});
const errorMessage = ref();

const login = () => {

    const { $auth } = useNuxtApp();
    signInWithEmailAndPassword($auth, credentials.value.email, credentials.value.password)
    .then(() => {
        navigateTo('/dashboard')
    })
    .catch((error) => {
        switch (error.code) {
            case "auth/invalid-email":
                errorMessage.value = "Invalid Email"
                break;
            case "auth/user-not-found":
                errorMessage.value = "Email not registered"
                break;
            case "auth/wrong-password":
                errorMessage.value = "Incorrect Password"
                break;
            default:
                errorMessage.value = "Invalid Email or Password"
                break;
                }
        })
    };
</script>

<style lang="scss" scoped>

</style>