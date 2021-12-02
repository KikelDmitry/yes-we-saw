<template>
	<svg :href="href">
		
	</svg>
</template>

<script>
export default {
	props: {
		link: {
			type: String,
			required: true,
		}
	},
	computed: {
		href() {
			return `/path-to-sprite/icons.svg#${this.link}`
		}
	}
}
</script>

<style lang="scss" scoped>

</style>