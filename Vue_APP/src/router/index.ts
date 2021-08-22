import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
const routes: Array<RouteRecordRaw> = [

  {
    path: "/",
    name: "home",
    redirect:'/home',
    meta: {
      title: "首页",
      keepAlive: true
    },
    component: () => import("@/views/Home/index.vue"),
    children: [
      {
        path: "/home",
        name: "home",
        meta: {
          title: "首页",
          keepAlive: true
        },
        component: () => import("@/views/Information/Information.vue"),
      },
      
      {
        path: "/video",
        name: "video",
        meta: {
          title: "视频",
          keepAlive: true,
        },
        component: () => import("@/views/Video/index.vue"),
      },

      {
        path: "/user",
        name: "user",
        meta: {
          title: "用户",
          keepAlive: true,
        },
        component: () => import("@/views/User/index.vue"),
      },
  
      {
        path: "/message",
        name: "message",
        meta: {
          title: "消息",
          keepAlive: true,
        },
        component: () => import("@/views/Message/index.vue"),
      },
    
      {
        path: "/livebroadcast",
        name: "livebroadcast",
        meta: {
          title: "livebroadcast",
          keepAlive: true,
        },
        component: () => import("@/views/LiveBroadcast/index.vue"),
      },
      
      {
        path: "/attention",
        name: "attention",
        meta: {
          title: "关注",
          keepAlive: true
        },
        component: () => import('@/views/Follow/index.vue'),
        children: [
          // 关注人员详情页
          { path: 'artical', component: () => import("@/views/Follow/FollowDetail/index.vue") },
        ],
      },
    ]
  },

  

  {
    path: "/login",
    name: "login",
    meta: {
      title: "登录",
      keepAlive: true,
    },
    component: () => import("@/views/Login/index.vue"),
  },

  {
    path: "/search",
    name: "search",
    meta: {
      title: "搜索",
      keepAlive: true,
    },
    component: () => import("@/views/Search/index.vue"),
  },

  {
    path: "/upload",
    name: "upload",
    meta: {
      title: "上传",
      keepAlive: true,
    },
    component: () => import('@/views/Upload/index.vue'),
    children: [
      // 上传文章
      { path: 'artical', component: () => import("@/views/Upload/UploadArtical/index.vue") },
      // 上传图片
      { path: 'image', component: () => import("@/views/Upload/UploadImage/index.vue") },
      // 上传视频
      { path: 'video', component: () => import("@/views/Upload/UploadVideo/index.vue") },
    ],
  },


  {
    path: "/neaby",
    name: "nearby",
    meta: {
      title: "附近",
      keepAlive: true
    },
    component: () => import('@/views/Nearby/index.vue'),
    children: [
      // 附近
      { path: 'artical', component: () => import("@/views/Nearby/NearbyDetail/index.vue") },
    ],
  },

  {
    path: "/search",
    name: "search",
    meta: {
      title: "搜索",
      keepAlive: true,
    },
    component: () => import("@/views/Search/index.vue"),
    
  },

];
const router = createRouter({
  history: createWebHashHistory(),
  routes
});
export default router;