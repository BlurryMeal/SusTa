import Home from './views/Home.vue'
import Features from './views/Features.vue'
import NotFound from './views/NotFound.vue'

export const routes = [
	{ path: '/', component: Home, meta: { title: 'Home' } },
	{ path: '/features', component: Features },
	{ path: '/404', component: NotFound, meta: { title: 'notfound' } },
	{ path: '/:pathMatch(.*)', component: NotFound, meta: { title: 'notfound' } }
]
