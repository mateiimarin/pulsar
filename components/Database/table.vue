<template>
    <div class="p-5 bg-white h-[90%] w-[90%] rounded-md border-2">
        <div>
            <div class="flex">
                <h3 class="font-bold text-2xl">Database</h3>
            </div>
            <div class="bg-gray-50 px-6 py-3 border-b rounded-t-lg flex">
                <div class="flex items-center">
                    <i class="fi fi-rr-apps mt-[2px] relative cursor-pointer" @click="isCollectionViewOpen = true"></i>
                    <span class="mx-2">/</span>
                    <span class="cursor-pointer">{{ isCollectionViewOpen ? 'Collections' : currentCollection.name }}</span>
                </div>
                <div class="ml-auto bg-[#1A5EF2] text-gray-200 px-4 py-1 rounded-md flex cursor-pointer"><i class="fi fi-rr-plus-small mt-[2px] mr-2 cursor-pointer"></i><span>Collection</span></div>

            </div>
            <DatabaseCollectionView v-if="isCollectionViewOpen" @open-collection="openCollection"/>
            <DatabaseDocumentView v-else :collection="currentCollection"/>
        </div>
    </div>
</template>

<script setup>
const isCollectionViewOpen = ref(true);
const currentCollection = ref(null);
const openCollection = (collectionData) => {
    currentCollection.value = collectionData;
    isCollectionViewOpen.value = false;
}
</script>

<style lang="scss" scoped>

</style>