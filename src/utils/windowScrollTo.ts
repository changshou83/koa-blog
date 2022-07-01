import { ScrollHandler } from "@/types";

/**
 * 控制页面滚动
 */
export const useWindowScrollTo: ScrollHandler = (
  position,
  behavior
) => {
  window.scrollTo({
    ...position,
    behavior,
  });
};
