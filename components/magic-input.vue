<template>
    <div>
        <div class="text-xs font-semibold text-gray-700 mb-1"><slot></slot></div>
        <div class="relative">
            
            <div contenteditable="true" class="focus:outline-none focus:border-blue-400 bg-gray-50 focus:bg-white transition mb-4 px-3 py-2 min-h-[38px] w-full border-2 rounded border-gray-200" @keyup="$emit('inputChange')" ref="input">

            </div>
            <div v-if="dataSource.length > 0" class="text-red-600 text-lg absolute top-0 right-0 px-3 py-2 mt-[2px] cursor-pointer" @click="togglePopup"><i class="fi fi-rr-magic-wand"></i></div>
            <div v-if="isPopupOpened" class="bg-white rounded-md absolute right-[-230px] py-3 px-2 w-48 max-w-[250px] top-0">
                <span class="font-bold px-3 text-[18px]">Data Sources</span>
                <div v-for="source in dataSource" class="mt-1 py-1 px-3 cursor-pointer hover:bg-[#f7f7f7] rounded-md" @click="addChip(source), $emit('inputChange')">{{ variables.get(source) }}</div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    dataSource: Array,
})

const isPopupOpened = ref(false);
const variables = useVariables();
const togglePopup = () => {
    isPopupOpened.value = !isPopupOpened.value;
}

const input = ref();

const convert = () => {  
    let children = input.value.childNodes;
    
    if (children.length === 1 && children[0].nodeName === "SPAN") {
        return children[0].getAttribute('varKey');
    }

    let result = "";

    for (let i = 0; i < children.length; i++) {
        if (children[i].nodeType === Node.ELEMENT_NODE && children[i].nodeName === "SPAN") {
            result += " ${" + children[i].getAttribute('varKey') + "} ";
        } else {
            result += children[i].textContent;
        }
    }

    return "`" + result + "`";

}


const value = () => {
    return {
        enc: input.value.innerHTML,
        dec: convert(),
    }
}

defineExpose({ value });

const addChip = (chipSource) => {
    const chip = document.createElement('span');
    chip.innerText = variables.value.get(chipSource);
    chip.contentEditable = "false";
    chip.setAttribute('varKey', chipSource);
    chip.classList.add('bg-red-600', 'rounded-full', 'text-white', 'w-min', 'text-sm', 'py-1', 'px-4', 'mr-1');
    input.value.appendChild(chip);
    togglePopup();
}

</script>

<style lang="scss" scoped>

</style>