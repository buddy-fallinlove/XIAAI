<template>
<div class="df jc_c ai_c fd_c bgc">
    <el-card class="box-card">
        <div slot="header" class="clearfix tex">欢迎来到小关后台管理系统</div>
        <div class="text">
            <div style="width: 500px">
                <el-form :model="form" label-width="100px" status-icon :rules="rules" ref="form">
                    <el-form-item label="用户名" prop="username">
                        <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="password">
                        <el-input v-model="form.password" placeholder="请输入密码" show-password></el-input>
                    </el-form-item>
                    <el-form-item label="确认密码" prop="checkPass">
                        <el-input type="password" v-model="form.checkPass" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" style="width: 45%" @click="rsgister">立即注册</el-button>
                        <el-button type="primary" style="width: 45%" @click="login">立即登录</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </el-card>
</div>
</template>

<script>
export default {
    name: "",
    props: {},
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

<style lang="scss" scoped>
.bgc {
    width: 100vw;
    height: 100vh;
    background-image: url("https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1484588196,1016087853&fm=26&gp=0.jpg");
    background-repeat: no-repeat;
    background-size: cover;
}

.text {
    font-size: 14px;
}
</style>
