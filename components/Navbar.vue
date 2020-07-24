<template>
    <v-app-bar fixed dense>
		<img src='https://placehold.it/160x40?text=Big Valley' alt='Logo Big Valley'/>
        <v-spacer />
        <v-btn nuxt tile depressed active-class="current" text color="#fff" to="/" exact>Home</v-btn>
        <v-btn nuxt tile depressed active-class="current" text color="#fff" to="/eventos">Eventos</v-btn>
        <v-btn nuxt tile depressed active-class="current" text color="#fff" to="/nosso-time">Nosso time</v-btn>
        <v-btn nuxt tile depressed active-class="current" text color="#fff" to="/startups-parceiras">Startups parceiras</v-btn>
        <v-btn nuxt tile depressed active-class="current" text color="#fff" to="/quem-nos-apoia">Quem nos apoia</v-btn>
    </v-app-bar>
</template>

<script>
export default {
	name: 'Navbar'
}
</script>

<style lang="scss" scoped>
@import '../assets/variables.scss';
.current {
	background-color: $primary !important;
}
</style>
