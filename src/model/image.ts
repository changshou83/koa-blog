import { ResponseConfig } from '@/types'

export async function Token() {
  try {
    const { data } = await uploadToken()
    return Promise.resolve(data)
  } catch(err) {
    return Promise.reject(err as ResponseConfig<null>)
  }
}
