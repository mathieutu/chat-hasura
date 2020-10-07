<template>
  <li
    class="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer hover:bg-gray-200"
  >
    <div v-if="pictureUrl" class="relative">
      <img
        :alt="name"
        class="object-cover w-12 h-12 rounded-full"
        :src="pictureUrl"
      >
      <div
        v-if="isOnline"
        class="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-white rounded-full"
        style="border-width: .1rem"
      />
    </div>
    <div class="flex justify-between flex-1">
      <div>
        <p class="text-sm font-semibold text-black">
          {{ name }}
        </p>
        <p v-if="description" class="text-sm truncate">
          {{ description }}
        </p>
      </div>

      <div class="flex flex-col items-end justify-between">
        <div class="flex">
          <svg
            v-if="status === 'received'"
            class="w-4 h-4 text-green-500 fill-current"
            height="14"
            viewBox="0 0 19 14"
            width="19"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.96833846,10.0490996 L11.5108251,2.571972 C11.7472185,2.30180819 12.1578642,2.27443181 12.428028,2.51082515 C12.6711754,2.72357915 12.717665,3.07747757 12.5522007,3.34307913 L12.4891749,3.428028 L5.48917485,11.428028 C5.2663359,11.6827011 4.89144111,11.7199091 4.62486888,11.5309823 L4.54038059,11.4596194 L1.54038059,8.45961941 C1.2865398,8.20577862 1.2865398,7.79422138 1.54038059,7.54038059 C1.7688373,7.31192388 2.12504434,7.28907821 2.37905111,7.47184358 L2.45961941,7.54038059 L4.96833846,10.0490996 L11.5108251,2.571972 L4.96833846,10.0490996 Z M9.96833846,10.0490996 L16.5108251,2.571972 C16.7472185,2.30180819 17.1578642,2.27443181 17.428028,2.51082515 C17.6711754,2.72357915 17.717665,3.07747757 17.5522007,3.34307913 L17.4891749,3.428028 L10.4891749,11.428028 C10.2663359,11.6827011 9.89144111,11.7199091 9.62486888,11.5309823 L9.54038059,11.4596194 L8.54038059,10.4596194 C8.2865398,10.2057786 8.2865398,9.79422138 8.54038059,9.54038059 C8.7688373,9.31192388 9.12504434,9.28907821 9.37905111,9.47184358 L9.45961941,9.54038059 L9.96833846,10.0490996 L16.5108251,2.571972 L9.96833846,10.0490996 Z"
              fill-rule="nonzero"
            />
          </svg>
          <svg
            v-if="status === 'sent'"
            class="w-4 h-4 fill-current"
            height="14"
            viewBox="0 0 19 14"
            width="19"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.96833846,10.0490996 L14.5108251,2.571972 C14.7472185,2.30180819 15.1578642,2.27443181 15.428028,2.51082515 C15.6711754,2.72357915 15.717665,3.07747757 15.5522007,3.34307913 L15.4891749,3.428028 L8.48917485,11.428028 C8.2663359,11.6827011 7.89144111,11.7199091 7.62486888,11.5309823 L7.54038059,11.4596194 L4.54038059,8.45961941 C4.2865398,8.20577862 4.2865398,7.79422138 4.54038059,7.54038059 C4.7688373,7.31192388 5.12504434,7.28907821 5.37905111,7.47184358 L5.45961941,7.54038059 L7.96833846,10.0490996 L14.5108251,2.571972 L7.96833846,10.0490996 Z"
              fill-rule="nonzero"
            />
          </svg>
          <span class="ml-1 text-xs font-medium text-gray-600">{{ time }}</span>
        </div>
        <span
          v-if="notifCount"
          class="flex items-center justify-center w-5 h-5 text-xs text-right text-white bg-green-500 rounded-full"
        >
          {{ notifCount }}
        </span>
      </div>
    </div>
  </li>
</template>
<script lang="ts">

import { PropType } from 'vue'

export default {
  name: 'ChannelsItem',
  props: {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: null,
    },
    isOnline: {
      type: Boolean,
      default: false,
    },
    status: {
      type: String as PropType<'received' | 'sent'>,
      default: null,
    },
    notifCount: {
      type: Number,
      default: 0,
    },
    time: {
      type: String,
      required: true,
    },
    pictureUrl: {
      type: String,
      default: null,
    },
  },
}
</script>
