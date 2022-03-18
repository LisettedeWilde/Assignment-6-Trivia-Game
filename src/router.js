import { createRouter, createWebHistory } from "vue-router";
import StartScreen from "./views/StartScreen.vue"
import ResultScreen from "./views/ResultScreen.vue"
import QuestionScreen from "./views/QuestionScreen.vue"

const routes = [
    {
        // base of our path
        path: "/",
        component: StartScreen
    },
    { 
      path: "/results",
      component: ResultScreen
    },
    {
        // question screen path
        path: "/question",
        component: QuestionScreen
    }
];

export default createRouter({
  // allows looking into the browsers api for managing your pages back and forth,
  // so that when someone presses back and forth in the browser, it will also change in your vue application
  history: createWebHistory(),
  routes,
});
