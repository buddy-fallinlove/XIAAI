<template>
<div class="df ai_c mt mb wt">
    <div class="order">
        <el-col :span="8">

        </el-col>
    </div>
</div>
</template>

<script>
export default {
    name: "",
    props: {
        order: {
            type: Array,
        },
        progress: {
            type: Array,
        },
        //数据数组
        todoList: {
            type: Array,
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
.order {
    flex: 2;
}

.box {
    flex: 1;
}

.el-col {
    width: 100%;
}

.el-progress {
    height: 30px;
}

.el-card {
    height: 586px;
}

.box1 {
    margin: 50px 0;
}

.box2 {
    height: 50px;
}

.close span {
    opacity: 0;
    color: red;
}

.close:hover span {
    opacity: 1;
}

.box3 {
    height: 470px;
}
</style>
