import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: '首页',
      href: getPermalink('/'),
    },
    {
      text: '关于我们',
      href: getPermalink('/about'),
    },
    {
      text: '服务中心',
      links: [
        {
          text: '服务介绍',
          href: getPermalink('/services'),
        },
        {
          text: '解决方案',
          href: getPermalink('/landing/product'),
        },
        {
          text: '服务定价',
          href: getPermalink('/pricing'),
        },
      ],
    },
    {
      text: '新闻动态',
      links: [
        {
          text: '公司新闻',
          href: getBlogPermalink(),
        },
        {
          text: '行业资讯',
          href: getPermalink('tutorials', 'category'),
        },
      ],
    },
    {
      text: '联系我们',
      href: getPermalink('/contact'),
    },
  ],
  actions: [{ text: '立即咨询', href: getPermalink('/contact'), target: '_self' }],
};

export const footerData = {
  links: [
    {
      title: '产品服务',
      links: [
        { text: '数字化展厅', href: '#' },
        { text: '沉浸式体验', href: '#' },
        { text: '智慧旅游', href: '#' },
        { text: '数字媒体艺术', href: '#' },
        { text: '互动装置', href: '#' },
        { text: '虚拟现实', href: '#' },
      ],
    },
    {
      title: '技术平台',
      links: [
        { text: '开发接口', href: '#' },
        { text: '合作伙伴', href: '#' },
        { text: '原子架构', href: '#' },
        { text: '电子技术', href: '#' },
      ],
    },
    {
      title: '客户支持',
      links: [
        { text: '帮助文档', href: '#' },
        { text: '社区论坛', href: '#' },
        { text: '专业服务', href: '#' },
        { text: '技术能力', href: '#' },
        { text: '系统状态', href: '#' },
      ],
    },
    {
      title: '关于公司',
      links: [
        { text: '关于我们', href: getPermalink('/about') },
        { text: '新闻动态', href: getBlogPermalink() },
        { text: '加入我们', href: '#' },
        { text: '媒体报道', href: '#' },
        { text: '社会责任', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: '服务条款', href: getPermalink('/terms') },
    { text: '隐私政策', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/arthelokyo/astrowind' },
  ],
  footNote: `
    Made by <a class="text-blue-600 underline dark:text-muted" href="#"> 北京百益晟恩文化科技有限公司</a> · All rights reserved.
  `,
};
