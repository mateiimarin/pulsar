<template>
    <div class="h-screen bg-white w-80 fixed top-0 left-16 border-r-2 pad-4 z-[999]" style="  box-shadow: 15px 0 10px -2px rgba(45, 45, 45, 0.03);">
        <div class="grid-container" v-if="currentView == 'design'">
            <div v-for="(item, index) in appComponents" class="bg-main rounded pad-2 select-none cursor-grab active:cursor-grabbing" @dragstart="addComponent(index)" draggable="true">
                <div class="flex items-center justify-center h-12">
                    <div v-html="item.icon"></div>
                </div>
                <div class="flex items-center h-8 justify-center"><span class="text-xs text-center ">{{ item.name }}</span></div>
            </div>
        </div>
        <div v-if="currentView == 'modules'" class="grid-container">
            <div v-for="(item, index) in appModules" class="bg-main rounded pad-2 select-none cursor-grab active:cursor-grabbing" @dragstart="addModule(index)" draggable="true">
                    <div class="flex items-center justify-center h-12">
                        <i :class="item.icon" class="text-2xl"></i>
                    </div>
                    <div class="flex items-center h-8 justify-center"><span class="text-xs text-center ">{{ item.name }}</span></div>
            </div>
        </div>
        <div v-if="currentView == 'database'">
            <h1 class="text-xl font-bold mb-2">New Collection</h1>
            <input v-model="newCollection.name" class="focus:outline-none focus:border-blue-400 bg-gray-50 focus:bg-white transition mb-4 px-3 py-2 w-full border-2 rounded border-gray-200"  placeholder="Collection Name" required/>
            <hr>
            <div class="mt-5">
                <input v-for="(header, index) in newCollection.headers" v-model="newCollection.headers[index]" placeholder="New Field Name" class="focus:outline-none focus:border-blue-400 bg-gray-50 focus:bg-white transition mb-3 px-3 py-1 w-full border-2 rounded border-gray-200" required/>
                <div class="flex">
                    <button @click="newCollection.headers.push('')" class="text-[#1A5EF2] font-semibold">New Field</button>
                    <button @click="createNewCollection" class="ml-auto bg-[#1A5EF2] rounded-md text-gray-100 px-3 py-0.5">Create</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { addDoc, collection, doc, arrayUnion, updateDoc } from "firebase/firestore"  
const appComponents = useAppComponents();
const appModules = useAppModules();
const newComponent = useNewComponent();
const newModule = useNewModule();
const projectId = useRoute().params.id;

const currentView = useCurrentView();

const addComponent = (componentIndex) => {
    newComponent.value = componentIndex;
}

const addModule = (moduleIndex) => {
    newModule.value = moduleIndex;
}

const newCollection = ref ({ name: '', headers: []});

const { $db } = useNuxtApp();
const createNewCollection = async () => {
    await updateDoc(doc($db, `projects/${projectId}/db`, 'collections'), {
        collections: arrayUnion(newCollection.value),
    })
    newCollection.value = { name: '', headers: []};
}
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(45%, 1fr));
  grid-auto-rows: 100px;
  grid-gap: 10px;
  height: 100%;
  overflow-y: scroll;
  padding: 10px;
}


</style>