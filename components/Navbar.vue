<template>
	<div>
		<v-app-bar fixed dense class="d-none d-md-block">
			<img src='https://placehold.it/160x40?text=Big Valley' alt='Logo Big Valley'/>
			<v-spacer />
			<v-btn nuxt tile depressed active-class="current" text color="#fff" to="/" exact>Home</v-btn>
			<v-btn nuxt tile depressed active-class="current" text color="#fff" to="/eventos">Eventos</v-btn>
			<v-btn nuxt tile depressed active-class="current" text color="#fff" to="/nosso-time">Nosso time</v-btn>
			<v-btn nuxt tile depressed active-class="current" text color="#fff" to="/startups-parceiras">Startups parceiras</v-btn>
			<v-btn nuxt tile depressed active-class="current" text color="#fff" to="/quem-nos-apoia">Quem nos apoia</v-btn>
		</v-app-bar>
		<v-app-bar fixed dense class="d-block d-md-none">
			<v-app-bar-nav-icon @click.prevent="toggleDrawer" />
			<v-spacer />
			<img src='https://placehold.it/160x40?text=Big Valley' alt='Logo Big Valley'/>
		</v-app-bar>
		<v-navigation-drawer v-model="drawer" fixed>
			<v-list nav dense>
				<v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
					<v-btn block nuxt tile depressed active-class="current" text color="#fff" to="/" exact>Home</v-btn>
					<v-btn block nuxt tile depressed active-class="current" text color="#fff" to="/eventos">Eventos</v-btn>
					<v-btn block nuxt tile depressed active-class="current" text color="#fff" to="/nosso-time">Nosso time</v-btn>
					<v-btn block nuxt tile depressed active-class="current" text color="#fff" to="/startups-parceiras">Startups parceiras</v-btn>
					<v-btn block nuxt tile depressed active-class="current" text color="#fff" to="/quem-nos-apoia">Quem nos apoia</v-btn>
				</v-list-item-group>
			</v-list>
		</v-navigation-drawer>
	</div>
</template>

<script>
export default {
	name: 'Navbar',
	data() {
		return {
			drawer: false,
		}
	},
	methods: {
		toggleDrawer() {
			this.drawer = !this.drawer;
		}
	}
}
</script>

<style lang="scss" scoped>
@import '../assets/variables.scss';
.current {
	background-color: $primary !important;
}
</style>
