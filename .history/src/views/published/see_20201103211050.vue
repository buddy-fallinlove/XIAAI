import router from '../../../server/routes/users';
<template>
<div>
    <div>
        <el-button type="primary" @click="published"></el-button>
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
            this.$router.push('/')
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
