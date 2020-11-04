<template>
<div>
    <el-container>
        <el-header> </el-header>
        <el-container>
            <el-aside width="200px"></el-aside>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
    <el-container>
        <!--头部-->
        <el-header> </el-header>
        <!--侧边栏-->
        <el-container>
            <el-aside width="200px">Aside</el-aside>
            <el-main>
                <!--全部内容-->
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
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
* {
    margin: 0;
    padding: 0;
}

.el-header {
    padding: 0 !important;
}

.el-main {
    background-color: rgb(238, 240, 243);
}
</style>
