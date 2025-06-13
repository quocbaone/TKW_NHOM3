<template>
    <div class="product-detail">
      <!-- 🔙 Nút quay lại -->
      <button class="back-button" @click="goBack">⬅️ Quay lại</button>
  
      <div v-if="product">
        <!-- Hình ảnh sản phẩm -->
        <img :src="product.image" :alt="product.name" class="product-image" />
  
        <!-- Tên sản phẩm -->
        <h1>{{ product.name }}</h1>
  
        <!-- Mô tả sản phẩm -->
        <p>{{ product.description }}</p>
  
        <!-- Giá sản phẩm -->
        <p>Giá: {{ product.price }}</p>
  
        <!-- Đánh giá sản phẩm -->
        <p>Đánh giá: {{ product.rating }} / 5</p>
  
        <!-- Thêm vào giỏ hàng -->
        <button @click="addToCart(product)">Thêm vào giỏ</button>
      </div>
      <div v-else>
        <p>Sản phẩm không tồn tại hoặc không tìm thấy!</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useRoute, useRouter } from 'vue-router'
  import { menuItems } from '@/store/menuItems'
  import { useCartStore } from '@/store/cart'
  
  const route = useRoute()
  const router = useRouter()
  const cart = useCartStore()
  const menu = menuItems()
  
  // Lấy thông tin sản phẩm từ route params
  const productId = parseInt(route.params.id)
  const product = menu.items.find(item => item.id === productId)
  
  // Thêm sản phẩm vào giỏ
  function addToCart(item) {
    cart.addToCart(item)
  }
  
  // 👉 Hàm quay lại trang trước
  function goBack() {
    router.back() // hoặc router.push({ name: 'DanhSachSanPham' }) nếu bạn muốn cố định trang quay lại
  }
  </script>
  
  <style scoped>
  .product-detail {
    text-align: center;
    padding: 20px;
  }
  
  .product-detail img {
    width: 50%;
    max-width: 400px;
    margin-bottom: 20px;
  }
  
  .product-detail h1 {
    font-size: 32px;
    margin-bottom: 10px;
  }
  
  .product-detail p {
    font-size: 18px;
    margin-bottom: 10px;
  }
  
  .product-detail button {
    padding: 10px 20px;
    background-color: #fac031;
    border: none;
    border-radius: 6px;
    cursor: pointer;
  }
  
  .product-detail button:hover {
    background-color: #f5a623;
  }
  
  .back-button {
    margin-bottom: 20px;
    padding: 10px 16px;
    background-color: #ddd;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 16px;
  }
  </style>
  