<template>

<el-container id="container">
  <el-aside width="200px">Aside</el-aside>
  <el-container>
    <el-header></el-header>
    <div>
        <el-menu :default-active="activeIndex2"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b">
  <el-menu-item index="1">产品展示</el-menu-item>
  <el-menu-item index="2">档案记录</el-menu-item>
  <el-menu-item index="3">报表查询</el-menu-item>
  <el-menu-item index="4">生产分析</el-menu-item>
  <el-menu-item index="5">天气查询</el-menu-item>
  <el-menu-item index="6">信息咨询</el-menu-item>
  <el-menu-item index="7">农事记录</el-menu-item>

  <!-- <el-submenu index="2">
    <template slot="title">档案记录</template>
    <el-menu-item index="2-1">选项1</el-menu-item>
    <el-menu-item index="2-2">选项2</el-menu-item>
    <el-menu-item index="2-3">选项3</el-menu-item>
    <el-submenu index="2-4">
      <template slot="title">选项4</template>
      <el-menu-item index="2-4-1">选项1</el-menu-item>
      <el-menu-item index="2-4-2">选项2</el-menu-item>
      <el-menu-item index="2-4-3">选项3</el-menu-item>
    </el-submenu>
  </el-submenu> -->

  <!-- <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item> -->
</el-menu>

    </div>
    <el-main>Main</el-main>

    <el-footer>Footer</el-footer>
  </el-container>
</el-container>

</template>

<script>
export default {
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style >
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
