import { render, screen } from '@testing-library/vue';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import routes from '@/routes/routes';
import Detail from '@/views/details/index.vue';

let router;

beforeEach(async () => {
  router = createRouter({
    history: createWebHistory(),
    routes: routes as RouteRecordRaw[]
  });

  router.push('/details/1');
  await router.isReady();
});

describe('Detail', () => {
  it('render article detail correctly', async () => {
    render(Detail, {
      global: {
        plugins: [router]
      }
    });

    const title = await screen.findByText('前端工程师的难题');
    const tag = await screen.findByText('book');
    const content = await screen.findByText(
      '前端工程师的难题不止技术难题，更重要的是工程难题'
    );

    expect(title.innerHTML).toBe('前端工程师的难题');
    expect(tag.innerHTML).toBe('book');
    expect(content.innerHTML).toBe(
      '前端工程师的难题不止技术难题，更重要的是工程难题'
    );
  });
});
