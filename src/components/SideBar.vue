<template>
  <div
    v-if="sideBarIsShown"
    class="relative flex-col hidden h-full transition-all duration-500 ease-in-out transform bg-white border-r border-gray-300 shadow-xl w-96 md:flex"
  >
    <SideBarHeader @toogleSidebar="toggleSideBar" />
    <SideBarTabs v-model:selectedTab="selectedTab" :tabs="tabs" />
    <Channels :list="list" />
    <NewConversationButton />
  </div>
</template>
<script lang="ts">
import SideBarTabs from '@/components/SideBarTabs.vue'
import Channels from '@/components/ChannelsList.vue'
import { computed, ref } from 'vue'
import { channels, users } from '@/data/channels'
import NewConversationButton from '@/components/NewConversationButton.vue'
import SideBarHeader from '@/components/SideBarHeader.vue'
import { useStore } from '@/store'

const tabs = {
  channels: { title: 'Channels', notifCount: 0, list: channels },
  users: { title: 'Utilisateurs', notifCount: 12, list: users },
}

export default {
  name: 'SideBar',
  components: {
    SideBarHeader, NewConversationButton, Channels, SideBarTabs,
  },
  setup() {
    const selectedTab = ref<keyof typeof tabs>('channels')
    const list = computed(() => tabs[selectedTab.value].list)
    const { sideBarIsShown, toggleSideBar } = useStore()
    return {
      selectedTab,
      list,
      users,
      tabs,
      sideBarIsShown,
      toggleSideBar,
    }
  },
}
</script>
