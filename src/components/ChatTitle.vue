<template>
  <div class="flex">
    <div
      class="w-12 h-12 mx-4 my-2 bg-blue-500 bg-center bg-no-repeat bg-cover rounded-full cursor-pointer"
      style="background-image: url(https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=50)"
    />
    <div class="flex flex-col justify-center flex-1 overflow-hidden cursor-pointer">
      <div class="overflow-hidden text-base font-medium leading-tight text-gray-600 whitespace-no-wrap">
        Karen
      </div>
      <div class="text-sm font-medium leading-tight text-gray-600 whitespace-no-wrap">
        Online
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: 'ChatTitle',
}
</script>
