<template>
  <div v-if="show==0">
     <div class="bread">
        <div class="htit">民爆物品管理</div>
        <span>> 购买许可证管理</span>
    </div>
    <div class="sebox">
          <div class="selected">
          <div class="timeselect">
              <el-date-picker
                v-model="time"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期">
              </el-date-picker>
          </div>
          <div class="find">
            <el-input placeholder="请输入内容" v-model="find" class="input-with-select">
              <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
          </div>
          <a href="javascript:void(0)" class="add">新增</a>
        </div>  
     </div>  
     <div class="listbox">
      <table cellpadding=0 cellspacing=0>
        <thead>
          <td width="20%">时间 </td>
          <td width="10%">爆破项目</td>
          <td width="20%">经营公司</td>
          <td width="10%">操作员</td>
          <td width="20%">操作</td></thead>
        <tbody>
          <tr>
            <td>2018年02月20日</td>
            <td>xxx</td>
            <td>xxx</td>
            <td>xxx</td>
            <td>
              <a href="javascript:void(0);" @click="show=1">查看</a>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="page"></div>
    </div>
  </div>
  <div v-else>
    <div class="bread">
      <div class="htit">民爆物品管理</div>
      <span>> 购买许可证管理 > 添加</span>  
    </div>
    <div class="syscontair">   
        <div class='consys'>
            <div class="form appform">
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="登记时间" prop="name">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>
                    <el-form-item label="项目名称" prop="address">
                        <el-input v-model="ruleForm.address"></el-input>
                    </el-form-item>
                     <el-form-item label="经营公司" prop="login">
                        <el-input v-model="ruleForm.login"></el-input>
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
                     <el-form-item class="sub">
                        <el-button type="primary" @click="submitForm('ruleForm')" class="lf">确定</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
  export default {
      data (){
         return {
           time:"",
           find:"",
           show:0,
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
      }
    }
  }
</script>
