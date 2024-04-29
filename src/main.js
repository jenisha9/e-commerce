import { createApp } from 'vue';
import './assets/tailwind.css'
import App from './App.vue';
import VueSlickCarousel from 'vue-slick-carousel';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(fas, far, fab);
const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);
app.component(VueSlickCarousel.name, VueSlickCarousel)

createApp(App).mount('#app')
