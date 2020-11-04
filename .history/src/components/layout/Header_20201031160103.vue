<template>
<div class="Head df jc_c">
    <div class="box df jc_b">
        <div>欢迎{{user.username}}来到小关后台管理系统</div>
        <div></div>
    </div>
</div>
</template>

<script>
export default {
    name: "",
    props: {
        user: {
            type: Object,
        },
    },
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

<style scoped lang='scss'>
.Head {
  width: 100%;
  height: 60px;
  background-color: #295c87;
  .box {
    width: 95%;
    color: white;
    height: 60px;
    line-height: 60px;
  }
  .box1 div{
      margin-left: 10px !important;
  }
}
</style>
