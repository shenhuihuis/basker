<template>
  <div class="logistics">
     <div class="bread">
        <div class="htit">配送管理</div>
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
          <td width="20%">配送时间</td>
          <td width="10%">爆破公司</td>
          <td width="20%">项目名称</td>
          <td width="10%">配送车辆</td>
          <td width="10%">录入员</td>
          <td width="20%">操作</td></thead>
        <tbody>
          <tr>
            <td>2018年02月20日</td>
            <td>xxx</td>
            <td>xxx</td>
            <td>xxx</td>
            <td>xxx</td>
            <td>
              <router-link :to="{'name':'dis_details',params:{id:1}}">查看</router-link>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="page"></div>
    </div>
  </div>
</template>
<script>
  export default {
      data (){
         return {
           time:"",
           find:"",
         
      }
    }
  }
</script>
