import { inject, InjectionKey, provide, readonly, ref } from 'vue'
import { useToggle } from '@/hooks'

const createStore = () => {
  const [sideBarIsShown, toggleSideBar] = useToggle(true)
  const selectedChannel = ref<string>()

  return {
    toggleSideBar,
    sideBarIsShown: readonly(sideBarIsShown),
    selectedChannel,
  }
}

const storeSymbol: InjectionKey<ReturnType<typeof createStore>> = Symbol('store')

export const useStore = () => inject(storeSymbol)!

export const provideStore = () => provide(storeSymbol, createStore())
