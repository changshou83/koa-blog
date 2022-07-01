import { getRandomColor } from '@/utils/common/getRandomColor';

describe('Basic Test', () => {
  it('get a random rgb color', () => {
    const rgbColorPattern = /rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)/
    const result = getRandomColor().match(rgbColorPattern)!.every((v, i) => {
      if(i == 0) return true
    
      const val = Number(v)
      return val >= 0 && val <= 255
    })

    expect(result).toBeTruthy()
  })
})
