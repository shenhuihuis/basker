<template>
    <div class="sysindex">
        <div class="colist" v-if="show==0">
            <div class="bread">
                <div class="htit">仓储管理</div>
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
                    <a href="javascript:void(0);" class="add" @click="show=1">添加</a>
                </div>
            </div>
            <div class="listbox">
                <table cellpadding=0 cellspacing=0>
                    <thead>
                        <td width="20%">仓库登记时间</td>
                        <td width="10%">爆破公司</td>
                        <td width="20%">项目名称</td>
                        <td width="10%">仓库名</td>
                        <td width="20%">录入员</td>
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
                                <a href="javascript:void(0)"  @click="show=1">查看</a>
                                <a href="javascript:void(0)">编辑</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="page"></div>
            </div>
        </div>
        <div v-else>
            <div class="bread">
                <div class="htit">仓储管理</div>
                <span>> 查看</span>
            </div>
            <div class="syscontair">
                <div class="storage">
                    <div class="contp">
                        <div class="clearbox">
                            <div class="inputbox">
                                <label class="el-form-item__label">委托单位</label>
                                <el-input v-model="form.name" placeholder="请输入内容"></el-input>
                            </div>
                        </div>
                        <div class="clearbox">
                            <div class="inputbox">
                                <label class="el-form-item__label">仓库名称</label>
                                <el-input v-model="form.name" placeholder="请输入内容"></el-input>
                            </div>
                        </div>
                        <div class="clearbox">
                            <div class="inputbox">
                                <label class="el-form-item__label">入库时间</label>
                                <el-input v-model="form.name" placeholder="请输入内容"></el-input>
                            </div>
                        </div>
                    </div>
                    <div class="copbot">
                        <div class='htit'>结存余辆</div>
                        <div class="conlf">
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
                        </div>
                        <div class="conrt">
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
                        </div>
                    </div>
                    <div class="listbox">
                            <div class="radio">
                                <el-radio-group v-model="radio">
                                    <el-radio :label="3">购买配送（2）</el-radio>
                                    <el-radio :label="6">出库配送（8）</el-radio>
                                    <el-radio :label="9">退库配送（5）</el-radio>
                                </el-radio-group>
                            </div>
                        
                        <table cellpadding=0 cellspacing=0>
                            <thead>
                                <td width="20%">录入项目时间</td>
                                <td width="10%">项目名称</td>
                                <td width="20%">作业地点</td>
                                <td width="20%">第几次爆破</td>
                                <td width="10%">类型</td>
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
                                        <a href="javascript:void(0);" @click="show=1">查看</a>
                                        <a href="javascript:void(0);">编辑</a>
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
</template>
<script>
    export default {
        data() {
            return {
                time: "",
                find: "",
                show:0  ,
                radio: 6,
                form: {
                    name: "",
                    xm: "",
                    cs: ""
                },
            }
        }
    }
</script>
