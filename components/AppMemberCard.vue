<template>
    <v-lazy height="100%">
        <v-card class="mx-auto" flat tile height="100%">
            <v-layout column>
                <v-card-text class="d-flex justify-center">
                    <v-avatar width="200" height="200">
                        <v-img src="http://placekitten.com/g/300/300" />
                    </v-avatar>
                </v-card-text>
                <v-card-actions class="justify-center">
                    <v-btn icon>
                        <v-icon>mdi-twitter</v-icon>
                    </v-btn>
                    <v-btn icon>
                        <v-icon>mdi-github</v-icon>
                    </v-btn>
                </v-card-actions>
                <v-card-title class="justify-center">
                    Hugo Couto
                </v-card-title>
                <v-card-text class="text-center">
                    Desenvolvedor web front-end na empresa Webhub
                </v-card-text>
            </v-layout>
        </v-card>
    </v-lazy>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
