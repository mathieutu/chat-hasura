<template>
  <ul
    class="relative mt-2 mb-4 overflow-x-hidden overflow-y-auto scrolling-touch lg:max-h-sm scrollbar-w-2 scrollbar-track-gray-lighter scrollbar-thumb-rounded scrollbar-thumb-gray flex flex-col inline-block w-full h-screen px-2 select-none"
  >
    <ChannelsItem
      v-for="channel in list"
      :key="channel.name"
      v-bind="channel"
    />
  </ul>
</template>
<script lang="ts">

import { PropType } from 'vue'
import { Channel } from '@/data/channels'
import ChannelsItem from '@/components/ChannelsItem.vue'

export default {
  name: 'Channels',
  components: { ChannelsItem },
  props: {
    list: {
      type: Array as PropType<Channel[]>,
      required: true,
    },
  },
}
</script>
