import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
import Movie from '../components/Movie'
import About from '../components/About'
import Tab1 from '../components/tabs/Tab1'
import Tab2 from '../components/tabs/Tab2'

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {path: '/', redirect: '/Home/Tab1' },
        {
            path: '/Home', 
            component: Home, 
            children: [
                { path: 'Tab1', component: Tab1 },
                { path: 'Tab2', component: Tab2 },
            ]
        },
        {path: '/Movie/:id', component: Movie, props: true },
        {path: '/About', component: About},
    ]
});

router.beforeEach(function(to, from, next) {
    if(to.path == '/Home/Tab2') {
        const token = localStorage.getItem("token")
        if(token) {
            next()
        } else {
            next('/About')
        }
    } else {
        next();
    }
})

export default router;