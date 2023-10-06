<template>
      <div class="h-screen w-[calc(100%_-_320px)] p-6">
          <ClientOnly>
              <div class="bg-white h-full rounded w-full border-2 relative focus:outline-none overflow-auto cursor-pointer" v-html="html" contenteditable="true" @click="setElement" @mouseleave="removeHighlight" @mouseover="highlight" @contextmenu.prevent="openPopup" @dragover="highlight" ref="editorViewport"></div>
              <!--
              <Teleport to="body">
                  <ComponentPopup @close="updateState" v-if="showComponentPopup" :event="componentEvent"/>
              </Teleport>
          -->
          </ClientOnly>
      </div>
</template>

<script setup>
const appComponents = useAppComponents();
const currentProjectFile = useCurrentProjectFile();

const html = ref('Loading');
const editorViewport = ref();
let watched = false;

const emit = defineEmits(['elementSelect'])

if(!currentProjectFile.value) {
  watch(currentProjectFile, () => {
    if(!watched) {
      console.log(currentProjectFile.value)
      html.value = currentProjectFile.value;
      watched = true;
    }
  })
}
else html.value = currentProjectFile.value;

const updateState = () => {
  currentProjectFile.value = editorViewport.value.innerHTML;
  console.log('updatinf')

  //showComponentPopup.value = false;
}

const generateId = (componentType) => {
    return (componentType + ' ' + Math.floor(Math.random() * (9999 - 1000) + 1000).toString()).toLowerCase().replace(/ /g, '-');
}

const addComponent = (parentComponentNode, newComponentType) => {
  var componentId = generateId(appComponents.value[newComponentType].name);
  while(document.getElementById(componentId) != null) componentId = generateId(appComponents.value[newComponentType].name);

  while(parentComponentNode.tagName != "DIV") {
        parentComponentNode = parentComponentNode.parentElement;
  }

  console.log(parentComponentNode)
  parentComponentNode.classList.remove("container-placeholder-x");
  const componentTemplate =  appComponents.value[newComponentType].template.replace('<id>', componentId);
  parentComponentNode.innerHTML += componentTemplate;

  updateState();
}

const removeHighlight = () => {
  highlightedElement.value.classList.remove("highlight");
  highlightedElement.value = null;
}

const highlightedElement = ref(null);
const highlight = (event) => {
  if(highlightedElement.value) {
    removeHighlight();
    highlightedElement.value = event.target;
    event.target.classList.add("highlight");
  }
  else {
    highlightedElement.value = event.target;
    event.target.classList.add("highlight");
  }
}


const setElement = (event) => {
  emit('elementSelect', event.target);
}

defineExpose({ addComponent, updateState });
</script>

<style>
    .highlight {
        outline: 2px solid #bec5d3;
        outline-offset: -2px;
        border-radius: .2rem;
    }

    .container-placeholder-x {
      background-image: url('../assets/images/placeholder.png');
      background-repeat: no-repeat;
      background-position: center center;
      background-color: #f9f9f9;
      outline: 2px dashed #CED7EA;
      outline-offset: -3px;
      height: 100%;
      height: 150px;
    }
</style>