<template>
      <div class="sysindex">
        <div class="colist" v-if="show==0">
        <div class="bread">
            <div class="htit">数据变更</div>
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
          <a href="javascript:void(0);" class="add" @click="show=1">添加</a>
        </div>
          
      </div>
      <div class="listbox">
            <table cellpadding=0 cellspacing=0>
              <thead>
                  <td width="20%">日期</td>
                  <td width="10%">变更单位</td>
                  <td width="20%">单位类型</td>
                  <td width="10%">联系人</td>
                  <td width="10%">变更原因</td>
                  <td  width="30%">操作</td>
                  </thead>
                  <tbody>
                  <tr>
                      <td>2018年02月20日</td>
                      <td>xxx</td>
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
      <div class="colist" v-else>
          <div class="bread">
            <div class="htit">数据变更</div>
            <span>> 添加</span>  
          </div>  
          <div class='consys'>
            <div class="form appform" style="margin-bottom:22px;">
                <el-form :model="ruleForm" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                   <el-form-item label="筛选公司名">
                     <el-select v-model="ruleForm.name" placeholder="筛选公司名">
                      <el-option label="区域一" value="shanghai"></el-option>
                      <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                   </el-form-item>
                    <el-form-item label="筛选项目名">
                     <el-select v-model="ruleForm.name" placeholder="筛选项目名">
                      <el-option label="区域一" value="shanghai"></el-option>
                      <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                   </el-form-item>
                   <el-form-item class="nsub">
                        <el-button type="primary" class="rt">审核通过</el-button> 
                    </el-form-item>
                    <el-form-item label="第几次爆破">
                     <el-select v-model="ruleForm.cs" placeholder="筛选项目名">
                      <el-option label="区域一" value="shanghai"></el-option>
                      <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                   </el-form-item>
                </el-form>
            </div>
             <div class="listbox">
                  <table cellpadding=0 cellspacing=0>
                      <thead>
                        <td width="20%">配送录入时间</td>
                        <td width="10%">爆破公司</td>
                        <td width="20%">项目名称</td>
                        <td width="10%">第几次爆破</td>
                        <td width="10%">配送车辆</td>
                        <td width="10%">录入员</td>
                        <td  width="20%">操作</td>
                      </thead>
                      <tbody>
                      <tr>
                          <td>2018年02月20日</td>
                          <td>xxx</td>
                          <td>xxx</td>
                          <td>xxx</td>
                          <td>xxx</td>
                          <td>xxx</td>
                          <td>
                              <a href="javascript:void(0);">查看</a>
                              <a href="javascript:void(0);">编辑</a>
                          </td>
                      </tr>
                      </tbody>
                  </table>
                  <div class="page"></div>
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
            xm:"",
            cs:""
          },
         
      }
    }
  }
</script>
