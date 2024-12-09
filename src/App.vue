<script setup lang="ts">
</script>

<template>
  <main>
    <RouterView />
  </main>
</template>

<style>
body,
html {
  background: transparent;
  background-color: transparent;
  overflow: hidden;
  height: 100%;
  scroll-behavior: smooth;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  -webkit-user-drag: none;
  -moz-window-dragging: none;
  user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  font-weight: 400;
}

:root {
  font-family: "Ubuntu Sans";
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;

  color: #0f0f0f;
  background-color: transparent;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}

ul[role='list'],
ol[role='list'] {
  list-style: none;
  list-style-type: none;
}

a {
  text-decoration-skip-ink: auto;
  text-decoration: none;
}

input,
button,
textarea,
select {
  font: inherit;
}
</style>