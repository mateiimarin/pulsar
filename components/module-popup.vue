<template>
    <div>
        <Transition name="popup">
            <div class="fixed bottom-0 w-screen bg-black/[.40] h-screen z-50 flex items-center justify-center transition-all" v-if="showEditPopup">
                <div class="bg-white min-w-[350px] rounded-lg transition-all popup-container px-6 py-2 ">
                    <div class="w-full border-b-2 flex py-3 items-center">
                        <h2 class="text-xl font-bold">Module</h2>
                        <div class="ml-auto flex">
                            <div @click="closePopup" class="w-10 h-10 bg-ui-100 rounded-md flex items-center justify-center text-[18px] cursor-pointer">
                                <i class="fi fi-rr-circle-xmark mt-1.5"></i>
                            </div>
                        </div>
                    </div>  
                        <div class="flex gap-16 mb-3">
                            <div>
                                <h3 class="text-[19px] font-semibold mt-3">Input</h3>              
                                <div class="flex gap-4 mb-5 mt-1">
                                    <div v-if="nodeVariables.length != 0" v-for="varKey in nodeVariables" class="rounded px-4 py-2 select-none" :class="isInputClass(varKey)" @click="toggleInput(varKey)">{{ getVariable(varKey) }}</div>
                                    <div v-else>There are no available variables</div>
                                </div>
                            </div>
                            <div class="ml-auto">
                                <h3 class="text-[19px] font-semibold mt-3">Output</h3> 
                                <input type="text" v-model="nodeOutput" placeholder="No Output" class="mt-1 outline-none bg-gray-100 rounded px-4 py-2" @change="updateOutput">  
                            </div>
                        </div>  
                        <component :is="currentConfigurationWindow" :module-index="moduleIndex"></component>  
                </div>
            </div>
        </Transition>
    </div>
</template>

<script setup>
const emit = defineEmits(['close, edit'])

const variables = useVariables();
const nodes = useNodes();


const props = defineProps({
    moduleIndex: Number,
})

const showEditPopup = ref(false);
setTimeout(() => {
    showEditPopup.value = true;
})

const closePopup = () => {
    showEditPopup.value = false;
    setTimeout(() => {
        emit('close');
    }, 200)
}

const getVariable = (key) => {
    let value = variables.value.get(key);
    console.log(value)
    return value;
}


const nodeVariables = ref(nodes.value[props.moduleIndex].variables);
const nodeOutput = ref(getVariable(nodes.value[props.moduleIndex].output))

const updateOutput = () => {
    variables.value.set(nodes.value[props.moduleIndex].output, nodeOutput.value);
}

const toggleInput = (key) => {
    const index = nodes.value[props.moduleIndex].inputs.indexOf(key);
    if(index == -1) {
        nodes.value[props.moduleIndex].inputs.push(key);
    }
    else nodes.value[props.moduleIndex].inputs.splice(index, 1);
}

const isInputClass = (key) => {
    return nodes.value[props.moduleIndex].inputs.indexOf(key) == -1 ? 'bg-gray-100' : 'bg-[#e0eaff]';
}

console.log(nodes.value[props.moduleIndex].type)

const scriptNode = ref({isNodeScriptNode: nodes.value[props.moduleIndex].type === 5, script: nodes.value[props.moduleIndex].startScript});

const updateScript = () => {
    nodes.value[props.moduleIndex].startScript = scriptNode.value.script;
}


const configuratorMap = new Map([
    ["8", resolveComponent('ConfigurateEventListener')],
    ["9", resolveComponent('ConfigurateDatabase')]
]);

const currentConfigurationWindow = shallowRef(configuratorMap.get(nodes.value[props.moduleIndex].type.toString()));





</script>

<style scoped>
.popup-enter-from {
  opacity: 0;
}

.popup-leave-to {
  opacity: 0;
}

.popup-enter-from .popup-container,
.popup-leave-to .popup-container {
  -webkit-transform: scale(0.9);
  transform: scale(0.9);
}
</style>