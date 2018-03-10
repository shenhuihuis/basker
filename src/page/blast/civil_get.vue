<template>
    <div v-if="show==0">
        <div class="bread">
            <div class="htit">民爆物品购买</div>
            <span>> 领用签收管理</span>
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
                <a href="javascript:void(0);" class="add">添加</a>
            </div>
        </div>
        <div class="listbox">
            <table cellpadding=0 cellspacing=0>
                <thead>
                    <td width="20%">爆破时间 </td>
                    <td width="10%">爆破单位</td>
                    <td width="20%">爆破项目</td>
                    <td width="10%">爆破地点</td>
                    <td width="10%">第几次爆破</td>
                    <td width="10%">录入人</td>
                    <td width="20%">操作</td>
                </thead>
                <tbody>
                    <tr>
                        <td>2018年02月20日</td>
                        <td>xxx</td>
                        <td>xxx</td>
                        <td>xxx</td>
                        <td></td>
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
    <div v-else>
        <div class="bread">
            <div class="htit">民爆物品管理</div>
            <span>> 领用签收管理 > 查看</span>
        </div>
        <div class="syscontair">
            <div class="storage dep_sed">
                <div class="copbot noborder">
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
                        <div class='htit'>作业人员</div>
                        <div class="clearbox">
                            <div class="inputbox">
                                <label class="el-form-item__label">技术员</label>
                                <div class="imgs">
                                    <img alt="">
                                </div>
                                <div class="otbu">
                                    <div class="clearbox">
                                        <div class="inputbox">
                                            <label class="el-form-item__label">姓名</label>
                                            <el-select v-model="value" placeholder="请选择">
                                                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                                                </el-option>
                                            </el-select>
                                        </div>
                                    </div>
                                    <div class="clearbox">
                                        <div class="inputbox">
                                            <label class="el-form-item__label">手机</label>
                                            <el-input class="small" v-model="form.name" placeholder="请输入内容"></el-input>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="clearbox">
                            <div class="inputbox">
                                <label class="el-form-item__label">保管员</label>
                                <div class="imgs">
                                    <img alt="">
                                </div>
                                <div class="otbu">
                                    <div class="clearbox">
                                        <div class="inputbox">
                                            <label class="el-form-item__label">姓名</label>
                                            <el-select v-model="value" placeholder="请选择">
                                                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                                                </el-option>
                                            </el-select>
                                        </div>
                                    </div>
                                    <div class="clearbox">
                                        <div class="inputbox">
                                            <label class="el-form-item__label">手机</label>
                                            <el-input class="small" v-model="form.name" placeholder="请输入内容"></el-input>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                          <div class="clearbox">
                            <div class="inputbox">
                                <label class="el-form-item__label">爆破员</label>
                                <div class="imgs">
                                    <img alt="">
                                </div>
                                <div class="otbu">
                                    <div class="clearbox">
                                        <div class="inputbox">
                                            <label class="el-form-item__label">姓名</label>
                                            <el-select v-model="value" placeholder="请选择">
                                                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                                                </el-option>
                                            </el-select>
                                        </div>
                                    </div>
                                    <div class="clearbox">
                                        <div class="inputbox">
                                            <label class="el-form-item__label">手机</label>
                                            <el-input class="small" v-model="form.name" placeholder="请输入内容"></el-input>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                          <div class="clearbox">
                            <div class="inputbox">
                                <label class="el-form-item__label">安全员</label>
                                <div class="imgs">
                                    <img alt="">
                                </div>
                                <div class="otbu">
                                    <div class="clearbox">
                                        <div class="inputbox">
                                            <label class="el-form-item__label">姓名</label>
                                            <el-select v-model="value" placeholder="请选择">
                                                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                                                </el-option>
                                            </el-select>
                                        </div>
                                    </div>
                                    <div class="clearbox">
                                        <div class="inputbox">
                                            <label class="el-form-item__label">手机</label>
                                            <el-input class="small" v-model="form.name" placeholder="请输入内容"></el-input>
                                        </div>
                                    </div>
                                </div>
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
                            <div class="ltable">导爆索</div>
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
                            <div class='htit' style="padding-top:32px;">上传交接单</div>
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
                show:0,
                form: {
                    name: ""
                },
                value:"",
                options:[]
            }
        }
    }
</script>
