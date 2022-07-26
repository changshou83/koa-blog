import { urlToExternalLink } from '@/utils/route/urlToExternalLink';

const toGithubProject = urlToExternalLink('github', ['user', 'projectName']);

export const projectList = [
  [
    {
      id: 1,
      name: 'studyEveryday',
      content: '学习过程中的一些积累',
      handle: () => {
        toGithubProject({
          user: 'changshou83',
          projectName: 'studyEveryday'
        });
      }
    },
    {
      id: 2,
      name: 'webpageDesignHomework',
      content: '网页设计课作业',
      handle: () => {
        toGithubProject({
          user: 'changshou83',
          projectName: 'webpageDesign_homework'
        });
      }
    },
    {
      id: 3,
      name: 'vitepress-starter',
      content: 'Starter template for vitepress',
      handle: () => {
        toGithubProject({
          user: 'changshou83',
          projectName: 'vitepress-starter'
        });
      }
    }
  ],
  [
    {
      id: 4,
      name: 'formValidator',
      content: '一个用于前端表单验证的小工具',
      handle: () => {
        toGithubProject({
          user: 'changshou83',
          projectName: 'formValidator'
        });
      }
    }
  ]
];
