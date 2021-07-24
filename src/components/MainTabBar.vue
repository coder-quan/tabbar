<template >
  <tab-bar>
    <!--    可以通过active-color修改导航栏文字的颜色-->
    <tab-bar-item path="/home" active-color="pink">
      <template #item-icon>
        <img src="../assets/img/home.png" alt="">
      </template>
      <template #item-icon-active>
        <img src="../assets/img/home_active.png" alt="">
      </template>
      <template #item-text>
        <div>首页</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <template #item-icon>
        <img src="../assets/img/category.png" alt="">
      </template>
      <template #item-icon-active>
        <img src="../assets/img/category_active.png" alt="">
      </template>
      <template #item-text>
        <div>分类</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/shopcart">
      <template #item-icon>
        <img src="../assets/img/shopcart.png" alt="">
      </template>
      <template #item-icon-active>
        <img src="../assets/img/shopcart_active.png" alt="">
      </template>
      <template #item-text>
        <div>购物车</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <template #item-icon>
        <img src="../assets/img/profile.png" alt="">
      </template>
      <template #item-icon-active>
        <img src="../assets/img/profile_active.png" alt="">
      </template>
      <template #item-text>
        <div>我的</div>
      </template>
    </tab-bar-item>
  </tab-bar>
</template >

<script >
import TabBar from '@/components/tabbar/TabBar'
import TabBarItem from "@/components/tabbar/TabBarItem";
export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem
  }
}
</script >

<style scoped >

</style >