<template>
  <div class="logistics" v-if="show==0">
     <div class="bread">
        <div class="htit">作业现场视频实时监管</div>
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
          <td width="20%">爆破时间</td>
          <td width="10%">爆破单位</td>
          <td width="20%">爆破项目</td>
          <td width="10%">爆破地点</td>
          <td width="20%">项目第几次爆破</td>
          <td width="10%">当前状态</td>
          <td width="20%">操作</td></thead>
        <tbody>
          <tr>
            <td>2018年02月20日</td>
            <td>xxx</td>
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
  <div class="logistics" v-else>
     <div class="bread">
        <div class="htit">作业现场视频管理</div>
        <span>> 详情</span>
    </div>
    <div class="depvideo">
            <ul>
                <li>
                    <a href="javascript:void(0);">
                        <div class="hd">
                            
                        </div>
                    </a>
                </li>
                  <li>
                    <a href="javascript:void(0);">
                        <div class="hd">
                            
                        </div>
                    </a>
                </li>
                  <li>
                    <a href="javascript:void(0);">
                        <div class="hd">
                            
                        </div>
                    </a>
                </li>
            </ul>
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
