import { defineStore } from 'pinia'
import { ref } from 'vue'
import { supabase } from '@/lib/supabase'

export const useUserStore = defineStore('user', () => {
  const users = ref([])

  const registerUser = async ({ firstName, lastName, phone, email, password, confirmPassword }) => {
    if (password !== confirmPassword) {
      throw new Error("⚠️ Mật khẩu không khớp!")
    }

    const phoneRegex = /^[0-9]{10}$/
    if (!phoneRegex.test(phone)) {
      throw new Error("⚠️ SĐT không hợp lệ (phải 10 số)!")
    }

    const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
      email,
      password
    })

    if (signUpError) {
      throw new Error("Lỗi đăng ký: " + signUpError.message)
    }

    const userId = signUpData.user?.id

    const { error: insertError, data: insertedUser } = await supabase.from('users').insert([{
      id: userId,
      first_name: firstName,
      last_name: lastName,
      phone
    }]).select().single()

    if (insertError) {
      throw new Error("Lỗi lưu thông tin: " + insertError.message)
    }

    users.value.push(insertedUser)
    return insertedUser
  }

  return { users, registerUser }
})
