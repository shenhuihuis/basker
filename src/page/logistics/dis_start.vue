<template>
  <div class="logistics" v-if="show==0">
     <div class="bread">
        <div class="htit">配送管理</div>
        <span>> 销量配送</span>
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
          <td width="10%">第几次爆破</td>
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
        <div class="htit">配送管理</div>
        <span>> 销量配送</span>
    </div>
    <div class="syscontair">
        <div class="consys">
            <div class="appform dis_box">
                <div class="conlf">
                    <div class="clearbox">
                        <div class="inputbox">
                            <label class="el-form-item__label">配送时间</label>
                            <el-input v-model="form.name" placeholder="请输入内容"></el-input>
                        </div>
                    </div>
                    <div class="clearbox">
                        <div class="inputbox">
                        <label  class="el-form-item__label">托运方</label>
                        <el-input v-model="form.name" placeholder="请输入内容"></el-input>
                        </div>
                    </div>
                    <div class="clearbox">
                        <div class="inputbox">
                            <label class="el-form-item__label">项目名称</label>
                            <el-input v-model="form.name" placeholder="请输入内容"></el-input>
                        </div>
                    </div>
                    <div class="clearbox">
                        <div class="inputbox">
                        <label  class="el-form-item__label">第几次爆破</label>
                        <el-input v-model="form.name" placeholder="请输入内容"></el-input>
                        </div>
                    </div>
                    <div class="clearbox">
                        <div class="inputbox">
                            <label class="el-form-item__label">配送起点</label>
                            <el-input v-model="form.name" placeholder="请输入内容"></el-input>
                        </div>
                    </div>
                    <div class="clearbox">
                        <div class="inputbox">
                        <label  class="el-form-item__label">配送终点</label>
                            <el-input v-model="form.name" placeholder="请输入内容"></el-input>
                        </div>
                    </div>
                    <div class="clearbox">
                        <div class="inputbox">
                            <label class="el-form-item__label">查看配送轨迹</label>

                        </div>
                    </div>
                    <div class="clearbox">
                        <div class="inputbox">
                            <label class="el-form-item__label">驾驶员</label>
                            <el-input v-model="form.name" placeholder="请输入内容"></el-input>
                        </div>
                    </div>
                    <div class="clearbox">
                        <div class="inputbox">
                            <label class="el-form-item__label">联系方式</label>
                            <el-input v-model="form.name" placeholder="请输入内容"></el-input>
                        </div>
                    </div>
                    <div class="clearbox">
                        <div class="inputbox">
                            <label class="el-form-item__label">押运员</label>
                            <el-input v-model="form.name" placeholder="请输入内容"></el-input>
                        </div>
                    </div>
                    <div class="clearbox">
                        <div class="inputbox">
                            <label class="el-form-item__label">联系方式</label>
                            <el-input v-model="form.name" placeholder="请输入内容"></el-input>
                        </div>
                    </div>
                    <div class="clearbox">
                        <div class="inputbox">
                            <label class="el-form-item__label">配送车辆</label>
                            <el-input v-model="form.name" placeholder="请输入内容"></el-input>
                        </div>
                    </div>
                </div>
                <div class="conrt">
                     <div class="ltable">炸药</div>   
                     <div class="clearbox">
                        <div class="inputbox">
                            <label class="el-form-item__label">配送车辆</label>
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
                            <label class="el-form-item__label">开始编号</label>
                            <el-input v-model="form.name" placeholder="请输入内容"></el-input>
                        </div>
                    </div>
                     <div class="clearbox">
                        <div class="inputbox">
                            <label class="el-form-item__label">结束编号</label>
                            <el-input v-model="form.name" placeholder="请输入内容"></el-input>
                        </div>
                    </div>
                     <div class="clearbox">
                        <div class="inputbox">
                            <label class="el-form-item__label">段别</label>
                            <el-input v-model="form.name" placeholder="请输入内容"></el-input>
                        </div>
                    </div>
                     <div class="clearbox">
                        <div class="inputbox">
                            <label class="el-form-item__label">米数</label>
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
