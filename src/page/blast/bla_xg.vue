<template>
    <div>
        <div class="bread">
            <div class="htit">爆破项目登记管理</div>
            <span>> 编辑</span>
        </div>
        <div class="bla_xgform">
            <div class="appform">
                <div class="clearbox">
                    <div class="inputbox">
                        <label class="el-form-item__label">委托单位</label>
                        <el-input v-model="form.name" placeholder="请输入内容"></el-input>
                    </div>
                    <div class="inputbox">
                        <label class="el-form-item__label">委托单位法人</label>
                        <el-input v-model="form.name" placeholder="请输入内容"></el-input>
                    </div>
                </div>
                <div class="clearbox">
                    <div class="inputbox">
                        <label class="el-form-item__label">项目名称</label>
                        <el-input v-model="form.name" placeholder="请输入内容"></el-input>
                    </div>
                    <div class="inputbox">
                        <label class="el-form-item__label smal">委托单位法人手机号</label>
                        <el-input v-model="form.name" placeholder="请输入内容"></el-input>
                    </div>
                </div>
                <div class="clearbox">
                    <div class="inputbox">
                        <label class="el-form-item__label">申请单位</label>
                        <el-input v-model="form.name" placeholder="请输入内容"></el-input>
                    </div>
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
                    <div class="inputbox timebox">
                        <label class="el-form-item__label">作业时间</label>
                        <div class="block">
                            <div class="sel">
                                <el-date-picker v-model="time" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
                                </el-date-picker>
                            </div>
                             <div class="time">共<span>10</span>天</div>
                        </div>
                    </div>
                </div>
                <div class="clearbox">
                    <div class="sminput">
                        <label class="el-form-item__label">施工设计人</label>
                        <el-input v-model="form.name" placeholder="请输入内容"></el-input>
                    </div>
                     <div class="sminput">
                        <label class="el-form-item__label">许可证编号</label>
                        <el-input v-model="form.name" placeholder="请输入内容"></el-input>
                    </div>
                     <div class="sminput">
                        <label class="el-form-item__label">身份证号码</label>
                        <el-input v-model="form.name" placeholder="请输入内容"></el-input>
                    </div>
                </div>
                <div class="clearbox">
                    <div class="sminput">
                        <label class="el-form-item__label">施工审核人</label>
                        <el-input v-model="form.name" placeholder="请输入内容"></el-input>
                    </div>
                     <div class="sminput">
                        <label class="el-form-item__label">许可证编号</label>
                        <el-input v-model="form.name" placeholder="请输入内容"></el-input>
                    </div>
                     <div class="sminput">
                        <label class="el-form-item__label">身份证号码</label>
                        <el-input v-model="form.name" placeholder="请输入内容"></el-input>
                    </div>
                </div>
                <div class="clearbox">
                    <div class="sminput">
                        <label class="el-form-item__label">批准人</label>
                        <el-input v-model="form.name" placeholder="请输入内容"></el-input>
                    </div>
                     <div class="sminput">
                        <label class="el-form-item__label">许可证编号</label>
                        <el-input v-model="form.name" placeholder="请输入内容"></el-input>
                    </div>
                     <div class="sminput">
                        <label class="el-form-item__label">身份证号码</label>
                        <el-input v-model="form.name" placeholder="请输入内容"></el-input>
                    </div>
                </div>
                <div class="htit">设计施工单位参加本项目的爆破作业人员名单</div>
                <div class="clearbox">
                    <div class="sminput">
                        <label class="el-form-item__label">项目技术人员</label>
                        <el-input v-model="form.name" placeholder="请输入内容"></el-input>
                    </div>
                     <div class="sminput">
                        <label class="el-form-item__label">许可证编号</label>
                        <el-input v-model="form.name" placeholder="请输入内容"></el-input>
                    </div>
                     <div class="sminput">
                        <label class="el-form-item__label">身份证号码</label>
                        <el-input v-model="form.name" placeholder="请输入内容"></el-input>
                    </div>
                </div>
                 <div class="clearbox">
                    <div class="sminput">
                        <label class="el-form-item__label">项目负责人</label>
                        <el-input v-model="form.name" placeholder="请输入内容"></el-input>
                    </div>
                     <div class="sminput">
                        <label class="el-form-item__label">许可证编号</label>
                        <el-input v-model="form.name" placeholder="请输入内容"></el-input>
                    </div>
                     <div class="sminput">
                        <label class="el-form-item__label">身份证号码</label>
                        <el-input v-model="form.name" placeholder="请输入内容"></el-input>
                    </div>
                </div>
                 <div class="fath" ref="fath">
                    <div class="clearbox">
                        <div class="sminput">
                            <label class="el-form-item__label">爆破工程人员</label>
                            <el-input v-model="form.name" placeholder="请输入内容"></el-input>
                        </div>
                        <div class="sminput">
                            <label class="el-form-item__label">许可证编号</label>
                            <el-input v-model="form.name" placeholder="请输入内容"></el-input>
                        </div>
                        <div class="sminput lastsmal">
                            <label class="el-form-item__label">身份证号码</label>
                            <el-input v-model="form.name" placeholder="请输入内容"></el-input>
                        </div>
                        <a href="javascript:void(0)" class="add">
                            <i class="el-icon-circle-plus-outline"></i>
                        </a>
                    </div>
                </div>
                  <div class="fath" ref="fath">
                    <div class="clearbox">
                        <div class="sminput">
                            <label class="el-form-item__label">爆破员</label>
                            <el-input v-model="form.name" placeholder="请输入内容"></el-input>
                        </div>
                        <div class="sminput">
                            <label class="el-form-item__label">许可证编号</label>
                            <el-input v-model="form.name" placeholder="请输入内容"></el-input>
                        </div>
                        <div class="sminput lastsmal">
                            <label class="el-form-item__label">身份证号码</label>
                            <el-input v-model="form.name" placeholder="请输入内容"></el-input>
                        </div>
                        <a href="javascript:void(0)" class="add">
                            <i class="el-icon-circle-plus-outline"></i>
                        </a>
                    </div>
                </div>
                  <div class="fath" ref="fath">
                    <div class="clearbox">
                        <div class="sminput">
                            <label class="el-form-item__label">安全员</label>
                            <el-input v-model="form.name" placeholder="请输入内容"></el-input>
                        </div>
                        <div class="sminput">
                            <label class="el-form-item__label">许可证编号</label>
                            <el-input v-model="form.name" placeholder="请输入内容"></el-input>
                        </div>
                        <div class="sminput lastsmal">
                            <label class="el-form-item__label">身份证号码</label>
                            <el-input v-model="form.name" placeholder="请输入内容"></el-input>
                        </div>
                        <a href="javascript:void(0)" class="add">
                            <i class="el-icon-circle-plus-outline"></i>
                        </a>
                    </div>
                </div>
                  <div class="fath" ref="fath">
                    <div class="clearbox">
                        <div class="sminput">
                            <label class="el-form-item__label">保管员</label>
                            <el-input v-model="form.name" placeholder="请输入内容"></el-input>
                        </div>
                        <div class="sminput">
                            <label class="el-form-item__label">许可证编号</label>
                            <el-input v-model="form.name" placeholder="请输入内容"></el-input>
                        </div>
                        <div class="sminput lastsmal">
                            <label class="el-form-item__label">身份证号码</label>
                            <el-input v-model="form.name" placeholder="请输入内容"></el-input>
                        </div>
                        <a href="javascript:void(0)" class="add">
                            <i class="el-icon-circle-plus-outline"></i>
                        </a>
                    </div>
                </div>
                 <div class="htit">安全评估单位及人员</div>
                 <div class="clearbox">
                    <div class="inputbox">
                        <label class="el-form-item__label">单位名称</label>
                        <el-input v-model="form.name" placeholder="请输入内容"></el-input>
                    </div>
                    <div class="inputbox">
                        <label class="el-form-item__label">许可证编号</label>
                        <el-input v-model="form.name" placeholder="请输入内容"></el-input>
                    </div>
                </div>
                 <div class="clearbox">
                    <div class="inputbox">
                        <label class="el-form-item__label">作业范围</label>
                        <el-input v-model="form.name" placeholder="请输入内容"></el-input>
                    </div>
                    <div class="inputbox">
                        <label class="el-form-item__label">许可证有效期</label>
                        <el-input v-model="form.name" placeholder="请输入内容"></el-input>
                    </div>
                </div>
                 <div class="fath" ref="fath">
                    <div class="clearbox">
                        <div class="ssll">
                            <label class="el-form-item__label">监理人员</label>
                            <el-input v-model="form.name" placeholder="请输入内容"></el-input>
                            <label class="el-form-item__label">许可证编号</label>
                            <el-input v-model="form.name" placeholder="请输入内容"></el-input>
                            <label class="el-form-item__label">身份证号码</label>
                            <el-input v-model="form.name" placeholder="请输入内容" class="log"></el-input>
                            <label class="el-form-item__label">作业级别</label>
                             <el-select v-model="value" placeholder="请选择">
                                <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                            <a href="javascript:void(0)" class="add">
                                <i class="el-icon-circle-plus-outline"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="htit">安全监管单位参加本项目的爆破作业人员名单</div>
                  <div class="clearbox">
                    <div class="inputbox">
                        <label class="el-form-item__label">单位名称</label>
                        <el-input v-model="form.name" placeholder="请输入内容"></el-input>
                    </div>
                    <div class="inputbox">
                        <label class="el-form-item__label">许可证编号</label>
                        <el-input v-model="form.name" placeholder="请输入内容"></el-input>
                    </div>
                </div>
                 <div class="clearbox">
                    <div class="inputbox">
                        <label class="el-form-item__label">作业范围</label>
                        <el-input v-model="form.name" placeholder="请输入内容"></el-input>
                    </div>
                    <div class="inputbox">
                        <label class="el-form-item__label">许可证有效期</label>
                        <el-input v-model="form.name" placeholder="请输入内容"></el-input>
                    </div>
                </div>
                <div class="fath" ref="fath">
                    <div class="clearbox">
                        <div class="ssll">
                            <label class="el-form-item__label">监理人员</label>
                            <el-input v-model="form.name" placeholder="请输入内容"></el-input>
                            <label class="el-form-item__label">许可证编号</label>
                            <el-input v-model="form.name" placeholder="请输入内容"></el-input>
                            <label class="el-form-item__label">身份证号码</label>
                            <el-input v-model="form.name" placeholder="请输入内容" class="log"></el-input>
                            <label class="el-form-item__label">作业级别</label>
                            <el-select v-model="value" placeholder="请选择">
                                <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                            <a href="javascript:void(0)" class="add">
                                <i class="el-icon-circle-plus-outline"></i>
                            </a>
                        </div>
                    </div>
                </div>
                 <div class="htit">安全警戒距离</div>
                 <div class="fath" ref="fath">
                    <div class="clearbox">
                        <div class="ssll">
                            <label class="el-form-item__label">方位</label>
                            <el-input v-model="form.name" placeholder="请输入内容"></el-input>
                            <label class="el-form-item__label" style="margin-left:40px;">保护对象名称</label>
                            <el-input v-model="form.name" placeholder="请输入内容" class="log"></el-input>
                            <label class="el-form-item__label" style="margin-left:40px;">核定安全距离</label>
                            <el-input v-model="form.name"  style="width:200px;"placeholder="请输入内容">
                                <template slot="append">米/m</template>
                            </el-input>
                            <a href="javascript:void(0)" class="add">
                                <i class="el-icon-circle-plus-outline"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="clearbox">
                    <div class="other">
                        <div class="inputbox">
                            <div class="htit">炸药</div>
                            <div class="clearbox">
                                <label class="el-form-item__label">总数量</label>
                                <el-input v-model="form.name" placeholder="请输入内容">
                                    <template slot="append">Kg</template>
                                </el-input>
                            </div>
                        </div>
                         <div class="inputbox">
                            <div class="htit">雷管</div>
                            <div class="clearbox">
                                <label class="el-form-item__label">总数量</label>
                                <el-input v-model="form.name" placeholder="请输入内容">
                                    <template slot="append">发数</template>
                                </el-input>
                            </div>
                        </div>
                         <div class="inputbox">
                            <div class="htit">导爆管</div>
                            <div class="clearbox">
                                <label class="el-form-item__label">总数量</label>
                                <el-input v-model="form.name" placeholder="请输入内容">
                                    <template slot="append">米</template>
                                </el-input>
                            </div>
                        </div>
                         <div class="inputbox">
                            <div class="htit">导爆索</div>
                            <div class="clearbox">
                                <label class="el-form-item__label">总数量</label>
                                <el-input v-model="form.name" placeholder="请输入内容">
                                    <template slot="append">米</template>
                                </el-input>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="clearbox">
                    <div class="inputbox">
                        <label class="el-form-item__label">运输公司名称</label>
                        <el-input v-model="form.name" placeholder="请输入内容"></el-input>
                    </div>
                    <div class="inputbox">
                        <label class="el-form-item__label">仓储公司名称</label>
                        <el-input v-model="form.name" placeholder="请输入内容"></el-input>
                    </div>
                </div>
                <div class="clearbox" style="padding-top:20px;">
                    <div class="inputbox">
                        <label class="el-form-item__label">上传交接单</label>
                        <div class="el-input">
                            <div class="upload">
                                <input type="file"> 
                                <i class="el-icon-upload"></i>
                                <p>点击上传评估报告</p>
                            </div>
                        </div>
                    </div>
                     <div class="inputbox">
                        <label class="el-form-item__label">项目批文</label>
                        <div class="el-input">
                            <div class="upload">
                                <input type="file"> 
                                <i class="el-icon-upload"></i>
                                <p>点击上传批文</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="dis_sub">
                    <a href="javascript:void(0)" class="sub">确定</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                form: {
                    name:"",
                    
                },
                value:"",
                options:[],
                time:""
            }
        }
    }
</script>
