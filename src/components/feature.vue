<template>
	<div>
		<div class="flex">
			<img
				:src="$props?.icon ? `/feature/${$props?.icon}.png` : '/feature/icon1.png'"
				draggable="false"
				class="icon"
				alt=""
			/>
			<h5 class="zero">{{ $props?.title ? $props?.title : 'Feature name' }}</h5>
		</div>
		<p>
			{{
				$props?.desc
					? $props?.desc
					: 'Lorem ipsum dolor sit amet consectetur adipisicing elit dolore.'
			}}
		</p>
	</div>
</template>

<script>
export default {
	props: { title: String, desc: String, icon: String }
}
</script>

<style lang="scss" scoped>
.icon {
	width: 2em;
	margin-right: 0.55em;
}

.flex {
	display: flex;
	justify-content: flex-start;
	align-items: center;
	margin-bottom: 0.25em;
}
</style>
