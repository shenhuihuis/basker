<template>
  <div class="logistics">
    <div class="bread">
      <div class="htit">作业现场视频管理</div>
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
          <td width="20%">爆破时间</td>
          <td width="10%">爆破单位</td>
          <td width="20%">爆破项目</td>
          <td width="10%">爆破地点</td>
          <td width="10%">第几次爆破</td>
          <td width="10%">当前状态</td>
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
                <router-link :to="{name:'blast_videolist'}">编辑</router-link>
              <a href="javascript:void(0);" @click="show=1">查看</a>
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
  data() {
    return {
      time: "",
      find: "",
    };
  }
};
</script>
