import { notification } from 'ant-design-vue';
import type {
  NotificationInstance,
  NotificationArgsProps
} from 'ant-design-vue/lib/notification';

/**
 * 发送通知
 * @param type 通知类型
 * @returns 发送具体类型的通知的函数
 */
export const useNotice =
  (type: keyof NotificationInstance) =>
  ({ message, description, duration = 1 }: NotificationArgsProps) => {
    notification[type]({ message, description, duration });
  };
