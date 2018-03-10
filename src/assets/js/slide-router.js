export default{
  router:{
    blast:[     //爆破
      { tit:'首页',router:'blast_index',ico:'&#xe61e;'},
      { tit:'企业及人员管理',router:'bla_admin',ico:'&#xe696;'},
      { tit:'爆破项目登记管理',router:'bla_check',ico:'&#xe610;'},
      { tit:'民爆物品管理',router:'civil',ico:'&#xe72d;',
        children:[
          { tit:'购买许可证管理', router:'civil_buy'},
          { tit:'民爆品购买登记', router:'civil_buycheck'},
          { tit:'领用签收管理', router:'civil_get'},
          { tit:'使用消耗登记', router:'civil_consume'},
          { tit:'退库登记', router:'civil_refund'},
          { tit:'销毁变更登记', router:'civil_die'}
        ]
      },
      { tit:'爆破作业管理',router:'blast_home',ico:'&#xe89d;',
        children:[
          { tit:'作业计划登记',router:'blast_plan'}
        ]   
      },
      { tit:'变更记录',router:'blast_change',ico:'&#xe602;'},
      {
        tit:'作业现场视频管理',router:'blast_video',ico:'&#xe70e;',
        children:[
          { tit:'视频实时上传',router:'blast_update',},
          { tit:'无信号视频导入',router:'blast_look'}
        ]
      },
      { tit:'爆破项目竣工管理',router:'blast_completed',ico:'&#xe62a;',},
      { tit:'查看所有竣工管理',router:'blast_all',ico:'&#xe6ba;',},
      //{ tit:'查看所有竣工管理',router:'',ico:'&#xe6ba;'}
    ],
    depot:[     //仓库管理模块
      { tit:'首页',router:'depot_index', ico:'&#xe61e;'},
      { tit:'企业及人员管理',router:'people', ico:'&#xe696;'},
      { tit:'仓库管理',router:'repertory', ico:'&#xe64d;'},
      { tit:'仓储管理',router:'storage', ico:'&#xe72d;'},
      { tit:'销售配送入库',router:'dep_send', ico:'&#xe608;'},
      { tit:'仓储出库登记',router:'dep_give', ico:'&#xe61d;'},
      { tit:'退库收交登记',router:'dep_get', ico:'&#xe6d9;'},
      { tit:'仓储视频实时管理',router:'dep_video', ico:'&#xe70e;'},
    ],
    police:[    //公安 
      { tit:"首页",router:'police_index', ico:'&#xe61e;'},
      { tit:"人员管理",router:'pol_peo', ico:'&#xe696;'},
      { tit:"日常监管",router:'pol_sup', ico:'&#xe636;'},
      { 
        tit:"行政审批",router:'pol_admin', ico:'&#xe60c;',
        children:[
          { tit:'作业审批',router:'pol_home' },
          { tit:'变更审批',router:'pol_replace' },
          { tit:'销毁变更审批',router:'pol_destroy'}
        ]
      },
      { tit:"通知管理",router:'pol_maintain', ico:'&#xe61b;'},
    ],
    logistics:[   //配送
      { tit:"首页",router:'logistics_index', ico:'&#xe61e;'},
      { tit:"企业及人员管理",router:'logistics_admin', ico:'&#xe696;'},
      { 
        tit:"配送管理",router:'dis', ico:'&#xe6eb;',
        children:[
          { tit:'销售配送' ,router:'dis_start'},
          { tit:'仓储出库配送',router:'dis_ing'},
          { tit:'退库配送' ,router:'dis_end'}
        ]
      },
      { tit:"车辆管理",router:'car', ico:'&#xe616;'},
    ],
    project:[     //项目监管
      { tit :'首页', router:'project_index' ,ico:'&#xe61e;'},
      { tit :'企业及人员管理', router:'pro_sys' ,ico:'&#xe696;'},
      { tit :'项目监理', router:'pro_look' ,ico:'&#xe610;'},
      { 
        tit :'作业现场视频实时监管', router:'pro_video' ,ico:'&#xe6ba;',
        children:[
          { tit:'视频实时上传',router:'look_video'},
          { tit:'无信号视频导入',router:'video_update'}
        ]
      },
      { tit :'监理到岗合照', router:'project_pic' ,ico:'&#xe70e;'},
    ],
    system:[      //系统监管
      { tit:"账号管理",router:'system', ico:'&#xe61e;'},
      { tit:'账号审批',router:'sys_approve', ico:'&#xe696;'},
      { tit:'数据变更',router:'sys_change', ico:'&#xe696;'},
      { tit:'设置及备份',router:'sys_setting',ico:'&#xe64d;'}
    ]
  }
}