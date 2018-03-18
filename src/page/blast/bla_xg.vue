<template>
    <div v-if="load">
        <div class="bread">
            <div class="htit">爆破项目登记管理</div>
            <span>> 编辑</span>
        </div>
        <div class="bla_xgform" style="padding-bottom:5px;">
            <div class="appform">
                <div class="clearbox">
                      <div class="sminput">
                            <label class="el-form-item__label">录入时间</label>
                            <el-input  :disabled="true" :value="new Date().toLocaleString()"></el-input>
                        </div>
                         <div class="sminput">
                           <el-select v-model="sel.val" placeholder="请选择安全员" @change="indexck">
                                <el-option v-for="item in sel.list" :label="item.name" :key="item.id" :value="item.id"></el-option>
                            </el-select>
                     </div>
                </div>
            </div>
        </div>
        <div class="bla_xgform">
            <div class="appform">
                <el-form :model="form" :rules="rules" ref="ruleForm" class="demo-ruleForm">
                    <div class="clearbox">
                        <div class="inputbox">
                            <el-form-item label="委托单位" prop="applyCompany">
                                <el-input v-model="form.applyCompany" placeholder="请输入内容" prop="applyCompany"></el-input>
                            </el-form-item>
                        </div>
                        <div class="inputbox">
                            <el-form-item label="委托单位法人" prop="applyCorporation">
                                <el-input v-model="form.applyCorporation" placeholder="请输入内容" prop="applyCorporation"></el-input>
                            </el-form-item>
                        </div>
                    </div>
                    <div class="clearbox">
                        <div class="inputbox">
                            <el-form-item label="项目名称" prop="projectName">
                                <el-input v-model="form.projectName" placeholder="请输入内容" prop="projectName"></el-input>
                            </el-form-item>
                        </div>
                        <div class="inputbox">
                            <el-form-item label="委托人手机" prop="applyPhone">
                                <el-input v-model="form.applyPhone" placeholder="请输入内容" prop="applyPhone"></el-input>
                            </el-form-item>
                        </div>
                    </div>
                    <div class="clearbox">
                        <div class="inputbox">
                            <el-form-item label="项目级别">
                                <el-select v-model="select.select0.value">
                                    <el-option v-for="item in select.select0.list" :label="item.type" :key="item.class" :value="item.class">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </div>
                    </div>
                    <div class="clearbox">
                        <div class="inputbox">
                            <el-form-item label="作业地点" prop="projectAddress">
                                <el-input v-model="form.projectAddress" placeholder="请输入内容" prop="projectAddress"></el-input>
                            </el-form-item>
                        </div>
                    </div>
                    <div class="clearbox">
                        <div class="inputbox timebox">
                            <label class="el-form-item__label">作业时间</label>
                            <div class="block">
                                <div class="sel">
                                    <el-date-picker v-model="time" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" @change="t">
                                    </el-date-picker>
                                </div>
                                <div class="time" v-if="cjtime">共<span>{{cjtime}}</span>天</div>
                            </div>
                        </div>
                    </div>
                    <div class="clearbox" v-for="(j,index) in select.select1">
                        <div class="sminput">
    
                            <!-- <el-form-item label="施工设计人" prop="listPlanStaff">
                                        <el-input v-model="j.name" placeholder="请输入施工设计人" prop="listPlanStaff"></el-input>
                                    </el-form-item> -->
                            <label class="el-form-item__label">施工设计人</label>
                            <el-input v-model="j.name" placeholder="请输入施工设计人"></el-input>
                        </div>
                        <div class="sminput">
                            <label class="el-form-item__label">许可证编号</label>
                            <el-input v-model="j.licenceNumber" placeholder="请输入许可证编号"></el-input>
                        </div>
                        <div class="sminput lastsmal">
                            <label class="el-form-item__label">身份证号码</label>
                            <el-input v-model="j.value" placeholder="请输入身份证"></el-input>
                        </div>
                        <a href="javascript:void(0)" class="add" @click="add1(select.select1,index,0)" v-if="j.add">
                            <i class="el-icon-circle-plus-outline"></i>
                        </a>
                    </div>
                    <div class="clearbox">
                        <div class="sminput">
                            <label class="el-form-item__label">施工审核人</label>
                            <el-input v-model="select.select2.name" placeholder="请输入施工审核人"></el-input>
                        </div>
                        <div class="sminput">
                            <label class="el-form-item__label">许可证编号</label>
                            <el-input v-model="select.select2.licenceNumber" placeholder="请输入许可证编号"></el-input>
                        </div>
                        <div class="sminput">
                            <label class="el-form-item__label">身份证号码</label>
                            <el-input v-model="select.select1.value" placeholder="请输入身份证"></el-input>
                        </div>
                    </div>
                    <div class="clearbox">
                        <div class="sminput">
                            <label class="el-form-item__label">批准人</label>
                            <el-input v-model="select.select3.name" placeholder="请输入批准人"></el-input>
                        </div>
                        <div class="sminput">
                            <label class="el-form-item__label">许可证编号</label>
                            <el-input v-model="select.select3.licenceNumber" placeholder="请输入许可证编号"></el-input>
                        </div>
                        <div class="sminput">
                            <label class="el-form-item__label">身份证号码</label>
                            <el-input v-model="select.select2.value" placeholder="请输入身份证"></el-input>
                        </div>
                    </div>
                    <div class="htit">设计施工单位参加本项目的爆破作业人员名单</div>
                    <div class="clearbox">
                        <div class="sminput">
                            <label class="el-form-item__label">项目技术人员</label>
                            <el-select v-model="select.value4" placeholder="请选择项目技术人员" @change="sk(select.select4,select.value4,3)">
                                <el-option v-for="item in select.select4" :label="item.staffName" :key="item.id" :value="item.id"></el-option>
                            </el-select>
                        </div>
                        <div class="sminput">
                            <label class="el-form-item__label">许可证编号</label>
                            <el-input v-model="select.selected4.licenceNumber" :disabled="true"></el-input>
                        </div>
                        <div class="sminput">
                            <label class="el-form-item__label">身份证号码</label>
                            <el-input v-model="select.selected4.staffId" :disabled="true"></el-input>
                        </div>
                    </div>
                    <div class="clearbox">
                        <div class="sminput">
                            <label class="el-form-item__label">项目负责人</label>
                            <el-select v-model="select.value4" placeholder="请选择项目负责人" @change="sk(select.select4,select.value4,3)" :disabled="true">
                                <el-option v-for="item in select.select4" :label="item.staffName" :key="item.id" :value="item.id"></el-option>
                            </el-select>
                        </div>
                        <div class="sminput">
                            <label class="el-form-item__label">许可证编号</label>
                            <el-input v-model="select.selected4.licenceNumber" :disabled="true"></el-input>
                        </div>
                        <div class="sminput">
                            <label class="el-form-item__label">身份证号码</label>
                            <el-input v-model="select.selected4.staffId" :disabled="true"></el-input>
                        </div>
                    </div>
                    <div class="htit">爆破工程作业人员</div>
                    <div class="fath" ref="fath">
                        <div class="clearbox" v-if="blast.blast.length==0">
                            <div class="sminput">
                                <label class="el-form-item__label">技术员</label>
                                <el-input :disabled="true" value="暂无技术人员"></el-input>
                            </div>
                        </div>
                        <div class="clearbox" v-for="(j,index) in blast.blast" v-if="j.switch">
                            <div class="sminput">
                                <label class="el-form-item__label">技术员</label>
                                <el-select v-model="j.value" placeholder="请选择技术员" @change="del(j,j.value,index,0)" :disabled="j.disabled">
                                    <el-option v-for="item in j.list" :label="item.staffName" :key="item.id" :value="item.id"></el-option>
                                </el-select>
                            </div>
                            <div class="sminput" v-if="j.selected">
                                <label class="el-form-item__label">许可证编号</label>
                                <el-input v-model="j.selected.licenceNumber" :disabled="true"></el-input>
                            </div>
                            <div class="sminput lastsmal" v-if="j.selected">
                                <label class="el-form-item__label">身份证号码</label>
                                <el-input v-model="j.selected.staffId" :disabled="true"></el-input>
                            </div>
                            <a href="javascript:void(0)" class="add" @click="add(index,blast.blast,0)" v-if="j.add">
                                <i class="el-icon-circle-plus-outline"></i>
                            </a>
                        </div>
                        <div class="clearbox" v-if="blast.blast1.length==0">
                            <div class="sminput">
                                <label class="el-form-item__label">安全员</label>
                                <el-input :disabled="true" value="暂无安全人员"></el-input>
                            </div>
                        </div>
                        <div class="clearbox" v-for="(j,index) in blast.blast1" v-if="j.switch">
                            <div class="sminput">
                                <label class="el-form-item__label">安全员</label>
                                <el-select v-model="j.value" placeholder="请选择安全员" @change="del(j,j.value,index,1)" :disabled="j.disabled">
                                    <el-option v-for="item in j.list" :label="item.staffName" :key="item.id" :value="item.id"></el-option>
                                </el-select>
                            </div>
                            <div class="sminput" v-if="j.selected">
                                <label class="el-form-item__label">许可证编号</label>
                                <el-input v-model="j.selected.licenceNumber" :disabled="true"></el-input>
                            </div>
                            <div class="sminput lastsmal" v-if="j.selected">
                                <label class="el-form-item__label">身份证号码</label>
                                <el-input v-model="j.selected.staffId" :disabled="true"></el-input>
                            </div>
                            <a href="javascript:void(0)" class="add" @click="add(index,blast.blast1,1)" v-if="j.add">
                                <i class="el-icon-circle-plus-outline"></i>
                            </a>
                        </div>
                        <div class="fath" ref="fath">
                            <div class="clearbox" v-if="blast.blast2.length==0">
                                <div class="sminput">
                                    <label class="el-form-item__label">爆破员</label>
                                    <el-input :disabled="true" value="暂无爆破员"></el-input>
                                </div>
                            </div>
                            <div class="clearbox" v-for="(j,index) in blast.blast2" v-if="j.switch">
                                <div class="sminput">
                                    <label class="el-form-item__label">爆破员</label>
                                    <el-select v-model="j.value" placeholder="请选择施工审核人" @change="del(j,j.value,index,2)" :disabled="j.disabled">
                                        <el-option v-for="item in j.list" :label="item.staffName" :key="item.id" :value="item.id"></el-option>
                                    </el-select>
                                </div>
                                <div class="sminput" v-if="j.selected">
                                    <label class="el-form-item__label">许可证编号</label>
                                    <el-input v-model="j.selected.licenceNumber" :disabled="true"></el-input>
                                </div>
                                <div class="sminput lastsmal" v-if="j.selected">
                                    <label class="el-form-item__label">身份证号码</label>
                                    <el-input v-model="j.selected.staffId" :disabled="true"></el-input>
                                </div>
                                <a href="javascript:void(0)" class="add" @click="add(index,blast.blast2,2)" v-if="j.add">
                                    <i class="el-icon-circle-plus-outline"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="fath" ref="fath">
                        <div class="clearbox" v-if="blast.blast3.length==0">
                            <div class="sminput">
                                <label class="el-form-item__label">保管员</label>
                                <el-input :disabled="true" value="暂无保管员"></el-input>
                            </div>
                        </div>
                        <div class="clearbox" v-for="(j,index) in blast.blast3" v-if="j.switch">
                            <div class="sminput">
                                <label class="el-form-item__label">保管员</label>
                                <el-select v-model="j.value" placeholder="请选择保管员" @change="del(j,j.value,index,3)" :disabled="j.disabled">
                                    <el-option v-for="item in j.list" :label="item.staffName" :key="item.id" :value="item.id"></el-option>
                                </el-select>
                            </div>
                            <div class="sminput" v-if="j.selected">
                                <label class="el-form-item__label">许可证编号</label>
                                <el-input v-model="j.selected.licenceNumber" :disabled="true"></el-input>
                            </div>
                            <div class="sminput lastsmal" v-if="j.selected">
                                <label class="el-form-item__label">身份证号码</label>
                                <el-input v-model="j.selected.staffId" :disabled="true"></el-input>
                            </div>
                            <a href="javascript:void(0)" class="add" @click="add(index,blast.blast3,3)" v-if="j.add">
                                <i class="el-icon-circle-plus-outline"></i>
                            </a>
                        </div>
                    </div>
                    <div class="htit">安全评估单位及人员</div>
                    <div class="clearbox">
                        <div class="inputbox  findinput">
                            <label class="el-form-item__label">单位名称</label>
                            <el-input v-model="select.safe.ck.name" placeholder="请输入内容"></el-input>
                            <el-button slot="append" icon="el-icon-search" @click="find(select.safe.ck.name,4)" ></el-button>
                        </div>
                        <div class="inputbox">
                            <label class="el-form-item__label">许可证编号</label>
                            <div class="el-form-item__content">
                                <el-input v-model="select.safe.ck.licenceNumber" placeholder="请输入内容" :disabled="true"></el-input>
                            </div>
                        </div>
                    </div>
                    <div class="clearbox">
                        <div class="inputbox">
                            <label class="el-form-item__label">从业范围</label>
                            <div class="el-form-item__content">
                                <el-input v-model="select.safe.ck.home" placeholder="请输入内容" :disabled="true"></el-input>
                            </div>
                        </div>
                        <div class="inputbox">
                            <label class="el-form-item__label">许可证有效期</label>
                            <div class="el-form-item__content">
                                <el-input v-model="select.safe.ck.time" placeholder="请输入内容"  :disabled="true"></el-input>
                            </div>
                        </div>
                    </div>
                    <div class="fath" ref="fath">
                        <div class="clearbox" v-for="(i,index) in select.safe.safelist" v-if="i.switch">
                            <div class="ssll">
                                <label class="el-form-item__label">监理人员</label>
                                <el-select v-model="i.value" placeholder="请选择技术员" @change="del(i,i.value,index,4)" :disabled="i.disabled">
                                    <el-option v-for="item in i.list" :label="item.staffName" :key="item.id" :value="item.id"></el-option>
                                </el-select>
                                <label class="el-form-item__label">许可证编号</label>
                                <el-input v-model="i.selected.licenceNumber" placeholder="请输入内容" :disabled="true"></el-input>
                                <label class="el-form-item__label">身份证号码</label>
                                <el-input v-model="i.selected.staffId" placeholder="请输入内容" class="log" :disabled="true"></el-input>
                                <label class="el-form-item__label">作业级别</label>
                                <el-input v-model="level[i.selected.staffLevel-1]" placeholder="请输入内容" :disabled="true"></el-input>
    
                                <a href="javascript:void(0)" class="add" @click="add(index,select.safe.safelist,4)" v-if="i.add">
                                    <i class="el-icon-circle-plus-outline"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="fat">
                        <div class="htit">安全监管单位参加本项目的爆破作业人员名单</div>
                        <div class="clearbox">
                            <div class="inputbox findinput">
                                <label class="el-form-item__label"><font color="#f00" v-if="show">*</font>单位名称</label>
                                <el-input v-model="select.safe1.ck.name" placeholder="请输入内容"></el-input>
                                <el-button slot="append" icon="el-icon-search" @click="find(select.safe1.ck.name,1)"></el-button>
                            </div>
                            <div class="inputbox">
                                <label class="el-form-item__label">许可证编号</label>
                                <div class="el-form-item__content">
                                    <el-input v-model="select.safe1.ck.licenceNumber" placeholder="请输入内容" :disabled="true"></el-input>
                                </div>
                            </div>
                        </div>
                        <div class="clearbox">
                            <div class="inputbox">
                                <label class="el-form-item__label">从业范围</label>
                                <div class="el-form-item__content">
                                    <el-input v-model="select.safe1.ck.home" placeholder="请输入内容" :disabled="true"></el-input>
                                </div>
                            </div>
                            <div class="inputbox">
                                <label class="el-form-item__label">许可证有效期</label>
                                <div class="el-form-item__content">
                                    <el-input v-model="select.safe1.ck.time" placeholder="请输入内容":disabled="true"></el-input>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="fath" ref="fath">
                        <div class="clearbox" v-for="(i,index) in select.safe1.safelist" v-if="i.switch">
                            <div class="ssll">
                                <label class="el-form-item__label">监理人员</label>
                                <el-select v-model="i.value" placeholder="请选择技术员" @change="del(i,i.value,index,5)" :disabled="i.disabled">
                                    <el-option v-for="item in i.list" :label="item.staffName" :key="item.id" :value="item.id"></el-option>
                                </el-select>
                                <label class="el-form-item__label">许可证编号</label>
                                <el-input v-model="i.selected.licenceNumber" placeholder="请输入内容":disabled="true"></el-input>
                                <label class="el-form-item__label">身份证号码</label>
                                <el-input v-model="i.selected.staffId" placeholder="请输入内容" class="log" :disabled="true"></el-input>
                                <label class="el-form-item__label">作业级别</label>
                                <el-input v-model="level[i.selected.staffLevel-1]" placeholder="请输入内容" :disabled="true"></el-input>
    
                                <a href="javascript:void(0)" class="add" @click="add(index,select.safe1.safelist,5)" v-if="i.add">
                                    <i class="el-icon-circle-plus-outline"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="htit">安全警戒距离</div>
                    <div class="fath" ref="fath">
                        <div class="clearbox" v-for="(i,index) in select.long">
                            <div class="ssll">
                                <label class="el-form-item__label">方位</label>
                                <el-input v-model="i.where" placeholder="请输入内容"></el-input>
                                <label class="el-form-item__label" style="margin-left:40px;">保护对象名称</label>
                                <el-input v-model="i.name" placeholder="请输入内容" class="log"></el-input>
                                <label class="el-form-item__label" style="margin-left:40px;">核定安全距离</label>
                                <el-input v-model="i.jl" style="width:200px;" placeholder="请输入内容">
                                    <template slot="append">米/m
