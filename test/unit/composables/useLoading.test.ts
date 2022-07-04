import { useLoading } from "@/composables/utils/useLoading"

describe('useLoading', () => {
  it('it should work', async () => {
    const req = (param: any) => new Promise((resolve) => {
      expect(loading.value).toEqual(true)
      return resolve(param)
    })

    const [loading, wrapReq] = useLoading(req)
    expect(loading.value).toEqual(false)

    const res = await wrapReq(1)
    expect(res).toEqual(1)
    expect(loading.value).toEqual(false)
  })
})
