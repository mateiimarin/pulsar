<template>
    <div class="flex h-screen items-center justify-center bg-main">
        <div class="w-1/4 p-8 bg-white rounded-xl">
            <h1 class="text-3xl font-bold mb-2 font-main">Welcome to mmi</h1>
            <span class="text-[17px] font-main text-gray-400">Create a personal account</span>
            <hr class="mb-8 mt-3"/>
            <form  @submit.prevent="signup">
                <input type="text" placeholder="Your Name" v-model="credentials.name" class="focus:outline-none focus:border-blue-400 bg-gray-50 focus:bg-white transition mb-4 px-3 py-2 w-full border-2 rounded border-gray-200" required/>
                <input type="email" placeholder="Your Email" autocomplete="on" v-model="credentials.email" class="focus:outline-none focus:border-blue-400 bg-gray-50 focus:bg-white transition mb-4 px-3 py-2 w-full border-2 rounded border-gray-200" required/>
                <input type="password" placeholder="Your Password" autocomplete="on" v-model="credentials.password" class="focus:outline-none focus:border-blue-400 bg-gray-50 focus:bg-white transition mb-5 px-3 py-2 w-full border-2 rounded border-gray-200" required/>
                <label for="agree">
                    <input type="checkbox" id="agree" name="agree" required > I agree to the terms and conditions
                </label>
                <div class="mt-8">
                    <p v-if="errorMessage" class="text-center w-full text-red-500 font-bold mb-3.5">{{ errorMessage }}</p>
                    <input type="submit" class="w-full bg-black rounded p-3 text-white text-sm tracking-wider font-semibold mb-5 cursor-pointer" value="Signup"/>
                </div>
            </form>
            <p class="text-center"><span class="text-gray-500">Already have an account?</span> <NuxtLink to="/login" class="font-bold">Login</NuxtLink></p>
        </div>
    </div>
</template>

<script setup>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import {setDoc, doc} from "firebase/firestore"

definePageMeta({
  layout: false,
});
    
const credentials = ref({ name:"", email: "", password: ""});
const errorMessage = ref();

const signup = () => {
    const { $db, $auth } = useNuxtApp();  
    if(credentials.value.name != "") {
        createUserWithEmailAndPassword($auth, credentials.value.email, credentials.value.password)
        .then((data) => {
            setDoc(doc($db, "users", data.user.uid), {
                name: credentials.value.name,
                projects: [],
            });

            navigateTo('/dashboard')
        })
        .catch((error) => {
            switch (error.code) {
                case "auth/invalid-email":
                    errorMessage.value = "Invalid Email"
                    break;
                case "auth/email-already-in-use":
                    errorMessage.value = "Email already registered"
                    break;
                case "auth/weak-password":
                    errorMessage.value = "Password should be at least 6 characters long"
                    break;
                default:
                    errorMessage.value = "Invalid Email or Password"
                    break;
            }
        })
    } else errorMessage.value = "Name field can't be blank";   
};
</script>

<style lang="scss" scoped>

</style>