<template>
<div>

</div>
</template>

<script>
export default {
    name: '',
    props: {},
    components: {

    },
    data() {
        return {

        }
    },
    methods: {
        register() {
            console.log(111, this.$refs.form.validate((vaild) => {}));
            this.$refs.form.validate((valid) => {
                console.log(222);
                if (valid) {
                    axios
                        .post("api/user/register", {
                            username: this.ruleForm.username,
                            password: this.ruleForm.pass,
                        })
                        .then((res) => {
                            if (res.data.message === "注册成功") {
                                this.$message({
                                    message: res.data.message,
                                    type: "success",
                                });
                                this.$router.push("/login");
                            } else {
                                this.$message({
                                    message: res.data.message,
                                    type: "warning",
                                });
                            }
                        })
                        .catch();
                } else {
                    console.log(valid);
                    this.$message({
                        message: "表单验证失败",
                        type: "warning",
                    });
                    this.ruleForm.username = "";
                    this.ruleForm.pass = "";
                    this.ruleForm.checkPass = "";
                }
            });
        },

    },
    mounted() {

    },
    watch: {

    },
    computed: {

    }
}
</script>

<style scoped lang='scss'>

</style>
