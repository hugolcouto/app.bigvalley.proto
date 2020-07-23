<template>
    <v-app>
        <app-container>
            <hgroup class="text-center mb-14">
                <h1 class="text-h2 mb-3">Eventos</h1>
                <h2 class="text-h5">
                    Confira os próximos eventos da comunidade
                </h2>
            </hgroup>
            <v-container fluid>
                <v-row>
                    <v-col xl="4" v-for="i in 4" :key="i">
						<AppCard />
                    </v-col>
                </v-row>
            </v-container>
        </app-container>
    </v-app>
</template>

<script>
export default {
    name: 'Eventos',
    scrollToTop: true,
}
</script>

<style lang="scss" scoped></style>
