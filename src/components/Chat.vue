<template>
  <div class="relative flex flex-col flex-1">
    <ChatHeader />
    <div class="flex flex-col flex-1 overflow-hidden">
      <ChatMessages :messages="messages" />
      <ChatNewMessageInput />
    </div>
  </div>
</template>
<script lang="ts">
import ChatHeader from '@/components/ChatHeader.vue'
import ChatMessages from '@/components/ChatMessages.vue'
import ChatNewMessageInput from '@/components/ChatNewMessageInput.vue'
import { PropType, ref, reactive, watchEffect, watch, computed, defineComponent } from 'vue'
import { useStore } from '@/store'
import { useFindChannelQuery } from '@/gql'

export default defineComponent({
  name: 'Chat',
  components: { ChatNewMessageInput, ChatMessages, ChatHeader },
  setup() {
    const { selectedChannel } = useStore()
    const { result, loading } = useFindChannelQuery(() => ({ id: selectedChannel.value || '' }))

    const messages = computed(() => result.value?.channel?.messages.map(({ id, content, createdAt }) => ({
      id,
      content,
      createdAt,
    })) ?? [])

    return {
      messages,
    }
  },
})
</script>
