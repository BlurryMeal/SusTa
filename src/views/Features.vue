<template>
	<div>
		<div class="cont">
			<section id="blocks">
				<div class="row">
					<div class="seven columns">
						<h1>Features</h1>
					</div>

					<div class="u-cf"></div>
				</div>

				<div class="grid">
					<router-link to="/features#features">
						<div class="box">
							<h4>
								{{
									data?.boxes?.features?.title
										? data.boxes.features.title
										: null
								}}
							</h4>
							<p>
								{{
									data?.boxes?.features?.desc ? data.boxes.features.desc : null
								}}
							</p>
						</div>
					</router-link>

					<router-link to="/features#filters">
						<div class="box">
							<h4>
								{{
									data?.boxes?.filters?.title ? data.boxes.filters.title : null
								}}
							</h4>
							<p>
								{{
									data?.boxes?.filters?.desc ? data.boxes.filters.desc : null
								}}
							</p>
						</div>
					</router-link>
				</div>
			</section>

			<section id="features">
				<div class="row">
					<div class="six columns">
						<h2 class="zero">All Features</h2>
						<p>Everything you need</p>

						<div class="featgrid">
							<Slidefeat
								v-for="(item, index) in data.allFeatures"
								:key="item"
								:number="index + 1"
								:title="item.name"
								:desc="item.desc"
							/>
						</div>
					</div>
					<div class="six columns">
						<div class="right zero">
							<img
								src="@/assets/img/mockup1.png"
								style="width:100% ; margin-top:6em; margin-left:10em"
								draggable="false"
								class="respimg smlwi"
								alt=""
							/>
						</div>
					</div>
				</div>
			</section>

			<section id="filters">
				<div class="row">
					<div class="six columns antibro">
						<img src="@/assets/img/mockup2.svg" alt="" draggable="false" style="width:100%; margin-top:5em; margin-left:-4em" />
					</div>
					<div class="six columns">
						<h2 class="zero allfeat">All Collections</h2>
						<p>Shoe Collections to enhance your life.</p>
						<!-- <p>Premium features, free of cost</p> -->

						<div class="featgrid">
							<Slidefeat
								v-for="(item, index) in data.allFilters"
								:key="item"
								:number="index + 1"
								:title="item.name"
								:desc="item.desc"
							/>
						</div>
					</div>
					<div class="six columns anti">
						<img
							src="@/assets/img/feat2.svg"
							draggable="false"
							class="respimg"
							alt=""
						/>
					</div>
				</div>
			</section>
		</div>
	</div>
</template>

<script>
import Data from '@/assets/data/data'

export default {
	data() {
		return {
			data: Data
		}
	}
}
</script>

<style lang="scss" scoped>
.right {
	text-align: right;
}

.smlwi {
	width: 85%;
}

img {
	max-width: 100% !important;
}

#blocks {
	margin-bottom: 2em;
}

#filters {
	padding-top: 3em;
	margin-bottom: 4em;
}

#features {
	padding-top: 3em;
	margin-bottom: 2em;
}

.anti {
	display: none;
}

.box {
	h4 {
		margin-bottom: 0.25em;
	}
	background-color: #eaeecb;
	padding: 2em;
	border-radius: 1em;
	transition: 0.3s;
	p {
		margin: 0;
	}
}

.box:hover {
	transform: translateY(-2px);
	// border-radius: 1.5em;
	// background: #ffffff;
	box-shadow: 16px 16px 30px #d6d6d6, -16px -16px 30px #ffffff;
}

.grid {
	display: grid;
	grid-gap: 3em;
	grid-template-columns: repeat(2, 1fr);
}

.featgrid {
	display: grid;
	grid-gap: 0em;
	grid-template-columns: repeat(2, 1fr);
}

.allfeat {
	margin-top: 0.45em;
}

@media (max-width: 750px) {
	.allfeat {
		margin-top: 0;
	}
	.featgrid {
		display: grid;
		grid-gap: 0em;
		grid-template-columns: repeat(1, 1fr);
	}
	#blocks {
		h1 {
			margin-bottom: 0.75em;
		}
	}
	.smlwi {
		width: 100%;
	}
	.grid {
		display: grid;
		grid-gap: 2em;
		grid-template-columns: repeat(1, 1fr);
	}
	#blocks {
		margin-bottom: 3.5em;
	}
	#filters {
		margin-bottom: 4em;
	}
	.anti {
		display: block;
	}
	.antibro {
		display: none;
	}
	.respimg {
		margin-top: 2em;
	}
}
</style>
