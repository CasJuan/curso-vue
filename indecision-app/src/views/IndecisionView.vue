<script setup lang="ts">
import MessageBox from '../components/chat/MessageBox.vue';
import ChatMessages from '../components/chat/ChatMessages.vue';
import type { ChatMessage } from '@/interfaces/chat-message.interface';
import { ref } from 'vue';

const messages = ref<ChatMessage[]>([
  {
  id: new Date().getTime(),
  message: "Hola mundo",
  itsMine:true,
  },
  {
  id: new Date().getTime(),
  message: "quieres ir a tomar cafe?",
  itsMine:true,
  },
  {
  id: new Date().getTime() +1,
  message: "no",
  itsMine:false,
  image:"https://yesno.wtf/assets/no/26-34b31d1f0777f70c61488f67a36576a9.gif"
  },
]);

</script>

<!-- Fuente: https://tailwindcomponents.com/component/chat-layout -->
<template>
    <div class="bg-gray-100 h-screen flex flex-col max-w-lg mx-auto">
      <div class="bg-blue-500 p-4 text-white flex justify-between items-center">
        <span>Mi</span>
      </div>
  
      <ChatMessages :messages="messages"/>
  
      <MessageBox/>

    </div>
  </template>