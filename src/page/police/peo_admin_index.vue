<template>
    <div class="sysindex" v-if="show==0">
        <div class="colist">
            <div class="bread">
                <div class="htit">行政审批</div>
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
                        <td width="20%">时间</td>
                        <td width="10%">类型</td>
                        <td width="20%">爆破单位</td>
                        <td width="20%">项目名称</td>
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
                                        <template slot="append">单位：m（米）
                                        </template>
                                    </el-input>
                             </div>
                        </div>
              <div class="ltable">导爆管</div>
              <div class="clearbox">
                <div class="inputbox">
                  <label class="el-form-item__label">数量</label>
                  <el-input v-model="form.name" placeholder="请输入内容">
                    <template slot="append">
                        单位：m（米）
                    </template>
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
                      <label class="el-form-item__label">技术员</label>
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
                      <label class="el-form-item__label">保管员</label>
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
                      <label class="el-form-item__label">爆破员</label>
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
                      <label class="el-form-item__label">安全员</label>
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
      time: "",
      find: "",
      show: 0,
      form: {
        name: ""
      }
    };
  }
};
</script>
