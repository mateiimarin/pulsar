<template>
    <div>  
        <iframe class="h-screen w-screen" :src="projectURL" id="code"></iframe> 
    </div>
  </template>
  
  <script setup>
  import { doc, getDoc } from 'firebase/firestore';
  import { ref as storageRef, getBlob } from 'firebase/storage';
  
  const { $db, $storage } = useNuxtApp();
  const projectId = useRoute().params.id;
  const projectData = ref();
  const projectURL = ref("");
  
  onMounted( async () => {
      
    const project = await getDoc(doc($db, "projects", projectId));
    projectData.value = project.data();
  
    const fileBlob = await getBlob(storageRef($storage, `projects/${projectId}.html`));
    projectURL.value = URL.createObjectURL(fileBlob);
  
  })

  definePageMeta({
    layout: false,
  }); 
  
  </script>
  
  <style scoped>
  
  </style>