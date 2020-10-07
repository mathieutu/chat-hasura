<template>
  <div class="flex justify-center overflow-y-scroll">
    <div class="flex flex-col w-full max-w-xl px-3 py-2">
      <ChatEvent message="Channel was created" />
      <ChatEvent message="8 Mai" />
      <ChatMessage message="Use the buttons above the editor to test on them" />
      <ChatMessage message="Another message" />
      <ChatMessage message="last one" right />
      <ChatMessage message="Use the buttons above the editor to test on them" />
      <ChatMessage message="Another message" />
      <ChatMessage message="last one" right />
      <ChatMessage message="Use the buttons above the editor to test on them" />
      <ChatMessage message="Another message" />
      <ChatMessage message="last one" right />
      <ChatMessage message="Use the buttons above the editor to test on them" />
      <ChatMessage message="Another message" />
      <ChatMessage message="last one" right />
      <ChatMessage message="Use the buttons above the editor to test on them" />
      <ChatMessage message="Another message" />
      <ChatMessage message="last one" right />
      <ChatEvent message="Hier" />
      <ChatMessage message="Use the buttons above the editor to test on them" />
      <ChatMessage message="Another message" />
      <ChatMessage message="last one" right />
      <ChatMessage message="Use the buttons above the editor to test on them" />
      <ChatMessage message="Another message" />
      <ChatMessage message="last one" right />
      <ChatMessage message="Use the buttons above the editor to test on them" />
      <ChatMessage message="Another message" />
      <ChatMessage message="last one" right />
      <ChatMessage message="Use the buttons above the editor to test on them" />
      <ChatMessage message="Another message" />
      <ChatMessage message="last one" right />
      <ChatMessage message="Use the buttons above the editor to test on them" />
      <ChatMessage message="Another message" />
      <ChatEvent message="Aujourd'hui" />
      <ChatMessage message="last one" right />
      <ChatEvent message="Un event de base" />
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
}
</script>
