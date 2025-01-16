import ChatMessages from "@/components/chat/ChatMessages.vue";
import type { ChatMessage } from "@/interfaces/chat-message.interface";
import { mount } from "@vue/test-utils";
import { describe } from "node:test";
import { expect, test } from "vitest";

const messages: ChatMessage[] = [
    {id: 1, message:"hola", itsMine:true},
    {id: 2, message:"mundo", itsMine:false, image:'hola.jpg'},
]

describe('<ChatMessages>', () => { 

    test('renders chat messages correctly',() => {
        const wrapper = mount(ChatMessages, {
            props:{
                messages
            },
        });
        const chatBubbles = wrapper.findAllComponents({name: 'ChatBubblle'});
        
        expect (chatBubbles.length).toBe(messages.length);
    })


 })