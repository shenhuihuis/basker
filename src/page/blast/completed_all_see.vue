<template>
    <div class="logistics">
        <div class="bread">
            <div class="htit">爆破项目竣工管理</div>
            <span>> 查看</span>
        </div>
        <div class="sebox">
            <div class="selected">
                <div class="timeselect">
                    <el-date-picker v-model="time" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
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
                    <td width="20%">项目时间</td>
                    <td width="10%">项目名称</td>
                    <td width="20%">作业地点</td>
                    <td width="10%">项目负责人</td>
                    <td width="10%">监理单位</td>
                    <td width="10%">录入员</td>
                    <td width="20%">操作</td>
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
                            <router-link :to="{'name':'all_details',params:{id:1}}">查看</router-link>
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