<template>
<div>
    <Mainhead :count="count"></Mainhead>
    <MainChart :chat="chat" v-if="chat.length>0"></MainChart>
</div>
</template>

<script>
import axios from "axios";
import Mainhead from "../components/home/Mainhead .vue";
import MainChart from "../components/home/MainChart .vue";
import Mainpicture from "../components/home/Mainpicture.vue"
export default {
    name: "",
    props: {},
    components: {
        Mainhead,
        MainChart,
        Mainpicture
    },
    data() {
        return {
            count: {},
            chat: []
        };
    },
    methods: {
        gethomeData() {
            axios
                .get("/api/homeData")
                .then((res) => {
                    // console.log(res.data.data);
                    this.count = res.data.data;
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        gethomeChat() {
            axios.get("/api/homeChat").then(res => {
                // console.log(res.data.data)
                this.chat = res.data.data
            }).catch(err => {
                console.log(err)
            })
        },
        getringChat() {
            axios
                .get("/api/ringChat")
                .then(res => {
                    if (res.data.code === 0) {
                        this.ring = res.data.data;
                        console.log(this.data.data);
                    }
                })
                .catch(err => {
                    console.log(err);
                });
        },

    },
    mounted() {
        this.gethomeData();
        this.gethomeChat()
        this.getringChat()
    },
    watch: {},
    computed: {},
};
</script>

<style scoped lang='scss'>
</style>
