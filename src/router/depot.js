
const depot = resolve => require(['../page/depot/index'], resolve)  
const people = resolve => require(['../page/depot/people'], resolve)          //企业及人员管理
const repertory = resolve => require(['../page/depot/repertory'], resolve)    //仓库管理
const storage = resolve => require(['../page/depot/storage'], resolve)        //仓储管理
const dep_send = resolve => require(['../page/depot/dep_send'], resolve)      //销售配送入库
const dep_give = resolve => require(['../page/depot/dep_give'], resolve)      //仓储出库登记
const dep_get = resolve => require(['../page/depot/dep_get'], resolve)        //退库收交登记
const dep_video = resolve => require(['../page/depot/dep_video'], resolve)    //仓储视频实时管理
export default [
  {
    path:'/depot',   
    component: depot,
    name:"depot_index",
  },
  {
    path:'people',   
    component: people,
    name:"people",
  },
  {
    path:'repertory',   
    component: repertory,
    name:"repertory",
  },
  {
    path:'storage',   
    component: storage,
    name:"storage",
  },
  {
    path:'dep_send',   
    component: dep_send,
    name:"dep_send",
  },
  {
    path:'dep_give',   
    component: dep_give,
    name:"dep_give",
  },
  {
    path:'dep_get',   
    component: dep_get,
    name:"dep_get",
  },
  {
    path:'dep_video',   
    component: dep_video,
    name:"dep_video",
  },
]