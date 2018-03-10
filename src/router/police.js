
const police = resolve => require(['../page/police/index'], resolve)  
const pol_peo = resolve => require(['../page/police/pol_peo'], resolve)  
const pol_sup = resolve => require(['../page/police/pol_sup'], resolve) 

const pol_admin = resolve => require(['../page/police/pol_admin'], resolve)  
const peo_admin_index = resolve => require(['../page/police/peo_admin_index'], resolve)  
const pol_home= resolve => require(['../page/police/pol_home'], resolve)  
const pol_replace = resolve => require(['../page/police/pol_replace'], resolve)  
const pol_destroy = resolve => require(['../page/police/pol_destroy'], resolve)  

const pol_maintain = resolve => require(['../page/police/pol_maintain'], resolve)  
export default [
  {
    path:'/police',  
    component: police,
    name:"police_index",
  },
  {
    path:'/police/pol_peo',  
    component: pol_peo,
    name:"pol_peo",
  },
  {
    path:'/police/pol_sup',  
    component: pol_sup,
    name:"pol_sup",
  },
  {
    path:'/police/pol_admin',  
    component: pol_admin,
    children:[
      {
        path:'',  
        component: peo_admin_index,
        name:"pol_admin",
      },
      {
        path:'pol_home',  
        component: pol_home,
        name:"pol_home",
      },
      {
        path:'pol_replace',  
        component: pol_replace,
        name:"pol_replace",
      },
      {
        path:'pol_destroy',  
        component: pol_destroy,
        name:"pol_destroy",
      },
    ]
  },
  {
    path:'/police/pol_maintain',  
    component: pol_maintain,
    name:"pol_maintain",
  },

]