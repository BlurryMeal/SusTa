import App from './App.vue'
import { routes } from './routes.js'
import { ViteSSG } from 'vite-ssg'
import './assets/css/normal.css'
import './assets/css/skeleton.css'
import './assets/css/global.css'

export const createApp = ViteSSG(
	App,
	{
		routes,
		scrollBehavior(to, from, savedPosition) {
			if (to.hash) {
				return {
					el: to.hash,
					behavior: 'smooth'
				}
			} else {
				return { top: 0, behavior: 'smooth' }
			}
		}
	},
	({ app, router, isClient }) => {}
)
