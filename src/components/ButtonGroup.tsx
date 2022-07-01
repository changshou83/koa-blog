import { defineComponent } from 'vue';
import { ButtonGroupItem } from '@/types';

export const createButtonGroup = (group: ButtonGroupItem[] = []) => {
  return defineComponent({
    setup() {
      return () => (
        <section style={{ textAlign: 'center' }}>
          {group.map(item => (
            <a-button style={{ margin: '8px' }} onClick={item.handle}>
              {item.icon}
              {item.text}
            </a-button>
          ))}
        </section>
      );
    },
  });
};
