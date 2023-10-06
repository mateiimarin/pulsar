<template>
    <div>


<div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left text-gray-500">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
                <th scope="col" class="px-6 py-3">Index</th>
                <th v-for="header in tableData.headers" scope="col" class="px-6 py-3"> {{ header }}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(document, index) in tableData.documents" class="bg-white border-b">
                <td class="px-6 py-4">{{ index }}</td>
                <td v-for="header in tableData.headers" class="px-6 py-4">{{ document[header] }}</td>
            </tr>
        </tbody>
    </table>
</div>

    </div>
</template>

<script setup>
const props = defineProps({
    collection: Object,
})

const tableData = ref({headers: [], documents: []});
tableData.value.documents = await getCollectionDocuments(props.collection.name, useRoute().params.id);
tableData.value.headers = [... props.collection.headers]
console.log(tableData.value)
</script>

<style lang="scss" scoped>

</style>