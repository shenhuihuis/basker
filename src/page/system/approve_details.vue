<template>
  <div>
    <div class="bread">
      <div class="htit">账号管理</div>
      <span>> 添加</span>  
    </div>
    <div class="syscontair">   
        <div class="selectbox">
        <el-select v-model="selected.value1" placeholder="请选择">
            <el-option
            v-for="item in options1"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
        </el-select>
            <el-select v-model="selected.value1" placeholder="请选择">
            <el-option
            v-for="item in options2"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
        </el-select>
            <el-select v-model="selected.value1" placeholder="请选择">
            <el-option
            v-for="item in options3"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
        </el-select>
            <el-select v-model="selected.value1" placeholder="请选择">
            <el-option
            v-for="item in options4"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
        </el-select>
        </div>
        <div class='consys'>
            <div class="form appform">
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="单位名称" prop="name">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>
                    <el-form-item label="单位类型" prop="address">
                        <el-input v-model="ruleForm.address"></el-input>
                    </el-form-item>
                     <el-form-item label="单位地址" prop="login">
                        <el-input v-model="ruleForm.login"></el-input>
                    </el-form-item>
                    <el-form-item label="法人代表" prop="login">
                        <el-input v-model="ruleForm.login"></el-input>
                    </el-form-item> 
                    <el-form-item label="组织机构代码" prop="password" class="small">
                        <el-input v-model="ruleForm.password"></el-input>
                    </el-form-item>
                    <div class="el-form-item is-required">
                        <label class="el-form-item__label" style="width: 100px;" for="login">经营许可证</label>
                        <div class="el-form-item__content" style="margin-left: 100px;">
                            <div class="el-input">
                               <div class="upload">
                                   <input type="file">
                                   <i class="el-icon-upload"></i>
                               </div>
                            </div>
                        </div>
                     </div>
                    <el-form-item label="联系人姓名" prop="login">
                        <el-input v-model=" ruleForm.login"></el-input>
                    </el-form-item> 
                    <el-form-item label="手机号码" prop="password" class="small">
                        <el-input v-model="ruleForm.password"></el-input>
                    </el-form-item>
                     <el-form-item class="nsub">
                        <el-button type="primary" @click="submitForm('ruleForm')" class="lf">审核驳回<br><font style="font-size:12px;">并短信通知</font></el-button>
                        <el-button type="primary" @click="submitForm('ruleForm')" class="rt">审核通过</el-button> 
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
      return{
        ruleForm:{
            name:"",
            address:"",
            login:"",
            password:""
        },
        rules:{
            name: [
                { required: true, message: '请输入单位名称', trigger: 'blur' },
               // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
            ],
            address: [
                { required: true, message: '请输入单位地址', trigger: 'blur' }
            ],
            login:[
                { required: true, message: '请输入登陆账号', trigger: 'blur' }
            ],
            password:[
                { required: true, message: '请输入登陆密码', trigger: 'blur' }
            ]
        },
        options1: [{
            value: '选项1',
            label: '黄金糕'
          }
        ],
        options2: [{
            value: '选项2',
            label: '黄金糕'
          }
        ],
        options3: [{
            value: '选项3',
            label: '黄金糕'
          }
        ],
        options4: [{
            value: '选项4',
            label: '黄金糕'
          }
        ],
        selected:{
            value1:"选项1",
            value2:"选项2",
            value3:"选项3",
            value4:"选项4"
        },
        list:[
          
        ]
      }
    },
    mounted(){

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
  }  
</script>