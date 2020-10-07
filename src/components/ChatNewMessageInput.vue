<template>
  <form
    class="relative flex items-center self-center w-full max-w-xl p-2 text-gray-600 focus-within:text-gray-400"
    @submit.prevent="onSubmit"
  >
    <span class="absolute inset-y-0 right-0 flex items-center pr-4">
      <button
        class="p-1 focus:outline-none focus:shadow-none hover:text-blue-500"
        type="submit"
      >
        <svg
          class="w-6 h-6 fill-current"
          viewBox="0 0 24 24"
        >
          <path
            d="M6.43800037,12.0002892 L6.13580063,11.9537056 C5.24777712,11.8168182 4.5354688,11.1477159 4.34335422,10.2699825 L2.98281085,4.05392998 C2.89811796,3.66698496 2.94471512,3.2628533 3.11524595,2.90533607 C3.53909521,2.01673772 4.60304421,1.63998415 5.49164255,2.06383341 L22.9496381,10.3910586 C23.3182476,10.5668802 23.6153089,10.8639388 23.7911339,11.2325467 C24.2149912,12.1211412 23.8382472,13.1850936 22.9496527,13.6089509 L5.49168111,21.9363579 C5.13415437,22.1068972 4.73000953,22.1534955 4.34305349,22.0687957 C3.38131558,21.8582835 2.77232686,20.907987 2.9828391,19.946249 L4.34336621,13.7305987 C4.53547362,12.8529444 5.24768451,12.1838819 6.1356181,12.0469283 L6.43800037,12.0002892 Z M5.03153725,4.06023585 L6.29710294,9.84235424 C6.31247211,9.91257291 6.36945677,9.96610109 6.44049865,9.97705209 L11.8982869,10.8183616 C12.5509191,10.9189638 12.9984278,11.5295809 12.8978255,12.182213 C12.818361,12.6977198 12.4138909,13.1022256 11.8983911,13.1817356 L6.44049037,14.0235549 C6.36945568,14.0345112 6.31247881,14.0880362 6.29711022,14.1582485 L5.03153725,19.9399547 L21.6772443,12.0000105 L5.03153725,4.06023585 Z"
            fill-rule="nonzero"
          />
        </svg>
      </button>
    </span>
    <label class="sr-only" for="new-message">Nouveau message</label>
    <textarea
      id="new-message"
      ref="textAreaRef"
      v-model="newMessage"
      autocomplete="off"
      class="w-full py-2 pl-2 pr-10 text-sm placeholder-gray-800 bg-white border border-transparent rounded-lg appearance-none resize-none focus:bg-white focus:outline-none focus:border-blue-500 focus:text-gray-900 focus:shadow-outline-blue"
      placeholder="Nouveau message"
      rows="1"
      @keydown="onKeyDown"
    />
  </form>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import { resizeTextAreaDependingOfContent } from '@/hooks'

export default defineComponent({
  name: 'ChatNewMessageInput',
  setup() {
    const newMessage = ref('')

    const onSubmit = () => console.log(newMessage.value)

    const textAreaRef = resizeTextAreaDependingOfContent(newMessage, 4)

    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key === 'Enter') {
        onSubmit()
      }
    }
    return {
      textAreaRef,
      newMessage,
      onSubmit,
      onKeyDown,
    }
  },
})
</script>
