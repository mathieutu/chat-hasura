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
      enter-active-class="transform transition ease-in-out duration-500 sm:duration-700"
      enter-class="translate-x-full"
      enter-to-class="translate-x-0"
      leave-active-class="transform transition ease-in-out duration-500 sm:duration-700"
      leave-class="translate-x-0"
      leave-to-class="translate-x-full"
    >
      <Info v-show="showInfo" />
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import SideBar from './components/SideBar.vue'
import Chat from './components/Chat.vue'
import Info from './components/Info.vue'

export default defineComponent({
  components: { Info, Chat, SideBar },
  setup() {
    const showInfo = ref(false)

    return {
      showInfo,
    }
  },
})
</script>

<style src="tailwindcss/tailwind.css" />
