<template>
  <section id="Home">
    <nav>
      <div class="logo">
        <img src="../assets/logo.png" alt="Logo" />
        <img style="" src="https://cdn.haitrieu.com/wp-content/uploads/2023/01/Logo-Truong-Cao-dang-Kinh-te-TP.HCM_.png" alt="">
      </div>

      <div class="slogan">
      </div>

      <ul>
        <li><router-link to="/">Trang chủ</router-link></li>
        <li><router-link to="/gioithieu">Giới thiệu</router-link></li>
        <li><router-link to="/Sanpham">Thực đơn</router-link></li>
        <li><router-link to="/Lienhe">Liên hệ</router-link></li>
      </ul>

      <div class="login">
  <button><router-link to="/dangnhap" class="login-link">Đăng nhập</router-link></button>
  <button><router-link to="/dangky" class="login-link">Đăng ký</router-link></button>
</div>
      <div class="icon">
        <ul>
          <li><img src="../assets/tk.png" alt="User Account" /></li>
          <li><img src="../assets/heart.png" alt="Favorites" /></li>
          <li  @click="openCart">
            <img src="@/assets/shopping-cart (1).png" alt="Cart" />
          </li>
          <span v-if="count">{{ count }}</span>
        </ul>
      </div>
    </nav>
    <div v-if="showCart" class="modal-backdrop" @click.self="close">
      <div class="modal-content">
        <h2>Giỏ hàng của bạn</h2>
        <ul>
          <li v-for="item in cart.items" :key="item.id">
            <img :src="item.image" alt="" class="thumb" />
            <div class="info">
              <h3>{{ item.name }}</h3>
              <label>
                Số lượng:
                <input type="number" v-model.number="item.quantity" min="1" @change="updateItemQuantity(item.id, item.quantity)" />
              </label>
              <p>Giá: {{ item.price }} VNĐ</p>
              <p>Tổng: {{ item.quantity * item.price }} VNĐ</p>
            </div>
            <button @click="RemoveItem(item.id)">Xoá</button>
          </li>
        </ul>
        <div class="actions">
          <button @click="checkout">Thanh toán</button>
          <button @click="close">Đóng</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useCartStore } from '@/store/cart'

const cart = useCartStore()

const showCart = ref(false)

const count = computed(() => {
  return cart.items.reduce((sum, item) => sum + item.quantity, 0)
})

function openCart() {
  showCart.value = true
}

function RemoveItem(id) {
  cart.removeFromCart(id)
}

function updateItemQuantity(id, quantity) {
  cart.updateQuantity(id, quantity)
}

function close() {
  showCart.value = false
}

function checkout() {
  const total = cart.checkout()
  alert(`Tổng đơn hàng: ${total.toLocaleString('vi-VN')} VNĐ`)
  close()
}
</script>

<style scoped>
/* Scoped styles for the Header component */

html {
  /* làm mượt thanh cuộn */
  scroll-behavior: smooth;
}

body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
}

/* phần đầu thanh menu */
section {
  width: 100%;
}

section nav {
  display: flex;
  /* flexbox hàng ngang canh đều */
  justify-content: space-around;
  /* flexbox hàng dọc ở giữa */
  align-items: center;
  /* cố định menu */
  position: sticky;
  right: 0;
  left: 0;
  background: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  z-index: 1000;
  /* phần hiển thị trên cùng */
}

.login-link {
  text-decoration: none;  /* Xoá gạch dưới */
  color: black;           /* Màu chữ nếu muốn */
  display: inline-block;  /* Giúp thẻ router-link không phá vỡ button */
  width: 100px;            /* Chiếm toàn bộ nút */
  height: 60px;
  line-height: 1px;      /* Canh giữa nếu muốn đẹp */
  text-align: center;
}

.login-link:hover {
  color: rgb(236, 66, 66);  /* Màu khi hover */
  text-decoration: none;
}
.login {
  color: black;   
  display: flex;
  gap: 20px; /* khoảng cách giữa 2 nút */
}

.login button {
  padding: 5px 2px;
  border: 1px solid gray;
  border-radius: 20px;
  background: white;
  cursor: pointer;
  transition: 0.3s;
}
button:hover {
  box-shadow: 0 2px 3px black;
  width: 160px;
}

.logo img {
  width: 100px;
  max-height: 100px ;
  cursor: pointer;
  margin: 7px 0;
}

section nav ul {
  list-style: none;
  display: flex; /* Để các li nằm trên một hàng */
  margin: 0;
  padding: 0;
}

section nav ul li {
  margin: 0 15px;
}

section nav ul li a {
  text-decoration: none;
  color: #000;
  font-weight: 500;
  font-size: 17px;
  transition: 0.1s;
  position: relative; /* Để tạo after pseudo-element */
}

section nav ul li a::after {
  content: '';
  width: 0;
  height: 2px;
  background: red;
  display: block;
  transition: 0.2s linear;
  position: absolute;
  bottom: -5px; /* Hiển thị gạch dưới dưới chữ */
  left: 0;
}

section nav ul li a:hover::after,
section nav ul li a.active-link::after {
  width: 100%;
}

section nav ul li a:hover,
section nav ul li a.active-link {
  color: rgb(236, 66, 66);
}

section nav .icon {
  list-style: none;
}

section nav .icon ul {
  list-style: none;
  display: flex; /* Để các li nằm trên một hàng */
  margin: 0;
  padding: 0;
}

section nav .icon li {
  margin: 0 5px;
}

section nav .icon li img {
  font-size: 18px;
  color: #000;
  cursor: pointer;
  transition: 0.3s;
  width: 24px; /* Điều chỉnh kích thước icon nếu cần */
  height: 24px;
  display: block; /* Loại bỏ khoảng trắng thừa dưới hình ảnh */
}

section nav .icon li img:hover {
  color: #fac031;
}

.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
}
.modal-content {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  width: 100%;
  max-width: 550px;
}
.thumb {
  width: 50px;
  height: 50px;
  object-fit: cover;
  margin-right: 0.5rem;
}
.info {
  display: inline-block;
  vertical-align: top;
}
.actions {
  margin-top: 1rem;
  text-align: right;
}
.actions button {
  margin-left: 0.5rem;
}
</style>