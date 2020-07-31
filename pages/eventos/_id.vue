<template>
    <v-container fluid>
        <v-row>
            <v-col>
                <v-btn icon nuxt to="/eventos"
                    ><v-icon>mdi-arrow-left</v-icon></v-btn
                >
            </v-col>
        </v-row>
        <v-row>
            <v-col md="8" cols="12" v-if="isLoading">
                <v-skeleton-loader tile type="text" width="100%" height="40" />
                <v-skeleton-loader
                    tile
                    type="text"
                    width="90"
                    height="24"
                    class="mt-5"
                />
                <v-skeleton-loader
                    tile
                    type="text"
                    width="80"
                    height="24"
                    class="mt-3"
                />
                <v-skeleton-loader
                    tile
                    type="text"
                    width="50%"
                    height="24"
                    class="mt-3"
                />
                <v-skeleton-loader
                    tile
                    type="text"
                    width="50%"
                    height="24"
                    class="mt-3"
                />
                <v-spacer class="my-15" />
                <v-skeleton-loader
                    tile
                    type="text"
                    width="100%"
                    height="24"
                    class="d-block"
                />
            </v-col>
            <v-col md="8" cols="12" v-else>
                <h1 class="text-h4">{{ event.name }}</h1>
                <span class="d-flex mt-5"
                    ><v-icon class="mr-2">mdi-calendar</v-icon>
                    {{ parsedDate }}</span
                >
                <span class="d-flex mt-3"
                    ><v-icon class="mr-2">mdi-clock</v-icon>
                    {{ parsedTime }}</span
                >
                <span class="d-flex mt-3"
                    ><v-icon class="mr-2">mdi-map-marker</v-icon>
                    {{ address.address }}
                    {{ address.address_num }}
                    {{ address.address_alt ? `, ${address.address_alt}` : '' }}
                    <br />
                    {{ address.neighborhood }}, {{ address.city }}
                </span>
                <v-spacer class="my-15" />
                <article v-html="event.detail" />
            </v-col>
            <v-col v-if="isLoading" md="4" cols="12">
                <v-layout column>
                    <v-skeleton-loader
                        tile
                        type="button"
                        width="100%"
                        height="36"
                        class="mb-5"
                    />
                    <v-skeleton-loader
                        tile
                        type="image"
                        width="100%"
                        height="300"
                    />
                </v-layout>
            </v-col>
            <v-col md="4" cols="12" v-else>
                <v-layout column>
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn
                                v-bind="attrs"
                                v-on="on"
                                :href="event.url"
                                target="_blank"
                                block
                                tile
                                color="#1482CC"
                                class="mb-5"
                            >
                                Inscrever-se
                                <v-icon right>mdi-open-in-new</v-icon>
                            </v-btn>
                        </template>
                        <span>
                            Fazer a inscrição no evento no site sympla.com.br
                        </span>
                    </v-tooltip>
                    <v-img :src="event.image" alt="" />
                </v-layout>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { api } from '~/plugins/api'
export default {
    name: 'EventSingle',
    data() {
        return {
            test: true,
            isLoading: true,
            event: [],
            address: [],
            parsedDate: '',
            parsedTime: '',
        }
    },
    beforeMount() {
        this.isLoading = true
		api.getSingleEvent(this.$route.params.id)
			.then((response) => {
				this.event = response.data[0]
				this.address = response.data[0].address
				this.parsedDate = this.$date(response.data[0].start_date)
				this.parsedTime = this.$time(response.data[0].start_date)
				this.isLoading = false
			})
			.catch(err => {
				if(err.response.status === 404) {
					return this.$router.push('/404')
				}
			})
	},
}
</script>

<style lang="scss" scoped>
::v-deep .v-skeleton-loader.v-skeleton-loader--is-loading {
    .v-skeleton-loader__text,
    .v-skeleton-loader__button,
    .v-skeleton-loader__image {
        height: 100%;
        width: 100%;
    }
}
</style>
