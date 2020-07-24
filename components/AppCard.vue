<template>
    <v-card class="mx-auto" :max-width="maxWidth" tile>
        <v-img
            class="white--text align-end"
            height="200px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        >
            <v-card-title>Top 10 Australian beaches</v-card-title>
        </v-img>
        <v-card-subtitle class="pb-0">Number 10</v-card-subtitle>
        <v-card-text class="text--primary">
            <div>Whitehaven Beach</div>
            <div>Whitsunday Island, Whitsunday Islands</div>
        </v-card-text>
        <v-card-actions>
            <v-btn :color="defaultColor" tile block nuxt :to="`/eventos/${eventId}`">
                Ver evento
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    name: 'AppCard',
    props: {
        defaultColor: {
            type: String,
            default: '#1482CC',
        },
		maxWidth: {
			type: String,
		},
		eventId: {
			type: Number,
		}
    },
}
</script>

<style lang="scss" scoped></style>
