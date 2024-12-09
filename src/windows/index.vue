<script lang="ts" setup>
import { listen } from '@tauri-apps/api/event';
import { useWindowStore } from '../stores/window.store';
const windowConfig = useWindowStore();

listen("reloadMain", ()=> location.reload())
windowConfig.set_titlebar({height:"42px"})

</script>

<template>
    
</template>