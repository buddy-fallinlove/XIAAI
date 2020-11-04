<template>
<div>

</div>
</template>

<script>
export default {
    name: '',
    props: {
        chat: {
            type: Array
        }
    },
    components: {

    },
    data() {
        this.chartSettings = {
            metrics: ['expected', 'actual'],
            dimension: ['date']
        }
        return {
            chartData: {
                columns: ['date', 'expected', 'actual'],
                rows: []
            }
        }
    },
    methods: {

    },
    mounted() {

    },
    watch: {

    },
    computed: {

    }
}
</script>

<style scoped lang='scss'>

</style>
