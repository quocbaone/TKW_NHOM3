<template>
  <footer>
    <nav class="dc">
      <div class="ndcuoi">
        <div class="row">
          <!-- cột1 -->
          <div class="colum">
            <img src="../assets/logo.webp" alt="logo" class="logo">
            <p class="desc">Nếu bạn đang gặp vấn đề gì xin vui lòng liên hệ với chúng tôi qua các trang sau.</p>
            <div class="ndft">
              <a href=""><i class="fa-brands fa-facebook"></i></a>
              <a href=""><i class="fa-brands fa-twitter"></i></a>
              <a href=""><i class="fa-brands fa-tiktok"></i></a>
              <a href=""><i class="fa-brands fa-youtube"></i></a>
            </div>
          </div>
          <!-- cột2 -->
          <div class="colum">
            <h3 class="litle">Công ty</h3>
            <ul class="list">
              <li><a href="#!">Thông tin</a></li>
              <li><a href="#!">Tính năng</a></li>
              <li><a href="#!">Bảng giá</a></li>
              <li><a href="#!">Tin tức mới nhất</a></li>
            </ul>
          </div>
          <!-- cột3 -->
          <div class="colum">
            <h3 class="litle">Hỗ trợ</h3>
            <ul class="list">
              <li><a href="#!">Chăm sóc khách hàng</a></li>
              <li><a href="#!">Vấn đề món ăn</a></li>
              <li><a href="#!">Khiếu nại nhân viên</a></li>
              <li><a href="#!">Cơ sở vật chất</a></li>
            </ul>
          </div>
          <!-- cột4 -->
          <div class="colum">
            <h3 class="litle">Thông tin liên hệ</h3>
            <ul class="list">
              <li><a href="https://maps.app.goo.gl/Gxm4ZK8CuZwMghq99" target="_blank"><strong>Địa chỉ:</strong> 129 Bùi Thị Xuân, Tân Bình, TP.HCM</a></li>
              <li><a href="mailto:denmung23@gmail.com"><strong>Email:</strong> denmung23@gmail.com</a></li>
              <li><a href="tel:+84868187180"><strong>SĐT:</strong> 0868187180</a></li>                 
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped>

footer{
    background: rgb(46, 10, 10);
    padding:90px 120px ;

}
.row{
    display: flex;
}
.row .colum{
    width: 22%;
}
.row .colum:first-child{
    width: 35%;
}
.desc{
    margin-top: 18px;
    max-width: 260px;
    color: white;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 26px;
}
.ndft{
    display: flex;
    gap: 18px;
    margin-top: 18px;

}
.colum .litle{
    padding-bottom: 14px;
    display: inline block;
    color: white;
    font-size: 16px;
    font-weight: 600;
line-height: 18px;
    border-bottom: 1px solid rgb(238, 209, 209);
    padding-right: 48px;

}
.colum .logo{
    width: 150px;
}
.list li{
    display: block;
}
.list a{
    display: inline-block;
    color: white;
    font-size: 14px;
    line-height: 1.9;
    margin-bottom: 12px;
    text-decoration: none;

}
.ndft .icon {

    background-color: aliceblue;
    width: 40px;
    
}

</style>
