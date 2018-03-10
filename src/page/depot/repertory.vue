<template>
  <div class="logistics" v-if="show==0">
    <div class="bread">
      <div class="htit">仓库管理</div>
      <div class="sebox">
        <div class="selected">
          <div class="find">
            <el-input placeholder="请输入你想要搜索的仓库相关信息" v-model="find" class="input-with-select">
              <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
          </div>
          <a href="javascript:void(0);" class="add" @click="show=1">添加仓库      </a>
        </div>
      </div>
    </div>
    <div class="listbox">
      <table cellpadding=0 cellspacing=0>
        <thead>
          <td width="40%">仓库名</td>
          <td width="30%">仓库地址</td>
          <!-- <td width="10%">人像照片</td> -->
          <td width="30%">操作</td>
        </thead>
        <tbody>
          <tr>
            <td>xxx</td>
            <td>xxx</td>
            <td>
              <a href="javascript:void(0)" @click="show=1">查看</a>
              <a href="javascript:void(0)">编辑</a>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="page"></div>
    </div>
  </div>
  </div>
  </div>
  <div class="logistics" v-else>
    <div class="bread">
      <div class="htit">仓库管理</div>
      <span>(编辑)</span>
    </div>
    <div class="repsys">
      <div class="tp">
        <div class="lf">
          <div class="inputbox">
            <label class="el-form-item__label">仓库名</label>
            <el-input v-model="form.name" placeholder="请输入内容"></el-input>
          </div>
          <div class="inputbox">
            <label class="el-form-item__label">仓库地址</label>
            <el-input v-model="form.name" placeholder="请输入内容"></el-input>
          </div>
        </div>
        <a href="javascript:void(0);">确定</a>
      </div>
      <div class="map">
        地图
      </div>
    </div>
  </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        find: "",
        show: 1,
        form: {
          name: "",
        }
      }
    },
  }
</script>
