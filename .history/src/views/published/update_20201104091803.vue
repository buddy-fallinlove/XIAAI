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
        axios.get()

    },
    watch: {},
    computed: {},
};
</script>

<style scoped lang='scss'>
</style>
