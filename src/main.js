import { createApp, h } from 'vue'
import App from './App.vue'
import router from './router'
import LoadScript from 'vue-plugin-load-script';
import Globe from '/src/components/d3Globe.vue'


const app  = createApp({
    render: ()=>h(App)
});

// app.use(LoadScript);
// app.use(Globe);

app.use(router).mount('#app')