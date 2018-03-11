//登录模块
const blast_login = resolve => require(['../page/blast_login'], resolve)  //爆破单位 
const depot_login = resolve => require(['../page/depot_login'], resolve)  //仓库管理模块
const police_login = resolve => require(['../page/police_login'], resolve)  //公安监管
const logistics_login = resolve => require(['../page/logistics_login'], resolve)  //配送管理
const system_login = resolve => require(['../page/system_login'], resolve)   //系统管理
const project_login = resolve => require(['../page/project_login'], resolve)   //系统管理

export default [
    { 
        path:'/blast_login', 
        component: blast_login,
        name:"blast_login"
    },
    { 
        path:'/depot_login', 
        component: depot_login,
        name:"depot_login"
    },
    { 
        path:'/police_login', 
        component: police_login,
        name:"police_login"
    },
    { 
        path:'/logistics_login', 
        component: logistics_login,
        name:"logistics_login"
    },
    { 
        path:'/system_login', 
        component: system_login,
        name:"system_login"
    },
    { 
        path:'/project_login', 
        component: project_login,
        name:"project_login"
    },
]