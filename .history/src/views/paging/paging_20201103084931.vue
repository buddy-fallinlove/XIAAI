<template>
<div class="df fd_c">
    <el-input placeholder="请输入商品名称" clearable></el-input>
</div>
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
                    console.log(res.data.data);
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

<style lang="scss" scoped>
.el-col {
    width: 100%;
}

.el-input {
    width: 300px;
}
</style>
