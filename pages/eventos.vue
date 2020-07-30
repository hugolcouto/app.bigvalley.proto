<template>
    <v-app>
        <app-container>
            <hgroup class="text-center mb-14 mt-5">
                <h1 class="text-h2 mb-3">Eventos</h1>
                <h2 class="text-h5">
                    Confira os próximos eventos da comunidade
                </h2>
            </hgroup>
			<nuxt-child />
        </app-container>
    </v-app>
</template>

<script>
export default {
    name: 'EventosIndex',
	scrollToTop: true,
}
</script>
