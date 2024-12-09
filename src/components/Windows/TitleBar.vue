<script lang="ts" setup>
import { window } from '@tauri-apps/api';
const win = window.getCurrentWindow();
const windowConfig = useWindowStore();

</script>

<template>
    <div class="appbar" data-tauri-drag-region>
        <div class="win-controls">
            <button @click="win.minimize">
                <IconsMinimize />
            </button>
            <button @click="win.close">
                <IconsClose />
            </button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.appbar {
    z-index: 9999;
    background-color: white;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    width: 100vw;
    height: v-bind('windowConfig.titlebar_height');
    border-bottom: 2px rgba(128, 128, 128, 0.2) solid;

    .win-controls {
        padding-right: 16px;
        justify-content: end;
        gap: 16px;
        display: flex;
        align-items: center;
        top: 0;
        right: 0;
        height: 100%;
        width: 120px;
        // border: 1px black solid;
        border-radius: 8px;

        button {
            padding: 6px;
            height: 29px;
            border: 0px;
            background-color: transparent;
            transition: background-color 0.3s ease;

            &:hover {
                transition: background-color 0.3s ease;
                background-color: rgba(128, 128, 128, 0.2);
            }
        }
    }
}
</style>
