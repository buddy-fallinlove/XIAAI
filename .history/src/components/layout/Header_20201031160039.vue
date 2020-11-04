<template>
<div class="Head df jc_c">
    <div class="box df jc_b">
        <div>欢迎{{user.username}}来到小关后台管理系统</div>
        <div></div>
    </div>
</div>
</template>

<script>
export default {
    name: "",
    props: {
        user: {
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

<style scoped lang='scss'>
</style>
