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
            <div class="form">
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="单位名称" prop="name">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>
                    <el-form-item label="单位地址" prop="address">
                        <el-input v-model="ruleForm.address"></el-input>
                    </el-form-item>
                     <el-form-item label="登陆账号" prop="login">
                        <el-input v-model="ruleForm.login"></el-input>
                    </el-form-item>
                    <el-form-item label="登陆密码" prop="password">
                        <el-input v-model="ruleForm.password"></el-input>
                    </el-form-item>
                     <el-form-item class="sub">
                      <el-button type="primary" @click="submitForm('ruleForm')">确认并批准</el-button>
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