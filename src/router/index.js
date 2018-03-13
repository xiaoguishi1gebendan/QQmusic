import Vue from 'vue'
import Router from 'vue-router'
import Recommend from '../components/recomend/recomend.vue'
import Singer from '../components/singer/singer.vue'
import Rank from '../components/rank/rank.vue'
import Search from '../components/search/search.vue'
Vue.use(Router)

export default new Router({
    routes: [{
            path: "/",
            redirect: '/Recommend'
        },
        {
            path: '/singer',
            component: Singer
        },
        {
            path: '/recommend',
            component: Recommend
        },

        {
            path: '/rank',
            component: Rank
        },
        {
            path: '/search',
            component: Search
        }
    ]
})