<template>
    <div>
      <div class="menu">
        <div class="ani">
          <h1><span>Menu</span></h1>
        </div>
        <div class="menu_box">
          <div v-for="item in menu.items" :key="item.id" class="menu_card">
            <div style="width: 95%; height: 95%;">
              <!-- 👇 Thêm @click vào ảnh -->
              <img
                :src="item.image"
                class="menu_img"
                style="width: 100%; height: 60%; cursor: pointer"
                @click="goToDetail(item.id)"
              />
              <h2>{{ item.name }}</h2>
              <p>{{ item.price }}</p>
              <button @click="addToCart(item)">
                Thêm vào giỏ
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { useCartStore } from '@/store/cart'
  import { menuItems } from '@/store/menuItems'
  
  const cart = useCartStore()
  const menu = menuItems()
  const showCart = ref(false)
  const router = useRouter()
  
  function addToCart(item) {
    showCart.value = true
    cart.addToCart(item)
  }
  
  // 👇 Điều hướng đến trang chi tiết sản phẩm
  function goToDetail(id) {
    router.push({ name: 'ChiTietSanPham', params: { id } })
  }
  </script>
  


<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
}

/* Menu */
.menu {
    width: 100%;

}

.menu h1 {
    font-size: 55px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
}

.menu h1 span {
    color: #fac031;
    margin-left: 15px;
    z-index: 1;
}

.menu h1 span::after {
    content: '';
    width: 100%;
    height: 2px;
    background: #fac031;
    display: block;
    position: relative;
    bottom: 15px;
}

.menu .menu_box {
    width: 95%;
    margin: 0 auto;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 15px;
}

.menu .menu_box .menu_card {
    display: flex;
    width: 325px;
    height: 480px;
    align-content: center; 
    justify-content: center;
    text-align: center;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.menu_card:hover {
    box-shadow: 0 5px 8px black;
    border-radius: 20px;
}

.menu_card .menu_image {
    width: 300px;
    height: 245px;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
}

.menu_card .menu_image img {
    object-fit: cover; /* Đảm bảo hình ảnh không bị biến dạng */
    object-position: center; /* Đặt vị trí ảnh ở giữa */
    transition: 0.3s;
}

.menu_card .menu_image:hover img {
    transform: scale(1.1); /* Phóng to ảnh khi hover */
}

/* Menu Animation */
.ani h1 {
    animation: slideInRight 2s ease-in-out;
}

@keyframes slideInRight {
    0% {
        transform: translateX(100%);
    }
    100% {
        transform: translateX(0);
    }
}

</style>
