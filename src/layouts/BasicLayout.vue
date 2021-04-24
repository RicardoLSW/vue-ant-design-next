<template>
  <pro-layout :menus="menus" v-bind="state">
    <template v-slot:menuHeaderRender>
      <div style="display: flex; align-items: center">
        <svg-icon name="logo" style="width: 32px; height: 32px" />
        <h1>{{ title }}</h1>
      </div>
    </template>
    <page-view />
  </pro-layout>
</template>

<script>
import { reactive, ref } from 'vue'
// eslint-disable-next-line import/no-cycle
import { asyncRouterMap } from '../config/router.config'
import defaultSettings from '../config/defaultSettings'
import SvgIcon from '../components/SvgIcon/SvgIcon.vue'
import PageView from './PageView.vue'

export default {
  name: 'BasicLayout',
  components: {
    PageView,
    SvgIcon
  },
  setup() {
    const state = reactive({
      collapsed: false,

      openKeys: ['/dashboard'],
      selectedKeys: ['/welcome'],

      isMobile: false,
      fixSiderbar: false,
      fixedHeader: false,
      menuData: [],
      sideWidth: 208,
      hasSideMenu: true,
      hasHeader: true,
      hasFooterToolbar: false,
      // eslint-disable-next-line no-return-assign
      setHasFooterToolbar: (has) => (state.hasFooterToolbar = has)
    })

    const routes = asyncRouterMap.find((item) => item.path === '/')
    const menus = ref((routes && routes.children) || [])
    const title = ref(defaultSettings.title)

    return {
      state,
      menus,
      title
    }
  }
}
</script>

<style lang="less">
@import './BasicLayout.less';
</style>
