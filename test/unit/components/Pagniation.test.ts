import Pagination from '@/components/Pagination.vue';
import { render, fireEvent } from '@testing-library/vue';
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

describe('Pagination', () => {
  it('render a-pagination', () => {
    const { html } = render(Pagination, {
      props: {
        total: 2,
        limit: 1
      },
      global: {
        plugins: [router]
      }
    });

    expect(html()).toMatchInlineSnapshot(
      '"<a-pagination class=\\"pagination\\" total=\\"2\\" default-page-size=\\"5\\" current=\\"1\\" simple=\\"\\" hideonsinglepage=\\"\\" limit=\\"1\\" data-v-849a166c=\\"\\"></a-pagination>"'
    );
  });
  // TODO:测试更改url改变pagination
  // TODO:测试点击按钮改变url
});
