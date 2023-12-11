import {createApp} from 'vue'
// import Example from './js/components/Example.vue'
import './bootstrap'

import routes from './routes.js'
import Example from './components/Example.vue'
import Index from './layouts/Index.vue'
/*
 Node Modules / Plugins
*/
import { library } from '@fortawesome/fontawesome-svg-core' /* import the fontawesome core | npm i @fortawesome/fontawesome-svg-core*/
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome' /* import font awesome icon component | npm i @fortawesome/vue-fontawesome*/
import { fas } from '@fortawesome/free-solid-svg-icons' /* import entire style | npm i @fortawesome/free-solid-svg-icons*/
library.add(fas) /* add icons to the library */
/*Startbootstrap-sb-admin template*/
import "startbootstrap-sb-admin/dist/css/styles.css";
import "startbootstrap-sb-admin/dist/js/scripts.js";
import "startbootstrap-sb-admin/dist/js/datatables-simple-demo.js";

createApp(Index)
.use(routes)
.component('font-awesome-icon',FontAwesomeIcon)
.mount('#app');
