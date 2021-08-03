<template>
  <div class="m-header" style="background:red;width:100%;height:100%;">
      <div style="width:200px;height:100%;background:pink;float:left;">
          <div style="width:70px;height:70px;">
            <i :class="iconType" style="font-size:34px;margin-top:15px;" @click="changeSpand()"></i>
          </div>

      </div>
      <ul style="display:inline;float:right;margin-right:40px;">
        <li><router-link to="/login">login</router-link></li>
        <li><router-link to="/logout">logout</router-link></li>
      </ul>
  </div>
</template>

<script>

export default {
  name: 'M-header',
  data () {
    return {
      iconType: 'el-icon-s-fold'
    }
  },
  components: {

  },
  methods: {
    changeSpand: function () {
      var asideSatatus = false
      if (this.$store.getters.getAsideStatus === true) {
        asideSatatus = false
        this.iconType = 'el-icon-s-fold'
      } else {
        asideSatatus = true
        this.iconType = 'el-icon-s-unfold'
      }
      this.$store.dispatch('setAsideStatusMm', asideSatatus)
    }
  }
}
</script>
