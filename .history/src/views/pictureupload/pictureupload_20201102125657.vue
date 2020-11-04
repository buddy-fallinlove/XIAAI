<template>
<div>
    <el-col :span="8">
        <el-card shadow="always">
            <div>
                <h1>支持拖拽</h1>
                <div class="element">Element UI自带上传组件</div>
                <el-upload class="upload-demo" drag action="/api/upload" multiple>
                    <i class="el-icon-upload"></i>
                    <div class="el-upload__text">
                        将文件拖到此处，或<em>点击上传</em>
                    </div>
                    <div class="el-upload__tip" slot="tip">
                        只能上传jpg/png文件，且不超过500kb
                    </div>
                </el-upload>
            </div>
            <div>
                <h1>支持裁剪</h1>
                <div class="element">vue-image-crop-upload</div>
                <!--HTML部分-->
                <div id="image">
                    <!--上传图片的按钮-->
                    <a class="btn" @click="toggleShow">设置头像</a>
                    <!--组件主体-->
                    <my-upload field="img" @crop-success="cropSuccess" v-model="show" :width="400" :height="200" img-format="jpg" :size="size"></my-upload>
                    <img :src="avatar" />
                </div>
            </div>
        </el-card>
    </el-col>
</div>
</template>

<script>
import "babel-polyfill"; // es6 shim
import myUpload from "vue-image-crop-upload";
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
.el-col {
    width: 100%;
}

.element {
    width: 85%;
    height: 50px;
    background-color: #eeeeee;
    line-height: 50px;
    padding-left: 30px;
    margin-bottom: 30px;
}
</style>
