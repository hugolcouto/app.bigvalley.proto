<template>
    <v-container fluid>
        <v-row>
            <v-col v-if="getIsLoading">
                <v-overlay opacity="0" z-index="0">
                    <v-progress-circular
                        indeterminate
                        size="64"
                        :color="defaultColor"
                    />
                </v-overlay>
            </v-col>
            <v-col
                xl="4"
                v-for="event in getSymplaEvents"
                :key="event.id"
                v-else
            >
                <v-lazy>
                    <AppCard
                        :eventId="event.id"
                        :name="event.name"
                        :startDate="event.start_date"
                        :image="event.image"
                        :address="event.address"
                    />
                </v-lazy>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'EventHome',
    scrollToTop: true,
    data() {
        return {
            events: [],
            isLoading: true,
        }
    },
    props: {
        defaultColor: {
            type: String,
            default: '#1482CC',
        },
    },
    beforeCreate() {
        this.$store.dispatch('sympla/fetchSymplaEvents')
    },
    computed: {
        ...mapGetters('sympla', ['getSymplaEvents', 'getIsLoading']),
    },
}
</script>

<style lang="scss" scoped></style>
