import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'
import vue3GoogleLogin from 'vue3-google-login'
import App from './App.vue'
import router from './router'

const app = createApp(App)
const pinia = createPinia()

pinia.use(({ store }) => {
    store.router = markRaw(router)
})
app.use(router)
app.use(pinia)
app.use(vue3GoogleLogin, {
    clientId: '950248422954-dlkk1b6o9mkhteckak7g4eopb902c0ck.apps.googleusercontent.com'
})
app.mount('#app')