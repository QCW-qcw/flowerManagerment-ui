<template>
  <div class="home1">
    <el-container>
      <el-header style="padding:0px;height:70px;">
        <Mheader/>
      </el-header>
      <el-container style="max-height: calc(100vh - 70px);height:100vh;">
        <el-aside style="width:auto;">
          <el-scrollbar class="aside_scroll" style="height:100%;">
            <Maside/>
          </el-scrollbar>
        </el-aside>
        <el-main style="background:yellow;padding:0px;">
          <h1>content</h1>
          <h1>content</h1>
          <h1>content</h1>
          <h1>content</h1>
          <h1>content</h1>
          <h1>content</h1>
          <h1>content</h1>
          <router-view/>
        </el-main>

      </el-container>
    </el-container>
  </div>
</template>

<script>

import Maside from '../components/main/M_aside'
import Mheader from '../components/main/M_header'

export default {
  name: 'home1',
  components: {
    Maside,
    Mheader
  }
}
</script>

<style scoped>

</style>
