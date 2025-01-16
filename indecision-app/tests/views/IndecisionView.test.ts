import ChatMessages from "@/components/chat/ChatMessages.vue";
import MessageBox from "@/components/chat/MessageBox.vue";
import IndecisionView from "@/views/IndecisionView.vue";
import { mount } from "@vue/test-utils";
import { describe } from "node:test";
import { expect, test } from 'vitest';


const mockChatMessages = {
    template: '<div data-testid="mock-messages">Mock ChatMessages</div>'
}


describe('<IndecisionView />' , () => {

    test('render chat messages and messagebox correctly', () => {
        const wrapper = mount(IndecisionView);
        expect(wrapper.html()).toMatchSnapshot();

        expect(wrapper.findComponent(ChatMessages).exists()).toBe(true);
        expect(wrapper.findComponent(MessageBox).exists()).toBe(true);
    });

    test('calls onMessage when sending a message', async () => {
        const wrapper = mount(IndecisionView,{
            global:{
                stubs:{
                    ChatMessages:mockChatMessages,
                },
            }
        });


        //simluar evento personalizado
        const messageboxComponent = wrapper.findComponent(MessageBox);

        messageboxComponent.vm.$emit('sendMessage','Hola mundo');

        await new Promise((r) => setTimeout(() => {
            r
        }, 150));
    })


})