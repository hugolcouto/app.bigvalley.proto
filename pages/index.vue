<template>
    <v-app>
        <v-parallax dark src="http://loremflickr.com/g/1920/680/programming">
            <v-container>
                <v-row align="center" justify="center">
                    <v-col class="text-center">
                        <h1 class="text-h2 mb-3">
                            Bem-vindos à Comunidade Big Valley
                        </h1>
                        <h2 class="text-h5 mb-5">Lorem Ipsum Dolor Sit Amet</h2>
                        <v-btn rounded color="#1482CC">Saiba mais</v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </v-parallax>
        <app-container class="pt-12">
            <article>
                <p>
                    Somos a Comunidade Aberta de Empreendedorismo e Inovação.
                    Ações Inovadoras é o que nos move, espírito empreendor é o
                    que nos define.
                </p>
                <p>
                    Acreditamos na força das idéias e na união entre as pessoas
                    para mudar o mundo.
                </p>
                <p>
                    Nascemos para pensar no todo e desenvolver potencialidades.
                    Onde ideias virem negócios e projetos gerem soluções.
                </p>
                <p>
                    Se você comunga de nossas ideias e quer construir um mundo
                    melhor, venha somar com a gente. Acreditamos num futruro
                    brilhante e vamos trabalhar pra isso.
                </p>
                <br />
                <p>
                    Somos uma Comunidade de Inovação, com objetivo de fomentar
                    nosso ecossistema de negócios em Angra dos Reis e toda Costa
                    Verde e Bahia da Ilha Grande. De Paraty a Mangaratiba.
                </p>
                <br />
                <p>
                    Nossa Missão é Desenvolver pessoas capazes de gerar impacto
                    na comunidade, através de ações imovaodras e
                    empreendedorasl.
                </p>
            </article>
        </app-container>
    </v-app>
</template>

<script>
import AppContainer from '~/components/AppContainer'
export default {
    name: 'Home',
    scrollToTop: true,
}
</script>

<style lang="scss" scoped></style>
