<template>
    <div>
        <div class="mt-3">
            <div class="text-xs font-semibold text-gray-700 mb-1">Database Colection</div>
            <select class="focus:outline-none focus:border-blue-400 bg-gray-50 focus:bg-white transition mb-4 px-3 py-2 w-full border-2 rounded border-gray-200" v-model="currentCollection">
                <option v-for="collection in collectionArray" :value="collection">{{ collection.name }}</option>
            </select>

            <div v-if="currentCollection">
                <MagicInput v-for="(field, index) in currentCollection.headers" @input-change="updateNode" :data-source="nodes[moduleIndex].variables" :ref="element => { input[index] = element }">{{ field.charAt(0).toUpperCase() + field.slice(1) }}</MagicInput>
            </div>
        </div>
    </div>
</template>

<script setup>
const projectId = useRoute().params.id;
const collectionArray = ref([]);
const currentCollection = ref('users');
const nodes = useNodes();

const props = defineProps({
    moduleIndex: Number,
})

const input = ref([]);

watch(currentCollection, () => {
    nodes.value[props.moduleIndex].data = [];
    nodes.value[props.moduleIndex].data.push({ field: 'collection', value: currentCollection.value});
    currentCollection.value.headers.forEach((header) => {
        nodes.value[props.moduleIndex].data.push({ field: header, value: ''});
    })
})

const updateNode = () => {
    for(const [index, header] of currentCollection.value.headers.entries()) {
        nodes.value[props.moduleIndex].data[index + 1].value = input.value[index].value().enc;
    }


    let documentData = '';
    for(const [index, header] of currentCollection.value.headers.entries()) {
        documentData += `${header}: ${input.value[index].value().dec}, `
    }

    const appModules = useAppModules();

    nodes.value[props.moduleIndex].startScript = appModules.value[nodes.value[props.moduleIndex].type].startScript.replace('<projectId>', useRoute().params.id);
    nodes.value[props.moduleIndex].startScript = nodes.value[props.moduleIndex].startScript.replace('<collectionName>', currentCollection.value.name);
    nodes.value[props.moduleIndex].startScript = nodes.value[props.moduleIndex].startScript.replace('<documentData>', documentData);
    console.log(nodes.value[props.moduleIndex].startScript)
}

collectionArray.value = await getCollections(projectId);
</script>

<style lang="scss" scoped>

</style>