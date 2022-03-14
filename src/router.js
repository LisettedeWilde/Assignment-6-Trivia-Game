import { createRouter, createWebHistory } from "vue-router";
import StartScreen from "./views/StartScreen.vue"

const routes = [
    {
        // base of our path
        path: "/",
        component: StartScreen
    }
];

export default createRouter({
  // allows looking into the browsers api for managing your pages back and forth,
  // so that when someone presses back and forth in the browser, it will also change in your vue application
  history: createWebHistory(),
  routes,
});
