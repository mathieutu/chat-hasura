<template>
  <ul class="flex items-center px-2 border-b select-none">
    <SideBarTab
      v-for="({ title, notifCount }, key) in tabs"
      :key="key"
      :title="title"
      :notifCount="notifCount"
      :selected="key === selectedTab"
      @click="$emit('update:selectedTab',key)"
    />
  </ul>
</template>
<script lang="ts">
import SideBarTab from '@/components/SideBarTab.vue'

export default {
  name: 'SideBarTabs',
  components: { SideBarTab },
  props: {
    selectedTab: {
      type: String,
      required: true,
    },
    tabs: {
      type: Object,
      required: true,
    },
  },
  emits: ['update:selectedTab'],
}
</script>
