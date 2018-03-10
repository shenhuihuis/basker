const system = resolve => require(['../page/system/system'], resolve)
const system_index = resolve => require(['../page/system/index'], resolve) 
const sys_details = resolve => require(['../page/system/sys_details'], resolve) 

const sys_approve = resolve => require(['../page/system/sys_approve'], resolve)  
const approve_index = resolve => require(['../page/system/approve_index'], resolve) 
const approve_details = resolve => require(['../page/system/approve_details'], resolve)  
  
const sys_change = resolve => require(['../page/system/sys_change'], resolve) 


const sys_setting = resolve => require(['../page/system/sys_setting'], resolve)  

export default [
  {
    path:'/system',   
    component: system,  
    children:[
      {
        path:'',   
        component:system_index ,
        name:"system",  
      },
      {
        path:'sys_details/:id',       
        component:sys_details ,
        name:"sys_detail",
      }
    ]
  },
  {
    path:'sys_approve',
    component:sys_approve,
    children:[
      {
        path:'',   
        component:approve_index ,
        name:"sys_approve",  
      },
      {
        path:'approve_details/:id',   
        component:approve_details ,
        name:"approve_details",
      }
    ]   
  },
  {
    path:'sys_change',   
    component: sys_change,
    name:"sys_change",
  },
  {
    path:'sys_setting',
    component:sys_setting,
    name:'sys_setting'
  },
  
]