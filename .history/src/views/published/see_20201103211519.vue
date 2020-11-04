import router from '../../../server/routes/users';
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
            id: ''
        }
    },
    methods: {
        published() {
            this.$router.push('/published')
        }
    },
    mounted() {
        this.id = this.$router.query()
    },
    watch: {

    },
    computed: {

    }
}
</script>

<style scoped lang='scss'>

</style>
