import { useUserStore } from '@/store/user';

export function addCopyrightInfo(event: ClipboardEvent) {
  const selectTarget = window.getSelection();  
  const clipboardData = event.clipboardData;
  
  if (selectTarget !== undefined) {
    let copyText = selectTarget?.toString();
    if ((copyText && clipboardData) && copyText.length >= 30) {
      copyText +=
      `\n\n作者：${(useUserStore()).username}\n链接：${location.href}\n来源：koa-blog\n著作权归作者所有。商业转载请联系作者获取授权，非商业转载请注明出处。`;
      clipboardData.setData("text/plain", copyText);
    }
  }
}
