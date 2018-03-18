<template>
    <div v-if="load">
        <div class="logistics" v-if="show==0">
            <div class="bread">
                <div class="htit">企业及人员管理</div>
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
                        <td width="20%">姓名</td>
                        <td width="20%">身份证号码</td>
                        <td width="20%">联系方式</td>
                        <td width="20%">人员类型</td>
                        <td width="20%">操作</td>
                    </thead>
                    <tbody>
                        <tr v-for="i in lists.data">
                            <td>{{i.staffName}}</td>
                            <td>{{i.staffId}}</td>
                            <td>{{i.mobilePhone}}</td>
                            <td>{{staffTypeFlag[i.staffTypeFlag-1]}}</td>
                            <td>
                                <a href="javascript:void(0);" @click="see(i.id,2)">查看</a>
                                <a href="javascript:void(0);" @click="bj(i.id,3)">编辑</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="page">
                    <el-pagination :current-page="comlist.page" @current-change="handleCurrentChange" layout="prev, pager, next" :total="lists.count">
                    </el-pagination>
                </div>
            </div>
            <div class="nobg" v-else></div>
        </div>
        <div class="logistics" v-else>
            <div class="bread">
                <div class="htit">企业及人员管理</div>
                <span>(编辑)</span>
            </div>
            <div class="consys">
                <div class="appform">
                    <el-form :model="form" :rules="rules" ref="ruleForm" class="demo-ruleForm">
                        <div class="clearbox">
                            <div class="inputbox">
                                <el-form-item label="人员姓名" prop="name">
                                    <el-input v-model="form.name" placeholder="请输入内容" prop="name" :disabled="show==2"></el-input>
                                </el-form-item>
                            </div>
                            <div class="inputbox">
                                <el-form-item label="身份证号码" prop="idcard">
                                    <el-input v-model="form.idcard" placeholder="请输入内容" :disabled="show==2"></el-input>
                                </el-form-item>
                            </div>
                        </div>
                        <div class="clearbox">
                            <div class="inputbox">
                                <el-form-item label="实际居住地" prop="address">
                                    <el-input v-model="form.address" placeholder="请输入内容" :disabled="show==2"></el-input>
                                </el-form-item>
                            </div>
                            <div class="inputbox">
                                <el-form-item label="联系电话" prop="tel">
                                    <el-input v-model="form.tel" placeholder="请输入内容" :disabled="show==2"></el-input>
                                </el-form-item>
                            </div>
                        </div>
                        <div class="clearbox">
                            <div class="inputbox">
                                <el-form-item label="许可证编号" prop="xkz">
                                    <el-input v-model="form.xkz" placeholder="请输入内容" :disabled="show==2"></el-input>
                                </el-form-item>
                            </div>
                            <div class="inputbox">
                                <el-form-item label="手机号码" prop="phone">
                                    <el-input v-model="form.phone" placeholder="请输入内容" :disabled="show==2"></el-input>
                                </el-form-item>
                            </div>
                        </div>
                        <div class="clearbox">
                            <div class="inputbox">
                                <label class="el-form-item__label">人员类型</label>
                                <el-select v-model="select.value1" @change="select1" :disabled="show==2">
                                    <el-option v-for="item in select.select1" :label="item.type" :key="item.class" :value="item.class">
                                    </el-option>
                                </el-select>
                            </div>
                            <div class="inputbox" v-show='selectSwitch'>
                                    <el-select v-model="select.value2" :disabled="show==2">
                                        <el-option v-for="item in select.select2" :label="item.type" :key="item.class" :value="item.class">
                                        </el-option>
                                    </el-select>
                               
                            </div>
                        </div>
                        <div class="clearbox" v-if="ck">
                            <div class="inputbox">
                                <el-form-item label="系统账号" prop="loginname" :disabled="show==2">
                                    <el-input v-model="form.loginname" placeholder="请输入内容"></el-input>
                                </el-form-item>
                            </div>
                            <div class="inputbox">
                                <el-form-item label="系统密码" prop="loginname" :disabled="show==2">
                                    <el-input v-model="form.password" placeholder="请输入内容"></el-input>
                                </el-form-item>
                            </div>
                        </div>
                        <div class="clearbox">
                            <div class="inputbox">
    
                            </div>
                            <div class="inputbox">
                                <el-form-item label="户籍所在地" prop="hj">
                                    <el-input v-model="form.hj" placeholder="请输入内容" :disabled="show==2"></el-input>
                                </el-form-item>
                            </div>
                        </div>
                        <div class="clearbox">
                            <div class="inputbox">
                                <label class="el-form-item__label">身份证照片</label>
                                <div class="el-form-item__content">
                                    <div class="upload">
                                        <input type="file" @change="Acardpic($event,0)" :disabled="show==2">
                                        <img v-if="show==2 || show==3" style="opacity:1;" :src="img[0].src">
                                        <img v-else>
                                        <i class="el-icon-upload"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="inputbox">
                                <label class="el-form-item__label">身份证照片（背面）</label>
                                <div class="el-form-item__content">
                                    <div class="upload">
                                        <input type="file" @change="Acardpic($event,1)" :disabled="show==2">
                                        <img v-if="show==2 || show==3" style="opacity:1;" :src="img[1].src">
                                        <img v-else>
                                        <i class="el-icon-upload"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="clearbox">
                            <div class="inputbox">
                                <label class="el-form-item__label">资格证书</label>
                                <div class="el-form-item__content">
                                    <div class="upload">
                                        <input type="file" @change="Acardpic($event,2)" :disabled="show==2">
                                        <img v-if="show==2 || show==3" style="opacity:1;" :src="img[2].src">
                                        <img v-else>
                                        <i class="el-icon-upload"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="inputbox">
                                <label class="el-form-item__label">人员照片</label>
                                <div class="el-form-item__content">
                                    <div class="upload">
                                        <input type="file" @change="Acardpic($event,3)" :disabled="show==2">
                                        <img v-if="show==2 || show==3" style="opacity:1;" :src="img[3].src">
                                        <img v-else>
                                        <i class="el-icon-upload"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="clearbox" style='margin-top:30px;' v-if="show==1">
                                <el-checkbox label="是否注册账号" v-model='ck'></el-checkbox>
                            </div>
                        </div>
                    </el-form>
                    <div class="logsub">
                        <a href="javascript:void(0)" class="sub" @click="sub('ruleForm',0)" v-if="show==1">提交</a>
                        <a href="javascript:void(0)" class="sub" @click="sub('ruleForm',1)" v-if="show==3">修改</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Base64 from "js-base64";
    import $http from "superagent";
    export default {
        data() {
            return {
                firid: null, //修改时用的id
                staffTypeFlag: this.publics.person, //人员类型
                load: false,
                lists: null, //表格书库列表
                person: {
                    uid: Base64.Base64.decode(sessionStorage.getItem("person")),
                    companyid: Base64.Base64.decode(sessionStorage.getItem("companyid"))
                },
                ck: false, //是否 注册账号
                selectSwitch: true, //人员类型为技术员
                show: 0, //切换展示   0为列表 1为添加  2为查看 3为编辑
                form: { //提交 和 查看数据
                    name: "", //姓名    
                    idcard: "", //身份证
                    address: "", //地址
                    tel: "", //联系电话
                    phone: "", //手机
                    // type:"",        //人员类型
                    loginname: "", //登录账号
                    password: "", //登录账号
                    xkz: "", // 编码许可证
                    hj: ""
                },
                rules: {
                    name: {
                        required: true,
                        message: '请输入人员姓名',
                        trigger: 'blur'
                    },
                    idcard: {
                        required: true,
                        message: '请输入身份证号码',
                        trigger: 'blur'
                    },
                    address: {
                        required: true,
                        message: '请输入居住地',
                        trigger: 'blur'
                    },
                    tel: {
                        required: true,
                        message: '请输入联系电话',
                        trigger: 'blur'
                    },
                    xkz: {
                        required: true,
                        message: '请输入许可证',
                        trigger: 'blur'
                    },
                    phone: {
                        required: true,
                        message: '请输入手机号',
                        trigger: 'blur'
                    },
                    hj: {
                        required: true,
                        message: '请输入户籍所在地',
                        trigger: 'blur'
                    },
                    // name:{ required: true, message: '请输入人员姓名', trigger: 'blur' },
                },
                select: { //人员切换数据
                    select1: [{
                            type: "技术员",
                            class: 4
                        },
                        {
                            type: "安全员",
                            class: 2
                        },
                        {
                            type: "保管员",
                            class: 3
                        },
                        {
                            type: "爆破员",
                            class: 1
                        }
                    ],
                    select2: [{
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
                    ],
                    value1: 4,
                    value2: 3
                },
                img: [ //图片数据
                    {
                        src: "123123"
                    }, //身份证照片
                    {
                        src: "123123"
                    }, //身份证照片 背面
                    {
                        src: "123123"
                    }, //人物照片1
                    {
                        src: "123123"
                    }, //人物照片2
                ],
                comlist: { //列表分页数据
                    page: 1,
                    size: 10,
                },
                find: "", //查询数据名字
                time: "", //查询数据时间
            }
        },
        mounted() {
            this.list();
        },
        methods: {
            see(id, ii) { //查看详情
                this.publics.$AJAX("company/user/" + this.person.uid + "/person", "get", {
                    userId: this.person.uid,
                    id: id
                }, e => {
                    let form = {
                        name: e.name, //姓名    
                        idcard: e.staffId, //身份证
                        address: e.address, //地址
                        tel: e.mobilePhone, //联系电话
                        phone: e.phone, //手机
                        // type:"",        //人员类型
                        loginname: "", //登录账号
                        password: "", //登录账号
                        xkz: e.licenceNumber, // 编码许可证
                        hj: e.homeAddress,
    
                    }
                    this.select.value2 = e.staffLevel;
                    this.select.value1 = e.staffTypeFlag;
                    this.form = form;
    
                    this.img[0].src = e.staffIdPhotoFrontOssCode;
                    this.img[1].src = e.staffIdPhotoReverseOssCode;
                    this.img[2].src = e.staffDocumentOssCode;
                    this.img[3].src = e.staffPhotoOssCode;
                    this.show = ii;
                })
            },
            bj(id, ii) {
                this.see(id, 3);
                this.firid = id;
            },
            handleCurrentChange(val) { //分页操作
                this.comlist.page = val;
                this.list();
            },
            list() { //表格渲染
                let load = this.$loading({
                    text: '页面加载中',
                });
                this.publics.$AJAX("company/" + this.person.companyid + "/staffs", "get", this.comlist, e => {
                    if (e.count == 0)
                        this.lists = null;
                    else {
                        this.lists = e;
                    }
                    setTimeout(e => {
                        load.close();
                    }, 500)
                    this.load = true;
    
                })
            },
            select1(e) { //
                this.selectSwitch = e == 4 ? true : false;
            },
            sub(formName, type, id) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        let newurl = "company/" + this.person.companyid + "/user/" + this.person.uid + "/people?"
                        if (this.ck) {
                            if (!this.form.loginname) {
                                this.$message({
                                    type: "error",
                                    message: "请输入系统账号"
                                })
                                return false;
                            }
                            if (!this.form.password) {
                                this.$message({
                                    type: "error",
                                    message: "请输入系统密码"
                                })
                                return false;
                            }
                            newurl = newurl + "isAccount=1&account=" + this.form.loginname + "&password=" + this.form.password;
                        } else {
                            newurl = newurl + "isAccount=0"
                        }
                        for (let val of this.img) {
                            if (!val.src) {
                                this.$message({
                                    type: "error",
                                    message: "请上传照片！"
                                })
                            };
                        }
                        let form = this.form;
                        let staffAddDto = {
                            "address": form.address,
                            "companyId": this.person.companyid,
                            "homeAddress": form.hj,
                            "inputMan": this.person.uid,
                            "licenceNumber": form.xkz,
                            "mobilePhone": form.phone,
                            "staffName": form.name,
                            "phone": form.tel,
                            "staffDocumentOssCode": this.img[2].src,
                            "staffId": form.idcard,
                            "staffIdPhotoFrontOssCode": this.img[0].src,
                            "staffIdPhotoReverseOssCode": this.img[1].src,
                            "staffLevel": this.select.value2,
                            "staffPhotoOssCode": this.img[3].src,
                            "staffType": this.select.value1,
                            "staffTypeFlag": this.select.value1,
                            //"staffTypeId": "string" //人员类型id
                        }
                        if (type == 0) { //提交
                            let load = this.$loading({
                                text: '添加人员中，请稍等',
                            });
                            this.publics.$AJAX(newurl, "post", staffAddDto, e => {
                                load.close();
                                setTimeout(e => {
                                    this.$message({
                                        type: "success",
                                        message: "添加成功"
                                    });;
                                }, 1000)
                                window.history.go(0)
                                // load.close();
    
    
                            })
                        } else { //修改
                            staffAddDto.id = this.firid;
                            let load = this.$loading({
                                text: '修改人员中，请稍等',
                            });
                            //imgplice
                            staffAddDto.staffDocumentOssCode=this.publics.imgplice(staffAddDto.staffDocumentOssCode);
                            staffAddDto.staffIdPhotoFrontOssCode=this.publics.imgplice(staffAddDto.staffIdPhotoFrontOssCode);
                            staffAddDto.staffIdPhotoReverseOssCode=this.publics.imgplice(staffAddDto.staffIdPhotoReverseOssCode);
                            staffAddDto.staffPhotoOssCode=this.publics.imgplice(staffAddDto.staffPhotoOssCode);
                            this.publics.$AJAX( "user/" + this.person.uid + "/company/people", "patch", staffAddDto, e => {
                                load.close();
                                setTimeout(e => {
                                    this.$message({
                                        type: "success",
                                        message: "修改 成功"
                                    });;
                                }, 1000)
                                window.history.go(0)
                            })
                        }
                    } else {
                        load.close();
                        return false;
                    }
                });
            },
            Acardpic: function(imgFile, index) {
                let filextension = imgFile.target.value.substring(imgFile.target.value.lastIndexOf("."), imgFile.target.value.length);
                filextension = filextension.toLowerCase();
                let file = imgFile.target.files[0],
                    fileSize = 0;
                fileSize = file.size / 1024;
                if (fileSize > 1024) {
                    this.$message({
                        type: "error",
                        message: "上传图片的不能超过1mb"
                    });
                    return false;
                } else {
                    if ((filextension != '.jpg') && (filextension != '.gif') && (filextension != '.jpeg') && (filextension != '.png') && (filextension != '.bmp')) {
                        this.$message({
                            type: "error",
                            message: "对不起，系统仅支持标准格式的照片，请您调整格式后重新上传，谢谢!"
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
                                    message: "上传图片失败请 重新上传"
                                });
                                load.close()
                            } else {
                                render.readAsDataURL(file);
                                render.onload = function(e) {
                                    let result = this.result;
                                    imgbox.src = result;
                                    imgbox.style.opacity = 1;
                                    _this.img[index].src = res.text;
                                    load.close()
                                }
                            }
                        })
                    }
                }
            }
        }
    }
</script>
