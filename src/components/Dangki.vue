<template>
  <div class="wrapper">
    <div class="menu">
      <form @submit.prevent="handleSubmit">
        <h1>Đăng Ký</h1>
        <div class="in" style="display: flex;">
          <label for="first-name">Nhập Họ</label>
          <input type="text" id="first-name" v-model="firstName" placeholder="Họ" required class="input-field">
          <img src="../assets/user (2).png" alt="user icon">
  
          <label for="last-name">Nhập Tên</label>
          <input type="text" id="last-name" v-model="lastName" placeholder="Tên" required class="input-field">
          <img src="../assets/user (2).png" alt="user icon">
        </div>
  
        <div class="sdt">
          <label for="phone">SĐT</label>
          <input type="tel" v-model="phone" id="phone" placeholder="Nhập SĐT" required class="input-field">
        </div>
  
        <div class="gamil">
          <label for="email">Email</label>
          <input type="email" v-model="email" id="email" placeholder="Nhập Email" required class="input-field">
        </div>
  
        <div class="in" style="display: flex; margin: 20px 0;">
          <label for="password">Mật khẩu</label>
          <input type="password" v-model="password" id="password" placeholder="Password" required class="input-field">
          <img src="../assets/padlock (1).png" alt="padlock">
  
          <label for="confirm-password">Nhập lại Password</label>
          <input type="password" v-model="confirmPassword" id="confirm-password" placeholder="Nhập lại Password" required class="input-field">
          <img src="../assets/padlock (1).png" alt="padlock">
        </div>
  
        <button type="submit" class="dn">Đăng Ký</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { useUserStore } from '@/store/userStore'

const router = useRouter()
const userStore = useUserStore()

const firstName = ref('')
const lastName = ref('')
const phone = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')

const handleSubmit = async () => {
  try {
    await userStore.registerUser({
      firstName: firstName.value,
      lastName: lastName.value,
      phone: phone.value,
      email: email.value,
      password: password.value,
      confirmPassword: confirmPassword.value
    })

    alert(`Đăng ký thành công! Vui lòng kiểm tra email.`)
    router.push('/dangnhap')
  } catch (error) {
    alert(error.message)
  }
}

</script>


<style scoped>
* {

margin: 0;

padding: 0;

box-sizing: border-box;

font-family: sans-serif;

}



body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.wrapper {
    background: url("../assets/pngtree-desktop-wallpaper-hd-image_15634025.jpg") no-repeat center center;
    background-size: cover;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}


.background { 
  width: 100%;
  min-height: 100vh;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}




/* Khối menu */

.menu {

background: transparent;

border: 2px solid gray;

backdrop-filter: blur(20px);

box-shadow: 0 0 10px black;

max-width: 600px;

color: aliceblue;

border-radius: 15px;

padding: 30px 15px;

}



.menu h1 {

font-size: 40px;

text-align: center;

margin-bottom: 30px;

}



/* Input fields */

.menu .in {

position: relative;

max-width: 100%;

margin: 20px 0;

display: flex;

gap: 10px; /* Tạo khoảng cách giữa các input */

}



.in input {
flex: 1; /* Tự động giãn để chiếm khoảng không gian phù hợp */
height: 50px;
background-color: transparent;
border: 2px solid grey;
border-radius: 40px;
color: aliceblue;
outline: none;
padding-left: 15px;
}



.in input::placeholder {

color: aliceblue;

}



.in img {

position: absolute;

right: 15px;

top: 50%;

transform: translateY(-50%);

font-size: 20px;

}



/* Các trường riêng biệt */

.sdt input,

.gamil input {

width: 100%;

height: 50px;

background-color: transparent;

border: 2px solid grey;

border-radius: 40px;

padding: 0 15px;

color: aliceblue;

outline: none;

margin-bottom: 20px;

}
.sdt input::placeholder,

.gamil input::placeholder {

color: aliceblue;

}



/* Nút Đăng Ký */

.menu .dn {

width: 100%;

height: 45px;

background: white;

border: none;

border-radius: 40px;

box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

cursor: pointer;

font-size: 16px;

color: grey;

font-weight: 600;

transition: background 0.3s ease;

}



.menu .dn:hover {

background: #f0f0f0;

}
/* Media query cho màn hình lớn (Desktop) */
@media (min-width: 1025px) {
section nav {
    flex-direction: row; /* Để mặc định là hàng ngang */
    justify-content: space-between;
}

section nav ul {
    flex-direction: row; /* Menu sẽ nằm ngang */
}

section .main {
    flex-direction: row;
    justify-content: space-between;
}

section .main .men_text h1 {
    font-size: 60px; /* Tăng kích thước tiêu đề */
}

section .main .main_image img {
    width: 50%; /* Giảm kích thước ảnh */
}

.menu .menu_box {
    grid-template-columns: repeat(3, 1fr); /* 3 cột cho màn hình lớn */
}

.gallary .gallary_image_box {
    grid-template-columns: repeat(3, 1fr); /* 3 cột cho gallery */
}

.review .review_box {
    flex-direction: row; /* Sử dụng dạng row cho màn hình lớn */
}

.order .order_main form {
    grid-template-columns: repeat(3, 1fr); /* 3 cột cho form */
}

.team .team_box {
    flex-direction: row; /* Hàng ngang cho đội ngũ */
}

footer {
    padding: 60px 40px; /* Tăng padding cho footer */
}
}
/* Media query cho màn hình Retina */
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
section .main .main_image img,
.menu .menu_box img,
.gallary .gallary_image_box img {
    image-rendering: optimizeQuality; /* Cải thiện chất lượng hình ảnh trên màn hình Retina */
}
}
/* Media query cho thiết bị có chiều rộng nhỏ hơn 600px */
@media (max-width: 600px) {
section nav {
    padding: 10px 15px; /* Thêm padding cho nav */
}

section .main .men_text h1 {
    font-size: 35px; /* Giảm kích thước tiêu đề */
}

section .main .main_image img {
    width: 90%; /* Giảm kích thước ảnh */
}

.menu .menu_box {
    grid-template-columns: 1fr; /* Một cột cho menu */
}

.gallary .gallary_image_box {
    grid-template-columns: 1fr; /* Một cột cho gallery */
}

.review .review_box {
    flex-direction: column; /* Sắp xếp lại dạng cột cho review */
}

footer {
    padding: 15px 10px; /* Giảm padding cho footer */
}
}
</style>
