
const logistics = resolve => require(['../page/logistics/index'], resolve)  
const logistics_admin = resolve => require(['../page/logistics/logistics_admin'], resolve)  

const dis = resolve => require(['../page/logistics/dis'], resolve)  
const dis_index = resolve => require(['../page/logistics/dis_index'], resolve)
const dis_details = resolve => require(['../page/logistics/dis_details'], resolve)
const dis_start = resolve => require(['../page/logistics/dis_start'], resolve)
const dis_ing = resolve => require(['../page/logistics/dis_ing'], resolve)
const dis_end = resolve => require(['../page/logistics/dis_end'], resolve)


const car = resolve => require(['../page/logistics/car'], resolve)


export default [
  {
    path:'/logistics',  
    component: logistics,
    name:"logistics_index",
  },
  {
    path:"logistics_admin",
    component:logistics_admin,
    name:"logistics_admin"
  },
  {
    path:"dis",
    component:dis,
    children:[
      {
        path:"",
        component:dis_index,
        name:"dis"
      },
      {
        path:"dis_details/:id",
        component:dis_details,
        name:'dis_details'
      },
      {
        path:"dis_start",
        component:dis_start,
        name:"dis_start"
      },
      {
        path:"dis_ing",
        component:dis_ing,
        name:'dis_ing'
      },
      {
        path:"dis_end",
        component:dis_end,
        name:'dis_end'
      },
      
    ]
  },
  {
    path:"car",
    component:car,
    name:"car"
  }
]