import { inject, InjectionKey, provide, readonly, ref } from 'vue'
import { useState, useToggle } from '@/hooks'

const createStore = () => {
  const [sideBarIsShown, toggleSideBar] = useToggle(true)
  const [currentChannel, selectChannel] = useState<string>(null)

  return {
    toggleSideBar,
    sideBarIsShown: readonly(sideBarIsShown),
    currentChannel,
    selectChannel,
  }
}

const storeSymbol: InjectionKey<ReturnType<typeof createStore>> = Symbol('store')

export const useStore = () => inject(storeSymbol)!

export const provideStore = () => provide(storeSymbol, createStore())
