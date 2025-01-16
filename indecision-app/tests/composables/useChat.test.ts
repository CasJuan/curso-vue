import { useChat } from "@/composables/useChat";
import { exec } from "child_process";
import test, { describe } from "node:test";
import { expect } from "vitest";
import { pipeToWebWritable } from "vue/server-renderer";

describe('useChat', () => {
    test('add message correctly when onMessage is called', async() => {
        const text = 'Hola mundo';
        const {messages, onMessage} = useChat();

        await onMessage(text);

        /* expect(message.value.lenght).toBe(1);
        expect(message.value[0].isMine).toBe(true);
        expect(message.value[0].message).toBe(text); */
        expect(messages.value[0]).toEqual({
            id: expect.any(Number),
            isMine: true,
            message: text,
        });
    });

    test('do nothing if text is empty', async() => {
        const text = '';
        const {  messages, onMessage} = useChat();

        await onMessage(text);

        expect(messages.value.length).toBe(0);
    });
    test(' gets her response correctly when message end witch "?" ', async() => {
        const text = 'Quieres cafe?';
        const {  messages, onMessage} = useChat();

        await onMessage(text);
        await new Promise( r => setTimeout(r, 2000));

        const [myMessage, herMessage] = messages.value;
        expect(messages.value.length).toBe(2);

        exec(herMessage.itsMine).toBe(false);

        expect(herMessage).toEqual({
            id: expect.any(Number),
            isMine: false,
            message: text,
            image: expect.any(String)
        });
        expect(myMessage).toEqual({
            id: expect.any(Number),
            isMine: true,
            message: text,
        });

    });
    test(' mock response - fetch api ', async() => {
        
        const mockResponse = {answer: 'yes', image:'example.gif'};

        (window as any).fetch = vi.fn(async () => ({
            json: async() => mockResponse,
        }));

        const text = 'Quieres cafe?';
        const {  messages, onMessage} = useChat();

        await onMessage(text);

        await new Promise( r => setTimeout(r, 1600));
        const [,herMessage] = messages.value;

        expect(herMessage).toEqual({
            id: expect.any(Number),
            isMine: false,
            message: mockResponse.answer,
            image: mockResponse.image,
        });

    });
})