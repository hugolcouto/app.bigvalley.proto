<template>
    <v-card class="mx-auto" max-width="400" tile href="http://google.com" target="_blank">
        <v-img
            class="white--text align-end"
            height="200px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        >
            <v-card-title>Top 10 Australian beaches</v-card-title>
        </v-img>
		<v-card-subtitle class="pb-0">
			<v-icon>mdi-calendar</v-icon>
			Number 10
		</v-card-subtitle>
        <v-card-actions />
    </v-card>
</template>

<script>
export default {
	name: 'AppCard',
	props: {
		defaultColor: {
			type: String,
			default: '#1482CC'
		}
	}

}
</script>

<style lang="scss" scoped></style>
