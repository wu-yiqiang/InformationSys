// home.js
const Layout = () => import('@/layout/index.vue')
const Home = () => import('@/views/home/index.vue')
// 数据统计模块
// const Statistics = () => import('@/views/statistics/index.vue')
const Userstatistics = () => import('@/views/statistics/userStatistics.vue')
const Datastatistics = () => import('@/views/statistics/dataStatistics.vue')
const Systemstatistics = () => import('@/views/statistics/systemStatistics.vue')
// 导入SVG图片
// const UserstatisticsSVG = () => '@/'
export default [
  {
    path: '/home',
    component: Layout,
    name: 'Dashboard',
    meta: {
      title: '工作台',
    },
    icon: 'home',
    children: [
      {
        path: '',
        name: 'home',
        component: Home,
        meta: {
          title: '首页',
          affix: true,
        },
      },
    ],
  },
  {
    path: '/Statistics',
    component: Layout,
    name: 'Statistics',
    meta: {
      title: '数据统计',
    },
    icon: 'el-icon-delete-solid',
    children: [
      {
        path: '/userStatistics',
        name: 'userStatistics',
        component: Userstatistics,
        meta: {
          title: '用户统计',
        },
      },
      {
        path: '/dataStatistics',
        name: 'dataStatistics',
        component: Datastatistics,
        meta: {
          title: '数据统计',
        },
      },
      {
        path: '/systemStatistics',
        name: 'systemStatistics',
        component: Systemstatistics,
        meta: {
          title: '系统分析',
        },
      },
    ],
  },
]
