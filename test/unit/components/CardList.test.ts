import CardList from '@/components/CardList.vue';
import { mount } from '@vue/test-utils';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import routes from '@/routes/routes';

let router;

beforeEach(async () => {
  router = createRouter({
    history: createWebHistory(),
    routes: routes as RouteRecordRaw[]
  });

  router.push('/show/blogs/1');
  await router.isReady();
});

const list = [
  {
    id: 1,
    title: '前端工程师的难题',
    intro: '前端工程师的难题不止技术难题，更重要的是工程难题',
    articleType: 'book',
    content: 'content',
    createdAt: '2022-06-20-13:51',
    updatedAt: '2022-06-21-13:51'
  }
];

describe('ButtonGroup', () => {
  it('render button', () => {
    const wrapper = mount(CardList, {
      props: {
        cardRecords: list
      }
    });

    expect(wrapper.findAll('a-card')).toHaveLength(1);
  });
  it('check article detail', async () => {
    const wrapper = mount(CardList, {
      props: {
        cardRecords: list,
        checkDetail: (id: number) => router.push(`/details/${id}`)
      },
      global: {
        plugins: [router]
      }
    });

    await wrapper.find('a-card').trigger('click');
    expect(wrapper.emitted()).toHaveProperty('checkDetail');
  });
});
