import axios from 'axios';
<template>
<div></div>
</template>

<script>
import axios from 'axios'
import dayjs from 'dayjs'
export default {
    name: "",
    props: {},
    components: {},
    data() {
        return {
            id: "",
        };
    },
    methods: {},
    mounted() {
        this.id = this.$route.query.id;
        // console.log(this.id);
        axios.get('/api/article/allArticle').then(res => {
            console.log(res)
        }).catch(err => {
            console.log()
        })

    },
    watch: {},
    computed: {},
};
</script>

<style scoped lang='scss'>
</style>
