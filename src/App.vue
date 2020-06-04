<template>
  <div id="app">
    <a-layout id="components-layout-demo-responsive">
      <a-layout-sider
        breakpoint="lg"
        collapsed-width="0"
        @collapse="onCollapse"
        @breakpoint="onBreakpoint"
      >
        <div class="logo">
          <img src="./assets/logo.png" width="30px" />
        </div>
        <a-menu theme="dark" mode="inline" :default-selected-keys="['1']" class="menu">
          <a-menu-item key="1">
            <router-link to="/">Home</router-link>>
          </a-menu-item>
          <a-menu-item key="2">
            <router-link to="/about">About</router-link>
          </a-menu-item>
          <a-menu-item key="3">
            <router-link to="/dashboard">仪表盘</router-link>
          </a-menu-item>
          <a-menu-item key="4">
            <router-link to="/info">信息中心</router-link>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout>
        <a-layout-content :style="{ margin: '24px 16px 0' }">
          <div>
            <router-view />
          </div>
        </a-layout-content>
        <a-layout-footer style="textAlign: center">Ant Design ©2018 Created by Ant UED</a-layout-footer>
      </a-layout>
    </a-layout>

    <!-- <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/dashboard">仪表盘</router-link>|
      <router-link to="/test1">信息中心</router-link>
    </div>-->
  </div>
</template>
<script>
export default {
  methods: {
    onCollapse(collapsed, type) {
      console.log(collapsed, type);
    },
    onBreakpoint(broken) {
      console.log(broken);
    }
  }
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
#components-layout-demo-responsive .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}

/* #nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
} */
</style>
