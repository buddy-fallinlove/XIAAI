<template>
<div class="box1">
    <el-link class="mr">未读消息</el-link>
    <el-link class="ml mr">已读消息</el-link>
    <el-link class="ml mr">回收站</el-link>
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
                    id: 1,
                    read: false,
                    recycle: false,
                    time: "2018-04-19 20:00:00",
                    content: "[系统通知]该系统将于今晚凌晨2点到5点进行升级维护",
                },
                {
                    id: 2,
                    read: false,
                    recycle: false,
                    time: "2018-04-19 21:00:00",
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
