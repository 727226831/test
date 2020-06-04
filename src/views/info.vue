<template >
  <a-layout id="components-layout-demo-top" class="layout">
    <div class="top">
      <div class="top-left">
        <div>
          <img src="../assets/logo.png" width="30px" />
        </div>
        <div class="top-btn">
          <a-button type="primary">
            <a href>应收</a>
          </a-button>

          <a-button type="primary">
            <a href>应付</a>
          </a-button>

          <a-button type="primary">
            <a href>核算</a>
          </a-button>

          <a-button type="primary">
            <a href>库存</a>
          </a-button>

          <a-button type="primary">
            <a href>设置</a>
          </a-button>
        </div>
      </div>

      <div class="vip">
        试用版仅25天
        <a href>联系客服</a>
      </div>

      <div class="top-right">
        <a class="a" href>
          <a-icon type="plus-circle" />
        </a>
        <a class="a" href>
          <a-icon type="bell" />
        </a>
        <a class="a" href>
          <a-icon type="appstore" />
        </a>
        <a class="a" href>
          <a-icon type="phone" />
        </a>
        <a class="a" href>
          <a-icon type="question-circle" />
        </a>

        <a-input-search placeholder="input search text" />
      </div>
    </div>

    <a-layout-header class="layout-header">
      <a-menu
        theme="dark"
        mode="horizontal"
        :default-selected-keys="['1']"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item key="1">
          <router-link to="/info/sp">审批待办(1)</router-link>
        </a-menu-item>
        <a-menu-item key="2">
          <router-link to="/info/xt">系统通知(14)</router-link>
        </a-menu-item>
        <a-menu-item key="3">
          <router-link to="/info/cn">合同动态(4)</router-link>
        </a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content class="layout-content">
      <div>
        <router-view />
      </div>
    </a-layout-content>
  </a-layout>
</template>

<style scoped>
.top {
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
}

.top-left {
  display: flex;
}
.top-btn {
  margin-left: 20px;
}
.top-right {
  display: flex;
  justify-content: flex-end;
}

.vip {
  margin-top: 5px;
}
.a {
  width: 40px;
  margin-top: 5px;
}
</style>