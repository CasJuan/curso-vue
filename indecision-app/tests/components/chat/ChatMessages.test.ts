import ChatMessages from "@/components/chat/ChatMessages.vue";
import type { ChatMessage } from "@/interfaces/chat-message.interface";
import { mount } from "@vue/test-utils";
import { describe } from "node:test";
import { expect, test } from "vitest";

const messages: ChatMessage[] = [
    {id: 1, message:"hola", itsMine:true},
    {id: 2, message:"mundo", itsMine:false, image:'hola.jpg'},
];


describe('<ChatMessages>', () => { 
    const wrapper = mount(ChatMessages, {
        props:{
            messages
        },
    });

    test('renders chat messages correctly',() => {
        const chatBubbles = wrapper.findAllComponents({name: 'ChatBubblle'});
        
        expect (chatBubbles.length).toBe(messages.length);
    })

    test('scrolls down to the bottom after messages update', async() => {
        const scrollMock = vi.fn();

        const chatRerf = wrapper.vm.$refs.chatRef as HTMLDivElement;
        chatRerf.scrollTo = scrollMockl;
        
        
        await wrapper.setProps({
            messages: [...messages, {id: 3, message:"hiii", itsMine:true}],
        });

        await new Promise ( (r) => setTimeout(r,150) );

        expect(scrollMock).toHaveBeenCalled();
        expect(scrollMock).toHaveBeenCalledWith({
            behaivor: 'smooth',
            top: expect.any(Number),
        });
    })


 })