</template>
                            </el-input>
                            <a href="javascript:void(0)" class="add" @click="add1(select.long,index,3)" v-if="i.add">
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
                                <el-input v-model="blastnum.zy" placeholder="请输入内容">
<template slot="append">
     Kg
</template>
                                </el-input>
                            </div>
                        </div>
                         <div class="inputbox">
                            <div class="htit">雷管</div>
                            <div class="clearbox">
                                <label class="el-form-item__label">总数量</label>
                                <el-input v-model="blastnum.lg" placeholder="请输入内容">
<template slot="append">
     发数
</template>
                                </el-input>
                            </div>
                        </div>
                         <div class="inputbox">
                            <div class="htit">导爆管</div>
                            <div class="clearbox">
                                <label class="el-form-item__label">总数量</label>
                                <el-input v-model="blastnum.lbg" placeholder="请输入内容">
<template slot="append">
     米
</template>
                                </el-input>
                            </div>
                        </div>
                         <div class="inputbox">
                            <div class="htit">导爆索</div>
                            <div class="clearbox">
                                <label class="el-form-item__label">总数量</label>
                                <el-input v-model="blastnum.dbs" placeholder="请输入内容">
<template slot="append">
     米
</template>
                                </el-input>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="clearbox">
                    <div class="inputbox findinput">
                        <label class="el-form-item__label">运输公司名称</label>
                        <el-input v-model="select.find.name" placeholder="请输入内容"></el-input>
                        <el-button slot="append" icon="el-icon-search" @click="find(select.find.name,2)"></el-button>
                        <!-- <el-input v-model="form.transportCompanyId" placeholder="请输入内容"></el-input> -->
                    </div>
                    <div class="inputbox findinput">
                        <label class="el-form-item__label">仓储公司名称</label>
                        <el-input v-model="select.find1.name" placeholder="请输入内容"></el-input>
                        <el-button slot="append" icon="el-icon-search" @click="find(select.find1.name,3)"></el-button>
                    </div>
                </div>
                <div class="clearbox" style="padding-top:20px;">
                    <div class="inputbox">
                        <label class="el-form-item__label"style="font-size:12px;">爆破评估报告</label>
                        <div class="el-form-item__content">
                            <div class="el-input">
                                <div class="upload">
                                    <input type="file" @change="Acardpic($event,0)">
                                    <img  :src="img[0].src">
                                    <i class="el-icon-upload"></i>
                                    <p>点击上传评估报告</p>
                                </div>
                            </div>
                        </div>
                    </div>
                     <div class="inputbox">
                        <label class="el-form-item__label" style="font-size:12px;">爆破工程项目审批表</label>
                        <div class="el-form-item__content">
                            <div class="el-input">
                                <div class="upload">
                                   <input type="file" @change="Acardpic($event,1)">
                                    <img  :src="img[1].src">
                                    <i class="el-icon-upload"></i>
                                    <p>点击上传批文</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="dis_sub">
                    <a href="javascript:void(0)" class="sub" @click="sub('ruleForm')" >确定</a>
                </div>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
    import $http from "superagent";
    import Base64 from "js-base64";
    export default {
        data() {
            return {
                show:false,
                sel:{
                    list:[
                        {
                            name:"行政许可项目",
                            id:0
                        },
                        {
                            name:"非行政许可项目",
                            id:1
                        }
                    ],
                    val:0
                },
                person: {
                    uid: Base64.Base64.decode(sessionStorage.getItem("person")),
                    companyid: Base64.Base64.decode(sessionStorage.getItem("companyid"))
                },
                img: [ //图片数据
                    {
                        src: ""
                    }, //身份证照片
                    {
                        src: ""
                    }, //身份证照片 背面
                ],
                level: ["低", "中", "高"],
                load: false,
                rules: {
                    applyCompany: {
                        required: true,
                        message: '请输入委托单位',
                        trigger: 'blur'
                    },
                    applyCorporation: {
                        required: true,
                        message: '请输入委托单位法人',
                        trigger: 'blur'
                    },
                    projectName: {
                        required: true,
                        message: '请输入',
                        trigger: 'blur'
                    },
                    applyPhone: {
                        required: true,
                        message: '请输入委托单位法人',
                        trigger: 'blur'
                    },
                    projectLevel: {
                        required: true,
                        message: '请选择项目级别',
                        trigger: 'change'
                    },
                    projectAddress: {
                        required: true,
                        message: '请选择作业时间',
                        trigger: 'blur'
                    },
                    transportCompanyId: {
                        required: true,
                        message: '请选择作业时间',
                        trigger: 'blur'
                    },
                },
                blastnum: {
                    zy: "", //炸药
                    lg: "", //雷管
                    dbg: "", //导爆管
                    dbs: "" //导爆索
                },
                form: {
                    applyCompany: "", //申请公司
                    applyCorporation: "", //申请单位法人
                    projectName: "", //项目名称
                    applyPhone: "", // 申请单位联系电话
                    projectLevel: "", //项目级别
                    projectAddress: "", //作业点滴
                    beginTime: null, //开始时间
                    endTime: null, //结束时间
                    listPlanStaff: { //施⼯方案
    
                    },
                    listWorkStaff: { //作业人员
    
                    },
                    listCaution: { //警戒范围列表
    
                    },
                    projectSecurityDto: { //安全评估人员
    
                    },
                    transportCompanyId: "", //运输公司
                    storageCompanyId: "", //运输公司
    
                },
                select: {
                    blastselected:[],
                    blastselected1:[],
                    find: {
                        name: "",
                        id: ""
                    },
                    find1: {
                        name: "",
                        id: ""
                    },
                    select0: {
                        value: null,
                        list: [{
                                type: "高",
                                class: 3
                            },
                            {
                                type: "中",
                                class: 2
                            },
                            {
                                type: "低",
                                class: 1
                            }
                        ]
                    }, //项目级别
                    select1: [{ //施工设计人
                        licenceNumber: "",
                        value: "",
                        name: null,
                        add: true
                    }, ],
                    select2: { //施工审核人
                        licenceNumber: "",
                        value: "",
                        name: null
                    },
                    select3: { //批准人
                        licenceNumber: "",
                        value: "",
                        name: null
                    },
                    selected4: { //项目技术人员/项目负责人
                        licenceNumber: "",
                        value: "",
                        id: ""
                    },
                    safe: {
                        safelist: [],
                        ck: {
                            name: "",
                            licenceNumber: "",
                            home: "",
                        }
                    },
                    safe1: {
                        safelist: [],
                        ck: {
                            name: "",
                            licenceNumber: "",
                            home: "",
                        }
                    },
                    long: [ //安全警戒距离
                        {
                            where: null, //方位  东南西北 暂定
                            name: null,
                            jl:null, //
                            add:true,
                        }
                    ]
                },
                blast: {
                    blast: [], //爆破技术人员
                    blast1: [], //爆破安全人员
                    blast2: [], //爆破员
                    blast3: [], //保管员
                    blastselected:[],
                    blastselected1:[],
                    blastselected2:[],
                    blastselected3:[],
                },
                time: "",
                cjtime:""
            }
        },
        mounted() {
            //this.e();
            // this.publics.$AJAX("company/"+this.companyId+"/project/staff","get",null,e=>{
            //     this.select.select1=this.select.select2=this.select.select3=e;
    
            // })
            // 4技术人员   2安全员  1爆破员 3保管员
            if(this.$route.query.type==0 || !this.$route.query.type){
                this.sel.val=0;
                this.show=true;
            }else{
                this.sel.val=1;
                this.show=false;
            }
            
            this.ajax(4, (e, a) => { //技术人员 
                this.select.select4 = e;
                this.blast.blast = a; //爆破技术人员
                this.load = true;
            })
            this.ajax(2, (e, a) => { //安全人员
                this.blast.blast1 = a;
                this.load = true;
            })
            this.ajax(1, (e, a) => { //爆破人员
                this.blast.blast2 = a;
                this.load = true;
            })
            this.ajax(3, (e, a) => { //保管员
                this.blast.blast3 = a;
                this.load = true;
            })
        },
        methods: {
            indexck(e){
                this.$router.push({name:"bla_xg",query:{type:e}});
                window.history.go(0)
            },
            find(name, type) {
                if(!name){
                    this.$message({type:"error",message:"检查字段不能为空"})
                    return false;
                }
                this.publics.$AJAX("company/users", "get", {
                    companyName: name,
                    companyType: type
                }, e => {
                    if(e.companyId==null){
                            this.$message({type:"error",message:"查询失败,请仔细检查字段"})
                            return false;
                    }
                    // console.log(e)
                    // if (e.text.length == 0) {
    
                    //     this.$message({
                    //         type: "error",
                    //         message: "查询不到该公司"
                    //     })
                    //     return false;
                    // }
                   
                    if (type == 2 || type == 3) {
                         
                        if (type == 2) {
                            this.select.find.id = e.companyId;
                        }
                        if (type == 3) {
                            this.select.find1.id = e.companyId;
                        }
                        
                        return false;
                    }
                    let len = e.staffList.length;
                    let a = [];
                    if (e.length <= 0) return false;
    
                    else {
                        for (let i = 0; i < len; i++) {
                            a.push({
                                list: [],
                                switch: false,
                                add: false,
                                value: null,
                                disabled: false,
                                selected: {
                                    licenceNumber: "",
                                }
                            })
                        }
                        a[0].list = e.staffList;
                        a[0].add = a[0].switch = true;
                        // callback(e, a)
                        let newArr = {
                            name: name,
                            licenceNumber: e.licenceNumber,
                            home: e.workingRange,
                            time: e.licenceExpireTime,
                            id: e.companyId
                        };
                        if (type == 1) {
                            this.select.safe1.safelist = a;
                            this.select.safe1.ck = newArr;
                            this.show=true
                        }
                        if (type == 4) {
                            this.select.safe.safelist = a;
                            this.select.safe.ck = newArr
                        }
                        // console.log(this.select.safe1)
                        //
                    }
    
                    // this.blast=a;
                })
            },
            ajax(type, callback) {
                this.publics.$AJAX("company/" + this.person.companyid + "/project/staff", "get", {
                    staffType: type
                }, e => {
                    let len = e.length;
                    let a = [];
                    if (e.length <= 0) return false;
                    else {
                        for (let i = 0; i < len; i++) {
                            a.push({
                                list: [],
                                switch: false,
                                add: false,
                                value: null,
                                disabled: false,
                                selected: {
                                    licenceNumber: "",
                                }
                            })
                        }
                        a[0].list = e;
                        a[0].add = a[0].switch = true;
                        callback(e, a)
                    }
                    // this.blast=a;
                })
            },
            add1(Arr,index, type) { //追加事件
                //type 0  施工设计人   1安全评估单位及人员   2安全监管单位  3安全警戒距离
                    if (type == 0) {
                        if(!Arr[index].name) {this.$message({type:"error",message:"请输入设计人姓名"});return false;}
                        if(!Arr[index].licenceNumber) {this.$message({type:"error",message:"请输入许可证编号"});return false;}
                        if(!Arr[index].value) {this.$message({type:"error",message:"请输入身份证号码"});return false;}
                        Arr[index].add=false;
                        this.select.select1.push({
                            licenceNumber: "",
                            value: "",
                            name: "",
                            add: true
                        })
                    } else if (type == 3) {
                        if(!Arr[index].where) {this.$message({type:"error",message:"请输入安全警戒方位"});return false;}
                        if(!Arr[index].name) {this.$message({type:"error",message:"请输入保护对象名称"});return false;}
                        if(!Arr[index].jl) {this.$message({type:"error",message:"请输入核定安全距离"});return false;}
                        Arr[index].add=false;
                        this.select.long.push({
                            where: "", //方位  东南西北 暂定
                            name: "",
                            jl: "", //
                            add: true
                        })
                    }else{
                        return false;
                    }
                // if (index <= 2) {
    
                // } else {
                //     this.$message({
                //         type: "error",
                //         message: "无法添加更多施工人员"
                //     })
                // }
                // this.select.select1[index].add = false;
    
            },
            t(e) {
                this.form.beginTime = e[0].getTime();
                this.form.endTime = e[1].getTime();
                this.cjtime=(e[1].getTime()-e[0].getTime())/ (1000 * 60 * 60 * 24)
            },
            sk(e, id, switchs) {
                //e 为 哪个数据列表  id为选中id  switchs用来提交 判断的条件
                let index = e.findIndex(item => {
                    return item.id == id;
                });
                this.select.selected4 = e[index];
            },
            add(index, newArr, type) {
                if (newArr[index].list.length == 1) {
                    newArr[index].add = false;
                    return false;
                } else {
                    newArr[index + 1].add = true;
                }
                if (newArr[index].value == null) return false; //必须选择爆破员 否则无法增加
                newArr[index].add = false;
                newArr[index].disabled = true;
                let Arr = newArr[index].list;
                let Brr= Arr.filter(obj => obj.id == newArr[index].value)
                Arr = Arr.filter(obj => obj.id !== newArr[index].value)
                newArr[index + 1].list = Arr;
                newArr[index + 1].switch = true;
                if (type == 0) {
                    this.blast.blast = newArr;
                    this.blast.blastselected.push(Brr);
                }
                if (type == 1) {
                    this.blast.blast1 = newArr;
                    this.blast.blastselected1.push(Brr);
                }
                if (type == 2) {
                    this.blast.blast2 = newArr;
                    this.blast.blastselected2.push(Brr);
                }
                if (type == 3) {
                    this.blast.blast3 = newArr;
                    this.blast.blastselected3.push(Brr);
                }
                if (type == 4) {
                    this.select.safe.safelist = newArr;
                    this.select.blastselected.push(Brr);
                }
                if (type == 5) {
                    this.select.safe1.safelist = newArr;
                    this.select.blastselected1.push(Brr);
                }
            },
            sub(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        let listCaution = [],
                        listPlanStaff = [],
                        listWorkStaff=[];
                        if(this.select.select0.value==null){this.$message({type:"error",message:"请选择项目级别"});return false;}
                        if(this.form.beginTime==null || this.form.endTime==null){this.$message({type:"error",message:"请选择作业时间"});return false;}
                        if(this.select.select1[0].name==null){this.$message({type:"error",message:"请填写设计施工人"});return false;}
                        if(this.select.select2.name==null){this.$message({type:"error",message:"请填写施工审核人"});return false;}
                        if(this.select.select3.name==null){this.$message({type:"error",message:"请填写批准人"});return false;}
                        if(this.blast.blast.length==0){this.$message({type:"error",message:"请去添加技术人员"});return false;};
                        if(this.blast.blast1.length==0){this.$message({type:"error",message:"请去添加安全员"});return false;};
                        if(this.blast.blast2.length==0){this.$message({type:"error",message:"请去添加爆破员"});return false;};
                        if(this.blast.blast3.length==0){this.$message({type:"error",message:"请去添加保管员"});return false;};
                        if(this.select.safe.length==0){this.$message({type:"error",message:"请去添加安全评估单位人员"});return false;};
                        if(this.select.safe1.length==0 && this.show==true){this.$message({type:"error",message:"请去添加监管人员名单"});return false;};
                        if(this.blast.blastselected.length==0){this.$message({type:"error",message:"请选择技术员"});return false;};
                        if(this.blast.blastselected1.length==0){this.$message({type:"error",message:"请选择安全员"});return false;};
                        if(this.blast.blastselected2.length==0){this.$message({type:"error",message:"请选择爆破员"});return false;};
                        if(this.blast.blastselected3.length==0){this.$message({type:"error",message:"请选择保管员"});return false;};
                        if(this.select.blastselected.length==0){this.$message({type:"error",message:"请选择安全评估单位人员"});return false;};
                        if(this.select.blastselected1.length==0 && this.show==true){this.$message({type:"error",message:"请选择监管人员名单"});return false;}
                        if(this.select.long[0].where==null){this.$message({type:"error",message:"请填写方位"});return false;}
                        if(this.select.long[0].name==null){this.$message({type:"error",message:"请填写被保护单位"});return false;}
                        if(this.select.long[0].jl==null){this.$message({type:"error",message:"请填写核定安全距离"});return false;}
                        for (let val of this.select.long) {
                            listCaution.push({
                                'cautionObject': val.name,
                                "position": val.where,
                                "safeDistance": val.jl
                            })
                        }
                        for (let val of this.select.select1) {          //上面的那个施工人
                            listPlanStaff.push({ //施⼯方案人员列表
                                "id": "string", //人员id
                                "licenceNumber": val.licenceNumber, //许可证编号
                                "staffId": val.value, //人员身份证
                                "staffLevel": 0, //人员级别
                                "staffName": val.name, //人员名称
                                "staffType": 0 //人员类型
                            })
                        }
                        listPlanStaff.push({ //施⼯方案人员列表
                            "id": "string", //人员id
                            "licenceNumber": this.select.select2.licenceNumber, //许可证编号
                            "staffId": "string", //人员身份证
                            "staffLevel": 0, //人员级别
                            "staffName": this.select.select2.name, //人员名称
                            "staffType": 1 //人员类型
                        }, {
                            "id": "string", //人员id
                            "licenceNumber": this.select.select3.licenceNumber, //许可证编号
                            "staffId": "string", //人员身份证
                            "staffLevel": 0, //人员级别
                            "staffName": this.select.select3.name, //人员名称
                            "staffType": 2
                        })
    
                        let assessmentStaff1 = [],
                            assessmentStaff2 = [];
                            listWorkStaff=[...this.blast.blastselected,...this.blast.blastselected1,...this.blast.blastselected2,...this.blast.blastselected3]
                            assessmentStaff1=this.select.blastselected1;
                            assessmentStaff2=this.select.blastselected;
                            let projectSupervisorDto;
                            if(this.show){
                                projectSupervisorDto= { //安全评估单位
                                        "assessmentStaff": assessmentStaff1,
                                        "companyId": this.select.safe1.ck.id, //安全评估单位id
                                        "companyName": this.select.safe1.ck.name, //安全评估单位名称
                                        "licenceExpireTime": this.select.safe1.ck.time, //许可证到期时间
                                        "licenceNumber": this.select.safe1.ck.licenceNumber, //许可证编号
                                        "workingRange": this.select.safe1.ck.home //作业范围
                                }
                            }else{
                                projectSupervisorDto=null;
                            }
                        let projectAdd = {
                            "applyCompany": this.form.applyCompany, //申请公司
                            "applyCorporation": this.form.applyCorporation, //申请单位法人
                            "applyPhone": this.form.applyPhone, //申请单位联系电话
                            "beginTime": this.form.beginTime, //开始时间
                            "cityId": "string", //市级id          123123123123123123
                            "count": 0, //爆破次数
                            "districtId": "string", //区级id          123123123123123123
                            "endTime": this.form.endTime, //结束时间
                            "entrustCompanyId": this.person.companyid, //爆破公司id    
                            "inputMan": this.person.uid, //录入人ID
                            "listCaution": listCaution, //警戒
                            "listPlanStaff": listPlanStaff,
                            "listWorkStaff": listWorkStaff, //施工人员列表 需要修改
                            "policeId": "1111", //所属派出所Id       记一下  
                            "projectAddress": this.form.projectAddress, //作业地点
                            "projectLevel": this.select.select0.value, //项⽬级别
                            "projectManager": this.select.select4[0],
                            "projectName": this.form.projectName, //项⽬名称        炸药
                            "projectPyrotechnicsDtoList": [{ //火⼯品列表
                                    "pyrotechnicsId": "string", //火工品id         瞎几把填
                                    "pyrotechnicsName": "string", //火工品名称        瞎几把填
                                    "pyrotechnicsNumber": this.blastnum.zy, //火工品数量        
                                    "pyrotechnicsType": 0 //火工品型号       瞎几把填
                                }, { //火⼯品列表                                              雷管
                                    "pyrotechnicsId": "string", //火工品id         瞎几把填
                                    "pyrotechnicsName": "string", //火工品名称        瞎几把填
                                    "pyrotechnicsNumber": this.blastnum.lg, //火工品数量        
                                    "pyrotechnicsType": 1 //火工品型号       瞎几把填
                                },
                                { //火⼯品列表                                                导爆管
                                    "pyrotechnicsId": "string", //火工品id         瞎几把填
                                    "pyrotechnicsName": "string", //火工品名称        瞎几把填
                                    "pyrotechnicsNumber": this.blastnum.lbg, //火工品数量        
                                    "pyrotechnicsType": 2 //火工品型号       瞎几把填
                                }, { //火⼯品列表                                             //导爆索
                                    "pyrotechnicsId": "string", //火工品id         瞎几把填
                                    "pyrotechnicsName": "string", //火工品名称        瞎几把填
                                    "pyrotechnicsNumber": this.blastnum.dbs, //火工品数量        
                                    "pyrotechnicsType": 3 //火工品型号       瞎几把填
                                }
                            ],
                            "projectSupervisorDto": projectSupervisorDto,
                            "projectSecurityDto": { //监理单位
                                "assessmentStaff": assessmentStaff2,
                                "companyId": this.select.safe.ck.id, //监理单位id
                                "companyName": this.select.safe.ck.name, //监理单位名称storageCompanyId
                                "licenceExpireTime": this.select.safe.ck.time, //许可证到期时间
                                "licenceNumber": this.select.safe.ck.licenceNumber, //许可证编号
                                "workingRange": this.select.safe.ck.home
                            },
                            "projectType": 0, //项目类型
                            "provincialId": "string", //省级id          瞎几把填写
                            "storageCompanyId":this.select.find1.id, //仓库公司id
                            "transportCompanyId": this.select.find.id, //运输公司id
                            "assessmenTreportOssKey": this.form.assessmenTreportOssKey, //评估 
                            "examineOsskey": this.form.examineOsskey
                        }
                        
                       // return false;
                        this.publics.$AJAX("project/user/" + this.person.uid, "post", projectAdd, e => {
                            let load = this.$loading({
                                text: '登记成功',
                            });
                             setTimeout(e => {
                                 this.$router.push({name:"bla_check"})
                                 load.close();
                            }, 1000)

                        })
                    } else {
                        this.$message({
                            type:"error",
                            message:"提交失败！"
                        })
                        return false;
                    }
                });
            },
            del(e, id, index, type) {
             
                let newindex = e.list.findIndex(item => {
                    return item.id == id;
                });
                if (type == 0) {
                    this.blast.blast[index].selected = e.list[newindex];
                    this.blast.blastselected[index]=e.list[newindex]
                }
                if (type == 1) {
                    this.blast.blast1[index].selected = e.list[newindex];
                    this.blast.blastselected1[index]=e.list[newindex]
                }
                if (type == 2) {
                    this.blast.blast2[index].selected = e.list[newindex];
                    this.blast.blastselected2[index]=e.list[newindex]
                }
                if (type == 3) {
                    this.blast.blast3[index].selected = e.list[newindex];
                    this.blast.blastselected3[index]=e.list[newindex]
                }
                if (type == 4) {
                    this.select.safe.safelist[index].selected = e.list[newindex];
                    this.select.blastselected[index]=e.list[newindex]
                }

                if (type == 5) {
                    this.select.safe1.safelist[index].selected = e.list[newindex];
                    this.select.blastselected1[index]=e.list[newindex]
                    this.show=true
                }
            },
            Acardpic: function(imgFile, index) {
                let filextension = imgFile.target.value.substring(imgFile.target.value.lastIndexOf("."), imgFile.target.value.length);
              
                filextension = filextension.toLowerCase();
                  console.log(filextension)
                let file = imgFile.target.files[0],
                    fileSize = 0;
                fileSize = file.size / 1024;
                if (fileSize > 1024) {
                    this.$message({
                        type: "error",
                        message: "上传附件的不能超过1mb"
                    });
                    return false;
                } else {
                    if ((filextension != '.doc') && (filextension != '.docx') && (filextension != '.pdf')){
                        this.$message({
                            type: "error",
                            message: "对不起，系统仅支持docx,docx,pdf，请您调整格式后重新上传，谢谢!"
                        });
                        return false;
                    } else {
                        let fd = new FormData(),
                            render = new FileReader(),
                            _this = this;
                        let path, imgbox = imgFile.target.parentNode.querySelectorAll("img")[0];
                        fd.append("multipartFile", file);
                        let load = this.$loading({
                            text: '上传中',
                        });
                        this.publics.imgput(this.person.uid, fd, (err, res) => {
                            if (err || !res.ok) {
                                this.$message({
                                    type: "error",
                                    message: "上传文档 失败请重新上传"
                                });
                             
                            } else {
                                if(index==0){
                                    this.form.assessmenTreportOssKey=res.text;
                                }else{
                                    this.form.examineOsskey=res.text;
                                }
                            }
                            load.close()
                        })
                    }
                }
            }
        }
    }
</script>
