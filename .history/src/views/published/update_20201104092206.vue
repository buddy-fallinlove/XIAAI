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
            if (res.data.data.code === 200) {
                res.data.data.map((item, index) => {
                    if (item._id === this.id) {
                        this.from
                    }
                })
            }

            console.log(res.data.data)
        }).catch(err => {
            console.log(err)
        })

    },
    watch: {},
    computed: {},
};
</script>

<style scoped lang='scss'>
</style>
