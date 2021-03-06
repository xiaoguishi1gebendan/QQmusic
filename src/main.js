// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
import store from './store'
Vue.use(MintUI);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>',
    mounted() {
        this.onlosd()
    },
    methods: {
        onlosd() {
            var oHtml = document.getElementsByTagName('html')[0];
            var oWidth = document.body.clientWidth || document.documentElement.clientWidth;
            oHtml.style.fontSize = oWidth / 750 * 100 + 'px';
        }

    }
})