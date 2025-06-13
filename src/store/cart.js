import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: []  // Chỉ giỏ hàng, rỗng ban đầu
  }),
  getters: {
    totalPrice: (state) =>
      state.items.reduce(
        (s, p) => s + parseInt(p.price.replace(/\D/g, '')) * p.quantity,
        0
      ).toLocaleString('vi-VN') + 'đ'
  },
  actions: {
    addToCart(item) {
      const foundItem = this.items.find((cartItem) => cartItem.id === item.id);
      if (foundItem) {
        foundItem.quantity += 1;
      } else {
        this.items.push({ ...item, quantity: 1 });
      }
    },
    removeFromCart(itemId) {
      this.items = this.items.filter(item => item.id !== itemId);
    },
    updateQuantity(itemId, quantity) {
      const item = this.items.find(item => item.id === itemId);
      if (item) {
        item.quantity = quantity;
      }
    },
    clear() {
      this.items = []
    },
    checkout() {
      const total = this.items.reduce((sum, item) => {
        return sum + parseInt(item.price.replace(/\D/g, '')) * item.quantity
      }, 0)
      this.clear()
      return total
    }
  }
})
