import { createApp } from "vue";
import App from "./App.vue";

createApp(App)
    .use(router)
    .use(pinia)
    .mount("#app");
