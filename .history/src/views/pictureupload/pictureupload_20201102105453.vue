<template>
<div>
    <el-col :span="8">
        <el-card shadow="always">
            <div>
                <h1>支持拖拽</h1>
                <div class="element">Element UI自带上传组件</div>
            </div>
        </el-card>
    </el-col>
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
.el-col {
    width: 100%;
}

.element {
    width: 85%;
    height: 50px;
    background-color: #eeeeee;
    line-height: 50px;
    padding-left: 30px;
    margin-bottom: 30px;
}
</style>
