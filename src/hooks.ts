import { onMounted, readonly, ref, Ref, UnwrapRef, watch, watchEffect } from 'vue'

export const useToggle = (initial = false) => {
  const bool = ref(initial)
  const toggle = (value?: boolean) => bool.value = value ?? !bool.value

  return [bool, toggle] as const
}

export const useState = <T>(initial: T | null | undefined) => {
  const state = ref(initial)
  const setState = (value: UnwrapRef<T>) => state.value = value

  return [readonly(state), setState] as const
}

export const resizeTextAreaDependingOfContent = (content: Ref<string>, maxRows: number) => {
  const textAreaRef = ref<HTMLTextAreaElement | null>(null)

  onMounted(() => {
    if (!textAreaRef.value) {
      return
    }

    const initialRowsCount = textAreaRef.value.rows

    textAreaRef.value.rows = 1
    const firstLineHeight = textAreaRef.value.offsetHeight

    textAreaRef.value.rows = 2
    const nextLineHeight = textAreaRef.value.offsetHeight - firstLineHeight

    textAreaRef.value.rows = initialRowsCount

    textAreaRef.value.style.maxHeight = `${firstLineHeight + (maxRows - 1) * nextLineHeight}px`
  })

  watch(content, () => {
    if (!textAreaRef.value) {
      return
    }

    textAreaRef.value.style.height = ''
    const newHeight = textAreaRef.value.scrollHeight + textAreaRef.value.offsetHeight - textAreaRef.value.clientHeight

    textAreaRef.value.style.height = `${newHeight}px`
  })

  return textAreaRef
}

export const useLog = (fn: Function) => watchEffect(() => console.log(fn()))
