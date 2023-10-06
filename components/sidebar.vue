<template>
    <div class="h-screen ">
        <div class="w-16 bg-white border-r-2 pad-3 h-full">
            <div class="pad-1 mb-3">
                <img src="../assets/images/logo.png" />
            </div>
            <div class="w-10 h-10 flex justify-center items-center bg-black text-white rounded-full mb-3 cursor-pointer tr" @click="togglePanel">
                <i class="fi fi-rr-plus" :class="{close: isPanelOpen }" style="padding-top:3px"></i>
            </div>
            <ClientOnly>
                <div v-for="(view, index) in views" :class="{active: currentView == view.route}" class="w-10 h-10 flex items-center justify-center cursor-pointer" @click="currentView = view.route">
                <NuxtLink :to="view.route">
                        <i :class="view.icon" class="text-xl"></i>
                </NuxtLink>
                </div>
            </ClientOnly>
            <div class="absolute bottom-0">
                <div class="w-10 h-10 flex justify-center items-center bg-[#1a5ef2] text-white rounded-full mb-3 cursor-pointer tr" @click="publishProject(projectId)">
                    <i class="fi fi-rr-cloud-upload-alt" style="padding-top:3px"></i>
                </div>
                <div class="w-10 h-10 flex justify-center items-center bg-black text-white rounded-full mb-3 cursor-pointer tr">
                    <a :href="`http://localhost:3000/${projectId}`" target="_blank" style="padding-top:3px"><i class="fi fi-rr-share-square" ></i></a>
                </div>
            </div>
        </div>
        
        <SidebarPanel v-if="isPanelOpen"/>
    </div>
</template>

<script setup>

const currentView = useCurrentView();
const isPanelOpen = useIsPanelOpen();

const projectId = useRoute().params.id;


const togglePanel = () => {
    isPanelOpen.value = !isPanelOpen.value;
}

const views = ref([
    {
        icon: 'fi fi-rr-objects-column',
        route: 'design',
    },
    {
        icon: 'fi fi-rr-paint-brush',
        route: 'styles',
    },
    {
        icon: 'fi fi-rr-code-branch',
        route: 'modules',
    },
    {
        icon: 'fi fi-rr-database',
        route: 'database',
    },
    {
        icon: 'fi fi-rr-exchange',
        route: 'integrations',
    },
    {
        icon: 'fi fi-rr-settings-sliders',
        route: 'settings',
    },
])


</script>

<style scoped>

.active {
    border: 2px solid #a4a4a4;
    border-radius: 8px;
}

.close {
    transform: rotate(45deg);
    transition: transform .1s ease-in;
}



</style>