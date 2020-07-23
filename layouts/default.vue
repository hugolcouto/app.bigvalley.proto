<template>
	<v-app>
		<app-navbar />
		<v-app class="pt-13">
			<nuxt />
		</v-app>
	</v-app>
</template>

<script>
	import AppNavbar from '~/components/Navbar'
	export default {
		components: {
			AppNavbar
		}
	}
</script>

<style lang="scss" scoped>

</style>