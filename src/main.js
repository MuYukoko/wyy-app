import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'vant/lib/index.css';
// 按需引入vant组件
import { Swipe, SwipeItem,Button,Popup,Form,Field, CellGroup} from 'vant';
const app= createApp(App)
app.use(store)
app.use(Popup)
app.use(router)
app.use(Swipe)
app.use(SwipeItem)
app.use(Button)
app.use(Form)
app.use(Field)
app.use(CellGroup)
app.mount('#app')
