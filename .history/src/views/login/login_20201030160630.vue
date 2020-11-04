<template>
<div class="d-f jc_c ai_c fd_c box">
    <el-card class="box-card">
        <div slot="header" class="clearfix tex">欢迎来到小爱后台管理系统</div>
        <div class="text">
            <div style="width: 500px">
                <el-form :model="form" label-width="100px" status-icon :rules="rules" ref="form">
                    <el-form-item label="用户名" prop="username">
                        <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="password">
                        <el-input v-model="form.password" placeholder="请输入密码" show-password></el-input>
                    </el-form-item>
                    <div class="df jc_b ai_c">
                        <el-form-item label="验证码" prop="code">
                            <el-input v-model="form.code" placeholder="请输入验证码"></el-input>
                        </el-form-item>
                        <div v-html="this.code1" @click="code"></div>
                    </div>
                    <el-form-item>
                        <el-button type="primary" style="width: 45%" @click="login">立即登录</el-button>
                        <el-button type="primary" style="width: 45%" @click="rsgister">立即注册</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </el-card>
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
            code1: "",
            form: {
                username: "",
                password: "",
                // email: "",
                code: "",
            },
            rules: {
                username: [{
                        required: true,
                        message: "用户名不能为空",
                        trigger: "blur",
                    },
                    {
                        min: 2,
                        max: 8,
                        message: "用户名在2~8位",
                        trigger: "blur",
                    },
                    {
                        validator: checkUsername,
                        trigger: "blur",
                    },
                ],
                password: [{
                        required: true,
                        message: "密码不能为空",
                        trigger: "blur",
                    },
                    {
                        min: 6,
                        max: 15,
                        message: "密码在6~15位",
                        trigger: "blur",
                    },
                ],
                Verification: [{
                    required: true,
                    message: "验证码不能为空",
                    trigger: "blur",
                }, ],
            },
        };
    },
    methods: {},
    mounted() {},
    watch: {},
    computed: {},
};
</script>

<style lang="scss" scoped>
.box {
    width: 100vw;
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url("https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1883509526,2531837725&fm=26&gp=0.jpg");
}
</style>
