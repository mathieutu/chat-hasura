<template>
  <div class="flex justify-center overflow-y-scroll">
    <div class="flex flex-col w-full max-w-xl px-3 py-2">
      <ChatEvent content="Channel was created" />
      <ChatEvent content="8 Mai" />
      <ChatMessage content="Use the buttons above the editor to test on them" />
      <ChatMessage content="Another message" />
      <ChatMessage content="last one" right />
      <ChatMessage content="Use the buttons above the editor to test on them" />
      <ChatMessage content="Another message" />
      <ChatMessage content="last one" right />
      <ChatMessage content="Use the buttons above the editor to test on them" />
      <ChatMessage content="Another message" />
      <ChatMessage content="last one" right />
      <ChatMessage content="Use the buttons above the editor to test on them" />
      <ChatMessage content="Another message" />
      <ChatMessage content="last one" right />
      <ChatMessage content="Use the buttons above the editor to test on them" />
      <ChatMessage content="Another message" />
      <ChatMessage content="last one" right />
      <ChatEvent content="Hier" />
      <ChatMessage content="Use the buttons above the editor to test on them" />
      <ChatMessage content="Another message" />
      <ChatMessage content="last one" right />
      <ChatMessage content="Use the buttons above the editor to test on them" />
      <ChatMessage content="Another message" />
      <ChatMessage content="last one" right />
      <ChatMessage content="Use the buttons above the editor to test on them" />
      <ChatMessage content="Another message" />
      <ChatMessage content="last one" right />
      <ChatMessage content="Use the buttons above the editor to test on them" />
      <ChatMessage content="Another message" />
      <ChatMessage content="last one" right />
      <ChatMessage content="Use the buttons above the editor to test on them" />
      <ChatMessage content="Another message" />
      <ChatEvent content="Aujourd'hui" />
      <ChatMessage content="last one" right />
      <ChatEvent content="Un event de base" />
      <ChatMessage
        v-for="message in messages"
        :key="message.id"
        v-bind="message"
        right
      />
    </div>
  </div>
</template>
<script lang="ts">
import ChatEvent from '@/components/ChatEvent.vue'
import ChatMessage from '@/components/ChatMessage.vue'
// TODO le dernier message est coupé (pas de padding ni ombre)
export default {
  name: 'ChatMessages',
  components: { ChatEvent, ChatMessage },
  props: {
    messages: {
      type: Array,
      required: true,
    },
  },
}
</script>
