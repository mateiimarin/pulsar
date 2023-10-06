import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { ref as storageRef, getDownloadURL } from "firebase/storage";


export const initializeUser = async () => {
    const { $auth } = useNuxtApp();
    const authUser = useAuthUser();

    onAuthStateChanged($auth, (user) => {
        authUser.value = user;
        getUserData();
    })
}

export const getUserData = async () => {
    const { $db } = useNuxtApp();
    const authUserData = useAuthUserData();
    const authUser = useAuthUser();

    authUserData.value = await getDoc(doc($db, "users", authUser.value.uid));
}
