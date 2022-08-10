<template>
	<main>
		<nav v-if="$route.meta.title !== 'notfound'" class="navbar">
			<div class="navcont">
				<router-link to="/" class="flexlogo">
					

					<img
						src="@/assets/img/SusTa.png"
						draggable="false"
						class="bbtext"
					/>

					<!-- <h5>SusTa</h5> -->
				</router-link>

				<div class="links">
					<div v-for="link in navLinks" :key="link.title">
						<router-link
							v-if="!link?.ext"
							:to="link?.link ? link?.link : '/'"
							>{{ link.title }}</router-link
						>
						<a v-else :href="link?.link ? link?.link : '#'" target="_blank">{{
							link.title
						}}</a>
					</div>
				</div>

				<div class="ham" @click="nav = !nav">
					<img src="@/assets/img/ham.svg" alt="" />
				</div>
			</div>
		</nav>

		<transition class="nav" name="nav">
			<div v-if="nav" class="fullnav">
				<div class="navcont">
					<div class="topsec">
						<h1>&nbsp;</h1>

						<div class="ham" @click="nav = !nav">
							<img src="@/assets/img/close.svg" alt="" />
						</div>
					</div>

					<div class="navdata">
						<div class="flexer">
							<div>
								<router-link @click="nav = !nav" to="/">Home</router-link>
							</div>
							<div v-for="(link, index) in navLinks" :key="index">
								<router-link
									v-if="!link.ext"
									@click="nav = !nav"
									:to="link?.link ? link?.link : '/'"
									>{{ link.title }}</router-link
								>
								<a
									v-else
									:href="link?.link ? link?.link : '#'"
									target="_blank"
									>{{ link.title }}</a
								>
							</div>
						</div>
					</div>
				</div>
			</div>
		</transition>

		<main>
			<transition name="fade" mode="out-in">
				<router-view />
			</transition>
		</main>

		<div v-if="$route.meta.title !== 'notfound'" class="cont">
			<Footer :class="`footer footer-${$route.meta.title}`" />
		</div>
	</main>
</template>

<script>
export default {
	data() {
		return {
			nav: false,
			navLinks: [
				{ title: 'Features', ext: false, link: '/features' },
				{
					title: 'Branding',
					ext: true,
					link: 'https://www.behance.net/gallery/150087403/SusTa-Sustainable-Joota'
				},
				{
					title: 'App Prototype',
					ext: true,
					link: 'https://www.figma.com/proto/u8YgCo9ew4o5VskLNbu3SO/Memeathon-2022?page-id=1%3A3&node-id=191%3A1332&viewport=3241%2C1356%2C0.11&scaling=scale-down&starting-point-node-id=133%3A931'
				},
			]
		}
	},
	watch: {
		nav() {
			document.querySelector('body').style.overflow = this.nav
				? 'hidden'
				: 'auto'
		}
	}
}
</script>

<style lang="scss">
.bbtext {
	margin: 0;
	margin-left: 0.8em;
	width: 9em;
	margin-bottom: -0.2em;
}

.logo {
	width: 3em;
	border-radius: 533px;
	margin-right: 0.5em;
	transition: 0.5s;
}

.flexlogo {
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	&:hover {
		.logo {
			box-shadow: 0px 0px 1.4em 3px #fbb03b;
		}
	}
	h5 {
		margin: 0;
		margin-left: 0.3em;
	}
}

.navbar .navcont,
.navcont .topsec {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.navcont .topsec {
	margin-top: 0.85em;
}

.navbar .links {
	display: flex;
}

.navbar .links a {
	margin-left: 2.5em;
	font-size: 1.1em;
	transition: 0.2s;
}

.navbar .links a.router-link-exact-active {
	color: #63A31F;
}

.navbar .links a:hover {
	color: #63A31F;
}

.navbar {
	padding: 2em 0 1em 0;
	margin-bottom: 1.5em;
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}

.nav-enter-active,
.nav-leave-active {
	transition: opacity 0.2s ease;
}

.nav-enter-from,
.nav-leave-to {
	opacity: 0;
}

.ham {
	display: none !important;
}

.ham img {
	width: 1.3em;
}

.footer-notfound {
	display: none;
}

.fullnav {
	width: 100%;
	height: 100vh;
	background-color: #fff;
	position: fixed;
	top: 0;
	z-index: 20;
	overflow: hidden;
}

.navdata {
	.flexer {
		display: flex;
		flex-direction: column;
		position: relative;
		margin-top: 3em;
		div {
			text-align: center;
			margin-bottom: 0.5em;
		}
	}
	.btm {
		position: absolute;
		bottom: 5em;
	}
	a {
		font-size: 2em;
		margin-bottom: 0.65em;
		span {
			width: 100% !important;
		}
	}
	a.router-link-exact-active {
		color: #63A31F;
	}
}

@media (max-width: 750px) {
	.logo {
		width: 2.5em;
	}
	.navbar .links {
		display: none;
	}
	.ham {
		display: block !important;
	}
	.bbtext {
		width: 7em;
		margin-left: 0.3em;
	}
}

.flexbruh {
	display: flex;
	justify-content: flex-start;
	align-items: center;
}

.flexbruh .back {
	margin-right: 1em;
}

.back {
	font-size: 1em !important;
}
</style>
