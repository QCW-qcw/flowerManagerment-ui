<template>
  <div class="m-aside">
    <el-menu default-active="1-4-1" class="el-menu-vertical-demo" :collapse="isCollapse" unique-opened>
     <el-menu-item index="1">
        <i class="el-icon-menu"></i>
        <span slot="title">产品展示</span>
    </el-menu-item>

    <el-menu-item index="2">
        <i class="el-icon-edit-outline"></i>
        <span slot="title">档案记录</span>
    </el-menu-item>
    <el-menu-item index="3" >
        <i class="el-icon-document"></i>
        <span slot="title">报表查询</span>
    </el-menu-item>
    <el-menu-item index="4"  @click="whether">
        <i class="el-icon-sunny"></i>
        <span slot="title">天气查询</span>
    </el-menu-item>
    <el-menu-item index="5">
        <i class="el-icon-s-data"></i>
        <span slot="title">生产分析</span>
    </el-menu-item>
        <el-menu-item index="6">
        <i class="el-icon-chat-dot-square"></i>
        <span slot="title">信息咨询</span>
    </el-menu-item>
        <el-menu-item index="7">
        <i class="el-icon-tickets"></i>
        <span slot="title">农事记录</span>
    </el-menu-item>
    <el-menu-item index="8">
        <i class="el-icon-location-information"></i>
        <span slot="title">地图管理</span>
    </el-menu-item>
        <el-menu-item index="9">
        <i class="el-icon-setting"></i>
        <span slot="title">系统设置</span>
    </el-menu-item>

    </el-menu>
  </div>
</template>

<style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }

  [role="menuitem"] {
    text-align: left;
  }
</style>

<script>

export default {
  name: 'M-aside',
  data () {
    return {

    }
  },
  methods: {

  },
  components: {

  },
  computed: {
    isCollapse: function () {
      // 通过vuex的getters方法来获取state里面的数据
      return this.$store.getters.getAsideStatus
    }
  }
}
</script>
