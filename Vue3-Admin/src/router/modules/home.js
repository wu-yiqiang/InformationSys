// home.js
const Layout = () => import('@/layout/index.vue')
const Home = () => import('@/views/home/index.vue')
// 数据统计模块
// const Statistics = () => import('@/views/statistics/index.vue')
const Userstatistics = () => import('@/views/statistics/userStatistics.vue')
const Datastatistics = () => import('@/views/statistics/dataStatistics.vue')
const Systemstatistics = () => import('@/views/statistics/systemStatistics.vue')
const DeviceQuery = () => import('@/views/device/Query.vue')

// 设备管理
const Equipment = () => import('@/views/user/index.vue')
// 用户管理
const User = () => import('@/views/user/User.vue')

// 任务管理
const TimeTask = () => import('@/views/task/TimeTask.vue')

// 用户数据
const userDigital = () => import('@/views/digital/user.vue')
const channelDigital = () => import('@/views/digital/channel.vue')
export default [
  {
    path: '/home',
    component: Layout,
    name: 'home',
    meta: {
      title: '工作台',
    },
    icon: 'workstation',
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
    icon: 'data',
    children: [
      {
        path: '/userStatistics',
        name: 'userStatistics',
        component: Userstatistics,
        meta: {
          title: '用户统计',
        },
        icon: 'menu',
      },
      {
        path: '/dataStatistics',
        name: 'dataStatistics',
        component: Datastatistics,
        meta: {
          title: '数据统计',
        },
        icon: 'menu',
      },
    ],
  },
  {
    path: '/Device',
    name: 'Device',
    component: Layout,
    meta: {
      title: '设备管理',
    },
    icon: 'equipment',
  },
  {
    path: '/Device',
    name: 'Device',
    component: Layout,
    meta: {
      title: '报表统计',
    },
    icon: 'report',
  },
  {
    path: '/User',
    name: 'User',
    component: User,
    meta: {
      title: '用户管理',
    },
    icon: 'user',
    children: [
      {
        path: '/DeviceQuery',
        name: 'DeviceQuery',
        component: DeviceQuery,
        meta: {
          title: '用户查询',
        },
      },
    ],
  },
  {
    path: '/Task',
    name: 'Task',
    component: Layout,
    meta: {
      title: '任务管理',
    },
    icon: 'task',
    children: [
      {
        path: '/TimeTask',
        name: 'TimeTask',
        component: TimeTask,
        meta: {
          title: '定时任务',
        },
      },
    ],
  },
  {
    path: '/Device',
    name: 'Device',
    component: Layout,
    meta: {
      title: '系统配置',
    },
    icon: 'setting',
  },
  {
    path: '/Device',
    name: 'Device',
    component: Layout,
    meta: {
      title: '硬件管理',
    },
    icon: 'hardware',
  },
  {
    path: '/Device',
    name: 'Device',
    component: Layout,
    meta: {
      title: '软件管理',
    },
    icon: 'software',
  },

  {
    path: '/Digital',
    name: 'Digital',
    component: Layout,
    meta: {
      title: '数据管理',
    },
    icon: 'digital',
    children: [
      {
        path: '/user',
        name: 'user',
        component: userDigital,
        meta: {
          title: '用户数据',
        },
        icon: 'menu',
      },
      {
        path: '/channel',
        name: 'channel',
        component: channelDigital,
        meta: {
          title: '频道管理',
        },
        icon: 'menu',
      },
    ],
  },
  {
    path: '/systemStatistics',
    name: 'systemStatistics',
    component: Systemstatistics,
    meta: {
      title: '系统监测',
    },
    icon: 'monitor',
  },
]
