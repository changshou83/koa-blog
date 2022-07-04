import { useState } from "@/composables/core/useState"

describe('useState', () => {
  it('number', () => {
    const [count, setCount] = useState<number>(0)

    expect(count.value).toEqual(0)

    setCount(1)
    expect(count.value).toEqual(1)
  })
})
