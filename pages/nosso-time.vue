<template>
    <v-app>
        <app-container>
            <hgroup class="text-center mb-14 mt-5">
                <h1 class="text-h2 mb-3">Nosso Time</h1>
                <h2 class="text-h5">
                    Veja quem faz a diferença
                </h2>
            </hgroup>
            <v-container>
                <v-row>
					<v-col v-for="i in 10" :key="i" md="4" >
						<app-member-card />
					</v-col>
                </v-row>
            </v-container>
        </app-container>
    </v-app>
</template>

<script>
export default {
    name: 'OutTeam',
    scrollToTop: true,
}
</script>
