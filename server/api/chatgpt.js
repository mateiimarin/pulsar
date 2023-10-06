import { Configuration, OpenAIApi } from "openai";

const runtimeConfig = useRuntimeConfig();
const configuration = new Configuration({
    apiKey: runtimeConfig.openaiKey,
})

const openai = new OpenAIApi(configuration);

export default defineEventHandler(async (event) => {
    const input = await readBody(event)

    try {
        const response = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [{"role":"user", "content": input}]
        })
        return {
            result: response.data.choices[0].message.content,
            error: 'none',
        }
    } catch(error) {
        return {
            error: error.message,
        }
    }
    
})