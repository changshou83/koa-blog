import { LoginForm } from "@/types"

export async function Login(params: LoginForm) {
  try {
    const { data } = await userLogin(params)
    return Promise.resolve(data)
  } catch(err) {
    return Promise.reject(err)
  }
}

export async function Register(params: LoginForm) {
  try {
    const { data } = await userRegister(params)
    return Promise.resolve(data)
  } catch(err) {
    return Promise.reject(err)
  }
}
