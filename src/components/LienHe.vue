<template>
    <main>
      <div class="container">
        <h1>Thông tin liên hệ</h1>
        <p>Địa chỉ: 129 Bùi Thị Xuân - Phường 2 - Tân Bình - TP.HCM</p>
        <p>Email: 23661064@hthcm.edu.vn</p>
        <p>Thời gian: 9:00 - 23:00</p>

        <h2>Gửi cho chúng tôi</h2>
        
        <!-- Contact Form -->
        <form @submit.prevent="handleSubmit">
          <input v-model="name" class="text" type="text" placeholder="Tên của bạn" />
          <input v-model="email" type="email" placeholder="Email của bạn" />
          <input v-model="phone" type="tel" placeholder="Số điện thoại của bạn" />
          <textarea v-model="message" class="noidung" placeholder="Nội dung"></textarea>
          <button type="submit">Gửi cho chúng tôi</button>
        </form>
      </div>
    </main>
</template>

<script>
import Header from "@/components/TheHeader.vue";
import Footer from "@/components/TheFooter.vue";

export default {
  name: "ContactPage",
  components: {
    Header,
    Footer
  },
  data() {
    return {
      name: "",
      email: "",
      phone: "",
      message: ""
    };
  },
  methods: {
  handleSubmit() {
    // Regex kiểm tra đúng 10 chữ số
    const phoneRegex = /^[0-9]{10}$/;

    if (!this.name || !this.email || !this.phone || !this.message) {
      alert("Vui lòng điền đầy đủ tất cả các thông tin!");
    } else if (!phoneRegex.test(this.phone)) {
      alert("Số điện thoại phải có đúng 10 chữ số!");
      this.resetForm();
    } else {
      alert("Cảm ơn bạn đã gửi thông tin cho chúng tôi!");
      this.resetForm();
    }
  },
  resetForm() {
    this.name = "";
    this.email = "";
    this.phone = "";
    this.message = "";
  }
}
};
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: 'Arial', sans-serif;
}

h1, h2 {
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}

p {
  text-align: center;
  color: #555;
}

form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

input[type="text"],
input[type="email"],
input[type="tel"],
textarea {
  width: 100%;
  padding: 12px 16px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  transition: border-color 0.3s;
}

input:focus,
textarea:focus {
  border-color: #f44336;
}

textarea {
  resize: vertical;
  min-height: 100px;
}

button[type="submit"] {
  background-color: #f44336;
  color: white;
  border: none;
  font-size: 16px;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button[type="submit"]:hover {
  background-color: #d32f2f;
}

</style>
