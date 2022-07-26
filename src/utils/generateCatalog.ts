import { CatalogNode } from '@/types';

/**
 * 层序遍历html字符串的h标签树，给每个h标签添加id并最后生成一个树状结构描述文章的h标签结构
 * @param htmlText 文章内容
 * @returns 添加完id的文章内容及对应树状结构
 */
export function generateCatalog(htmlText = '') {
  // const tags = ["h1", "h2", "h3", "h4", "h5", "h6"];
  const tags = ['h1', 'h2', 'h3'];
  const tempEle = document.createElement('div');
  tempEle.innerHTML = htmlText;

  const cmpContainer = []; // 辅助栈
  const catalogNodes: CatalogNode[] = []; // 最终的树结构
  let existsId = 0; // 用于区别同名标题

  // 遍历所有标签
  for (let i = 0; i < tempEle.childNodes.length; i++) {
    const ele = tempEle.childNodes[i] as HTMLElement;

    // 如果是h标签
    if (ele.tagName && tags.includes(ele.tagName.toLowerCase())) {
      existsId++;
      const currlevel = [...tags].reverse().indexOf(ele.tagName.toLowerCase());

      // 处理辅助栈，如果当前级别比栈顶元素的标签级别高或相等
      // 说明栈顶元素已经被处理过了，所以去除该元素
      while (cmpContainer.length > 0) {
        const topLevel = [...tags]
          .reverse()
          .indexOf(cmpContainer[cmpContainer.length - 1].tag);
        if (currlevel < topLevel) break;
        cmpContainer.pop();
      }

      let eleId = ele.id;
      if (!eleId) {
        eleId += `heading-${existsId}`;
        ele.setAttribute('id', eleId);
      }

      // cmpContainer 为 0 说明是根节点
      if (cmpContainer.length > 0) {
        const node: CatalogNode = {
          title: ele.innerText,
          tag: ele.tagName.toLowerCase(),
          children: [],
          id: eleId
        };
        cmpContainer[cmpContainer.length - 1].children.push(node);
        cmpContainer.push(node);
      } else {
        const rootNode: CatalogNode = {
          title: ele.innerText,
          tag: ele.tagName.toLowerCase(),
          children: [],
          id: eleId
        };
        catalogNodes.push(rootNode);
        cmpContainer.push(rootNode);
      }
    }
  }

  return { catalogNodes, htmlText: tempEle.innerHTML };
}

export function catalogTrack() {
  // const allHeading = document.querySelectorAll<HTMLHeadingElement>('h1,h2,h3,h4,h5,h6')
  const allHeading = document.querySelectorAll<HTMLHeadingElement>('h1,h2,h3');
  let $currentHeading = document.querySelector('h1:not(.title)');
  allHeading.forEach((heading) => {
    if (heading.offsetTop < document.documentElement.scrollTop + 140) {
      $currentHeading = heading;
    }
  });
  const anchorName = $currentHeading?.id;
  const $catalog = document.querySelector(
    `.catalog-container[name="${anchorName}"]`
  );
  if (!$catalog?.classList.contains('catalog-active')) {
    document
      .querySelector('.catalog-active')
      ?.classList.remove('catalog-active');
    $catalog?.classList.add('catalog-active');
  }
}
