<template>
    <v-app-bar fixed dense>
		<img src='https://placehold.it/160x40?text=Big Valley' alt='Logo Big Valley'/>
        <v-spacer />
        <v-btn nuxt tile depressed to="/" exact>Home</v-btn>
        <v-btn nuxt tile depressed to="/eventos">Eventos</v-btn>
        <v-btn nuxt tile depressed to="/nosso-time">Nosso time</v-btn>
        <v-btn nuxt tile depressed to="/startups-parceiras">Startups parceiras</v-btn>
        <v-btn nuxt tile depressed to="/quem-nos-apoia">Quem nos apoia</v-btn>
    </v-app-bar>
</template>

<script>
export default {
	name: 'Navbar'
}
</script>

<style lang="scss" scoped></style>
