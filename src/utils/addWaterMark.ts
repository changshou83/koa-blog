import { useUserStore } from '@/store/user';

export function addWaterMark(file: Blob, callback: BlobCallback) {
  const watermark = 'koa-blog @ ' + useUserStore().username;
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    const img: HTMLImageElement = document.createElement('img');
    img.src = reader.result as string;
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      const ctx = canvas.getContext('2d');
      const fontSize = scale(54.45, { o: [0, 1980], t: [0, img.naturalWidth] });
      // 根据中文和英文设置不同的位移
      const displace =
        (watermark
          .split('')
          .reduce((len, c) => len + (/[a-z0-9\s\-@]/i.test(c) ? 1 : 2.2), 0) *
          fontSize) /
        2;
      const position = {
        x: img.naturalWidth - displace,
        y: img.naturalHeight - fontSize - 15
      };
      if (ctx) {
        ctx.drawImage(img, 0, 0);
        ctx.fillStyle = 'white';
        ctx.textBaseline = 'middle';
        ctx.font = `oblique ${fontSize}px 宋体 bold`;
        ctx.fillText(watermark, position.x, position.y);
      }
      canvas.toBlob(callback);
    };
  };
}
