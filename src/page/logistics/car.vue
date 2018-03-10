<template>
  <div class="logistics" v-if="show==0">
    <div class="bread">
        <div class="htit">退库配送</div>
        <div class="sebox">
          <div class="selected">
            <div class="find">
              <el-input placeholder="请输入内容" v-model="find" class="input-with-select">
                <el-button slot="append" icon="el-icon-search"></el-button>
              </el-input>
            </div>
            <a href="javascript:void(0);" class="add" @click="show=1">添加仓库</a>
          </div> 
        </div>
    </div>
    <div class="listbox">
          <table cellpadding=0 cellspacing=0>
              <thead>
                  <td width="20%">汽车牌照</td>
                  <td width="10%">品牌</td>
                  <td width="20%">发动机号码</td>
                  <td width="10%">车架号码</td>
                  <td width="10%">照片</td>
                  <td  width="20%">操作</td>
              </thead>
              <tbody>
                  <tr>
                      <td>2018年02月20日</td>
                      <td>xxx</td>
                      <td>xxx</td>
                      <td>xxx</td>
                      <td>111</td>
                      <td>
                          <a href="javascript:void(0)" @click="show=1">查看</a>
                          <a href="javascript:void(0)">编辑</a>
                      </td>
                    </tr>
                 </tbody>
            </table>
              <div class="page"></div>
          </div>   
        </div>
      </div>
    </div>
    <div class="logistics"  v-else>
      <div class="bread">
           <div class="htit">退库配送</div>
           <span>(编辑)</span>  
      </div>
      <div class="syscontair">   
          <div class='consys'>
              <div class="form appform">
                  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                      <el-form-item label="汽车车牌" prop="name">
                          <el-input v-model="ruleForm.name"></el-input>
                      </el-form-item>
                      <el-form-item label="汽车品牌" prop="address">
                          <el-input v-model="ruleForm.address"></el-input>
                      </el-form-item>
                      <el-form-item label="发动机号码" prop="login">
                          <el-input v-model="ruleForm.login"></el-input>
                      </el-form-item>
                      <el-form-item label="车架号码" prop="login">
                          <el-input v-model="ruleForm.login"></el-input>
                      </el-form-item> 
                      <div class="el-form-item is-required">
                        <label class="el-form-item__label" style="width: 100px;" for="login">车辆照片</label>
                        <div class="el-form-item__content" style="margin-left: 100px;">
                            <div class="el-input">
                               <div class="upload">
                                   <input type="file">
                                   <i class="el-icon-upload"></i>
                               </div>
                            </div>
                        </div>
                     </div>
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
                     <div class="el-form-item is-required">
                        <label class="el-form-item__label" style="width: 100px;" for="login">资质照片</label>
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
                          <el-button type="primary" @click="submitForm('ruleForm')" class="rt">确认并批准</el-button> 
                      </el-form-item>
                  
                  </el-form>
              </div>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
   export default {
      data() {
        return {
            find:"",
            show:0,
            form:{
              name:"",
            },
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
      },
   }
</script>
