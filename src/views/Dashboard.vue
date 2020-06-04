<template>
  <div>
    <a-layout-header>
      <a-menu
        theme="dark"
        mode="horizontal"
        :default-selected-keys="['1']"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item key="1">
          <router-link to="/Dashboard/Ship">发货计划</router-link>
        </a-menu-item>
        <a-menu-item key="2">
          <router-link to="/Dashboard/Recycle">收货计划</router-link>
        </a-menu-item>
        <a-menu-item key="3">
          <router-link to="/Dashboard/Supplement">补货计划</router-link>
        </a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content class="layout-content">
      <div>
        <router-view />
      </div>
    </a-layout-content>
  </div>
</template>

