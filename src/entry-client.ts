import { createSSRApp } from 'vue'
import App from './App.vue'
const app = createSSRApp(App).mount('body')
export default app