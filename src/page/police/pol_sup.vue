<template>
  <div class="logistics" v-if="show==0">
     <div class="bread">
        <div class="htit">日常监管</div>
        <div class="hrt">
            管辖范围：宁波市/余姚市/XX街道
        </div>
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
        </div>
     </div>  
     <div class="listbox">
      <table cellpadding=0 cellspacing=0>
        <thead>
          <td width="20%">管辖单位名称</td>
          <td width="10%">负责人</td>
          <td width="10%">联系电话</td>
          <td width="10%">爆破次数</td>
          <td width="20%">最近爆破项目</td>
          <td width="10%">更新时间</td>
          <td width="20%">操作</td></thead>
        <tbody>
          <tr>
            <td>111</td>
            <td>xxx</td>
            <td>13454752770</td>
            <td>xxx</td>
            <td>111</td>
            <td>xxx</td>
            <td>
              <a href='javascript:void(0);' @click="show=1">查看</a>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="page"></div>
    </div>
  </div>
   <div class="logistics" v-else>
    <div class="bread">
      <div class="htit">仓库管理</div>
      <span>(编辑)</span>
    </div>
    <div class="repsys">
      <div class="tp">
        <div class="lf">
          <div class="inputbox">
            <label class="el-form-item__label">管辖单位名称</label>
            <el-input v-model="form.name" placeholder="请输入内容"></el-input>
          </div>
          <div class="inputbox">
            <label class="el-form-item__label">联系电话</label>
            <el-input v-model="form.name" placeholder="请输入内容"></el-input>
          </div>
          <div class="inputbox">
            <label class="el-form-item__label">最新爆破项目</label>
            <el-input v-model="form.name" placeholder="请输入内容"></el-input>
          </div>
           <div class="inputbox">
            <label class="el-form-item__label">历史爆破记录</label>
          </div>
        </div>
        <div class="rt">
          <div class="inputbox">
            <label class="el-form-item__label">负责人</label>
            <el-input v-model="form.name" placeholder="请输入内容"></el-input>
          </div>
          <div class="inputbox">
            <label class="el-form-item__label">累计爆破次数</label>
            <el-input v-model="form.name" placeholder="请输入内容"></el-input>
          </div>
        </div>
      </div>
      <div class="listbox">
        <table cellpadding=0 cellspacing=0>
            <thead>
            <td width="20%">爆破时间</td>
            <td width="10%">爆破单位</td>
            <td width="20%">爆破项目</td>
            <td width="10%">爆破地点</td>
            <td width="10%">第几次爆破</td>
            <td width="10%">当前状态</td>
            <td width="20%">操作</td></thead>
            <tbody>
            <tr>
                <td>111</td>
                <td>xxx</td>
                <td>13454752770</td>
                <td>xxx</td>
                <td>111</td>
                <td>xxx</td>
                <td>
                <a href='javascript:void(0);' @click="show=1">查看</a>
                <a href='javascript:void(0);' @click="show=1">处理</a>
                </td>
            </tr>
            </tbody>
        </table>
        <div class="page"></div>
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
               name:''
           }
      }
    }
  }
</script>
