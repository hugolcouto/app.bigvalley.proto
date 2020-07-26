<template>
    <v-card class="mx-auto" :max-width="maxWidth" tile>
        <v-img
            class="white--text align-end"
            height="200px"
            :src="image"
        >
            <v-card-title>{{ name }}</v-card-title>
        </v-img>
        <v-card-subtitle class="pb-0">{{ startDate }}</v-card-subtitle>
        <v-card-text class="text--primary">
            <div>{{ address.address }} {{ address.address_num }} {{ address.address_alt ? `, ${address.address_alt}` : '' }}</div>
            <div>{{ address.neighborhood }}, {{ address.city }}</div>
			<div>CEP: {{ address.zip_code }}</div>
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
			required: true
		},
		name: {
			type: String,
			required: true
		},
		startDate: {
			type: String,
			required: true
		},
		image: {
			type: String,
			required: true
		},
		address: {
			type: Object,
			required: true
		}

    },
}
</script>

<style lang="scss" scoped></style>
