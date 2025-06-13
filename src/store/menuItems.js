import { defineStore } from 'pinia';

export const menuItems = defineStore('menu', {
  state: () => ({
    items: [
      {
        id: 1,
        name: "Cà ri tôm",
        description: "Cà ri tôm là món ăn nổi tiếng, mang đậm bản sắc ẩm thực của nhiều quốc gia ở Châu Á. Được chế biến từ tôm tươi ngon, tẩm ướp gia vị đặc trưng như nghệ, gừng, hành, tỏi, cà ri và gia vị khác, món cà ri này tạo nên hương vị đặc biệt thơm ngon và đậm đà. Tôm được nấu trong nước sốt cà ri màu vàng óng, béo ngậy, thấm đượm gia vị, hòa quyện cùng cơm trắng hoặc bánh mì, tạo nên một bữa ăn hấp dẫn. Món ăn này không chỉ thơm ngon mà còn rất bổ dưỡng nhờ vào thành phần tôm giàu protein và các gia vị có tác dụng tốt cho sức khỏe.",
        price: "150.000đ",
        image: new URL('@/assets/cari.webp', import.meta.url).href,
        rating: 5
      },
      {
        id: 2,
        name: "Cá chiên giòn",
        description: "Cá chiên giòn là món ăn quen thuộc và được yêu thích vì lớp vỏ ngoài giòn rụm và phần thịt cá ngọt mềm bên trong. Cá được chọn lọc kỹ lưỡng, sau đó chiên giòn đến độ vàng ươm, tạo nên sự kết hợp hoàn hảo giữa giòn và ngọt. Món này thường được ăn kèm với cơm nóng, rau sống, hoặc nước mắm chua ngọt, mang lại hương vị đậm đà và dễ chịu. Các loại cá phổ biến như cá lóc, cá basa, cá thu đều rất thích hợp cho món ăn này.",
        price: "320.000đ",
        image: new URL('@/assets/cachien.jpg', import.meta.url).href,
        rating: 5
      },
      {
        id: 3,
        name: "Bò nướng",
        description: "Bò nướng là món ăn đậm đà hương vị, được chế biến từ thịt bò tươi ngon, được ướp với các gia vị như tỏi băm, tiêu, dầu ăn, mật ong hoặc nước mắm để tăng độ ngọt tự nhiên. Sau khi tẩm ướp, thịt bò được nướng trên than hoa hoặc bếp lửa lớn, giúp thịt giữ được độ mềm, ngọt tự nhiên, trong khi lớp ngoài của thịt có một lớp vỏ xém vàng giòn. Món này thường ăn kèm với rau sống và bánh mì, hoặc cơm, giúp tạo nên một bữa ăn hoàn chỉnh và dễ chịu.",
        price: "170.000đ",
        image: new URL('@/assets/bonuong.jpg', import.meta.url).href,
        rating: 5
      },
      {
        id: 4,
        name: "Chả mực",
        description: "Chả mực là món ăn nổi tiếng ở Hạ Long, được chế biến từ mực tươi, giã nhuyễn, rồi trộn với gia vị như tỏi, hành, tiêu, gia vị tạo hương thơm đặc trưng. Sau đó, hỗn hợp này được viên thành những miếng chả nhỏ và chiên giòn, tạo nên lớp vỏ ngoài giòn tan, bên trong là phần nhân mực mềm mại, thơm ngon. Chả mực thường được ăn kèm với cơm, bánh mì hoặc rau sống, mang đến hương vị ngọt ngào, đậm đà, khó cưỡng lại.",
        price: "140.000đ",
        image: new URL('@/assets/chamuc.webp', import.meta.url).href,
        rating: 5
      },
      {
        id: 5,
        name: "Cá rán",
        description: "Cá rán là món ăn rất đơn giản nhưng lại luôn thu hút sự chú ý nhờ vào lớp vỏ giòn rụm và thịt cá mềm ngọt. Cá được tẩm gia vị, lăn qua bột chiên giòn và chiên ngập dầu cho đến khi vàng ươm. Lớp ngoài giòn tan kết hợp với thịt cá bên trong mềm mại, ngọt ngào khiến món ăn này trở thành lựa chọn lý tưởng cho bữa cơm gia đình hoặc các bữa ăn nhẹ.",
        price: "190.000đ",
        image: new URL('@/assets/changarutxuong.webp', import.meta.url).href,
        rating: 4.8
      },
      {
        id: 6,
        name: "Gà chiên",
        description: "Gà chiên là món ăn được yêu thích nhờ vào lớp vỏ giòn tan và phần thịt gà mềm, mọng nước bên trong. Gà được tẩm ướp gia vị đặc biệt, rồi lăn qua bột chiên giòn và chiên ngập dầu. Sau khi chiên xong, gà có lớp vỏ ngoài giòn rụm, trong khi thịt gà bên trong vẫn giữ được độ ngọt, mềm mại. Món này có thể ăn kèm với cơm, rau sống, hoặc các loại nước sốt như sốt mayonnaise, tương ớt, hoặc sốt cà chua, tạo nên sự kết hợp tuyệt vời.",
        price: "130.000đ",
        image: new URL('@/assets/chimchum.jpg', import.meta.url).href,
        rating: 4.7
      },
      {
        id: 7,
        name: "Gà xé",
        description: "Gà xé là món ăn nhẹ nhàng, được làm từ thịt gà luộc chín, xé nhỏ và trộn với các loại gia vị như tỏi, hành, rau thơm, tiêu, và nước mắm. Món này thường được ăn kèm với cơm trắng, bún, hoặc bánh tráng cuốn, mang lại sự thanh đạm nhưng vẫn đậm đà hương vị. Gà xé là món ăn nhẹ nhàng, dễ tiêu hóa, thích hợp cho những bữa ăn nhanh hoặc ăn kèm với các món chính khác.",
        price: "140.000đ",
        image: new URL('@/assets/gaxien.jpg', import.meta.url).href,
        rating: 5
      },
      {
        id: 8,
        name: "Tôm xào",
        description: "Tôm xào là món ăn đơn giản nhưng lại rất ngon miệng nhờ vào sự kết hợp giữa tôm tươi và gia vị. Tôm được xào nhanh trong dầu nóng cùng với các gia vị như tỏi, hành, tiêu, và các loại rau củ tươi ngon. Món ăn này có vị ngọt tự nhiên từ tôm, cùng với hương thơm hấp dẫn từ các gia vị. Tôm xào có thể ăn kèm với cơm trắng, giúp bạn có một bữa ăn vừa ngon miệng lại bổ dưỡng.",
        price: "180.000đ",
        image: new URL('@/assets/goitom.webp', import.meta.url).href,
        rating: 4.9
      },
      {
        id: 9,
        name: "Heo quay",
        description: "Heo quay là món ăn đặc trưng của ẩm thực Việt Nam, với lớp da heo giòn rụm, thơm lừng, cùng phần thịt heo bên trong mềm mại, ngọt ngào. Heo được quay với gia vị đặc trưng, sau đó nướng cho đến khi da giòn, vàng ươm. Món này thường được ăn kèm với cơm, bánh mì, hoặc rau sống, tạo nên một bữa ăn vừa ngon lại vừa đầy đủ dinh dưỡng.",
        price: "190.000đ",
        image: new URL('@/assets/heoquay.jpg', import.meta.url).href,
        rating: 3.9
      },
      {
        id: 10,
        name: "Hải sản sốt thái",
        description: "Hải sản sốt Thái là món ăn kết hợp giữa hải sản tươi ngon như tôm, cua, mực, với sốt Thái đặc biệt. Sốt này được chế biến từ cà chua, dứa, ớt, tỏi, hành, và gia vị Thái, mang đến hương vị chua cay đặc trưng. Hải sản tươi được nấu trong sốt này, tạo nên sự hòa quyện giữa vị ngọt tự nhiên của hải sản và vị chua cay đặc trưng của sốt Thái. Món ăn này có thể ăn kèm với cơm trắng hoặc bánh mì, giúp cân bằng hương vị.",
        price: "210.000đ",
        image: new URL('@/assets/hsansotthai.jpg', import.meta.url).href,
        rating: 5
      },
      {
        id: 11,
        name: "Hải sản sốt thái",
        description: "Hải sản sốt Thái là món ăn được chế biến từ những nguyên liệu tươi ngon nhất, bao gồm tôm, cua, mực và các loại hải sản khác, nấu với sốt Thái chua cay đặc trưng. Sốt Thái được làm từ các nguyên liệu như cà chua, dứa, ớt, tỏi, tạo nên sự hòa quyện tuyệt vời giữa vị chua, cay và ngọt, khiến món ăn trở nên đậm đà và hấp dẫn. Món này thường ăn kèm với cơm trắng hoặc bún, giúp bữa ăn thêm trọn vẹn.",
        price: "145.000đ",
        image: new URL('@/assets/hsansotthai.jpg', import.meta.url).href,
        rating: 4.75
      },
      {
        id: 12,
        name: "Xôi xoài",
        description: "Xôi xoài là một món ăn tráng miệng phổ biến ở Việt Nam, đặc biệt là trong các dịp lễ hội hoặc bữa sáng. Món ăn này gồm xôi nếp mềm dẻo, kết hợp với xoài tươi chín mọng, cắt thành miếng vừa ăn. Xôi được nấu với lá dứa tạo màu xanh đẹp mắt và hương thơm đặc biệt. Khi kết hợp với xoài, món xôi trở nên ngọt ngào, thanh mát và cực kỳ dễ ăn. Đây là món ăn phù hợp cho những ai yêu thích các món ngọt và tráng miệng nhẹ nhàng, không quá ngọt nhưng vẫn đủ hấp dẫn.",
        price: "190.000đ",
        image: new URL('@/assets/xoisoai.jpeg', import.meta.url).href,
        rating: 4.5
      }
    ]
  })
});
