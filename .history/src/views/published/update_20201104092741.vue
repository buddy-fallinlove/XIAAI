import axios from 'axios';
<template>
<div></div>
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
            id: "",
            text: "",
            date: "",
            form: {
                title: "",
                abstract: "",
                author: "",
                category: "",
                source: "",
                star: "",
            },
            rules: {
                title: [{
                    required: true,
                    message: "不能为空",
                    trigger: "blur",
                }, ],
                abstract: [{
                    required: true,
                    message: "不能为空",
                    trigger: "blur",
                }, ],
                author: [{
                    required: true,
                    message: "不能为空",
                    trigger: "blur",
                }, ],
                category: [{
                    required: true,
                    message: "不能为空",
                    trigger: "blur",
                }, ],
                source: [{
                    required: true,
                    message: "不能为空",
                    trigger: "blur",
                }, ],
                star: [{
                    required: true,
                    message: "不能为空",
                    trigger: "blur",
                }, ],
            },
            pickerOptions: {
                shortcuts: [{
                        text: "今天",
                        onClick(picker) {
                            picker.$emit("pick", new Date());
                        },
                    },
                    {
                        text: "昨天",
                        onClick(picker) {
                            const date = new Date();
                            date.setTime(date.getTime() - 3600 * 1000 * 24);
                            picker.$emit("pick", date);
                        },
                    },
                    {
                        text: "一周前",
                        onClick(picker) {
                            const date = new Date();
                            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                            picker.$emit("pick", date);
                        },
                    },
                ],
            },
        };
    },
    methods: {},
    mounted() {
        this.id = this.$route.query.id;
        // console.log(this.id);
        axios
            .get("/api/article/allArticle")
            .then((res) => {
                if (res.data.data.code === 200) {
                    res.data.data.map((item, index) => {
                        if (item._id === this.id) {
                            this.from = res.data.data[index]
                            this.text = res.data.data[index].text
                            this.date = res.data.data[index].date
                        }
                    });
                }
                console.log(this.text);
            })
            .catch((err) => {
                console.log(err);
            });
    },
    watch: {},
    computed: {},
};
</script>

<style scoped lang='scss'>
</style>
