import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage";

export default defineNuxtPlugin(nuxtApp => {
    // Doing something with nuxtApp

    const config = useRuntimeConfig()

    const firebaseConfig = {
        apiKey: "AIzaSyBHlNsVi1b9XjgXI9aNdFlzm9tw-4Js0Ro",
        authDomain: "cluj-hackathon.firebaseapp.com",
        projectId: "cluj-hackathon",
        storageBucket: "cluj-hackathon.appspot.com",
        messagingSenderId: "698420037817",
        appId: "1:698420037817:web:1339048f03e3d1e3ecf368",
        measurementId: "G-7M4LY92116"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const auth = getAuth();
    const db = getFirestore(app)
    const storage = getStorage(app);
    const analytics = getAnalytics(app);

    nuxtApp.vueApp.provide('auth', auth);
    nuxtApp.provide('auth', auth);

    nuxtApp.vueApp.provide('db', db);
    nuxtApp.provide('db', db);

    nuxtApp.vueApp.provide('storage', storage);
    nuxtApp.provide('storage', storage);

    initializeUser();

  })