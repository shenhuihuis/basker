<template>
  <div class="logistics" v-if="show==0">
    <div class="bread">
      <div class="htit">爆破作业管理</div>
      <span>> 作业计划登记</span>
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
          <td width="20%">爆破时间</td>
          <td width="10%">爆破单位</td>
          <td width="20%">爆破项目</td>
          <td width="10%">爆破地点</td>
          <td width="10%">第几次爆破</td>
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
      <div class="htit">爆破作业管理</div>
      <span>> 作业计划登记 > 编辑</span>
    </div>
    <div class="syscontair" v-if="load" id="node">
      <div class="storage dep_sed">
        <div class="copbot noborder">
          <div class="pro-top">
            <div class="clearbox" style="overflow:hidden;width:100%;">
              <div class="conlf">
                <div class="clearbox">
                  <div class="inputbox">
                    <label class="el-form-item__label"><font color=""></font>项目列表</label>
                    <el-select v-model="select.value" slot="prepend" placeholder="请选择" v-if="!tofind" @change="ck">
                      <el-option v-for="item in select.ALL" :label="item.projectName" :key="item.id" :value="item.id"></el-option>
                    </el-select>
                    <div class="inputbox" v-else>
                      <el-input placeholder="请输入内容" class="input-with-select" style="width:60%;" v-model="findtxt" v-if="tofind"></el-input>
                      <el-button slot="append" icon="el-icon-search" @click="findother"></el-button>
                    </div>
                  </div>
  
                </div>
              </div>
              <div class="conrt">
                <div class="clearbox">
                  <label class="el-form-item__label" @click="toinfo(0)" v-if="!tofind">查询其他公司</label>
                  <label class="el-form-item__label" @click="toinfo(1)" v-if="tofind">查看所有项目</label>
                </div>
              </div>
            </div>
            <div class="pro-top">
              <div class="conlf">
                <div class='htit'>爆破信息</div>
                <div class="clearbox">
                  <div class="inputbox">
                    <label class="el-form-item__label">申请单位</label>
                    <el-input :value="select.selected.applyCompany" :disabled="true"></el-input>
                  </div>
                </div>
                <div class="clearbox">
                  <div class="inputbox">
                    <label class="el-form-item__label">作业时间</label>
                    <div class="el-input">
                      <el-date-picker v-model="time" type="date" placeholder="请选择开始日期" @change="times">
                      </el-date-picker>
                    </div>
                  </div>
                </div>
                <div class="clearbox" v-if="typeof select.selected.count=='number'">
                  <div class="inputbox">
                    <label class="el-form-item__label">第几次爆破</label>
                    <el-input :value="parseInt(select.selected.count)+1" :disabled="true" ></el-input>
                  </div>
                </div>
              </div>
              <div class="conrt" style="margin-top:53px;">
                <div class="clearbox">
                  <div class="inputbox">
                    <label class="el-form-item__label">项目级别</label>
                    <el-input :value="projectLevel[select.selected.projectLevel-1]" :disabled="true"></el-input>
                  </div>
                </div>
                <div class="clearbox">
                  <div class="inputbox">
                    <label class="el-form-item__label">作业地点</label>
                    <el-input :value="select.selected.projectAddress" :disabled="true"></el-input>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="newot">
            <el-form :model="blast" label-width="100px" ref="blast" class="demo-ruleForm">
              <div class="sminput">
                <div class="clearbox" v-for="(i,index) in blast.other">
                  <el-form-item label="炮孔数" :key="i.key" :prop="'other.' + index + '.pks'" :rules="[  
                      { required: true, message: '请输入泡孔数', trigger: 'blur' },
                      { type: 'number', message: '请输入数字', trigger: 'blur,change' }]">
                    <el-input placeholder="请输入内容" class="input-with-select" v-model.number="i.pks"></el-input>
                  </el-form-item>
                  <el-form-item label="深度" :key="i.key" :prop="'other.' + index + '.sd'" :rules="[  
                      { required: true, message: '请输入深度', trigger: 'blur' },
                      { type: 'number', message: '请输入数字', trigger: 'blur,change' }]">
                    <el-input placeholder="请输入内容" class="input-with-select" v-model.number="i.sd"></el-input>
                  </el-form-item>
                  <a class="add" @click='add(0,index)'> <i class="el-icon-circle-plus-outline" v-if="i.switch"></i></a>
                </div>
              </div>
              <div class="sminput">
                <div class="hti">工业炸药</div>
                <div class="clearbox">
                  <!-- <label>类型</label>
                    <el-select v-model="blast.blast.value">
                      <el-option  v-for="item in blast.blast.list" :label="item.staffName" :key="item.id" :value="item.id"></el-option>
                    </el-select> -->
                  <label>品名</label>
                  <el-select v-model="blast.blast.radio">
                    <el-option v-for="item in blast.blast.radiolist" :label="item.pyrotechnicsFlagName" :key="item.pyrotechnicsFlagName" :value="item.pyrotechnicsFlagName"></el-option>
                  </el-select>
                  <el-form-item :rules="[
                      { required: true, message: '请输入炸药型号', trigger: 'blur' },
                    ]" label="型号" prop="blast.type">
                    <el-input placeholder="请输入内容" class="input-with-select" v-model.number="blast.blast.type">
                      <template slot="append">毫米</template>
                    </el-input>
                  </el-form-item>
                  <el-form-item :rules="[
                    { required: true, message: '请输入炸药数量', trigger: 'blur' },
                    { type: 'number', message: '格式错误', trigger: 'blur,change' ,min:1}
                  ]" label="数量" prop="blast.num">
                    <el-input placeholder="请输入内容" class="input-with-select" v-model.number="blast.blast.num">
                      <template slot="append">
                        公斤
                      </template>
                    </el-input>
                  </el-form-item>
                </div>
              </div>
              <div class="sminput">
                <div class="hti">雷管</div>
              </div>
              <div class="sminput mgb0" v-for="(i,index) in blast.lg">
                <div class="clearbox">
                  <el-form-item :key="i.key" label="段别" :prop="'lg.' + index + '.d'" :rules=" [
                    { required: true, message: '请输入段别数量', trigger: 'blur' },
                    { type: 'number', message: '段别范围为0～20', trigger: 'blur,change' ,min:0,max:20}
                  ]">
                    <el-input class="sm no" v-model.number="i.d">
                      <template slot="append">
                        段
                      </template>
                  </el-input>
                </el-form-item>
                <el-form-item :key="i.key" label-width="0":prop="'lg.' + index + '.m'" :rules=" [
                  { required: true, message: '请输入段别数量', trigger: 'blur' },
                  { type: 'number', message: '格式错误', trigger: 'blur,change' ,min:1}
                ]" >
                <el-input class="sm" v-model.number="i.m">
                  <template slot="append">
                    米
                  </template>
                </el-input>
               </el-form-item>

               <el-form-item :key="i.key"  label="数量" :prop="'lg.' + index + '.num'" :rules=" [
                  { required: true, message: '请输入雷管数量', trigger: 'blur' },
                  { type: 'number', message: '格式错误', trigger: 'blur,change' ,min:1}
                ]" >
                <el-input  v-model.number="i.num">
                    <template slot="append">
                      发
                    </template>
                </el-input>
               </el-form-item>
               <!--    <el-form-item :key="i.key" label="公共编码" :prop="'lg.' + index + '.infit'" :rules=" [
                  { required: true, message: '请输入公共编码', trigger: 'blur' }
                ]" >
                  <el-input  class="sm" v-model="i.infit">
                  </el-input>
                </el-form-item>



                  <el-form-item :key="i.key" label="开始编号"  :prop="'lg.' + index + '.start'" :rules=" [
                  { required: true, message: '请输入开始编号', trigger: 'blur' },
                  { type: 'number', message: '格式错误', trigger: 'blur,change' ,min:1}
                ]" >
                    <el-input class="ssm" v-model.number="i.start"   @blur="ky(index)"> 
                    </el-input>
                  </el-form-item>
                 <el-form-item :key="i.key" label="结束编号"  :prop="'lg.' + index + '.end'" :rules=" [
                  { required: true, message: '请输入结束编号', trigger: 'blur' },
                  { type: 'number', message: '格式错误', trigger: 'blur,change' ,min:1}
                ]" >
                    <el-input class="ssm" v-model.number="i.end" @blur="ky(index)" > 
                    </el-input>
                  </el-form-item>
                 <el-button plain @click="see(index)"> 预览</el-button>-->
                <a href="javascript:void(0)" class="add" @click="add(1,index)" v-if="i.switch">
                  <i class="el-icon-circle-plus-outline"></i>
                </a>
                 
              </div>
            </div>
            <div class="sminput" style="margin-top:20px;">
              <div class="clearbox">
                <label class="hti">导爆管</label>
                 <el-form-item  prop="dbg" label-width="0" class="lf" style="margin-right:20px;" :rules=" [
                    { required: true, message: '请输入段别数量', trigger: 'blur' },
                    { type: 'number', message: '格式错误', trigger: 'blur,change' ,min:1}
                  ]">
                  <el-input v-model.number="blast.dbg">
                    <template slot="append">
                      米
                    </template>
                  </el-input>
                </el-form-item>

                <label class="hti">导爆索</label>
                 <el-form-item  prop="dbs" label-width="0" class="lf" style="margin-right:20px;">
                  <el-input v-model.number="blast.dbs">
                    <template slot="append">
                        米
                    </template>
                  </el-input>
                </el-form-item>
              </div>
            </div>
              
            </el-form>
          </div>
          
          <div class="procter">
            <div class="conlf">
              <div class="clearbox">
                <div class="sml">
                  <div class="clearbox">
                    <div class="inputbox">
                      <label class="el-form-item__label">技术员</label>
                      <el-select v-model="select.listWorkStaff.select.value" slot="prepend" @change="mk(select.listWorkStaff.select,select.listWorkStaff.select.value,0)">
                        <el-option v-for="item in select.listWorkStaff.select.list" :label="item.staffName" :key="item.id" :value="item.id"></el-option>
                      </el-select>
                    </div>
                  </div>
                  <div class="clearbox">
                    <div class="inputbox">
                      <label class="el-form-item__label">照片</label>
                      <img width="120" height="120" :src="select.listWorkStaff.select.selected.staffPhotoOssCode">
                    </div>
                  </div>
                </div>
  
                <div class="sml">
                  <div class="clearbox">
                    <div class="inputbox">
                      <label class="el-form-item__label">安全员</label>
                      <el-select v-model="select.listWorkStaff.select0.value" slot="prepend" @change="mk(select.listWorkStaff.select0,select.listWorkStaff.select0.value,1)">
                        <el-option v-for="item in select.listWorkStaff.select0.list" :label="item.staffName" :key="item.id" :value="item.id"></el-option>
                      </el-select>
                    </div>
                  </div>
                  <div class="clearbox">
                    <div class="inputbox">
                      <label class="el-form-item__label">照片</label>
                      <img width="120" height="120" :src="select.listWorkStaff.select0.selected.staffPhotoOssCode">
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
                      <label class="el-form-item__label">爆破员</label>
                      <el-select v-model="select.listWorkStaff.select1.value" slot="prepend" placeholder="请选择" @change="mk(select.listWorkStaff.select1,select.listWorkStaff.select1.value,2)">
                        <el-option v-for="item in select.listWorkStaff.select1.list" :label="item.staffName" :key="item.id" :value="item.id"></el-option>
                      </el-select>
                    </div>
                  </div>
                  <div class="clearbox">
                    <div class="inputbox">
                      <label class="el-form-item__label">照片</label>
                      <img width="120" height="120" :src="select.listWorkStaff.select1.selected.staffPhotoOssCode">
                    </div>
                  </div>
                </div>
                <div class="sml">
                  <div class="clearbox">
                    <div class="inputbox">
                      <label class="el-form-item__label">保管员</label>
                      <el-select v-model="select.listWorkStaff.select2.value" slot="prepend" placeholder="请选择" @change="mk(select.listWorkStaff.select2,select.listWorkStaff.select2.value,3)">
                        <el-option v-for="item in select.listWorkStaff.select2.list" :label="item.staffName" :key="item.id" :value="item.id"></el-option>
                      </el-select>
                    </div>
                  </div>
                  <div class="clearbox">
                    <div class="inputbox">
                      <label class="el-form-item__label">照片</label>
                      <img width="120" height="120" alt="" :src="select.listWorkStaff.select2.selected.staffPhotoOssCode">
                    </div>
                  </div>
                </div>
  
              </div>
            </div>
          </div>
          <div class="probot" v-if="show==2">
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
              <div class="clearbox">
                <div class="inputbox">
                  <label class="el-form-item__label">身份证号码</label>
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
          <toast v-bind:img="test"></toast>
          <div class="dis_sub"><a href="javascript:void(0);" @click="submit('blast')">登记</a></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Base64 from "js-base64";
  import toast from "../../components/toast";
  import domtoimage from 'dom-to-image';
  export default {
    data() {
      return {
        test:"",
        rules: {
          blast: {
            num: [{
                required: true,
                message: '请输入',
                trigger: 'blur'
              },
              {
                type: "number",
                required: true,
                message: '只能输入数字',
                trigger: 'blur'
              }
            ]
          }
        },
        load: false, //页面加载完成
        time: "", //时间
        find: "", //查询接口
        findtxt: "",
        show:1,
        tofind: false,
        form: {
          name: ""
        },
        person: {
          uid: Base64.Base64.decode(sessionStorage.getItem("person")),
          companyid: Base64.Base64.decode(sessionStorage.getItem("companyid"))
        },
        blast: {
          blast: { //炸药
            list: [], //炸药类型    暂无
            value: "", //    暂无
            type: "", //炸药类型
            selected: {}, //选中炸药 暂无
            radiolist: [ //品名
  
            ],
            radio: "",
            num: null, //数量
          },
          lg: [{
            d: "", //段别
            m: "", //米
            infit: "", //公共编码
            start: "", //开始编号
            end: "", //结束编号
            num: "",
            switch: true
          }], //雷管
          dbg: "", //导爆管米数
          dbs: "", //导爆索米数
          other: [{
            pks: "",
            sd: "",
            switch: true
          }] //其他   炮孔数  深度
        },
        projectLevel: ["低", "中", "高"],
        select: {
          value: "",
          ALL: [],
          selected: {},
          listWorkStaff: {
            select: {
              list: [],
              value: "",
              selected: {}
            }, //技术员
            select0: {
              list: [],
              value: "",
              selected: {}
            }, //安全员
            select1: {
              list: [],
              value: "",
              selected: {}
            }, //爆破员
            select2: {
              list: [],
              value: "",
              selected: {}
            }, //保管员
          }
        }
      };
    },
    components:{
      "toast":toast
    },
    mounted() {
      this.publics.$AJAX("pyrotechnicsType", "get", null, e => {
          this.blast.blast.radiolist = e;
      })
      this.info()
      //console.log()
    },
    methods: {
      
      toinfo(type){
          if(type==0){
            this.tofind=true;
          }else{
            this.tofind=true;
            this.info();
          }
          
      },
      findother(){
         this.info(this.findtxt);
         this.tofind=false;
      },
      info(name){
        this.publics.$AJAX("company/" + this.person.companyid + "/projects/desc", "get", {projectName:name}, e => {
          this.load = true;
          if(e.length==0){
            this.$message({
              type:"error",
              message:"暂无项目"
            });
            return false;
          }
          this.select.ALL = e;
        })
      },
      times(e) {
        this.time = e.getTime();
      },
      j(e, name, number, type) {
        // 1.炸药 2.雷管 3.导爆管  4.导爆索  blast.blast.radio
        let num = [{
            num: 1,
            name: "炸药"
          },
          {
            num: 2,
            name: "雷管"
          },
          {
            num: 3,
            name: "导爆管"
          },
          {
            num: 4,
            name: "导爆索"
          },
        ]
        let blast = {
          "pyrotechnicsFlag": num[e].num, //火工品标记
          "pyrotechnicsId": num[e].num, //火工品id
          "pyrotechnicsName": name, //火工品名称
          "pyrotechnicsNumber": number, //火工品数量
          //"pyrotechnicsType": num[e].num      //火工品类型
        };
        if (type) { //雷管
          blast.pyrotechnicsType = type;
        }
        return blast;
      },
      submit(formName) {
         var node = document.getElementById('node');
              domtoimage.toPng(node)
              .then(function(dataUrl){
                  var img = new Image();
                  img.src = dataUrl;
                  document.body.appendChild(img);
              })
            return false;
        if(!this.select.value){
          this.$message({
            type:"error",
            message:"请选择项目名称"
          })
          return false;
        }
        if(!this.time){
          this.$message({
            type:"error",
            message:"请选择作业时间"
          })
          return false;
        }
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let depth = [];
            for (let val of this.blast.other) { //深度 炮孔数量
              depth.push({
                "depth": val.sd,
                "holes": val.pks
              })
            };
            depth.push(this.j(0, this.blast.blast.radio, this.blast.blast.num, this.blast.blast.type)); //炸药
            for (let val of this.blast.lg) {
              depth.push(this.j(1, "雷管", val.num, val.d + "-" + val.m));
            }
            depth.push(this.j(2, "导爆管", this.blast.dbg, null))
            depth.push(this.j(3, "导爆索", this.blast.dbs, null))
            let projectWorkAddDto = {
              "custodianId": this.select.listWorkStaff.select2.value,
              //保管员id
              "explosiveManId": this.select.listWorkStaff.select1.value,
              //爆破员id
              "inputMan": this.person.uid,
              //录入人ID
              "projectId": this.select.value,
              //项目id
              "projectWorkPyrotechnicsDtoList": depth,
              "securityManId": this.select.listWorkStaff.select0.value,
              //安全员id
              "technicianId": this.select.listWorkStaff.select.value,
              //术员id
              "workTime": this.time //作业时间
            };
             
            /*this.publics.$AJAX("projectWork/users/" + this.person.uid, "post", projectWorkAddDto, e => {
                let load = this.$loading({
                      text: '登记成功',
                });
                setTimeout(e => {
                    window.history.go(0
                    
                    )
                    load.close();
                }, 1000)
            })*/
          }
        })
      },
      ky(index) {
        let m = this.blast.lg[index];
        if (m.start > m.end && m.end) {
          this.blast.lg[index].start = m.end - 1;
        }
  
      },
      fd() {
  
      },
      /*see(index) {
          let arr = this.blast.lg[index];
          let lr = arr.d + "段" + arr.m + "米",
            crr = "";
          let brr=["0000","000","00","0"],n="";
          // for(let [index,val] of brr.entries()){
          //   if(arr<val){
          //     n=val;
          //   }
          // }
          
          for (let i = arr.start; i <= arr.end; i++) {
            switch(i.toString().length){
            case 1:
              n=brr[0]+i
              break;
            case 2:
              n=brr[1]+i;
              break;
            case 3:
              n=brr[2]+i;
              break;
            case 4:
              n=brr[3]+i;
              break;
            }
            crr += "<font size='4'>" + arr.infit+ n+ "</font></br>";
    
          }
          this.$alert(crr, lr, {
            dangerouslyUseHTMLString: true,
            customClass: "mybox"
          });
        },*/
      ck(id) {
        let newindex = this.select.ALL.findIndex(item => {
          return item.id == id;
        });
        let nArr = this.select.ALL[newindex],
          Brr0 = [],
          Brr1 = [],
          Brr2 = [],
          Brr3 = [];
        this.select.listWorkStaff.select.value = "";
        this.select.listWorkStaff.select0.value = "";
        this.select.listWorkStaff.select1.value = "";
        this.select.listWorkStaff.select2.value = "";
        this.select.listWorkStaff.select.selected = {};
        this.select.listWorkStaff.select0.selected = {};
        this.select.listWorkStaff.select1.selected = {};
        this.select.listWorkStaff.select2.selected = {};
        this.select.selected = nArr;
        for (let val of nArr.listWorkStaff) {
          switch (val.staffType) {
            case 4:
              Brr0.push(val);
              break;
            case 2:
              Brr1.push(val);
              break;
            case 1:
              Brr2.push(val);
              break;
            case 3:
              Brr3.push(val);
  
              break;
          }
        }
        this.select.listWorkStaff.select.list = Brr0;
        this.select.listWorkStaff.select0.list = Brr1;
        this.select.listWorkStaff.select1.list = Brr2;
        this.select.listWorkStaff.select2.list = Brr3;
      },
      mk(Arr, id, m) {
        let newindex = Arr.list.findIndex(item => {
          return item.id == id;
        });
        let img = Arr.list[newindex].staffPhotoOssCode;
        if (m == 0) {
             this.select.listWorkStaff.select.selected.staffPhotoOssCode =img
          
        } else if (m == 1) {
            this.select.listWorkStaff.select0.selected.staffPhotoOssCode =img;
         
        } else if (m == 2) {
            this.select.listWorkStaff.select1.selected.staffPhotoOssCode = img;
        } else {
            this.select.listWorkStaff.select2.selected.staffPhotoOssCode = img;

        }
      },
      add(type, index) {
  
        //type 0  泡孔数量
        let arr;
        if (type == 0) {
          arr = {
            pks: "",
            sd: "",
            switch: true
          }
          this.blast.other[index].switch = false;
          this.blast.other.push(arr);
        } else {
          arr = {
            d: "", //段别
            m: "", //米
            /* infit: "", //公共编码
             start: "", //开始编号
             end: "", //结束编号*/
            switch: true
          }
          this.blast.lg[index].switch = false;
          this.blast.lg.push(arr);
        }
      }
    }
  };
</script>
