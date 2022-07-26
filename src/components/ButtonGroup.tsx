import { ButtonGroupItem } from '@/types';
import { useI18n } from 'vue-i18n';

export const createButtonGroup = (group: ButtonGroupItem[] = []) => {
  return defineComponent({
    setup() {
      const { t } = useI18n({
        useScope: 'global',
        inheritLocale: true
      });

      return () => (
        <section style={{ textAlign: 'center' }}>
          {group.map((item) => (
            <a-button style={{ margin: '8px' }} onClick={item.handle}>
              {item.icon}
              {t(`components.button-group.${item.text}`)}
            </a-button>
          ))}
        </section>
      );
    }
  });
};
