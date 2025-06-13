import { createRouter, createWebHistory } from 'vue-router'
import Home from '../view/Home.vue'
import GioiThieu from '@/view/Gioithieu.vue'
import Sanpham from '../view/Sanpham.vue'
import LienHe from '@/components/LienHe.vue'
import DangNhap from '@/components/DangNhap.vue'
import Dangki from '@/components/Dangki.vue'
import TrangChu from '@/components/Trangchu.vue'
import ChiTietSanPham from '@/view/ChiTietSanPham.vue' // thêm dòng này

// Định nghĩa các route của bạn
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/gioithieu',
    name: 'Gioithieu',
    component: GioiThieu
  },
  {
    path: '/sanpham',
    name: 'Sanpham',
    component: Sanpham
  },
  {
    path:'/Lienhe',
    component: LienHe
  },
  {
    path:'/dangnhap',
    component: DangNhap
  },
  {
    path:'/dangky',
    component: Dangki
  },
  {
    path:'/trangchu',
    component: TrangChu
  },
  {
    path: '/sanpham/:id',
    name: 'ChiTietSanPham',
    component: ChiTietSanPham
  }
  
]

// Tạo router instance
const router = createRouter({
  history: createWebHistory(), // Sử dụng History API
  routes ,// Danh sách các route
})

export default router
