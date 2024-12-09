import { defineStore } from 'pinia'

export const useTestStore = defineStore('test', () => {
    const current_window = ref(1)

    function change_current_window(args: { to: number }) {
        current_window.value = args.to
    }

    return {
        current_window,
        change_current_window
    }
})

multiWindowStore(useTestStore)