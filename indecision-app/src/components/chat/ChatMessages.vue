<script setup lang="ts">
import type { ChatMessage } from '@/interfaces/chat-message.interface';
import ChatBubble from './ChatBubble.vue';
import { nextTick, ref, watch } from 'vue';

interface Props{
  messages: ChatMessage[];
}

const chatRef = ref<HTMLDivElement|null>(null);

const props = defineProps<Props>();

/* watch(messages, () => {
  setTimeout(() => {
    chatRef.value?.scrollTo({
      top: chatRef.value.scrollHeight,
      behavior:'smooth',
    });
  },100)
});
 */
watch(  props, async () => {
      await nextTick();
      chatRef.value?.scrollTo({
        top: chatRef.value.scrollHeight,
        behavior: 'smooth',
      });
    },
    { deep: true },
  );


</script>

<template>
    <div ref="chatRef" class="flex-1 overflow-y-auto p-4">
        <div class="flex flex-col space-y-2">
          <!-- Messages go here -->
         <ChatBubble 
         v-for="message in messages"
         :key="message.id"
         v-bind="message"
         />

         <!-- :its-mine="message.itsMine" 
         :message="message.message"
         :image="message.image -->"
         
         
        </div>
      </div>
</template>