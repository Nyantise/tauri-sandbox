import { createPinia } from "pinia";
import { window } from "@tauri-apps/api"
import { emit, listen } from "@tauri-apps/api/event"
import { StoreDefinition } from "pinia"

export const pinia = createPinia();

type StoreSignal = {
    action: string,
    from: string,
    args: any
}
type optionsToExclude = "BOTH" | "LISTEN" | "EMIT"

export function multiWindowStore(
    store: StoreDefinition,
    opts?: {
        exclude?: {
            window: string,
            what: optionsToExclude
        }[]
        sever?: {
            from: string
            to: string[]
        }[]
    }) {
    const win = window.getCurrentWindow().label;
    const channel = store.$id + "Store";
    opts = opts ? opts : {}
    const exclude = opts.exclude ? opts.exclude : [{window:"", what:""}]
    const sever = opts.sever ? opts.sever : [{from:"", to:[""]}]
    if (exclude.filter(a => a.window == win && a.what == "BOTH").length > 0) return

    store().$onAction(({ name, args }) => {
        if (args[0].isSignal) return
        if (exclude.filter(a => a.window == win && a.what == "EMIT").length > 0) return
        const newargs = { ...args[0], isSignal: true }

        emit(channel, {
            action: name,
            from: win,
            args: newargs
        })
    })

    listen(channel, (event) => {
        if (exclude.filter(a => a.window == win && a.what == "LISTEN").length > 0) return
        const { from, action, args } = event.payload as StoreSignal;
        if (from == win) return
        if (sever.filter(a => a.from == from && a.to.includes(win)).length > 0) return
        store()[action](args)
    })
}