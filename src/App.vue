<template>
  <div
    class="relative flex w-full h-screen overflow-hidden antialiased bg-gray-200"
  >
    <!-- left -->
    <SideBar />

    <!-- center -->
    <Chat />

    <!-- right -->
    <transition
      enterActiveClass="transform transition ease-in-out duration-500 sm:duration-700"
      enterClass="translate-x-full"
      enterToClass="translate-x-0"
      leaveActiveClass="transform transition ease-in-out duration-500 sm:duration-700"
      leaveClass="translate-x-0"
      leaveToClass="translate-x-full"
    >
      <Info v-show="showInfo" />
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { provideStore } from '@/store'
import SideBar from './components/SideBar.vue'
import Chat from './components/Chat.vue'
import Info from './components/Info.vue'

export default defineComponent({
  components: { Info, Chat, SideBar },
  setup() {
    const showInfo = ref(false)

    provideStore()

    return {
      showInfo,
    }
  },
})
</script>

<style src="tailwindcss/tailwind.css" />
