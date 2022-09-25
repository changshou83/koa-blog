import { render, screen } from '@testing-library/vue';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import routes from '@/routes/routes';
import i18n from '@/locales/index';
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
    const text = ['Default Title', 'Default Introduction', 'Default Content'];
    render(Detail, {
      global: {
        plugins: [router, i18n]
      }
    });

    const title = await screen.findByText(text[0]);
    const intro = await screen.findByText(text[1]);
    const content = await screen.findByText(text[2]);

    expect(title.innerHTML).toBe(text[0]);
    expect(intro.innerHTML).toBe(text[1]);
    expect(content.innerHTML).toBe(text[2]);
  });
});
