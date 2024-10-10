module.exports = {
  title: "电子小木屋",
  description: "好记性不如烂笔头",
  theme: "reco",
  base: "/note/",
  locales: {
    "/": {
      lang: "zh-CN",
    },
  },
  plugins: [
    [
      "sakura",
      {
        num: 20, // 默认数量
        show: true, //  是否显示
        zIndex: -1, // 层级
        img: {
          replace: false, // false 默认图 true 换图 需要填写httpUrl地址
        },
      },
    ],
  ],
  themeConfig: {
    author: "xzb",
    logo: "/avatar.jpg",
    authorAvatar: "/avatar.jpg",
    type: "blog",
    sidebar: "auto",
    nav: [
      { text: "首页", link: "/" },
      {
        text: "链接",
        items: [{ text: "Github", link: "https://github.com/xzbing" }],
      },
    ],
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: "分类", // 默认文案 “分类”
      },
      tag: {
        location: 4, // 在导航栏菜单中所占的位置，默认4
        text: "Tag", // 默认文案 “标签”
      },
    },
  },
};
