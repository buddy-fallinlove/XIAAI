<template>
<div>
    <el-col :span="8">
        <el-card shadow="never">
            <el-table :data="tableData" stripe border="" style="width: 100%">
                <el-table-column type="index" label="#"></el-table-column>
                <el-table-column prop="title" label="标题"></el-table-column>
                <el-table-column prop="abstract" label="作者"></el-table-column>
                <el-table-column prop="category" label="类目"></el-table-column>
                <el-table-column prop="source" label="来源"></el-table-column>
                <el-table-column prop="star" label="重要性">
                    <template slot-scope="scope">
                        <el-rate v-model="scope.row.star" disabled></el-rate>
                    </template>
                </el-table-column>
                <el-table-column prop="date" label="发布时间"></el-table-column>
                <el-table-column fixed="right" label="操作" width="300">
                    <template slot-scope="scope">
                        <el-button size="small" type="primary">修改</el-button>
                        <el-button type="danger" size="small">删除</el-button>
                        <el-button type="success" size="small">查看</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-card>
    </el-col>
</div>
</template>

<script>
import axios from "axios";
import dayjs from "axios";
export default {
    name: "",
    props: {},
    components: {},
    data() {
        return {
            tableData: [],
        };
    },
    methods: {},
    mounted() {
        axios
            .get("/api/article/allArticle")
            .then((res) => {
                if (res.data.code === 200) {
                    console.log(res.data.data);
                    this.tableData = res.data.data;
                    // this.tableData.map(item => {
                    //     item.date = dayjs(item.date).format("YYYY-MM-DD HH:MM:SS")
                    //     item.star = Number(item.star)
                    // })
                }
            })
            .catch((err) => {
                console.log(err);
            });
    },
    watch: {},
    computed: {},
};
</script>

<style lang="scss" scoped>
.el-col {
    width: 100%;
}
</style>
