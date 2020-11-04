<template>
<div></div>
</template>

<script>
import axios from 'axios'
export default {
    name: "",
    props: {},
    components: {},
    data() {
        return {};
    },
    methods: {
        getdata() {
            axios
                .get("/api/tableData")
                .then((res) => {
                    console.log(res);
                })
                .catch((err) => {
                    console.log(err);
                });
        },
    },
    mounted() {
        this.getdata();
    },
    watch: {},
    computed: {},
};
</script>

<style scoped lang='scss'>
</style>
