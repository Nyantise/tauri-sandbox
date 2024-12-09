<script setup lang="ts">
import { emit } from '@tauri-apps/api/event';
emit("reloadMain")
const store = useTestStore();
const windowConfig = useWindowStore();

</script>

<template>
  <WindowsTitleBar />
  <div class="window" v-on:click="store.change_current_window({ to: 3 })">
    <p>YOU CLICKED ON WINDOW:</p>
    <h1>{{ store.current_window }}</h1>
  </div>
</template>

<style scoped>
.window {
  height: calc(100vh - v-bind('windowConfig.titlebar_height'));
  width: 100vw;
  display: flex;
  gap: 32px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

p {
  line-height: 12px;
  color: black;
  font-size: 32px;
  font-family: "Gamer";
}

h1 {
  line-height: 12px;
  color: black;
  font-size: 128px;
  font-family: "Gamer";
}
</style>
