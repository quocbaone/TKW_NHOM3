<template>
  <div>
   

    <main class="about-main-wrapper">
      <div class="anhchinh">
        <h2 class="anhphu">Giới Thiệu</h2>
        <img src="../assets/chillthai.webp">
      </div>
        <div class="gioithieu">
          <div class="gt">
            <h2>Giới thiệu</h2>
            <h3>ChillThai là một nhà hàng nhỏ rộn ràng, nơi bạn cảm nhận một nền văn hoá ẩm thực Thái Lan đầy cá tính.</h3>
            <img src="../assets/duongpho.webp" alt="Street food Thailand">
            <h5>Đường phố Thái Lan</h5>
          </div>

          <div class="gt">
            <p>Thái Lan không chỉ là thiên đường du lịch mà còn rất nổi tiếng bởi nền ẩm thực phong phú. Ẩm thực Thái Lan (tiếng Thái: อาหารไทย) là sự hòa trộn tinh tế của thảo dược, gia vị và thực phẩm tươi sống với phong cách chế biến đặc trưng thú vị.</p><br>
            <p>Thương hiệu ChillThai tạo điểm nhấn bởi nét ẩm thực đa dạng, không đơn thuần là sắc - vị - hương, mà còn mang đến trải nghiệm tuyệt vời cho thực khách tới dùng bữa. Bên cạnh việc giữ gìn bản sắc món Thái Lan chuẩn vị, ChillThai liên tục cải tiến, sáng tạo các món ăn để phù hợp với khẩu vị người Việt để truyền tải nguyên vẹn tinh hoa ẩm thực xứ Chùa Vàng.</p>
            <img src="../assets/thit.png" alt="Thai Cuisine">
            <h5>Một số món đặc trưng tại ChillThai</h5>
          </div>

          <div class="gt1">
            <p>Chất lượng món ăn cùng dịch vụ tận tâm là những yếu tố giúp ChillThai trở thành lựa chọn hàng đầu của các tín đồ ẩm thực Thái Lan tại TP. HCM. Không gian quán được thiết kế độc đáo, ấn tượng với những nét riêng nổi bật khó bắt gặp. ChillThai luôn mong muốn mang đến cảm giác thoải mái, ấm cúng cho thực khách bằng sự tỉ mỉ trong cách bài trí, chỉn chu trong từng góc nhỏ.</p>
            <img src="../assets/chill.jpg" alt="ChillThai Space">
            <h5>Không gian ChillThai</h5>
          </div>

          <div class="gt">
            <p>Bên cạnh sự thú vị trong ẩm thực và không gian, cách phục vụ tận tình, vui vẻ, đáng yêu cũng là nét đặc trưng nổi bật của ChillThai. Bất cứ thực khách nào tới quán cũng có thể cảm nhận được sự nhiệt tình, hiếu khách và chu đáo của từng nhân viên tại đây. Bởi lẽ, ẩm thực không chỉ là hương vị, mà còn là tinh thần và trải nghiệm trong từng khoảnh khắc.</p>
            <img src="../assets/checkin.png" alt="Customer Check-In">
            <h5>Hình ảnh khách check in</h5>
            <p>Nếu trót đam mê hương vị chua, cay, mặn, ngọt bùng nổ của các món ăn Thái Lan, đồng thời muốn trải nghiệm không gian độc đáo, ChillThai hứa hẹn là lựa chọn hàng đầu với thực khách.</p><br>
            <p>Mời quý khách đến thưởng thức và trải nghiệm một trong những nhà hàng Thái Lan ngon nhất mang tên ChillThai!</p>
          </div>
        </div>
    </main>

  </div>
</template>

<script>
export default {
  name: 'AboutPage',
}
</script>

<style scoped>
/* Scoped styles for this component */
.about-main-wrapper { /* Áp dụng CSS của .wrapper vào đây */
  width: 100%;
  display: block; /* bỏ flex để các phần xếp theo chiều dọc */
  padding: 0;
  margin: 0;
  font-size: 20px;
}

.anhchinh {
  text-align: center;
  margin:10px 0px;
  position: relative;
  overflow: hidden;
}
.anhchinh img{
  width: 100%;         /* Chiếm toàn bộ chiều ngang */
  height: 500px;        /* Tự động tính chiều cao theo tỉ lệ */
  object-fit: cover;   /* Đảm bảo ảnh không bị méo */
  display: block;      /* Xóa khoảng trắng thừa dưới ảnh */
}

.anhphu {
  font-size: 2rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 3rem;
  font-weight: bold;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
  z-index: 1;

}



.gioithieu {
  padding: 20px;
  margin-left: 30%;
  width: 40%;
}

.gt {
  margin-bottom: 20px;
}

.gt img {
  width: 100%;
  height: auto;
  margin-top: 10px;
  padding: 40px;
}

.gt1 img {
  width: 100%;
  height: auto;
  margin-top: 10px;
}

h5 {
  font-size: 1.2rem;
  margin-top: 10px;
}

#header, #footer {
  background-color: #f8f8f8;
  padding: 10px;
  text-align: center;
}
</style>