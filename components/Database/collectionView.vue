
import { emit } from 'process';
<template>
    <div>
        <div v-for="collection in collectionArray" class="cursor-pointer px-6 py-3 border-b flex" @click="$emit('openCollection', collection)">
            <i class="fi fi-rr-folder relative mt-[2px] mr-5"></i>
            <span>{{ collection.name.charAt(0).toUpperCase() + collection.name.slice(1) }}</span>
        </div>
    </div>
</template>

<script setup>
const projectId = useRoute().params.id;
const collectionArray = ref([]);

collectionArray.value = await getCollections(projectId);

</script>

<style lang="scss" scoped>

</style>