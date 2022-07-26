import { useWindowEvent } from '@/composables/event/useWindowEvent';
import { render, fireEvent } from '@testing-library/vue';
import { defineComponent, ref } from 'vue';

describe('useWindowEvent', () => {
  it('it should work', async () => {
    const instance = defineComponent({
      template:
        '<div><p>Times clicked: {{ count }}</p><button>increment</button></div>',
      setup() {
        const count = ref(1);

        useWindowEvent('click', () => (count.value = count.value + 1));

        return {
          count
        };
      }
    });

    const { getByText, html, unmount } = render(instance);
    const button = getByText('increment');

    expect(getByText('Times clicked: 1')).toMatchInlineSnapshot(`
      <p>
        Times clicked: 1
      </p>
    `);

    await fireEvent.click(button);
    expect(getByText('Times clicked: 2')).toMatchInlineSnapshot(`
      <p>
        Times clicked: 2
      </p>
    `);

    // 有点奇怪，geByText会报错，说是因为‘Times clicked’被分配到多个元素中，挺离谱的，就这样吧
    unmount();
    await fireEvent.click(button);
    expect(html()).toMatchInlineSnapshot(`
      "<div>
        <p>Times clicked: 2</p><button>increment</button>
      </div>"
    `);
  });
});
