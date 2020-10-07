<template>
  <div class="relative flex flex-col flex-1">
    <ChatHeader />
    <div class="flex flex-col flex-1 overflow-hidden">
      <ChatMessages />
      <ChatNewMessageInput />
    </div>
  </div>
</template>
<script lang="ts">
import ChatHeader from '@/components/ChatHeader.vue'
import ChatMessages from '@/components/ChatMessages.vue'
import ChatNewMessageInput from '@/components/ChatNewMessageInput.vue'

export default {
  name: 'Chat',
  components: { ChatNewMessageInput, ChatMessages, ChatHeader },
}
</script>
