<template>
  <div
    class="self-center px-3 py-1 my-1 text-sm text-gray-700 bg-white border border-gray-200 rounded-full shadow"
  >
    {{ message }}
  </div>
</template>
<script lang="ts">
export default {
  name: 'ChatEvent',
  props: {
    message: {
      type: String,
      required: true,
    },
  },
}
</script>
