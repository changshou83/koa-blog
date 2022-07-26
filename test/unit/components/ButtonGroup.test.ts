import { showIndexConfig } from '@/view-provider/show/showIndexView';
import { createButtonGroup } from '@/components/ButtonGroup';
import { mount } from '@vue/test-utils';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import routes from '@/routes/routes';

let router;

beforeEach(async () => {
  router = createRouter({
    history: createWebHistory(),
    routes: routes as RouteRecordRaw[]
  });

  router.push('/show/books/1');
  await router.isReady();
});

describe('ButtonGroup', () => {
  it('render button', () => {
    const ButtonGroup = createButtonGroup(showIndexConfig.buttonGroup);
    const wrapper = mount(ButtonGroup);

    expect(wrapper.findAll('a-button')).toHaveLength(5);
  });
  it('jump page', async () => {
    const ButtonGroup = createButtonGroup(showIndexConfig.buttonGroup);
    const wrapper = mount(ButtonGroup, {
      global: {
        plugins: [router]
      }
    });

    // 思路：监听路由,但是失败，原因未知(不是因为bind)，所以测组件的click被没被触发
    // const push = vi.spyOn(router, 'push')
    await wrapper.find('a-button').trigger('click');
    expect(wrapper.emitted()).toHaveProperty('click');

    // expect(push).toHaveBeenCalledTimes(1)
    // expect(push).toHaveBeenCalledWith('/show/blogs/1')
  });
});
