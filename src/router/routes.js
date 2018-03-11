//主路由模块

const blast = resolve => require(['../index/blast'], resolve)  //爆破单位            4
const depot = resolve => require(['../index/depot'], resolve)  //仓库管理模块         3
const police = resolve => require(['../index/police'], resolve)  //公安监管          1
const logistics = resolve => require(['../index/logistics'], resolve)  //配送管理    2
const system = resolve => require(['../index/system'], resolve)   //系统管理         5
const project = resolve => require(['../index/project'], resolve)  //项目监管        6
import blast_router from "./blast"//爆破二级路由
import depot_router from "./depot"//仓库管理二级路由
import police_router from "./police"//公安监管二级路由
import logistics_router from "./logistics"//配送管理二级路由
import system_router from "./system"//系统管理二级路由
import project_router from "./project"//项目监管二级路由
import login from "./login"
const register = resolve => require(['../page/register'], resolve)  //项目监管
const NotFoundComponent  = resolve => require(['../page/404'], resolve)//页面4004

export default [
  {
    path:'/blast',   //爆破单位
    component: blast,
    name:"blast",
    children:[
      ...blast_router,
    ]
  },
  {
    path:"/depot",     //仓库管理模块
    component:depot,
    name:"depot",
    children:[
      ...depot_router
    ]
  },
  {
    path:"/police",     //公安监管
    component:police,
    name:"police",
    children:[
      ...police_router
    ]
  },
  {
    path:"/logistics",     //配送管理
    component:logistics,
    name:"logistics",
    children:[
      ...logistics_router
    ]
  },
  {
    path:"/system",     //系统管理
    component:system,
    name:"system",
    children:[
      ...system_router
    ]
  },
  {
    path:"/project",      //项目监管 
    component:project,
    name:"project",
    children:[
      ...project_router
    ]
  },
  ...login,
  { 
    path:'/register', 
    component: register,
    name:"register"
  },
  { path: '*', component: NotFoundComponent }
]