import { userLogin } from "@/api/users"
import { LoginForm } from "@/types"
import { setToken, setUserInfo } from "@/utils/common/cache"


export async function Login(params: LoginForm) {
  try {
    const { data } = await userLogin(params)
    if(data && typeof data !== 'string') {
      setUserInfo(data)
      if(data.token) setToken(data.token)
    }
    return Promise.resolve(data)
  } catch(err) {
    return Promise.reject(err)
  }
}
