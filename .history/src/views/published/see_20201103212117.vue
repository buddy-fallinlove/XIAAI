import router from '../../../server/routes/users';
<template>
<div>
    <div>
        <el-button type="primary" @click="published">返回</el-button>
    </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
    name: '',
    props: {},
    components: {

    },
    data() {
        return {
            id: ''
        }
    },
    methods: {
        published() {
            this.$router.push('/published')
        }
    },
    mounted() {
       this.id=this.$route.query.id;
        // console.log(this.id)
        axios.post('/api/article/article', {
            id: this._id
        }).then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
    },
    watch: {

    },
    computed: {

    }
}
</script>

<style scoped lang='scss'>

</style>
