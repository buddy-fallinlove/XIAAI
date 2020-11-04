<template>
<div>
    <el-col :span="12">
        <div v-for="(item,index) in arr" :key="index">

            <el-menu>

            </el-menu>
        </div>
    </el-col>
</div>
</template>

<script>
export default {
    name: "",
    props: {},
    components: {},
    data() {
        return {
            arr: [{
                    name: "首页",
                    icon: "el-icon-s-home",
                    path: "/",
                },
                {
                    name: "已发布",
                    icon: "el-icon-s-claim",
                    path: "/published",
                },
                {
                    name: "统计",
                    icon: "el-icon-setting",
                    path: "/statistics",
                },
                {
                    name: "发表文章",
                    icon: "el-icon-upload",
                    path: "/release",
                },
                {
                    name: "标签页",
                    icon: "el-icon-s-comment",
                    path: "/label",
                },
                {
                    name: "导出excel",
                    icon: "el-icon-s-order",
                    path: "/paging",
                },
                {
                    name: "图片上传",
                    icon: "el-icon-picture-outline",
                    path: "/pictureupload",
                },
                {
                    name: "退出系统",
                    icon: "el-icon-s-release",
                    path: "/quit",
                },
            ],
        };
    },
    methods: {},
    mounted() {},
    watch: {},
    computed: {},
};
</script>

<style scoped lang='scss'>
</style>
