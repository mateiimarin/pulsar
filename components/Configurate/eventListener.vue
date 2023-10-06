<template>
    <div>
        <div class="mt-3">
            <div class="text-xs font-semibold text-gray-700 mb-1">Event Type</div>
            <select class="focus:outline-none focus:border-blue-400 bg-gray-50 focus:bg-white transition mb-4 px-3 py-2 w-full border-2 rounded cursor-pointer border-gray-200" v-model="currentEvent" @change="updateNode">
                <option value="click">Click</option>
                <option value="dblclick">Double Click</option>
                <option value="contextmenu">Right Click</option>
                <option value="change">Input Change</option>
                <option value="mouseover">Mouse Over</option>
            </select>

            <MagicInput :data-source="nodes[moduleIndex].variables" @input-change="updateNode" ref="elementId">Element Id</MagicInput>
        </div>
    </div>
</template>

<script setup>
const nodes = useNodes();
const currentEvent = ref();
const elementId = ref();



const updateNode = () => {
    
    if(nodes.value[props.moduleIndex].data.length == 0) {
        nodes.value[props.moduleIndex].data.push(currentEvent.value);
        nodes.value[props.moduleIndex].data.push(elementId.value.value().enc);
    }
    else {
        nodes.value[props.moduleIndex].data[0] = currentEvent.value;
        nodes.value[props.moduleIndex].data[1] = elementId.value.value().enc;
    }


    const appModules = useAppModules();
    nodes.value[props.moduleIndex].startScript = appModules.value[nodes.value[props.moduleIndex].type].startScript.replace('<elementId>', elementId.value.value().dec);
    nodes.value[props.moduleIndex].startScript = nodes.value[props.moduleIndex].startScript.replace('<event>', currentEvent.value);
    console.log(nodes.value[props.moduleIndex])
}

const props = defineProps({
    moduleIndex: Number,
})


</script>

<style lang="scss" scoped>

</style>