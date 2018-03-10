<template>
    <div class="sysindex">
        <div class="bread">
            <div class="htit">作业现场视频管理</div>
            <span>> 无信号视频导入</span>
        </div>
        <div class="syscontair">
            <div class='consys'>
                <div class="form appform">
                    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
                        <el-form-item label="当前时间" prop="name">
                            <el-input v-model="ruleForm.name"></el-input>
                        </el-form-item>
                        <el-form-item label="爆破单位" prop="address">
                            <el-input v-model="ruleForm.address"></el-input>
                        </el-form-item>
                        <el-form-item label="爆破项目" prop="login">
                            <el-input v-model="ruleForm.login"></el-input>
                        </el-form-item>
                        <el-form-item label="爆破地点" prop="login">
                            <el-input v-model="ruleForm.login"></el-input>
                        </el-form-item>
                        <el-form-item label="项目第几次爆破" prop="password" class="small">
                            <el-input v-model="ruleForm.password"></el-input>
                        </el-form-item>
                        <el-form-item label="上传视频名称" prop="login">
                            <el-input v-model="ruleForm.login"></el-input>
                        </el-form-item>
                        <div class="el-form-item is-required">
                            <label class="el-form-item__label" style="width: 120px;" for="login">选择视频文件</label>
                            <div class="el-form-item__content" style="margin-left: 120px;">
                                <div class="el-input">
                                    <div class="upload">
                                        <input type="file">
                                        <i class="el-icon-upload"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <el-form-item class="nsub">
                            <el-button type="primary" @click="submitForm('ruleForm')" class="lf">重置<br>
                            </el-button>
                            <el-button type="primary" @click="submitForm('ruleForm')" class="rt">提交</el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                ruleForm: {
                    name: "",
                    address: "",
                    login: "",
                    password: ""
                },
                rules: {
                    name: [{
                            required: true,
                            message: "请输入单位名称",
                            trigger: "blur"
                        }
                        // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                    ],
                    address: [{
                        required: true,
                        message: "请输入单位地址",
                        trigger: "blur"
                    }],
                    login: [{
                        required: true,
                        message: "请输入登陆账号",
                        trigger: "blur"
                    }],
                    password: [{
                        required: true,
                        message: "请输入登陆密码",
                        trigger: "blur"
                    }]
                },
                list: []
            };
        },
        mounted() {},
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate(valid => {
                    if (valid) {
                        alert("submit!");
                    } else {
                        console.log("error submit!!");
                        return false;
                    }
                });
            }
        }
    };
</script>