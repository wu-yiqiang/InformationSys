// home.js
const Layout = () => import('@/layout/index.vue')
const Home = () => import('@/views/home/index.vue')
// 数据统计模块
const Statistics = () => import('@/views/statistics/index.vue')
const userStatistics = () => import('@/views/statistics/userStatistics.vue')
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
    component: Statistics,
    name: 'Statistics',
    meta: {
      title: '数据统计',
    },
    icon: 'el-icon-more',
    children: [
      {
        path: '/userStatistics',
        name: 'userStatistics',
        component: userStatistics,
        meta: {
          title: '用户统计',
        },
      },
    ],
  },
]
