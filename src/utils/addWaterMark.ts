import { useUserStore } from '@/store/user'

export function addWaterMark(file: Blob, callback: BlobCallback) {
  const { username } = useUserStore();
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
      const fontSize = scale(username.length, { o: [0, 400], t: [0, img.naturalWidth] });
      const position = { x: img.naturalWidth - (username.length * fontSize), y: img.naturalHeight - fontSize - 15 };
      console.log(fontSize, position);
      if(ctx) {
        ctx.drawImage(img, 0, 0);
        ctx.fillStyle = 'white';
        ctx.textBaseline = 'middle';
        ctx.font = `oblique ${fontSize}px 宋体 bold`;
        ctx.fillText(`koa-blog @ ${username}`, position.x, position.y);
      }
      canvas.toBlob(callback);
    };
  };
}
