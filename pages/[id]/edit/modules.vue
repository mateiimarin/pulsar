<template>
    <div class="canvas">
        <ModuleEditor @drop.prevent="addModule" @dragover="allowDrop" ref="moduleEditor"/>
    </div>
</template>

<script setup>

const newModule = useNewModule();
const moduleEditor = ref();

const allowDrop = (event) => {
    event.preventDefault();
}

const addModule = (event) => {
    if(newModule.value != null) {
        moduleEditor.value.createNode(newModule.value, event.clientX, event.clientY);
        newModule.value = null;
    }
}

</script>

<style scoped>
.canvas {
    height: 100vh;
    margin: 0;
    background-image: radial-gradient(#d8e8eb 2px, #fff 0);
    background-size: 41px 41px;
}
</style>