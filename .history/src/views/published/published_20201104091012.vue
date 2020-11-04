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
                        <el-button size="small" type="primary" @click="update(scope.row)">修改</el-button>
                        <el-button type="danger" size="small" @click="del(scope.$index, scope.row)">删除</el-button>
                        <el-button type="success" size="small" @click="see(scope.row)">查看</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-card>
    </el-col>
</div>
</template>

<script>
import axios from "axios";
import dayjs from "dayjs";
export default {
    name: "",
    props: {},
    components: {},
    data() {
        return {
            tableData: [],
            id: "",
        };
    },
    methods: {
        update(row) {
            this.$router.push({
                path: "/update",
                query: {
                    id: row._id
                }

            })
        },
        see(row) {
            this.$router.push({
                path: "/see",
                query: {
                    id: row._id,
                },
            });
        },
        del(index, row) {
            axios
                .post("/api/article/delete", {
                    id: row._id,
                })
                .then((res) => {
                    this.tableData.splice(index, 1);
                    console.log(res.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        },
    },
    mounted() {
        axios
            .get("/api/article/allArticle")
            .then((res) => {
                if (res.data.code === 200) {
                    console.log(res.data.data);
                    this.tableData = res.data.data;
                    this.tableData.map((item) => {
                        item.date = dayjs(item.date).format("YYYY年MM月DD日  HH时mm分ss秒");
                        item.star = Number(item.star);
                    });
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
