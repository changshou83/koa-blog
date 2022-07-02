import { windowScrollTo } from "@/utils/windowScrollTo"

describe('windowScrollTo', () => {
  it('it should work', () => {
    document.body.scrollTop = 100

    windowScrollTo({ top: 0 })
    expect(document.body.offsetTop).toEqual(0)
  })
})
