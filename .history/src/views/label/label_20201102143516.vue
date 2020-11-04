<template>
<div class="box1">
    <el-link class="mr">未读消息({{this.no1.length}})</el-link>
    <el-link class="ml mr">已读消息</el-link>
    <el-link class="ml mr">回收站</el-link>
    <div>
        <el-col :span="8">
            <el-card shadow="never">
                <div v-for="(item) in this.list" :key="item.id" style="border-bottom: solid 1px lightgray">
                    <div class="df jc_b ai_c" style="height:80px">
                        <div>{{item.content}}</div>

                    </div>

                </div>
            </el-card>
        </el-col>
    </div>
</div>
</template>

<script>
export default {
    name: "",
    props: {},
    components: {},
    data() {
        return {
            nuxt: [],
            dataname: 1,
            list: [],
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
                    content: "今晚12点整发大红包,先到先得",
                },
                {
                    id: 3,
                    read: false,
                    recycle: false,
                    time: "2018-04-19 20:00:00",
                    content: "[系统通知]该系统将于今晚凌晨2点到5点进行升级维护",
                },
                {
                    id: 4,
                    read: false,
                    recycle: false,
                    time: "2018-04-19 20:00:00",
                    content: "[系统通知]您的优惠券已经过期",
                },
            ],
        };
    },
    methods: {},
    mounted() {
        this.list = this.arr.filter(item => {
            return item.read === false && item.recycle == false;
        });
        this.nuxt = this.list
        console.log(this.list)
    },
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
