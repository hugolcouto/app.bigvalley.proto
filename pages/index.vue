<template>
    <v-app>
        <v-parallax
            dark
            src="https://imagens.ebc.com.br/QyZHtMFDYEAk1V58RH-aG_CQb30=/1170x700/smart/https://agenciabrasil.ebc.com.br/sites/default/files/atoms/image/angra_dos_reis_3.jpg?itok=mZjwoTaT"
        >
            <v-container>
                <v-row align="center" justify="center">
                    <v-col class="text-center">
                        <h1 class="text-h2 mb-3">
                            Bem-vindos à Comunidade Big Valley
                        </h1>
                        <h2 class="text-h5 mb-5">
                            A comunidade de tecnologia e inovação da Baía da
                            Ilha Grande
                        </h2>
                    </v-col>
                </v-row>
            </v-container>
        </v-parallax>
        <app-container class="pt-12">
            <v-container fluid>
                <v-row>
                    <v-col>
                        <h1 class="text-h4 text-center mb-8">O que é a Big Valley</h1>
                        <article md="6">
                            <p>
                                Somos a Comunidade Aberta de Empreendedorismo e
                                Inovação. Ações Inovadoras é o que nos move,
                                espírito empreendor é o que nos define.
                            </p>
                            <p>
                                Acreditamos na força das idéias e na união entre
                                as pessoas para mudar o mundo.
                            </p>
                            <p>
                                Nascemos para pensar no todo e desenvolver
                                potencialidades. Onde ideias virem negócios e
                                projetos gerem soluções.
                            </p>
                            <p>
                                Se você comunga de nossas ideias e quer
                                construir um mundo melhor, venha somar com a
                                gente. Acreditamos num futruro brilhante e vamos
                                trabalhar pra isso.
                            </p>
                            <br />
                            <p>
                                Somos uma Comunidade de Inovação, com objetivo
                                de fomentar nosso ecossistema de negócios em
                                Angra dos Reis e toda Costa Verde e Bahia da
                                Ilha Grande. De Paraty a Mangaratiba.
                            </p>
                            <br />
                            <p>
                                Nossa Missão é Desenvolver pessoas capazes de
                                gerar impacto na comunidade, através de ações
                                imovaodras e empreendedorasl.
                            </p>
                        </article>
                    </v-col>
                    <v-col md="6">
						<div class="gravure d-flex align-center">
							<img
								src="~/assets/images/Collaboration-amico.svg"
								alt=""
								width="100%"
							/>
						</div>
                    </v-col>
                </v-row>
            </v-container>
            <v-divider class="my-14" />
            <v-container fluid>
                <v-row>
                    <v-col md="6">
						<div class="gravure d-flex align-center">
							<img
								src="~/assets/images/Calendar-pana.svg"
								alt=""
								width="100%"
							/>
						</div>
                    </v-col>
                    <v-col md="6">
                        <h1 class="text-h4 text-center mb-8">Eventos</h1>
                        <article>
                            <p>
                                Somos a Comunidade Aberta de Empreendedorismo e
                                Inovação. Ações Inovadoras é o que nos move,
                                espírito empreendor é o que nos define.
                            </p>
							<div class="my-6">
								<h5 class="text-h5 mb-3">Próximo evento</h5>
								<AppCard />
							</div>
							<div class="d-flex justify-center">
                            	<v-btn tile nuxt to="/eventos" class="center" :color="defaultColor">Ver todos os eventos</v-btn>
							</div>
                        </article>
                    </v-col>
                </v-row>
            </v-container>
        </app-container>
    </v-app>
</template>

<script>
import AppContainer from '~/components/AppContainer'
export default {
    name: 'Home',
	scrollToTop: true,
	props: {
		defaultColor: {
			type: String,
			default: '#1482CC'
		}
	}
}
</script>

<style lang="scss" scoped>
.gravure {
	height: 100%;
}
</style>
