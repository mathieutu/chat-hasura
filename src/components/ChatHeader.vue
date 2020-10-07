<template>
  <div class="z-20 flex flex-grow-0 flex-shrink-0 w-full px-3 bg-white border-b justify-between items-center">
    <MenuButton v-if="!sideBarIsShown" @click="toggleSideBar" />

    <ChatTitle />
    <div class="flex">
      <PinnedMessage v-if="false" />
      <ChatActions />
    </div>
  </div>
</template>
<script lang="ts">
import ChatActions from '@/components/ChatActions.vue'
import ChatTitle from '@/components/ChatTitle.vue'
import PinnedMessage from '@/components/PinnedMessage.vue'
import MenuButton from '@/components/MenuButton.vue'
import { useStore } from '@/store'

export default {
  name: 'ChatHeader',
  components: {
    MenuButton, ChatActions, ChatTitle, PinnedMessage,
  },
  setup() {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const { toggleSideBar, sideBarIsShown } = useStore()!

    return {
      toggleSideBar,
      sideBarIsShown,
    }
  },
}
</script>
