<template>
<div>

</div>
</template>

<script>
import axios from 'axios'
export default {
    name: '',
    props: {},
    components: {

    },
    data() {
        return {
            tableData: []
        }
    },
    methods: {

    },
    mounted() {
        axios.get('/api/article/allArticle').then(res => {
            console.log(res.data.data)
            this.tableData = res.data.data
            this.tableData.map(item => {
                item.date = dayjs(item.date).format("YYYY-MM-DD HH:MM:SS")
                item.star = Number(item.star)
            })
        }).catch(err => {
            console.log(err)
        })
    },
    watch: {

    },
    computed: {

    }
}
</script>

<style scoped lang='scss'>

</style>
