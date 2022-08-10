<template>
	<div class="parent">
		<div class="song">
			<div class="flex">
				<h1 class="index noselect mono">
					{{
						$props?.number
							? $props.number < 10
								? `0${$props.number}`
								: $props.number
							: '00'
					}}
				</h1>
				<div class="songinfo">
					<h4 class="title">
						{{ $props?.title ? $props.title : 'Feature name' }}
					</h4>
					<h5 class="artist">
						{{
							$props?.desc
								? $props.desc
								: 'One line description of the feature goes here.'
						}}
					</h5>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: { number: String, title: String, desc: String }
}
</script>

<style scoped lang="scss">
div.parent {
	transition: 0.3s;
}
div.parent:hover {
	cursor: pointer;
}
.song {
	transition: 0.3s;
	padding: 1em;
	border-radius: 0.5em;
	// width: 100%;
	.flex {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		.index {
			font-size: 2em;
			font-variant-numeric: tabular-nums;
			margin: 0;
			margin-left: 0.25em;
			margin-right: 1em;
			transition: 0.3s;
			line-height: 0 !important;
		}
		.title {
			font-size: 1.2em;
			margin: 0;
			min-width: 100%;
		}
		.artist {
			font-size: 1em;
			margin: 0;
			opacity: 0.75;
		}
	}
}

@media (max-width: 750px) {
	.song {
		.flex {
			.index {
				margin-left: 0;
			}
		}
	}
}

.song:not(.loading):hover {
	background-color: #f0f3dd;
	color: #63A31F;
	.flex {
		.index {
			margin-right: 1.35em;
			color: #222;
		}
		.artist {
			opacity: 0.7;
		}
	}
}
.songbro {
	display: flex;
}
.loadinfo {
	width: 100%;
}
</style>
