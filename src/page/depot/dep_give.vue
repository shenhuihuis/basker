<template>
    <div class="sysindex">
        <div class="colist" v-if="show==0">
            <div class="bread">
                <div class="htit">仓库出库登记</div>
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
                        <td width="10%">项目名称</td>
                        <td width="20%">第几次爆破</td>
                        <td width="10%">仓库名</td>
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
                                <a href="javascript:void(0)" @click="show=1">查看</a>
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
                <div class="htit">销售配送入库</div>
                <span>> 查看</span>
            </div>
            <div class="syscontair">
                <div class="storage dep_sed">
                    <div class="copbot noborder">
                        <div class="conlf">
                            <div class='htit'>托管信息</div>
                            <div class="clearbox">
                                <div class="inputbox">
                                    <label class="el-form-item__label">托管单位</label>
                                    <el-input v-model="form.name" placeholder="请输入内容"></el-input>
                                </div>
                            </div>
                            <div class="clearbox">
                                <div class="inputbox">
                                    <label class="el-form-item__label">托管项目</label>
                                    <el-input v-model="form.name" placeholder="请输入内容"></el-input>
                                </div>
                            </div>
                            <div class="clearbox">
                                <div class="inputbox">
                                    <label class="el-form-item__label">第几次爆破</label>
                                    <el-input v-model="form.name" placeholder="请输入内容"></el-input>
                                </div>
                            </div>
                            <div class="clearbox">
                                <div class="inputbox">
                                    <label class="el-form-item__label">出仓时间</label>
                                    <el-input v-model="form.name" placeholder="请输入内容"></el-input>
                                </div>
                            </div>
                            <div class="clearbox">
                                <div class="inputbox">
                                    <label class="el-form-item__label">所在仓库</label>
                                    <el-select v-model="value" placeholder="请选择">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                                        </el-option>
                                    </el-select>
                                </div>
                            </div>
                            <div class="clearbox">
                                <div class="inputbox">
                                    <label class="el-form-item__label">驾驶员</label>
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
                                    <label class="el-form-item__label">押运员</label>
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
                                    <label class="el-form-item__label">配送车辆</label>
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
                            <div class='htit'>仓库保管人员</div>
                            <div class="clearbox">
                                <div class="sml">
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
                                            <label class="el-form-item__label">照片</label>
                                            <img width="120" height="120" alt="">
                                        </div>
                                    </div>
                                </div>
                                 <div class="sml">
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
                                            <label class="el-form-item__label">照片</label>
                                            <img width="120" height="120" alt="">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="clearbox">
                                <div class="inputbox">
                                    <label class="el-form-item__label">录入人</label>
                                    <el-input class="small" v-model="form.name" placeholder="请输入内容"></el-input>
                                </div>
                            </div>
                        </div>
                        <div class="conrt">
                            <div class='htit'>出仓数量</div>
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
                    </div>
                     <div class="dis_sub"><a href="javascript:void(0);">确认并批准</a></div>
                </div>
            </div>
        </div>
        <preview></preview>
    </div>
</template>
<script>
    import dep_preview from "../../components/dep_preview"
    export default {
        data() {
            return {
                time: "",
                find: "",
                show:0,
                radio: 6,
                form: {
                    name: "",
                    xm: "",
                    cs: ""
                },
                options: [{
                    value: '选项1',
                    label: '黄金糕'
                }],
                value: ''
            }
        },
        components:{
            "preview":dep_preview
        }
    }
</script>
