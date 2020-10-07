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
import { Channel, channels } from '@/data/channels'
import NewConversationButton from '@/components/NewConversationButton.vue'
import SideBarHeader from '@/components/SideBarHeader.vue'
import { useStore } from '@/store'
import { ListChannelsDocument, ListChannelsQuery, ListUsersDocument, ListUsersQuery } from '@/gql'
import { formatDistanceToNow, parseApi } from '@/utils/date'
import { useQuery } from '@vue/apollo-composable'
import { compact } from 'ramda-adjunct'

const tabs = {
  channels: { title: 'Channels', notifCount: 0 },
  users: { title: 'Utilisateurs', notifCount: 12 },
}

export default {
  name: 'SideBar',
  components: { SideBarHeader, NewConversationButton, Channels, SideBarTabs },
  setup() {
    const selectedTab = ref<keyof typeof tabs>('channels')
    const { sideBarIsShown, toggleSideBar } = useStore()

    const query = computed(() => (
      selectedTab.value === 'channels'
        ? ListChannelsDocument
        : ListUsersDocument
    ))

    const { result } = useQuery<ListUsersQuery | ListChannelsQuery>(query)

    const list = computed<Channel[]>(() => {
      if (!result.value) {
        return []
      }

      if ('channels' in result.value) {
        return result.value.channels.map(({ updatedAt, name, description }) => compact({
          name: `#${name}`,
          description,
          time: formatDistanceToNow(parseApi(updatedAt)),
        }))
      }

      return result.value.users.map(({ lastName, firstName, username, updatedAt }) => ({
        name: `@${username}`,
        description: `${firstName} ${lastName}`,
        time: formatDistanceToNow(parseApi(updatedAt)),
        pictureUrl: `https://unavatar.now.sh/${username}`,
      }))
    })

    return {
      list,
      selectedTab,
      tabs,
      sideBarIsShown,
      toggleSideBar,
    }
  },
}
</script>
