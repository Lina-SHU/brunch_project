import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../views/Front.vue'),
    children: [
      {
        path: '',
        component: () => import('../views/Front/Index.vue')
      },
      {
        path: 'about',
        component: () => import('../views/Front/About.vue')
      },
      {
        path: 'products',
        component: () => import('../views/Front/Products.vue')
      },
      {
        path: 'product/:id',
        component: () => import('../views/Front/Product.vue')
      },
      {
        path: 'cart',
        component: () => import('../views/Front/Cart.vue')
      },
      {
        path: 'order',
        component: () => import('../views/Front/Order.vue')
      },
      {
        path: 'order/:id',
        component: () => import('../views/Front/PayOrder.vue')
      },
      {
        path: 'order/:id/payConfirm',
        component: () => import('../views/Front/PayConfirm.vue')
      },
      {
        path: 'login',
        component: () => import('../views/Front/Login.vue')
      }
    ]
  },
  {
    path: '/admin',
    component: () => import('../views/Backend.vue'),
    children: [
      {
        path: '',
        component: () => import('../views/Admin/Products.vue')
      },
      {
        path: 'orders',
        component: () => import('../views/Admin/Order.vue')
      },
      {
        path: 'coupons',
        component: () => import('../views/Admin/Coupon.vue')
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../views/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'active',
  scrollBehavior (to, from, savedPosition) {
    return {
      top: 0
    }
  }
})

export default router
