<template>
    <div class="h-screen bg-main">
        <div class="w-full h-screen background-grid flex items-center justify-center">
            <div class="w-1/4 p-8 bg-white rounded-xl" style="z-index: 99;" >
                <h1 class="text-2xl font-bold mb-2 font-main">Name your app</h1>
                <span class="text-base font-main text-gray-400">Start building a new AI application</span>
                <hr class="mb-8 mt-3"/>
                <form  @submit.prevent="create">
                    <input type="text" placeholder="Application Name" v-model="projectName" class="focus:outline-none focus:border-blue-400 bg-gray-50 focus:bg-white transition mb-4 px-3 py-2 w-full border-2 rounded border-gray-200" required/>
                    <div class="mt-3">
                        <input type="submit" class="w-full bg-black rounded p-3 text-white text-sm tracking-wider font-semibold cursor-pointer" value="Create"/>
                        <p v-if="errorMessage" class="text-center w-full text-red-500 font-bold">{{ errorMessage }}</p>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import { doc, setDoc, getDoc, updateDoc, arrayUnion} from "firebase/firestore";
import { ref as storageRef, uploadBytes } from 'firebase/storage'

definePageMeta({
  layout: false,
});

const authUser = useAuthUser();
const projectName = ref();
const errorMessage = ref("");

const { $db, $storage } = useNuxtApp();

const checkAvailability = async (projectHandle) => {

    const projectRef = doc($db, "projects", projectHandle);
    const project = await getDoc(projectRef);

    if (project.exists()) return "A project with this name already exists";

    return "true";

}

const uploadFile = async (projectHandle) => {
    const fileRef = storageRef($storage, `projects/${projectHandle}.html`);
    const template = `<!DOCTYPE html>
<html>
<head>
  <title>Your Project</title>
  <style>
    /* CSS styles */
    body {
      font-family: Arial, sans-serif;
      background-color: #f2f2f2;
      margin: 0;
      padding: 20px;
      text-align: center;
    }
    
    h1 {
      color: #333333;
      font-size: 24px;
      margin-top: 50px;
    }
    
    .message {
      color: #777777;
      font-size: 18px;
      margin-top: 20px;
    }
  </style>
</head>
<body>
  <h1>This is your project</h1>
  <div class="message">Welcome to your project! Start coding and building amazing things.</div>
</body>
</html>`
    const blob = new Blob([template], { type: "text/html" });
    uploadBytes(fileRef, blob).then((snapshot) => {
        window.location.href = `http://localhost:3000/${projectHandle}/edit/design`
    })
}

const create = async () => {
    const projectHandle = (projectName.value + ' ' + Math.floor(Math.random() * (9999 - 1000) + 1000).toString()).toLowerCase().replace(/ /g, '-');
    const handleAvailability = await checkAvailability(projectHandle);

    if(handleAvailability === "true") {
        await setDoc(doc($db, "projects", projectHandle), {
            name: projectName.value,
            nodes: [],
            connections: [],
            variables: [],
        });  
        
        await setDoc(doc($db, `projects/${projectHandle}/db`, 'collections'), {
          collections: [],
        })
        
        const authUserRef = doc($db, "users", authUser.value.uid)
        await updateDoc(authUserRef, {
            projects: arrayUnion({
                name: projectName.value,
                handle: projectHandle,
            })
        });

        await uploadFile(projectHandle);

        projectName.value = "";
        
    }
    else errorMessage.value = handleAvailability;
}
</script>

<style scoped>
.background-grid::before {
    content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image:
    linear-gradient(0deg, rgba(0, 0, 0, 0.05) 2px, transparent 2px),
    linear-gradient(90deg, rgba(0, 0, 0, 0.05) 2px, transparent 2px);
  background-size: 40px 40px;
  opacity: 0.6;
  pointer-events: none;
}

.background-grid::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image:
    radial-gradient(circle at center, transparent, rgba(0, 0, 0, 0.1));
  pointer-events: none;
}
</style>