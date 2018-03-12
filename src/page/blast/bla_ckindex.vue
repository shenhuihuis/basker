<template>
    <div v-if="load">
        <div class="bread">
            <div class="htit">爆破项目登记管理</div>
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
        <div class="listbox" v-if="lists">
            <table cellpadding=0 cellspacing=0>
                <thead>
                    <td width="20%">项目时间</td>
                    <td width="10%">项目名称</td>
                    <td width="20%">作业地点</td>
                    <td width="10%">项目负责人</td>
                    <td width="10%">监理单位</td>
                    <td width="10%">录入员</td>
                    <td width="20%">操作</td>
                </thead>
                <tbody>
                    <tr v-for="i in lists.data">
                        <td>{{i.createTime|timer}}</td>
                        <td>{{i.projectName}}</td>
                        <td>{{i.projectAddress}}</td>
                        <td>{{i.principal}}</td>
                        <td>{{i.supervisorCompanyName}}</td>
                        <td></td>
                        <td>
                            <router-link :to="{name:'bla_xg'}">查看</router-link>
                            <router-link :to="{name:'bla_xg'}">编辑</router-link>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="page">
                <el-pagination
                    :current-page="form.page"
                    @current-change="handleCurrentChange"
                    layout="prev, pager, next"
                    :total="lists.count">
                </el-pagination>
            </div>
        </div>
        <div class="nobg" v-else></div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                load:false,
                time: "",
                find: "",
               // Arr:this.publics.person,
                lists:null,
                companyId:sessionStorage.getItem("companyid"),
                form:{
                    companyId:"4",
                    page:1,
                    size:10
                },
                
            }
        },
        mounted() {
            this.list();
        },
        filters:{
            timer(e){
                let data=new Date(e);
                return e=data.getFullYear()+"年"+(data.getMonth()+1)+"月"+data.getDate()+"日";
            },  
              
        },
        methods: {
            list(){
                this.publics.$AJAX("company/"+this.companyId+"/projects","get",this.form,e=>{
                    if(e.count==0)
                        this.lists=null;
                    else{
                        this.lists=e;
                    }
                    this.load=true;
                })
                
            },
            handleCurrentChange(val){
                this.form.page=val;
                this.list();
            }
        }
    }
</script>