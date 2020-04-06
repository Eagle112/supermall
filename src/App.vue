<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view v-on:showChanged="showChanged" ></router-view>
    </keep-alive>
    <main-tab-bar class="mainTabbar" v-show="this.isShow"/>
  </div>
</template>
<script>
import MainTabBar from 'components/content/mainTabbar/MainTabBar'
export default {
  name: 'app',
  components: {
    MainTabBar
  },
  data(){
    return {
      isShow:true
    }
  },
  methods:{
    showChanged(val){
      this.isShow = val;
      console.log(this.isShow)
    }
  }
}
console.log()
</script>
<style>
@import "assets/css/base.css";
.mainTabbar{
  z-index:9;
}
</style>
