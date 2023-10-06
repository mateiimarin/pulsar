<template>
    <div>
        <div v-if="isChatBotOpen"  class="bg-white h-[500px] w-72 border-2 mb-3 rounded-xl p-4 relative shadow-lg shadow-gray-200">
            <span class="text-lg font-semibold ">Prism AI</span>
            <div class="overflow-auto max-h-[400px]">
                <div v-for="message in messages" class="mb-3">
                    <span class="text-sm">{{ message.sender }}</span>
                    <p class="text-justify pr-3">{{ message.content }}</p>
                </div>
            </div>
            <div class="absolute bottom-0 w-[252px] flex">
                <div class="focus:outline-none focus:border-blue-400 bg-gray-50  focus:bg-white transition mb-5 px-3 py-1.5 text-sm w-[209px] border-2 rounded-lg border-gray-200" contenteditable="true" ref="textBox">What is Prism?</div>
                <div class="h-[35.2px] w-[35.2px] bg-[#F9FAFB] border-2 rounded-lg ml-2 flex items-center justify-center cursor-pointer" @click="sendMessage"><i class="fi fi-rr-paper-plane"></i> </div>
            </div>
        </div>
        <div class="bg-[#1a5ef2] h-14 w-14 rounded-full flex justify-center items-center text-gray-200 cursor-pointer float-right" @click="isChatBotOpen = !isChatBotOpen">
            <i class="fi fi-rr-magic-wand  text-xl"></i>
        </div>
    </div>
</template>

<script setup>
const isChatBotOpen = ref(false);

const textBox = ref();

const messages = ref([]);

const sendMessage = async () => {
    const request = textBox.value.textContent;
    messages.value.push({
        sender: "user",
        content: request,
    })
    textBox.value.textContent = '';

        messages.value.push({
            sender: "Prism AI",
            content: 'Typing...',
        })



    const { data:botResponse } = await useFetch("/api/chatbot", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: request,
    });
    messages.value[messages.value.length-1].content = botResponse.value.result;
    

}


</script>

<style scoped>

</style>