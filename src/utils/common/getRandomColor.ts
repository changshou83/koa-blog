/**
 * 获得一个随机的颜色
 * @returns 一个随机 rgb 颜色
 */
export const getRandomColor = () =>
  `rgb(${Math.floor(Math.random() * 255)},${Math.floor(
    Math.random() * 255
  )},${Math.floor(Math.random() * 255)})`;
