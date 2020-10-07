<template>
  <div class="flex items-center justify-between w-full px-3 pt-3 pb-2 text-white">
    <MenuButton @click="toggleSideBar" />
    <div class="relative w-full pl-2 text-gray-400 focus-within:text-gray-700">
      <button
        class="absolute inset-y-0 right-0 pr-4"
        type="submit"
      >
        <svg
          class="w-6 h-6 fill-current"
          height="24"
          viewBox="0 0 24 24"
          width="24"
        >
          <path
            d="M9.5,3 C13.0898509,3 16,5.91014913 16,9.5 C16,10.9337106 15.5358211,12.2590065 14.7495478,13.3338028 L19.7071068,18.2928932 C20.0976311,18.6834175 20.0976311,19.3165825 19.7071068,19.7071068 C19.3466228,20.0675907 18.7793918,20.0953203 18.3871006,19.7902954 L18.2928932,19.7071068 L13.3338028,14.7495478 C12.2590065,15.5358211 10.9337106,16 9.5,16 C5.91014913,16 3,13.0898509 3,9.5 C3,5.91014913 5.91014913,3 9.5,3 Z M9.5,5 C7.01471863,5 5,7.01471863 5,9.5 C5,11.9852814 7.01471863,14 9.5,14 C11.9852814,14 14,11.9852814 14,9.5 C14,7.01471863 11.9852814,5 9.5,5 Z"
            fill-rule="nonzero"
          />
        </svg>
      </button>
      <label class="sr-only" for="search">Search</label>
      <input
        id="search"
        autocomplete="off"
        class="w-full py-2 pl-4 text-sm bg-gray-100 border rounded-full focus:bg-white focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
        name="q"
        placeholder="Search..."
        type="search"
      >
    </div>
  </div>
</template>
<script lang="ts">
import MenuButton from '@/components/MenuButton.vue'
import { useStore } from '@/store'

export default {
  name: 'SideBarHeader',
  components: { MenuButton },

  setup() {
    const { toggleSideBar } = useStore()

    return {
      toggleSideBar,
    }
  },
}
</script>
