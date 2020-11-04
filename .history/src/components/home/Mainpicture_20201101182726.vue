<template>
<div class="df ai_c mt mb">
    <div class="flx">
        <el-col :span="8">
            <el-card shadow="always">
                <ve-radar :data="chartData2" :settings="chartSettings2"></ve-radar>
            </el-card>
        </el-col>
    </div>
</div>
</template>

<script>
export default {
    name: "",
    props: {
        chat: {
            type: Array,
        },
        ring: {
            type: Array,
        },
        radar: {
            type: Array,
        },
    },
    components: {},
    data() {
        this.chartSettings = {
            metrics: ["expected", "actual"],
            dimension: ["date"]
        };
        return {
            chartData: {
                columns: ["date", "expected", "actual"],
                rows: []
            },
        };
    },
    methods: {},
    mounted() {
        this.chartData.rows = this.chat;
    },
    watch: {},
    computed: {},
};
</script>

<style scoped lang='scss'>
</style>
