<template>
    <div class="sysindex" v-if="show==0">
        <div class="colist">
            <div class="bread">
                <div class="htit">通知管理</div>
            </div>
            <div class="pol_conbox">
                <div class="btn">
                    <a href="javascript:void(0);">全部</a>
                    <a href="javascript:void(0);">通知</a>
                    <a href="javascript:void(0);">公告</a>
                    <a href="javascript:void(0);" @click="show=1">新增</a>
                </div>
                <div class="find">
                    <el-input placeholder="搜索" v-model="find" class="input-with-select">
                        <el-button slot="append" icon="el-icon-search"></el-button>
                    </el-input>
                </div>
            </div>
            <div class="listbox" style="margin-top:0;">
                <table cellpadding=0 cellspacing=0 class="pol-table">
                    <thead>
                        <td width="25%">标题</td>
                        <td width="25%">发布人</td>
                        <td width="25%">类型</td>
                        <td width="25%">对象</td>
                    </thead>
                    <tbody>
                        <tr>
                            <td>2018年02月20日</td>
                            <td>xxx</td>
                            <td>xxx</td>
                            <td>xxx</td>
                        </tr>
                    </tbody>
                </table>
                <div class="page"></div>
            </div>
        </div>
    </div>
    <div class="sysindex" v-else>
        <div class="bread">
            <div class="htit">通知管理</div>
        </div>
        <div class="syscontair">    
            <div class='consys'>
                <div class="form sysform">
                    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                        <el-form-item label="标题" prop="title">
                            <el-input v-model="ruleForm.name"></el-input>
                        </el-form-item>
                        <div class="elselected">
                            <label class="el-form-item__label">接受人/部门</label>
                            <div class="selectbox">
                                <el-select v-model="value" placeholder="请选择">
                                    <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                                <el-select v-model="value" placeholder="请选择">
                                    <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                                <el-select v-model="value" placeholder="请选择">
                                    <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                            </div>
                        </div>
                         <div class="elselected">
                            <label class="el-form-item__label">正文：</label>
                             <div class="txtform">
                                 <el-input type="textarea" v-model="form.desc"></el-input>
                             </div>
                         </div>
                        <el-form-item class="nsub">
                            <el-button type="primary" class="lf">取消</el-button>
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
                show:0,
                find: "",
                form:{
                    desc:""
                },
                ruleForm: {
                    title: "",
                    password: ""
                },
                rules: {
                    title: [{
                            required: true,
                            message: '请输入标题',
                            trigger: 'blur'
                        },
                        // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                    ],
                },
                options: [
                    {
                        value: '选项1',
                        label: '黄金糕'
                    }
                ],
                value:""
            }
        },
        methods:{
             submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
                });
            },
        }
    };
</script>
