
const project = resolve => require(['../page/project/index'], resolve)          
const pro_sys = resolve => require(['../page/project/pro_sys'], resolve)  
const pro_look = resolve => require(['../page/project/pro_look'], resolve)  

const pro_video = resolve => require(['../page/project/pro_video'], resolve)  
const video_index = resolve => require(['../page/project/video_index'], resolve)  
const look_video = resolve => require(['../page/project/look_video'], resolve)  
const video_update = resolve => require(['../page/project/video_update'], resolve)  

const project_pic = resolve => require(['../page/project/project_pic'], resolve)  
export default [
  {
    path:'/project',  
    component: project,
    name:"project_index",
  },
  {
    path:'/project/pro_sys',  
    component: pro_sys,
    name:"pro_sys",
  },
  {
    path:'/project/pro_look',  
    component: pro_look,
    name:"pro_look",
  },
  {
    path:'/project/pro_video',  
    component: pro_video,
    children:[
      { 
          path:"",
          component:video_index,
          name:"pro_video",
      },
      {
          path:"look_video",
          component:look_video,
          name:"look_video",
      },
      {
          path:"video_update",
          component:video_update,
          name:"video_update",
      }
    ]
  },
  {
    path:'/project/project_pic',  
    component: project_pic,
    name:"project_pic",
  }
]