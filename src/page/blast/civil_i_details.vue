<template>
  <div class="logistics">
    <div class="bread">
      <div class="htit">民爆物品管理</div>
      <span>> 查看详情</span>  
    </div>
    <div class="syscontair">   
         <div class="radio">
            <el-radio-group v-model="radio">
                <el-radio :label="3">购买登记（2）</el-radio>
                <el-radio :label="6">领用签收（8）</el-radio>
                <el-radio :label="9">使用消耗（5）</el-radio>
                <el-radio :label="9">退库（2）</el-radio>
            </el-radio-group>
         </div>
         <div class="listbox">
            <table cellpadding=0 cellspacing=0>
                <thead>
                <td width="20%">录入项目时间</td>
                <td width="10%">项目名称</td>
                <td width="20%">作业地点</td>
                <td width="20%">项目第几次爆破</td>
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
  </div>
</template>
<script>
  export default {
    data() {
      return{
          radio:6
      }
    },
    mounted(){

    },
    methods:{
     
    }
  }  
</script>