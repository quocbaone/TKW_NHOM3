<template>
  <div class="container">
    <div class="menu">
      <form @submit.prevent="handleLogin">
        <h1>Đăng Nhập</h1>
        <div class="in">
          <input type="text" v-model="username" placeholder="Username" required />
          <img src="../assets/user (2).png" alt="User Icon" />
        </div>
        <div class="in">
          <input type="password" v-model="password" placeholder="Password" required />
          <img src="../assets/padlock (1).png" alt="Password Icon" />
        </div>
        <div class="qmk">
          <input type="checkbox" v-model="rememberMe" id="mk" />
          <label for="mk"><a href="#">Quên mật khẩu</a></label>
        </div>
        <button type="submit" class="dn">Đăng nhập</button>
        <div class="dk">
          nếu bạn chưa có tài khoản
          <router-link to="/dangky" class="dnn">Đăng Ký</router-link>
        </div>
      </form>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from '@/supabase' // Đường dẫn đúng theo vị trí bạn lưu file

const router = useRouter()
const username = ref('')
const password = ref('')
const rememberMe = ref(false)

const handleLogin = async () => {
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('email', username.value)
    .eq('password', password.value) // Gợi ý: nên hash password về sau

  if (error) {
    alert('Lỗi đăng nhập: ' + error.message)
    return
  }

  if (data.length === 1) {
    alert('Đăng nhập thành công!')
    router.push('/trangchu')
  } else {
    alert('Sai tài khoản hoặc mật khẩu!')
  }
}
</script>


<style scoped>
*{

margin: 0;

border: 0;

box-sizing: border-box;/* Đảm bảo rằng chiều rộng và chiều cao của phần tử sẽ bao gồm cả padding và border. */

font-family:sans-serif; 

}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: url("../assets/pngtree-desktop-wallpaper-hd-image_15634025.jpg") no-repeat;
  background-size: cover;
  background-position: center;
}

body{

display: flex;
justify-content: center;
align-items: center;
min-height: 100vh;

background-size: cover;
background-position: center;
}

.menu{

 background:transparent;/*Lớp nền của menu trong suốt. */

border: 2px solid gray;

backdrop-filter: blur(20px); /*Áp dụng hiệu ứng làm mờ nền phía sau menu, tạo hiệu ứng glassmorphism.*/

box-shadow: 0 0 10px black;

width: 420px;

color: aliceblue;

border-radius: 15px;

padding: 30px 40px ;

}

.menu h1{

font-size: 40px;

text-align: center;

}

.menu .in{

position: relative;

width: 100%;

height: 50px;

margin: 30px 0;

}

.in input{
width: 100%;
height: 100%;
background-color:transparent;
border: none;
outline: none;
border: 2px solid grey;
border-radius: 40px;
padding-left: 15px;
}

.in input::placeholder{

color: aliceblue;

}

.in img{ 

position: absolute;/*Đặt icon ở vị trí tuyệt đối trong input.*/

right: 20px;

top: 50%;

transform: translateY(-50%); /*Căn giữa icon theo chiều dọc của input.*/

font-size: 20px;



}

.in .qmk{

display: flex;

font-size: 14.5px;

margin: -15px 0 15px;

}

.qmk label input{

accent-color: #fff;

margin-left: 4px;

color: white;

}

.qmk a{

text-decoration: none;

color: white;

}

.qmk a:hover{

text-decoration: underline;

}

.menu .dn{
width: 100%;
height: 45px;
background: #fff;
border: none;
border-radius: 40px;
box-shadow: 0 0 10px rgba(0,0,0,.1);
cursor: pointer; /*thay đổi trỏ chuột thành bàn tay */
font-size: 16px;
color: grey;
font-weight: 600px;
margin-top: 15px;
}
.dn {
  display: inline-block;
  text-align: center;
  line-height: 45px;  /* cho chữ nằm giữa nút */
  text-decoration: none;
  width: 100%;
  height: 45px;
  background: #fff;
  border-radius: 40px;
  box-shadow: 0 0 10px rgba(0,0,0,.1);
  cursor: pointer;
  font-size: 16px;
  color: grey;
  font-weight: 600;
  margin-top: 15px;
}

.dn a {

text-decoration: none;

color: grey;

}

.menu .dk{

font-size: 14.5px;

text-align: center;

margin: 20px 0 15px;



}

.dk p a{

color: white;

text-decoration: none;

font-weight: 600;

}

.dk p a:hover{

text-decoration: underline;

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
