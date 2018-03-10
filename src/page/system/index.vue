<template>
  <div>
    <div class="bread">
      <div class="htit">账号管理</div>
    </div>
    <div class="syscontair">
      <div class="selectbox">
        <el-select v-model="selected.value1" placeholder="请选择">
          <el-option
            v-for="item in options1"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
          <el-select v-model="selected.value1" placeholder="请选择">
          <el-option
            v-for="item in options2"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
          <el-select v-model="selected.value1" placeholder="请选择">
          <el-option
            v-for="item in options3"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
          <el-select v-model="selected.value1" placeholder="请选择">
          <el-option
            v-for="item in options4"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div class="listbox">
        <table cellpadding=0 cellspacing=0>
            <thead>
              <td width="20%">单位名称</td>
              <td width="20%">单位地址</td>
              <td width="20%">登录账号</td>
              <td width="10%">密码</td>
              <td width="30%">操作</td>
            </thead>
            <tbody>
              <tr>
                <td>XX派出所</td>
                <td>地址地址地址</td>
                <td>123123123</td>
                <td>123456</td>
                <td>
                  <router-link :to="{ name: 'sys_detail',params:{id:1}}">查看</router-link>
                  <router-link :to="{name:'sys_detail',params:{id:1}}">编辑</router-link>
                </td>
              </tr>
            </tbody>
        </table>
        <div class="page"></div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return{
        options1: [{
            value: '选项1',
            label: '黄金糕'
          }
        ],
        options2: [{
            value: '选项2',
            label: '黄金糕'
          }
        ],
        options3: [{
            value: '选项3',
            label: '黄金糕'
          }
        ],
        options4: [{
            value: '选项4',
            label: '黄金糕'
          }
        ],
        selected:{
            value1:"选项1",
            value2:"选项2",
            value3:"选项3",
            value4:"选项4"
        },
        list:[
          
        ]
      }
    },
    mounted(){

    }
  }  
</script>