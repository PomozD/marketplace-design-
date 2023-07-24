import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ScrollAnimationLoadContent from './assets/animation/animationScrollLoadContent'
import ScrollAnimationMoveText from './assets/animation/animationScrollMoveText'
import ScrollHandwrittingText from './assets/animation/animationScrollHandwrittingText'
import './assets/styles/_variables.scss'

const app = createApp(App)

app.directive('scrollanimationloadcontent', ScrollAnimationLoadContent);
app.directive('scrollanimationmovetext', ScrollAnimationMoveText);
app.directive('scrollanimationhandwrittingtext', ScrollHandwrittingText);
app.use(router)

app.mount('#app')
