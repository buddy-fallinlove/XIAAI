<template>
<div class="box1">
    <el-link class="mr">未读消息</el-link>
    <el-link class="ml mr ">已读消息</el-link>
    <el-link class=" ml mr">回收站</el-link>

</div>
</template>

<script>
export default {
    name: "",
    props: {},
    components: {},
    data() {
        return {};
    },
    methods: {},
    mounted() {},
    watch: {},
    computed: {},
};
</script>

<style lang="scss" scoped>
.box1 {
    width: 100%;
    height: 30px;
    line-height: 30px;
    border-bottom: solid 1px lightgray;
}

.el-col {
    width: 100%;
}

.box2 {
    width: 100%;
    height: 80px;
    border-bottom: lightgray 1px solid;
}
</style>
