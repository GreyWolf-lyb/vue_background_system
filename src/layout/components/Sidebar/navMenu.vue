<template>
  <el-scrollbar class='sidebar'>
    <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse"
     router>
      <template v-for="item in items">
        <template v-if="item.subs">
          <el-submenu :index="item.index" :key="item.id">
            <template slot="title">
              <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
            </template>
            <template v-for="subItem in item.subs">
              <el-submenu v-if="subItem.subs" :index="subItem.index" :key="subItem.id">
                <template slot="title"><span slot="title">{{ subItem.title }}</span></template>
                <el-menu-item v-for="(threeItem, i) in subItem.subs" :key="i" :index="threeItem.index">
                {{ threeItem.title }}
                </el-menu-item>
              </el-submenu>
              <el-menu-item v-else :index="subItem.index" :key="subItem.id">
                 <span slot="title">{{ subItem.title }}</span>
              </el-menu-item>  
            </template>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="item.index" :key="item.id">
            <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </el-scrollbar>
</template>

<script>
import transmit from '../../../utils/transmit'
import { mapGetters } from 'vuex'
export default {
  name: 'sidebar',
  props: {
    message: Boolean
  },
  // computed: {
  //    ...mapGetters([
  //     'sidebar'
  //   ]),
  //   isCollapse() {
  //     return !this.sidebar.opened
  //   }
  // },
  data () {
    return {
      collapse: false,
      items: [{
        id: '1',
        icon: 'iconfont icon-shouye',
        index: '/dashboard',
        title: '首页',
        
      }, {
        id: '9',
        icon: 'iconfont icon-tubiao',
        index: '/example/echart',
        title: '图表'
      }, {
        id: '2',
        icon: 'iconfont icon-biaoge',
        index: '',
        title: '表格',
        subs: [{
        id: '2-1',
        index: '/example/edit',
        title: '可编辑表格'
      }, {
        id: '2-2',
        title: '普通表格',
        index: '/example/table',
        title: '普通表格',
        // subs: [{
        //   id: '2-2-1',
        //   index: '/example/table',
        //   title: '普通表格'
        // }]
      }]
      }, {
        id: '3',
        icon: 'iconfont icon-17',
        index: '/form/index',
        title: 'form表单'
      }, {
        id: '6',
        icon: 'iconfont icon-wailian',
        index: '/example/iframe',
        title: 'iframe'
      }, {
        id: '4',
        icon: 'iconfont icon-shuzhuangtu',
        index: '/example/tree',
        title: '树'
      }, {
        id: '5',
        icon: 'iconfont icon-huaban-',
        index: '/example/editor',
        title: '富文本'
      }]
    }
  },

  computed: {
    onRoutes () {
      return this.$route.path
    }
  },

  created () {
    transmit.$on('collapse', msg => {
      this.collapse = msg
    })
  }
}
</script>

<style scoped lang="scss">
  .sidebar {
    display: block;
    position: absolute;
    left: 0;
    top: 60px;
    bottom:0;
    overflow-y: hidden;
    z-index: 999;
    text-align: left;
    background: #15253a;
    width: 100%;
    // padding: 5px;

    ul {
      height:100%;
      background:#15253a;
    }

    .Admin {
      font-size: 22px;
      margin-right: 10px;
    }
  }
  .el-submenu{
    color:rgb(191, 203, 217)!important;
    background:#15253a;
    .el-submenu__title{
      color:rgb(191, 203, 217)!important;
      background: #15253a;
    }
  }
  .is-opened{
    background: #001f28
  }
  .el-submenu__title,
  .el-submenu__title span{
    color:rgb(191, 203, 217)!important;
   }
  .sidebar-el-menu{
    background: #15253a;
    vertical-align: middle;
  }
  .sidebar-el-menu span{
      padding-left: 15px;
  }
  .sidebar-el-menu .iconfont{
    font-size: 20px;
    font-weight: bold;
  }
  .el-menu-item:focus, .el-menu-item:hover{
    background: #001F28
  }
  .el-menu-item{
     color: rgb(191, 203, 217)
  }
  .el-scrollbar {
    height: calc(100% - 43px);
  }

  .el-scrollbar__wrap {
    overflow-x: hidden;
  }

  .sidebar::-webkit-scrollbar {
    width: 0;
  }

  .sidebar-el-menu:not(.el-menu--collapse) {
    width: 230px;
  }
</style>
