<template>
    <div>
        <div class="h-screen flex">
            <Sidebar class="z-[9999]"/>
            <div class="mn-w">
                <slot/>
            </div>
            <Chatbot class="fixed right-[30px] bottom-[30px]"/>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.mn-w {
    min-width: calc(100% - 64px);
}
</style>