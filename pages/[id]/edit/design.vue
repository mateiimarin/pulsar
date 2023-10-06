<template>
    <div class="flex bg-main">
        <ComponentPanel :current-element="currentElement" @element-update="update" :key="refreshKey"/>
        <ComponentEditor @drop.prevent="addComponent" @click="isPanelOpen = false" @dragover="allowDrop" @element-select="setElement" ref="componentEditor"/>
    </div>
</template>

<script setup>
import { useIsPanelOpen } from '~/composables/sidebar';

const currentView = useCurrentView();
currentView.value = 'design';

const componentEditor = ref();
const newComponent = useNewComponent();

useHead({
    link: [
        {
            rel: 'stylesheet',
            href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css',
        }
    ]
})

const projectId = useRoute().params.id;

const allowDrop = (event) => {
    event.preventDefault();
}

const addComponent = (event) => {
    if(newComponent.value != null) {
        componentEditor.value.addComponent(event.target, newComponent.value);
        newComponent.value = null;
    }
}

const currentElement = ref(null);
const refreshKey = ref(0);
const setElement = (element) => {
    currentElement.value = element;
    refreshKey.value += 1;
}

const update = () => {
    componentEditor.value.updateState();
}

const isPanelOpen = useIsPanelOpen();

await getCurrentProjectData(projectId);

</script>

<style lang="scss" scoped>

</style>