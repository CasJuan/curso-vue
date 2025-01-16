import ChatBubble from "@/components/chat/ChatBubble.vue";
import { mount } from "@vue/test-utils";
import test, { describe } from "node:test";
import { expect } from "vitest";

describe('<ChatBubble/>', () =>{
    test ('renders own message correctly', () => {
        const message = 'Hola Mundo';
        const wrapper = mount(ChatBubble, {
            props: {message, itsMine:true},
        });

        expect(wrapper.find('.bg-blue-200').exists()).toBe(true);
        expect(wrapper.find('.bg-blue-200').exists()).toBeTruthy();
        expect(wrapper.find('.bg-blue-200').text()).toContain(message);
        expect(wrapper.find('.bg-gray-300').exists()).toBeFalsy();
    });
    test ('renders received message correctly', () => {
        const message = 'Hola Mundo';
        const wrapper = mount(ChatBubble, {
            props: {message, itsMine:false},
        });

        expect(wrapper.find('.bg-blue-200').exists()).toBeFalsy();

        expect(wrapper.find('.bg-blue-300').text()).toContain(message);
        expect(wrapper.find('.bg-gray-300').exists()).toBeTruthy();
        expect(wrapper.find('img').exists()).toBe(false);
    });
    test ('renders received message correctly whith image', () => {
        const message = 'Hola Mundo';
        const image = 'example.jpg'
        const wrapper = mount(ChatBubble, {
            props: {message, itsMine:false, image},
        });

        expect(wrapper.find('.bg-blue-200').exists()).toBeFalsy();

        expect(wrapper.find('.bg-blue-300').text()).toContain(message);
        expect(wrapper.find('.bg-gray-300').exists()).toBeTruthy();
        expect(wrapper.find('img').exists()).toBe(false);
        expect(wrapper.find('img').attributes('src')).toBe(image);
    });
})