<template>
<div class="df fd_c">
    <el-input placeholder="请输入商品名称" clearable v-model="input" @input="search"></el-input>
    <br />
    <br />
    <div>
        <el-col :span="8">
            <el-card shadow="never">
                <el-table :data="tableData" stripe style="width: 100%">
                    <el-table-column prop="NAME" label="名称" width="300"></el-table-column>
                    <el-table-column prop="GOODS_SERIAL_NUMBER" label="商品编号" width="300"></el-table-column>
                    <el-table-column prop="ORI_PRICE" label="原价" width="300"></el-table-column>
                    <el-table-column prop="PRESENT_PRICE" label="现价" width="300"></el-table-column>
                    <el-table-column fixed="right" label="操作" width="180">
                        <template slot-scope="scope">
                            <el-button @click="modify(scope)" size="small" type="primary">修改</el-button>

                            <el-button type="danger" size="small" @click="del(scope)">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </el-card>
        </el-col>
    </div>
    <br />
    <br />
    <div>
        <div class="block">
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[10, 20, 50, 80]" :page-size="num" layout="total, sizes, prev, pager, next, jumper" :total="this.tableData1.length">
            </el-pagination>
        </div>
    </div>
</div>
</template>

<script>
import axios from "axios";
import router from "../../router";
export default {
    name: "",
    props: {},
    components: {},
    data() {
        return {
            tableData: [],
            input: "",
            currentPage: 1,
            num: 10,
            tableData1: [],
            centerDialogVisible: false
        };
    },
    methods: {
        handleSizeChange(val) {
            this.num = val;
            this.currentPage = 1;
            this.tableData = this.tableData1.slice(0, val);
            // console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            this.currentPage = val;
            this.tableData = this.tableData1.slice(
                (this.currentPage - 1) * this.num,
                this.currentPage * this.num - 1
            );
            // console.log(`当前 ${val} 页`);
        },
        getdata() {
            axios
                .get("/api/tableData")
                .then((res) => {
                    // console.log(res.data.data);
                    this.tableData1 = res.data.data;
                    this.tableData = this.tableData1.slice(0, 10);
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        // 删除
        del(scope) {
            console.log(scope);
            this.tableData1.map((item1, index) => {
                if (scope.row.NAME === item1.NAME)
                    this.tableData1.splice(index, 1);
            })
            this.tableData = this.tableData1.slice(
                (this.currentPage - 1) * this.num,
                this.currentPage * this.num - 1
            );
        },
        // 修改数据
        modify(scope) {
            console.log(scope)
            centerDialogVisible = true
        },
        // inbut事件
        search() {
            if (this.input === "") {
                this.tableData = this.tableData1.slice(
                    (this.currentPage - 1) * this.num,
                    this.currentPage * this.num - 1
                );
            } else {
                this.tableData = this.tableData1.filter((item) => {
                    return JSON.stringify(item).indexOf(this.input) > -1;
                });
            }
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
