<template>
	<div>
		<div class="flexer">
			<ic-round-check class="tick" />
			<h6 class="zero">{{ $props?.title ? $props.title : null }}</h6>
		</div>
	</div>
</template>

<script>
export default {
	props: { title: String }
}
</script>

<style lang="scss" scoped>
li {
	color: green;
}

.flexer {
	display: flex;
	justify-content: flex-start;
	align-items: center;
	margin-bottom: 0.5em;
	h6 {
		font-size: 1em;
	}
}

.tick {
	// width: 1.25em;
	margin-right: 0.4em;
	font-size: 1.1em;
	color: #63a31f;
}
</style>
