<template>
  <div class="logistics" v-if="show==0">
    <div class="bread">
        <div class="htit">企业及人员管理</div>
        <div class="sebox">
          <div class="selected">
            <div class="find">
              <el-input placeholder="请输入内容" v-model="find" class="input-with-select">
                <el-button slot="append" icon="el-icon-search"></el-button>
              </el-input>
            </div>
            <a href="javascript:void(0);" class="add" @click="show=1">添加</a>
          </div> 
        </div>
    </div>
    <div class="listbox">
          <table cellpadding=0 cellspacing=0>
              <thead>
                  <td width="20%">姓名</td>
                  <td width="10%">身份证</td>
                  <td width="20%">联系电话</td>
                  <td width="10%">人员类型</td>
                  <!-- <td width="10%">人像照片</td> -->
                  <td  width="30%">操作</td>
              </thead>
              <tbody>
                  <tr>
                      <td>2018年02月20日</td>
                      <td>xxx</td>
                      <td>xxx</td>
                      <td>xxx</td>
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
           <div class="htit">企业及人员管理</div>
           <span>(编辑)</span>  
      </div>
      <div class="consys">
        <div class="appform">
          <div class="clearbox">
            <div class="inputbox">
              <label class="el-form-item__label">人员姓名</label>
              <el-input v-model="form.name" placeholder="请输入内容"></el-input>
            </div>
            <div class="inputbox">
              <label  class="el-form-item__label">身份证号码</label>
              <el-input v-model="form.name" placeholder="请输入内容"></el-input>
            </div>
          </div>
          <div class="clearbox">
            <div class="inputbox">
              <label class="el-form-item__label">实际居住地</label>
              <el-input v-model="form.name" placeholder="请输入内容"></el-input>
            </div>
            <div class="inputbox">
              <label class="el-form-item__label">联系电话</label>
              <el-input v-model="form.name" placeholder="请输入内容"></el-input>
            </div>
          </div>
          <div class="clearbox">
            <div class="inputbox">
              <label class="el-form-item__label">手机号码</label>
              <el-input v-model="form.name" placeholder="请输入内容"></el-input>
            </div>
            <div class="inputbox">
              <label class="el-form-item__label">人员类型</label>
              <el-input v-model="form.name" placeholder="请输入内容"></el-input>
            </div>
          </div>
          <div class="clearbox">
            <div class="inputbox">
              <label class="el-form-item__label">系统账号</label>
              <el-input v-model="form.name" placeholder="请输入内容"></el-input>
            </div>
            <div class="inputbox">
              <label class="el-form-item__label">系统密码</label>
              <el-input v-model="form.name" placeholder="请输入内容"></el-input>
            </div>
          </div>
          <div class="clearbox">
            <div class="inputbox">
              <label class="el-form-item__label">身份证照片</label>
                <div class="el-input">
                  <div class="upload">
                    <input type="file"> <i class="el-icon-upload"></i>
                  </div>
                </div> 
            </div>
            <div class="inputbox">
              <label class="el-form-item__label">身份证照片（背面）</label>
                <div class="el-input">
                  <div class="upload">
                    <input type="file"> <i class="el-icon-upload"></i>
                  </div>
                </div>
            </div>
          </div>
          <div class="clearbox">
            <div class="inputbox">
              <label class="el-form-item__label">人像照片1</label>
                <div class="el-input">
                  <div class="upload">
                    <input type="file"> <i class="el-icon-upload"></i>
                  </div>
              </div>
            </div>
            <div class="inputbox">
              <label  class="el-form-item__label">人像照片2</label>
                <div class="el-input">
                  <div class="upload">
                    <input type="file"> <i class="el-icon-upload"></i>
                  </div>
                </div>
            </div>
          </div>
          <div class="clearbox">
            <div class="inputbox">
              <label class="el-form-item__label">作业证正面</label>
                <div class="el-input">
                  <div class="upload">
                    <input type="file"> <i class="el-icon-upload"></i>
                  </div>
                </div>
            </div>
            <div class="inputbox">
              <label class="el-form-item__label">作业证背面</label>
                <div class="el-input">
                  <div class="upload">
                    <input type="file"> <i class="el-icon-upload"></i>
                  </div>  
              </div>
            </div>
          </div>
          <div class="logsub">
            <a href="javascript:void(0)" class="sub">提交</a>
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
            show  :0,
            form:{
              name:"",

            }
        }
      },
   }
</script>
