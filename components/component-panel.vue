<template>
    <div class="h-screen bg-white w-80 border-r-2 pad-4 z-50">
        <div>
            <h1 class="font-main font-semibold text-[27px] mb-1">Prism</h1>
            <hr class="border-t-2 border-gray-500"/>
        </div>
        <div class=" flex justify-center mt-3">
            <div class="bg-main pad-y-2 pad-x-3 rounded-md">
                <button class="bg-white w-24 mr-4 text-center pad-y-1 rounded-md" :class="{elemAct : isAttributesTabOpen}" @click="isAttributesTabOpen = true">Element</button>
                <button class="bg-white w-24 text-center pad-y-1 rounded-md" :class="{elemAct : !isAttributesTabOpen}" @click="isAttributesTabOpen = false">Style</button>
            </div>    
        </div>
        <div v-if="isAttributesTabOpen" class="mt-3">
            <div v-for="(attribute, index) in elementAttributes">
                <span class="font-semibold text-gray-600">{{ getLabel(attribute.name) }}</span>
                <input type="text" placeholder="Your Name" v-model="attribute.value" class="focus:outline-none focus:border-blue-400 bg-gray-50 focus:bg-white transition mb-4 px-3 py-2 w-full border-2 rounded border-gray-200" @change="setElementAttribute(index)"/>
            </div>
        </div>
        <div v-else class="pad-x-3 mt-4 ">
                    <span class="font-semibold text-gray-600">Spacing</span>
                    <div class="w-full bg-gray-100 rounded relative mb-3 mt-2" style="padding: 30px">
                        <input v-for="index in 4" class="h-[30px] w-[30px] text-sm absolute text-center outline-none bg-gray-100" :class="inputPositions[index-1]" v-model="properties[index-1].value" @change="updateElement(index-1)">
                        <div class="bg-gray-200 rounded relative" style="padding: 30px">
                            <input v-for="index in 4" class="h-[30px] w-[30px] text-sm absolute text-center outline-none bg-gray-200" :class="inputPositions[index-1]" v-model="properties[index+3].value" @change="updateElement(index+3)">
                            <div class="text-center bg-gray-300 rounded text-[12px]" style="padding: 4px"> Element </div>
                        </div>
                    </div>
                    <span class="font-semibold text-gray-600 ">Typography</span>
                    <div class="flex gap-2 mt-2">
                        <input type="number" class="outline-none bg-gray-100 rounded w-1/3" style="padding: 6px 0px 6px 12px" v-model="properties[10].value" @change="updateElement(10)">
                        <input type="color" class="w-1/3 rounded h-9" v-model="properties[9].value" @input="updateElement(9)" style="padding: 3px 6px">
                        <input type="number" class="outline-none bg-gray-100 rounded w-1/3" style="padding: 6px 0px 6px 12px" min="100" max="900" step="100" v-model="properties[11].value" @change="updateElement(11)">
                    </div>
                    <div class="mb-3">
                        <div class="flex justify-between bg-gray-100 mt-2 rounded" style="padding: 8px 20px">
                            <div v-for="item in properties[12].elements" @click="updateElement(12, item.value)">
                                <div v-html="item.icon"></div>
                            </div>
                        </div>
                    </div>
                    <span class="font-semibold text-gray-600 ">General</span>
                    <div class="bg-gray-100 rounded mt-2" style="padding: 8px">
                        <div class="flex items-center mb-2">
                            <span class="text-sm w-3/5">Background</span>
                            <input type="color" class="w-2/5 rounded h-9 bg-gray-100" v-model="properties[8].value" @input="updateElement(8)" style="padding: 3px 0px">
                        </div>
                        <div class="flex items-center mb-2">
                            <span class="text-sm w-3/5">Border Radius</span>
                            <input type="range" min="1" max="50" class="w-2/5 outline-none slider" v-model="properties[13].value" @input="updateElement(13)">
                        </div>
                    </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    currentElement: Object,
})

const emit = defineEmits(['elementUpdate']);

const isAttributesTabOpen = ref(false);

