<template>
  <div class="sysindex">
    <div class="bread">
      <div class="htit">作业现场视频管理</div>
      <span>> 视频实时上传</span>
    </div>
    <div class="syscontair">
      <div class='consys'>
        <div class="form appform">
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="名称" prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="设备类型" prop="address">
              <el-input v-model="ruleForm.address"></el-input>
            </el-form-item>
            <el-form-item label="设备ID" prop="login">
              <el-input v-model="ruleForm.login"></el-input>
            </el-form-item>
            <el-form-item label="品牌" prop="login">
              <el-input v-model="ruleForm.login"></el-input>
            </el-form-item>
            <el-form-item label="秘钥" prop="password" class="small">
              <el-input v-model="ruleForm.password"></el-input>
            </el-form-item>
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
        name: [
          { required: true, message: "请输入单位名称", trigger: "blur" }
          // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        address: [
          { required: true, message: "请输入单位地址", trigger: "blur" }
        ],
        login: [{ required: true, message: "请输入登陆账号", trigger: "blur" }],
        password: [
          { required: true, message: "请输入登陆密码", trigger: "blur" }
        ]
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