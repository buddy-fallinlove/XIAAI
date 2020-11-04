<template>
<div class="df fd_c">
    <el-input placeholder="请输入商品名称" clearable v-model="input"></el-input>
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
            <span class="demonstration">完整功能</span>
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400">
            </el-pagination>
        </div>
    </div>
</div>
</template>

<script>
import axios from "axios";
export default {
    name: "",
    props: {},
    components: {},
    data() {
        return {
            tableData: [],
            input: "",
            // tableData1:[]
        };
    },
    methods: {
        getdata() {
            axios
                .get("/api/tableData")
                .then((res) => {
                    console.log(res.data.data);
                    this.tableData = res.data.data;
                    // this.tableData = this.tableData1.slice(0, 10);
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
