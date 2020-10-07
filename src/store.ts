import { inject, provide, readonly, InjectionKey } from 'vue'
import { useToggle } from '@/hooks'

const createStore = () => {
  const [sideBarIsShown, toggleSideBar] = useToggle()


  return {
    toggleSideBar,
    sideBarIsShown: readonly(sideBarIsShown),
  }
}

const storeSymbol: InjectionKey<ReturnType<typeof createStore>> = Symbol('store')

export const useStore = () => inject(storeSymbol)!

export const provideStore = () => provide(storeSymbol, createStore())
