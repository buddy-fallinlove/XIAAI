<template>
<div class="box df jc_c ai_c">
    <div class="df box1">
        <el-col :span="8">
            <el-card shadow=""></el-card>
        </el-col>
    </div>
</div>
</template>

<script>
import countTo from "vue-count-to";
export default {
    name: "",
    props: {
        count: {
            type: Object,
        },
    },
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
.box {
    padding: 30px 15px;

    .box1 {
        width: 100%;
    }

    .el-col {
        margin: 0 20px;
    }
}

span {
    width: 70px;
    height: 70px;
    font-size: 70px;
}

.count>span {
    font-size: 30px;
}
</style>
