import { defineStore } from 'pinia'

export const useWindowStore = defineStore('window', () => {
    const titlebar_height = ref("")

    function set_titlebar(opts?: { height?: string }) {
        if (opts.height) titlebar_height.value = opts.height;
    }

    return {
        titlebar_height,
        set_titlebar
    }
})



multiWindowStore(useWindowStore)