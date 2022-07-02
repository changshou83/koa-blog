import * as Cache from "@/utils/common/cache"
import { UserInfo } from "@/types"

describe('cache', () => {
  it('should be defined', () => {
    expect(Cache).toBeDefined()
  })
  
  it('token storage should work', () => {
    const tokenPrefix = 'koa_blog_token'
    const token = 'token'
    
    Cache.setToken(token)
    expect(localStorage.getItem(tokenPrefix)).toStrictEqual(token)

    expect(Cache.getToken()).toStrictEqual(token)

    Cache.removeToken()
    expect(localStorage.getItem(tokenPrefix)).toBeNull()
  })
  
  it('userInfo storage should work', () => {
    const userPrefix = 'koa_blog_user'
    const userInfo: UserInfo = { id: 1 }

    Cache.setUserInfo(userInfo)
    expect(JSON.parse(localStorage.getItem(userPrefix))).toStrictEqual(userInfo)

    expect(Cache.getUserInfo()).toEqual(userInfo)

    Cache.removeUserInfo()
    expect(localStorage.getItem(userPrefix)).toBeNull()
  })
})
