<template>
	<main>
		<div class="container-sml">
			<h1 class="title">
				<router-link to="/" class="forofour">404</router-link>
			</h1>
			<p class="top">
				It seems like you hit a route that doesn't exist. You may
				<router-link to="/">go back home</router-link>
			</p>
			<p style="margin-top: 1.2em">
				<router-link to="/">&larr; Back</router-link>
			</p>
		</div>
	</main>
</template>

<style scoped>
.forofour {
	border: none;
	opacity: 1;
	color: rgb(96, 182, 105);
	transition: 0.2s;
}

.forofour:hover {
	opacity: 0.75;
}

.container-sml {
	margin: 0 auto;
	padding: 0 2em;
	max-width: 25em;
}

p.top {
	margin: 0.5em 0;
}
p.btm {
	margin-bottom: 1em;
}
.yo {
	margin-top: 0;
}
p {
	opacity: 1;
}

.yo a {
	padding: 0.35em;
	font-size: 1.1em;
}

.title {
	margin-top: 7em;
}

a {
	border-bottom: dashed 1px #222;
}
</style>
