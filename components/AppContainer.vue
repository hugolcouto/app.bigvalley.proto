<template>
    <v-layout column>
        <v-container fluid>
            <v-row>
                <v-col lg="8" offset-lg="2">
                    <div class="content">
                        <slot />
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </v-layout>
</template>

<script>
export default {
    name: 'AppContainer',
}
</script>