const htmlAttributesMap = new Map([
  ['alt', 'Alternative text'],
  ['class', 'Class name'],
  ['href', 'Hyperlink reference'],
  ['id', 'Element ID'],
  ['max', 'Maximum value'],
  ['maxlength', 'Maximum length'],
  ['min', 'Minimum value'],
  ['minlength', 'Minimum length'],
  ['name', 'Name'],
  ['placeholder', 'Placeholder text'],
  ['src', 'Image source'],
  ['step', 'Step size'],
  ['target', 'Target window or frame'],
  ['type', 'Input type'],
  ['value', 'Value'],
]);

const elementAttributes = ref([]);
if(props.currentElement) {
    for(let index = 0; index < props.currentElement.attributes.length; index++) {
        let attribute = props.currentElement.attributes.item(index);
        if(attribute.name != 'style') {
            elementAttributes.value.push({
                name: attribute.name,
                value: attribute.value,
            });
        }
    }

    console.log(elementAttributes.value)
}

const setElementAttribute = (index) => {
    const attribute = elementAttributes.value[index];
    props.currentElement.setAttribute(attribute.name, attribute.value);
    emit('elementUpdate');
}

const getLabel = (key) => {
    return htmlAttributesMap.get(key);
}

const properties = ref([
  { name: 'marginTop', value: '', hasUnit: true },
  { name: 'marginRight', value: '', hasUnit: true },
  { name: 'marginBottom', value: '', hasUnit: true  },
  { name: 'marginLeft', value: '', hasUnit: true  },
  { name: 'paddingTop', value: '', hasUnit: true  },
  { name: 'paddingRight', value: '', hasUnit: true  },
  { name: 'paddingBottom', value: '', hasUnit: true  },
  { name: 'paddingLeft', value:'', hasUnit: true  },
  { name: 'backgroundColor', value: '', hasUnit: false  },
  { name: 'color', value: '', hasUnit: false  },
  { name: 'fontSize', value: '', hasUnit: true  },
  { name: 'fontWeight', value: '', hasUnit: false  },
  { 
    name: 'textAlign', 
    value: '', 
    hasUnit: false,
    elements: [
        { icon: '<svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M448 64c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32zm0 256c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32zM0 192c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>', value: 'right'},
        { icon: '<svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M288 64c0 17.7-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32H256c17.7 0 32 14.3 32 32zm0 256c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H256c17.7 0 32 14.3 32 32zM0 192c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>', value: 'left'},
        { icon: '<svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M448 64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32zm0 256c0-17.7-14.3-32-32-32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32zM0 192c0 17.7 14.3 32 32 32H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H32c-17.7 0-32 14.3-32 32zM448 448c0-17.7-14.3-32-32-32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32z"/></svg>', value: 'justify'},
        { icon: '<svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M352 64c0-17.7-14.3-32-32-32H128c-17.7 0-32 14.3-32 32s14.3 32 32 32H320c17.7 0 32-14.3 32-32zm96 128c0-17.7-14.3-32-32-32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32zM0 448c0 17.7 14.3 32 32 32H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H32c-17.7 0-32 14.3-32 32zM352 320c0-17.7-14.3-32-32-32H128c-17.7 0-32 14.3-32 32s14.3 32 32 32H320c17.7 0 32-14.3 32-32z"/></svg>', value: 'center'},
    ]  
  },
  { name: 'borderRadius', value: '', hasUnit: true  },
]);

const inputPositions = ref([
    'top-0 left-1/2 translate-x-[-50%]',
    'right-0 top-1/2 translate-y-[-50%]',
    'bottom-0 left-1/2 translate-x-[-50%]',
    'left-0 top-1/2 translate-y-[-50%]'
])

if(props.currentElement) {
    const elementStyle = props.currentElement.style;

    properties.value.forEach((property) => {
    if(property.hasUnit) {
        let numberValue = parseFloat(elementStyle[property.name]);
        property.value = isNaN(numberValue) ? '-' : numberValue;
    }
    else {
        property.value = elementStyle[property.name];
    }
})
}

const updateElement = (index, newValue) => {
    if(properties.value[index].hasUnit) {
        props.currentElement.style[properties.value[index].name] = `${properties.value[index].value}px`;
    }
    else {
        if(newValue) {
            props.currentElement.style[properties.value[index].name] = newValue;
        }
        else {
            props.currentElement.style[properties.value[index].name] = properties.value[index].value;
        }
    }

    emit('elementUpdate');
}

</script>

<style scoped>
.elemAct {
    background-color: #1a5ef2 !important;
    color: #f5f5f5;
}
</style>