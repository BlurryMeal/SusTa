<template>
	<div>
		<br class="antibro" />
		<section>
			<div class="cont">
				<div class="row">
					<div class="four columns">
						<h2 class="zero tophead">The Only Shoes You'll Need.</h2>
						<p>
							SusTa provides a series of products which are made using sustainable products. Keeping in mind the design, comfort and durability.
						</p>

						<div style="margin-bottom: 2em">
							<Tick title="Sustainable" />
							<Tick title="Comfortable" />
							<Tick title="Simplistic Design" />
							<Tick title="Customisations Available" />
						</div>

						<div
							style="
								display: flex;
								justify-content: flex-start;
								align-items: center;
							"
						>
							<a
								style="margin-right: 1em"
								href="https://www.figma.com/proto/u8YgCo9ew4o5VskLNbu3SO/Memeathon-2022?page-id=1%3A3&node-id=191%3A1332&viewport=3241%2C1356%2C0.11&scaling=scale-down&starting-point-node-id=133%3A931"
								target="_blank"
							>
								<button>View Prototype</button>
							</a>

							<a href="https://www.behance.net/gallery/150087403/SusTa-Sustainable-Joota" target="_blank">
								<button class="black">Branding</button>
							</a>
						</div>
					</div>

					<div class="eight columns">
						<div style="text-align: right">
							<img
								src="@/assets/img/memer.svg"
								id="firstill"
								draggable="false"
								alt=""
							/>
						</div>
					</div>
				</div>
			</div>
		</section>

		<br /><br />
		<br /><br />

		<section>
			<div class="cont">
				<div class="row">
					<div class="six columns antibro">
						<img
							src="@/assets/img/mockup1.svg"
							draggable="false"
							style="width: 100%; margin-top: -1.8em; margin-left:-15em"
							alt=""
						/>
					</div>
					<div class="six columns">
						<h3 class="zero cstfil">Shoe Collections</h3>
						<p>The only shoes you'll need.</p>

						<div class="grid">
							<!-- v-for="index in 4"
								:key="index" -->
							<Feature
								title="Sports Collection"
								desc="A wide variety of options for the customers to pick from according to their comfort."
								icon="icon1"
							/>

							<Feature
								title="Formal Collection"
								desc="Formal shoes for office and meetings made with sustainable materials."
								icon="icon2"
							/>

							<Feature
								title="Flip Flops"
								desc="Its time to chill and relax with our flip flops collection."
								icon="icon4"
							/>
						</div>

						<router-link to="/features">
							<button>View Features</button>
						</router-link>
					</div>

					<div class="six columns anti">
						<img
							src="@/assets/img/mockup1.svg"
							style="width: 100%; margin-top: 4em; margin-bottom: -2em"
							alt=""
							draggable="false"
						/>
					</div>
				</div>
			</div>
		</section>

		<br /><br />
		<br />

		

		<br /><br />

		<section class="fullthing">
		
			<div class="cont" style="position: relative; z-index: 100">
				<h2 class="center">It's time to let your feet decide!</h2>
				<p class="center">
					Check out our product prototype.
				</p>

				<div class="flex-center">
					<a
						href="https://www.figma.com/proto/u8YgCo9ew4o5VskLNbu3SO/Memeathon-2022?page-id=1%3A3&node-id=191%3A1332&viewport=3241%2C1356%2C0.11&scaling=scale-down&starting-point-node-id=133%3A931"
						target="_blank"
					>
						<button>View Prototype</button>
					</a>
				</div>
			</div>
		</section>
		<!-- 
		<br />
		<br />
		<br /> -->
	</div>
</template>

<script>
import data from '@/assets/data/home'

export default {
	data() {
		return {
			data: data
		}
	}
}
</script>

<style scoped lang="scss">
.tophead {
	margin-top: 0.75em;
}

.purpleimg {
	width: 17%;
	bottom: 0;
	left: 4em;
	position: absolute;
	z-index: -100;
}
.fullthing {
	background-color: #eaeecb;
	padding: 5em 0;
	position: relative;
	h2 {
		margin-bottom: 0.25em;
	}
	p {
		margin-bottom: 1.5em;
	}
	margin-bottom: 1em;
}

.grid {
	display: grid;
	grid-gap: 0.75em;
	grid-template-columns: repeat(2, 1fr);
}

.yo,
.name {
	margin: 0;
}

h1 {
	font-size: 5em;
	margin: 0;
}

.subtitle {
	margin: 0;
	font-size: 2em;
	font-weight: 500;
	opacity: 0.65;
	margin-top: -0.25em;
}

.subtitle a {
	border: none;
}

.main {
	margin-top: 12em;
}

/* img {
	width: 10em;
	border-radius: 0.5em;
	margin-bottom: 1em;
} */

img {
	width: 100%;
}

#firstill {
	width: 80%;
	animation-name: floating;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    margin-left: 30px;
    margin-top: 5px;
}

@keyframes floating {
    0% { transform: translate(0,  0px); }
    50%  { transform: translate(0, 15px); }
    100%   { transform: translate(0, -0px); }   
}

.vh {
	margin: 0 auto;
	max-width: 50em;
	margin-top: 20vh;
}

.sml {
	font-size: 0.5em;
}

.nav a {
	border: none;
	margin: 0 1em;
	font-size: 1em;
	letter-spacing: 0.05em;
	text-transform: uppercase;
}

.nav {
	margin-top: 1em;
}

.yo a {
	transition: 0.3s;
}

.yo a:hover {
	color: #69e;
}

.topimg {
	margin-top: 0.5em;
}

.anti {
	display: none;
}

#thirdill {
	width: 90%;
	margin-top: 1.35em;
}

.cstfil {
	margin-top: 1em;
}

@media (max-width: 750px) {
	.topimg {
		margin-top: 0;
	}
	.cstfil {
		margin-top: 0;
	}
	.purpleimg {
		display: none;
	}
	.anti {
		display: block;
	}
	.antibro {
		display: none;
	}
	#firstill {
		width: 100%;
		margin-top: 4em;
	}
	#thirdill {
		width: 100%;
		margin-top: 2em;
	}
	.fullthing {
		margin-bottom: 1em;
	}
	.tophead {
		margin-top: 0.5em;
	}
}
</style>
