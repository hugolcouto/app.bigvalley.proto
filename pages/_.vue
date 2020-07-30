<template>
    <app-container>
        <v-lazy>
            <v-row>
                <v-col md="6" offset-md="3">
                    <img src="~/assets/images/404-amico.svg" />
                    <em class="text-h4 text-center d-block mt-5">
                        A página que você busca não existe
                    </em>
                    <div class="d-flex justify-center mt-5">
                        <v-btn nuxt tile to="/" :color="defaultColor">
                            Voltar para a página inicial
                        </v-btn>
                    </div>
                </v-col>
            </v-row>
        </v-lazy>
    </app-container>
</template>

<script>
export default {
    props: {
        defaultColor: {
            type: String,
            default: '#1482CC',
        },
    },
}
</script>

<style lang="scss" scoped></style>
