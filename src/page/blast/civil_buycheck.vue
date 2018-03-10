<template>
  <div v-if="show==0">
     <div class="bread">
        <div class="htit">民爆物品购买</div>
        <span>> 民爆购买登记</span>
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
          <a href="javascript:void(0);" class="add">添加</a>
        </div>  
     </div>  
     <div class="listbox">
      <table cellpadding=0 cellspacing=0>
        <thead>
          <td width="20%">时间 </td>
          <td width="10%">对应项目</td>
          <td width="20%">经营公司</td>
          <td width="10%">操作人</td>
          <td width="20%">项目第几次购买</td>
          <td width="20%">操作</td></thead>
        <tbody>
          <tr>
            <td>2018年02月20日</td>
            <td>xxx</td>
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
        <div class="htit">民爆物品购买</div>
        <span>> 民爆购买登记</span>
    </div>
    <div class="syscontair">
        <div class="consys">
            <div class="appform dis_box">
                <div class="conlf">   
                    <div class="clearbox">
                        <div class="inputbox">
                            <label class="el-form-item__label">申请单位</label>
                            <el-input v-model="form.name" placeholder="请输入内容"></el-input>
                        </div>
                    </div>
                    <div class="clearbox">
                        <div class="inputbox">
                        <label  class="el-form-item__label">项目名称</label>
                        <el-input v-model="form.name" placeholder="请输入内容"></el-input>
                        </div>
                    </div>
                    <div class="clearbox">
                        <div class="inputbox">
                            <label class="el-form-item__label">项目级别</label>
                            <el-input v-model="form.name" placeholder="请输入内容"></el-input>
                        </div>
                    </div>
                    <div class="clearbox">
                        <div class="inputbox">
                        <label  class="el-form-item__label">作业地点</label>
                        <el-input v-model="form.name" placeholder="请输入内容"></el-input>
                        </div>
                    </div>
                    <div class="clearbox">
                        <div class="inputbox">
                            <label class="el-form-item__label">第几次购买</label>
                            <el-input v-model="form.name" placeholder="请输入内容"></el-input>
                        </div>
                    </div>
                </div>
                <div class="conrt">
                     <div class="ltable">炸药</div>   
                     <div class="clearbox">
                        <div class="inputbox">
                            <label class="el-form-item__label">型号</label>
                            <el-input v-model="form.name" placeholder="请输入内容"></el-input>
                        </div>
                    </div>
                     <div class="clearbox">
                        <div class="inputbox">
                            <label class="el-form-item__label">数量</label>
                            <el-input v-model="form.name" placeholder="请输入内容"></el-input>
                        </div>
                    </div>
                     <div class="ltable">雷管</div>   
                     <div class="clearbox">
                        <div class="inputbox">
                            <label class="el-form-item__label">型号</label>
                            <el-input v-model="form.name" placeholder="请输入内容"></el-input>
                        </div>
                    </div>
                     <div class="clearbox">
                        <div class="inputbox">
                            <label class="el-form-item__label">数量</label>
                            <el-input v-model="form.name" placeholder="请输入内容"></el-input>
                        </div>
                    </div>
                    <div class="ltable">导爆管</div>   
                     <div class="clearbox">
                        <div class="inputbox">
                            <label class="el-form-item__label">数量</label>
                            <el-input v-model="form.name" placeholder="请输入内容">
                                 <template slot="append">单位：m（米）</template>
                            </el-input>
                        </div>
                    </div>    
                    <div class="ltable">导爆索</div>   
                     <div class="clearbox">
                        <div class="inputbox">
                            <label class="el-form-item__label">数量</label>
                            <el-input v-model="form.name" placeholder="请输入内容">
                                 <template slot="append">单位：m（米）</template>
                            </el-input>
                        </div>
                    </div>
                    <div class="clearbox">
                        <div class="inputbox">
                            <label class="el-form-item__label">上传交接单</label>
                            <div class="el-input">
                                <div class="upload">
                                    <input type="file"> <i class="el-icon-upload"></i>
                                </div>
                            </div>
                        </div>
                    </div>             
                   
                </div>
                 <div class="dis_sub">
                    <a href="javascript:void(0);">确认并批准</a>
                </div>   
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
           form:{
               name:""
           }
         
      }
    }
  }
</script>
