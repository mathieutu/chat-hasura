<template>
  <li
    class="flex justify-center flex-auto px-1 mx-1 -mb-px rounded-t-lg cursor-pointer last:mr-0 hover:bg-gray-200"
    :class="{ 'bg-gray-200': selected }"
  >
    <button
      class="flex items-center justify-center w-full py-2 text-xs font-semibold leading-normal tracking-wide border-b-2 border-transparent"
      @click="$emit('click')"
    >
      {{ title }}
      <span
        v-if="notifCount"
        class="flex items-center justify-center w-5 h-5 ml-1 text-xs text-white bg-blue-500 rounded-full"
      >
        {{ notifCount }}
      </span>
    </button>
  </li>
</template>
<script lang="ts">
export default {
  name: 'SideBarTab',
  props: {
    title: {
      type: String,
      required: true,
    },
    notifCount: {
      type: Number,
      default: 0,
    },
    selected: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['click'],
}
</script>
