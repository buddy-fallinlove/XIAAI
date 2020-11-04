<template>
<div>
    <div>
        <el-button type="primary" @click="published">返回</el-button>
    </div>
</div>
</template>

<script>
export default {
    name: '',
    props: {},
    components: {

    },
    data() {
        return {

        }
    },
    methods: {
        published() {
            this.$router.push('/published')
        }
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
