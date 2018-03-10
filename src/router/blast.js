
const blast = resolve => require(['../page/blast/index'], resolve)          //民爆首页
const bla_admin = resolve => require(['../page/blast/bla_admin'], resolve)  //企业人员管理

const bla_check = resolve => require(['../page/blast/bla_check'], resolve)  //爆破项目登记
const bla_ckindex = resolve => require(['../page/blast/bla_ckindex'], resolve)  //爆破项目登记
const bla_xg= resolve => require(['../page/blast/bla_xg'], resolve)  //爆破项目登记

const civil = resolve => require(['../page/blast/civil'], resolve)          //民爆物品管理
const civil_index = resolve => require(['../page/blast/civil_index'], resolve);  
const civil_i_details = resolve => require(['../page/blast/civil_i_details'], resolve);  
const civil_buy = resolve => require(['../page/blast/civil_buys'], resolve)      //购买许可证
const civil_buycheck = resolve => require(['../page/blast/civil_buycheck'], resolve)  //民爆品购买登记
const civil_get = resolve => require(['../page/blast/civil_get'], resolve)     // 领用签收
const civil_consume = resolve => require(['../page/blast/civil_consume'], resolve)  //使用消耗
const civil_refund = resolve => require(['../page/blast/civil_refund'], resolve)  //退库
const civil_die = resolve => require(['../page/blast/civil_die'], resolve)  //退库

const blast_home = resolve => require(['../page/blast/blast_home'], resolve)  //爆破作业管理
const blast_homeindex = resolve => require(['../page/blast/blast_homeindex'], resolve)  
const blast_plan = resolve => require(['../page/blast/blast_plan'], resolve)  //作业计划登记

const blast_change = resolve => require(['../page/blast/blast_change'], resolve)  //变更记录

const blast_video = resolve => require(['../page/blast/blast_video'], resolve)  //作业现场视频管理
const blast_videoindex = resolve => require(['../page/blast/blast_videoindex'], resolve)  
const blast_videolist = resolve => require(['../page/blast/blast_videolist'], resolve)  
const blast_update = resolve => require(['../page/blast/blast_update'], resolve)  //视频实时上传
const blast_look = resolve => require(['../page/blast/blast_look'], resolve)      //无信号视频导入

const blast_completed = resolve => require(['../page/blast/blast_completed'], resolve)      //爆破项目竣工
const completed_index = resolve => require(['../page/blast/completed_index'], resolve)      
const completed_add = resolve => require(['../page/blast/completed_add'], resolve)        
const completed_see = resolve => require(['../page/blast/completed_see'], resolve) 
const completed_details = resolve => require(['../page/blast/completed_details'], resolve)    


const blast_all = resolve => require(['../page/blast/blast_all_completed'], resolve)      //查看所有竣工项目
const all_index = resolve => require(['../page/blast/all_index'], resolve)      
const all_add = resolve => require(['../page/blast/completed_all_add'], resolve)        
const all_see = resolve => require(['../page/blast/completed_all_see'], resolve) 
const all_details = resolve => require(['../page/blast/completed_all_details'], resolve)    

export default [
  {
    path: "/blast",component:blast,name: "blast_index"
  },
  {
    path: "/blast/bla_admin",component: bla_admin,name: "bla_admin"
  },
  {
    path: "/blast/bla_check",component: bla_check,
    children:[
      { path:'',component:bla_ckindex,name: "bla_check"},
      { path:'bla_xg',component:bla_xg,name: "bla_xg"},
    ]
  },
  {
    path: "/blast/civil",
    component: civil,
    children: [
      { path: "",component: civil_index,name: "civil"},
      { path: "civil_i_details",component: civil_i_details,name: "civil_i_details"},
      { path: "civil_buy",component: civil_buy,name: "civil_buy"},
      { path: "civil_buycheck",component: civil_buycheck,name: "civil_buycheck" },
      { path: "civil_get",component: civil_get,name: "civil_get"},
      { path: "civil_consume",component: civil_consume,name: "civil_consume"},
      { path: "civil_refund",component: civil_refund,name: "civil_refund"},
      { path: "civil_die",component: civil_die,name: "civil_die"}
    ]
  },
  {
    path:"/blast_home",
    component:blast_home,
    children:[
      { path:"",component:blast_homeindex,name:"blast_home"},
      { path:"blast_plan",component:blast_plan, name:"blast_plan" },
    ]
  },
  {
    path: "/blast/blast_change",component: blast_change,name: "blast_change"
  },
  {
    path:"/blast_video",
    component:blast_video,
    children:[
      { path:"",component:blast_videoindex,name:"blast_video"},
      { path:"blast_videolist",component:blast_videolist,name:"blast_videolist"},
      { path:"blast_update",component:blast_update,name:"blast_update"},
      { path:"blast_look",component:blast_look,name:"blast_look"},
    ]
  },
  {
    path:"/blast/blast_completed",
    component:blast_completed,
    children:[
      { path:"",component:completed_index,name:"blast_completed"},
      { path:"completed_add",component:completed_add,name:"completed_add"},
      { path:"completed_see",component:completed_see,name:"completed_see"},
      { path:"completed_details",component:completed_details,name:"completed_details"},
    ]
  },
  {
    path:"/blast/blast_all",
    component:blast_all,
    children:[
      { path:"",component:all_index,name:"blast_all"},
      { path:"all_add",component:all_add,name:"all_add"},
      { path:"all_see",component:all_see,name:"all_see"},
      { path:"all_details",component:all_details,name:"all_details"},
    ]
  },
];