<template>
<div class="df ai_c jc_c box">
    <div class="box1">
        <h2>期待你的下次光临！</h2>
        <br />
        <el-button type="primary" @click="quit">点击退出</el-button>
    </div>
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
    methods: {
        quit() {
            localStorage.removeItem('user')
            this.$router.push('/login')
        }

    },
    mounted() {},
    watch: {},
    computed: {},
};
</script>

<style lang="scss" scoped>
.box {
    width: 80vw;
    height: 80vh;

    .box1 {
        width: 300px;
        height: 300px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
}
</style>
