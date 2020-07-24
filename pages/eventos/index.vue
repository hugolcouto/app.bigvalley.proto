<template>
	<v-container fluid>
		<v-row>
			<v-col xl="4" v-for="i in 4" :key="i">
				<AppCard title="" :event-id="i" />
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
export default {
    name: 'EventHome',
    scrollToTop: true,
    created() {
        this.$api.getEvents().then((response) => console.table(response.data))
    },
}
</script>

<style lang="scss" scoped></style>
