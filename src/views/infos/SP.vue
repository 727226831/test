<template>
  <div class="container">
    <a-menu mode="horizontal" class="menu" :default-selected-keys="['1']">
      <a-menu-item>
        <router-link to="/info/sp/undone">待我处理</router-link>
      </a-menu-item>

      <a-menu-item>
        <router-link to="/info/sp/completed">我已处理</router-link>
      </a-menu-item>

      <a-menu-item>
        <router-link to="/info/sp/followme">我发起的</router-link>
      </a-menu-item>

      <a-menu-item>
        <router-link to="/info/sp/giveme">抄送我的</router-link>
      </a-menu-item>
    </a-menu>
    <div>
      <router-view />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style scoped>
.container {
  margin-top: 20px;
  background-color: white;
  /* padding: 20px; */
}
.menu {
  text-align: center;
}
</style>
