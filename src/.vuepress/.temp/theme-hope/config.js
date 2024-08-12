import { defineClientConfig } from "vuepress/client";


import { HopeIcon, Layout, NotFound, injectDarkmode, setupDarkmode, setupSidebarItems, scrollPromise } from "C:/Users/22068/Desktop/Projject/vuepress-theme-hope/packages/theme/lib/client/export.js";

import { defineCatalogInfoGetter } from "C:/Users/22068/Desktop/Projject/vuepress-theme-hope/node_modules/.pnpm/@vuepress+plugin-catalog@2.0.0-rc.40_typescript@5.5.4_vuepress@2.0.0-rc.14_@vuepress+bundler-_2ebdldkcq4b2hfrprllhyfmubm/node_modules/@vuepress/plugin-catalog/lib/client/index.js"
import { h } from "vue"
import { BlogCategory, BlogHome, BlogType, BloggerInfo, SocialMedias, Timeline, setupBlog } from "C:/Users/22068/Desktop/Projject/vuepress-theme-hope/packages/theme/lib/client/modules/blog/export.js";
import "C:/Users/22068/Desktop/Projject/vuepress-theme-hope/packages/theme/lib/client/modules/blog/styles/layout.scss";
import { GlobalEncrypt, LocalEncrypt } from "C:/Users/22068/Desktop/Projject/vuepress-theme-hope/packages/theme/lib/client/modules/encrypt/export.js";
import Slide from "C:/Users/22068/Desktop/Projject/vuepress-theme-hope/packages/md-enhance/lib/client/SlidePage.js";

import "C:/Users/22068/Desktop/Projject/vuepress-theme-hope/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.40_typescript@5.5.4_vuepress@2.0.0-rc.14_@vuepress+bundler-vite@2.0_mmeivdz36cvxla3pcsazesegei/node_modules/@vuepress/helper/lib/client/styles/normalize.css";
import "C:/Users/22068/Desktop/Projject/vuepress-theme-hope/packages/theme/lib/client/styles/index.scss";

defineCatalogInfoGetter((meta) => {
  const title = meta.t;
  const shouldIndex = meta.I !== false;
  const icon = meta.i;

  return shouldIndex ? {
    title,
    content: icon ? () =>[h(HopeIcon, { icon }), title] : null,
    order: meta.O,
    index: meta.I,
  } : null;
});

export default defineClientConfig({
  enhance: ({ app, router }) => {
    const { scrollBehavior } = router.options;

    router.options.scrollBehavior = async (...args) => {
      await scrollPromise.wait();

      return scrollBehavior(...args);
    };

    // inject global properties
    injectDarkmode(app);

    // provide HopeIcon as global component
    app.component("HopeIcon", HopeIcon);

    app.component("BloggerInfo", BloggerInfo);
    app.component("SocialMedias", SocialMedias);
    app.component("GlobalEncrypt", GlobalEncrypt);
    app.component("LocalEncrypt", LocalEncrypt);
  },
  setup: () => {
    setupDarkmode();
    setupSidebarItems();
    setupBlog();
  },
  layouts: {
    Layout,
    NotFound,
    BlogCategory,
    BlogHome,
    BlogType,
    Timeline,
    Slide,
  }
});