<template>
  <div class="logistics" v-if="show==0">
    <div class="bread">
        <div class="htit">人员管理</div>
        <div class="sebox">
          <div class="selected">
            <div class="find">
              <el-input placeholder="请输入内容" v-model="find" class="input-with-select">
                <el-button slot="append" icon="el-icon-search"></el-button>
              </el-input>
            </div>
            <a href="javascript:void(0);" class="add" @click="show=1">添加人员</a>
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
                          <a href="javascript:void(0)">处理</a>
                      </td>
                    </tr>
                 </tbody>
                </table>
              <div class="page"></div>
          </div>   
        </div>
      </div>
    </div>
  </div>
   <div class="logistics" v-else>
    <div class="bread">
      <div class="htit">项目监理</div>
      <span>> 编辑</span>
    </div>
    <div class="syscontair">
      <div class="storage dep_sed">
        <div class="copbot noborder">
          <div class="pro-top">
            <div class="conlf">
              <div class='htit'>爆破信息</div>
              <div class="clearbox">
                <div class="inputbox">
                  <label class="el-form-item__label">申请单位</label>
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
                  <label class="el-form-item__label">项目级别</label>
                  <el-input v-model="form.name" placeholder="请输入内容"></el-input>
                </div>
              </div>
              <div class="clearbox">
                <div class="inputbox">
                  <label class="el-form-item__label">作业地点</label>
                  <el-input v-model="form.name" placeholder="请输入内容"></el-input>
                </div>
              </div>
              <div class="clearbox">
                <div class="inputbox">
                  <label class="el-form-item__label">作业时间</label>
                  <el-input v-model="form.name" placeholder="请输入内容"></el-input>
                </div>
              </div>
              <div class="clearbox">
                <div class="inputbox">
                  <label class="el-form-item__label">第几次爆破</label>
                  <el-input v-model="form.name" placeholder="请输入内容"></el-input>
                </div>
              </div>
            </div>
            <div class="conrt">
              <div class='htit'>预计数量</div>
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
              <div class="ltable">导爆管</div>
              <div class="clearbox">
                <div class="inputbox">
                  <label class="el-form-item__label">数量</label>
                  <el-input v-model="form.name" placeholder="请输入内容">
                    <template slot="append">单位：m（米）</template>
                  </el-input>
                </div>
              </div>
            </div>
          </div>
          <div class="procter">
            <div class="htit">作业人员</div>
            <div class="conlf">
              <div class="clearbox">
                <div class="sml">
                  <div class="clearbox">
                    <div class="inputbox">
                      <label class="el-form-item__label">姓名</label>
                      <el-input v-model="form.name" placeholder="请输入内容"></el-input>
                    </div>
                  </div>
                  <div class="clearbox">
                    <div class="inputbox">
                      <label class="el-form-item__label">照片</label>
                      <img width="120" height="120" alt="">
                    </div>
                  </div>
                </div>
                <div class="sml">
                  <div class="clearbox">
                    <div class="inputbox">
                      <label class="el-form-item__label">姓名</label>
                      <el-input v-model="form.name" placeholder="请输入内容"></el-input>
                    </div>
                  </div>
                  <div class="clearbox">
                    <div class="inputbox">
                      <label class="el-form-item__label">照片</label>
                      <img width="120" height="120" alt="">
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="conrt">
              <div class="clearbox">
                <div class="sml">
                  <div class="clearbox">
                    <div class="inputbox">
                      <label class="el-form-item__label">姓名</label>
                      <el-input v-model="form.name" placeholder="请输入内容"></el-input>
                    </div>
                  </div>
                  <div class="clearbox">
                    <div class="inputbox">
                      <label class="el-form-item__label">照片</label>
                      <img width="120" height="120" alt="">
                    </div>
                  </div>
                </div>
                <div class="sml">
                  <div class="clearbox">
                    <div class="inputbox">
                      <label class="el-form-item__label">姓名</label>
                      <el-input v-model="form.name" placeholder="请输入内容"></el-input>
                    </div>
                  </div>
                  <div class="clearbox">
                    <div class="inputbox">
                      <label class="el-form-item__label">照片</label>
                      <img width="120" height="120" alt="">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="probot">
            <div class="conlf">
              <div class="clearbox">
                <div class="inputbox">
                  <label class="el-form-item__label small">监理单位审核意见</label>
                  <div class="p-over"><span class="ok">已批准</span></div>
                </div>
              </div>
              <div class="clearbox">
                <div class="inputbox">
                  <label class="el-form-item__label">监理单位名称</label>
                  <el-input v-model="form.name" placeholder="请输入内容"></el-input>
                </div>
              </div>
              <div class="clearbox">
                <div class="inputbox">
                  <label class="el-form-item__label">审核人</label>
                  <el-input v-model="form.name" placeholder="请输入内容"></el-input>
                </div>
              </div>
              <div class="clearbox">
                <div class="inputbox">
                  <label class="el-form-item__label">姓名</label>
                  <el-input v-model="form.name" placeholder="请输入内容"></el-input>
                </div>
              </div>
              <div class="clearbox">
                <div class="inputbox">
                  <label class="el-form-item__label">许可证编号</label>
                  <el-input v-model="form.name" placeholder="请输入内容"></el-input>
                </div>
              </div>
            </div>
             <div class="conrt">
              <div class="clearbox">
                <div class="inputbox">
                  <label class="el-form-item__label small">派出所审核意见</label>
                  <div class="p-over"><span class="no">被驳回</span></div>
                </div>
              </div>
              <div class="clearbox">
                <div class="inputbox">
                  <label class="el-form-item__label">派出所名称</label>
                  <el-input v-model="form.name" placeholder="请输入内容"></el-input>
                </div>
              </div>
              <div class="clearbox">
                <div class="inputbox">
                  <label class="el-form-item__label">批准人</label>
                  <el-input v-model="form.name" placeholder="请输入内容"></el-input>
                </div>
              </div>
              <div class="clearbox">
                <div class="inputbox">
                  <label class="el-form-item__label">姓名</label>
                  <el-input v-model="form.name" placeholder="请输入内容"></el-input>
                </div>
              </div>
            </div>
          </div>
          <div class="dis_sub"><a href="javascript:void(0);">确认并批准</a></div>
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
            show:0,
            form:{
              name:"",

            }
        }
      },
   }
</script>
