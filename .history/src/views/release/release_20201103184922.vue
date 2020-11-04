<template>
<div>
    <div class="box">
        <el-button type="success" class="ml" @click="see">查看</el-button>
        <el-button type="primary" class="mr" @click="release">发布</el-button>
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
        see() {

        },
        release() {}
    },
    mounted() {

    },
    watch: {

    },
    computed: {

    }
}
</script>

<style lang="scss" scoped>
.el-col {
    width: 100%;
}

.el-input {
    width: 90%;
}

.el-form-item__content {
    width: 500px;
}

.box {
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: flex-end;
    background-color: #59a586;
}
</style>
