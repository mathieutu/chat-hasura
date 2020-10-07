<template>
  <div
    class="p-4 my-2 text-sm bg-white rounded-t-lg shadow"
    :class="right ? 'self-end rounded-l-lg text-right' : 'self-start rounded-r-lg text-left'"
  >
    {{ message }}
  </div>
</template>
<script lang="ts">
export default {
  name: 'ChatMessage',
  props: {
    message: {
      type: String,
      required: true,
    },
    right: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
