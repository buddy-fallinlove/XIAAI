<template>
<div>
    <Mainhead :count="count"></Mainhead>
    <MainChart></MainChart>
</div>
</template>

<script>
import axios from "axios";
import Mainhead from "../components/home/Mainhead .vue";
import MainChart from "../components/home/MainChart .vue";
export default {
    name: "",
    props: {},
    components: {
        Mainhead,
        MainChart,
    },
    data() {
        return {
            count: {},
        };
    },
    methods: {
        gethomeData() {
            axios
                .get("/api/homeData")
                .then((res) => {
                    console.log(res.data.data);
                    this.count = res.data.data;
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        gethomeChat() {

        }

},
    mounted() {
        this.gethomeData();
    },
    watch: {},
    computed: {},
};
</script>

<style scoped lang='scss'>
</style>
