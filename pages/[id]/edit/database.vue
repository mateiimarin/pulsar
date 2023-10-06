<template>
    <div class="h-screen bg-main w-full flex items-center justify-center">
        <DatabaseTable />
    </div>
</template>

<script setup>
const currentView = useCurrentView();
currentView.value = 'database';


</script>

<style lang="scss" scoped>

</style>