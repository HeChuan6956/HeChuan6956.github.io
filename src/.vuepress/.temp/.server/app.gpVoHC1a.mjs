var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { shallowRef, defineComponent, computed, h as h$1, toRef as toRef$1, ref, onMounted, defineAsyncComponent, reactive, inject, getCurrentInstance, camelize, capitalize, isRef, getCurrentScope, onScopeDispose, unref, readonly, customRef, nextTick, watch, onUnmounted, watchEffect, Transition, version, resolveComponent, provide, TransitionGroup, useSSRContext, withCtx, createVNode, createSSRApp } from "vue";
import { useRouter, useRoute, createRouter, START_LOCATION, createMemoryHistory } from "vue-router";
import { pageviewCount } from "@waline/client/pageview";
import { ssrRenderComponent } from "vue/server-renderer";
var isLinkWithProtocol = (link) => /^[a-z][a-z0-9+.-]*:/.test(link) || link.startsWith("//");
var markdownLinkRegexp = /.md((\?|#).*)?$/;
var isLinkExternal = (link, base = "/") => isLinkWithProtocol(link) || // absolute link that does not start with `base` and does not end with `.md`
link.startsWith("/") && !link.startsWith(base) && !markdownLinkRegexp.test(link);
var isLinkHttp = (link) => /^(https?:)?\/\//.test(link);
var inferRoutePath = (path) => {
  if (!path || path.endsWith("/")) return path;
  let routePath = path.replace(/(^|\/)README.md$/i, "$1index.html");
  if (routePath.endsWith(".md")) {
    routePath = routePath.substring(0, routePath.length - 3) + ".html";
  } else if (!routePath.endsWith(".html")) {
    routePath = routePath + ".html";
  }
  if (routePath.endsWith("/index.html")) {
    routePath = routePath.substring(0, routePath.length - 10);
  }
  return routePath;
};
var FAKE_HOST$1 = "http://.";
var normalizeRoutePath = (pathname, current) => {
  if (!pathname.startsWith("/") && current) {
    const loc = current.slice(0, current.lastIndexOf("/"));
    return inferRoutePath(new URL(`${loc}/${pathname}`, FAKE_HOST$1).pathname);
  }
  return inferRoutePath(pathname);
};
var resolveLocalePath = (locales2, routePath) => {
  const localePaths = Object.keys(locales2).sort((a2, b2) => {
    const levelDelta = b2.split("/").length - a2.split("/").length;
    if (levelDelta !== 0) {
      return levelDelta;
    }
    return b2.length - a2.length;
  });
  for (const localePath of localePaths) {
    if (routePath.startsWith(localePath)) {
      return localePath;
    }
  }
  return "/";
};
var SPLIT_CHAR_REGEXP = /(#|\?)/;
var splitPath = (path) => {
  const [pathname, ...hashAndQueries] = path.split(SPLIT_CHAR_REGEXP);
  return {
    pathname,
    hashAndQueries: hashAndQueries.join("")
  };
};
var TAGS_ALLOWED = ["link", "meta", "script", "style", "noscript", "template"];
var TAGS_UNIQUE = ["title", "base"];
var resolveHeadIdentifier = ([tag, attrs, content]) => {
  if (TAGS_UNIQUE.includes(tag)) {
    return tag;
  }
  if (!TAGS_ALLOWED.includes(tag)) {
    return null;
  }
  if (tag === "meta" && attrs.name) {
    return `${tag}.${attrs.name}`;
  }
  if (tag === "template" && attrs.id) {
    return `${tag}.${attrs.id}`;
  }
  return JSON.stringify([
    tag,
    Object.entries(attrs).map(([key, value]) => {
      if (typeof value === "boolean") {
        return value ? [key, ""] : null;
      }
      return [key, value];
    }).filter((item) => item != null).sort(([keyA], [keyB]) => keyA.localeCompare(keyB)),
    content
  ]);
};
var dedupeHead = (head) => {
  const identifierSet = /* @__PURE__ */ new Set();
  const result = [];
  head.forEach((item) => {
    const identifier = resolveHeadIdentifier(item);
    if (identifier && !identifierSet.has(identifier)) {
      identifierSet.add(identifier);
      result.push(item);
    }
  });
  return result;
};
var ensureLeadingSlash = (str) => str[0] === "/" ? str : `/${str}`;
var ensureEndingSlash = (str) => str[str.length - 1] === "/" || str.endsWith(".html") ? str : `${str}/`;
var removeEndingSlash = (str) => str[str.length - 1] === "/" ? str.slice(0, -1) : str;
var removeLeadingSlash = (str) => str[0] === "/" ? str.slice(1) : str;
var isFunction = (val) => typeof val === "function";
var isPlainObject = (val) => Object.prototype.toString.call(val) === "[object Object]";
var isString = (val) => typeof val === "string";
const redirects$1 = JSON.parse("{}");
const routes$1 = Object.fromEntries([
  ["/intro.html", { loader: () => import(
    /* webpackChunkName: "intro.html" */
    "./assets/intro.html-4p5ka7qu.js"
  ), meta: { "d": 1623577866e3, "v": "/assets/images/cover3.jpg", "e": "\n<p>Place your introduction and profile here.</p>\n", "r": { "minutes": 0.04, "words": 13 }, "t": "Intro Page", "i": "circle-info", "y": "a" } }],
  ["/", { loader: () => import(
    /* webpackChunkName: "index.html" */
    "./assets/index.html-DKMg6ub2.js"
  ), meta: { "t": "Blog Home", "i": "home" } }],
  ["/slide.html", { loader: () => import(
    /* webpackChunkName: "slide.html" */
    "./assets/slide.html-CGHPxnrb.js"
  ), meta: { "d": 1622901613e3, "e": "<!-- markdownlint-disable MD024 MD051 -->\n", "r": { "minutes": 3.25, "words": 974 }, "t": "Slide page", "i": "person-chalkboard", "y": "s" } }],
  ["/demo/disable.html", { loader: () => import(
    /* webpackChunkName: "demo_disable.html" */
    "./assets/disable.html-11XatZio.js"
  ), meta: { "d": 1623577866e3, "c": ["Guide"], "g": ["disable"], "e": "<p>You can disable some function and layout on the page by setting the Frontmatter of the page.</p>\n", "r": { "minutes": 0.28, "words": 83 }, "t": "Disabling layout and features", "i": "gears", "O": 4, "y": "a" } }],
  ["/demo/encrypt.html", { loader: () => import(
    /* webpackChunkName: "demo_encrypt.html" */
    "./assets/encrypt.html-CC_9-atm.js"
  ), meta: { "d": 1623577866e3, "c": ["Guide"], "g": ["encryption"], "n": true, "r": { "minutes": 0.3, "words": 90 }, "t": "Encryption Article", "i": "lock", "y": "a" } }],
  ["/demo/layout.html", { loader: () => import(
    /* webpackChunkName: "demo_layout.html" */
    "./assets/layout.html-6gvRk-CN.js"
  ), meta: { "d": 1702366259e3, "c": ["Guide"], "g": ["Layout"], "e": '<p>The layout contains:</p>\n<ul>\n<li><a href="https://theme-hope.vuejs.press/guide/layout/navbar.html" target="_blank" rel="noopener noreferrer">Navbar</a></li>\n<li><a href="https://theme-hope.vuejs.press/guide/layout/sidebar.html" target="_blank" rel="noopener noreferrer">Sidebar</a></li>\n<li><a href="https://theme-hope.vuejs.press/guide/layout/footer.html" target="_blank" rel="noopener noreferrer">Footer</a></li>\n</ul>', "r": { "minutes": 0.35, "words": 105 }, "t": "Layout", "i": "object-group", "O": 2, "y": "a" } }],
  ["/demo/markdown.html", { loader: () => import(
    /* webpackChunkName: "demo_markdown.html" */
    "./assets/markdown.html-LFU6m2TJ.js"
  ), meta: { "d": 1622991562e3, "c": ["Guide"], "g": ["Markdown"], "e": "<p>VuePress basically generate pages from Markdown files. So you can use it to generate documentation or blog sites easily.</p>\n<p>You should create and write Markdown files, so that VuePress can convert them to different pages according to file structure.</p>\n", "r": { "minutes": 3.55, "words": 1065 }, "t": "Markdown Enhance", "i": "fab fa-markdown", "O": 1, "y": "a" } }],
  ["/demo/page.html", { loader: () => import(
    /* webpackChunkName: "demo_page.html" */
    "./assets/page.html-9rmqk6zl.js"
  ), meta: { "a": "Ms.Hope", "d": 15778368e5, "l": "January 1, 2020", "c": ["Guide"], "g": ["Page config", "Guide"], "u": true, "e": "<p>Content before <code>more</code> comment is regarded as page excerpt.</p>\n", "r": { "minutes": 1.14, "words": 341 }, "t": "Page Config", "i": "file", "O": 3, "y": "a" } }],
  ["/demo/", { loader: () => import(
    /* webpackChunkName: "demo_index.html" */
    "./assets/index.html-4OaTY0bK.js"
  ), meta: { "d": 1622991562e3, "c": ["Guide"], "r": { "minutes": 0.04, "words": 12 }, "t": "Features demo", "i": "laptop-code", "y": "a" } }],
  ["/posts/cherry.html", { loader: () => import(
    /* webpackChunkName: "posts_cherry.html" */
    "./assets/cherry.html-CEh3PpHk.js"
  ), meta: { "d": 16416864e5, "l": "January 9, 2022", "c": ["Cherry"], "g": ["red", "small", "round"], "e": "\n<h2>Heading 2</h2>\n<p>Here is the content.</p>\n<h3>Heading 3</h3>\n<p>Here is the content.</p>\n", "r": { "minutes": 0.09, "words": 27 }, "t": "Cherry", "i": "pen-to-square", "y": "a" } }],
  ["/posts/dragonfruit.html", { loader: () => import(
    /* webpackChunkName: "posts_dragonfruit.html" */
    "./assets/dragonfruit.html-DscqWFWV.js"
  ), meta: { "d": 16417728e5, "l": "January 10, 2022", "c": ["Dragon Fruit", "Fruit"], "g": ["red", "big"], "e": "\n<h2>Heading 2</h2>\n<p>Here is the content.</p>\n<h3>Heading 3</h3>\n<p>Here is the content.</p>\n", "r": { "minutes": 0.1, "words": 29 }, "t": "Dragon Fruit", "i": "pen-to-square", "y": "a" } }],
  ["/posts/strawberry.html", { loader: () => import(
    /* webpackChunkName: "posts_strawberry.html" */
    "./assets/strawberry.html-Co_r3iFT.js"
  ), meta: { "d": 16418592e5, "l": "January 11, 2022", "c": ["Fruit", "Strawberry"], "g": ["red", "small"], "e": "\n<h2>Heading 2</h2>\n<p>Here is the content.</p>\n<h3>Heading 3</h3>\n<p>Here is the content.</p>\n", "r": { "minutes": 0.09, "words": 27 }, "t": "Strawberry", "i": "pen-to-square", "y": "a" } }],
  ["/posts/tomato.html", { loader: () => import(
    /* webpackChunkName: "posts_tomato.html" */
    "./assets/tomato.html-v1zzuQU4.js"
  ), meta: { "d": 16419456e5, "l": "January 12, 2022", "c": ["Vegetable"], "g": ["red", "round"], "u": true, "v": "/assets/images/cover2.jpg", "e": "\n<h2>Heading 2</h2>\n<p>Here is the content.</p>\n<h3>Heading 3</h3>\n<p>Here is the content.</p>\n", "r": { "minutes": 0.11, "words": 32 }, "t": "Tomato", "i": "pen-to-square", "y": "a" } }],
  ["/zh/intro.html", { loader: () => import(
    /* webpackChunkName: "zh_intro.html" */
    "./assets/intro.html-BhBzQRhX.js"
  ), meta: { "d": 1663414381e3, "v": "/assets/images/cover3.jpg", "e": "\n<p>将你的个人介绍和档案放置在此处。</p>\n", "r": { "minutes": 0.08, "words": 23 }, "t": "介绍页", "i": "circle-info", "y": "a" } }],
  ["/zh/", { loader: () => import(
    /* webpackChunkName: "zh_index.html" */
    "./assets/index.html-hTHpNnso.js"
  ), meta: { "t": "博客主页", "i": "home" } }],
  ["/zh/slide.html", { loader: () => import(
    /* webpackChunkName: "zh_slide.html" */
    "./assets/slide.html-uCPQ56ls.js"
  ), meta: { "d": 1622901613e3, "e": "<!-- markdownlint-disable MD024 MD051 -->\n", "r": { "minutes": 4.51, "words": 1353 }, "t": "幻灯片页", "i": "person-chalkboard", "y": "s" } }],
  ["/posts/banana/1.html", { loader: () => import(
    /* webpackChunkName: "posts_banana_1.html" */
    "./assets/1.html-BuDvzZ5V.js"
  ), meta: { "d": 16413408e5, "l": "January 5, 2022", "c": ["Banana", "Fruit"], "g": ["yellow", "curly", "long"], "e": "\n<h2>Heading 2</h2>\n<p>Here is the content.</p>\n<h3>Heading 3</h3>\n<p>Here is the content.</p>\n", "r": { "minutes": 0.1, "words": 29 }, "t": "Banana 1", "i": "pen-to-square", "y": "a" } }],
  ["/posts/banana/2.html", { loader: () => import(
    /* webpackChunkName: "posts_banana_2.html" */
    "./assets/2.html-Dynt1TSN.js"
  ), meta: { "d": 16414272e5, "l": "January 6, 2022", "c": ["Banana", "Fruit"], "g": ["yellow", "curly", "long"], "e": "\n<p>A banana article being stared with number <code>10</code>.</p>\n", "r": { "minutes": 0.14, "words": 41 }, "t": "Banana 2", "i": "pen-to-square", "y": "a" } }],
  ["/posts/banana/3.html", { loader: () => import(
    /* webpackChunkName: "posts_banana_3.html" */
    "./assets/3.html-kIo7mT48.js"
  ), meta: { "d": 16415136e5, "l": "January 7, 2022", "c": ["Banana"], "g": ["yellow", "curly", "long"], "e": "\n<h2>Heading 2</h2>\n<p>Here is the content.</p>\n<h3>Heading 3</h3>\n<p>Here is the content.</p>\n", "r": { "minutes": 0.09, "words": 28 }, "t": "Banana 3", "i": "pen-to-square", "y": "a" } }],
  ["/posts/banana/4.html", { loader: () => import(
    /* webpackChunkName: "posts_banana_4.html" */
    "./assets/4.html-rTKWF7Dl.js"
  ), meta: { "d": 16416e8, "l": "January 8, 2022", "c": ["Banana"], "g": ["yellow", "curly", "long"], "e": "\n<h2>Heading 2</h2>\n<p>Here is the content.</p>\n<h3>Heading 3</h3>\n<p>Here is the content.</p>\n", "r": { "minutes": 0.09, "words": 28 }, "t": "Banana 4", "i": "pen-to-square", "y": "a" } }],
  ["/posts/apple/1.html", { loader: () => import(
    /* webpackChunkName: "posts_apple_1.html" */
    "./assets/1.html-vOsNKLjL.js"
  ), meta: { "d": 16409952e5, "l": "January 1, 2022", "c": ["Apple"], "g": ["red", "big", "round"], "e": "\n<h2>Heading 2</h2>\n<p>Here is the content.</p>\n<h3>Heading 3</h3>\n<p>Here is the content.</p>\n", "r": { "minutes": 0.09, "words": 28 }, "t": "Apple 1", "i": "pen-to-square", "y": "a" } }],
  ["/posts/apple/2.html", { loader: () => import(
    /* webpackChunkName: "posts_apple_2.html" */
    "./assets/2.html-CuMdZBzk.js"
  ), meta: { "d": 16410816e5, "l": "January 2, 2022", "c": ["Apple"], "g": ["red", "big", "round"], "e": "\n<p>A apple article being stared.</p>\n", "r": { "minutes": 0.12, "words": 36 }, "t": "Apple 2", "i": "pen-to-square", "y": "a" } }],
  ["/posts/apple/3.html", { loader: () => import(
    /* webpackChunkName: "posts_apple_3.html" */
    "./assets/3.html-kLp72OfF.js"
  ), meta: { "d": 1641168e6, "l": "January 3, 2022", "c": ["Apple", "Fruit"], "g": ["red", "big", "round"], "e": "\n<h2>Heading 2</h2>\n<p>Here is the content.</p>\n<h3>Heading 3</h3>\n<p>Here is the content.</p>\n", "r": { "minutes": 0.1, "words": 29 }, "t": "Apple 3", "i": "pen-to-square", "y": "a" } }],
  ["/posts/apple/4.html", { loader: () => import(
    /* webpackChunkName: "posts_apple_4.html" */
    "./assets/4.html-Cxe8TMti.js"
  ), meta: { "d": 16412544e5, "l": "January 4, 2022", "c": ["Apple", "Fruit"], "g": ["red", "big", "round"], "e": "\n<h2>Heading 2</h2>\n<p>Here is the content.</p>\n<h3>Heading 3</h3>\n<p>Here is the content.</p>\n", "r": { "minutes": 0.1, "words": 29 }, "t": "Apple 4", "i": "pen-to-square", "y": "a" } }],
  ["/zh/demo/disable.html", { loader: () => import(
    /* webpackChunkName: "zh_demo_disable.html" */
    "./assets/disable.html-DxzOy9FX.js"
  ), meta: { "d": 1623577866e3, "c": ["使用指南"], "g": ["禁用"], "e": "<p>你可以通过设置页面的 Frontmatter，在页面禁用功能与布局。</p>\n", "r": { "minutes": 0.43, "words": 128 }, "t": "布局与功能禁用", "i": "gears", "O": 4, "y": "a" } }],
  ["/zh/demo/encrypt.html", { loader: () => import(
    /* webpackChunkName: "zh_demo_encrypt.html" */
    "./assets/encrypt.html-Czyy6H9g.js"
  ), meta: { "d": 1623577866e3, "c": ["使用指南"], "g": ["加密"], "n": true, "r": { "minutes": 0.51, "words": 154 }, "t": "密码加密的文章", "i": "lock", "y": "a" } }],
  ["/zh/demo/layout.html", { loader: () => import(
    /* webpackChunkName: "zh_demo_layout.html" */
    "./assets/layout.html-DCYM4fVr.js"
  ), meta: { "d": 1702366259e3, "c": ["指南"], "g": ["布局"], "e": '<p>布局包括:</p>\n<ul>\n<li><a href="https://theme-hope.vuejs.press/zh/guide/layout/navbar.html" target="_blank" rel="noopener noreferrer">导航栏</a></li>\n<li><a href="https://theme-hope.vuejs.press/zh/guide/layout/sidebar.html" target="_blank" rel="noopener noreferrer">侧边栏</a></li>\n<li><a href="https://theme-hope.vuejs.press/zh/guide/layout/footer.html" target="_blank" rel="noopener noreferrer">页脚</a></li>\n</ul>', "r": { "minutes": 0.53, "words": 159 }, "t": "布局", "i": "object-group", "O": 2, "y": "a" } }],
  ["/zh/demo/markdown.html", { loader: () => import(
    /* webpackChunkName: "zh_demo_markdown.html" */
    "./assets/markdown.html-BWperPOg.js"
  ), meta: { "d": 1622991562e3, "c": ["使用指南"], "g": ["Markdown"], "e": "<p>VuePress 主要从 Markdown 文件生成页面。因此，你可以使用它轻松生成文档或博客站点。</p>\n<p>你需要创建并编写 Markdown，以便 VuePress 可以根据文件结构将它们转换为不同的页面。</p>\n", "r": { "minutes": 4.58, "words": 1374 }, "t": "Markdown 展示", "i": "fab fa-markdown", "O": 2, "y": "a" } }],
  ["/zh/demo/page.html", { loader: () => import(
    /* webpackChunkName: "zh_demo_page.html" */
    "./assets/page.html-Cs444JSe.js"
  ), meta: { "a": "Ms.Hope", "d": 15778368e5, "l": "2020年1月1日", "c": ["使用指南"], "g": ["页面配置", "使用指南"], "u": true, "v": "/assets/images/cover1.jpg", "e": "<p><code>more</code> 注释之前的内容被视为文章摘要。</p>\n", "r": { "minutes": 1.76, "words": 529 }, "t": "页面配置", "i": "file", "O": 3, "y": "a" } }],
  ["/zh/demo/", { loader: () => import(
    /* webpackChunkName: "zh_demo_index.html" */
    "./assets/index.html-y2V5Apst.js"
  ), meta: { "d": 1622991562e3, "c": ["使用指南"], "r": { "minutes": 0.07, "words": 22 }, "t": "主要功能与配置演示", "i": "laptop-code", "y": "a" } }],
  ["/zh/posts/cherry.html", { loader: () => import(
    /* webpackChunkName: "zh_posts_cherry.html" */
    "./assets/cherry.html-B7StiW0W.js"
  ), meta: { "d": 16416864e5, "l": "2022年1月9日", "c": ["樱桃"], "g": ["红", "小", "圆"], "e": "\n<h2>标题 2</h2>\n<p>这里是内容。</p>\n<h3>标题 3</h3>\n<p>这里是内容。</p>\n", "r": { "minutes": 0.11, "words": 33 }, "t": "樱桃", "i": "pen-to-square", "y": "a" } }],
  ["/zh/posts/dragonfruit.html", { loader: () => import(
    /* webpackChunkName: "zh_posts_dragonfruit.html" */
    "./assets/dragonfruit.html-DtGrO4YF.js"
  ), meta: { "d": 16417728e5, "l": "2022年1月10日", "c": ["火龙果", "水果"], "g": ["红", "大"], "e": "\n<h2>标题 2</h2>\n<p>这里是内容。</p>\n<h3>标题 3</h3>\n<p>这里是内容。</p>\n", "r": { "minutes": 0.12, "words": 36 }, "t": "火龙果", "i": "pen-to-square", "y": "a" } }],
  ["/zh/posts/strawberry.html", { loader: () => import(
    /* webpackChunkName: "zh_posts_strawberry.html" */
    "./assets/strawberry.html-BkQFpTwX.js"
  ), meta: { "d": 16418592e5, "l": "2022年1月11日", "c": ["水果", "草莓"], "g": ["红", "小"], "e": "\n<h2>标题 2</h2>\n<p>这里是内容。</p>\n<h3>标题 3</h3>\n<p>这里是内容。</p>\n", "r": { "minutes": 0.11, "words": 34 }, "t": "草莓", "i": "pen-to-square", "y": "a" } }],
  ["/zh/posts/tomato.html", { loader: () => import(
    /* webpackChunkName: "zh_posts_tomato.html" */
    "./assets/tomato.html-BcV7MQVl.js"
  ), meta: { "d": 16419456e5, "l": "2022年1月12日", "c": ["蔬菜"], "g": ["红", "圆"], "u": true, "v": "/assets/images/cover2.jpg", "e": "\n<h2>标题 2</h2>\n<p>这里是内容。</p>\n<h3>标题 3</h3>\n<p>这里是内容。</p>\n", "r": { "minutes": 0.13, "words": 38 }, "t": "番茄", "i": "pen-to-square", "y": "a" } }],
  ["/zh/posts/apple/1.html", { loader: () => import(
    /* webpackChunkName: "zh_posts_apple_1.html" */
    "./assets/1.html-wS2gLOVG.js"
  ), meta: { "d": 16409952e5, "l": "2022年1月1日", "c": ["苹果"], "g": ["红", "大", "圆"], "e": "\n<h2>标题 2</h2>\n<p>这里是内容。</p>\n<h3>标题 3</h3>\n<p>这里是内容。</p>\n", "r": { "minutes": 0.11, "words": 34 }, "t": "苹果 1", "i": "pen-to-square", "y": "a" } }],
  ["/zh/posts/apple/2.html", { loader: () => import(
    /* webpackChunkName: "zh_posts_apple_2.html" */
    "./assets/2.html-YllHqRUV.js"
  ), meta: { "d": 16410816e5, "l": "2022年1月2日", "c": ["苹果"], "g": ["红", "大", "圆"], "e": "\n<p>一个被星标了的苹果文章。</p>\n", "r": { "minutes": 0.16, "words": 48 }, "t": "苹果 2", "i": "pen-to-square", "y": "a" } }],
  ["/zh/posts/apple/3.html", { loader: () => import(
    /* webpackChunkName: "zh_posts_apple_3.html" */
    "./assets/3.html-B1wrRQVS.js"
  ), meta: { "d": 1641168e6, "l": "2022年1月3日", "c": ["苹果", "水果"], "g": ["红", "大", "圆"], "e": "\n<h2>标题 2</h2>\n<p>这里是内容。</p>\n<h3>标题 3</h3>\n<p>这里是内容。</p>\n", "r": { "minutes": 0.12, "words": 36 }, "t": "苹果 3", "i": "pen-to-square", "y": "a" } }],
  ["/zh/posts/apple/4.html", { loader: () => import(
    /* webpackChunkName: "zh_posts_apple_4.html" */
    "./assets/4.html-J9Sffwfy.js"
  ), meta: { "d": 16412544e5, "l": "2022年1月4日", "c": ["苹果", "水果"], "g": ["红", "大", "圆"], "e": "\n<h2>标题 2</h2>\n<p>这里是内容。</p>\n<h3>标题 3</h3>\n<p>这里是内容。</p>\n", "r": { "minutes": 0.12, "words": 36 }, "t": "苹果 4", "i": "pen-to-square", "y": "a" } }],
  ["/zh/posts/banana/1.html", { loader: () => import(
    /* webpackChunkName: "zh_posts_banana_1.html" */
    "./assets/1.html-v1ighoUo.js"
  ), meta: { "d": 16413408e5, "l": "2022年1月5日", "c": ["香蕉", "水果"], "g": ["黄", "弯曲的", "长"], "e": "\n<h2>标题 2</h2>\n<p>这里是内容。</p>\n<h3>标题 3</h3>\n<p>这里是内容。</p>\n", "r": { "minutes": 0.13, "words": 38 }, "t": "香蕉 1", "i": "pen-to-square", "y": "a" } }],
  ["/zh/posts/banana/2.html", { loader: () => import(
    /* webpackChunkName: "zh_posts_banana_2.html" */
    "./assets/2.html-oIp13kxU.js"
  ), meta: { "d": 16414272e5, "l": "2022年1月6日", "c": ["香蕉", "水果"], "g": ["黄", "弯曲的", "长"], "e": "\n<p>一个被数字 <code>10</code> 星标了的香蕉文章。</p>\n", "r": { "minutes": 0.18, "words": 55 }, "t": "香蕉 2", "i": "pen-to-square", "y": "a" } }],
  ["/zh/posts/banana/3.html", { loader: () => import(
    /* webpackChunkName: "zh_posts_banana_3.html" */
    "./assets/3.html-DZc7mG1g.js"
  ), meta: { "d": 16415136e5, "l": "2022年1月7日", "c": ["香蕉"], "g": ["黄", "弯曲的", "长"], "e": "\n<h2>标题 2</h2>\n<p>这里是内容。</p>\n<h3>标题 3</h3>\n<p>这里是内容。</p>\n", "r": { "minutes": 0.12, "words": 36 }, "t": "香蕉 3", "i": "pen-to-square", "y": "a" } }],
  ["/zh/posts/banana/4.html", { loader: () => import(
    /* webpackChunkName: "zh_posts_banana_4.html" */
    "./assets/4.html-PscwhEmP.js"
  ), meta: { "d": 16416e8, "l": "2022年1月8日", "c": ["香蕉"], "g": ["黄", "弯曲的", "长"], "e": "\n<h2>标题 2</h2>\n<p>这里是内容。</p>\n<h3>标题 3</h3>\n<p>这里是内容。</p>\n", "r": { "minutes": 0.12, "words": 36 }, "t": "香蕉 4", "i": "pen-to-square", "y": "a" } }],
  ["/404.html", { loader: () => import(
    /* webpackChunkName: "404.html" */
    "./assets/404.html-DzmuKx2l.js"
  ), meta: { "t": "" } }],
  ["/posts/", { loader: () => import(
    /* webpackChunkName: "posts_index.html" */
    "./assets/index.html-BRLljquy.js"
  ), meta: { "t": "Posts" } }],
  ["/posts/banana/", { loader: () => import(
    /* webpackChunkName: "posts_banana_index.html" */
    "./assets/index.html-_Da_CeDF.js"
  ), meta: { "t": "Banana" } }],
  ["/posts/apple/", { loader: () => import(
    /* webpackChunkName: "posts_apple_index.html" */
    "./assets/index.html-BKtFxlI_.js"
  ), meta: { "t": "Apple" } }],
  ["/zh/posts/", { loader: () => import(
    /* webpackChunkName: "zh_posts_index.html" */
    "./assets/index.html-OHmbZ-Ck.js"
  ), meta: { "t": "Posts" } }],
  ["/zh/posts/apple/", { loader: () => import(
    /* webpackChunkName: "zh_posts_apple_index.html" */
    "./assets/index.html-A-rsoS0r.js"
  ), meta: { "t": "Apple" } }],
  ["/zh/posts/banana/", { loader: () => import(
    /* webpackChunkName: "zh_posts_banana_index.html" */
    "./assets/index.html-T_VZV1Cl.js"
  ), meta: { "t": "Banana" } }],
  ["/category/", { loader: () => import(
    /* webpackChunkName: "category_index.html" */
    "./assets/index.html-Ckz9VBap.js"
  ), meta: { "t": "Category", "I": false } }],
  ["/category/guide/", { loader: () => import(
    /* webpackChunkName: "category_guide_index.html" */
    "./assets/index.html-Btnfhlz3.js"
  ), meta: { "t": "Guide Category", "I": false } }],
  ["/category/cherry/", { loader: () => import(
    /* webpackChunkName: "category_cherry_index.html" */
    "./assets/index.html-DA6WpAy2.js"
  ), meta: { "t": "Cherry Category", "I": false } }],
  ["/category/dragon-fruit/", { loader: () => import(
    /* webpackChunkName: "category_dragon-fruit_index.html" */
    "./assets/index.html-DuFlMSow.js"
  ), meta: { "t": "Dragon Fruit Category", "I": false } }],
  ["/category/fruit/", { loader: () => import(
    /* webpackChunkName: "category_fruit_index.html" */
    "./assets/index.html-DTHfF2lw.js"
  ), meta: { "t": "Fruit Category", "I": false } }],
  ["/category/strawberry/", { loader: () => import(
    /* webpackChunkName: "category_strawberry_index.html" */
    "./assets/index.html-BwIc2jKy.js"
  ), meta: { "t": "Strawberry Category", "I": false } }],
  ["/category/vegetable/", { loader: () => import(
    /* webpackChunkName: "category_vegetable_index.html" */
    "./assets/index.html-Cm6Y3luz.js"
  ), meta: { "t": "Vegetable Category", "I": false } }],
  ["/category/banana/", { loader: () => import(
    /* webpackChunkName: "category_banana_index.html" */
    "./assets/index.html-BNz52YEv.js"
  ), meta: { "t": "Banana Category", "I": false } }],
  ["/category/apple/", { loader: () => import(
    /* webpackChunkName: "category_apple_index.html" */
    "./assets/index.html-gKPGpuwT.js"
  ), meta: { "t": "Apple Category", "I": false } }],
  ["/zh/category/", { loader: () => import(
    /* webpackChunkName: "zh_category_index.html" */
    "./assets/index.html-BF_yOZlg.js"
  ), meta: { "t": "分类", "I": false } }],
  ["/zh/category/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/", { loader: () => import(
    /* webpackChunkName: "zh_category_使用指南_index.html" */
    "./assets/index.html-BfWgTNqx.js"
  ), meta: { "t": "使用指南 分类", "I": false } }],
  ["/zh/category/%E6%8C%87%E5%8D%97/", { loader: () => import(
    /* webpackChunkName: "zh_category_指南_index.html" */
    "./assets/index.html-BahFF3um.js"
  ), meta: { "t": "指南 分类", "I": false } }],
  ["/zh/category/%E6%A8%B1%E6%A1%83/", { loader: () => import(
    /* webpackChunkName: "zh_category_樱桃_index.html" */
    "./assets/index.html-Cls4fq30.js"
  ), meta: { "t": "樱桃 分类", "I": false } }],
  ["/zh/category/%E7%81%AB%E9%BE%99%E6%9E%9C/", { loader: () => import(
    /* webpackChunkName: "zh_category_火龙果_index.html" */
    "./assets/index.html-BZbRGYlI.js"
  ), meta: { "t": "火龙果 分类", "I": false } }],
  ["/zh/category/%E6%B0%B4%E6%9E%9C/", { loader: () => import(
    /* webpackChunkName: "zh_category_水果_index.html" */
    "./assets/index.html-CvYDZOQg.js"
  ), meta: { "t": "水果 分类", "I": false } }],
  ["/zh/category/%E8%8D%89%E8%8E%93/", { loader: () => import(
    /* webpackChunkName: "zh_category_草莓_index.html" */
    "./assets/index.html-C_E7lAgI.js"
  ), meta: { "t": "草莓 分类", "I": false } }],
  ["/zh/category/%E8%94%AC%E8%8F%9C/", { loader: () => import(
    /* webpackChunkName: "zh_category_蔬菜_index.html" */
    "./assets/index.html-Gev7Xf6h.js"
  ), meta: { "t": "蔬菜 分类", "I": false } }],
  ["/zh/category/%E8%8B%B9%E6%9E%9C/", { loader: () => import(
    /* webpackChunkName: "zh_category_苹果_index.html" */
    "./assets/index.html-DOwHQJwc.js"
  ), meta: { "t": "苹果 分类", "I": false } }],
  ["/zh/category/%E9%A6%99%E8%95%89/", { loader: () => import(
    /* webpackChunkName: "zh_category_香蕉_index.html" */
    "./assets/index.html-BHunDK0k.js"
  ), meta: { "t": "香蕉 分类", "I": false } }],
  ["/tag/", { loader: () => import(
    /* webpackChunkName: "tag_index.html" */
    "./assets/index.html-DrRVFoPw.js"
  ), meta: { "t": "Tag", "I": false } }],
  ["/tag/disable/", { loader: () => import(
    /* webpackChunkName: "tag_disable_index.html" */
    "./assets/index.html-CsUUVrP5.js"
  ), meta: { "t": "Tag: disable", "I": false } }],
  ["/tag/encryption/", { loader: () => import(
    /* webpackChunkName: "tag_encryption_index.html" */
    "./assets/index.html-WuR_u162.js"
  ), meta: { "t": "Tag: encryption", "I": false } }],
  ["/tag/layout/", { loader: () => import(
    /* webpackChunkName: "tag_layout_index.html" */
    "./assets/index.html-9J5JqFnJ.js"
  ), meta: { "t": "Tag: Layout", "I": false } }],
  ["/tag/markdown/", { loader: () => import(
    /* webpackChunkName: "tag_markdown_index.html" */
    "./assets/index.html-nM0cTg3u.js"
  ), meta: { "t": "Tag: Markdown", "I": false } }],
  ["/tag/page-config/", { loader: () => import(
    /* webpackChunkName: "tag_page-config_index.html" */
    "./assets/index.html-LwJSeYY0.js"
  ), meta: { "t": "Tag: Page config", "I": false } }],
  ["/tag/guide/", { loader: () => import(
    /* webpackChunkName: "tag_guide_index.html" */
    "./assets/index.html-B-0BIV0b.js"
  ), meta: { "t": "Tag: Guide", "I": false } }],
  ["/tag/red/", { loader: () => import(
    /* webpackChunkName: "tag_red_index.html" */
    "./assets/index.html-DNg8tvWI.js"
  ), meta: { "t": "Tag: red", "I": false } }],
  ["/tag/small/", { loader: () => import(
    /* webpackChunkName: "tag_small_index.html" */
    "./assets/index.html-BeU4bvzq.js"
  ), meta: { "t": "Tag: small", "I": false } }],
  ["/tag/round/", { loader: () => import(
    /* webpackChunkName: "tag_round_index.html" */
    "./assets/index.html-BOCYe6S8.js"
  ), meta: { "t": "Tag: round", "I": false } }],
  ["/tag/big/", { loader: () => import(
    /* webpackChunkName: "tag_big_index.html" */
    "./assets/index.html-CM0HpKnq.js"
  ), meta: { "t": "Tag: big", "I": false } }],
  ["/tag/yellow/", { loader: () => import(
    /* webpackChunkName: "tag_yellow_index.html" */
    "./assets/index.html-B-sQj8ni.js"
  ), meta: { "t": "Tag: yellow", "I": false } }],
  ["/tag/curly/", { loader: () => import(
    /* webpackChunkName: "tag_curly_index.html" */
    "./assets/index.html-BCvZ3RkA.js"
  ), meta: { "t": "Tag: curly", "I": false } }],
  ["/tag/long/", { loader: () => import(
    /* webpackChunkName: "tag_long_index.html" */
    "./assets/index.html-iu8UTVum.js"
  ), meta: { "t": "Tag: long", "I": false } }],
  ["/zh/tag/", { loader: () => import(
    /* webpackChunkName: "zh_tag_index.html" */
    "./assets/index.html-BQNsv0P5.js"
  ), meta: { "t": "标签", "I": false } }],
  ["/zh/tag/%E7%A6%81%E7%94%A8/", { loader: () => import(
    /* webpackChunkName: "zh_tag_禁用_index.html" */
    "./assets/index.html-C0C4Czih.js"
  ), meta: { "t": "标签: 禁用", "I": false } }],
  ["/zh/tag/%E5%8A%A0%E5%AF%86/", { loader: () => import(
    /* webpackChunkName: "zh_tag_加密_index.html" */
    "./assets/index.html-tAyUY30b.js"
  ), meta: { "t": "标签: 加密", "I": false } }],
  ["/zh/tag/%E5%B8%83%E5%B1%80/", { loader: () => import(
    /* webpackChunkName: "zh_tag_布局_index.html" */
    "./assets/index.html-DJqDvfjy.js"
  ), meta: { "t": "标签: 布局", "I": false } }],
  ["/zh/tag/markdown/", { loader: () => import(
    /* webpackChunkName: "zh_tag_markdown_index.html" */
    "./assets/index.html-BqpyAhpR.js"
  ), meta: { "t": "标签: Markdown", "I": false } }],
  ["/zh/tag/%E9%A1%B5%E9%9D%A2%E9%85%8D%E7%BD%AE/", { loader: () => import(
    /* webpackChunkName: "zh_tag_页面配置_index.html" */
    "./assets/index.html-CIG4wTR_.js"
  ), meta: { "t": "标签: 页面配置", "I": false } }],
  ["/zh/tag/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/", { loader: () => import(
    /* webpackChunkName: "zh_tag_使用指南_index.html" */
    "./assets/index.html-F1319CRf.js"
  ), meta: { "t": "标签: 使用指南", "I": false } }],
  ["/zh/tag/%E7%BA%A2/", { loader: () => import(
    /* webpackChunkName: "zh_tag_红_index.html" */
    "./assets/index.html-jDXoCkFg.js"
  ), meta: { "t": "标签: 红", "I": false } }],
  ["/zh/tag/%E5%B0%8F/", { loader: () => import(
    /* webpackChunkName: "zh_tag_小_index.html" */
    "./assets/index.html-B2Wg1Rda.js"
  ), meta: { "t": "标签: 小", "I": false } }],
  ["/zh/tag/%E5%9C%86/", { loader: () => import(
    /* webpackChunkName: "zh_tag_圆_index.html" */
    "./assets/index.html-eMBBHIbt.js"
  ), meta: { "t": "标签: 圆", "I": false } }],
  ["/zh/tag/%E5%A4%A7/", { loader: () => import(
    /* webpackChunkName: "zh_tag_大_index.html" */
    "./assets/index.html-BizLYeZw.js"
  ), meta: { "t": "标签: 大", "I": false } }],
  ["/zh/tag/%E9%BB%84/", { loader: () => import(
    /* webpackChunkName: "zh_tag_黄_index.html" */
    "./assets/index.html-D-dF3cIe.js"
  ), meta: { "t": "标签: 黄", "I": false } }],
  ["/zh/tag/%E5%BC%AF%E6%9B%B2%E7%9A%84/", { loader: () => import(
    /* webpackChunkName: "zh_tag_弯曲的_index.html" */
    "./assets/index.html-DnkdnG0h.js"
  ), meta: { "t": "标签: 弯曲的", "I": false } }],
  ["/zh/tag/%E9%95%BF/", { loader: () => import(
    /* webpackChunkName: "zh_tag_长_index.html" */
    "./assets/index.html-BMrgLoa3.js"
  ), meta: { "t": "标签: 长", "I": false } }],
  ["/article/", { loader: () => import(
    /* webpackChunkName: "article_index.html" */
    "./assets/index.html-DU-OGKTz.js"
  ), meta: { "t": "Articles", "I": false } }],
  ["/zh/article/", { loader: () => import(
    /* webpackChunkName: "zh_article_index.html" */
    "./assets/index.html-Cnc9VMHq.js"
  ), meta: { "t": "文章", "I": false } }],
  ["/star/", { loader: () => import(
    /* webpackChunkName: "star_index.html" */
    "./assets/index.html-Q_0Dl4g6.js"
  ), meta: { "t": "Star", "I": false } }],
  ["/zh/star/", { loader: () => import(
    /* webpackChunkName: "zh_star_index.html" */
    "./assets/index.html-D_uti5Pu.js"
  ), meta: { "t": "星标", "I": false } }],
  ["/timeline/", { loader: () => import(
    /* webpackChunkName: "timeline_index.html" */
    "./assets/index.html-DObOOQyS.js"
  ), meta: { "t": "Timeline", "I": false } }],
  ["/zh/timeline/", { loader: () => import(
    /* webpackChunkName: "zh_timeline_index.html" */
    "./assets/index.html-iVQT9-Gn.js"
  ), meta: { "t": "时间轴", "I": false } }],
  ["/tutorial/", { loader: () => import(
    /* webpackChunkName: "tutorial_index.html" */
    "./assets/index.html-lsqwrpFc.js"
  ), meta: { "t": "" } }],
  ["/zh/tutorial/", { loader: () => import(
    /* webpackChunkName: "zh_tutorial_index.html" */
    "./assets/index.html-DMoj_VxX.js"
  ), meta: { "t": "" } }]
]);
var clientDataSymbol = Symbol(
  ""
);
var useClientData = () => {
  const clientData = inject(clientDataSymbol);
  if (!clientData) {
    throw new Error("useClientData() is called without provider.");
  }
  return clientData;
};
var usePageComponent = () => useClientData().pageComponent;
var usePageData = () => useClientData().pageData;
var usePageFrontmatter = () => useClientData().pageFrontmatter;
var usePageHead = () => useClientData().pageHead;
var usePageLang = () => useClientData().pageLang;
var usePageLayout = () => useClientData().pageLayout;
var useRouteLocale = () => useClientData().routeLocale;
var useRoutePath = () => useClientData().routePath;
var useRoutes = () => useClientData().routes;
var useSiteData = () => useClientData().siteData;
var useSiteLocaleData = () => useClientData().siteLocaleData;
var redirects = shallowRef(redirects$1);
var routes = shallowRef(routes$1);
var resolveRoutePath = (pathname, currentPath) => {
  const normalizedRoutePath = normalizeRoutePath(pathname, currentPath);
  if (routes.value[normalizedRoutePath]) return normalizedRoutePath;
  const encodedRoutePath = encodeURI(normalizedRoutePath);
  if (routes.value[encodedRoutePath]) {
    return encodedRoutePath;
  }
  const redirectedRoutePath = redirects.value[normalizedRoutePath] || redirects.value[encodedRoutePath];
  if (redirectedRoutePath) {
    return redirectedRoutePath;
  }
  return normalizedRoutePath;
};
var resolveRoute = (path, currentPath) => {
  const { pathname, hashAndQueries } = splitPath(path);
  const routePath = resolveRoutePath(pathname, currentPath);
  const routeFullPath = routePath + hashAndQueries;
  if (!routes.value[routePath]) {
    return {
      ...routes.value["/404.html"],
      path: routeFullPath,
      notFound: true
    };
  }
  return {
    ...routes.value[routePath],
    path: routeFullPath,
    notFound: false
  };
};
var resolveRouteFullPath = (path, currentPath) => {
  const { pathname, hashAndQueries } = splitPath(path);
  return resolveRoutePath(pathname, currentPath) + hashAndQueries;
};
var guardEvent = (event) => {
  if (event.metaKey || event.altKey || event.ctrlKey || event.shiftKey) return;
  if (event.defaultPrevented) return;
  if (event.button !== void 0 && event.button !== 0) return;
  if (event.currentTarget) {
    const target = event.currentTarget.getAttribute("target");
    if (target == null ? void 0 : target.match(/\b_blank\b/i)) return;
  }
  event.preventDefault();
  return true;
};
var RouteLink = defineComponent({
  name: "RouteLink",
  props: {
    /**
     * The route path to link to
     */
    to: {
      type: String,
      required: true
    },
    /**
     * Whether the link is active to have an active class
     *
     * Notice that the active status is not automatically determined according to the current route.
     */
    active: Boolean,
    /**
     * The class to add when the link is active
     */
    activeClass: {
      type: String,
      default: "route-link-active"
    }
  },
  slots: Object,
  setup(props, { slots }) {
    const router = useRouter();
    const route = useRoute();
    const path = computed(
      () => props.to.startsWith("#") || props.to.startsWith("?") ? props.to : `${"/"}${resolveRouteFullPath(props.to, route.path).substring(1)}`
    );
    return () => {
      var _a2;
      return h$1(
        "a",
        {
          class: ["route-link", { [props.activeClass]: props.active }],
          href: path.value,
          onClick: (event = {}) => {
            if (guardEvent(event)) {
              router.push(props.to).catch();
            }
          }
        },
        (_a2 = slots.default) == null ? void 0 : _a2.call(slots)
      );
    };
  }
});
var AutoLink$1 = defineComponent({
  name: "AutoLink",
  props: {
    config: {
      type: Object,
      required: true
    }
  },
  slots: Object,
  setup(props, { slots }) {
    const config2 = toRef$1(props, "config");
    const route = useRoute();
    const siteData2 = useSiteData();
    const withProtocol = computed(() => isLinkWithProtocol(config2.value.link));
    const linkTarget = computed(
      () => config2.value.target || (withProtocol.value ? "_blank" : void 0)
    );
    const isBlankTarget = computed(() => linkTarget.value === "_blank");
    const isInternal = computed(
      () => !withProtocol.value && !isBlankTarget.value
    );
    const linkRel = computed(
      () => config2.value.rel || (isBlankTarget.value ? "noopener noreferrer" : null)
    );
    const linkAriaLabel = computed(
      () => config2.value.ariaLabel ?? config2.value.text
    );
    const shouldBeActiveInSubpath = computed(() => {
      if (config2.value.exact) return false;
      const localePaths = Object.keys(siteData2.value.locales);
      return localePaths.length ? (
        // Check all the locales
        localePaths.every((key) => key !== config2.value.link)
      ) : (
        // Check root
        config2.value.link !== "/"
      );
    });
    const isActive = computed(() => {
      if (!isInternal.value) return false;
      if (config2.value.activeMatch) {
        return (config2.value.activeMatch instanceof RegExp ? config2.value.activeMatch : new RegExp(config2.value.activeMatch, "u")).test(route.path);
      }
      if (shouldBeActiveInSubpath.value) {
        return route.path.startsWith(config2.value.link);
      }
      return route.path === config2.value.link;
    });
    return () => {
      const { before, after, default: defaultSlot } = slots;
      const content = (defaultSlot == null ? void 0 : defaultSlot(config2.value)) || [
        before == null ? void 0 : before(config2.value),
        config2.value.text,
        after == null ? void 0 : after(config2.value)
      ];
      return isInternal.value ? h$1(
        RouteLink,
        {
          "class": "auto-link",
          "to": config2.value.link,
          "active": isActive.value,
          "aria-label": linkAriaLabel.value
        },
        () => content
      ) : h$1(
        "a",
        {
          "class": "auto-link external-link",
          "href": config2.value.link,
          "aria-label": linkAriaLabel.value,
          "rel": linkRel.value,
          "target": linkTarget.value
        },
        content
      );
    };
  }
});
var ClientOnly = defineComponent({
  name: "ClientOnly",
  setup(_2, ctx) {
    const isMounted = ref(false);
    onMounted(() => {
      isMounted.value = true;
    });
    return () => {
      var _a2, _b2;
      return isMounted.value ? (_b2 = (_a2 = ctx.slots).default) == null ? void 0 : _b2.call(_a2) : null;
    };
  }
});
var Content = defineComponent({
  // eslint-disable-next-line vue/no-reserved-component-names
  name: "Content",
  props: {
    path: {
      type: String,
      required: false,
      default: ""
    }
  },
  setup(props) {
    const pageComponent = usePageComponent();
    const ContentComponent = computed(() => {
      if (!props.path) return pageComponent.value;
      const route = resolveRoute(props.path);
      return defineAsyncComponent(() => route.loader().then(({ comp }) => comp));
    });
    return () => h$1(ContentComponent.value);
  }
});
var LAYOUT_NAME_DEFAULT = "Layout";
var LANG_DEFAULT = "en-US";
var resolvers = reactive({
  /**
   * Resolve layouts component map
   */
  resolveLayouts: (clientConfigs2) => clientConfigs2.reduce(
    (prev, item) => ({
      ...prev,
      ...item.layouts
    }),
    {}
  ),
  /**
   * Merge the head config in frontmatter and site locale
   *
   * Frontmatter should take priority over site locale
   */
  resolvePageHead: (pageHeadTitle, pageFrontmatter, siteLocaleDate) => {
    const description = isString(pageFrontmatter.description) ? pageFrontmatter.description : siteLocaleDate.description;
    const head = [
      ...Array.isArray(pageFrontmatter.head) ? pageFrontmatter.head : [],
      ...siteLocaleDate.head,
      ["title", {}, pageHeadTitle],
      ["meta", { name: "description", content: description }]
    ];
    return dedupeHead(head);
  },
  /**
   * Resolve the content of page head title
   *
   * It would be used as the content of the `<title>` tag
   */
  resolvePageHeadTitle: (pageData, siteLocaleDate) => [pageData.title, siteLocaleDate.title].filter((item) => !!item).join(" | "),
  /**
   * Resolve page language from page data
   *
   * It would be used as the `lang` attribute of `<html>` tag
   */
  resolvePageLang: (pageData, siteLocaleData) => pageData.lang || siteLocaleData.lang || LANG_DEFAULT,
  /**
   * Resolve layout component of current page
   */
  resolvePageLayout: (pageData, layouts) => {
    const layoutName = isString(pageData.frontmatter.layout) ? pageData.frontmatter.layout : LAYOUT_NAME_DEFAULT;
    if (!layouts[layoutName]) {
      throw new Error(`[vuepress] Cannot resolve layout: ${layoutName}`);
    }
    return layouts[layoutName];
  },
  /**
   * Resolve locale path according to route path and locales config
   */
  resolveRouteLocale: (locales2, routePath) => resolveLocalePath(locales2, decodeURI(routePath)),
  /**
   * Resolve site data for specific locale
   *
   * It would merge the locales fields to the root fields
   */
  resolveSiteLocaleData: ({ base, locales: locales2, ...siteData2 }, routeLocale) => {
    var _a2;
    return {
      ...siteData2,
      ...locales2[routeLocale],
      head: [
        // when merging head, the locales head should be placed before root head
        // to get higher priority
        ...((_a2 = locales2[routeLocale]) == null ? void 0 : _a2.head) ?? [],
        ...siteData2.head ?? []
      ]
    };
  }
});
var defineClientConfig = (clientConfig = {}) => clientConfig;
var withBase = (url) => {
  if (isLinkHttp(url)) return url;
  return `${"/"}${removeLeadingSlash(url)}`;
};
const clientConfig0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
const clientConfig1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
const useLocaleConfig = (localesConfig) => {
  const routeLocale = useRouteLocale();
  return computed(() => localesConfig[routeLocale.value] ?? {});
};
const useRoutePaths = () => {
  const routes2 = useRoutes();
  return computed(() => Object.keys(routes2.value));
};
var u8 = Uint8Array, u16 = Uint16Array, i32 = Int32Array;
var fleb = new u8([
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  1,
  1,
  2,
  2,
  2,
  2,
  3,
  3,
  3,
  3,
  4,
  4,
  4,
  4,
  5,
  5,
  5,
  5,
  0,
  /* unused */
  0,
  0,
  /* impossible */
  0
]);
var fdeb = new u8([
  0,
  0,
  0,
  0,
  1,
  1,
  2,
  2,
  3,
  3,
  4,
  4,
  5,
  5,
  6,
  6,
  7,
  7,
  8,
  8,
  9,
  9,
  10,
  10,
  11,
  11,
  12,
  12,
  13,
  13,
  /* unused */
  0,
  0
]);
var clim = new u8([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
var freb = function(eb, start) {
  var b2 = new u16(31);
  for (var i2 = 0; i2 < 31; ++i2) {
    b2[i2] = start += 1 << eb[i2 - 1];
  }
  var r2 = new i32(b2[30]);
  for (var i2 = 1; i2 < 30; ++i2) {
    for (var j2 = b2[i2]; j2 < b2[i2 + 1]; ++j2) {
      r2[j2] = j2 - b2[i2] << 5 | i2;
    }
  }
  return { b: b2, r: r2 };
};
var _a = freb(fleb, 2), fl = _a.b, revfl = _a.r;
fl[28] = 258, revfl[258] = 28;
var _b = freb(fdeb, 0), fd = _b.b;
var rev = new u16(32768);
for (var i$3 = 0; i$3 < 32768; ++i$3) {
  var x$3 = (i$3 & 43690) >> 1 | (i$3 & 21845) << 1;
  x$3 = (x$3 & 52428) >> 2 | (x$3 & 13107) << 2;
  x$3 = (x$3 & 61680) >> 4 | (x$3 & 3855) << 4;
  rev[i$3] = ((x$3 & 65280) >> 8 | (x$3 & 255) << 8) >> 1;
}
var hMap = function(cd, mb, r2) {
  var s2 = cd.length;
  var i2 = 0;
  var l2 = new u16(mb);
  for (; i2 < s2; ++i2) {
    if (cd[i2])
      ++l2[cd[i2] - 1];
  }
  var le = new u16(mb);
  for (i2 = 1; i2 < mb; ++i2) {
    le[i2] = le[i2 - 1] + l2[i2 - 1] << 1;
  }
  var co;
  if (r2) {
    co = new u16(1 << mb);
    var rvb = 15 - mb;
    for (i2 = 0; i2 < s2; ++i2) {
      if (cd[i2]) {
        var sv = i2 << 4 | cd[i2];
        var r_1 = mb - cd[i2];
        var v2 = le[cd[i2] - 1]++ << r_1;
        for (var m2 = v2 | (1 << r_1) - 1; v2 <= m2; ++v2) {
          co[rev[v2] >> rvb] = sv;
        }
      }
    }
  } else {
    co = new u16(s2);
    for (i2 = 0; i2 < s2; ++i2) {
      if (cd[i2]) {
        co[i2] = rev[le[cd[i2] - 1]++] >> 15 - cd[i2];
      }
    }
  }
  return co;
};
var flt = new u8(288);
for (var i$3 = 0; i$3 < 144; ++i$3)
  flt[i$3] = 8;
for (var i$3 = 144; i$3 < 256; ++i$3)
  flt[i$3] = 9;
for (var i$3 = 256; i$3 < 280; ++i$3)
  flt[i$3] = 7;
for (var i$3 = 280; i$3 < 288; ++i$3)
  flt[i$3] = 8;
var fdt = new u8(32);
for (var i$3 = 0; i$3 < 32; ++i$3)
  fdt[i$3] = 5;
var flrm = /* @__PURE__ */ hMap(flt, 9, 1);
var fdrm = /* @__PURE__ */ hMap(fdt, 5, 1);
var max = function(a2) {
  var m2 = a2[0];
  for (var i2 = 1; i2 < a2.length; ++i2) {
    if (a2[i2] > m2)
      m2 = a2[i2];
  }
  return m2;
};
var bits = function(d2, p2, m2) {
  var o2 = p2 / 8 | 0;
  return (d2[o2] | d2[o2 + 1] << 8) >> (p2 & 7) & m2;
};
var bits16 = function(d2, p2) {
  var o2 = p2 / 8 | 0;
  return (d2[o2] | d2[o2 + 1] << 8 | d2[o2 + 2] << 16) >> (p2 & 7);
};
var shft = function(p2) {
  return (p2 + 7) / 8 | 0;
};
var slc = function(v2, s2, e2) {
  if (s2 == null || s2 < 0)
    s2 = 0;
  if (e2 == null || e2 > v2.length)
    e2 = v2.length;
  return new u8(v2.subarray(s2, e2));
};
var ec = [
  "unexpected EOF",
  "invalid block type",
  "invalid length/literal",
  "invalid distance",
  "stream finished",
  "no stream handler",
  ,
  "no callback",
  "invalid UTF-8 data",
  "extra field too long",
  "date not in range 1980-2099",
  "filename too long",
  "stream finishing",
  "invalid zip data"
  // determined by unknown compression method
];
var err = function(ind, msg, nt) {
  var e2 = new Error(msg || ec[ind]);
  e2.code = ind;
  if (Error.captureStackTrace)
    Error.captureStackTrace(e2, err);
  if (!nt)
    throw e2;
  return e2;
};
var inflt = function(dat, st, buf, dict) {
  var sl = dat.length, dl = 0;
  if (!sl || st.f && !st.l)
    return buf || new u8(0);
  var noBuf = !buf;
  var resize = noBuf || st.i != 2;
  var noSt = st.i;
  if (noBuf)
    buf = new u8(sl * 3);
  var cbuf = function(l3) {
    var bl = buf.length;
    if (l3 > bl) {
      var nbuf = new u8(Math.max(bl * 2, l3));
      nbuf.set(buf);
      buf = nbuf;
    }
  };
  var final = st.f || 0, pos = st.p || 0, bt = st.b || 0, lm = st.l, dm = st.d, lbt = st.m, dbt = st.n;
  var tbts = sl * 8;
  do {
    if (!lm) {
      final = bits(dat, pos, 1);
      var type = bits(dat, pos + 1, 3);
      pos += 3;
      if (!type) {
        var s2 = shft(pos) + 4, l2 = dat[s2 - 4] | dat[s2 - 3] << 8, t2 = s2 + l2;
        if (t2 > sl) {
          if (noSt)
            err(0);
          break;
        }
        if (resize)
          cbuf(bt + l2);
        buf.set(dat.subarray(s2, t2), bt);
        st.b = bt += l2, st.p = pos = t2 * 8, st.f = final;
        continue;
      } else if (type == 1)
        lm = flrm, dm = fdrm, lbt = 9, dbt = 5;
      else if (type == 2) {
        var hLit = bits(dat, pos, 31) + 257, hcLen = bits(dat, pos + 10, 15) + 4;
        var tl = hLit + bits(dat, pos + 5, 31) + 1;
        pos += 14;
        var ldt = new u8(tl);
        var clt = new u8(19);
        for (var i2 = 0; i2 < hcLen; ++i2) {
          clt[clim[i2]] = bits(dat, pos + i2 * 3, 7);
        }
        pos += hcLen * 3;
        var clb = max(clt), clbmsk = (1 << clb) - 1;
        var clm = hMap(clt, clb, 1);
        for (var i2 = 0; i2 < tl; ) {
          var r2 = clm[bits(dat, pos, clbmsk)];
          pos += r2 & 15;
          var s2 = r2 >> 4;
          if (s2 < 16) {
            ldt[i2++] = s2;
          } else {
            var c2 = 0, n2 = 0;
            if (s2 == 16)
              n2 = 3 + bits(dat, pos, 3), pos += 2, c2 = ldt[i2 - 1];
            else if (s2 == 17)
              n2 = 3 + bits(dat, pos, 7), pos += 3;
            else if (s2 == 18)
              n2 = 11 + bits(dat, pos, 127), pos += 7;
            while (n2--)
              ldt[i2++] = c2;
          }
        }
        var lt = ldt.subarray(0, hLit), dt = ldt.subarray(hLit);
        lbt = max(lt);
        dbt = max(dt);
        lm = hMap(lt, lbt, 1);
        dm = hMap(dt, dbt, 1);
      } else
        err(1);
      if (pos > tbts) {
        if (noSt)
          err(0);
        break;
      }
    }
    if (resize)
      cbuf(bt + 131072);
    var lms = (1 << lbt) - 1, dms = (1 << dbt) - 1;
    var lpos = pos;
    for (; ; lpos = pos) {
      var c2 = lm[bits16(dat, pos) & lms], sym = c2 >> 4;
      pos += c2 & 15;
      if (pos > tbts) {
        if (noSt)
          err(0);
        break;
      }
      if (!c2)
        err(2);
      if (sym < 256)
        buf[bt++] = sym;
      else if (sym == 256) {
        lpos = pos, lm = null;
        break;
      } else {
        var add = sym - 254;
        if (sym > 264) {
          var i2 = sym - 257, b2 = fleb[i2];
          add = bits(dat, pos, (1 << b2) - 1) + fl[i2];
          pos += b2;
        }
        var d2 = dm[bits16(dat, pos) & dms], dsym = d2 >> 4;
        if (!d2)
          err(3);
        pos += d2 & 15;
        var dt = fd[dsym];
        if (dsym > 3) {
          var b2 = fdeb[dsym];
          dt += bits16(dat, pos) & (1 << b2) - 1, pos += b2;
        }
        if (pos > tbts) {
          if (noSt)
            err(0);
          break;
        }
        if (resize)
          cbuf(bt + 131072);
        var end = bt + add;
        if (bt < dt) {
          var shift = dl - dt, dend = Math.min(dt, end);
          if (shift + bt < 0)
            err(3);
          for (; bt < dend; ++bt)
            buf[bt] = dict[shift + bt];
        }
        for (; bt < end; ++bt)
          buf[bt] = buf[bt - dt];
      }
    }
    st.l = lm, st.p = lpos, st.b = bt, st.f = final;
    if (lm)
      final = 1, st.m = lbt, st.d = dm, st.n = dbt;
  } while (!final);
  return bt != buf.length && noBuf ? slc(buf, 0, bt) : buf.subarray(0, bt);
};
var et = /* @__PURE__ */ new u8(0);
var zls = function(d2, dict) {
  if ((d2[0] & 15) != 8 || d2[0] >> 4 > 7 || (d2[0] << 8 | d2[1]) % 31)
    err(6, "invalid zlib data");
  if ((d2[1] >> 5 & 1) == +!dict)
    err(6, "invalid zlib data: " + (d2[1] & 32 ? "need" : "unexpected") + " dictionary");
  return (d2[1] >> 3 & 4) + 2;
};
function unzlibSync(data, opts) {
  return inflt(data.subarray(zls(data, opts), -4), { i: 2 }, opts, opts);
}
var td = typeof TextDecoder != "undefined" && /* @__PURE__ */ new TextDecoder();
var tds = 0;
try {
  td.decode(et, { stream: true });
  tds = 1;
} catch (e2) {
}
var dutf8 = function(d2) {
  for (var r2 = "", i2 = 0; ; ) {
    var c2 = d2[i2++];
    var eb = (c2 > 127) + (c2 > 223) + (c2 > 239);
    if (i2 + eb > d2.length)
      return { s: r2, r: slc(d2, i2 - 1) };
    if (!eb)
      r2 += String.fromCharCode(c2);
    else if (eb == 3) {
      c2 = ((c2 & 15) << 18 | (d2[i2++] & 63) << 12 | (d2[i2++] & 63) << 6 | d2[i2++] & 63) - 65536, r2 += String.fromCharCode(55296 | c2 >> 10, 56320 | c2 & 1023);
    } else if (eb & 1)
      r2 += String.fromCharCode((c2 & 31) << 6 | d2[i2++] & 63);
    else
      r2 += String.fromCharCode((c2 & 15) << 12 | (d2[i2++] & 63) << 6 | d2[i2++] & 63);
  }
};
function strToU8(str, latin1) {
  {
    var ar_1 = new u8(str.length);
    for (var i2 = 0; i2 < str.length; ++i2)
      ar_1[i2] = str.charCodeAt(i2);
    return ar_1;
  }
  var l2 = str.length;
  for (var i2 = 0; i2 < l2; ++i2) {
  }
}
function strFromU8(dat, latin1) {
  var r2;
  if (td) {
    return td.decode(dat);
  } else {
    var _a2 = dutf8(dat), s2 = _a2.s, r2 = _a2.r;
    if (r2.length)
      err(8);
    return s2;
  }
}
const decodeData = (base64) => {
  const binary = Buffer.from(base64, "base64").toString("binary");
  return strFromU8(unzlibSync(strToU8(binary)));
};
const hasGlobalComponent = (name, app) => {
  var _a2;
  const globalComponents = (_a2 = (app == null ? void 0 : app._instance) || getCurrentInstance()) == null ? void 0 : _a2.appContext.components;
  if (!globalComponents)
    return false;
  return name in globalComponents || camelize(name) in globalComponents || capitalize(camelize(name)) in globalComponents;
};
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const isDef = (val) => typeof val !== "undefined";
const isNumber = (val) => typeof val === "number";
const isArray = Array.isArray;
const startsWith = (str, prefix) => isString(str) && str.startsWith(prefix);
const endsWith = (str, suffix) => isString(str) && str.endsWith(suffix);
const entries = Object.entries;
const keys = Object.keys;
const deepAssign = (originObject, ...overrideObjects) => {
  if (overrideObjects.length === 0)
    return originObject;
  const assignObject = overrideObjects.shift() || null;
  if (assignObject)
    entries(assignObject).forEach(([property, value]) => {
      if (property === "__proto__" || property === "constructor")
        return;
      if (isPlainObject(originObject[property]) && isPlainObject(value))
        deepAssign(originObject[property], value);
      else if (isArray(value))
        originObject[property] = [...value];
      else if (isPlainObject(value))
        originObject[property] = {
          ...value
        };
      else
        originObject[property] = assignObject[property];
    });
  return deepAssign(originObject, ...overrideObjects);
};
const getDate = (input) => {
  if (input) {
    if (typeof input === "number")
      return new Date(input);
    const date = Date.parse(input.toString());
    if (!Number.isNaN(date))
      return new Date(date);
  }
  return null;
};
const isLinkAbsolute = (test) => startsWith(test, "/");
function tryOnScopeDispose(fn) {
  if (getCurrentScope()) {
    onScopeDispose(fn);
    return true;
  }
  return false;
}
function toValue(r2) {
  return typeof r2 === "function" ? r2() : unref(r2);
}
const isClient = typeof window !== "undefined" && typeof document !== "undefined";
typeof WorkerGlobalScope !== "undefined" && globalThis instanceof WorkerGlobalScope;
const notNullish = (val) => val != null;
const toString = Object.prototype.toString;
const isObject = (val) => toString.call(val) === "[object Object]";
const noop = () => {
};
const isIOS = /* @__PURE__ */ getIsIOS();
function getIsIOS() {
  var _a2, _b2;
  return isClient && ((_a2 = window == null ? void 0 : window.navigator) == null ? void 0 : _a2.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((_b2 = window == null ? void 0 : window.navigator) == null ? void 0 : _b2.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function createFilterWrapper(filter, fn) {
  function wrapper(...args) {
    return new Promise((resolve, reject) => {
      Promise.resolve(filter(() => fn.apply(this, args), { fn, thisArg: this, args })).then(resolve).catch(reject);
    });
  }
  return wrapper;
}
const bypassFilter = (invoke) => {
  return invoke();
};
function debounceFilter(ms, options = {}) {
  let timer;
  let maxTimer;
  let lastRejector = noop;
  const _clearTimeout = (timer2) => {
    clearTimeout(timer2);
    lastRejector();
    lastRejector = noop;
  };
  const filter = (invoke) => {
    const duration = toValue(ms);
    const maxDuration = toValue(options.maxWait);
    if (timer)
      _clearTimeout(timer);
    if (duration <= 0 || maxDuration !== void 0 && maxDuration <= 0) {
      if (maxTimer) {
        _clearTimeout(maxTimer);
        maxTimer = null;
      }
      return Promise.resolve(invoke());
    }
    return new Promise((resolve, reject) => {
      lastRejector = options.rejectOnCancel ? reject : resolve;
      if (maxDuration && !maxTimer) {
        maxTimer = setTimeout(() => {
          if (timer)
            _clearTimeout(timer);
          maxTimer = null;
          resolve(invoke());
        }, maxDuration);
      }
      timer = setTimeout(() => {
        if (maxTimer)
          _clearTimeout(maxTimer);
        maxTimer = null;
        resolve(invoke());
      }, duration);
    });
  };
  return filter;
}
function throttleFilter(...args) {
  let lastExec = 0;
  let timer;
  let isLeading = true;
  let lastRejector = noop;
  let lastValue;
  let ms;
  let trailing;
  let leading;
  let rejectOnCancel;
  if (!isRef(args[0]) && typeof args[0] === "object")
    ({ delay: ms, trailing = true, leading = true, rejectOnCancel = false } = args[0]);
  else
    [ms, trailing = true, leading = true, rejectOnCancel = false] = args;
  const clear = () => {
    if (timer) {
      clearTimeout(timer);
      timer = void 0;
      lastRejector();
      lastRejector = noop;
    }
  };
  const filter = (_invoke) => {
    const duration = toValue(ms);
    const elapsed = Date.now() - lastExec;
    const invoke = () => {
      return lastValue = _invoke();
    };
    clear();
    if (duration <= 0) {
      lastExec = Date.now();
      return invoke();
    }
    if (elapsed > duration && (leading || !isLeading)) {
      lastExec = Date.now();
      invoke();
    } else if (trailing) {
      lastValue = new Promise((resolve, reject) => {
        lastRejector = rejectOnCancel ? reject : resolve;
        timer = setTimeout(() => {
          lastExec = Date.now();
          isLeading = true;
          resolve(invoke());
          clear();
        }, Math.max(0, duration - elapsed));
      });
    }
    if (!leading && !timer)
      timer = setTimeout(() => isLeading = true, duration);
    isLeading = false;
    return lastValue;
  };
  return filter;
}
function pausableFilter(extendFilter = bypassFilter) {
  const isActive = ref(true);
  function pause() {
    isActive.value = false;
  }
  function resume() {
    isActive.value = true;
  }
  const eventFilter = (...args) => {
    if (isActive.value)
      extendFilter(...args);
  };
  return { isActive: readonly(isActive), pause, resume, eventFilter };
}
function getLifeCycleTarget(target) {
  return getCurrentInstance();
}
function toRef(...args) {
  if (args.length !== 1)
    return toRef$1(...args);
  const r2 = args[0];
  return typeof r2 === "function" ? readonly(customRef(() => ({ get: r2, set: noop }))) : ref(r2);
}
function useDebounceFn(fn, ms = 200, options = {}) {
  return createFilterWrapper(
    debounceFilter(ms, options),
    fn
  );
}
function useThrottleFn(fn, ms = 200, trailing = false, leading = true, rejectOnCancel = false) {
  return createFilterWrapper(
    throttleFilter(ms, trailing, leading, rejectOnCancel),
    fn
  );
}
function watchWithFilter(source, cb, options = {}) {
  const {
    eventFilter = bypassFilter,
    ...watchOptions
  } = options;
  return watch(
    source,
    createFilterWrapper(
      eventFilter,
      cb
    ),
    watchOptions
  );
}
function watchPausable(source, cb, options = {}) {
  const {
    eventFilter: filter,
    ...watchOptions
  } = options;
  const { eventFilter, pause, resume, isActive } = pausableFilter(filter);
  const stop = watchWithFilter(
    source,
    cb,
    {
      ...watchOptions,
      eventFilter
    }
  );
  return { stop, pause, resume, isActive };
}
function tryOnMounted(fn, sync = true, target) {
  const instance = getLifeCycleTarget();
  if (instance)
    onMounted(fn, target);
  else if (sync)
    fn();
  else
    nextTick(fn);
}
function tryOnUnmounted(fn, target) {
  const instance = getLifeCycleTarget();
  if (instance)
    onUnmounted(fn, target);
}
function useIntervalFn(cb, interval = 1e3, options = {}) {
  const {
    immediate = true,
    immediateCallback = false
  } = options;
  let timer = null;
  const isActive = ref(false);
  function clean() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  }
  function pause() {
    isActive.value = false;
    clean();
  }
  function resume() {
    const intervalValue = toValue(interval);
    if (intervalValue <= 0)
      return;
    isActive.value = true;
    if (immediateCallback)
      cb();
    clean();
    timer = setInterval(cb, intervalValue);
  }
  if (immediate && isClient)
    resume();
  if (isRef(interval) || typeof interval === "function") {
    const stopWatch = watch(interval, () => {
      if (isActive.value && isClient)
        resume();
    });
    tryOnScopeDispose(stopWatch);
  }
  tryOnScopeDispose(pause);
  return {
    isActive,
    pause,
    resume
  };
}
function useToggle(initialValue = false, options = {}) {
  const {
    truthyValue = true,
    falsyValue = false
  } = options;
  const valueIsRef = isRef(initialValue);
  const _value = ref(initialValue);
  function toggle(value) {
    if (arguments.length) {
      _value.value = value;
      return _value.value;
    } else {
      const truthy = toValue(truthyValue);
      _value.value = _value.value === truthy ? toValue(falsyValue) : truthy;
      return _value.value;
    }
  }
  if (valueIsRef)
    return toggle;
  else
    return [_value, toggle];
}
function unrefElement(elRef) {
  var _a2;
  const plain = toValue(elRef);
  return (_a2 = plain == null ? void 0 : plain.$el) != null ? _a2 : plain;
}
const defaultWindow = isClient ? window : void 0;
const defaultDocument = isClient ? window.document : void 0;
function useEventListener(...args) {
  let target;
  let events;
  let listeners;
  let options;
  if (typeof args[0] === "string" || Array.isArray(args[0])) {
    [events, listeners, options] = args;
    target = defaultWindow;
  } else {
    [target, events, listeners, options] = args;
  }
  if (!target)
    return noop;
  if (!Array.isArray(events))
    events = [events];
  if (!Array.isArray(listeners))
    listeners = [listeners];
  const cleanups = [];
  const cleanup = () => {
    cleanups.forEach((fn) => fn());
    cleanups.length = 0;
  };
  const register = (el, event, listener, options2) => {
    el.addEventListener(event, listener, options2);
    return () => el.removeEventListener(event, listener, options2);
  };
  const stopWatch = watch(
    () => [unrefElement(target), toValue(options)],
    ([el, options2]) => {
      cleanup();
      if (!el)
        return;
      const optionsClone = isObject(options2) ? { ...options2 } : options2;
      cleanups.push(
        ...events.flatMap((event) => {
          return listeners.map((listener) => register(el, event, listener, optionsClone));
        })
      );
    },
    { immediate: true, flush: "post" }
  );
  const stop = () => {
    stopWatch();
    cleanup();
  };
  tryOnScopeDispose(stop);
  return stop;
}
let _iOSWorkaround = false;
function onClickOutside(target, handler, options = {}) {
  const { window: window2 = defaultWindow, ignore = [], capture = true, detectIframe = false } = options;
  if (!window2)
    return noop;
  if (isIOS && !_iOSWorkaround) {
    _iOSWorkaround = true;
    Array.from(window2.document.body.children).forEach((el) => el.addEventListener("click", noop));
    window2.document.documentElement.addEventListener("click", noop);
  }
  let shouldListen = true;
  const shouldIgnore = (event) => {
    return ignore.some((target2) => {
      if (typeof target2 === "string") {
        return Array.from(window2.document.querySelectorAll(target2)).some((el) => el === event.target || event.composedPath().includes(el));
      } else {
        const el = unrefElement(target2);
        return el && (event.target === el || event.composedPath().includes(el));
      }
    });
  };
  const listener = (event) => {
    const el = unrefElement(target);
    if (!el || el === event.target || event.composedPath().includes(el))
      return;
    if (event.detail === 0)
      shouldListen = !shouldIgnore(event);
    if (!shouldListen) {
      shouldListen = true;
      return;
    }
    handler(event);
  };
  const cleanup = [
    useEventListener(window2, "click", listener, { passive: true, capture }),
    useEventListener(window2, "pointerdown", (e2) => {
      const el = unrefElement(target);
      shouldListen = !shouldIgnore(e2) && !!(el && !e2.composedPath().includes(el));
    }, { passive: true }),
    detectIframe && useEventListener(window2, "blur", (event) => {
      setTimeout(() => {
        var _a2;
        const el = unrefElement(target);
        if (((_a2 = window2.document.activeElement) == null ? void 0 : _a2.tagName) === "IFRAME" && !(el == null ? void 0 : el.contains(window2.document.activeElement))) {
          handler(event);
        }
      }, 0);
    })
  ].filter(Boolean);
  const stop = () => cleanup.forEach((fn) => fn());
  return stop;
}
function useMounted() {
  const isMounted = ref(false);
  const instance = getCurrentInstance();
  if (instance) {
    onMounted(() => {
      isMounted.value = true;
    }, instance);
  }
  return isMounted;
}
function useSupported(callback) {
  const isMounted = useMounted();
  return computed(() => {
    isMounted.value;
    return Boolean(callback());
  });
}
function useMutationObserver(target, callback, options = {}) {
  const { window: window2 = defaultWindow, ...mutationOptions } = options;
  let observer;
  const isSupported = useSupported(() => window2 && "MutationObserver" in window2);
  const cleanup = () => {
    if (observer) {
      observer.disconnect();
      observer = void 0;
    }
  };
  const targets = computed(() => {
    const value = toValue(target);
    const items = (Array.isArray(value) ? value : [value]).map(unrefElement).filter(notNullish);
    return new Set(items);
  });
  const stopWatch = watch(
    () => targets.value,
    (targets2) => {
      cleanup();
      if (isSupported.value && targets2.size) {
        observer = new MutationObserver(callback);
        targets2.forEach((el) => observer.observe(el, mutationOptions));
      }
    },
    { immediate: true, flush: "post" }
  );
  const takeRecords = () => {
    return observer == null ? void 0 : observer.takeRecords();
  };
  const stop = () => {
    cleanup();
    stopWatch();
  };
  tryOnScopeDispose(stop);
  return {
    isSupported,
    stop,
    takeRecords
  };
}
function useRafFn(fn, options = {}) {
  const {
    immediate = true,
    fpsLimit = void 0,
    window: window2 = defaultWindow
  } = options;
  const isActive = ref(false);
  const intervalLimit = fpsLimit ? 1e3 / fpsLimit : null;
  let previousFrameTimestamp = 0;
  let rafId = null;
  function loop(timestamp) {
    if (!isActive.value || !window2)
      return;
    if (!previousFrameTimestamp)
      previousFrameTimestamp = timestamp;
    const delta = timestamp - previousFrameTimestamp;
    if (intervalLimit && delta < intervalLimit) {
      rafId = window2.requestAnimationFrame(loop);
      return;
    }
    previousFrameTimestamp = timestamp;
    fn({ delta, timestamp });
    rafId = window2.requestAnimationFrame(loop);
  }
  function resume() {
    if (!isActive.value && window2) {
      isActive.value = true;
      previousFrameTimestamp = 0;
      rafId = window2.requestAnimationFrame(loop);
    }
  }
  function pause() {
    isActive.value = false;
    if (rafId != null && window2) {
      window2.cancelAnimationFrame(rafId);
      rafId = null;
    }
  }
  if (immediate)
    resume();
  tryOnScopeDispose(pause);
  return {
    isActive: readonly(isActive),
    pause,
    resume
  };
}
function useMediaQuery(query, options = {}) {
  const { window: window2 = defaultWindow } = options;
  const isSupported = useSupported(() => window2 && "matchMedia" in window2 && typeof window2.matchMedia === "function");
  let mediaQuery;
  const matches = ref(false);
  const handler = (event) => {
    matches.value = event.matches;
  };
  const cleanup = () => {
    if (!mediaQuery)
      return;
    if ("removeEventListener" in mediaQuery)
      mediaQuery.removeEventListener("change", handler);
    else
      mediaQuery.removeListener(handler);
  };
  const stopWatch = watchEffect(() => {
    if (!isSupported.value)
      return;
    cleanup();
    mediaQuery = window2.matchMedia(toValue(query));
    if ("addEventListener" in mediaQuery)
      mediaQuery.addEventListener("change", handler);
    else
      mediaQuery.addListener(handler);
    matches.value = mediaQuery.matches;
  });
  tryOnScopeDispose(() => {
    stopWatch();
    cleanup();
    mediaQuery = void 0;
  });
  return matches;
}
const _global = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
const globalKey = "__vueuse_ssr_handlers__";
const handlers = /* @__PURE__ */ getHandlers();
function getHandlers() {
  if (!(globalKey in _global))
    _global[globalKey] = _global[globalKey] || {};
  return _global[globalKey];
}
function getSSRHandler(key, fallback) {
  return handlers[key] || fallback;
}
function guessSerializerType(rawInit) {
  return rawInit == null ? "any" : rawInit instanceof Set ? "set" : rawInit instanceof Map ? "map" : rawInit instanceof Date ? "date" : typeof rawInit === "boolean" ? "boolean" : typeof rawInit === "string" ? "string" : typeof rawInit === "object" ? "object" : !Number.isNaN(rawInit) ? "number" : "any";
}
const StorageSerializers = {
  boolean: {
    read: (v2) => v2 === "true",
    write: (v2) => String(v2)
  },
  object: {
    read: (v2) => JSON.parse(v2),
    write: (v2) => JSON.stringify(v2)
  },
  number: {
    read: (v2) => Number.parseFloat(v2),
    write: (v2) => String(v2)
  },
  any: {
    read: (v2) => v2,
    write: (v2) => String(v2)
  },
  string: {
    read: (v2) => v2,
    write: (v2) => String(v2)
  },
  map: {
    read: (v2) => new Map(JSON.parse(v2)),
    write: (v2) => JSON.stringify(Array.from(v2.entries()))
  },
  set: {
    read: (v2) => new Set(JSON.parse(v2)),
    write: (v2) => JSON.stringify(Array.from(v2))
  },
  date: {
    read: (v2) => new Date(v2),
    write: (v2) => v2.toISOString()
  }
};
const customStorageEventName = "vueuse-storage";
function useStorage(key, defaults, storage, options = {}) {
  var _a2;
  const {
    flush = "pre",
    deep = true,
    listenToStorageChanges = true,
    writeDefaults = true,
    mergeDefaults = false,
    shallow,
    window: window2 = defaultWindow,
    eventFilter,
    onError = (e2) => {
      console.error(e2);
    },
    initOnMounted
  } = options;
  const data = (shallow ? shallowRef : ref)(typeof defaults === "function" ? defaults() : defaults);
  if (!storage) {
    try {
      storage = getSSRHandler("getDefaultStorage", () => {
        var _a22;
        return (_a22 = defaultWindow) == null ? void 0 : _a22.localStorage;
      })();
    } catch (e2) {
      onError(e2);
    }
  }
  if (!storage)
    return data;
  const rawInit = toValue(defaults);
  const type = guessSerializerType(rawInit);
  const serializer = (_a2 = options.serializer) != null ? _a2 : StorageSerializers[type];
  const { pause: pauseWatch, resume: resumeWatch } = watchPausable(
    data,
    () => write(data.value),
    { flush, deep, eventFilter }
  );
  if (window2 && listenToStorageChanges) {
    tryOnMounted(() => {
      useEventListener(window2, "storage", update);
      useEventListener(window2, customStorageEventName, updateFromCustomEvent);
      if (initOnMounted)
        update();
    });
  }
  if (!initOnMounted)
    update();
  function dispatchWriteEvent(oldValue, newValue) {
    if (window2) {
      window2.dispatchEvent(new CustomEvent(customStorageEventName, {
        detail: {
          key,
          oldValue,
          newValue,
          storageArea: storage
        }
      }));
    }
  }
  function write(v2) {
    try {
      const oldValue = storage.getItem(key);
      if (v2 == null) {
        dispatchWriteEvent(oldValue, null);
        storage.removeItem(key);
      } else {
        const serialized = serializer.write(v2);
        if (oldValue !== serialized) {
          storage.setItem(key, serialized);
          dispatchWriteEvent(oldValue, serialized);
        }
      }
    } catch (e2) {
      onError(e2);
    }
  }
  function read(event) {
    const rawValue = event ? event.newValue : storage.getItem(key);
    if (rawValue == null) {
      if (writeDefaults && rawInit != null)
        storage.setItem(key, serializer.write(rawInit));
      return rawInit;
    } else if (!event && mergeDefaults) {
      const value = serializer.read(rawValue);
      if (typeof mergeDefaults === "function")
        return mergeDefaults(value, rawInit);
      else if (type === "object" && !Array.isArray(value))
        return { ...rawInit, ...value };
      return value;
    } else if (typeof rawValue !== "string") {
      return rawValue;
    } else {
      return serializer.read(rawValue);
    }
  }
  function update(event) {
    if (event && event.storageArea !== storage)
      return;
    if (event && event.key == null) {
      data.value = rawInit;
      return;
    }
    if (event && event.key !== key)
      return;
    pauseWatch();
    try {
      if ((event == null ? void 0 : event.newValue) !== serializer.write(data.value))
        data.value = read(event);
    } catch (e2) {
      onError(e2);
    } finally {
      if (event)
        nextTick(resumeWatch);
      else
        resumeWatch();
    }
  }
  function updateFromCustomEvent(event) {
    update(event.detail);
  }
  return data;
}
function usePreferredDark(options) {
  return useMediaQuery("(prefers-color-scheme: dark)", options);
}
function useResizeObserver(target, callback, options = {}) {
  const { window: window2 = defaultWindow, ...observerOptions } = options;
  let observer;
  const isSupported = useSupported(() => window2 && "ResizeObserver" in window2);
  const cleanup = () => {
    if (observer) {
      observer.disconnect();
      observer = void 0;
    }
  };
  const targets = computed(() => Array.isArray(target) ? target.map((el) => unrefElement(el)) : [unrefElement(target)]);
  const stopWatch = watch(
    targets,
    (els) => {
      cleanup();
      if (isSupported.value && window2) {
        observer = new ResizeObserver(callback);
        for (const _el of els)
          _el && observer.observe(_el, observerOptions);
      }
    },
    { immediate: true, flush: "post" }
  );
  const stop = () => {
    cleanup();
    stopWatch();
  };
  tryOnScopeDispose(stop);
  return {
    isSupported,
    stop
  };
}
function useElementSize(target, initialSize = { width: 0, height: 0 }, options = {}) {
  const { window: window2 = defaultWindow, box = "content-box" } = options;
  const isSVG = computed(() => {
    var _a2, _b2;
    return (_b2 = (_a2 = unrefElement(target)) == null ? void 0 : _a2.namespaceURI) == null ? void 0 : _b2.includes("svg");
  });
  const width = ref(initialSize.width);
  const height = ref(initialSize.height);
  const { stop: stop1 } = useResizeObserver(
    target,
    ([entry]) => {
      const boxSize = box === "border-box" ? entry.borderBoxSize : box === "content-box" ? entry.contentBoxSize : entry.devicePixelContentBoxSize;
      if (window2 && isSVG.value) {
        const $elem = unrefElement(target);
        if ($elem) {
          const rect = $elem.getBoundingClientRect();
          width.value = rect.width;
          height.value = rect.height;
        }
      } else {
        if (boxSize) {
          const formatBoxSize = Array.isArray(boxSize) ? boxSize : [boxSize];
          width.value = formatBoxSize.reduce((acc, { inlineSize }) => acc + inlineSize, 0);
          height.value = formatBoxSize.reduce((acc, { blockSize }) => acc + blockSize, 0);
        } else {
          width.value = entry.contentRect.width;
          height.value = entry.contentRect.height;
        }
      }
    },
    options
  );
  tryOnMounted(() => {
    const ele = unrefElement(target);
    if (ele) {
      width.value = "offsetWidth" in ele ? ele.offsetWidth : initialSize.width;
      height.value = "offsetHeight" in ele ? ele.offsetHeight : initialSize.height;
    }
  });
  const stop2 = watch(
    () => unrefElement(target),
    (ele) => {
      width.value = ele ? initialSize.width : 0;
      height.value = ele ? initialSize.height : 0;
    }
  );
  function stop() {
    stop1();
    stop2();
  }
  return {
    width,
    height,
    stop
  };
}
const eventHandlers = [
  "fullscreenchange",
  "webkitfullscreenchange",
  "webkitendfullscreen",
  "mozfullscreenchange",
  "MSFullscreenChange"
];
function useFullscreen(target, options = {}) {
  const {
    document: document2 = defaultDocument,
    autoExit = false
  } = options;
  const targetRef = computed(() => {
    var _a2;
    return (_a2 = unrefElement(target)) != null ? _a2 : document2 == null ? void 0 : document2.querySelector("html");
  });
  const isFullscreen = ref(false);
  const requestMethod = computed(() => {
    return [
      "requestFullscreen",
      "webkitRequestFullscreen",
      "webkitEnterFullscreen",
      "webkitEnterFullScreen",
      "webkitRequestFullScreen",
      "mozRequestFullScreen",
      "msRequestFullscreen"
    ].find((m2) => document2 && m2 in document2 || targetRef.value && m2 in targetRef.value);
  });
  const exitMethod = computed(() => {
    return [
      "exitFullscreen",
      "webkitExitFullscreen",
      "webkitExitFullScreen",
      "webkitCancelFullScreen",
      "mozCancelFullScreen",
      "msExitFullscreen"
    ].find((m2) => document2 && m2 in document2 || targetRef.value && m2 in targetRef.value);
  });
  const fullscreenEnabled = computed(() => {
    return [
      "fullScreen",
      "webkitIsFullScreen",
      "webkitDisplayingFullscreen",
      "mozFullScreen",
      "msFullscreenElement"
    ].find((m2) => document2 && m2 in document2 || targetRef.value && m2 in targetRef.value);
  });
  const fullscreenElementMethod = [
    "fullscreenElement",
    "webkitFullscreenElement",
    "mozFullScreenElement",
    "msFullscreenElement"
  ].find((m2) => document2 && m2 in document2);
  const isSupported = useSupported(() => targetRef.value && document2 && requestMethod.value !== void 0 && exitMethod.value !== void 0 && fullscreenEnabled.value !== void 0);
  const isCurrentElementFullScreen = () => {
    if (fullscreenElementMethod)
      return (document2 == null ? void 0 : document2[fullscreenElementMethod]) === targetRef.value;
    return false;
  };
  const isElementFullScreen = () => {
    if (fullscreenEnabled.value) {
      if (document2 && document2[fullscreenEnabled.value] != null) {
        return document2[fullscreenEnabled.value];
      } else {
        const target2 = targetRef.value;
        if ((target2 == null ? void 0 : target2[fullscreenEnabled.value]) != null) {
          return Boolean(target2[fullscreenEnabled.value]);
        }
      }
    }
    return false;
  };
  async function exit() {
    if (!isSupported.value || !isFullscreen.value)
      return;
    if (exitMethod.value) {
      if ((document2 == null ? void 0 : document2[exitMethod.value]) != null) {
        await document2[exitMethod.value]();
      } else {
        const target2 = targetRef.value;
        if ((target2 == null ? void 0 : target2[exitMethod.value]) != null)
          await target2[exitMethod.value]();
      }
    }
    isFullscreen.value = false;
  }
  async function enter() {
    if (!isSupported.value || isFullscreen.value)
      return;
    if (isElementFullScreen())
      await exit();
    const target2 = targetRef.value;
    if (requestMethod.value && (target2 == null ? void 0 : target2[requestMethod.value]) != null) {
      await target2[requestMethod.value]();
      isFullscreen.value = true;
    }
  }
  async function toggle() {
    await (isFullscreen.value ? exit() : enter());
  }
  const handlerCallback = () => {
    const isElementFullScreenValue = isElementFullScreen();
    if (!isElementFullScreenValue || isElementFullScreenValue && isCurrentElementFullScreen())
      isFullscreen.value = isElementFullScreenValue;
  };
  useEventListener(document2, eventHandlers, handlerCallback, false);
  useEventListener(() => unrefElement(targetRef), eventHandlers, handlerCallback, false);
  if (autoExit)
    tryOnScopeDispose(exit);
  return {
    isSupported,
    isFullscreen,
    enter,
    exit,
    toggle
  };
}
function resolveElement(el) {
  if (typeof Window !== "undefined" && el instanceof Window)
    return el.document.documentElement;
  if (typeof Document !== "undefined" && el instanceof Document)
    return el.documentElement;
  return el;
}
function useNow(options = {}) {
  const {
    controls: exposeControls = false,
    interval = "requestAnimationFrame"
  } = options;
  const now = ref(/* @__PURE__ */ new Date());
  const update = () => now.value = /* @__PURE__ */ new Date();
  const controls = interval === "requestAnimationFrame" ? useRafFn(update, { immediate: true }) : useIntervalFn(update, interval, { immediate: true });
  if (exposeControls) {
    return {
      now,
      ...controls
    };
  } else {
    return now;
  }
}
function useScriptTag(src, onLoaded = noop, options = {}) {
  const {
    immediate = true,
    manual = false,
    type = "text/javascript",
    async = true,
    crossOrigin,
    referrerPolicy,
    noModule,
    defer,
    document: document2 = defaultDocument,
    attrs = {}
  } = options;
  const scriptTag = ref(null);
  let _promise = null;
  const loadScript = (waitForScriptLoad) => new Promise((resolve, reject) => {
    const resolveWithElement = (el2) => {
      scriptTag.value = el2;
      resolve(el2);
      return el2;
    };
    if (!document2) {
      resolve(false);
      return;
    }
    let shouldAppend = false;
    let el = document2.querySelector(`script[src="${toValue(src)}"]`);
    if (!el) {
      el = document2.createElement("script");
      el.type = type;
      el.async = async;
      el.src = toValue(src);
      if (defer)
        el.defer = defer;
      if (crossOrigin)
        el.crossOrigin = crossOrigin;
      if (noModule)
        el.noModule = noModule;
      if (referrerPolicy)
        el.referrerPolicy = referrerPolicy;
      Object.entries(attrs).forEach(([name, value]) => el == null ? void 0 : el.setAttribute(name, value));
      shouldAppend = true;
    } else if (el.hasAttribute("data-loaded")) {
      resolveWithElement(el);
    }
    el.addEventListener("error", (event) => reject(event));
    el.addEventListener("abort", (event) => reject(event));
    el.addEventListener("load", () => {
      el.setAttribute("data-loaded", "true");
      onLoaded(el);
      resolveWithElement(el);
    });
    if (shouldAppend)
      el = document2.head.appendChild(el);
    if (!waitForScriptLoad)
      resolveWithElement(el);
  });
  const load = (waitForScriptLoad = true) => {
    if (!_promise)
      _promise = loadScript(waitForScriptLoad);
    return _promise;
  };
  const unload = () => {
    if (!document2)
      return;
    _promise = null;
    if (scriptTag.value)
      scriptTag.value = null;
    const el = document2.querySelector(`script[src="${toValue(src)}"]`);
    if (el)
      document2.head.removeChild(el);
  };
  if (immediate && !manual)
    tryOnMounted(load);
  if (!manual)
    tryOnUnmounted(unload);
  return { scriptTag, load, unload };
}
function checkOverflowScroll(ele) {
  const style = window.getComputedStyle(ele);
  if (style.overflowX === "scroll" || style.overflowY === "scroll" || style.overflowX === "auto" && ele.clientWidth < ele.scrollWidth || style.overflowY === "auto" && ele.clientHeight < ele.scrollHeight) {
    return true;
  } else {
    const parent = ele.parentNode;
    if (!parent || parent.tagName === "BODY")
      return false;
    return checkOverflowScroll(parent);
  }
}
function preventDefault(rawEvent) {
  const e2 = rawEvent || window.event;
  const _target = e2.target;
  if (checkOverflowScroll(_target))
    return false;
  if (e2.touches.length > 1)
    return true;
  if (e2.preventDefault)
    e2.preventDefault();
  return false;
}
const elInitialOverflow = /* @__PURE__ */ new WeakMap();
function useScrollLock(element, initialState = false) {
  const isLocked = ref(initialState);
  let stopTouchMoveListener = null;
  let initialOverflow = "";
  watch(toRef(element), (el) => {
    const target = resolveElement(toValue(el));
    if (target) {
      const ele = target;
      if (!elInitialOverflow.get(ele))
        elInitialOverflow.set(ele, ele.style.overflow);
      if (ele.style.overflow !== "hidden")
        initialOverflow = ele.style.overflow;
      if (ele.style.overflow === "hidden")
        return isLocked.value = true;
      if (isLocked.value)
        return ele.style.overflow = "hidden";
    }
  }, {
    immediate: true
  });
  const lock = () => {
    const el = resolveElement(toValue(element));
    if (!el || isLocked.value)
      return;
    if (isIOS) {
      stopTouchMoveListener = useEventListener(
        el,
        "touchmove",
        (e2) => {
          preventDefault(e2);
        },
        { passive: false }
      );
    }
    el.style.overflow = "hidden";
    isLocked.value = true;
  };
  const unlock = () => {
    const el = resolveElement(toValue(element));
    if (!el || !isLocked.value)
      return;
    isIOS && (stopTouchMoveListener == null ? void 0 : stopTouchMoveListener());
    el.style.overflow = initialOverflow;
    elInitialOverflow.delete(el);
    isLocked.value = false;
  };
  tryOnScopeDispose(unlock);
  return computed({
    get() {
      return isLocked.value;
    },
    set(v2) {
      if (v2)
        lock();
      else unlock();
    }
  });
}
function useSessionStorage(key, initialValue, options = {}) {
  const { window: window2 = defaultWindow } = options;
  return useStorage(key, initialValue, window2 == null ? void 0 : window2.sessionStorage, options);
}
let _id = 0;
function useStyleTag(css2, options = {}) {
  const isLoaded = ref(false);
  const {
    document: document2 = defaultDocument,
    immediate = true,
    manual = false,
    id = `vueuse_styletag_${++_id}`
  } = options;
  const cssRef = ref(css2);
  let stop = () => {
  };
  const load = () => {
    if (!document2)
      return;
    const el = document2.getElementById(id) || document2.createElement("style");
    if (!el.isConnected) {
      el.id = id;
      if (options.media)
        el.media = options.media;
      document2.head.appendChild(el);
    }
    if (isLoaded.value)
      return;
    stop = watch(
      cssRef,
      (value) => {
        el.textContent = value;
      },
      { immediate: true }
    );
    isLoaded.value = true;
  };
  const unload = () => {
    if (!document2 || !isLoaded.value)
      return;
    stop();
    document2.head.removeChild(document2.getElementById(id));
    isLoaded.value = false;
  };
  if (immediate && !manual)
    tryOnMounted(load);
  if (!manual)
    tryOnScopeDispose(unload);
  return {
    id,
    css: cssRef,
    unload,
    load,
    isLoaded: readonly(isLoaded)
  };
}
function useWindowScroll(options = {}) {
  const { window: window2 = defaultWindow, behavior = "auto" } = options;
  if (!window2) {
    return {
      x: ref(0),
      y: ref(0)
    };
  }
  const internalX = ref(window2.scrollX);
  const internalY = ref(window2.scrollY);
  const x2 = computed({
    get() {
      return internalX.value;
    },
    set(x22) {
      scrollTo({ left: x22, behavior });
    }
  });
  const y2 = computed({
    get() {
      return internalY.value;
    },
    set(y22) {
      scrollTo({ top: y22, behavior });
    }
  });
  useEventListener(
    window2,
    "scroll",
    () => {
      internalX.value = window2.scrollX;
      internalY.value = window2.scrollY;
    },
    {
      capture: false,
      passive: true
    }
  );
  return { x: x2, y: y2 };
}
function useWindowSize$1(options = {}) {
  const {
    window: window2 = defaultWindow,
    initialWidth = Number.POSITIVE_INFINITY,
    initialHeight = Number.POSITIVE_INFINITY,
    listenOrientation = true,
    includeScrollbar = true
  } = options;
  const width = ref(initialWidth);
  const height = ref(initialHeight);
  const update = () => {
    if (window2) {
      if (includeScrollbar) {
        width.value = window2.innerWidth;
        height.value = window2.innerHeight;
      } else {
        width.value = window2.document.documentElement.clientWidth;
        height.value = window2.document.documentElement.clientHeight;
      }
    }
  };
  update();
  tryOnMounted(update);
  useEventListener("resize", update, { passive: true });
  if (listenOrientation) {
    const matches = useMediaQuery("(orientation: portrait)");
    watch(matches, () => update());
  }
  return { width, height };
}
var m$3 = defineComponent({ name: "FontIcon", props: { icon: { type: String, default: "" }, color: { type: String, default: "" }, size: { type: [String, Number], default: "" } }, setup(o2) {
  const s2 = computed(() => {
    const n2 = ["font-icon icon"], t2 = `${"fas fa-"}${o2.icon}`;
    return n2.push("fa-fw fa-sm"), n2.push(o2.icon.includes(" ") ? o2.icon : t2), n2;
  }), r2 = computed(() => {
    const n2 = {};
    return o2.color && (n2.color = o2.color), o2.size && (n2["font-size"] = Number.isNaN(Number(o2.size)) ? o2.size : `${o2.size}px`), keys(n2).length ? n2 : null;
  });
  return () => o2.icon ? h$1("span", { key: o2.icon, class: s2.value, style: r2.value, ...{} }) : null;
} });
const t$4 = ({ type: a2 = "info", text: l2 = "", vertical: e2, color: o2 }, { slots: r2 }) => {
  var _a2;
  return h$1("span", { class: ["vp-badge", a2, { diy: o2 }], style: { verticalAlign: e2 ?? false, backgroundColor: o2 ?? false } }, ((_a2 = r2.default) == null ? void 0 : _a2.call(r2)) ?? l2);
};
t$4.displayName = "Badge";
const e$5 = ({ title: i2, desc: d2 = "", logo: l2, background: t2, color: o2, link: s2 }) => {
  const c2 = [l2 ? h$1("img", { class: "vp-card-logo", src: withBase(l2), loading: "lazy", "no-view": "" }) : null, h$1("div", { class: "vp-card-content" }, [h$1("div", { class: "vp-card-title", innerHTML: i2 }), h$1("hr"), h$1("div", { class: "vp-card-desc", innerHTML: d2 })])], a2 = {};
  return t2 && (a2.background = t2), o2 && (a2.color = o2), s2 ? isLinkExternal(s2) ? h$1("a", { class: "vp-card", href: s2, target: "_blank", style: a2 }, c2) : h$1(RouteLink, { to: s2, class: "vp-card", style: a2 }, () => c2) : h$1("div", { class: "vp-card", style: a2 }, c2);
};
e$5.displayName = "VPCard";
const config$b = defineClientConfig({
  enhance: ({ app }) => {
    if (!hasGlobalComponent("FontIcon")) app.component("FontIcon", m$3);
    if (!hasGlobalComponent("Badge")) app.component("Badge", t$4);
    if (!hasGlobalComponent("VPCard")) app.component("VPCard", e$5);
  },
  setup: () => {
    useScriptTag(
      `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/brands.min.js`,
      () => {
      },
      { attrs: { "data-auto-replace-svg": "nest" } }
    );
    useScriptTag(
      `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/solid.min.js`,
      () => {
      },
      { attrs: { "data-auto-replace-svg": "nest" } }
    );
    useScriptTag(
      `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/fontawesome.min.js`,
      () => {
      },
      { attrs: { "data-auto-replace-svg": "nest" } }
    );
  },
  rootComponents: []
});
const clientConfig2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: config$b
}, Symbol.toStringTag, { value: "Module" }));
const config$a = defineClientConfig({
  setup() {
    return;
  }
});
const clientConfig3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: config$a
}, Symbol.toStringTag, { value: "Module" }));
let catalogGetter = (meta) => isString(meta.title) ? { title: meta.title } : null;
const catalogInfoSymbol = Symbol("");
const defineCatalogInfoGetter = (getter) => {
  catalogGetter = getter;
};
const useCatalogInfoGetter = () => inject(catalogInfoSymbol);
const injectCatalogInfoGetter = (app) => {
  app.provide(catalogInfoSymbol, catalogGetter);
};
var define_CATALOG_LOCALES_default = { "/zh/": { title: "目录", empty: "暂无目录" }, "/": { title: "Catalog", empty: "No catalog" } };
const Catalog = defineComponent({
  name: "Catalog",
  props: {
    /**
     * Catalog Base
     *
     * 目录的基础路径
     *
     * @default current route base
     */
    base: {
      type: String,
      default: ""
    },
    /**
     * Max level of catalog
     *
     * @description only 1,2,3 are supported
     *
     * Catalog 的最大层级
     *
     * @description 目前仅支持 1,2,3
     *
     * @default 3
     */
    level: {
      type: Number,
      default: 3
    },
    /**
     * Whether show index for catalog
     *
     * 目录是否显示索引
     */
    index: Boolean,
    /**
     * Whether hide `Category` title
     *
     * 是否隐藏 `目录` 标题
     *
     * @default false
     */
    hideHeading: Boolean
  },
  setup(props) {
    const catalogInfoGetter = useCatalogInfoGetter();
    const locale = useLocaleConfig(define_CATALOG_LOCALES_default);
    const page = usePageData();
    const routes2 = useRoutes();
    const siteData2 = useSiteData();
    const getCatalogData = () => entries(routes2.value).map(([path, { meta }]) => {
      const info = catalogInfoGetter(meta);
      if (!info)
        return null;
      const level = path.split("/").length;
      return {
        level: endsWith(path, "/") ? level - 2 : level - 1,
        base: path.replace(/\/[^/]+\/?$/, "/"),
        path,
        ...info
      };
    }).filter((item) => isPlainObject(item) && isString(item.title));
    const catalogInfo = shallowRef(getCatalogData());
    const catalogData = computed(() => {
      const base = props.base ? ensureLeadingSlash(ensureEndingSlash(props.base)) : page.value.path.replace(/\/[^/]+$/, "/");
      const baseDepth = base.split("/").length - 2;
      const result = [];
      catalogInfo.value.filter(({ level, path }) => {
        if (!startsWith(path, base) || path === base)
          return false;
        if (base === "/") {
          const otherLocales = keys(siteData2.value.locales).filter((item) => item !== "/");
          if (path === "/404.html" || otherLocales.some((localePath) => startsWith(path, localePath)))
            return false;
        }
        return (
          // level is less than or equal to max level
          level - baseDepth <= props.level
        );
      }).sort(({ title: titleA, level: levelA, order: orderA }, { title: titleB, level: levelB, order: orderB }) => {
        const level = levelA - levelB;
        if (level)
          return level;
        if (!isNumber(orderA)) {
          if (!isNumber(orderB))
            return titleA.localeCompare(titleB);
          return orderB;
        }
        if (!isNumber(orderB))
          return orderA;
        if (orderA > 0) {
          if (orderB > 0)
            return orderA - orderB;
          return -1;
        }
        if (orderB < 0)
          return orderA - orderB;
        return 1;
      }).forEach((info) => {
        var _a2;
        const { base: base2, level } = info;
        switch (level - baseDepth) {
          case 1: {
            result.push(info);
            break;
          }
          case 2: {
            const parent = result.find((item) => item.path === base2);
            if (parent)
              (parent.children ?? (parent.children = [])).push(info);
            break;
          }
          default: {
            const grandParent = result.find((item) => item.path === base2.replace(/\/[^/]+\/$/, "/"));
            if (grandParent) {
              const parent = (_a2 = grandParent.children) == null ? void 0 : _a2.find((item) => item.path === base2);
              if (parent)
                (parent.children ?? (parent.children = [])).push(info);
            }
          }
        }
      });
      return result;
    });
    return () => {
      const isDeep = catalogData.value.some((item) => item.children);
      return h$1("div", { class: ["vp-catalog-wrapper", { index: props.index }] }, [
        props.hideHeading ? null : h$1("h2", { class: "vp-catalog-main-title" }, locale.value.title),
        catalogData.value.length ? h$1(props.index ? "ol" : "ul", { class: ["vp-catalogs", { deep: isDeep }] }, catalogData.value.map(({ children = [], title, path, content }) => {
          const childLink = h$1(RouteLink, { class: "vp-catalog-title", to: path }, () => content ? h$1(content) : title);
          return h$1("li", { class: "vp-catalog" }, isDeep ? [
            h$1("h3", {
              id: title,
              class: [
                "vp-catalog-child-title",
                { "has-children": children.length }
              ]
            }, [
              h$1("a", {
                "href": `#${title}`,
                "class": "vp-catalog-header-anchor",
                "aria-hidden": true
              }, "#"),
              childLink
            ]),
            children.length ? h$1(props.index ? "ol" : "ul", { class: "vp-child-catalogs" }, children.map(({ children: children2 = [], content: content2, path: path2, title: title2 }) => h$1("li", { class: "vp-child-catalog" }, [
              h$1("div", {
                class: [
                  "vp-catalog-sub-title",
                  {
                    "has-children": children2.length
                  }
                ]
              }, [
                h$1("a", {
                  href: `#${title2}`,
                  class: "vp-catalog-header-anchor"
                }, "#"),
                h$1(RouteLink, {
                  class: "vp-catalog-title",
                  to: path2
                }, () => content2 ? h$1(content2) : title2)
              ]),
              children2.length ? h$1(props.index ? "ol" : "div", {
                class: props.index ? "vp-sub-catalogs" : "vp-sub-catalogs-wrapper"
              }, children2.map(({ content: content3, path: path3, title: title3 }) => props.index ? h$1("li", {
                class: "vp-sub-catalog"
              }, h$1(RouteLink, { to: path3 }, () => content3 ? h$1(content3) : title3)) : h$1(RouteLink, {
                class: "vp-sub-catalog-link",
                to: path3
              }, () => content3 ? h$1(content3) : title3))) : null
            ]))) : null
          ] : h$1("div", { class: "vp-catalog-child-title" }, childLink));
        })) : h$1("p", { class: "vp-empty-catalog" }, locale.value.empty)
      ]);
    };
  }
});
const config$9 = defineClientConfig({
  enhance: ({ app }) => {
    injectCatalogInfoGetter(app);
    if (!hasGlobalComponent("Catalog", app))
      app.component("Catalog", Catalog);
  }
});
const clientConfig4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: config$9
}, Symbol.toStringTag, { value: "Module" }));
var define_BACK_TO_TOP_LOCALES_default = { "/zh/": { backToTop: "返回顶部" }, "/": { backToTop: "Back to top" } };
const BackToTop = defineComponent({
  name: "BackToTop",
  setup() {
    const pageFrontmatter = usePageFrontmatter();
    const locale = useLocaleConfig(define_BACK_TO_TOP_LOCALES_default);
    const body = shallowRef();
    const { height: bodyHeight } = useElementSize(body);
    const { height: windowHeight } = useWindowSize$1();
    const { y: y2 } = useWindowScroll();
    const show = computed(() => pageFrontmatter.value.backToTop !== false && y2.value > 100);
    const progress = computed(() => y2.value / (bodyHeight.value - windowHeight.value) * 100);
    onMounted(() => {
      body.value = document.body;
    });
    return () => h$1(Transition, { name: "back-to-top" }, () => show.value ? h$1("button", {
      "type": "button",
      "class": "vp-back-to-top-button",
      "aria-label": locale.value.backToTop,
      "onClick": () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, [
      h$1("span", {
        "class": "vp-scroll-progress",
        "role": "progressbar",
        "aria-labelledby": "loadinglabel",
        "aria-valuenow": progress.value
      }, h$1("svg", h$1("circle", {
        "cx": "26",
        "cy": "26",
        "r": "24",
        "fill": "none",
        "stroke": "currentColor",
        "stroke-width": "4",
        "stroke-dasharray": `${Math.PI * progress.value * 0.48} ${Math.PI * (100 - progress.value) * 0.48}`
      }))),
      h$1("div", { class: "back-to-top-icon" })
    ]) : null);
  }
});
const config$8 = defineClientConfig({
  rootComponents: [BackToTop]
});
const clientConfig5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: config$8
}, Symbol.toStringTag, { value: "Module" }));
/**
 * NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT
 */
const nprogress = {
  settings: {
    minimum: 0.08,
    easing: "ease",
    speed: 200,
    trickle: true,
    trickleRate: 0.02,
    trickleSpeed: 800,
    barSelector: '[role="bar"]',
    parent: "body",
    template: '<div class="bar" role="bar"></div>'
  },
  status: null,
  set: (n2) => {
    const started = nprogress.isStarted();
    n2 = clamp(n2, nprogress.settings.minimum, 1);
    nprogress.status = n2 === 1 ? null : n2;
    const progress = nprogress.render(!started);
    const bar = progress.querySelector(nprogress.settings.barSelector);
    const speed = nprogress.settings.speed;
    const ease = nprogress.settings.easing;
    progress.offsetWidth;
    queue((next) => {
      css(bar, {
        transform: "translate3d(" + toBarPerc(n2) + "%,0,0)",
        transition: "all " + speed + "ms " + ease
      });
      if (n2 === 1) {
        css(progress, {
          transition: "none",
          opacity: "1"
        });
        progress.offsetWidth;
        setTimeout(() => {
          css(progress, {
            transition: "all " + speed + "ms linear",
            opacity: "0"
          });
          setTimeout(() => {
            nprogress.remove();
            next();
          }, speed);
        }, speed);
      } else {
        setTimeout(() => next(), speed);
      }
    });
    return nprogress;
  },
  isStarted: () => typeof nprogress.status === "number",
  start: () => {
    if (!nprogress.status)
      nprogress.set(0);
    const work = () => {
      setTimeout(() => {
        if (!nprogress.status)
          return;
        nprogress.trickle();
        work();
      }, nprogress.settings.trickleSpeed);
    };
    if (nprogress.settings.trickle)
      work();
    return nprogress;
  },
  done: (force) => {
    if (!force && !nprogress.status)
      return nprogress;
    return nprogress.inc(0.3 + 0.5 * Math.random()).set(1);
  },
  inc: (amount) => {
    let n2 = nprogress.status;
    if (!n2) {
      return nprogress.start();
    }
    if (typeof amount !== "number") {
      amount = (1 - n2) * clamp(Math.random() * n2, 0.1, 0.95);
    }
    n2 = clamp(n2 + amount, 0, 0.994);
    return nprogress.set(n2);
  },
  trickle: () => nprogress.inc(Math.random() * nprogress.settings.trickleRate),
  render: (fromStart) => {
    if (nprogress.isRendered()) {
      return document.getElementById("nprogress");
    }
    addClass(document.documentElement, "nprogress-busy");
    const progress = document.createElement("div");
    progress.id = "nprogress";
    progress.innerHTML = nprogress.settings.template;
    const bar = progress.querySelector(nprogress.settings.barSelector);
    const perc = fromStart ? "-100" : toBarPerc(nprogress.status || 0);
    const parent = document.querySelector(nprogress.settings.parent);
    css(bar, {
      transition: "all 0 linear",
      transform: "translate3d(" + perc + "%,0,0)"
    });
    if (parent !== document.body) {
      addClass(parent, "nprogress-custom-parent");
    }
    parent == null ? void 0 : parent.appendChild(progress);
    return progress;
  },
  remove: () => {
    removeClass(document.documentElement, "nprogress-busy");
    removeClass(document.querySelector(nprogress.settings.parent), "nprogress-custom-parent");
    const progress = document.getElementById("nprogress");
    progress && removeElement(progress);
  },
  isRendered: () => !!document.getElementById("nprogress")
};
const clamp = (n2, min, max2) => {
  if (n2 < min)
    return min;
  if (n2 > max2)
    return max2;
  return n2;
};
const toBarPerc = (n2) => (-1 + n2) * 100;
const queue = /* @__PURE__ */ function() {
  const pending = [];
  function next() {
    const fn = pending.shift();
    if (fn) {
      fn(next);
    }
  }
  return function(fn) {
    pending.push(fn);
    if (pending.length === 1)
      next();
  };
}();
const css = /* @__PURE__ */ function() {
  const cssPrefixes = ["Webkit", "O", "Moz", "ms"];
  const cssProps = {};
  function camelCase(string) {
    return string.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function(match, letter) {
      return letter.toUpperCase();
    });
  }
  function getVendorProp(name) {
    const style = document.body.style;
    if (name in style)
      return name;
    let i2 = cssPrefixes.length;
    const capName = name.charAt(0).toUpperCase() + name.slice(1);
    let vendorName;
    while (i2--) {
      vendorName = cssPrefixes[i2] + capName;
      if (vendorName in style)
        return vendorName;
    }
    return name;
  }
  function getStyleProp(name) {
    name = camelCase(name);
    return cssProps[name] ?? (cssProps[name] = getVendorProp(name));
  }
  function applyCss(element, prop, value) {
    prop = getStyleProp(prop);
    element.style[prop] = value;
  }
  return function(element, properties) {
    for (const prop in properties) {
      const value = properties[prop];
      if (value !== void 0 && Object.prototype.hasOwnProperty.call(properties, prop))
        applyCss(element, prop, value);
    }
  };
}();
const hasClass = (element, name) => {
  const list = typeof element === "string" ? element : classList(element);
  return list.indexOf(" " + name + " ") >= 0;
};
const addClass = (element, name) => {
  const oldList = classList(element);
  const newList = oldList + name;
  if (hasClass(oldList, name))
    return;
  element.className = newList.substring(1);
};
const removeClass = (element, name) => {
  const oldList = classList(element);
  if (!hasClass(element, name))
    return;
  const newList = oldList.replace(" " + name + " ", " ");
  element.className = newList.substring(1, newList.length - 1);
};
const classList = (element) => {
  return (" " + (element.className || "") + " ").replace(/\s+/gi, " ");
};
const removeElement = (element) => {
  element && element.parentNode && element.parentNode.removeChild(element);
};
const useNprogress = () => {
  onMounted(() => {
    const router = useRouter();
    const loadedPages = /* @__PURE__ */ new Set();
    loadedPages.add(router.currentRoute.value.path);
    router.beforeEach((to) => {
      if (!loadedPages.has(to.path)) {
        nprogress.start();
      }
    });
    router.afterEach((to) => {
      loadedPages.add(to.path);
      nprogress.done();
    });
  });
};
const config$7 = defineClientConfig({
  setup() {
    useNprogress();
  }
});
const clientConfig6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: config$7
}, Symbol.toStringTag, { value: "Module" }));
const themeData$1 = JSON.parse(`{"encrypt":{"config":{"/demo/encrypt.html":["$2a$10$PTKMK53J2/jz1kI0CzBCP.NAzI4eM98wu2FwNl7IUnKOfsswvtR1C"],"/zh/demo/encrypt.html":["$2a$10$j5twRocHlzTM/yh5ukTS8.N8WE/b0HmxUr.wbNo5UzU.s1lkx6.p6"]}},"author":{"name":"Mr.Hope","url":"https://mister-hope.com"},"logo":"https://theme-hope-assets.vuejs.press/logo.svg","repo":"vuepress-theme-hope/vuepress-theme-hope","docsDir":"demo/theme-blog/src","blog":{"medias":{"Baidu":"https://example.com","BiliBili":"https://example.com","Bitbucket":"https://example.com","Dingding":"https://example.com","Discord":"https://example.com","Dribbble":"https://example.com","Email":"mailto:info@example.com","Evernote":"https://example.com","Facebook":"https://example.com","Flipboard":"https://example.com","Gitee":"https://example.com","GitHub":"https://example.com","Gitlab":"https://example.com","Gmail":"mailto:info@example.com","Instagram":"https://example.com","Lark":"https://example.com","Lines":"https://example.com","Linkedin":"https://example.com","Pinterest":"https://example.com","Pocket":"https://example.com","QQ":"https://example.com","Qzone":"https://example.com","Reddit":"https://example.com","Rss":"https://example.com","Steam":"https://example.com","Twitter":"https://example.com","Wechat":"https://example.com","Weibo":"https://example.com","Whatsapp":"https://example.com","Youtube":"https://example.com","Zhihu":"https://example.com","VuePressThemeHope":{"icon":"https://theme-hope-assets.vuejs.press/logo.svg","link":"https://theme-hope.vuejs.press"}}},"locales":{"/zh/":{"lang":"zh-CN","navbarLocales":{"langName":"简体中文","selectLangAriaLabel":"选择语言"},"metaLocales":{"author":"作者","date":"写作日期","origin":"原创","views":"访问量","category":"分类","tag":"标签","readingTime":"阅读时间","words":"字数","toc":"此页内容","prev":"上一页","next":"下一页","lastUpdated":"上次编辑于","contributors":"贡献者","editLink":"在 GitHub 上编辑此页","print":"打印"},"blogLocales":{"article":"文章","articleList":"文章列表","category":"分类","tag":"标签","timeline":"时间轴","timelineTitle":"昨日不在","all":"全部","intro":"个人介绍","star":"星标","empty":"$text 为空","tutorial":"教程"},"paginationLocales":{"prev":"上一页","next":"下一页","navigate":"跳转到","action":"前往","errorText":"请输入 1 到 $page 之前的页码！"},"outlookLocales":{"themeColor":"主题色","darkmode":"外观","fullscreen":"全屏"},"encryptLocales":{"iconLabel":"文章已加密","placeholder":"输入密码","remember":"记住密码","errorHint":"请输入正确的密码"},"routeLocales":{"skipToContent":"跳至主要內容","notFoundTitle":"页面不存在","notFoundMsg":["这里什么也没有","我们是怎么来到这儿的？","这 是 四 零 四 !","看起来你访问了一个失效的链接"],"back":"返回上一页","home":"带我回家","openInNewWindow":"Open in new window"},"navbar":["/zh/","/zh/demo/",{"text":"博文","icon":"pen-to-square","prefix":"/zh/posts/","children":[{"text":"苹果","icon":"pen-to-square","prefix":"apple/","children":[{"text":"苹果1","icon":"pen-to-square","link":"1"},{"text":"苹果2","icon":"pen-to-square","link":"2"},"3","4"]},{"text":"香蕉","icon":"pen-to-square","prefix":"banana/","children":[{"text":"香蕉 1","icon":"pen-to-square","link":"1"},{"text":"香蕉 2","icon":"pen-to-square","link":"2"},"3","4"]},{"text":"樱桃","icon":"pen-to-square","link":"cherry"},{"text":"火龙果","icon":"pen-to-square","link":"dragonfruit"},"tomato","strawberry"]},{"text":"2.0.0-rc.52","icon":"book","children":[{"text":"V2 文档","link":"https://theme-hope.vuejs.press/zh/"},{"text":"V2 文档案例","link":"https://theme-hope-docs-demo.vuejs.press/zh/"}]}],"sidebar":{"/zh/":["",{"text":"如何使用","icon":"laptop-code","prefix":"demo/","link":"demo/","children":"structure"},{"text":"文章","icon":"book","prefix":"posts/","children":"structure"},"intro","slide"]},"footer":"默认页脚","displayFooter":true,"blog":{"description":"一个前端开发者","intro":"/zh/intro.html"}},"/":{"lang":"en-US","navbarLocales":{"langName":"English","selectLangAriaLabel":"Select language"},"metaLocales":{"author":"Author","date":"Writing Date","origin":"Original","views":"Page views","category":"Category","tag":"Tag","readingTime":"Reading Time","words":"Words","toc":"On This Page","prev":"Prev","next":"Next","lastUpdated":"Last update","contributors":"Contributors","editLink":"Edit this page on GitHub","print":"Print"},"blogLocales":{"article":"Articles","articleList":"Article List","category":"Category","tag":"Tag","timeline":"Timeline","timelineTitle":"Yesterday Once More!","all":"All","intro":"Personal Intro","star":"Star","empty":"No $text","tutorial":"Tutorial"},"paginationLocales":{"prev":"Prev","next":"Next","navigate":"Jump to","action":"Go","errorText":"Please enter a number between 1 and $page !"},"outlookLocales":{"themeColor":"Theme Color","darkmode":"Theme Mode","fullscreen":"Full Screen"},"encryptLocales":{"iconLabel":"Page Encrypted","placeholder":"Enter password","remember":"Remember password","errorHint":"Please enter the correct password!"},"routeLocales":{"skipToContent":"Skip to main content","notFoundTitle":"Page not found","notFoundMsg":["There’s nothing here.","How did we get here?","That’s a Four-Oh-Four.","Looks like we've got some broken links."],"back":"Go back","home":"Take me home","openInNewWindow":"Open in new window"},"navbar":["/","/demo/",{"text":"Posts","icon":"pen-to-square","prefix":"/posts/","children":[{"text":"Apple","icon":"pen-to-square","prefix":"apple/","children":[{"text":"Apple1","icon":"pen-to-square","link":"1"},{"text":"Apple2","icon":"pen-to-square","link":"2"},"3","4"]},{"text":"Banana","icon":"pen-to-square","prefix":"banana/","children":[{"text":"Banana 1","icon":"pen-to-square","link":"1"},{"text":"Banana 2","icon":"pen-to-square","link":"2"},"3","4"]},{"text":"Cherry","icon":"pen-to-square","link":"cherry"},{"text":"Dragon Fruit","icon":"pen-to-square","link":"dragonfruit"},"tomato","strawberry"]},{"text":"2.0.0-rc.52","icon":"book","children":[{"text":"V2 Docs","link":"https://theme-hope.vuejs.press/"},{"text":"V2 Docs Demo","link":"https://theme-hope-docs-demo.vuejs.press/"}]}],"sidebar":{"/":["",{"text":"Demo","icon":"laptop-code","prefix":"demo/","link":"demo/","children":"structure"},{"text":"Articles","icon":"book","prefix":"posts/","children":"structure"},"intro","slide"]},"footer":"Default footer","displayFooter":true,"blog":{"description":"A FrontEnd programmer","intro":"/intro.html"}}}}`);
const themeData = ref(themeData$1);
const useThemeData$1 = () => themeData;
const themeLocaleDataSymbol = Symbol("");
const useThemeLocaleData$1 = () => {
  const themeLocaleData = inject(themeLocaleDataSymbol);
  if (!themeLocaleData) {
    throw new Error("useThemeLocaleData() is called without provider.");
  }
  return themeLocaleData;
};
const resolveThemeLocaleData = (theme, routeLocale) => {
  const { locales: locales2, ...baseOptions } = theme;
  return {
    ...baseOptions,
    ...locales2 == null ? void 0 : locales2[routeLocale]
  };
};
const config$6 = defineClientConfig({
  enhance({ app }) {
    const themeData2 = useThemeData$1();
    const clientData = app._context.provides[clientDataSymbol];
    const themeLocaleData = computed(() => resolveThemeLocaleData(themeData2.value, clientData.routeLocale.value));
    app.provide(themeLocaleDataSymbol, themeLocaleData);
    Object.defineProperties(app.config.globalProperties, {
      $theme: {
        get() {
          return themeData2.value;
        }
      },
      $themeLocale: {
        get() {
          return themeLocaleData.value;
        }
      }
    });
  }
});
const clientConfig7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: config$6
}, Symbol.toStringTag, { value: "Module" }));
var define_COMMENT_OPTIONS_default = { provider: "Waline", dark: 'html[data-theme="dark"]', serverURL: "https://waline-comment.vuejs.press" };
const commentOptions = define_COMMENT_OPTIONS_default;
const comment = ref(commentOptions);
const commentSymbol = Symbol("");
const useCommentOptions = () => inject(commentSymbol);
const useWalineOptions = useCommentOptions;
const injectCommentConfig = (app) => {
  app.provide(commentSymbol, comment);
};
const LoadingIcon = () => h$1("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "32",
  height: "32",
  preserveAspectRatio: "xMidYMid",
  viewBox: "0 0 100 100"
}, [
  h$1("circle", { cx: "28", cy: "75", r: "11", fill: "currentColor" }, h$1("animate", {
    attributeName: "fill-opacity",
    begin: "0s",
    dur: "1s",
    keyTimes: "0;0.2;1",
    repeatCount: "indefinite",
    values: "0;1;1"
  })),
  h$1("path", {
    "fill": "none",
    "stroke": "#88baf0",
    "stroke-width": "10",
    "d": "M28 47a28 28 0 0 1 28 28"
  }, h$1("animate", {
    attributeName: "stroke-opacity",
    begin: "0.1s",
    dur: "1s",
    keyTimes: "0;0.2;1",
    repeatCount: "indefinite",
    values: "0;1;1"
  })),
  h$1("path", {
    "fill": "none",
    "stroke": "#88baf0",
    "stroke-width": "10",
    "d": "M28 25a50 50 0 0 1 50 50"
  }, h$1("animate", {
    attributeName: "stroke-opacity",
    begin: "0.2s",
    dur: "1s",
    keyTimes: "0;0.2;1",
    repeatCount: "indefinite",
    values: "0;1;1"
  }))
]);
LoadingIcon.displayName = "LoadingIcon";
var define_WALINE_LOCALES_default = { "/zh/": { placeholder: "请留言。(填写邮箱可在被回复时收到邮件提醒)" }, "/": { placeholder: "Write a comment here (Fill in the email address to receive an email notification when being replied)" } };
const walineLocales = define_WALINE_LOCALES_default;
Promise.resolve({                                                              });
const CommentProvider = defineComponent({
  name: "WalineComment",
  props: {
    /**
     * The path of the comment
     */
    identifier: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const walineOptions = useWalineOptions();
    const frontmatter = usePageFrontmatter();
    const lang = usePageLang();
    const walineLocale = useLocaleConfig(walineLocales);
    let abort;
    const enableWaline = computed(() => Boolean(walineOptions.value.serverURL));
    const enablePageViews = computed(() => {
      if (!enableWaline.value)
        return false;
      const pluginConfig = walineOptions.value.pageview !== false;
      const pageConfig = frontmatter.value.pageview;
      return (
        // Enable in page
        Boolean(pageConfig) || // Not disabled in anywhere
        pluginConfig !== false && pageConfig !== false
      );
    });
    const walineProps = computed(() => ({
      lang: lang.value === "zh-CN" ? "zh-CN" : "en",
      locale: walineLocale.value,
      dark: "html.dark",
      ...walineOptions.value,
      path: props.identifier
    }));
    onMounted(() => {
      watch(() => [
        props.identifier,
        walineOptions.value.serverURL,
        walineOptions.value.delay,
        enablePageViews.value
      ], () => {
        abort == null ? void 0 : abort();
        if (enablePageViews.value)
          nextTick().then(() => wait(walineOptions.value.delay || 800)).then(() => {
            setTimeout(() => {
              abort = pageviewCount({
                serverURL: walineOptions.value.serverURL,
                path: props.identifier
              });
            });
          });
      }, { immediate: true });
    });
    return () => enableWaline.value ? h$1("div", { id: "comment", class: "waline-wrapper" }, h$1(defineAsyncComponent({
      loader: async () => (await import(
        /* webpackChunkName: "waline" */
        "@waline/client/component"
      )).Waline,
      loadingComponent: LoadingIcon
    }), walineProps.value)) : null;
  }
});
const CommentService = defineComponent({
  name: "CommentService",
  props: {
    /**
     * Whether the component is in darkmode
     *
     * 组件是否处于夜间模式
     */
    darkmode: Boolean
  },
  setup(props) {
    const commentOptions2 = useCommentOptions();
    const page = usePageData();
    const frontmatter = usePageFrontmatter();
    const enableComment = computed(() => commentOptions2.value.comment !== false);
    const enabled = computed(() => frontmatter.value.comment || enableComment.value && frontmatter.value.comment !== false);
    return () => h$1(CommentProvider, {
      id: "vp-comment",
      identifier: frontmatter.value.commentID || page.value.path,
      darkmode: props.darkmode,
      style: { display: enabled.value ? "block" : "none" }
    });
  }
});
const config$5 = defineClientConfig({
  enhance: ({ app }) => {
    injectCommentConfig(app);
    app.component("CommentService", CommentService);
  }
});
const clientConfig8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: config$5
}, Symbol.toStringTag, { value: "Module" }));
const config$4 = defineClientConfig({
  setup: () => {
  }
});
const clientConfig9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: config$4
}, Symbol.toStringTag, { value: "Module" }));
const c$1 = ({ name: e2 = "", color: t2 = "currentColor", ariaLabel: n2 }, { attrs: i2, slots: o2 }) => {
  var _a2;
  return h$1("svg", { xmlns: "http://www.w3.org/2000/svg", class: ["icon", `${e2}-icon`], viewBox: "0 0 1024 1024", fill: t2, "aria-label": n2 ?? `${e2} icon`, ...i2 }, (_a2 = o2.default) == null ? void 0 : _a2.call(o2));
};
c$1.displayName = "IconBase";
const E$3 = ({ size: e2 = 48, stroke: t2 = 4, wrapper: n2 = true, height: i2 = 2 * e2 }) => {
  const o2 = h$1("svg", { xmlns: "http://www.w3.org/2000/svg", width: e2, height: e2, preserveAspectRatio: "xMidYMid", viewBox: "25 25 50 50" }, [h$1("animateTransform", { attributeName: "transform", type: "rotate", dur: "2s", keyTimes: "0;1", repeatCount: "indefinite", values: "0;360" }), h$1("circle", { cx: "50", cy: "50", r: "20", fill: "none", stroke: "currentColor", "stroke-width": t2, "stroke-linecap": "round" }, [h$1("animate", { attributeName: "stroke-dasharray", dur: "1.5s", keyTimes: "0;0.5;1", repeatCount: "indefinite", values: "1,200;90,200;1,200" }), h$1("animate", { attributeName: "stroke-dashoffset", dur: "1.5s", keyTimes: "0;0.5;1", repeatCount: "indefinite", values: "0;-35px;-125px" })])]);
  return n2 ? h$1("div", { class: "loading-icon-wrapper", style: `display:flex;align-items:center;justify-content:center;height:${i2}px` }, o2) : o2;
};
E$3.displayName = "LoadingIcon";
const B$1 = (e2, { slots: t2 }) => {
  var _a2;
  return (_a2 = t2.default) == null ? void 0 : _a2.call(t2);
};
const G$2 = (e2) => isLinkHttp(e2) ? e2 : `https://github.com/${e2}`, k$2 = (e2 = "") => !isLinkHttp(e2) || /github\.com/.test(e2) ? "GitHub" : /bitbucket\.org/.test(e2) ? "Bitbucket" : /gitlab\.com/.test(e2) ? "GitLab" : /gitee\.com/.test(e2) ? "Gitee" : null, m$2 = () => h$1(c$1, { name: "github" }, () => h$1("path", { d: "M511.957 21.333C241.024 21.333 21.333 240.981 21.333 512c0 216.832 140.544 400.725 335.574 465.664 24.49 4.395 32.256-10.07 32.256-23.083 0-11.69.256-44.245 0-85.205-136.448 29.61-164.736-64.64-164.736-64.64-22.315-56.704-54.4-71.765-54.4-71.765-44.587-30.464 3.285-29.824 3.285-29.824 49.195 3.413 75.179 50.517 75.179 50.517 43.776 75.008 114.816 53.333 142.762 40.79 4.523-31.66 17.152-53.377 31.19-65.537-108.971-12.458-223.488-54.485-223.488-242.602 0-53.547 19.114-97.323 50.517-131.67-5.035-12.33-21.93-62.293 4.779-129.834 0 0 41.258-13.184 134.912 50.346a469.803 469.803 0 0 1 122.88-16.554c41.642.213 83.626 5.632 122.88 16.554 93.653-63.488 134.784-50.346 134.784-50.346 26.752 67.541 9.898 117.504 4.864 129.834 31.402 34.347 50.474 78.123 50.474 131.67 0 188.586-114.73 230.016-224.042 242.09 17.578 15.232 33.578 44.672 33.578 90.454v135.85c0 13.142 7.936 27.606 32.854 22.87C862.25 912.597 1002.667 728.747 1002.667 512c0-271.019-219.648-490.667-490.71-490.667z" }));
m$2.displayName = "GitHubIcon";
const d$2 = () => h$1(c$1, { name: "gitee" }, () => h$1("path", { d: "M512 992C246.92 992 32 777.08 32 512S246.92 32 512 32s480 214.92 480 480-214.92 480-480 480zm242.97-533.34H482.39a23.7 23.7 0 0 0-23.7 23.7l-.03 59.28c0 13.08 10.59 23.7 23.7 23.7h165.96a23.7 23.7 0 0 1 23.7 23.7v11.85a71.1 71.1 0 0 1-71.1 71.1H375.71a23.7 23.7 0 0 1-23.7-23.7V423.11a71.1 71.1 0 0 1 71.1-71.1h331.8a23.7 23.7 0 0 0 23.7-23.7l.06-59.25a23.73 23.73 0 0 0-23.7-23.73H423.11a177.78 177.78 0 0 0-177.78 177.75v331.83c0 13.08 10.62 23.7 23.7 23.7h349.62a159.99 159.99 0 0 0 159.99-159.99V482.33a23.7 23.7 0 0 0-23.7-23.7z" }));
d$2.displayName = "GiteeIcon";
const h = () => h$1(c$1, { name: "bitbucket" }, () => h$1("path", { d: "M575.256 490.862c6.29 47.981-52.005 85.723-92.563 61.147-45.714-20.004-45.714-92.562-1.133-113.152 38.29-23.442 93.696 7.424 93.696 52.005zm63.451-11.996c-10.276-81.152-102.29-134.839-177.152-101.156-47.433 21.138-79.433 71.424-77.129 124.562 2.853 69.705 69.157 126.866 138.862 120.576S647.3 548.571 638.708 478.83zm136.558-309.723c-25.161-33.134-67.986-38.839-105.728-45.13-106.862-17.151-216.576-17.7-323.438 1.134-35.438 5.706-75.447 11.996-97.719 43.996 36.572 34.304 88.576 39.424 135.424 45.129 84.553 10.862 171.447 11.447 256 .585 47.433-5.705 99.987-10.276 135.424-45.714zm32.585 591.433c-16.018 55.99-6.839 131.438-66.304 163.986-102.29 56.576-226.304 62.867-338.87 42.862-59.43-10.862-129.135-29.696-161.72-85.723-14.3-54.858-23.442-110.848-32.585-166.84l3.438-9.142 10.276-5.157c170.277 112.567 408.576 112.567 579.438 0 26.844 8.01 6.84 40.558 6.29 60.014zm103.424-549.157c-19.42 125.148-41.728 249.71-63.415 374.272-6.29 36.572-41.728 57.162-71.424 72.558-106.862 53.724-231.424 62.866-348.562 50.286-79.433-8.558-160.585-29.696-225.134-79.433-30.28-23.443-30.28-63.415-35.986-97.134-20.005-117.138-42.862-234.277-57.161-352.585 6.839-51.42 64.585-73.728 107.447-89.71 57.16-21.138 118.272-30.866 178.87-36.571 129.134-12.58 261.157-8.01 386.304 28.562 44.581 13.13 92.563 31.415 122.844 69.705 13.714 17.7 9.143 40.01 6.29 60.014z" }));
h.displayName = "BitbucketIcon";
const p$1 = () => h$1(c$1, { name: "source" }, () => h$1("path", { d: "M601.92 475.2c0 76.428-8.91 83.754-28.512 99.594-14.652 11.88-43.956 14.058-78.012 16.434-18.81 1.386-40.392 2.97-62.172 6.534-18.612 2.97-36.432 9.306-53.064 17.424V299.772c37.818-21.978 63.36-62.766 63.36-109.692 0-69.894-56.826-126.72-126.72-126.72S190.08 120.186 190.08 190.08c0 46.926 25.542 87.714 63.36 109.692v414.216c-37.818 21.978-63.36 62.766-63.36 109.692 0 69.894 56.826 126.72 126.72 126.72s126.72-56.826 126.72-126.72c0-31.086-11.286-59.598-29.7-81.576 13.266-9.504 27.522-17.226 39.996-19.206 16.038-2.574 32.868-3.762 50.688-5.148 48.312-3.366 103.158-7.326 148.896-44.55 61.182-49.698 74.25-103.158 75.24-187.902V475.2h-126.72zM316.8 126.72c34.848 0 63.36 28.512 63.36 63.36s-28.512 63.36-63.36 63.36-63.36-28.512-63.36-63.36 28.512-63.36 63.36-63.36zm0 760.32c-34.848 0-63.36-28.512-63.36-63.36s28.512-63.36 63.36-63.36 63.36 28.512 63.36 63.36-28.512 63.36-63.36 63.36zM823.68 158.4h-95.04V63.36h-126.72v95.04h-95.04v126.72h95.04v95.04h126.72v-95.04h95.04z" }));
p$1.displayName = "SourceIcon";
const P = ({ link: e2, type: t2 = k$2(e2 ?? "") }) => {
  if (!t2) return null;
  const n2 = t2.toLowerCase();
  return h$1(n2 === "bitbucket" ? h : n2 === "github" ? m$2 : n2 === "gitlab" ? "GitLab" : n2 === "gitee" ? d$2 : p$1);
};
const L$3 = (e2, t2 = 0) => {
  let n2 = 3735928559 ^ t2, i2 = 1103547991 ^ t2;
  for (let o2 = 0, a2; o2 < e2.length; o2++) a2 = e2.charCodeAt(o2), n2 = Math.imul(n2 ^ a2, 2654435761), i2 = Math.imul(i2 ^ a2, 1597334677);
  return n2 = Math.imul(n2 ^ n2 >>> 16, 2246822507), n2 ^= Math.imul(i2 ^ i2 >>> 13, 3266489909), i2 = Math.imul(i2 ^ i2 >>> 16, 2246822507), i2 ^= Math.imul(n2 ^ n2 >>> 13, 3266489909), 4294967296 * (2097151 & i2) + (n2 >>> 0);
}, Q$1 = (e2, t2) => L$3(e2) % t2;
let X$1 = class X {
  constructor() {
    __publicField(this, "containerElement");
    __publicField(this, "messageElements", {});
    const t2 = "message-container", n2 = document.getElementById(t2);
    n2 ? this.containerElement = n2 : (this.containerElement = document.createElement("div"), this.containerElement.id = t2, document.body.appendChild(this.containerElement));
  }
  pop(t2, n2 = 2e3) {
    const i2 = document.createElement("div"), o2 = Date.now();
    return i2.className = "message move-in", i2.innerHTML = t2, this.containerElement.appendChild(i2), this.messageElements[o2] = i2, n2 > 0 && setTimeout(() => {
      this.close(o2);
    }, n2), o2;
  }
  close(t2) {
    if (t2) {
      const n2 = this.messageElements[t2];
      n2.classList.remove("move-in"), n2.classList.add("move-out"), n2.addEventListener("animationend", () => {
        n2.remove(), delete this.messageElements[t2];
      });
    } else keys(this.messageElements).forEach((n2) => this.close(Number(n2)));
  }
  destroy() {
    document.body.removeChild(this.containerElement);
  }
};
const x$2 = /#.*$/u, C$3 = (e2) => {
  const t2 = x$2.exec(e2);
  return t2 ? t2[0] : "";
}, u$1 = (e2) => decodeURI(e2).replace(x$2, "").replace(/\/index\.html$/iu, "/").replace(/\/(README|index)\.md$/iu, "/").replace(/\.(?:html|md)$/iu, ""), Z$1 = (e2, t2) => {
  if (!isDef(t2)) return false;
  const n2 = u$1(e2.path), i2 = u$1(t2), o2 = C$3(t2);
  return o2 ? o2 === e2.hash && (!i2 || n2 === i2) : n2 === i2;
};
var n1 = (e2) => Object.prototype.toString.call(e2) === "[object Object]", r$3 = (e2) => typeof e2 == "string";
const H$1 = Array.isArray, N$2 = (e2) => n1(e2) && r$3(e2.name), i1 = (e2, t2 = false) => e2 ? H$1(e2) ? e2.map((n2) => r$3(n2) ? { name: n2 } : N$2(n2) ? n2 : null).filter((n2) => n2 !== null) : r$3(e2) ? [{ name: e2 }] : N$2(e2) ? [e2] : (console.error(`Expect "author" to be \`AuthorInfo[] | AuthorInfo | string[] | string ${t2 ? "" : "| false"} | undefined\`, but got`, e2), []) : [], g = (e2, t2) => {
  if (e2) {
    if (H$1(e2) && e2.every(r$3)) return e2;
    if (r$3(e2)) return [e2];
    console.error(`Expect ${t2} to be \`string[] | string | undefined\`, but got`, e2);
  }
  return [];
}, o1 = (e2) => g(e2, "category"), s1 = (e2) => g(e2, "tag");
const e$4 = () => {
  const t2 = document.documentElement;
  return t2.classList.contains("dark") || t2.getAttribute("data-theme") === "dark";
};
const A$4 = (e2, r2) => r2 === "json" ? JSON.parse(e2) : new Function(`let config,__chart_js_config__;
{
${e2}
__chart_js_config__=config;
}
return __chart_js_config__;`)();
var E$2 = defineComponent({ name: "ChartJS", props: { config: { type: String, required: true }, id: { type: String, required: true }, title: { type: String, default: "" }, type: { type: String, default: "json" } }, setup(e2) {
  const r2 = shallowRef(), s2 = shallowRef(), i2 = ref(false), n2 = ref(true), f2 = computed(() => decodeData(e2.config));
  let l2 = false, c2;
  const p2 = async (t2) => {
    const [{ default: o2 }] = await Promise.all([import("chart.js/auto"), l2 ? Promise.resolve() : (l2 = true, new Promise((h2) => setTimeout(h2, 800)))]);
    o2.defaults.borderColor = t2 ? "#ccc" : "#36A2EB", o2.defaults.color = t2 ? "#fff" : "#000", o2.defaults.maintainAspectRatio = false;
    const _2 = A$4(f2.value, e2.type), g2 = s2.value.getContext("2d");
    c2 == null ? void 0 : c2.destroy(), c2 = new o2(g2, _2), n2.value = false;
  };
  return onMounted(() => {
    i2.value = e$4(), useMutationObserver(document.documentElement, () => {
      i2.value = e$4();
    }, { attributeFilter: ["class", "data-theme"], attributes: true }), watch(i2, (t2) => p2(t2), { immediate: true });
  }), () => [e2.title ? h$1("div", { class: "chartjs-title" }, decodeURIComponent(e2.title)) : null, n2.value ? h$1(E$3, { class: "chartjs-loading", height: 192 }) : null, h$1("div", { ref: r2, class: "chartjs-wrapper", id: e2.id, style: { display: n2.value ? "none" : "block" } }, h$1("canvas", { ref: s2, height: 400 }))];
} });
const i$2 = useStorage("VUEPRESS_CODE_TAB_STORE", {});
var A$3 = defineComponent({ name: "CodeTabs", props: { active: { type: Number, default: 0 }, data: { type: Array, required: true }, id: { type: String, required: true }, tabId: { type: String, default: "" } }, slots: Object, setup(a2, { slots: r2 }) {
  const l2 = ref(a2.active), u2 = shallowRef([]), n2 = () => {
    a2.tabId && (i$2.value[a2.tabId] = a2.data[l2.value].id);
  }, s2 = (e2 = l2.value) => {
    l2.value = e2 < u2.value.length - 1 ? e2 + 1 : 0, u2.value[l2.value].focus();
  }, c2 = (e2 = l2.value) => {
    l2.value = e2 > 0 ? e2 - 1 : u2.value.length - 1, u2.value[l2.value].focus();
  }, b2 = (e2, t2) => {
    e2.key === " " || e2.key === "Enter" ? (e2.preventDefault(), l2.value = t2) : e2.key === "ArrowRight" ? (e2.preventDefault(), s2()) : e2.key === "ArrowLeft" && (e2.preventDefault(), c2()), a2.tabId && (i$2.value[a2.tabId] = a2.data[l2.value].id);
  }, p2 = () => {
    if (a2.tabId) {
      const e2 = a2.data.findIndex(({ id: t2 }) => i$2.value[a2.tabId] === t2);
      if (e2 !== -1) return e2;
    }
    return a2.active;
  };
  return onMounted(() => {
    l2.value = p2(), watch(() => i$2.value[a2.tabId], (e2, t2) => {
      if (a2.tabId && e2 !== t2) {
        const d2 = a2.data.findIndex(({ id: v2 }) => v2 === e2);
        d2 !== -1 && (l2.value = d2);
      }
    });
  }), () => a2.data.length ? h$1("div", { class: "vp-code-tabs" }, [h$1("div", { class: "vp-code-tabs-nav", role: "tablist" }, a2.data.map(({ id: e2 }, t2) => {
    const d2 = t2 === l2.value;
    return h$1("button", { type: "button", ref: (v2) => {
      v2 && (u2.value[t2] = v2);
    }, class: ["vp-code-tab-nav", { active: d2 }], role: "tab", "aria-controls": `codetab-${a2.id}-${t2}`, "aria-selected": d2, onClick: () => {
      l2.value = t2, n2();
    }, onKeydown: (v2) => b2(v2, t2) }, r2[`title${t2}`]({ value: e2, isActive: d2 }));
  })), a2.data.map(({ id: e2 }, t2) => {
    const d2 = t2 === l2.value;
    return h$1("div", { class: ["vp-code-tab", { active: d2 }], id: `codetab-${a2.id}-${t2}`, role: "tabpanel", "aria-expanded": d2 }, [h$1("div", { class: "vp-code-tab-title" }, r2[`title${t2}`]({ value: e2, isActive: d2 })), r2[`tab${t2}`]({ value: e2, isActive: d2 })]);
  })]) : null;
} });
const q$1 = () => h$1(c$1, { name: "back" }, () => h$1("path", { d: "M1014.749 449.156v125.688H260.626l345.64 345.64-89.239 89.237L19.307 512l497.72-497.721 89.238 89.238-345.64 345.64h754.124z" })), a$5 = () => h$1(c$1, { name: "home" }, () => h$1("path", { d: "M780.106 420.978L506.994 147.866 233.882 420.978h.045v455.11H780.06v-455.11h.046zm90.977 90.976V876.09a91.022 91.022 0 01-91.023 91.022H233.927a91.022 91.022 0 01-91.022-91.022V511.954l-67.22 67.175-64.307-64.307 431.309-431.31c35.498-35.498 93.115-35.498 128.614 0l431.309 431.31-64.307 64.307L871.083 512z" })), o$6 = '<svg class="codepen-icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M123.429 668L468 897.714V692.571L277.143 565.143zM88 585.714L198.286 512 88 438.286v147.428zm468 312L900.571 668 746.857 565.143 556 692.57v205.143zM512 616l155.429-104L512 408 356.571 512zM277.143 458.857L468 331.43V126.286L123.429 356zM825.714 512L936 585.714V438.286zm-78.857-53.143L900.571 356 556 126.286v205.143zM1024 356v312q0 23.429-19.429 36.571l-468 312Q524.571 1024 512 1024t-24.571-7.429l-468-312Q0 691.43 0 668V356q0-23.429 19.429-36.571l468-312Q499.429 0 512 0t24.571 7.429l468 312Q1024 332.57 1024 356z"/></svg>', v$2 = '<svg class="jsfiddle-icon" viewBox="0 0 1170 1024" xmlns="http://www.w3.org/2000/svg"><path d="M1028.571 441.143q63.429 26.286 102.572 83.143t39.143 126.571q0 93.714-67.429 160.286T940 877.714q-2.286 0-6.571-.285t-6-.286H232q-97.143-5.714-164.571-71.714T0 645.143q0-62.857 31.429-116t84-84q-6.858-22.286-6.858-46.857 0-65.715 46.858-112T269.143 240q54.286 0 98.286 33.143 42.857-88 127.142-141.714t186.572-53.715q94.857 0 174.857 46t126.571 124.857 46.572 172q0 3.429-.286 10.286t-.286 10.286zm-761.142 152q0 69.714 48 110.286T434.286 744q78.285 0 137.143-56.571-9.143-11.429-27.143-32.286t-24.857-28.857q-38.286 37.143-82.286 37.143-31.429 0-53.429-19.143t-22-50q0-30.286 22-49.715T436 525.143q25.143 0 48.286 12T526 568.57t37.143 42.858 39.428 46.857 44 42.857T702 732.57t69.429 12q69.142 0 116.857-40.857T936 594.857q0-69.143-48-109.714T769.714 444.57Q688 444.571 632 500l53.143 61.714q37.714-36.571 81.143-36.571 29.714 0 52.571 18.857t22.857 48q0 32.571-21.143 52.286T766.857 664q-24.571 0-47.143-12t-41.143-31.429-37.428-42.857-39.714-46.857T557.143 488 502 456.571t-67.714-12q-69.715 0-118.286 40.286t-48.571 108.286z"/></svg>', l$1 = '<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M512 74.667C270.933 74.667 74.667 270.933 74.667 512S270.933 949.333 512 949.333 949.333 753.067 949.333 512 753.067 74.667 512 74.667zm0 810.666C307.2 885.333 138.667 716.8 138.667 512S307.2 138.667 512 138.667 885.333 307.2 885.333 512 716.8 885.333 512 885.333z"/><path d="M708.267 465.067 473.6 330.667c-8.533-4.267-17.067-6.4-25.6-6.4-29.867 0-53.333 23.466-53.333 53.333v268.8c0 8.533 2.133 19.2 6.4 25.6 10.666 17.067 27.733 27.733 46.933 27.733 8.533 0 17.067-2.133 25.6-6.4l234.667-134.4c8.533-4.266 14.933-10.666 19.2-19.2 6.4-12.8 8.533-27.733 4.266-40.533-2.133-14.933-10.666-25.6-23.466-34.133zM458.667 627.2V396.8L661.333 512 458.667 627.2z"/></svg>';
var define_CODE_DEMO_OPTIONS_default = { useBabel: false, jsLib: [], cssLib: [], codepenLayout: "left", codepenEditors: "101", babel: "https://unpkg.com/@babel/standalone/babel.min.js", vue: "https://unpkg.com/vue/dist/vue.global.prod.js", react: "https://unpkg.com/react/umd/react.production.min.js", reactDOM: "https://unpkg.com/react-dom/umd/react-dom.production.min.js" };
const L$2 = define_CODE_DEMO_OPTIONS_default, $ = { html: { types: ["html", "slim", "haml", "md", "markdown", "vue"], map: { html: "none", vue: "none", md: "markdown" } }, js: { types: ["js", "javascript", "coffee", "coffeescript", "ts", "typescript", "ls", "livescript"], map: { js: "none", javascript: "none", coffee: "coffeescript", ls: "livescript", ts: "typescript" } }, css: { types: ["css", "less", "sass", "scss", "stylus", "styl"], map: { css: "none", styl: "stylus" } } }, H = (e2, s2, t2) => {
  const l2 = document.createElement(e2);
  return isPlainObject(s2) && keys(s2).forEach((n2) => {
    if (n2.indexOf("data")) l2[n2] = s2[n2];
    else {
      const r2 = n2.replace("data", "");
      l2.dataset[r2] = s2[n2];
    }
  }), l2;
}, S$1 = (e2) => ({ ...L$2, ...e2, jsLib: Array.from(new Set([L$2.jsLib ?? [], e2.jsLib ?? []].flat())), cssLib: Array.from(new Set([L$2.cssLib ?? [], e2.cssLib ?? []].flat())) }), u = (e2, s2) => {
  if (isDef(e2[s2])) return e2[s2];
  const t2 = new Promise((l2) => {
    var _a2;
    const n2 = document.createElement("script");
    n2.src = s2, (_a2 = document.querySelector("body")) == null ? void 0 : _a2.appendChild(n2), n2.onload = () => {
      l2();
    };
  });
  return e2[s2] = t2, t2;
}, I$1 = (e2, s2) => {
  if (s2.css && Array.from(e2.childNodes).every((t2) => t2.nodeName !== "STYLE")) {
    const t2 = H("style", { innerHTML: s2.css });
    e2.appendChild(t2);
  }
}, J = (e2, s2, t2) => {
  const l2 = t2.getScript();
  if (l2 && Array.from(s2.childNodes).every((n2) => n2.nodeName !== "SCRIPT")) {
    const n2 = document.createElement("script");
    n2.appendChild(document.createTextNode(`{const document=window.document.querySelector('#${e2} .vp-code-demo-display').shadowRoot;
${l2}}`)), s2.appendChild(n2);
  }
}, q = ["html", "js", "css"], F$1 = (e2) => {
  const s2 = keys(e2), t2 = { html: [], js: [], css: [], isLegal: false };
  return q.forEach((l2) => {
    const n2 = s2.filter((r2) => $[l2].types.includes(r2));
    if (n2.length) {
      const r2 = n2[0];
      t2[l2] = [e2[r2].replace(/^\n|\n$/g, ""), $[l2].map[r2] ?? r2];
    }
  }), t2.isLegal = (!t2.html.length || t2.html[1] === "none") && (!t2.js.length || t2.js[1] === "none") && (!t2.css.length || t2.css[1] === "none"), t2;
}, x$1 = (e2) => e2.replace(/<br \/>/g, "<br>").replace(/<((\S+)[^<]*?)\s+\/>/g, "<$1></$2>"), O$2 = (e2) => `<div id="app">
${x$1(e2)}
</div>`, G$1 = (e2) => `${e2.replace("export default ", "const $reactApp = ").replace(/App\.__style__(\s*)=(\s*)`([\s\S]*)?`/, "")};
ReactDOM.createRoot(document.getElementById("app")).render(React.createElement($reactApp))`, Y = (e2) => e2.replace(/export\s+default\s*\{(\n*[\s\S]*)\n*\}\s*;?$/u, "Vue.createApp({$1}).mount('#app')").replace(/export\s+default\s*define(Async)?Component\s*\(\s*\{(\n*[\s\S]*)\n*\}\s*\)\s*;?$/u, "Vue.createApp({$1}).mount('#app')").trim(), A$2 = (e2) => `(function(exports){var module={};module.exports=exports;${e2};return module.exports.__esModule.exports.default:module.exports;})({})`, K = (e2, s2) => {
  const t2 = S$1(s2), l2 = e2.js[0] ?? "";
  return { ...t2, html: x$1(e2.html[0] ?? ""), js: l2, css: e2.css[0] ?? "", isLegal: e2.isLegal, getScript: () => {
    var _a2;
    return t2.useBabel ? ((_a2 = window.Babel.transform(l2, { presets: ["es2015"] })) == null ? void 0 : _a2.code) ?? "" : l2;
  } };
}, U$1 = /<template>([\s\S]+)<\/template>/u, W = /<script(\s*lang=(['"])(.*?)\2)?>([\s\S]+)<\/script>/u, z = /<style(\s*lang=(['"])(.*?)\2)?\s*(?:scoped)?>([\s\S]+)<\/style>/u, Q = (e2, s2) => {
  const t2 = S$1(s2), l2 = e2.html[0] ?? "", n2 = U$1.exec(l2), r2 = W.exec(l2), p2 = z.exec(l2), i2 = (n2 == null ? void 0 : n2[1].replace(/^\n|\n$/g, "")) ?? "", [d2 = "", c2 = ""] = r2 ? [r2[4].replace(/^\n|\n$/g, ""), r2[3]] : [], [a2 = "", v2 = ""] = p2 ? [p2[4].replace(/^\n|\n$/g, ""), p2[3]] : [], f2 = c2 === "" && (v2 === "" || v2 === "css");
  return { ...t2, html: O$2(i2), js: Y(d2), css: a2, isLegal: f2, jsLib: [t2.vue, ...t2.jsLib], getScript: () => {
    var _a2, _b2;
    const g2 = s2.useBabel ? ((_b2 = (_a2 = window.Babel) == null ? void 0 : _a2.transform(d2, { presets: ["es2015"] })) == null ? void 0 : _b2.code) ?? "" : d2.replace(/export\s+default/u, "return");
    return `const app=window.document.createElement('div');document.firstElementChild.appendChild(app);const appOptions=${A$2(g2)};appOptions.template=\`${i2.replace("`", '\\`"')}\`;window.Vue.createApp(appOptions).mount(app);`;
  } };
}, X2 = (e2, s2) => {
  var _a2;
  const t2 = S$1(s2), l2 = e2.js[0] ?? "";
  return { ...t2, html: O$2(""), js: G$1(l2), css: e2.css[0] ?? ((_a2 = e2.js[0]) == null ? void 0 : _a2.replace(/App\.__style__(?:\s*)=(?:\s*)`([\s\S]*)?`/, "$1").trim()) ?? "", isLegal: e2.isLegal, jsLib: [t2.react, t2.reactDOM, ...t2.jsLib], jsx: true, getScript: () => {
    var _a3, _b2;
    const n2 = ((_b2 = (_a3 = window.Babel) == null ? void 0 : _a3.transform(l2, { presets: ["es2015", "react"] })) == null ? void 0 : _b2.code) ?? "";
    return `window.ReactDOM.createRoot(document.firstElementChild).render(window.React.createElement(${A$2(n2)}))`;
  } };
}, m$1 = {}, Z = (e2) => Promise.all([u(m$1, e2.babel), u(m$1, e2.react), u(m$1, e2.reactDOM)]), ee = (e2) => {
  const s2 = [u(m$1, e2.vue)];
  return e2.useBabel && s2.push(u(m$1, e2.babel)), Promise.all(s2);
}, te = (e2) => e2.useBabel ? u(m$1, e2.babel) : Promise.resolve();
var se = defineComponent({ name: "CodeDemo", props: { id: { type: String, required: true }, type: { type: String, default: "normal" }, title: { type: String, default: "" }, config: { type: String, default: "" }, code: { type: String, required: true } }, slots: Object, setup(e2, { slots: s2 }) {
  const [t2, l2] = useToggle(false), n2 = shallowRef(), r2 = shallowRef(), p2 = ref("0"), i2 = ref(false), d2 = computed(() => JSON.parse(e2.config ? decodeData(e2.config) : "{}")), c2 = computed(() => {
    const y2 = JSON.parse(decodeData(e2.code));
    return F$1(y2);
  }), a2 = computed(() => e2.type === "react" ? X2(c2.value, d2.value) : e2.type === "vue" ? Q(c2.value, d2.value) : K(c2.value, d2.value)), v2 = computed(() => a2.value.isLegal), f2 = (y2 = false) => {
    const b2 = n2.value.attachShadow({ mode: "open" }), j2 = document.createElement("div");
    j2.classList.add("code-demo-app"), b2.appendChild(j2), v2.value ? (y2 && (j2.innerHTML = a2.value.html), I$1(b2, a2.value), J(e2.id, b2, a2.value), p2.value = "0") : p2.value = "auto", i2.value = true;
  }, g2 = () => {
    switch (e2.type) {
      case "react":
        return Z(a2.value).then(() => f2());
      case "vue":
        return ee(a2.value).then(() => f2());
      default:
        return te(a2.value).then(() => f2(true));
    }
  };
  return useEventListener("beforeprint", () => {
    l2(true);
  }), onMounted(() => {
    setTimeout(() => {
      g2();
    }, 800);
  }), () => {
    var _a2;
    return h$1("div", { class: "vp-code-demo", id: e2.id }, [h$1("div", { class: "vp-code-demo-header" }, [a2.value.isLegal ? h$1("button", { type: "button", title: "toggle", "aria-hidden": true, class: ["vp-code-demo-toggle-button", t2.value ? "down" : "end"], onClick: () => {
      p2.value = t2.value ? "0" : `${r2.value.clientHeight + 13.8}px`, l2();
    } }) : null, e2.title ? h$1("span", { class: "vp-code-demo-title" }, decodeURIComponent(e2.title)) : null, a2.value.isLegal && a2.value.jsfiddle !== false ? h$1("form", { class: "code-demo-jsfiddle", target: "_blank", action: "https://jsfiddle.net/api/post/library/pure/", method: "post" }, [h$1("input", { type: "hidden", name: "html", value: a2.value.html }), h$1("input", { type: "hidden", name: "js", value: a2.value.js }), h$1("input", { type: "hidden", name: "css", value: a2.value.css }), h$1("input", { type: "hidden", name: "wrap", value: "1" }), h$1("input", { type: "hidden", name: "panel_js", value: "3" }), h$1("input", { type: "hidden", name: "resources", value: [...a2.value.cssLib, ...a2.value.jsLib].join(",") }), h$1("button", { type: "submit", class: "jsfiddle-button", innerHTML: v$2, "aria-label": "JSFiddle", "data-balloon-pos": "up" })]) : null, !a2.value.isLegal || a2.value.codepen !== false ? h$1("form", { class: "code-demo-codepen", target: "_blank", action: "https://codepen.io/pen/define", method: "post" }, [h$1("input", { type: "hidden", name: "data", value: JSON.stringify({ html: a2.value.html, js: a2.value.js, css: a2.value.css, js_external: a2.value.jsLib.join(";"), css_external: a2.value.cssLib.join(";"), layout: a2.value.codepenLayout, html_pre_processor: c2.value ? c2.value.html[1] : "none", js_pre_processor: c2.value ? c2.value.js[1] : a2.value.jsx ? "babel" : "none", css_pre_processor: c2.value ? c2.value.css[1] : "none", editors: a2.value.codepenEditors }) }), h$1("button", { type: "submit", innerHTML: o$6, class: "codepen-button", "aria-label": "Codepen", "data-balloon-pos": "up" })]) : null]), i2.value ? null : h$1(E$3, { class: "vp-code-demo-loading" }), h$1("div", { ref: n2, class: "vp-code-demo-display", style: { display: v2.value && i2.value ? "block" : "none" } }), h$1("div", { class: "vp-code-demo-code-wrapper", style: { height: p2.value } }, h$1("div", { ref: r2, class: "vp-code-demo-codes" }, (_a2 = s2.default) == null ? void 0 : _a2.call(s2)))]);
  };
} });
var v$1 = defineComponent({ name: "MdDemo", props: { id: { type: String, required: true }, title: { type: String, default: "" } }, slots: Object, setup(t2, { slots: d2 }) {
  const [o2, l2] = useToggle(false), i2 = shallowRef(), s2 = ref("0");
  return useEventListener("beforeprint", () => {
    l2(true);
  }), () => {
    var _a2, _b2;
    return h$1("div", { class: "vp-md-demo", id: t2.id }, [h$1("div", { class: "vp-md-demo-header" }, [h$1("button", { type: "button", title: "toggle", "aria-hidden": true, class: ["vp-md-demo-toggle-button", o2.value ? "down" : "end"], onClick: () => {
      s2.value = o2.value ? "0" : `${i2.value.clientHeight + 13.8}px`, l2();
    } }), t2.title ? decodeURIComponent(t2.title) : null]), h$1("div", { class: "vp-md-demo-display" }, (_a2 = d2.default) == null ? void 0 : _a2.call(d2)), h$1("div", { class: "vp-md-demo-code-wrapper", style: { height: s2.value } }, h$1("div", { ref: i2, class: "vp-md-demo-codes" }, (_b2 = d2.code) == null ? void 0 : _b2.call(d2)))]);
  };
} });
let s$2 = {};
const e$3 = Symbol(""), n$2 = () => inject(e$3), r$2 = (t2) => {
  t2.provide(e$3, s$2);
};
const v = (async () => {
}).constructor, C$2 = (t2, o2, i2) => o2 === "js" ? v("myChart", `let width,height,option,__echarts_config__;
{
${t2}
__echarts_config__={width,height,option};
}
return __echarts_config__;
`)(i2) : Promise.resolve({ option: JSON.parse(t2) });
var w$1 = defineComponent({ name: "ECharts", props: { config: { type: String, required: true }, id: { type: String, required: true }, title: { type: String, default: "" }, type: { type: String, default: "json" } }, setup(t2) {
  const o2 = n$2(), i2 = ref(true), s2 = shallowRef();
  let e2;
  return useEventListener("resize", useDebounceFn(() => e2 == null ? void 0 : e2.resize(), 100)), onMounted(() => {
    Promise.all([import("echarts"), new Promise((n2) => setTimeout(n2, 800))]).then(async ([n2]) => {
      var _a2;
      await ((_a2 = o2.setup) == null ? void 0 : _a2.call(o2)), e2 = n2.init(s2.value);
      const { option: a2, ...p2 } = await C$2(decodeData(t2.config), t2.type, e2);
      e2.resize(p2), e2.setOption({ ...o2.option, ...a2 }), i2.value = false;
    });
  }), onUnmounted(() => {
    e2 == null ? void 0 : e2.dispose();
  }), () => [t2.title ? h$1("div", { class: "echarts-title" }, decodeURIComponent(t2.title)) : null, h$1("div", { class: "echarts-wrapper" }, [h$1("div", { ref: s2, class: "echarts-container", id: t2.id }), i2.value ? h$1(E$3, { class: "echarts-loading", height: 360 }) : null])];
} });
var l = { x: 0, y: 0, "line-width": 2, "line-length": 40, "text-margin": 8, "font-size": 14, "font-color": "#8DA1AC", "line-color": "#8DA1AC", "element-color": "black", fill: "white", "yes-text": "Yes", "no-text": "No", "arrow-end": "block", scale: 1 }, o$5 = { ...l, symbols: { start: { class: "start-element", "font-color": "#fff", fill: "#595959", "line-width": "0px" }, end: { class: "end-element", "font-color": "#fff", fill: "#595959", "line-width": "0px" }, operation: { class: "operation-element", "font-color": "#fff", fill: "#1890ff", "line-width": "0px" }, inputoutput: { class: "inputoutput-element", "font-color": "#fff", fill: "#1890ff", "line-width": "0px" }, subroutine: { class: "subroutine-element", "font-color": "#fff", fill: "#FF485E", "element-color": "#fff", "line-color": "red" }, condition: { class: "condition-element", "font-color": "#fff", fill: "#FF485E", "line-width": "0px" }, parallel: { class: "parallel-element", "font-color": "#fff", fill: "#1890ff", "line-width": "0px" } } }, e$2 = { ...l, "line-width": 1, symbols: { start: { class: "start-element", fill: "#ccc", "line-color": "#5c6ac4", "font-color": "#000" }, end: { class: "end-element", fill: "#ccc", "line-color": "#5c6ac4", "font-color": "#000" }, operation: { class: "operation-element", fill: "#f1f1f1", "line-color": "#5c6ac4", "font-color": "#000" }, inputoutput: { class: "inputoutput-element", fill: "#f1f1f1", "line-color": "#5c6ac4", "font-color": "#000" }, subroutine: { class: "subroutine-element", fill: "#f1f1f1", "line-color": "#5c6ac4", "font-color": "#000" }, condition: { class: "condition-element", fill: "#f1f1f1", "line-color": "#5c6ac4", "font-color": "#000" }, parallel: { class: "parallel-element", fill: "#f1f1f1", "line-color": "#5c6ac4", "font-color": "#000" } } }, t$3 = { ...l, symbols: { start: { class: "start-element", "font-color": "#fff", fill: "#2F495F", "line-width": "0px" }, end: { class: "end-element", "font-color": "#fff", fill: "#2F495F", "line-width": "0px" }, operation: { class: "operation-element", "font-color": "#fff", fill: "#00BC7D", "line-width": "0px" }, inputoutput: { class: "inputoutput-element", "font-color": "#fff", fill: "#EB4D5D", "line-width": "0px" }, subroutine: { class: "subroutine-element", "font-color": "#fff", fill: "#937AC4", "element-color": "#fff", "line-color": "red" }, condition: { class: "condition-element", "font-color": "#fff", fill: "#FFB500", "line-width": "0px" }, parallel: { class: "parallel-element", "font-color": "#fff", fill: "#2F495F", "line-width": "0px" } } };
const f$1 = { ant: o$5, vue: t$3, pie: e$2 };
let i$1 = {};
const o$4 = Symbol(""), r$1 = () => inject(o$4), t$2 = (e2) => {
  e2.provide(o$4, i$1);
};
let o$3 = {};
const s$1 = Symbol(""), t$1 = () => inject(s$1), a$4 = (e2) => {
  e2.provide(s$1, o$3);
};
const c = { template: "vue" };
let a$3 = c;
const o$2 = Symbol(""), i = () => inject(o$2), p = (n2) => {
  n2.provide(o$2, a$3);
};
const t = { autoResize: true, showCompileOutput: false, clearConsole: false, layout: "horizontal", ssr: false };
let e$1 = t;
const n$1 = Symbol(""), s = () => inject(n$1), a$2 = (o2) => {
  o2.provide(n$1, e$1);
};
const a$1 = {};
let o$1 = a$1;
const e = Symbol(""), r = (n2) => {
  n2.provide(e, o$1);
};
var y = defineComponent({ name: "FlowChart", props: { code: { type: String, required: true }, id: { type: String, required: true }, preset: { type: String, default: "vue" } }, setup(r2) {
  let o2 = null;
  const u2 = shallowRef(), n2 = ref(true), t2 = ref(1), a2 = computed(() => f$1[r2.preset] || (console.warn(`[md-enhance:flowchart] Unknown preset: ${r2.preset}`), f$1.vue)), l2 = (e2) => e2 < 419 ? 0.8 : e2 > 1280 ? 1 : 0.9;
  return onMounted(() => {
    Promise.all([import("flowchart.ts"), new Promise((e2) => setTimeout(e2, 800))]).then(([{ parse: e2 }]) => {
      o2 = e2(decodeData(r2.code)), t2.value = l2(window.innerWidth), n2.value = false, o2.draw(r2.id, { ...a2.value, scale: t2.value });
    }), useEventListener("resize", useDebounceFn(() => {
      if (o2) {
        const e2 = l2(window.innerWidth);
        t2.value !== e2 && (t2.value = e2, o2.draw(r2.id, { ...a2.value, scale: e2 }));
      }
    }, 100));
  }), () => [n2.value ? h$1(E$3, { class: "flowchart-loading", height: 192 }) : null, h$1("div", { ref: u2, class: ["flowchart-wrapper", r2.preset], id: r2.id, style: { display: n2.value ? "none" : "block" } })];
} });
const o = () => {
  useEventListener("beforeprint", () => {
    document.querySelectorAll("details").forEach((e2) => {
      e2.open = true;
    });
  });
};
var k$1 = defineComponent({ name: "KotlinPlayground", props: { title: { type: String, default: "" }, files: { type: String, required: true }, settings: { type: String, default: "{}" } }, setup(a2) {
  const t2 = ref(false), r2 = shallowRef(), l2 = computed(() => JSON.parse(decodeData(a2.files))), i2 = computed(() => ({ theme: t2.value ? "darcula" : "default", ...JSON.parse(decodeURIComponent(a2.settings)) })), u2 = async () => {
    const { default: n2 } = await import("kotlin-playground");
    n2(r2.value);
  };
  return onMounted(() => {
    t2.value = e$4(), useMutationObserver(document.documentElement, () => {
      t2.value = e$4();
    }, { attributeFilter: ["class", "data-theme"], attributes: true }), watch(t2, () => nextTick().then(() => u2()), { immediate: true });
  }), () => h$1("div", { class: "kotlin-playground-wrapper" }, [a2.title ? h$1("div", { class: "header" }, decodeURIComponent(a2.title)) : null, h$1("div", { class: "kotlin-playground-container", key: t2.value ? "dark" : "light" }, h$1("div", { class: "kotlin-playground", ref: r2, ...i2.value }, [h$1("pre", l2.value[0]), l2.value.length > 1 ? l2.value.map((n2, s2) => s2 === 0 ? null : h$1("textarea", { class: "hidden-dependency", readonly: "" }, n2)) : null]))]);
} });
var b$2 = defineComponent({ name: "MarkMap", props: { id: { type: String, required: true }, content: { type: String, required: true } }, setup(a2) {
  const n2 = ref(true), i2 = shallowRef(), m2 = shallowRef();
  let e2 = null;
  return useEventListener("resize", useDebounceFn(() => {
    e2 == null ? void 0 : e2.fit();
  }, 100)), onMounted(() => {
    Promise.all([import("markmap-lib"), import("markmap-toolbar"), import("markmap-view"), new Promise((r2) => setTimeout(r2, 800))]).then(async ([{ Transformer: r2 }, { Toolbar: p2 }, { Markmap: l2, deriveOptions: d2 }]) => {
      const u2 = new r2(), { frontmatter: f2, root: c2 } = u2.transform(decodeData(a2.content));
      e2 = l2.create(m2.value, d2({ maxWidth: 240, ...f2 == null ? void 0 : f2.markmap }));
      const { el: t2 } = p2.create(e2);
      e2.setData(c2), await e2.fit(), t2.style.position = "absolute", t2.style.bottom = "0.5rem", t2.style.right = "0.5rem", i2.value.append(t2), n2.value = false;
    });
  }), onUnmounted(() => {
    e2 == null ? void 0 : e2.destroy();
  }), () => h$1("div", { class: "markmap-wrapper", ref: i2 }, [h$1("svg", { ref: m2, class: "markmap-svg", id: a2.id }), n2.value ? h$1(E$3, { class: "markmap-loading", height: 360 }) : null]);
} });
const a = { useMaxWidth: false }, L$1 = (e2) => ({ dark: e2, background: e2 ? "#1e1e1e" : "#fff", primaryColor: e2 ? "#389d70" : "#4abf8a", primaryBorderColor: e2 ? "#389d70" : "#4abf8a", primaryTextColor: e2 ? "#fff" : "#000", secondaryColor: "#ffb500", secondaryBorderColor: e2 ? "#fff" : "#000", secondaryTextColor: e2 ? "#ddd" : "#333", tertiaryColor: e2 ? "#282828" : "#efeef4", tertiaryBorderColor: e2 ? "#bbb" : "#242424", tertiaryTextColor: e2 ? "#ddd" : "#333", noteBkgColor: e2 ? "#f6d365" : "#fff5ad", noteTextColor: "#242424", noteBorderColor: e2 ? "#f6d365" : "#333", lineColor: e2 ? "#d3d3d3" : "#333", textColor: e2 ? "#fff" : "#242424", mainBkg: e2 ? "#389d70" : "#4abf8a", errorBkgColor: "#eb4d5d", errorTextColor: "#fff", nodeBorder: e2 ? "#389d70" : "#4abf8a", nodeTextColor: e2 ? "#fff" : "#242424", signalTextColor: e2 ? "#9e9e9e" : "#242424", classText: "#fff", labelColor: "#fff", attributeBackgroundColorEven: e2 ? "#0d1117" : "#fff", attributeBackgroundColorOdd: e2 ? "#161b22" : "#f8f8f8", fillType0: e2 ? "#cf1322" : "#f1636e", fillType1: "#f39c12", fillType2: "#2ecc71", fillType3: "#fa541c", fillType4: "#25a55b", fillType5: "#13c2c2", fillType6: "#096dd9", fillType7: "#aa6fe9" });
var E$1 = defineComponent({ name: "Mermaid", props: { id: { type: String, required: true }, code: { type: String, required: true }, title: { type: String, default: "" } }, setup(e2) {
  const { themeVariables: d2, ...p2 } = r$1(), u2 = shallowRef(), g2 = computed(() => decodeData(e2.code)), l2 = ref(""), i2 = ref(false);
  let c2 = false;
  const n2 = async () => {
    const [{ default: t2 }] = await Promise.all([import("mermaid"), c2 ? Promise.resolve() : (c2 = true, new Promise((r2) => setTimeout(r2, 800)))]);
    t2.initialize({ theme: "base", themeVariables: { ...L$1(i2.value), ...isFunction(d2) ? d2(i2.value) : d2 }, flowchart: a, sequence: a, journey: a, gantt: a, er: a, pie: a, ...p2, startOnLoad: false }), l2.value = (await t2.render(e2.id, g2.value)).svg;
  }, v2 = () => {
    const { body: t2 } = document, r2 = document.createElement("div");
    r2.classList.add("mermaid-preview"), r2.innerHTML = l2.value, t2.appendChild(r2), r2.addEventListener("click", () => {
      t2.removeChild(r2);
    });
  }, b2 = () => {
    const t2 = `data:image/svg+xml;charset=utf8,${l2.value.replace(/<br>/g, "<br />").replace(/%/g, "%25").replace(/"/g, "%22").replace(/'/g, "%27").replace(/&/g, "%26").replace(/#/g, "%23").replace(/{/g, "%7B").replace(/}/g, "%7D").replace(/</g, "%3C").replace(/>/g, "%3E")}`, r2 = document.createElement("a");
    r2.setAttribute("href", t2), r2.setAttribute("download", `${e2.title ? decodeData(e2.title) : e2.id}.svg`), r2.click();
  };
  return onMounted(() => {
    i2.value = e$4(), n2(), useMutationObserver(document.documentElement, () => {
      i2.value = e$4();
    }, { attributeFilter: ["class", "data-theme"], attributes: true }), watch(i2, () => n2());
  }), () => [h$1("div", { class: "mermaid-actions" }, [h$1("button", { class: "preview-button", onClick: () => v2(), title: "preview", innerHTML: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1316 1024" fill="currentColor"><path d="M658.286 0C415.89 0 0 297.106 0 512c0 214.82 415.89 512 658.286 512 242.322 0 658.285-294.839 658.285-512S900.608 0 658.286 0zm0 877.714c-161.573 0-512-221.769-512-365.714 0-144.018 350.427-365.714 512-365.714 161.572 0 512 217.16 512 365.714s-350.428 365.714-512 365.714z"/><path d="M658.286 292.571a219.429 219.429 0 1 0 0 438.858 219.429 219.429 0 0 0 0-438.858zm0 292.572a73.143 73.143 0 1 1 0-146.286 73.143 73.143 0 0 1 0 146.286z"/></svg>' }), h$1("button", { class: "download-button", onClick: () => b2(), title: "download", innerHTML: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" fill="currentColor"><path d="M828.976 894.125H190.189c-70.55 0-127.754-57.185-127.754-127.753V606.674c0-17.634 14.31-31.933 31.933-31.933h63.889c17.634 0 31.932 14.299 31.932 31.933v95.822c0 35.282 28.596 63.877 63.877 63.877h511.033c35.281 0 63.877-28.595 63.877-63.877v-95.822c0-17.634 14.298-31.933 31.943-31.933h63.878c17.635 0 31.933 14.299 31.933 31.933v159.7c0 70.566-57.191 127.751-127.754 127.751zM249.939 267.51c12.921-12.92 33.885-12.92 46.807 0l148.97 148.972V94.893c0-17.634 14.302-31.947 31.934-31.947h63.876c17.638 0 31.946 14.313 31.946 31.947v321.589l148.97-148.972c12.922-12.92 33.876-12.92 46.797 0l46.814 46.818c12.922 12.922 12.922 33.874 0 46.807L552.261 624.93c-1.14 1.138-21.664 13.684-42.315 13.693-20.877.01-41.88-12.542-43.021-13.693L203.122 361.135c-12.923-12.934-12.923-33.885 0-46.807l46.817-46.818z"/></svg>' })]), h$1("div", { ref: u2, class: "mermaid-wrapper" }, l2.value ? h$1("div", { class: "mermaid-content", innerHTML: l2.value }) : h$1(E$3, { class: "mermaid-loading", height: 96 }))];
} });
const d$1 = ({ title: o2 = "", link: n2 }) => h$1("div", { class: "vp-playground" }, [h$1("div", { class: "vp-playground-header" }, [o2 ? h$1("div", { class: "vp-playground-title" }, decodeURIComponent(o2)) : null, h$1("div", { class: "vp-playground-actions" }, [h$1("a", { class: "vp-playground-action", href: decodeURIComponent(n2), target: "_blank", innerHTML: l$1 })])]), h$1("div", { class: "vp-playground-container" }, h$1("iframe", { src: decodeURIComponent(n2) }))]);
d$1.displayName = "Playground";
const useRevealJs = () => [
  import(
    /* webpackChunkName: "reveal" */
    "./assets/reveal.esm-B5cb0hcl.js"
  ),
  import(
    /* webpackChunkName: "reveal" */
    "./assets/markdown.esm-C_Jy6j3p.js"
  ),
  import(
    /* webpackChunkName: "reveal" */
    "./assets/highlight.esm-CxLjEwF0.js"
  ),
  import(
    /* webpackChunkName: "reveal" */
    "./assets/math.esm-fwe-LwLv.js"
  ),
  import(
    /* webpackChunkName: "reveal" */
    "./assets/search.esm-BIRcQfQH.js"
  ),
  import(
    /* webpackChunkName: "reveal" */
    "./assets/notes.esm-k2SwylhJ.js"
  ),
  import(
    /* webpackChunkName: "reveal" */
    "./assets/zoom.esm-Cl8Up_sx.js"
  )
];
var N$1 = defineComponent({ name: "RevealJs", props: { id: { type: String, required: true }, code: { type: String, required: true }, theme: { type: String, default: "auto" } }, setup(r2) {
  const o2 = t$1(), t2 = usePageFrontmatter(), l2 = ref(""), s2 = ref(true), n2 = shallowRef();
  let u2 = null;
  const p2 = async (e2) => {
    const v2 = [new Promise((i2) => setTimeout(i2, 800)), ...useRevealJs()], [, c2, ...f2] = await Promise.all(v2), d2 = new c2.default(e2, { backgroundTransition: "slide", hash: t2.value.layout === "Slide", mouseWheel: t2.value.layout === "Slide", transition: "slide", slideNumber: true, ...o2, ...t2.value.revealJs, embedded: t2.value.layout !== "Slide", markdown: { separator: `^\r?\\n---\r?
$`, verticalSeparator: `^\r?
--\r?
$` }, plugins: [f2.map(({ default: i2 }) => i2), o2.plugins ?? []].flat() });
    return await d2.initialize(), d2;
  };
  return onMounted(async () => {
    const e2 = n2.value;
    e2 && (l2.value = decodeData(r2.code), e2.setAttribute("id", r2.id), e2.setAttribute("data-theme", r2.theme), u2 = await p2(e2), s2.value = false);
  }), onUnmounted(() => {
    u2 == null ? void 0 : u2.destroy();
  }), () => h$1("div", { class: "vp-reveal" }, [h$1("div", { ref: n2, class: ["reveal", "reveal-viewport"] }, h$1("div", { class: "slides", innerHTML: `<section data-markdown><script type="text/template">${l2.value}<\/script></section>` })), s2.value ? h$1(E$3, { class: "reveal-loading", height: 400 }) : null]);
} });
const n = useStorage("VUEPRESS_TAB_STORE", {});
var A$1 = defineComponent({ name: "Tabs", props: { active: { type: Number, default: 0 }, data: { type: Array, required: true }, id: { type: String, required: true }, tabId: { type: String, default: "" } }, slots: Object, setup(a2, { slots: d2 }) {
  const l2 = ref(a2.active), u2 = shallowRef([]), s2 = () => {
    a2.tabId && (n.value[a2.tabId] = a2.data[l2.value].id);
  }, o2 = (e2 = l2.value) => {
    l2.value = e2 < u2.value.length - 1 ? e2 + 1 : 0, u2.value[l2.value].focus();
  }, c2 = (e2 = l2.value) => {
    l2.value = e2 > 0 ? e2 - 1 : u2.value.length - 1, u2.value[l2.value].focus();
  }, b2 = (e2, t2) => {
    e2.key === " " || e2.key === "Enter" ? (e2.preventDefault(), l2.value = t2) : e2.key === "ArrowRight" ? (e2.preventDefault(), o2()) : e2.key === "ArrowLeft" && (e2.preventDefault(), c2()), s2();
  }, p2 = () => {
    if (a2.tabId) {
      const e2 = a2.data.findIndex(({ id: t2 }) => n.value[a2.tabId] === t2);
      if (e2 !== -1) return e2;
    }
    return a2.active;
  };
  return onMounted(() => {
    l2.value = p2(), watch(() => n.value[a2.tabId], (e2, t2) => {
      if (a2.tabId && e2 !== t2) {
        const i2 = a2.data.findIndex(({ id: v2 }) => v2 === e2);
        i2 !== -1 && (l2.value = i2);
      }
    });
  }), () => a2.data.length ? h$1("div", { class: "vp-tabs" }, [h$1("div", { class: "vp-tabs-nav", role: "tablist" }, a2.data.map(({ id: e2 }, t2) => {
    const i2 = t2 === l2.value;
    return h$1("button", { type: "button", ref: (v2) => {
      v2 && (u2.value[t2] = v2);
    }, class: ["vp-tab-nav", { active: i2 }], role: "tab", "aria-controls": `tab-${a2.id}-${t2}`, "aria-selected": i2, onClick: () => {
      l2.value = t2, s2();
    }, onKeydown: (v2) => b2(v2, t2) }, d2[`title${t2}`]({ value: e2, isActive: i2 }));
  })), a2.data.map(({ id: e2 }, t2) => {
    const i2 = t2 === l2.value;
    return h$1("div", { class: ["vp-tab", { active: i2 }], id: `tab-${a2.id}-${t2}`, role: "tabpanel", "aria-expanded": i2 }, [h$1("div", { class: "vp-tab-title" }, d2[`title${t2}`]({ value: e2, isActive: i2 })), d2[`tab${t2}`]({ value: e2, isActive: i2 })]);
  })]) : null;
} });
const b$1 = (e2) => JSON.parse(decodeURIComponent(e2));
var O$1 = defineComponent({ name: "VuePlayground", props: { title: { type: String, default: "" }, files: { type: String, required: true }, settings: { type: String, default: "{}" } }, setup(e2) {
  const { vueVersion: t2 = version, vueRuntimeDevUrl: l2 = `https://unpkg.com/@vue/runtime-dom@${t2}/dist/runtime-dom.esm-browser.js`, vueRuntimeProdUrl: a2 = `https://unpkg.com/@vue/runtime-dom@${t2}/dist/runtime-dom.esm-browser.prod.js`, vueServerRendererUrl: p2 = `https://unpkg.com/@vue/server-renderer@${t2}/dist/server-renderer.esm-browser.js`, ...m2 } = s(), u2 = ref(true), o2 = shallowRef(), s$12 = shallowRef(), i2 = shallowRef(), d2 = computed(() => deepAssign({}, m2, b$1(e2.settings))), v2 = async () => {
    const [{ useStore: c2, useVueImportMap: g2, Repl: f2 }, { default: R2 }] = await Promise.all([import("@vue/repl"), import("@vue/repl/codemirror-editor")]);
    o2.value = f2, i2.value = R2;
    const { importMap: y2, vueVersion: h2 } = g2({ runtimeDev: l2, runtimeProd: a2, serverRenderer: p2 });
    s$12.value = c2({ builtinImportMap: y2, vueVersion: h2 }, decodeURIComponent(e2.files));
  };
  return onMounted(async () => {
    await v2(), u2.value = false;
  }), () => [h$1("div", { class: "vue-playground-wrapper" }, [e2.title ? h$1("div", { class: "header" }, decodeURIComponent(e2.title)) : null, h$1("div", { class: "repl-container" }, [u2.value ? h$1(E$3, { class: "preview-loading", height: 192 }) : null, o2.value ? h$1(o2.value, { ...d2.value, editor: i2.value, store: s$12.value }) : null])])];
} });
const config$3 = defineClientConfig({
  enhance: ({ app }) => {
    app.component("ChartJS", E$2);
    app.component("CodeTabs", A$3);
    app.component("CodeDemo", se);
    app.component("MdDemo", v$1);
    app.component("ECharts", w$1);
    r$2(app);
    app.component("FlowChart", y);
    r(app);
    app.component("KotlinPlayground", k$1);
    app.component("MarkMap", b$2);
    t$2(app);
    app.component("Mermaid", E$1);
    app.component("Playground", d$1);
    a$4(app);
    app.component("RevealJs", N$1);
    app.component("Tabs", A$1);
    p(app);
    app.component(
      "SandPack",
      defineAsyncComponent({
        loader: () => import("./assets/SandPack-CKBZT7dA.js"),
        loadingComponent: E$3
      })
    );
    a$2(app);
    app.component("VuePlayground", O$1);
  },
  setup: () => {
    o();
  }
});
const clientConfig10 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: config$3
}, Symbol.toStringTag, { value: "Module" }));
const photoswipeOptions = ref({});
const photoswipeSymbol = Symbol("");
const usePhotoSwipeOptions = () => inject(photoswipeSymbol);
const injectPhotoSwipeConfig = (app) => {
  app.provide(photoswipeSymbol, photoswipeOptions);
};
const LOADING_ICON = '<div class="photo-swipe-loading"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" preserveAspectRatio="xMidYMid" viewBox="25 25 50 50"><animateTransform attributeName="transform" type="rotate" dur="2s" keyTimes="0;1" repeatCount="indefinite" values="0;360"></animateTransform><circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"><animate attributeName="stroke-dasharray" dur="1.5s" keyTimes="0;0.5;1" repeatCount="indefinite" values="1,200;90,200;1,200"></animate><animate attributeName="stroke-dashoffset" dur="1.5s" keyTimes="0;0.5;1" repeatCount="indefinite" values="0;-35px;-125px"></animate></circle></svg></div>';
const getImages = (selector2) => isString(selector2) ? Array.from(document.querySelectorAll(selector2)) : selector2.map((item) => Array.from(document.querySelectorAll(item))).flat();
const getImageElementInfo = (image) => new Promise((resolve, reject) => {
  if (image.complete) {
    resolve({
      type: "image",
      element: image,
      src: image.src,
      width: image.naturalWidth,
      height: image.naturalHeight,
      alt: image.alt,
      msrc: image.src
    });
  } else {
    image.onload = () => resolve(getImageElementInfo(image));
    image.onerror = (err2) => reject(err2);
  }
});
const initPhotoSwipe = (photoSwipe, { download: download2 = true, fullscreen: fullscreen2 = true } = {}) => {
  photoSwipe.on("uiRegister", () => {
    photoSwipe.ui.registerElement({
      name: "bulletsIndicator",
      className: "photo-swipe-bullets-indicator",
      appendTo: "wrapper",
      onInit: (el, photoSwipe2) => {
        const bullets = [];
        let prevIndex = -1;
        for (let i2 = 0; i2 < photoSwipe2.getNumItems(); i2++) {
          const bullet = document.createElement("div");
          bullet.className = "photo-swipe-bullet";
          bullet.onclick = (event) => {
            photoSwipe2.goTo(bullets.indexOf(event.target));
          };
          bullets.push(bullet);
          el.appendChild(bullet);
        }
        photoSwipe2.on("change", () => {
          if (prevIndex >= 0)
            bullets[prevIndex].classList.remove("active");
          bullets[photoSwipe2.currIndex].classList.add("active");
          prevIndex = photoSwipe2.currIndex;
        });
      }
    });
    if (fullscreen2) {
      const { isSupported, toggle } = useFullscreen();
      if (isSupported.value)
        photoSwipe.ui.registerElement({
          name: "fullscreen",
          order: 7,
          isButton: true,
          html: '<svg class="pswp__icn" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M249.5 270.833H437v-75H212a37.5 37.5 0 0 0-37.5 37.5v225h75v-187.5zm-37.5 600h225v-75H249.5v-187.5h-75v225a37.5 37.5 0 0 0 37.5 37.5zm637.5-37.5v-225h-75v187.5H587v75h225a37.5 37.5 0 0 0 37.5-37.5zM587 270.833h187.5v187.5h75v-225a37.5 37.5 0 0 0-37.5-37.5H587v75z"/></svg>',
          onClick: () => {
            toggle();
          }
        });
    }
    if (download2) {
      photoSwipe.ui.registerElement({
        name: "download",
        order: 8,
        isButton: true,
        tagName: "a",
        // SVG with outline
        html: {
          isCustomSVG: true,
          inner: '<path d="M20.5 14.3 17.1 18V10h-2.2v7.9l-3.4-3.6L10 16l6 6.1 6-6.1-1.5-1.6ZM23 23H9v2h14" id="pswp__icn-download"/>',
          outlineID: "pswp__icn-download"
        },
        onInit: (el, photoSwipe2) => {
          el.setAttribute("download", "");
          el.setAttribute("target", "_blank");
          el.setAttribute("rel", "noopener");
          photoSwipe2.on("change", () => {
            el.setAttribute("href", photoSwipe2.currSlide.data.src);
          });
        }
      });
    }
  });
};
const registerPhotoSwipe = (images, { scrollToClose: scrollToClose2 = true, download: download2 = true, fullscreen: fullscreen2 = true, ...photoSwipeOptions }) => import(
  /* webpackChunkName: "photo-swipe" */
  "./assets/photoswipe.esm-Bp9IAFhl.js"
).then(({ default: PhotoSwipe }) => {
  let currentPhotoSwipe = null;
  const dataSource = images.map((image) => ({
    html: LOADING_ICON,
    element: image,
    msrc: image.src
  }));
  images.forEach((image, index) => {
    const handler = () => {
      currentPhotoSwipe == null ? void 0 : currentPhotoSwipe.destroy();
      currentPhotoSwipe = new PhotoSwipe({
        preloaderDelay: 0,
        showHideAnimationType: "zoom",
        ...photoSwipeOptions,
        dataSource,
        index,
        ...scrollToClose2 ? { closeOnVerticalDrag: true, wheelToZoom: false } : {}
      });
      initPhotoSwipe(currentPhotoSwipe, { download: download2, fullscreen: fullscreen2 });
      currentPhotoSwipe.addFilter("thumbEl", () => image);
      currentPhotoSwipe.addFilter("placeholderSrc", () => image.src);
      currentPhotoSwipe.init();
    };
    if (!image.getAttribute("photo-swipe")) {
      image.style.cursor = "zoom-in";
      image.addEventListener("click", () => {
        handler();
      });
      image.addEventListener("keypress", ({ key }) => {
        if (key === "Enter")
          handler();
      });
      image.setAttribute("photo-swipe", "");
    }
    getImageElementInfo(image).then((data) => {
      dataSource.splice(index, 1, data);
      currentPhotoSwipe == null ? void 0 : currentPhotoSwipe.refreshSlideContent(index);
    });
  });
  return scrollToClose2 ? useEventListener("wheel", () => {
    currentPhotoSwipe == null ? void 0 : currentPhotoSwipe.close();
  }) : () => {
  };
});
const usePhotoSwipe = ({ selector: selector2, locales: locales2, delay: delay2 = 500, download: download2 = true, fullscreen: fullscreen2 = true, scrollToClose: scrollToClose2 = true }) => {
  const photoSwipeOptions = usePhotoSwipeOptions();
  const locale = useLocaleConfig(locales2);
  const page = usePageData();
  const frontmatter = usePageFrontmatter();
  let destroy = null;
  const setupPhotoSwipe = () => {
    const { photoSwipe } = frontmatter.value;
    if (photoSwipe !== false)
      nextTick().then(() => wait(delay2)).then(async () => {
        const imageSelector = isString(photoSwipe) ? photoSwipe : selector2;
        destroy = await registerPhotoSwipe(getImages(imageSelector), {
          ...photoSwipeOptions.value,
          ...locale.value,
          download: download2,
          fullscreen: fullscreen2,
          scrollToClose: scrollToClose2
        });
      });
  };
  onMounted(() => {
    setupPhotoSwipe();
    watch(() => [page.value.path, photoSwipeOptions.value], () => {
      destroy == null ? void 0 : destroy();
      setupPhotoSwipe();
    });
  });
  onUnmounted(() => {
    destroy == null ? void 0 : destroy();
  });
};
var define_PS_LOCALES_default = { "/zh/": { closeTitle: "关闭", downloadTitle: "下载图片", fullscreenTitle: "切换全屏", zoomTitle: "缩放", arrowPrevTitle: "上一个 (左箭头)", arrowNextTitle: "下一个 (右箭头)" }, "/": { closeTitle: "Close", downloadTitle: "Download Image", fullscreenTitle: "Switch to fullscreen", zoomTitle: "Zoom in/out", arrowPrevTitle: "Prev (Arrow Left)", arrowNextTitle: "Next (Arrow Right)" } };
const selector = ".theme-hope-content :not(a) > img:not([no-view])";
const locales$1 = define_PS_LOCALES_default;
const delay = 800;
const download = true;
const fullscreen = true;
const scrollToClose = true;
const config$2 = defineClientConfig({
  enhance: ({ app }) => {
    injectPhotoSwipeConfig(app);
  },
  setup: () => {
    usePhotoSwipe({
      selector,
      delay,
      locales: locales$1,
      download,
      fullscreen,
      scrollToClose
    });
  }
});
const clientConfig11 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: config$2
}, Symbol.toStringTag, { value: "Module" }));
const skipWaiting = (registration) => {
  const worker = registration.waiting;
  if (!worker)
    return;
  const channel = new MessageChannel();
  worker.postMessage({ type: "SKIP_WAITING" }, [channel.port2]);
};
const pwaEventSymbol = Symbol("");
const usePwaEvent = () => {
  const pwaEvent = inject(pwaEventSymbol);
  if (!pwaEvent)
    throw new Error("usePwaEvent() is called without provider.");
  return pwaEvent;
};
const setupViewPoint = () => {
  onMounted(() => {
    const isStandAlone = window.matchMedia("(display-mode: standalone)").matches;
    if (isStandAlone) {
      const head = document.head.querySelector('meta[name="viewport"]');
      if (head) {
        head.setAttribute("content", "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover");
        return;
      }
      const viewportMeta = document.createElement("meta");
      viewportMeta.name = "viewport";
      viewportMeta.content = "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover";
      document.head.appendChild(viewportMeta);
    }
  });
};
const SVGWrapper = ({ name = "", color = "currentColor" }, { slots }) => {
  var _a2;
  return h$1("svg", {
    "xmlns": "http://www.w3.org/2000/svg",
    "class": ["icon", `${name}-icon`],
    "viewBox": "0 0 1024 1024",
    "fill": color,
    "aria-label": `${name} icon`
  }, (_a2 = slots.default) == null ? void 0 : _a2.call(slots));
};
SVGWrapper.displayName = "SVGWrapper";
const UpdateIcon = () => h$1(SVGWrapper, { name: "update" }, () => h$1("path", {
  d: "M949.949 146.25v255.826c0 21.981-13.989 35.97-35.97 35.97H658.154c-13.988 0-25.983-7.992-33.973-21.981-5.997-13.989-4-27.977 7.991-39.97l79.942-77.946c-55.954-51.973-121.918-77.955-199.863-77.955-37.975 0-75.95 8.002-113.924 21.99-37.975 15.985-67.948 37.976-91.934 63.957-25.982 23.987-47.973 53.96-63.957 91.934-29.983 73.955-29.983 153.895 0 227.85 15.984 37.976 37.975 67.947 63.957 91.934 23.986 25.982 53.959 47.973 91.934 63.956 37.974 13.989 75.95 21.991 113.924 21.991 45.967 0 87.942-9.998 127.913-29.982 41.976-17.99 75.951-45.967 101.931-83.943 7.993-4 11.994-5.995 13.989-5.995 5.997 0 9.998 1.994 13.988 5.995l77.958 77.946c3.989 4 5.986 7.993 5.986 11.994 0 1.994-1.996 5.995-3.99 11.994-43.973 51.962-93.941 91.934-151.9 117.914-53.958 25.983-115.92 39.972-185.874 39.972-61.961 0-119.921-11.984-169.89-33.973-57.96-25.985-105.923-57.963-139.896-93.943-35.98-33.972-67.958-81.936-93.94-139.897-45.967-101.93-45.967-237.846 0-339.777 25.982-57.96 57.96-105.923 93.94-139.896 33.973-35.98 81.936-67.958 139.896-93.94 49.968-21.99 107.928-33.974 169.89-33.974 55.963 0 109.923 9.988 161.885 29.973 53.97 21.99 101.933 51.963 139.908 89.938l73.954-73.944c9.987-9.998 23.987-13.988 39.971-8.002 13.988 8.002 21.98 19.995 21.98 33.984z"
}));
UpdateIcon.displayName = "UpdateIcon";
const PwaReadyPopup$1 = defineComponent({
  name: "PwaReadyPopup",
  props: {
    /** locale data */
    locales: {
      type: Object,
      required: true
    }
  },
  slots: Object,
  setup(props, { slots }) {
    const locale = useLocaleConfig(props.locales);
    const registration = shallowRef();
    const isReady = computed(() => Boolean(registration.value));
    const reload = () => {
      if (registration.value) {
        skipWaiting(registration.value);
        registration.value = void 0;
      }
    };
    onMounted(() => {
      const event = usePwaEvent();
      event.on("updated", (reg) => {
        if (reg)
          registration.value = reg;
      });
    });
    return () => h$1(Transition, { name: "popup" }, () => {
      var _a2;
      return ((_a2 = slots.default) == null ? void 0 : _a2.call(slots, {
        isReady: isReady.value,
        reload
      })) || (isReady.value ? h$1("button", {
        type: "button",
        class: "sw-update-popup",
        tabindex: 0,
        onClick: () => reload()
      }, [
        locale.value.update,
        h$1("span", { class: "icon-wrapper" }, h$1(UpdateIcon))
      ]) : null);
    });
  }
});
var define_PWA_LOCALES_default = { "/zh/": { install: "安装", iOSInstall: "点击分享按钮然后点击“添加到主屏幕”", cancel: "取消", close: "关闭", prevImage: "上一张图片", nextImage: "下一张图片", desc: "详情", feature: "主要特色", explain: "该应用可以安装在你的 PC 或移动设备上。这将使该 Web 应用程序外观和行为与其他应用程序相同。它将在出现在应用程序列表中，并可以固定到主屏幕，开始菜单或任务栏。此 Web 应用程序还将能够与其他应用程序和你的操作系统安全地进行交互。", hint: "发现新内容可用", update: "新内容已就绪" }, "/": { install: "Install", iOSInstall: "Tap the share button and then 'Add to Home Screen'", cancel: "Cancel", close: "Close", prevImage: "Previous Image", nextImage: "Next Image", desc: "Description", feature: "Key Features", explain: "This app can be installed on your PC or mobile device.  This will allow this web app to look and behave like any other installed app.  You will find it in your app lists and be able to pin it to your home screen, start menus or task bars.  This installed web app will also be able to safely interact with other apps and your operating system. ", hint: "New content found.", update: "New content is available." } };
const locales = define_PWA_LOCALES_default;
const PwaReadyPopup = () => h$1(PwaReadyPopup$1, { locales });
const config$1 = defineClientConfig({
  setup: () => {
    setupViewPoint();
  },
  rootComponents: [
    PwaReadyPopup
  ]
});
const clientConfig12 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: config$1
}, Symbol.toStringTag, { value: "Module" }));
const HopeIcon = (props) => {
  const { icon = "", color, size } = props;
  const style = color || size ? {} : null;
  if (color)
    style["color"] = color;
  if (size)
    style["height"] = Number.isNaN(Number(size)) ? size : `${size}px`;
  return isLinkHttp(icon) ? h$1("img", {
    class: "icon",
    src: icon,
    alt: "",
    "no-view": "",
    style
  }) : isLinkAbsolute(icon) ? h$1("img", {
    class: "icon",
    src: withBase(icon),
    alt: "",
    "aria-hidden": "",
    "no-view": "",
    style
  }) : h$1(resolveComponent("FontIcon"), props);
};
HopeIcon.displayName = "HopeIcon";
const useAuthorInfo = () => {
  const themeLocale = useThemeLocaleData();
  return computed(() => themeLocale.value.author);
};
const FAKE_HOST = "http://.";
const useNavigate = () => {
  const router = useRouter();
  const route = useRoute();
  return (url) => {
    if (url)
      if (isLinkAbsolute(url)) {
        if (route.path !== url)
          void router.push(url);
      } else if (isLinkWithProtocol(url)) {
        if (window)
          window.open(url);
      } else {
        const loc = route.path.slice(0, route.path.lastIndexOf("/"));
        void router.push(new URL(`${loc}/${encodeURI(url)}`, FAKE_HOST).pathname);
      }
  };
};
const useReadingTimeData = () => {
  const page = usePageData();
  return computed(() => page.value.readingTime ?? null);
};
const getReadingTimeLocale = (readingTime, locale) => {
  const { minutes, words } = readingTime;
  const { less1Minute, word, time } = locale;
  return {
    time: minutes < 1 ? less1Minute : time.replace("$time", Math.round(minutes).toString()),
    words: word.replace("$word", words.toString())
  };
};
var define_READING_TIME_LOCALES_default = { "/zh/": { word: "约 $word 字", less1Minute: "小于 1 分钟", time: "大约 $time 分钟" }, "/": { word: "About $word words", less1Minute: "Less than 1 minute", time: "About $time min" } };
const DEFAULT_LOCALE = { words: "", time: "" };
const readingTimeLocales = typeof define_READING_TIME_LOCALES_default === "undefined" ? null : define_READING_TIME_LOCALES_default;
const useReadingTimeLocaleConfig = () => readingTimeLocales ? useLocaleConfig(readingTimeLocales) : computed(() => null);
const useReadingTimeLocale = () => {
  if (typeof readingTimeLocales === "undefined")
    return computed(() => DEFAULT_LOCALE);
  const readingTime = useReadingTimeData();
  const readingTimeLocale = useReadingTimeLocaleConfig();
  return computed(() => readingTime.value && readingTimeLocale.value ? getReadingTimeLocale(readingTime.value, readingTimeLocale.value) : DEFAULT_LOCALE);
};
const useThemeData = () => useThemeData$1();
const useThemeLocaleData = () => useThemeLocaleData$1();
const usePageAuthor = () => {
  const frontmatter = usePageFrontmatter();
  const authorInfo = useAuthorInfo();
  return computed(() => {
    const { author } = frontmatter.value;
    if (author)
      return i1(author);
    if (author === false)
      return [];
    return i1(authorInfo.value, false);
  });
};
const usePageCategory = () => {
  const frontmatter = usePageFrontmatter();
  const categoryMap = inject(Symbol.for("categoryMap"));
  return computed(() => o1(frontmatter.value.category ?? frontmatter.value.categories).map((name) => {
    var _a2;
    return {
      name,
      path: ((_a2 = categoryMap == null ? void 0 : categoryMap.value.map[name]) == null ? void 0 : _a2.path) ?? ""
    };
  }));
};
const usePageTag = () => {
  const frontmatter = usePageFrontmatter();
  const tagMap = inject(Symbol.for("tagMap"));
  return computed(() => s1(frontmatter.value.tag ?? frontmatter.value.tags).map((name) => {
    var _a2;
    return {
      name,
      path: ((_a2 = tagMap == null ? void 0 : tagMap.value.map[name]) == null ? void 0 : _a2.path) ?? ""
    };
  }));
};
const usePageDate = () => {
  const frontmatter = usePageFrontmatter();
  const page = usePageData();
  return computed(() => {
    const date = getDate(frontmatter.value.date);
    if (date)
      return date;
    const { createdTime } = page.value.git ?? {};
    if (createdTime)
      return new Date(createdTime);
    return null;
  });
};
const usePageInfo = () => {
  const themeLocale = useThemeLocaleData();
  const page = usePageData();
  const frontmatter = usePageFrontmatter();
  const author = usePageAuthor();
  const category = usePageCategory();
  const tag = usePageTag();
  const date = usePageDate();
  const readingTimeData = useReadingTimeData();
  const readingTimeLocale = useReadingTimeLocale();
  const info = computed(() => ({
    author: author.value,
    category: category.value,
    date: date.value,
    localizedDate: page.value.localizedDate,
    tag: tag.value,
    isOriginal: frontmatter.value.isOriginal ?? false,
    readingTime: readingTimeData.value,
    readingTimeLocale: readingTimeLocale.value,
    pageview: frontmatter.value.pageview ?? true
  }));
  const items = computed(() => frontmatter.value.pageInfo ?? themeLocale.value.pageInfo ?? null);
  return { info, items };
};
const usePure = () => {
  const themeData2 = useThemeData();
  return computed(() => Boolean(themeData2.value.pure));
};
const isActiveItem = (route, item) => "activeMatch" in item ? new RegExp(item.activeMatch, "u").test(route.path) : Z$1(route, item.link);
const isActiveSidebarItem = (route, item) => "children" in item ? Boolean(item.prefix) && Z$1(route, item.prefix) || item.children.some((child) => isActiveSidebarItem(route, child)) : isActiveItem(route, item);
const sidebarData = { "/zh/demo/": ["layout", "markdown", "page", "disable", "encrypt"], "/zh/posts/": ["strawberry", "tomato", "dragonfruit", "cherry", { "text": "Apple", "prefix": "apple/", "collapsible": true, "children": ["1", "2", "3", "4"] }, { "text": "Banana", "prefix": "banana/", "collapsible": true, "children": ["1", "2", "3", "4"] }], "/demo/": ["markdown", "layout", "page", "disable", "encrypt"], "/posts/": [{ "text": "Apple", "prefix": "apple/", "collapsible": true, "children": ["1", "2", "3", "4"] }, { "text": "Banana", "prefix": "banana/", "collapsible": true, "children": ["1", "2", "3", "4"] }, "cherry", "dragonfruit", "strawberry", "tomato"] };
const getAncestorLinks = (path, routeLocale) => {
  const routePaths = path.replace(routeLocale, "/").split("/");
  const result = [];
  let link = removeEndingSlash(routeLocale);
  routePaths.forEach((name, index) => {
    if (index !== routePaths.length - 1) {
      link += `${name}/`;
      result.push({ link, name: name || "Home" });
    } else if (name !== "") {
      link += name;
      result.push({ link, name });
    }
  });
  return result;
};
const isLinkInternal = (link) => !isLinkExternal(link) && !isLinkWithProtocol(link);
let promise = null;
let promiseResolve = null;
const scrollPromise = {
  wait: () => promise,
  pending: () => {
    promise = new Promise((resolve) => {
      promiseResolve = resolve;
    });
  },
  resolve: () => {
    promiseResolve == null ? void 0 : promiseResolve();
    promise = null;
    promiseResolve = null;
  }
};
var PageInfo$1;
(function(PageInfo2) {
  PageInfo2["title"] = "t";
  PageInfo2["shortTitle"] = "s";
  PageInfo2["icon"] = "i";
  PageInfo2["index"] = "I";
  PageInfo2["order"] = "O";
  PageInfo2["breadcrumbExclude"] = "b";
})(PageInfo$1 || (PageInfo$1 = {}));
var ArticleInfo;
(function(ArticleInfo2) {
  ArticleInfo2["type"] = "y";
  ArticleInfo2["author"] = "a";
  ArticleInfo2["date"] = "d";
  ArticleInfo2["localizedDate"] = "l";
  ArticleInfo2["category"] = "c";
  ArticleInfo2["tag"] = "g";
  ArticleInfo2["isEncrypted"] = "n";
  ArticleInfo2["isOriginal"] = "o";
  ArticleInfo2["readingTime"] = "r";
  ArticleInfo2["excerpt"] = "e";
  ArticleInfo2["sticky"] = "u";
  ArticleInfo2["cover"] = "v";
})(ArticleInfo || (ArticleInfo = {}));
var PageType;
(function(PageType2) {
  PageType2["article"] = "a";
  PageType2["home"] = "h";
  PageType2["slide"] = "s";
  PageType2["page"] = "p";
})(PageType || (PageType = {}));
const resolveLinkInfo = (item, preferFull = false, currentPath) => {
  const { meta, path, notFound } = resolveRoute(item, currentPath);
  return notFound ? { text: path, link: path } : {
    text: !preferFull && meta[PageInfo$1.shortTitle] ? meta[PageInfo$1.shortTitle] : meta[PageInfo$1.title] || path,
    link: path,
    ...meta[PageInfo$1.icon] ? { icon: meta[PageInfo$1.icon] } : {}
  };
};
const resolvePrefix = (prefix = "", path = "") => isLinkAbsolute(path) || isLinkWithProtocol(path) ? path : `${ensureEndingSlash(prefix)}${path}`;
const resolveSidebarItem = (item, pathPrefix) => {
  const config2 = isString(item) ? resolveLinkInfo(resolvePrefix(pathPrefix, item)) : item.link ? {
    ...item,
    link: isLinkInternal(item.link) ? resolveRoute(resolvePrefix(pathPrefix, item.link)).path : item.link
  } : item;
  if ("children" in config2) {
    const prefix = resolvePrefix(pathPrefix, config2.prefix);
    const children = config2.children === "structure" ? sidebarData[prefix] : config2.children;
    return {
      ...config2,
      prefix,
      children: children.map((item2) => resolveSidebarItem(item2, prefix))
    };
  }
  return {
    ...config2
  };
};
const resolveArraySidebarItems = ({ config: config2, prefix = "" }) => config2.map((item) => resolveSidebarItem(item, prefix));
const resolveMultiSidebarItems = ({ config: config2, routePath, headerDepth }) => {
  const sidebarRoutes = keys(config2).sort((x2, y2) => y2.length - x2.length);
  for (const base of sidebarRoutes)
    if (startsWith(decodeURI(routePath), base)) {
      const matched = config2[base];
      return resolveArraySidebarItems({
        config: matched === "structure" ? sidebarData[base] : matched || [],
        headerDepth,
        prefix: base
      });
    }
  console.warn(`${decodeURI(routePath)} is missing sidebar config.`);
  return [];
};
const resolveSidebarItems = ({ config: config2, headerDepth, routeLocale, routePath }) => (
  // Resolve sidebar items according to the config
  config2 === "structure" ? resolveArraySidebarItems({
    config: sidebarData[routeLocale],
    headerDepth,
    prefix: routeLocale
  }) : isArray(config2) ? resolveArraySidebarItems({ config: config2, headerDepth }) : isPlainObject(config2) ? resolveMultiSidebarItems({ config: config2, routePath, headerDepth }) : []
);
const sidebarItemsSymbol = Symbol("");
const setupSidebarItems = () => {
  const frontmatter = usePageFrontmatter();
  const themeLocale = useThemeLocaleData();
  const routeLocale = useRouteLocale();
  const routePath = useRoutePath();
  const sidebarOptions = computed(() => frontmatter.value.home ? false : frontmatter.value.sidebar ?? themeLocale.value.sidebar ?? "structure");
  const headerDepth = computed(() => frontmatter.value.headerDepth ?? themeLocale.value.headerDepth ?? 2);
  const sidebarItems = computed(() => resolveSidebarItems({
    config: sidebarOptions.value,
    headerDepth: headerDepth.value,
    routeLocale: routeLocale.value,
    routePath: routePath.value
  }));
  provide(sidebarItemsSymbol, sidebarItems);
};
const useSidebarItems = () => {
  const sidebarItems = inject(sidebarItemsSymbol);
  if (!sidebarItems)
    throw new Error("useSidebarItems() is called without provider.");
  return sidebarItems;
};
const resolveFromFrontmatterConfig = (config2, currentPath) => config2 === false ? config2 : isPlainObject(config2) ? {
  ...config2,
  link: resolveLinkInfo(config2.link, true, currentPath).link
} : isString(config2) ? resolveLinkInfo(config2, true, currentPath) : null;
const resolveFromSidebarItems = (sidebarItems, currentPath, offset) => {
  const linkIndex = sidebarItems.findIndex((item) => item.link === currentPath);
  if (linkIndex !== -1) {
    const targetItem = sidebarItems[linkIndex + offset];
    if (!targetItem)
      return null;
    if (targetItem.link)
      return targetItem;
    if ("prefix" in targetItem && !resolveRoute(targetItem.prefix).notFound)
      return {
        ...targetItem,
        link: targetItem.prefix
      };
    return null;
  }
  for (const item of sidebarItems)
    if ("children" in item) {
      const childResult = resolveFromSidebarItems(item.children, currentPath, offset);
      if (childResult)
        return childResult;
    }
  const prefixIndex = sidebarItems.findIndex((item) => "prefix" in item && item.prefix === currentPath);
  if (prefixIndex !== -1) {
    const targetItem = sidebarItems[prefixIndex + offset];
    if (!targetItem)
      return null;
    if (targetItem.link)
      return targetItem;
    if ("prefix" in targetItem && !resolveRoute(targetItem.prefix).notFound)
      return {
        ...targetItem,
        link: targetItem.prefix
      };
    return null;
  }
  return null;
};
const useRelatedLinks = () => {
  const frontmatter = usePageFrontmatter();
  const themeLocale = useThemeLocaleData();
  const sidebarItems = useSidebarItems();
  const route = useRoute();
  const prevLink = computed(() => {
    const prevConfig = resolveFromFrontmatterConfig(frontmatter.value.prev, route.path);
    return prevConfig === false ? null : prevConfig ?? (themeLocale.value.prevLink === false ? null : resolveFromSidebarItems(sidebarItems.value, route.path, -1));
  });
  const nextLink = computed(() => {
    const nextConfig = resolveFromFrontmatterConfig(frontmatter.value.next, route.path);
    return nextConfig === false ? null : nextConfig ?? (themeLocale.value.nextLink === false ? null : resolveFromSidebarItems(sidebarItems.value, route.path, 1));
  });
  return {
    prevLink,
    nextLink
  };
};
const mobileBreakPoint$1 = "719px";
const pcBreakPoint$1 = "1440px";
const enableThemeColor$1 = "false";
const colorNumber = "9";
const cssVariables = {
  mobileBreakPoint: mobileBreakPoint$1,
  pcBreakPoint: pcBreakPoint$1,
  enableThemeColor: enableThemeColor$1,
  colorNumber
};
const { mobileBreakPoint, pcBreakPoint } = cssVariables;
const getPixels = (length) => length.endsWith("px") ? Number(length.slice(0, -2)) : null;
const useWindowSize = () => {
  const isMobile = ref(false);
  const isPC = ref(false);
  const windowSizeHandler = () => {
    isMobile.value = window.innerWidth <= (getPixels(mobileBreakPoint) ?? 719);
    isPC.value = window.innerWidth >= (getPixels(pcBreakPoint) ?? 1440);
  };
  useEventListener("resize", windowSizeHandler, false);
  useEventListener("orientationchange", windowSizeHandler, false);
  onMounted(() => {
    windowSizeHandler();
  });
  return {
    isMobile,
    isPC
  };
};
const darkModeSymbol = Symbol("");
const useDarkmode = () => {
  const darkmode = inject(darkModeSymbol);
  if (!darkmode)
    throw new Error("useDarkmode() is called without provider.");
  return darkmode;
};
const injectDarkmode = (app) => {
  const themeData2 = useThemeData();
  const isDarkPreferred = usePreferredDark();
  const config2 = computed(() => themeData2.value.darkmode ?? "switch");
  const status = useStorage("vuepress-theme-hope-scheme", "auto");
  const isDarkmode = computed(() => {
    const darkmode = config2.value;
    return darkmode === "disable" ? false : (
      // Force darkmode
      darkmode === "enable" ? true : (
        // Auto
        darkmode === "auto" ? isDarkPreferred.value : (
          // Toggle
          darkmode === "toggle" ? status.value === "dark" : (
            // Switch
            status.value === "dark" || status.value === "auto" && isDarkPreferred.value
          )
        )
      )
    );
  });
  const canToggle = computed(() => {
    const darkmode = config2.value;
    return darkmode === "switch" || darkmode === "toggle";
  });
  app.provide(darkModeSymbol, {
    canToggle,
    config: config2,
    isDarkmode,
    status
  });
  Object.defineProperties(app.config.globalProperties, {
    $isDarkmode: { get: () => isDarkmode.value }
  });
};
const setupDarkmode = () => {
  const { config: config2, isDarkmode, status } = useDarkmode();
  watchEffect(() => {
    if (config2.value === "disable")
      status.value = "light";
    else if (config2.value === "enable")
      status.value = "dark";
    else if (config2.value === "toggle" && status.value === "auto")
      status.value = "light";
  });
  onMounted(() => {
    watch(isDarkmode, (isDarkmode2) => document.documentElement.setAttribute("data-theme", isDarkmode2 ? "dark" : "light"), { immediate: true });
  });
};
const PageFooter = defineComponent({
  name: "PageFooter",
  setup() {
    const themeData2 = useThemeData();
    const themeLocale = useThemeLocaleData();
    const frontmatter = usePageFrontmatter();
    const author = usePageAuthor();
    const enable = computed(() => {
      const { copyright: copyright2, footer } = frontmatter.value;
      return footer !== false && // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
      Boolean(copyright2 || footer || themeLocale.value.displayFooter);
    });
    const content = computed(() => {
      const { footer } = frontmatter.value;
      return footer === false ? false : isString(footer) ? footer : themeLocale.value.footer ?? "";
    });
    const authorText = computed(() => author.value.map(({ name }) => name).join(", "));
    const getCopyrightText = (license) => `Copyright © ${(/* @__PURE__ */ new Date()).getFullYear()} ${authorText.value} ${license ? `${license} Licensed` : ""}`;
    const copyright = computed(() => {
      const { copyright: copyright2, license = "" } = frontmatter.value;
      const { license: globalLicense } = themeData2.value;
      const { copyright: globalCopyright } = themeLocale.value;
      return copyright2 ?? (license ? getCopyrightText(license) : globalCopyright ?? (authorText.value || globalLicense ? getCopyrightText(globalLicense) : false));
    });
    return () => enable.value ? h$1("footer", { class: "vp-footer-wrapper" }, [
      content.value ? h$1("div", { class: "vp-footer", innerHTML: content.value }) : null,
      copyright.value ? h$1("div", {
        class: "vp-copyright",
        innerHTML: copyright.value
      }) : null
    ]) : null;
  }
});
const noopComponent = () => null;
const AutoLink = defineComponent({
  name: "AutoLink",
  props: {
    /**
     * @description Autolink config
     */
    config: {
      type: Object,
      required: true
    }
  },
  emits: ["focusout"],
  slots: Object,
  setup(props, { emit, slots }) {
    return () => {
      const { icon } = props.config;
      return h$1(AutoLink$1, {
        ...props,
        // Class needs to be merged manually
        onFocusout: () => emit("focusout")
      }, {
        default: slots.default ? () => slots.default() : null,
        before: slots.before ? () => slots.before() : icon ? () => h$1(HopeIcon, { icon }) : null,
        after: slots.after ? () => slots.after() : null
      });
    };
  }
});
const NavbarDropdown = defineComponent({
  name: "NavbarDropdown",
  props: {
    /**
     * Dropdown config
     *
     * 下拉列表配置
     */
    config: {
      type: Object,
      required: true
    }
  },
  slots: Object,
  setup(props, { slots }) {
    const page = usePageData();
    const config2 = toRef$1(props, "config");
    const dropdownAriaLabel = computed(() => config2.value.ariaLabel ?? config2.value.text);
    const open = ref(false);
    watch(() => page.value.path, () => {
      open.value = false;
    });
    const handleDropdown = (event) => {
      const isTriggerByTab = event.detail === 0;
      if (isTriggerByTab)
        open.value = !open.value;
    };
    return () => {
      var _a2;
      return h$1("div", { class: ["vp-dropdown-wrapper", { open: open.value }] }, [
        h$1("button", {
          type: "button",
          class: "vp-dropdown-title",
          "aria-label": dropdownAriaLabel.value,
          onClick: handleDropdown
        }, [
          ((_a2 = slots.title) == null ? void 0 : _a2.call(slots)) || [
            h$1(HopeIcon, { icon: config2.value.icon }),
            props.config.text
          ],
          h$1("span", { class: "arrow" }),
          h$1("ul", { class: "vp-dropdown" }, config2.value.children.map((child, index) => {
            const isLastChild = index === config2.value.children.length - 1;
            return h$1("li", { class: "vp-dropdown-item" }, "children" in child ? [
              h$1("h4", { class: "vp-dropdown-subtitle" }, child.link ? h$1(AutoLink, {
                config: child,
                onFocusout: () => {
                  if (
                    // No children
                    child.children.length === 0 && isLastChild
                  )
                    open.value = false;
                }
              }) : child.text),
              h$1("ul", { class: "vp-dropdown-subitems" }, child.children.map((grandchild, grandIndex) => h$1("li", { class: "vp-dropdown-subitem" }, h$1(AutoLink, {
                config: grandchild,
                onFocusout: () => {
                  if (
                    // Last item of grandchild
                    grandIndex === child.children.length - 1 && isLastChild
                  )
                    open.value = false;
                }
              }))))
            ] : h$1(AutoLink, {
              config: child,
              onFocusout: () => {
                if (isLastChild)
                  open.value = false;
              }
            }));
          }))
        ])
      ]);
    };
  }
});
const I18nIcon = () => h$1(c$1, { name: "i18n" }, () => [
  h$1("path", {
    d: "M379.392 460.8 494.08 575.488l-42.496 102.4L307.2 532.48 138.24 701.44l-71.68-72.704L234.496 460.8l-45.056-45.056c-27.136-27.136-51.2-66.56-66.56-108.544h112.64c7.68 14.336 16.896 27.136 26.112 35.84l45.568 46.08 45.056-45.056C382.976 312.32 409.6 247.808 409.6 204.8H0V102.4h256V0h102.4v102.4h256v102.4H512c0 70.144-37.888 161.28-87.04 210.944L378.88 460.8zM576 870.4 512 1024H409.6l256-614.4H768l256 614.4H921.6l-64-153.6H576zM618.496 768h196.608L716.8 532.48 618.496 768z"
  })
]);
I18nIcon.displayName = "I18nIcon";
const resolveNavbarItem = (item, prefix = "") => {
  if (isString(item))
    return resolveLinkInfo(resolvePrefix(prefix, item));
  if ("children" in item)
    return {
      ...item,
      ...item.link && isLinkInternal(item.link) ? { link: resolveRoute(resolvePrefix(prefix, item.link)).path } : {},
      children: item.children.map((child) => resolveNavbarItem(child, resolvePrefix(prefix, item.prefix)))
    };
  return {
    ...item,
    link: isLinkInternal(item.link) ? resolveRoute(resolvePrefix(prefix, item.link)).path : item.link
  };
};
const useNavbarItems = () => {
  const themeLocaleData = useThemeLocaleData();
  return computed(() => (
    // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
    (themeLocaleData.value.navbar || []).map((item) => resolveNavbarItem(item))
  ));
};
const useNavbarLanguageDropdown = () => {
  const routePaths = useRoutePaths();
  const route = useRoute();
  const routeLocale = useRouteLocale();
  const siteData2 = useSiteData();
  const siteLocale = useSiteLocaleData();
  const themeData2 = useThemeData();
  const themeLocale = useThemeLocaleData();
  return computed(() => {
    const localePaths = keys(siteData2.value.locales);
    const extraLocales = entries(themeData2.value.extraLocales ?? {});
    if (localePaths.length < 2 && !extraLocales.length)
      return null;
    const { path, fullPath } = route;
    const { navbarLocales } = themeLocale.value;
    const languageDropdown = {
      text: "",
      ariaLabel: navbarLocales == null ? void 0 : navbarLocales.selectLangAriaLabel,
      children: [
        ...localePaths.map((targetLocalePath) => {
          var _a2, _b2, _c;
          const targetSiteLocale = ((_a2 = siteData2.value.locales) == null ? void 0 : _a2[targetLocalePath]) ?? {};
          const targetThemeLocale = ((_b2 = themeData2.value.locales) == null ? void 0 : _b2[targetLocalePath]) ?? {};
          const targetLang = targetSiteLocale.lang;
          const text = ((_c = targetThemeLocale.navbarLocales) == null ? void 0 : _c.langName) ?? targetLang;
          let link;
          if (targetLang === siteLocale.value.lang) {
            link = fullPath;
          } else {
            const targetLocalePage = path.replace(routeLocale.value, targetLocalePath);
            link = routePaths.value.some((item) => item === targetLocalePage) ? (
              // try to keep current hash and query across languages
              fullPath.replace(path, targetLocalePage)
            ) : (
              // Or fallback to homepage
              targetThemeLocale.home ?? targetLocalePath
            );
          }
          return {
            text,
            link
          };
        }),
        ...extraLocales.map(([text, path2]) => ({
          text,
          link: path2.replace(":route", route.fullPath.replace(routeLocale.value, ""))
        }))
      ]
    };
    return languageDropdown;
  });
};
const useNavbarRepo = () => {
  const themeLocale = useThemeLocaleData();
  const repo = computed(() => themeLocale.value.repo);
  const repoLink = computed(() => repo.value ? G$2(repo.value) : null);
  const repoType = computed(() => repo.value ? k$2(repo.value) : null);
  const repoLabel = computed(() => repoLink.value ? themeLocale.value.repoLabel ?? repoType.value ?? "Source" : null);
  return computed(() => {
    if (!repoLink.value || !repoLabel.value || themeLocale.value.repoDisplay === false)
      return null;
    return {
      type: repoType.value ?? "Source",
      label: repoLabel.value,
      link: repoLink.value
    };
  });
};
const LanguageDropdown = defineComponent({
  name: "LanguageDropdown",
  setup() {
    const dropdown = useNavbarLanguageDropdown();
    return () => dropdown.value ? h$1("div", { class: "vp-nav-item" }, h$1(NavbarDropdown, { config: dropdown.value }, {
      title: () => {
        var _a2;
        return h$1(I18nIcon, {
          "aria-label": (_a2 = dropdown.value) == null ? void 0 : _a2.ariaLabel,
          style: {
            width: "1rem",
            height: "1rem",
            verticalAlign: "middle"
          }
        });
      }
    })) : null;
  }
});
const NavScreenMenu = defineComponent({
  name: "NavScreenMenu",
  props: {
    /**
     * Navbar Screen nav-screen-menu list config
     *
     * 导航栏下拉列表配置
     */
    config: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const page = usePageData();
    const config2 = toRef$1(props, "config");
    const ariaLabel = computed(() => config2.value.ariaLabel ?? config2.value.text);
    const open = ref(false);
    watch(() => page.value.path, () => {
      open.value = false;
    });
    const isLastItemOfArray = (item, arr) => arr[arr.length - 1] === item;
    return () => [
      h$1("button", {
        type: "button",
        class: ["vp-nav-screen-menu-title", { active: open.value }],
        "aria-label": ariaLabel.value,
        onClick: () => {
          open.value = !open.value;
        }
      }, [
        h$1("span", { class: "text" }, [
          h$1(HopeIcon, { icon: config2.value.icon }),
          props.config.text
        ]),
        h$1("span", { class: ["arrow", open.value ? "down" : "end"] })
      ]),
      h$1("ul", {
        class: ["vp-nav-screen-menu", { hide: !open.value }]
      }, config2.value.children.map((child) => h$1("li", { class: "vp-nav-screen-menu-item" }, "children" in child ? [
        h$1("h4", { class: "vp-nav-screen-menu-subtitle" }, child.link ? h$1(AutoLink, {
          config: child,
          onFocusout: () => {
            if (isLastItemOfArray(child, config2.value.children) && child.children.length === 0)
              open.value = false;
          }
        }) : child.text),
        h$1("ul", { class: "vp-nav-screen-menu-subitems" }, child.children.map((grandchild) => h$1("li", { class: "vp-nav-screen-menu-subitem" }, h$1(AutoLink, {
          config: grandchild,
          onFocusout: () => {
            if (isLastItemOfArray(grandchild, child.children) && isLastItemOfArray(child, config2.value.children))
              open.value = false;
          }
        }))))
      ] : h$1(AutoLink, {
        config: child,
        onFocusout: () => {
          if (isLastItemOfArray(child, config2.value.children))
            open.value = false;
        }
      }))))
    ];
  }
});
const NavScreenLinks = defineComponent({
  name: "NavScreenLinks",
  setup() {
    const navbarConfig = useNavbarItems();
    return () => navbarConfig.value.length ? h$1("nav", { class: "nav-screen-links" }, navbarConfig.value.map((config2) => h$1("div", { class: "navbar-links-item" }, "children" in config2 ? h$1(NavScreenMenu, { config: config2 }) : h$1(AutoLink, { config: config2 })))) : null;
  }
});
const DarkIcon = () => h$1(c$1, { name: "dark" }, () => h$1("path", {
  d: "M524.8 938.667h-4.267a439.893 439.893 0 0 1-313.173-134.4 446.293 446.293 0 0 1-11.093-597.334A432.213 432.213 0 0 1 366.933 90.027a42.667 42.667 0 0 1 45.227 9.386 42.667 42.667 0 0 1 10.24 42.667 358.4 358.4 0 0 0 82.773 375.893 361.387 361.387 0 0 0 376.747 82.774 42.667 42.667 0 0 1 54.187 55.04 433.493 433.493 0 0 1-99.84 154.88 438.613 438.613 0 0 1-311.467 128z"
}));
DarkIcon.displayName = "DarkIcon";
const LightIcon = () => h$1(c$1, { name: "light" }, () => h$1("path", {
  d: "M952 552h-80a40 40 0 0 1 0-80h80a40 40 0 0 1 0 80zM801.88 280.08a41 41 0 0 1-57.96-57.96l57.96-58a41.04 41.04 0 0 1 58 58l-58 57.96zM512 752a240 240 0 1 1 0-480 240 240 0 0 1 0 480zm0-560a40 40 0 0 1-40-40V72a40 40 0 0 1 80 0v80a40 40 0 0 1-40 40zm-289.88 88.08-58-57.96a41.04 41.04 0 0 1 58-58l57.96 58a41 41 0 0 1-57.96 57.96zM192 512a40 40 0 0 1-40 40H72a40 40 0 0 1 0-80h80a40 40 0 0 1 40 40zm30.12 231.92a41 41 0 0 1 57.96 57.96l-57.96 58a41.04 41.04 0 0 1-58-58l58-57.96zM512 832a40 40 0 0 1 40 40v80a40 40 0 0 1-80 0v-80a40 40 0 0 1 40-40zm289.88-88.08 58 57.96a41.04 41.04 0 0 1-58 58l-57.96-58a41 41 0 0 1 57.96-57.96z"
}));
LightIcon.displayName = "LightIcon";
const AutoIcon = () => h$1(c$1, { name: "auto" }, () => h$1("path", {
  d: "M512 992C246.92 992 32 777.08 32 512S246.92 32 512 32s480 214.92 480 480-214.92 480-480 480zm0-840c-198.78 0-360 161.22-360 360 0 198.84 161.22 360 360 360s360-161.16 360-360c0-198.78-161.22-360-360-360zm0 660V212c165.72 0 300 134.34 300 300 0 165.72-134.28 300-300 300z"
}));
AutoIcon.displayName = "AutoIcon";
const EnterFullScreenIcon = () => h$1(c$1, { name: "enter-fullscreen" }, () => h$1("path", {
  d: "M762.773 90.24h-497.28c-96.106 0-174.4 78.293-174.4 174.4v497.28c0 96.107 78.294 174.4 174.4 174.4h497.28c96.107 0 175.04-78.293 174.4-174.4V264.64c0-96.213-78.186-174.4-174.4-174.4zm-387.2 761.173H215.04c-21.867 0-40.427-17.92-41.067-41.066V649.92c0-22.507 17.92-40.427 40.427-40.427 11.307 0 21.227 4.694 28.48 11.947 7.253 7.253 11.947 17.92 11.947 28.48v62.293l145.28-145.28c15.893-15.893 41.813-15.893 57.706 0 15.894 15.894 15.894 41.814 0 57.707l-145.28 145.28h62.294c22.506 0 40.426 17.92 40.426 40.427s-17.173 41.066-39.68 41.066zM650.24 165.76h160.427c21.866 0 40.426 17.92 41.066 41.067v160.426c0 22.507-17.92 40.427-40.426 40.427-11.307 0-21.227-4.693-28.48-11.947-7.254-7.253-11.947-17.92-11.947-28.48v-62.186L625.6 450.347c-15.893 15.893-41.813 15.893-57.707 0-15.893-15.894-15.893-41.814 0-57.707l145.28-145.28H650.88c-22.507 0-40.427-17.92-40.427-40.427s17.174-41.173 39.787-41.173z"
}));
EnterFullScreenIcon.displayName = "EnterFullScreenIcon";
const CancelFullScreenIcon = () => h$1(c$1, { name: "cancel-fullscreen" }, () => h$1("path", {
  d: "M778.468 78.62H247.922c-102.514 0-186.027 83.513-186.027 186.027V795.08c0 102.514 83.513 186.027 186.027 186.027h530.432c102.514 0 186.71-83.513 186.026-186.027V264.647C964.494 162.02 880.981 78.62 778.468 78.62zM250.88 574.35h171.122c23.324 0 43.122 19.115 43.804 43.805v171.121c0 24.008-19.114 43.122-43.122 43.122-12.06 0-22.641-5.006-30.378-12.743s-12.743-19.115-12.743-30.379V722.83L224.597 877.91c-16.953 16.952-44.6 16.952-61.553 0-16.953-16.954-16.953-44.602 0-61.554L318.009 661.39h-66.446c-24.007 0-43.122-19.114-43.122-43.122 0-24.12 18.432-43.918 42.439-43.918zm521.899-98.873H601.657c-23.325 0-43.122-19.114-43.805-43.804V260.55c0-24.007 19.115-43.122 43.122-43.122 12.06 0 22.642 5.007 30.379 12.743s12.743 19.115 12.743 30.38v66.445l154.965-154.965c16.953-16.953 44.601-16.953 61.554 0 16.953 16.953 16.953 44.6 0 61.554L705.536 388.55h66.446c24.007 0 43.122 19.115 43.122 43.122.114 24.007-18.318 43.804-42.325 43.804z"
}));
CancelFullScreenIcon.displayName = "CancelFullScreenIcon";
const OutlookIcon = () => h$1(c$1, { name: "outlook" }, () => [
  h$1("path", {
    d: "M224 800c0 9.6 3.2 44.8 6.4 54.4 6.4 48-48 76.8-48 76.8s80 41.6 147.2 0 134.4-134.4 38.4-195.2c-22.4-12.8-41.6-19.2-57.6-19.2C259.2 716.8 227.2 761.6 224 800zM560 675.2l-32 51.2c-51.2 51.2-83.2 32-83.2 32 25.6 67.2 0 112-12.8 128 25.6 6.4 51.2 9.6 80 9.6 54.4 0 102.4-9.6 150.4-32l0 0c3.2 0 3.2-3.2 3.2-3.2 22.4-16 12.8-35.2 6.4-44.8-9.6-12.8-12.8-25.6-12.8-41.6 0-54.4 60.8-99.2 137.6-99.2 6.4 0 12.8 0 22.4 0 12.8 0 38.4 9.6 48-25.6 0-3.2 0-3.2 3.2-6.4 0-3.2 3.2-6.4 3.2-6.4 6.4-16 6.4-16 6.4-19.2 9.6-35.2 16-73.6 16-115.2 0-105.6-41.6-198.4-108.8-268.8C704 396.8 560 675.2 560 675.2zM224 419.2c0-28.8 22.4-51.2 51.2-51.2 28.8 0 51.2 22.4 51.2 51.2 0 28.8-22.4 51.2-51.2 51.2C246.4 470.4 224 448 224 419.2zM320 284.8c0-22.4 19.2-41.6 41.6-41.6 22.4 0 41.6 19.2 41.6 41.6 0 22.4-19.2 41.6-41.6 41.6C339.2 326.4 320 307.2 320 284.8zM457.6 208c0-12.8 12.8-25.6 25.6-25.6 12.8 0 25.6 12.8 25.6 25.6 0 12.8-12.8 25.6-25.6 25.6C470.4 233.6 457.6 220.8 457.6 208zM128 505.6C128 592 153.6 672 201.6 736c28.8-60.8 112-60.8 124.8-60.8-16-51.2 16-99.2 16-99.2l316.8-422.4c-48-19.2-99.2-32-150.4-32C297.6 118.4 128 291.2 128 505.6zM764.8 86.4c-22.4 19.2-390.4 518.4-390.4 518.4-22.4 28.8-12.8 76.8 22.4 99.2l9.6 6.4c35.2 22.4 80 12.8 99.2-25.6 0 0 6.4-12.8 9.6-19.2 54.4-105.6 275.2-524.8 288-553.6 6.4-19.2-3.2-32-19.2-32C777.6 76.8 771.2 80 764.8 86.4z"
  })
]);
OutlookIcon.displayName = "OutlookIcon";
const ColorModeSwitch = defineComponent({
  name: "ColorModeSwitch",
  setup() {
    const { config: config2, isDarkmode, status } = useDarkmode();
    const isPure = usePure();
    const updateDarkmodeStatus = () => {
      if (config2.value === "switch")
        status.value = {
          light: "dark",
          dark: "auto",
          auto: "light"
        }[status.value];
      else
        status.value = status.value === "light" ? "dark" : "light";
    };
    const toggleDarkmode = async (event) => {
      const useViewTransition = (
        // @ts-expect-error: Providing backward compatibility
        document.startViewTransition && !window.matchMedia("(prefers-reduced-motion: reduce)").matches && !isPure.value
      );
      if (!useViewTransition || !event) {
        updateDarkmodeStatus();
        return;
      }
      const x2 = event.clientX;
      const y2 = event.clientY;
      const endRadius = Math.hypot(Math.max(x2, innerWidth - x2), Math.max(y2, innerHeight - y2));
      const oldStatus = isDarkmode.value;
      const transition = document.startViewTransition(async () => {
        updateDarkmodeStatus();
        await nextTick();
      });
      await transition.ready;
      if (isDarkmode.value !== oldStatus)
        document.documentElement.animate({
          clipPath: isDarkmode.value ? [
            `circle(${endRadius}px at ${x2}px ${y2}px)`,
            `circle(0px at ${x2}px ${y2}px)`
          ] : [
            `circle(0px at ${x2}px ${y2}px)`,
            `circle(${endRadius}px at ${x2}px ${y2}px)`
          ]
        }, {
          duration: 400,
          pseudoElement: isDarkmode.value ? "::view-transition-old(root)" : "::view-transition-new(root)"
        });
    };
    return () => h$1("button", {
      type: "button",
      class: "vp-color-mode-switch",
      id: "color-mode-switch",
      onClick: toggleDarkmode
    }, [
      h$1(AutoIcon, {
        style: {
          display: status.value === "auto" ? "block" : "none"
        }
      }),
      h$1(DarkIcon, {
        style: {
          display: status.value === "dark" ? "block" : "none"
        }
      }),
      h$1(LightIcon, {
        style: {
          display: status.value === "light" ? "block" : "none"
        }
      })
    ]);
  }
});
const ColorMode = defineComponent({
  name: "ColorMode",
  setup() {
    const themeLocale = useThemeLocaleData();
    const { canToggle } = useDarkmode();
    const locale = computed(() => themeLocale.value.outlookLocales.darkmode);
    return () => canToggle.value ? h$1("div", { class: "vp-color-mode" }, [
      h$1("label", { class: "vp-color-mode-title", for: "color-mode-switch" }, locale.value),
      h$1(ColorModeSwitch)
    ]) : null;
  }
});
const THEME_COLOR_KEY = "VUEPRESS_THEME_COLOR";
defineComponent({
  name: "ThemeColorPicker",
  props: {
    /**
     * Theme color picker config
     *
     * 主题色选择器配置
     */
    themeColor: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const setThemeColor = (theme = "") => {
      const classes = document.documentElement.classList;
      const themes = keys(props.themeColor);
      if (!theme) {
        localStorage.removeItem(THEME_COLOR_KEY);
        classes.remove(...themes);
        return;
      }
      classes.remove(...themes.filter((themeColorClass) => themeColorClass !== theme));
      classes.add(theme);
      localStorage.setItem(THEME_COLOR_KEY, theme);
    };
    onMounted(() => {
      const theme = localStorage.getItem(THEME_COLOR_KEY);
      if (theme)
        setThemeColor(theme);
    });
    return () => h$1("ul", { class: "vp-theme-color-picker", id: "theme-color-picker" }, [
      h$1("li", h$1("span", {
        class: "theme-color",
        onClick: () => setThemeColor()
      })),
      entries(props.themeColor).map(([color, value]) => h$1("li", h$1("span", {
        style: { background: value },
        onClick: () => setThemeColor(color)
      })))
    ]);
  }
});
const enableThemeColor = cssVariables["enableThemeColor"] === "true";
defineComponent({
  name: "ThemeColor",
  setup() {
    const themeLocale = useThemeLocaleData();
    computed(() => themeLocale.value.outlookLocales.themeColor);
    return () => null;
  }
});
const ToggleFullScreenButton = defineComponent({
  name: "ToggleFullScreenButton",
  setup() {
    const themeLocale = useThemeLocaleData();
    const { isSupported, isFullscreen, toggle } = useFullscreen();
    const fullscreenLocale = computed(() => themeLocale.value.outlookLocales.fullscreen);
    return () => isSupported ? h$1("div", { class: "full-screen-wrapper" }, [
      h$1("label", { class: "full-screen-title", for: "full-screen-switch" }, fullscreenLocale.value),
      h$1("button", {
        type: "button",
        id: "full-screen-switch",
        class: "full-screen",
        ariaPressed: isFullscreen.value,
        onClick: () => toggle()
      }, isFullscreen.value ? h$1(CancelFullScreenIcon) : h$1(EnterFullScreenIcon))
    ]) : null;
  }
});
const OutlookSettings = defineComponent({
  name: "OutlookSettings",
  setup() {
    const themeData2 = useThemeData();
    const isPure = usePure();
    const enableFullScreen = computed(() => !isPure.value && themeData2.value.fullscreen);
    return () => h$1(ClientOnly, () => [
      null,
      h$1(ColorMode),
      enableFullScreen.value ? h$1(ToggleFullScreenButton) : null
    ]);
  }
});
const NavScreen = defineComponent({
  name: "NavScreen",
  props: {
    /**
     * Whether to show the screen
     *
     * 是否显示
     */
    show: Boolean
  },
  emits: ["close"],
  slots: Object,
  setup(props, { emit, slots }) {
    const page = usePageData();
    const { isMobile } = useWindowSize();
    const body = shallowRef();
    const isLocked = useScrollLock(body);
    onMounted(() => {
      body.value = document.body;
      watch(isMobile, (value) => {
        if (!value && props.show) {
          isLocked.value = false;
          emit("close");
        }
      });
      watch(() => page.value.path, () => {
        isLocked.value = false;
        emit("close");
      });
    });
    onUnmounted(() => {
      isLocked.value = false;
    });
    return () => h$1(Transition, {
      name: "fade",
      onEnter: () => {
        isLocked.value = true;
      },
      onAfterLeave: () => {
        isLocked.value = false;
      }
    }, () => {
      var _a2, _b2;
      return props.show ? h$1("div", { id: "nav-screen", class: "vp-nav-screen" }, h$1("div", { class: "vp-nav-screen-container" }, [
        (_a2 = slots.before) == null ? void 0 : _a2.call(slots),
        h$1(NavScreenLinks),
        h$1("div", { class: "vp-outlook-wrapper" }, h$1(OutlookSettings)),
        (_b2 = slots.after) == null ? void 0 : _b2.call(slots)
      ])) : null;
    });
  }
});
const NavbarBrand = defineComponent({
  name: "NavbarBrand",
  setup() {
    const routeLocale = useRouteLocale();
    const siteLocale = useSiteLocaleData();
    const themeLocale = useThemeLocaleData();
    const siteBrandLink = computed(() => themeLocale.value.home ?? routeLocale.value);
    const siteTitle = computed(() => siteLocale.value.title);
    const siteBrandTitle = computed(() => themeLocale.value.navbarTitle ?? siteTitle.value);
    const siteBrandLogo = computed(() => themeLocale.value.logo ? withBase(themeLocale.value.logo) : null);
    const siteBrandLogoDark = computed(() => themeLocale.value.logoDark ? withBase(themeLocale.value.logoDark) : null);
    return () => h$1(RouteLink, { to: siteBrandLink.value, class: "vp-brand" }, () => [
      siteBrandLogo.value ? h$1("img", {
        class: [
          "vp-nav-logo",
          { light: Boolean(siteBrandLogoDark.value) }
        ],
        src: siteBrandLogo.value,
        alt: ""
      }) : null,
      siteBrandLogoDark.value ? h$1("img", {
        class: ["vp-nav-logo dark"],
        src: siteBrandLogoDark.value,
        alt: ""
      }) : null,
      siteBrandTitle.value ? h$1("span", {
        class: [
          "vp-site-name",
          {
            "hide-in-pad": siteBrandLogo.value && (themeLocale.value.hideSiteNameOnMobile ?? true)
          }
        ]
      }, siteBrandTitle.value) : null
    ]);
  }
});
const NavbarLinks = defineComponent({
  name: "NavbarLinks",
  setup() {
    const navbarConfig = useNavbarItems();
    return () => navbarConfig.value.length ? h$1("nav", { class: "vp-nav-links" }, navbarConfig.value.map((config2) => h$1("div", { class: "vp-nav-item hide-in-mobile" }, "children" in config2 ? h$1(NavbarDropdown, { config: config2 }) : h$1(AutoLink, { config: config2 })))) : null;
  }
});
const RepoLink = defineComponent({
  name: "RepoLink",
  setup() {
    const repo = useNavbarRepo();
    return () => repo.value ? h$1("div", { class: "vp-nav-item vp-action" }, h$1("a", {
      class: "vp-action-link",
      href: repo.value.link,
      target: "_blank",
      rel: "noopener noreferrer",
      "aria-label": repo.value.label
    }, h$1(P, {
      type: repo.value.type,
      style: {
        width: "1.25rem",
        height: "1.25rem",
        verticalAlign: "middle"
      }
    }))) : null;
  }
});
const ToggleNavbarButton = ({ active = false }, { emit }) => h$1("button", {
  type: "button",
  class: ["vp-toggle-navbar-button", { "is-active": active }],
  "aria-label": "Toggle Navbar",
  "aria-expanded": active,
  "aria-controls": "nav-screen",
  onClick: () => emit("toggle")
}, h$1("span", [
  h$1("span", { class: "vp-top" }),
  h$1("span", { class: "vp-middle" }),
  h$1("span", { class: "vp-bottom" })
]));
ToggleNavbarButton.displayName = "ToggleNavbarButton";
const ToggleSidebarButton = (_2, { emit }) => h$1("button", {
  type: "button",
  class: "vp-toggle-sidebar-button",
  title: "Toggle Sidebar",
  onClick: () => emit("toggle")
}, h$1("span", { class: "icon" }));
ToggleSidebarButton.displayName = "ToggleSidebarButton";
ToggleSidebarButton.emits = ["toggle"];
const OutlookButton = defineComponent({
  name: "OutlookButton",
  setup() {
    const themeData2 = useThemeData();
    const page = usePageData();
    const { canToggle } = useDarkmode();
    const { isSupported } = useFullscreen();
    const isPure = usePure();
    const open = ref(false);
    const enableFullScreen = computed(() => !isPure.value && themeData2.value.fullscreen && isSupported);
    const enabled = computed(() => canToggle.value || enableFullScreen.value);
    watch(() => page.value.path, () => {
      open.value = false;
    });
    return () => enabled.value ? h$1(
      "div",
      { class: "vp-nav-item hide-in-mobile" },
      // Only ColorModeSwitch is enabled
      canToggle.value && !enableFullScreen.value && !enableThemeColor ? h$1(ColorModeSwitch) : (
        // Only FullScreen is enabled
        enableFullScreen.value && !canToggle.value && !enableThemeColor ? h$1(ToggleFullScreenButton) : h$1("button", {
          type: "button",
          class: ["vp-outlook-button", { open: open.value }],
          tabindex: "-1",
          "aria-hidden": true
        }, [
          h$1(OutlookIcon),
          h$1("div", { class: "vp-outlook-dropdown" }, h$1(OutlookSettings))
        ])
      )
    ) : null;
  }
});
const Navbar = defineComponent({
  name: "NavBar",
  emits: ["toggleSidebar"],
  slots: Object,
  setup(_props, { emit, slots }) {
    const themeLocale = useThemeLocaleData();
    const { isMobile } = useWindowSize();
    const showScreen = ref(false);
    const autoHide = computed(() => {
      const { navbarAutoHide = "mobile" } = themeLocale.value;
      return navbarAutoHide !== "none" && (navbarAutoHide === "always" || isMobile.value);
    });
    const navbarLayout = computed(() => themeLocale.value.navbarLayout ?? {
      start: ["Brand"],
      center: ["Links"],
      end: ["Language", "Repo", "Outlook", "Search"]
    });
    const navbarComponentMap = {
      Brand: NavbarBrand,
      Language: LanguageDropdown,
      Links: NavbarLinks,
      Repo: RepoLink,
      Outlook: OutlookButton,
      Search: hasGlobalComponent("Docsearch") ? resolveComponent("Docsearch") : hasGlobalComponent("SearchBox") ? resolveComponent("SearchBox") : noopComponent
    };
    const getNavbarComponent = (component) => navbarComponentMap[component] ?? (hasGlobalComponent(component) ? resolveComponent(component) : noopComponent);
    return () => {
      var _a2, _b2, _c, _d, _e, _f, _g, _h, _i;
      return [
        h$1("header", {
          key: "navbar",
          id: "navbar",
          class: ["vp-navbar", { "auto-hide": autoHide.value }]
        }, [
          h$1("div", { class: "vp-navbar-start" }, [
            h$1(ToggleSidebarButton, {
              onToggle: () => {
                if (showScreen.value)
                  showScreen.value = false;
                emit("toggleSidebar");
              }
            }),
            (_a2 = slots.startBefore) == null ? void 0 : _a2.call(slots),
            (_b2 = navbarLayout.value.start) == null ? void 0 : _b2.map((item) => h$1(getNavbarComponent(item))),
            (_c = slots.startAfter) == null ? void 0 : _c.call(slots)
          ]),
          h$1("div", { class: "vp-navbar-center" }, [
            (_d = slots.centerBefore) == null ? void 0 : _d.call(slots),
            (_e = navbarLayout.value.center) == null ? void 0 : _e.map((item) => h$1(getNavbarComponent(item))),
            (_f = slots.centerAfter) == null ? void 0 : _f.call(slots)
          ]),
          h$1("div", { class: "vp-navbar-end" }, [
            (_g = slots.endBefore) == null ? void 0 : _g.call(slots),
            (_h = navbarLayout.value.end) == null ? void 0 : _h.map((item) => h$1(getNavbarComponent(item))),
            (_i = slots.endAfter) == null ? void 0 : _i.call(slots),
            h$1(ToggleNavbarButton, {
              active: showScreen.value,
              onToggle: () => {
                showScreen.value = !showScreen.value;
              }
            })
          ])
        ]),
        h$1(NavScreen, {
          show: showScreen.value,
          onClose: () => {
            showScreen.value = false;
          }
        }, {
          before: slots.screenTop ? () => slots.screenTop() : null,
          after: slots.screenBottom ? () => slots.screenBottom() : null
        })
      ];
    };
  }
});
const SidebarChild = defineComponent({
  name: "SidebarChild",
  props: {
    /**
     * Sidebar item config
     *
     * 侧边栏项目配置
     */
    config: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const route = useRoute();
    return () => isString(props.config.link) ? (
      // If the item has link, render it as `<AutoLink>`
      h$1(AutoLink, {
        class: [
          "vp-sidebar-link",
          { active: isActiveItem(route, props.config) }
        ],
        config: {
          ...props.config,
          exact: true
        }
      })
    ) : (
      // If the item only has text, render it as `<p>`
      h$1("p", props, [
        h$1(HopeIcon, { icon: props.config.icon }),
        props.config.text
      ])
    );
  }
});
const SidebarGroup = defineComponent({
  name: "SidebarGroup",
  props: {
    /**
     * Sidebar group item config
     *
     * 侧边栏分组配置
     */
    config: {
      type: Object,
      required: true
    },
    /**
     * Whether current group is open
     *
     * 当前分组是否展开
     */
    open: {
      type: Boolean,
      required: true
    }
  },
  emits: ["toggle"],
  setup(props, { emit }) {
    const route = useRoute();
    const hasBeenToggled = ref(false);
    const active = computed(() => isActiveSidebarItem(route, props.config));
    const exact = computed(() => isActiveItem(route, props.config));
    const shouldOpen = computed(() => props.open || props.config.expanded && !hasBeenToggled.value);
    return () => {
      const { collapsible, children = [], icon, prefix, link, text } = props.config;
      return h$1("section", { class: "vp-sidebar-group" }, [
        h$1(collapsible ? "button" : "p", {
          class: [
            "vp-sidebar-header",
            {
              // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
              clickable: collapsible || link,
              exact: exact.value,
              active: active.value
            }
          ],
          ...collapsible ? {
            type: "button",
            onClick: () => {
              hasBeenToggled.value = true;
              emit("toggle");
            }
          } : {}
        }, [
          // Icon
          h$1(HopeIcon, { icon }),
          // Title
          link ? h$1(AutoLink, {
            class: "vp-sidebar-title no-external-link-icon",
            config: { text, link }
          }) : h$1("span", { class: "vp-sidebar-title" }, text),
          // Arrow
          collapsible ? h$1("span", {
            class: ["vp-arrow", shouldOpen.value ? "down" : "end"]
          }) : null
        ]),
        shouldOpen.value || !collapsible ? h$1(SidebarLinks, { key: prefix, config: children }) : null
      ]);
    };
  }
});
const SidebarLinks = defineComponent({
  name: "SidebarLinks",
  props: {
    /**
     * Sidebar links config
     *
     * 侧边栏链接配置
     */
    config: {
      type: Array,
      required: true
    }
  },
  setup(props) {
    const route = useRoute();
    const openGroupIndex = ref(-1);
    const toggleGroup = (index) => {
      openGroupIndex.value = index === openGroupIndex.value ? -1 : index;
    };
    watch(() => route.path, () => {
      const index = props.config.findIndex((item) => isActiveSidebarItem(route, item));
      openGroupIndex.value = index;
    }, { immediate: true, flush: "post" });
    return () => h$1("ul", { class: "vp-sidebar-links" }, props.config.map((config2, index) => h$1("li", "children" in config2 ? h$1(SidebarGroup, {
      config: config2,
      open: index === openGroupIndex.value,
      onToggle: () => toggleGroup(index)
    }) : h$1(SidebarChild, { config: config2 }))));
  }
});
const Sidebar = defineComponent({
  name: "SideBar",
  slots: Object,
  setup(_props, { slots }) {
    const route = useRoute();
    const sidebarItems = useSidebarItems();
    const sidebar = shallowRef();
    onMounted(() => {
      watch(() => route.hash, (hash) => {
        const activeSidebarItem = document.querySelector(`.vp-sidebar a.vp-sidebar-link[href="${route.path}${hash}"]`);
        if (!activeSidebarItem)
          return;
        const { top: sidebarTop, height: sidebarHeight } = sidebar.value.getBoundingClientRect();
        const { top: activeSidebarItemTop, height: activeSidebarItemHeight } = activeSidebarItem.getBoundingClientRect();
        if (activeSidebarItemTop < sidebarTop)
          activeSidebarItem.scrollIntoView(true);
        else if (activeSidebarItemTop + activeSidebarItemHeight > sidebarTop + sidebarHeight)
          activeSidebarItem.scrollIntoView(false);
      }, { immediate: true });
    });
    return () => {
      var _a2, _b2, _c;
      return h$1("aside", {
        ref: sidebar,
        key: "sidebar",
        id: "sidebar",
        class: "vp-sidebar"
      }, [
        (_a2 = slots.top) == null ? void 0 : _a2.call(slots),
        ((_b2 = slots.default) == null ? void 0 : _b2.call(slots)) ?? h$1(SidebarLinks, { config: sidebarItems.value }),
        (_c = slots.bottom) == null ? void 0 : _c.call(slots)
      ]);
    };
  }
});
const CommonWrapper = defineComponent({
  name: "CommonWrapper",
  props: {
    /**
     * Extra class of container
     *
     * 容器额外类名
     */
    containerClass: { type: String, default: "" },
    /**
     * Whether disable navbar
     *
     * 是否禁用导航栏
     */
    noNavbar: Boolean,
    /**
     * Whether disable sidebar
     *
     * 是否禁用侧边栏
     */
    noSidebar: Boolean,
    /**
     * Whether disable toc
     */
    noToc: Boolean
  },
  slots: Object,
  setup(props, { slots }) {
    const router = useRouter();
    const frontmatter = usePageFrontmatter();
    const themeData2 = useThemeData();
    const themeLocale = useThemeLocaleData();
    const { isMobile, isPC } = useWindowSize();
    const isPure = usePure();
    const [isMobileSidebarOpen, toggleMobileSidebar] = useToggle(false);
    const [isDesktopSidebarCollapsed, toggleDesktopSidebar] = useToggle(false);
    const sidebarItems = useSidebarItems();
    const hideNavbar = ref(false);
    const enableNavbar = computed(() => {
      if (props.noNavbar)
        return false;
      if (frontmatter.value.navbar === false || themeLocale.value.navbar === false)
        return false;
      return Boolean(themeLocale.value.logo ?? themeLocale.value.repo ?? themeLocale.value.navbar);
    });
    const enableSidebar = computed(() => {
      if (props.noSidebar)
        return false;
      return frontmatter.value.sidebar !== false && sidebarItems.value.length !== 0 && !frontmatter.value.home;
    });
    const enableExternalLinkIcon = computed(() => frontmatter.value.externalLinkIcon ?? themeData2.value.externalLinkIcon ?? true);
    const enableToc = computed(() => !props.noToc && !frontmatter.value.home && (frontmatter.value.toc ?? themeLocale.value.toc ?? true));
    const touchStart = { x: 0, y: 0 };
    const onTouchStart = (e2) => {
      touchStart.x = e2.changedTouches[0].clientX;
      touchStart.y = e2.changedTouches[0].clientY;
    };
    const onTouchEnd = (e2) => {
      const dx = e2.changedTouches[0].clientX - touchStart.x;
      const dy = e2.changedTouches[0].clientY - touchStart.y;
      if (
        // Horizontal swipe
        Math.abs(dx) > Math.abs(dy) * 1.5 && Math.abs(dx) > 40
      )
        if (dx > 0 && touchStart.x <= 80)
          toggleMobileSidebar(true);
        else
          toggleMobileSidebar(false);
    };
    let lastDistance = 0;
    useEventListener("scroll", useThrottleFn(() => {
      const distance = window.scrollY;
      if (distance <= 58 || distance < lastDistance)
        hideNavbar.value = false;
      else if (lastDistance + 200 < distance && !isMobileSidebarOpen.value)
        hideNavbar.value = true;
      lastDistance = distance;
    }, 300, true));
    watch(isMobile, (value) => {
      if (!value)
        toggleMobileSidebar(false);
    });
    onMounted(() => {
      const isLocked = useScrollLock(document.body);
      watch(isMobileSidebarOpen, (value) => {
        isLocked.value = value;
      });
      const unregisterRouterHook = router.afterEach(() => {
        toggleMobileSidebar(false);
      });
      onUnmounted(() => {
        isLocked.value = false;
        unregisterRouterHook();
      });
    });
    return () => h$1(hasGlobalComponent("GlobalEncrypt") ? resolveComponent("GlobalEncrypt") : B$1, () => h$1("div", {
      class: [
        "theme-container",
        // Classes
        {
          // navbar
          "hide-navbar": hideNavbar.value,
          "no-navbar": !enableNavbar.value,
          // sidebar
          "sidebar-collapsed": !isMobile.value && !isPC.value && isDesktopSidebarCollapsed.value,
          "sidebar-open": isMobile.value && isMobileSidebarOpen.value,
          "no-sidebar": !enableSidebar.value && !slots.sidebar && !slots.sidebarTop && !slots.sidebarBottom,
          // external-link-icon
          "external-link-icon": enableExternalLinkIcon.value,
          // pure
          pure: isPure.value,
          // toc
          "has-toc": enableToc.value
        },
        props.containerClass,
        frontmatter.value.containerClass ?? ""
      ],
      onTouchStart,
      onTouchEnd
    }, [
      // Navbar
      enableNavbar.value ? h$1(Navbar, { onToggleSidebar: () => toggleMobileSidebar() }, {
        startBefore: slots.navbarStartBefore ? () => slots.navbarStartBefore() : null,
        startAfter: slots.navbarStartAfter ? () => slots.navbarStartAfter() : null,
        centerBefore: slots.navbarCenterBefore ? () => slots.navbarCenterBefore() : null,
        centerAfter: slots.navbarCenterAfter ? () => slots.navbarCenterAfter() : null,
        endBefore: slots.navbarEndBefore ? () => slots.navbarEndBefore() : null,
        endAfter: slots.navbarEndAfter ? () => slots.navbarEndAfter() : null,
        screenTop: slots.navScreenTop ? () => slots.navScreenTop() : null,
        screenBottom: slots.navScreenBottom ? () => slots.navScreenBottom() : null
      }) : null,
      // Sidebar mask
      h$1(Transition, { name: "fade" }, () => isMobileSidebarOpen.value ? h$1("div", {
        class: "vp-sidebar-mask",
        onClick: () => toggleMobileSidebar(false)
      }) : null),
      // Toggle sidebar button
      h$1(Transition, { name: "fade" }, () => isMobile.value ? null : h$1("div", {
        class: "toggle-sidebar-wrapper",
        onClick: () => toggleDesktopSidebar()
      }, h$1("span", {
        class: [
          "arrow",
          isDesktopSidebarCollapsed.value ? "end" : "start"
        ]
      }))),
      // Sidebar
      h$1(Sidebar, {}, {
        default: slots.sidebar ? () => slots.sidebar() : null,
        top: slots.sidebarTop ? () => slots.sidebarTop() : null,
        bottom: slots.sidebarBottom ? () => slots.sidebarBottom() : null
      }),
      slots.default(),
      h$1(PageFooter)
    ]));
  }
});
const FeaturePanel = (props, { slots }) => {
  var _a2, _b2;
  const { bgImage, bgImageDark, bgImageStyle, color, description, image, imageDark, header, features = [] } = props;
  return h$1("div", {
    class: "vp-feature-wrapper"
  }, [
    bgImage ? h$1("div", {
      class: ["vp-feature-bg", { light: bgImageDark }],
      style: [{ "background-image": `url(${bgImage})` }, bgImageStyle]
    }) : null,
    bgImageDark ? h$1("div", {
      class: "vp-feature-bg dark",
      style: [
        { "background-image": `url(${bgImageDark})` },
        bgImageStyle
      ]
    }) : null,
    h$1("div", {
      class: "vp-feature",
      style: color ? { color } : {}
    }, [
      ((_a2 = slots.image) == null ? void 0 : _a2.call(slots, props)) ?? [
        image ? h$1("img", {
          class: ["vp-feature-image", { light: imageDark }],
          src: withBase(image),
          alt: ""
        }) : null,
        imageDark ? h$1("img", {
          class: "vp-feature-image dark",
          src: withBase(imageDark),
          alt: ""
        }) : null
      ],
      ((_b2 = slots.info) == null ? void 0 : _b2.call(slots, props)) ?? [
        header ? h$1("h2", { class: "vp-feature-header" }, header) : null,
        description ? h$1("p", {
          class: "vp-feature-description",
          innerHTML: description
        }) : null
      ],
      features.length ? h$1("div", { class: "vp-features" }, features.map(({ icon, title, details, link }) => {
        const children = [
          h$1("h3", { class: "vp-feature-title" }, [
            h$1(HopeIcon, { icon }),
            h$1("span", { innerHTML: title })
          ]),
          h$1("p", {
            class: "vp-feature-details",
            innerHTML: details
          })
        ];
        return link ? isLinkExternal(link) ? h$1("a", {
          class: "vp-feature-item link",
          href: link,
          "aria-label": title,
          target: "_blank"
        }, children) : h$1(RouteLink, {
          class: "vp-feature-item link",
          to: link,
          "aria-label": title
        }, () => children) : h$1("div", { class: "vp-feature-item" }, children);
      })) : null
    ])
  ]);
};
FeaturePanel.displayName = "FeaturePanel";
const DropTransition = defineComponent({
  name: "DropTransition",
  props: {
    /**
     * @description Transition type
     */
    type: {
      type: String,
      default: "single"
    },
    /**
     * @description Transition delay
     */
    delay: { type: Number, default: 0 },
    /**
     * @description Transition duration
     */
    duration: { type: Number, default: 0.25 },
    /**
     * @description appear
     */
    appear: Boolean
  },
  slots: Object,
  setup(props, { slots }) {
    const setStyle = (el) => {
      el.style.transition = `transform ${props.duration}s ease-in-out ${props.delay}s, opacity ${props.duration}s ease-in-out ${props.delay}s`;
      el.style.transform = "translateY(-20px)";
      el.style.opacity = "0";
    };
    const unsetStyle = (el) => {
      el.style.transform = "translateY(0)";
      el.style.opacity = "1";
    };
    return () => {
      const attrs = {
        name: "drop",
        appear: props.appear,
        onAppear: setStyle,
        onAfterAppear: unsetStyle,
        onEnter: setStyle,
        onAfterEnter: unsetStyle,
        onBeforeLeave: setStyle
      };
      const children = () => slots.default();
      return props.type === "group" ? h$1(TransitionGroup, attrs, children) : h$1(Transition, attrs, children);
    };
  }
});
const FadeSlideY = (_props, { slots }) => h$1(Transition, {
  name: "fade-slide-y",
  mode: "out-in",
  // Handle scrollBehavior with transition
  onBeforeEnter: scrollPromise.resolve,
  onBeforeLeave: scrollPromise.pending
}, () => slots.default());
FadeSlideY.displayName = "FadeSlideY";
const HeroInfo = defineComponent({
  name: "HeroInfo",
  slots: Object,
  setup(_props, { slots }) {
    const frontmatter = usePageFrontmatter();
    const siteLocale = useSiteLocaleData();
    const isFullScreen = computed(() => frontmatter.value.heroFullScreen ?? false);
    const info = computed(() => {
      const { heroText, tagline } = frontmatter.value;
      return {
        text: heroText ?? siteLocale.value.title ?? "Hello",
        tagline: tagline ?? siteLocale.value.description ?? "",
        isFullScreen: isFullScreen.value
      };
    });
    const logo = computed(() => {
      const { heroText, heroImage, heroImageDark, heroAlt, heroImageStyle } = frontmatter.value;
      return {
        image: heroImage ? withBase(heroImage) : null,
        imageDark: heroImageDark ? withBase(heroImageDark) : null,
        imageStyle: heroImageStyle,
        alt: heroAlt ?? heroText ?? "",
        isFullScreen: isFullScreen.value
      };
    });
    const bg = computed(() => {
      const { bgImage, bgImageDark, bgImageStyle } = frontmatter.value;
      return {
        image: isString(bgImage) ? withBase(bgImage) : null,
        imageDark: isString(bgImageDark) ? withBase(bgImageDark) : null,
        bgStyle: bgImageStyle,
        isFullScreen: isFullScreen.value
      };
    });
    const actions = computed(() => frontmatter.value.actions ?? []);
    return () => {
      var _a2, _b2, _c;
      return h$1("header", { class: ["vp-hero-info-wrapper", { fullscreen: isFullScreen.value }] }, [
        ((_a2 = slots.bg) == null ? void 0 : _a2.call(slots, bg.value)) ?? [
          bg.value.image ? h$1("div", {
            class: ["vp-hero-mask", { light: bg.value.imageDark }],
            style: [
              { "background-image": `url(${bg.value.image})` },
              bg.value.bgStyle
            ]
          }) : null,
          bg.value.imageDark ? h$1("div", {
            class: "vp-hero-mask dark",
            style: [
              {
                "background-image": `url(${bg.value.imageDark})`
              },
              bg.value.bgStyle
            ]
          }) : null
        ],
        h$1("div", { class: "vp-hero-info" }, [
          ((_b2 = slots.logo) == null ? void 0 : _b2.call(slots, logo.value)) ?? h$1(DropTransition, { appear: true, type: "group" }, () => {
            const { image, imageDark, imageStyle, alt } = logo.value;
            return [
              image ? h$1("img", {
                key: "light",
                class: ["vp-hero-image", { light: imageDark }],
                style: imageStyle,
                src: image,
                alt
              }) : null,
              imageDark ? h$1("img", {
                key: "dark",
                class: "vp-hero-image dark",
                style: imageStyle,
                src: imageDark,
                alt
              }) : null
            ];
          }),
          ((_c = slots.info) == null ? void 0 : _c.call(slots, info.value)) ?? h$1("div", { class: "vp-hero-infos" }, [
            info.value.text ? h$1(DropTransition, { appear: true, delay: 0.04 }, () => h$1("h1", { id: "main-title", class: "vp-hero-title" }, info.value.text)) : null,
            info.value.tagline ? h$1(DropTransition, { appear: true, delay: 0.08 }, () => h$1("p", {
              id: "main-description",
              innerHTML: info.value.tagline
            })) : null,
            actions.value.length ? h$1(DropTransition, { appear: true, delay: 0.12 }, () => h$1("p", { class: "vp-hero-actions" }, actions.value.map((action) => h$1(AutoLink, {
              class: [
                "vp-hero-action",
                action.type ?? "default",
                "no-external-link-icon"
              ],
              config: action
            }, action.icon ? {
              before: () => h$1(HopeIcon, { icon: action.icon })
            } : {})))) : null
          ])
        ])
      ]);
    };
  }
});
const HighlightPanel = (props, { slots }) => {
  var _a2, _b2, _c;
  const { bgImage, bgImageDark, bgImageStyle, color, description, image, imageDark, header, highlights = [], type = "un-order" } = props;
  return h$1("div", {
    class: "vp-highlight-wrapper",
    style: color ? { color } : {}
  }, [
    bgImage ? h$1("div", {
      class: ["vp-highlight-bg", { light: bgImageDark }],
      style: [{ "background-image": `url(${bgImage})` }, bgImageStyle]
    }) : null,
    bgImageDark ? h$1("div", {
      class: "vp-highlight-bg dark",
      style: [
        { "background-image": `url(${bgImageDark})` },
        bgImageStyle
      ]
    }) : null,
    h$1("div", { class: "vp-highlight" }, [
      ((_a2 = slots.image) == null ? void 0 : _a2.call(slots, props)) ?? [
        image ? h$1("img", {
          class: ["vp-highlight-image", { light: imageDark }],
          src: withBase(image),
          alt: ""
        }) : null,
        imageDark ? h$1("img", {
          class: "vp-highlight-image dark",
          src: withBase(imageDark),
          alt: ""
        }) : null
      ],
      ((_b2 = slots.info) == null ? void 0 : _b2.call(slots, props)) ?? [
        h$1("div", { class: "vp-highlight-info-wrapper" }, h$1("div", { class: "vp-highlight-info" }, [
          header ? h$1("h2", {
            class: "vp-highlight-header",
            innerHTML: header
          }) : null,
          description ? h$1("p", {
            class: "vp-highlight-description",
            innerHTML: description
          }) : null,
          ((_c = slots.highlights) == null ? void 0 : _c.call(slots, highlights)) ?? h$1(type === "order" ? "ol" : type === "no-order" ? "dl" : "ul", { class: "vp-highlights" }, highlights.map(({ icon, title, details, link }) => {
            const children = [
              h$1(type === "no-order" ? "dt" : "h3", { class: "vp-highlight-title" }, [
                icon ? h$1(HopeIcon, {
                  class: "vp-highlight-icon",
                  icon
                }) : null,
                h$1("span", { innerHTML: title })
              ]),
              details ? h$1(type === "no-order" ? "dd" : "p", {
                class: "vp-highlight-details",
                innerHTML: details
              }) : null
            ];
            return h$1(type === "no-order" ? "div" : "li", {
              class: ["vp-highlight-item-wrapper", { link }]
            }, link ? isLinkExternal(link) ? h$1("a", {
              class: "vp-highlight-item link",
              href: link,
              "aria-label": title,
              target: "_blank"
            }, children) : h$1(RouteLink, {
              class: "vp-highlight-item link",
              to: link,
              "aria-label": title
            }, () => children) : h$1("div", { class: "vp-highlight-item" }, children));
          }))
        ]))
      ]
    ])
  ]);
};
HighlightPanel.displayName = "HighlightPanel";
const MarkdownContent = ({ custom }) => h$1(Content, { class: ["theme-hope-content", { custom }] });
MarkdownContent.displayName = "MarkdownContent";
MarkdownContent.props = {
  custom: Boolean
};
const HomePage = defineComponent({
  name: "HomePage",
  slots: Object,
  setup(_props, { slots }) {
    const frontmatter = usePageFrontmatter();
    const features = computed(() => {
      const { features: features2 } = frontmatter.value;
      return isArray(features2) ? features2 : null;
    });
    const highlights = computed(() => {
      const { highlights: highlights2 } = frontmatter.value;
      if (isArray(highlights2))
        return highlights2;
      return null;
    });
    return () => {
      var _a2, _b2, _c, _d;
      return h$1("main", {
        id: "main-content",
        class: "vp-page vp-project-home",
        "aria-labelledby": frontmatter.value.heroText === null ? "" : "main-title"
      }, [
        (_a2 = slots.top) == null ? void 0 : _a2.call(slots),
        h$1(HeroInfo),
        ((_b2 = highlights.value) == null ? void 0 : _b2.map((highlight) => "features" in highlight ? h$1(FeaturePanel, highlight) : h$1(HighlightPanel, highlight))) ?? (features.value ? h$1(DropTransition, { appear: true, delay: 0.24 }, () => h$1(FeaturePanel, { features: features.value })) : null),
        (_c = slots.center) == null ? void 0 : _c.call(slots),
        h$1(DropTransition, {
          appear: true,
          delay: 0.32
        }, () => h$1(MarkdownContent)),
        (_d = slots.bottom) == null ? void 0 : _d.call(slots)
      ]);
    };
  }
});
const BreadCrumb = defineComponent({
  name: "BreadCrumb",
  setup() {
    const page = usePageData();
    const routeLocale = useRouteLocale();
    const frontmatter = usePageFrontmatter();
    const themeLocale = useThemeLocaleData();
    const config2 = shallowRef([]);
    const enable = computed(() => (frontmatter.value.breadcrumb ?? themeLocale.value.breadcrumb ?? true) && config2.value.length > 1);
    const enableIcon = computed(() => frontmatter.value.breadcrumbIcon ?? themeLocale.value.breadcrumbIcon ?? true);
    const getBreadCrumbConfig = () => {
      const breadcrumbConfig = getAncestorLinks(page.value.path, routeLocale.value).map(({ link, name }) => {
        const { path, meta, notFound } = resolveRoute(link);
        if (notFound || meta[PageInfo$1.breadcrumbExclude])
          return null;
        return {
          title: meta[PageInfo$1.shortTitle] || meta[PageInfo$1.title] || name,
          icon: meta[PageInfo$1.icon],
          path
        };
      }).filter((item) => item !== null);
      if (breadcrumbConfig.length > 1)
        config2.value = breadcrumbConfig;
    };
    onMounted(() => {
      watch(() => page.value.path, getBreadCrumbConfig, { immediate: true });
    });
    return () => h$1("nav", { class: ["vp-breadcrumb", { disable: !enable.value }] }, enable.value ? h$1("ol", {
      vocab: "https://schema.org/",
      typeof: "BreadcrumbList"
    }, config2.value.map((item, index) => h$1("li", {
      class: { "is-active": config2.value.length - 1 === index },
      property: "itemListElement",
      typeof: "ListItem"
    }, [
      h$1(RouteLink, {
        to: item.path,
        property: "item",
        typeof: "WebPage"
      }, () => [
        // Icon
        enableIcon.value ? h$1(HopeIcon, { icon: item.icon }) : null,
        // Text
        h$1("span", { property: "name" }, item.title || "Unknown")
      ]),
      // Meta
      h$1("meta", { property: "position", content: index + 1 })
    ]))) : []);
  }
});
const PageNav = defineComponent({
  name: "PageNav",
  setup() {
    const themeLocale = useThemeLocaleData();
    const navigate = useNavigate();
    const { prevLink, nextLink } = useRelatedLinks();
    useEventListener("keydown", (event) => {
      if (event.altKey) {
        if (event.key === "ArrowRight") {
          if (nextLink.value) {
            navigate(nextLink.value.link);
            event.preventDefault();
          }
        } else if (event.key === "ArrowLeft") {
          if (prevLink.value) {
            navigate(prevLink.value.link);
            event.preventDefault();
          }
        }
      }
    });
    return () => prevLink.value || nextLink.value ? h$1("nav", { class: "vp-page-nav" }, [
      prevLink.value ? h$1(AutoLink, { class: "prev", config: prevLink.value }, () => {
        var _a2, _b2;
        return [
          h$1("div", { class: "hint" }, [
            h$1("span", { class: "arrow start" }),
            themeLocale.value.metaLocales.prev
          ]),
          h$1("div", { class: "link" }, [
            h$1(HopeIcon, {
              icon: (_a2 = prevLink.value) == null ? void 0 : _a2.icon
            }),
            (_b2 = prevLink.value) == null ? void 0 : _b2.text
          ])
        ];
      }) : null,
      nextLink.value ? h$1(AutoLink, { class: "next", config: nextLink.value }, () => {
        var _a2, _b2;
        return [
          h$1("div", { class: "hint" }, [
            themeLocale.value.metaLocales.next,
            h$1("span", { class: "arrow end" })
          ]),
          h$1("div", { class: "link" }, [
            (_a2 = nextLink.value) == null ? void 0 : _a2.text,
            h$1(HopeIcon, {
              icon: (_b2 = nextLink.value) == null ? void 0 : _b2.icon
            })
          ])
        ];
      }) : null
    ]) : null;
  }
});
const usePageview = () => {
  const walineOptions = useWalineOptions();
  return (options) => pageviewCount({ serverURL: walineOptions.value.serverURL, ...options });
};
const AuthorIcon = () => h$1(c$1, { name: "author" }, () => h$1("path", {
  d: "M649.6 633.6c86.4-48 147.2-144 147.2-249.6 0-160-128-288-288-288s-288 128-288 288c0 108.8 57.6 201.6 147.2 249.6-121.6 48-214.4 153.6-240 288-3.2 9.6 0 19.2 6.4 25.6 3.2 9.6 12.8 12.8 22.4 12.8h704c9.6 0 19.2-3.2 25.6-12.8 6.4-6.4 9.6-16 6.4-25.6-25.6-134.4-121.6-240-243.2-288z"
}));
AuthorIcon.displayName = "AuthorIcon";
const CalendarIcon = () => h$1(c$1, { name: "calendar" }, () => h$1("path", {
  d: "M716.4 110.137c0-18.753-14.72-33.473-33.472-33.473-18.753 0-33.473 14.72-33.473 33.473v33.473h66.993v-33.473zm-334.87 0c0-18.753-14.72-33.473-33.473-33.473s-33.52 14.72-33.52 33.473v33.473h66.993v-33.473zm468.81 33.52H716.4v100.465c0 18.753-14.72 33.473-33.472 33.473a33.145 33.145 0 01-33.473-33.473V143.657H381.53v100.465c0 18.753-14.72 33.473-33.473 33.473a33.145 33.145 0 01-33.473-33.473V143.657H180.6A134.314 134.314 0 0046.66 277.595v535.756A134.314 134.314 0 00180.6 947.289h669.74a134.36 134.36 0 00133.94-133.938V277.595a134.314 134.314 0 00-133.94-133.938zm33.473 267.877H147.126a33.145 33.145 0 01-33.473-33.473c0-18.752 14.72-33.473 33.473-33.473h736.687c18.752 0 33.472 14.72 33.472 33.473a33.145 33.145 0 01-33.472 33.473z"
}));
CalendarIcon.displayName = "CalendarIcon";
const CategoryIcon$1 = () => h$1(c$1, { name: "category" }, () => h$1("path", {
  d: "M148.41 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H148.41c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.311-40.31zM147.556 553.478H429.73c22.263 0 40.311 18.048 40.311 40.31v282.176c0 22.263-18.048 40.312-40.31 40.312H147.555c-22.263 0-40.311-18.049-40.311-40.312V593.79c0-22.263 18.048-40.311 40.31-40.311zM593.927 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H593.927c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.31-40.31zM730.22 920.502H623.926c-40.925 0-74.22-33.388-74.22-74.425V623.992c0-41.038 33.387-74.424 74.425-74.424h222.085c41.038 0 74.424 33.226 74.424 74.067v114.233c0 10.244-8.304 18.548-18.547 18.548s-18.548-8.304-18.548-18.548V623.635c0-20.388-16.746-36.974-37.33-36.974H624.13c-20.585 0-37.331 16.747-37.331 37.33v222.086c0 20.585 16.654 37.331 37.126 37.331H730.22c10.243 0 18.547 8.304 18.547 18.547 0 10.244-8.304 18.547-18.547 18.547z"
}));
CategoryIcon$1.displayName = "CategoryIcon";
const EyeIcon = () => h$1(c$1, { name: "eye" }, () => h$1("path", {
  d: "M992 512.096c0-5.76-.992-10.592-1.28-11.136-.192-2.88-1.152-8.064-2.08-10.816-.256-.672-.544-1.376-.832-2.08-.48-1.568-1.024-3.104-1.6-4.32C897.664 290.112 707.104 160 512 160c-195.072 0-385.632 130.016-473.76 322.592-1.056 2.112-1.792 4.096-2.272 5.856a55.512 55.512 0 00-.64 1.6c-1.76 5.088-1.792 8.64-1.632 7.744-.832 3.744-1.568 11.168-1.568 11.168-.224 2.272-.224 4.032.032 6.304 0 0 .736 6.464 1.088 7.808.128 1.824.576 4.512 1.12 6.976h-.032c.448 2.08 1.12 4.096 1.984 6.08.48 1.536.992 2.976 1.472 4.032C126.432 733.856 316.992 864 512 864c195.136 0 385.696-130.048 473.216-321.696 1.376-2.496 2.24-4.832 2.848-6.912.256-.608.48-1.184.672-1.728 1.536-4.48 1.856-8.32 1.728-8.32l-.032.032c.608-3.104 1.568-7.744 1.568-13.28zM512 672c-88.224 0-160-71.776-160-160s71.776-160 160-160 160 71.776 160 160-71.776 160-160 160z"
}));
EyeIcon.displayName = "EyeIcon";
const FireIcon = () => h$1(c$1, { name: "fire" }, () => h$1("path", {
  d: "M726.4 201.6c-12.8-9.6-28.8-6.4-38.4 0-9.6 9.6-16 25.6-9.6 38.4 6.4 12.8 9.6 28.8 12.8 44.8C604.8 83.2 460.8 38.4 454.4 35.2c-9.6-3.2-22.4 0-28.8 6.4-9.6 6.4-12.8 19.2-9.6 28.8 12.8 86.4-25.6 188.8-115.2 310.4-6.4-25.6-16-51.2-32-80-9.6-9.6-22.4-16-35.2-12.8-16 3.2-25.6 12.8-25.6 28.8-3.2 48-25.6 92.8-51.2 140.8C134.4 499.2 112 544 102.4 592c-32 150.4 99.2 329.6 233.6 380.8 9.6 3.2 19.2 6.4 32 9.6-25.6-19.2-41.6-51.2-48-96C294.4 691.2 505.6 640 515.2 460.8c153.6 105.6 224 336 137.6 505.6 3.2 0 6.4-3.2 9.6-3.2 0 0 3.2 0 3.2-3.2 163.2-89.6 252.8-208 259.2-345.6 16-211.2-163.2-390.4-198.4-412.8z"
}));
FireIcon.displayName = "FireIcon";
const PrintIcon = () => h$1(c$1, { name: "print" }, () => h$1("path", {
  d: "M819.2 364.8h-44.8V128c0-17.067-14.933-32-32-32H281.6c-17.067 0-32 14.933-32 32v236.8h-44.8C145.067 364.8 96 413.867 96 473.6v192c0 59.733 49.067 108.8 108.8 108.8h44.8V896c0 17.067 14.933 32 32 32h460.8c17.067 0 32-14.933 32-32V774.4h44.8c59.733 0 108.8-49.067 108.8-108.8v-192c0-59.733-49.067-108.8-108.8-108.8zM313.6 160h396.8v204.8H313.6V160zm396.8 704H313.6V620.8h396.8V864zM864 665.6c0 25.6-19.2 44.8-44.8 44.8h-44.8V588.8c0-17.067-14.933-32-32-32H281.6c-17.067 0-32 14.933-32 32v121.6h-44.8c-25.6 0-44.8-19.2-44.8-44.8v-192c0-25.6 19.2-44.8 44.8-44.8h614.4c25.6 0 44.8 19.2 44.8 44.8v192z"
}));
PrintIcon.displayName = "PrintIcon";
const TagIcon$1 = () => h$1(c$1, { name: "tag" }, () => h$1("path", {
  d: "M939.902 458.563L910.17 144.567c-1.507-16.272-14.465-29.13-30.737-30.737L565.438 84.098h-.402c-3.215 0-5.726 1.005-7.634 2.913l-470.39 470.39a10.004 10.004 0 000 14.164l365.423 365.424c1.909 1.908 4.42 2.913 7.132 2.913s5.223-1.005 7.132-2.913l470.39-470.39c2.01-2.11 3.014-5.023 2.813-8.036zm-240.067-72.121c-35.458 0-64.286-28.828-64.286-64.286s28.828-64.285 64.286-64.285 64.286 28.828 64.286 64.285-28.829 64.286-64.286 64.286z"
}));
TagIcon$1.displayName = "TagIcon";
const TimerIcon = () => h$1(c$1, { name: "timer" }, () => h$1("path", {
  d: "M799.387 122.15c4.402-2.978 7.38-7.897 7.38-13.463v-1.165c0-8.933-7.38-16.312-16.312-16.312H256.33c-8.933 0-16.311 7.38-16.311 16.312v1.165c0 5.825 2.977 10.874 7.637 13.592 4.143 194.44 97.22 354.963 220.201 392.763-122.204 37.542-214.893 196.511-220.2 389.397-4.661 5.049-7.638 11.651-7.638 19.03v5.825h566.49v-5.825c0-7.379-2.849-13.981-7.509-18.9-5.049-193.016-97.867-351.985-220.2-389.527 123.24-37.67 216.446-198.453 220.588-392.892zM531.16 450.445v352.632c117.674 1.553 211.787 40.778 211.787 88.676H304.097c0-48.286 95.149-87.382 213.728-88.676V450.445c-93.077-3.107-167.901-81.297-167.901-177.093 0-8.803 6.99-15.793 15.793-15.793 8.803 0 15.794 6.99 15.794 15.793 0 80.261 63.69 145.635 142.01 145.635s142.011-65.374 142.011-145.635c0-8.803 6.99-15.793 15.794-15.793s15.793 6.99 15.793 15.793c0 95.019-73.789 172.82-165.96 177.093z"
}));
TimerIcon.displayName = "TimerIcon";
const WordIcon = () => h$1(c$1, { name: "word" }, () => [
  h$1("path", {
    d: "M518.217 432.64V73.143A73.143 73.143 0 01603.43 1.097a512 512 0 01419.474 419.474 73.143 73.143 0 01-72.046 85.212H591.36a73.143 73.143 0 01-73.143-73.143z"
  }),
  h$1("path", {
    d: "M493.714 566.857h340.297a73.143 73.143 0 0173.143 85.577A457.143 457.143 0 11371.566 117.76a73.143 73.143 0 0185.577 73.143v339.383a36.571 36.571 0 0036.571 36.571z"
  })
]);
WordIcon.displayName = "WordIcon";
const useContributors = () => {
  const themeLocale = useThemeLocaleData();
  const page = usePageData();
  const frontmatter = usePageFrontmatter();
  return computed(() => {
    var _a2;
    const showContributors = frontmatter.value.contributors ?? themeLocale.value.contributors ?? true;
    if (!showContributors)
      return null;
    return ((_a2 = page.value.git) == null ? void 0 : _a2.contributors) ?? null;
  });
};
const editLinkPatterns = {
  GitHub: ":repo/edit/:branch/:path",
  GitLab: ":repo/-/edit/:branch/:path",
  Gitee: ":repo/edit/:branch/:path",
  Bitbucket: ":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"
};
const resolveEditLink = ({ docsRepo, docsBranch, docsDir, filePathRelative, editLinkPattern }) => {
  if (!filePathRelative)
    return null;
  const repoType = k$2(docsRepo);
  let pattern;
  if (editLinkPattern)
    pattern = editLinkPattern;
  else if (repoType !== null)
    pattern = editLinkPatterns[repoType];
  if (!pattern)
    return null;
  return pattern.replace(/:repo/u, isLinkHttp(docsRepo) ? docsRepo : `https://github.com/${docsRepo}`).replace(/:branch/u, docsBranch).replace(/:path/u, removeLeadingSlash(`${removeEndingSlash(docsDir)}/${filePathRelative}`));
};
const useEditLink = () => {
  const themeLocale = useThemeLocaleData();
  const page = usePageData();
  const frontmatter = usePageFrontmatter();
  return computed(() => {
    const { repo, docsRepo = repo, docsBranch = "main", docsDir = "", editLink, editLinkPattern = "" } = themeLocale.value;
    const showEditLink = frontmatter.value.editLink ?? editLink ?? true;
    if (!showEditLink)
      return null;
    if (!docsRepo)
      return null;
    const link = resolveEditLink({
      docsRepo,
      docsBranch,
      docsDir,
      editLinkPattern,
      filePathRelative: page.value.filePathRelative
    });
    if (!link)
      return null;
    return {
      text: themeLocale.value.metaLocales.editLink,
      link
    };
  });
};
const useMetaLocale = () => {
  const themeLocale = useThemeLocaleData();
  return computed(() => themeLocale.value.metaLocales);
};
const useUpdateTime = () => {
  const siteLocale = useSiteLocaleData();
  const themeLocale = useThemeLocaleData();
  const page = usePageData();
  const frontmatter = usePageFrontmatter();
  return computed(() => {
    var _a2, _b2;
    const showLastUpdated = frontmatter.value.lastUpdated ?? themeLocale.value.lastUpdated ?? true;
    if (!showLastUpdated)
      return null;
    if (!((_a2 = page.value.git) == null ? void 0 : _a2.updatedTime))
      return null;
    const updatedDate = new Date((_b2 = page.value.git) == null ? void 0 : _b2.updatedTime);
    return updatedDate.toLocaleString(siteLocale.value.lang);
  });
};
const AuthorInfo = defineComponent({
  name: "AuthorInfo",
  inheritAttrs: false,
  props: {
    /**
     * Author information
     *
     * 作者信息
     */
    author: {
      type: Array,
      required: true
    }
  },
  setup(props) {
    const metaLocale = useMetaLocale();
    const isPure = usePure();
    return () => props.author.length ? h$1("span", {
      class: "page-author-info",
      "aria-label": `${metaLocale.value.author}${isPure.value ? "" : "🖊"}`,
      ...isPure.value ? {} : { "data-balloon-pos": "up" }
    }, [
      h$1(AuthorIcon),
      h$1("span", props.author.map((item) => item.url ? h$1("a", {
        class: "page-author-item",
        href: item.url,
        target: "_blank",
        rel: "noopener noreferrer"
      }, item.name) : h$1("span", { class: "page-author-item" }, item.name))),
      h$1("span", {
        property: "author",
        content: props.author.map((item) => item.name).join(", ")
      })
    ]) : null;
  }
});
const CategoryInfo = defineComponent({
  name: "CategoryInfo",
  inheritAttrs: false,
  props: {
    /**
     * Category information
     *
     * 分类信息
     */
    category: {
      type: Array,
      required: true
    }
  },
  setup(props) {
    const metaLocale = useMetaLocale();
    const navigate = useNavigate();
    const isPure = usePure();
    return () => props.category.length ? h$1("span", {
      class: "page-category-info",
      "aria-label": `${metaLocale.value.category}${isPure.value ? "" : "🌈"}`,
      ...isPure.value ? {} : { "data-balloon-pos": "up" }
    }, [
      h$1(CategoryIcon$1),
      props.category.map(({ name, path }) => h$1("span", {
        class: [
          "page-category-item",
          {
            [`color${Q$1(name, Number(cssVariables["colorNumber"]))}`]: !isPure.value,
            clickable: path
          }
        ],
        role: path ? "navigation" : "",
        onClick: () => {
          if (path)
            navigate(path);
        }
      }, name)),
      h$1("meta", {
        property: "articleSection",
        content: props.category.map(({ name }) => name).join(",")
      })
    ]) : null;
  }
});
const DateInfo = defineComponent({
  name: "DateInfo",
  inheritAttrs: false,
  props: {
    /**
     * Date information
     *
     * 日期信息
     */
    date: {
      type: Object,
      default: null
    },
    /**
     * Localized date text
     *
     * 本地化的日期文字
     */
    localizedDate: {
      type: String,
      default: ""
    }
  },
  setup(props) {
    const lang = usePageLang();
    const metaLocale = useMetaLocale();
    const isPure = usePure();
    return () => props.date ? h$1("span", {
      class: "page-date-info",
      "aria-label": `${metaLocale.value.date}${isPure.value ? "" : "📅"}`,
      ...isPure.value ? {} : { "data-balloon-pos": "up" }
    }, [
      h$1(CalendarIcon),
      h$1("span", h$1(ClientOnly, () => props.localizedDate || props.date.toLocaleDateString(lang.value))),
      h$1("meta", {
        property: "datePublished",
        // ISO Format Date string
        content: props.date.toISOString() || ""
      })
    ]) : null;
  }
});
const OriginalInfo = defineComponent({
  name: "OriginalInfo",
  inheritAttrs: false,
  props: {
    /**
     * Whether the article is original
     *
     * 文章是否是原创
     */
    isOriginal: Boolean
  },
  setup(props) {
    const metaLocale = useMetaLocale();
    return () => props.isOriginal ? h$1("span", { class: "page-original-info" }, metaLocale.value.origin) : null;
  }
});
const PageViewInfo = defineComponent({
  name: "PageViewInfo",
  inheritAttrs: false,
  props: {
    /**
     * Whether show pageview and it's path
     *
     * 是否显示浏览量以及其路径
     */
    pageview: {
      type: [Boolean, String],
      default: false
    }
  },
  setup(props) {
    const route = useRoute();
    const metaLocale = useMetaLocale();
    const isPure = usePure();
    const pageviewElement = shallowRef();
    const pageViews = ref(0);
    useMutationObserver(pageviewElement, () => {
      const count = pageviewElement.value.textContent;
      if (count && !isNaN(Number(count)))
        pageViews.value = Number(count);
    }, { childList: true });
    return () => props.pageview ? h$1("span", {
      class: "page-pageview-info",
      "aria-label": `${metaLocale.value.views}${isPure.value ? "" : "🔢"}`,
      ...isPure.value ? {} : { "data-balloon-pos": "up" }
    }, [
      h$1(pageViews.value < 1e3 ? EyeIcon : FireIcon),
      h$1("span", {
        ref: pageviewElement,
        id: "ArtalkPV",
        class: "vp-pageview waline-pageview-count",
        "data-path": isString(props.pageview) ? props.pageview : route.path,
        "data-page-key": isString(props.pageview) ? props.pageview : route.path
      }, "...")
    ]) : null;
  }
});
const ReadingTimeInfo = defineComponent({
  name: "ReadingTimeInfo",
  inheritAttrs: false,
  props: {
    /**
     * Reading time information
     *
     * 阅读时间信息
     */
    readingTime: {
      type: Object,
      default: () => null
    },
    /**
     * Reading time locale
     *
     * 阅读时间语言环境
     */
    readingTimeLocale: {
      type: Object,
      default: () => null
    }
  },
  setup(props) {
    const metaLocale = useMetaLocale();
    const isPure = usePure();
    const readingTimeMeta = computed(() => {
      if (!props.readingTime)
        return null;
      const { minutes } = props.readingTime;
      return minutes < 1 ? "PT1M" : `PT${Math.round(minutes)}M`;
    });
    return () => {
      var _a2, _b2;
      return ((_a2 = props.readingTimeLocale) == null ? void 0 : _a2.time) ? h$1("span", {
        class: "page-reading-time-info",
        "aria-label": `${metaLocale.value.readingTime}${isPure.value ? "" : "⌛"}`,
        ...isPure.value ? {} : { "data-balloon-pos": "up" }
      }, [
        h$1(TimerIcon),
        h$1("span", (_b2 = props.readingTimeLocale) == null ? void 0 : _b2.time),
        h$1("meta", {
          property: "timeRequired",
          content: readingTimeMeta.value
        })
      ]) : null;
    };
  }
});
const TagInfo = defineComponent({
  name: "TagInfo",
  inheritAttrs: false,
  props: {
    /**
     * Tag information
     *
     * 标签信息
     */
    tag: {
      type: Array,
      default: () => []
    }
  },
  setup(props) {
    const metaLocale = useMetaLocale();
    const navigate = useNavigate();
    const isPure = usePure();
    return () => props.tag.length ? h$1("span", {
      class: "page-tag-info",
      "aria-label": `${metaLocale.value.tag}${isPure.value ? "" : "🏷"}`,
      ...isPure.value ? {} : { "data-balloon-pos": "up" }
    }, [
      h$1(TagIcon$1),
      props.tag.map(({ name, path }) => h$1("span", {
        class: [
          "page-tag-item",
          {
            [`color${Q$1(name, Number(cssVariables["colorNumber"]))}`]: !isPure.value,
            clickable: path
          }
        ],
        role: path ? "navigation" : "",
        onClick: () => {
          if (path)
            navigate(path);
        }
      }, name)),
      h$1("meta", {
        property: "keywords",
        content: props.tag.map(({ name }) => name).join(",")
      })
    ]) : null;
  }
});
const WordInfo = defineComponent({
  name: "ReadTimeInfo",
  inheritAttrs: false,
  props: {
    /**
     * Reading time information
     *
     * 阅读时间信息
     */
    readingTime: {
      type: Object,
      default: () => null
    },
    /**
     * Reading time locale
     *
     * 阅读时间语言环境
     */
    readingTimeLocale: {
      type: Object,
      default: () => null
    }
  },
  setup(props) {
    const metaLocale = useMetaLocale();
    const isPure = usePure();
    return () => {
      var _a2, _b2, _c;
      return ((_a2 = props.readingTimeLocale) == null ? void 0 : _a2.words) ? h$1("span", {
        class: "page-word-info",
        "aria-label": `${metaLocale.value.words}${isPure.value ? "" : "🔠"}`,
        ...isPure.value ? {} : { "data-balloon-pos": "up" }
      }, [
        h$1(WordIcon),
        h$1("span", (_b2 = props.readingTimeLocale) == null ? void 0 : _b2.words),
        h$1("meta", {
          property: "wordCount",
          content: (_c = props.readingTime) == null ? void 0 : _c.words
        })
      ]) : null;
    };
  }
});
const PageInfo = defineComponent({
  name: "PageInfo",
  components: {
    AuthorInfo,
    CategoryInfo,
    DateInfo,
    OriginalInfo,
    PageViewInfo,
    ReadingTimeInfo,
    TagInfo,
    WordInfo
  },
  props: {
    /**
     * Article information to display
     *
     * 待展示的文章信息
     */
    items: {
      type: [Array, Boolean],
      default: () => [
        "Author",
        "Original",
        "Date",
        "PageView",
        "ReadingTime",
        "Category",
        "Tag"
      ]
    },
    /**
     * Article information
     *
     * 文章信息配置
     */
    info: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const isPure = usePure();
    return () => props.items ? h$1("div", { class: "page-info" }, props.items.map((item) => h$1(resolveComponent(`${item}Info`), {
      ...props.info,
      isPure: isPure.value
    }))) : null;
  }
});
const PageTitle = defineComponent({
  name: "PageTitle",
  setup() {
    const page = usePageData();
    const frontmatter = usePageFrontmatter();
    const themeLocale = useThemeLocaleData();
    const { info, items } = usePageInfo();
    return () => h$1("div", { class: "vp-page-title" }, [
      h$1("h1", [
        themeLocale.value.titleIcon === false ? null : h$1(HopeIcon, { icon: frontmatter.value.icon }),
        page.value.title
      ]),
      h$1(PageInfo, {
        info: info.value,
        ...items.value === null ? {} : { items: items.value }
      }),
      h$1("hr")
    ]);
  }
});
const EditIcon = () => h$1(c$1, { name: "edit" }, () => [
  h$1("path", {
    d: "M430.818 653.65a60.46 60.46 0 0 1-50.96-93.281l71.69-114.012 7.773-10.365L816.038 80.138A60.46 60.46 0 0 1 859.225 62a60.46 60.46 0 0 1 43.186 18.138l43.186 43.186a60.46 60.46 0 0 1 0 86.373L588.879 565.55l-8.637 8.637-117.466 68.234a60.46 60.46 0 0 1-31.958 11.229z"
  }),
  h$1("path", {
    d: "M728.802 962H252.891A190.883 190.883 0 0 1 62.008 771.98V296.934a190.883 190.883 0 0 1 190.883-192.61h267.754a60.46 60.46 0 0 1 0 120.92H252.891a69.962 69.962 0 0 0-69.098 69.099V771.98a69.962 69.962 0 0 0 69.098 69.098h475.911A69.962 69.962 0 0 0 797.9 771.98V503.363a60.46 60.46 0 1 1 120.922 0V771.98A190.883 190.883 0 0 1 728.802 962z"
  })
]);
EditIcon.displayName = "EditIcon";
const PageMeta = defineComponent({
  name: "PageMeta",
  setup() {
    const themeLocale = useThemeLocaleData();
    const editLink = useEditLink();
    const updateTime = useUpdateTime();
    const contributors = useContributors();
    return () => {
      var _a2;
      const { metaLocales } = themeLocale.value;
      return h$1("footer", { class: "vp-page-meta" }, [
        editLink.value ? h$1("div", { class: "vp-meta-item edit-link" }, h$1(AutoLink, { class: "vp-meta-label", config: editLink.value }, { before: () => h$1(EditIcon) })) : null,
        h$1("div", { class: "vp-meta-item git-info" }, [
          updateTime.value ? h$1("div", { class: "update-time" }, [
            h$1("span", { class: "vp-meta-label" }, `${metaLocales.lastUpdated}: `),
            h$1(ClientOnly, () => h$1("span", { class: "vp-meta-info" }, updateTime.value))
          ]) : null,
          ((_a2 = contributors.value) == null ? void 0 : _a2.length) ? h$1("div", { class: "contributors" }, [
            h$1("span", { class: "vp-meta-label" }, `${metaLocales.contributors}: `),
            contributors.value.map(({ email, name }, index) => [
              h$1("span", { class: "vp-meta-info", title: `email: ${email}` }, name),
              index !== contributors.value.length - 1 ? "," : ""
            ])
          ]) : null
        ])
      ]);
    };
  }
});
const PrintButton = defineComponent({
  name: "PrintButton",
  setup() {
    const themeData2 = useThemeData();
    const themeLocale = useThemeLocaleData();
    return () => themeData2.value.print === false ? null : h$1("button", {
      type: "button",
      class: "print-button",
      title: themeLocale.value.metaLocales.print,
      onClick: () => {
        window.print();
      }
    }, h$1(PrintIcon));
  }
});
const TOC = defineComponent({
  name: "TOC",
  props: {
    /**
     * TOC items config
     *
     * TOC 项目配置
     */
    items: {
      type: Array,
      default: () => []
    },
    /**
     * Max header nesting depth
     *
     * 最大的标题嵌套深度
     */
    headerDepth: {
      type: Number,
      default: 2
    }
  },
  slots: Object,
  setup(props, { slots }) {
    const route = useRoute();
    const page = usePageData();
    const metaLocale = useMetaLocale();
    const [isExpanded, toggleExpanded] = useToggle();
    const toc = shallowRef();
    const tocMarkerTop = ref("-1.7rem");
    const scrollTo2 = (top) => {
      var _a2;
      (_a2 = toc.value) == null ? void 0 : _a2.scrollTo({ top, behavior: "smooth" });
    };
    const updateTocMarker = () => {
      if (toc.value) {
        const activeTocItem = document.querySelector(".vp-toc-item.active");
        if (activeTocItem)
          tocMarkerTop.value = `${// Active toc item top
          activeTocItem.getBoundingClientRect().top - // Toc top
          toc.value.getBoundingClientRect().top + // Toc scroll top
          toc.value.scrollTop}px`;
        else
          tocMarkerTop.value = "-1.7rem";
      } else {
        tocMarkerTop.value = "-1.7rem";
      }
    };
    onMounted(() => {
      watch(() => route.hash, (hash) => {
        if (toc.value) {
          const activeTocItem = document.querySelector(`#toc a.vp-toc-link[href$="${hash}"]`);
          if (!activeTocItem)
            return;
          const { top: tocTop, height: tocHeight } = toc.value.getBoundingClientRect();
          const { top: activeTocItemTop, height: activeTocItemHeight } = activeTocItem.getBoundingClientRect();
          if (activeTocItemTop < tocTop)
            scrollTo2(toc.value.scrollTop + activeTocItemTop - tocTop);
          else if (activeTocItemTop + activeTocItemHeight > tocTop + tocHeight)
            scrollTo2(toc.value.scrollTop + activeTocItemTop + activeTocItemHeight - tocTop - tocHeight);
        }
      });
      watch(() => route.fullPath, updateTocMarker, {
        flush: "post",
        immediate: true
      });
    });
    return () => {
      var _a2, _b2;
      const renderHeader = ({ title, level, slug }) => h$1(RouteLink, {
        to: `#${slug}`,
        class: ["vp-toc-link", `level${level}`],
        onClick: () => {
          toggleExpanded();
        }
      }, () => title);
      const renderChildren = (headers, headerDepth) => headers.length && headerDepth > 0 ? h$1("ul", { class: "vp-toc-list" }, headers.map((header) => {
        const children = renderChildren(header.children, headerDepth - 1);
        return [
          h$1("li", {
            class: [
              "vp-toc-item",
              { active: route.hash === `#${header.slug}` }
            ]
          }, renderHeader(header)),
          children ? h$1("li", children) : null
        ];
      })) : null;
      const tocHeaders = props.items.length ? renderChildren(props.items, props.headerDepth) : page.value.headers ? renderChildren(page.value.headers, props.headerDepth) : null;
      return tocHeaders ? h$1("div", { class: "vp-toc-placeholder" }, [
        h$1("aside", { id: "toc" }, [
          (_a2 = slots.before) == null ? void 0 : _a2.call(slots),
          h$1("div", {
            class: "vp-toc-header",
            onClick: () => {
              toggleExpanded();
            }
          }, [
            metaLocale.value.toc,
            h$1(PrintButton),
            h$1("div", {
              class: ["arrow", isExpanded.value ? "down" : "end"]
            })
          ]),
          h$1("div", {
            class: ["vp-toc-wrapper", isExpanded.value ? "open" : ""],
            ref: toc
          }, [
            tocHeaders,
            h$1("div", {
              class: "vp-toc-marker",
              style: {
                top: tocMarkerTop.value
              }
            })
          ]),
          (_b2 = slots.after) == null ? void 0 : _b2.call(slots)
        ])
      ]) : null;
    };
  }
});
const NormalPage = defineComponent({
  name: "NormalPage",
  slots: Object,
  setup(_props, { slots }) {
    const frontmatter = usePageFrontmatter();
    const { isDarkmode } = useDarkmode();
    const themeLocale = useThemeLocaleData();
    const tocEnable = computed(() => frontmatter.value.toc ?? themeLocale.value.toc ?? true);
    const headerDepth = computed(() => frontmatter.value.headerDepth ?? themeLocale.value.headerDepth ?? 2);
    return () => h$1("main", { id: "main-content", class: "vp-page" }, h$1(hasGlobalComponent("LocalEncrypt") ? resolveComponent("LocalEncrypt") : B$1, () => {
      var _a2, _b2, _c, _d;
      return [
        (_a2 = slots.top) == null ? void 0 : _a2.call(slots),
        frontmatter.value.cover ? h$1("div", { class: "page-cover" }, h$1("img", {
          src: withBase(frontmatter.value.cover),
          alt: "",
          "no-view": ""
        })) : null,
        h$1(BreadCrumb),
        h$1(PageTitle),
        tocEnable.value ? h$1(TOC, { headerDepth: headerDepth.value }, {
          before: slots.tocBefore ? () => slots.tocBefore() : null,
          after: slots.tocAfter ? () => slots.tocAfter() : null
        }) : null,
        (_b2 = slots.contentBefore) == null ? void 0 : _b2.call(slots),
        h$1(MarkdownContent),
        (_c = slots.contentAfter) == null ? void 0 : _c.call(slots),
        h$1(PageMeta),
        h$1(PageNav),
        hasGlobalComponent("CommentService") ? h$1(resolveComponent("CommentService"), {
          darkmode: isDarkmode.value
        }) : null,
        (_d = slots.bottom) == null ? void 0 : _d.call(slots)
      ];
    }));
  }
});
const PortfolioHero = defineComponent({
  name: "PortfolioHero",
  slots: Object,
  setup(_props, { slots }) {
    const authorInfo = useAuthorInfo();
    const frontmatter = usePageFrontmatter();
    const index = ref(0);
    const currentTitle = computed(() => {
      var _a2;
      return ((_a2 = frontmatter.value.titles) == null ? void 0 : _a2[index.value]) ?? "";
    });
    const title = ref("");
    const avatar = computed(() => {
      const { name, avatar: avatar2, avatarDark, avatarAlt, avatarStyle } = frontmatter.value;
      return {
        name: name ?? authorInfo.value.name,
        avatar: avatar2 ? withBase(avatar2) : null,
        avatarDark: avatarDark ? withBase(avatarDark) : null,
        avatarStyle,
        // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
        alt: (avatarAlt || name) ?? ""
      };
    });
    const bg = computed(() => {
      const { bgImage, bgImageDark, bgImageStyle } = frontmatter.value;
      return {
        image: isString(bgImage) ? withBase(bgImage) : null,
        imageDark: isString(bgImageDark) ? withBase(bgImageDark) : null,
        bgStyle: bgImageStyle
      };
    });
    const info = computed(() => {
      const { welcome, name, titles, medias } = frontmatter.value;
      return {
        name: name ?? authorInfo.value.name,
        welcome: welcome ?? "👋 Hi There, I'm",
        title: title.value,
        titles: titles ?? [],
        medias: medias ?? []
      };
    });
    const startTyping = () => {
      title.value = "";
      let charIndex = 0;
      let shouldStop = false;
      const typeNext = async () => {
        if (!shouldStop) {
          title.value += currentTitle.value[charIndex];
          charIndex += 1;
          await nextTick();
          if (charIndex < currentTitle.value.length) {
            setTimeout(() => {
              void typeNext();
            }, 150);
          } else {
            const length = info.value.titles.length;
            setTimeout(() => {
              index.value = length <= 1 || index.value === info.value.titles.length - 1 ? 0 : index.value + 1;
            }, 1e3);
          }
        }
      };
      void typeNext();
      return () => {
        shouldStop = true;
      };
    };
    let stop;
    onMounted(() => {
      watch(currentTitle, () => {
        stop == null ? void 0 : stop();
        stop = startTyping();
      }, { immediate: true });
    });
    return () => {
      var _a2, _b2, _c;
      return h$1("section", {
        id: "portfolio",
        class: ["vp-portfolio", { bg: bg.value.image }]
      }, [
        ((_a2 = slots.bg) == null ? void 0 : _a2.call(slots, bg.value)) ?? [
          bg.value.image ? h$1("div", {
            class: ["vp-portfolio-mask", { light: bg.value.imageDark }],
            style: [
              {
                background: `url(${bg.value.image}) center/cover no-repeat`
              },
              bg.value.bgStyle
            ]
          }) : null,
          bg.value.imageDark ? h$1("div", {
            class: "vp-portfolio-mask dark",
            style: [
              {
                background: `url(${bg.value.imageDark}) center/cover no-repeat`
              },
              bg.value.bgStyle
            ]
          }) : null
        ],
        ((_b2 = slots.avatar) == null ? void 0 : _b2.call(slots, avatar.value)) ?? h$1("div", { class: "vp-portfolio-avatar" }, [
          h$1(DropTransition, { delay: 0.04 }, () => {
            const { avatarDark, name: title2, alt, avatarStyle: style } = avatar.value;
            return [
              h$1("img", {
                key: "light",
                class: { light: avatarDark },
                src: avatar.value.avatar,
                title: title2,
                alt,
                style
              }),
              avatarDark ? h$1("img", {
                key: "dark",
                class: "dark",
                src: avatarDark,
                title: title2,
                alt,
                style
              }) : null
            ];
          })
        ]),
        h$1("div", { class: "vp-portfolio-container" }, ((_c = slots.info) == null ? void 0 : _c.call(slots, info.value)) ?? h$1("div", { class: "vp-portfolio-info" }, [
          h$1(DropTransition, { appear: true, delay: 0.08 }, () => h$1("h6", { class: "vp-portfolio-welcome" }, info.value.welcome)),
          h$1(DropTransition, { appear: true, delay: 0.12 }, () => h$1("h1", { class: "vp-portfolio-name", id: "main-title" }, info.value.name)),
          h$1(DropTransition, { appear: true, delay: 0.16 }, () => h$1("h2", { class: "vp-portfolio-title" }, title.value)),
          h$1(DropTransition, { appear: true, delay: 0.2 }, () => info.value.medias.length ? h$1("div", { class: "vp-portfolio-medias" }, info.value.medias.map(({ name, url, icon }) => h$1("a", {
            class: "vp-portfolio-media",
            href: url,
            rel: "noopener noreferrer",
            target: "_blank",
            title: name
          }, h$1(HopeIcon, { icon })))) : hasGlobalComponent("SocialMedias") ? h$1(resolveComponent("SocialMedias")) : null)
        ]))
      ]);
    };
  }
});
const PortfolioHome = defineComponent({
  name: "PortfolioHome",
  setup() {
    const frontmatter = usePageFrontmatter();
    const content = computed(() => frontmatter.value.content ?? "portfolio");
    return () => h$1("main", {
      id: "main-content",
      class: "vp-page vp-portfolio-home",
      "aria-labelledby": "main-title"
    }, [
      h$1(PortfolioHero),
      content.value === "none" ? null : h$1("div", {}, h$1(DropTransition, { appear: true, delay: 0.24 }, () => h$1(MarkdownContent, {
        class: {
          "vp-portfolio-content": content.value === "portfolio"
        }
      })))
    ]);
  }
});
const SkipLink = defineComponent({
  name: "SkipLink",
  props: {
    /** @description Content ID */
    content: {
      type: String,
      default: "main-content"
    }
  },
  setup(props) {
    const page = usePageData();
    const themeLocale = useThemeLocaleData();
    const skipToMainContent = shallowRef();
    const focusMainContent = ({ target }) => {
      const el = document.querySelector(target.hash);
      if (el) {
        const removeTabIndex = () => {
          el.removeAttribute("tabindex");
          el.removeEventListener("blur", removeTabIndex);
        };
        el.setAttribute("tabindex", "-1");
        el.addEventListener("blur", removeTabIndex);
        el.focus();
        window.scrollTo(0, 0);
      }
    };
    onMounted(() => {
      watch(() => page.value.path, () => skipToMainContent.value.focus());
    });
    return () => [
      h$1("span", {
        ref: skipToMainContent,
        tabindex: "-1"
      }),
      h$1("a", {
        href: `#${props.content}`,
        class: "vp-skip-link sr-only",
        onClick: focusMainContent
      }, themeLocale.value.routeLocales.skipToContent)
    ];
  }
});
const Layout = defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Layout",
  slots: Object,
  setup(_props, { slots }) {
    const themeData2 = useThemeData();
    const themeLocale = useThemeLocaleData();
    const page = usePageData();
    const frontmatter = usePageFrontmatter();
    const isPure = usePure();
    const { isMobile } = useWindowSize();
    const sidebarDisplay = computed(() => {
      var _a2, _b2;
      return ((_a2 = themeLocale.value.blog) == null ? void 0 : _a2.sidebarDisplay) ?? ((_b2 = themeData2.value.blog) == null ? void 0 : _b2.sidebarDisplay) ?? "mobile";
    });
    return () => [
      h$1(SkipLink),
      h$1(CommonWrapper, {}, {
        default: () => {
          var _a2;
          return ((_a2 = slots.default) == null ? void 0 : _a2.call(slots)) ?? (frontmatter.value["portfolio"] ? h$1(PortfolioHome) : frontmatter.value.home ? h$1(HomePage) : h$1(isPure.value ? B$1 : FadeSlideY, () => h$1(NormalPage, { key: page.value.path }, {
            top: slots.top ? () => slots.top() : null,
            bottom: slots.bottom ? () => slots.bottom() : null,
            contentBefore: slots.contentBefore ? () => slots.contentBefore() : null,
            contentAfter: slots.contentAfter ? () => slots.contentAfter() : null,
            tocBefore: slots.tocBefore ? () => slots.tocBefore() : null,
            tocAfter: slots.tocAfter ? () => slots.tocAfter() : null
          })));
        },
        navScreenBottom: sidebarDisplay.value === "none" && hasGlobalComponent("BloggerInfo") ? () => h$1(resolveComponent("BloggerInfo")) : null,
        sidebar: !isMobile.value && sidebarDisplay.value === "always" && hasGlobalComponent("BloggerInfo") ? () => h$1(resolveComponent("BloggerInfo")) : null
      })
    ];
  }
});
const NotFoundHint = defineComponent({
  name: "NotFoundHint",
  setup() {
    const themeLocale = useThemeLocaleData();
    const getMsg = () => {
      const messages = themeLocale.value.routeLocales.notFoundMsg;
      return messages[Math.floor(Math.random() * messages.length)];
    };
    return () => h$1("div", { class: "not-found-hint" }, [
      h$1("p", { class: "error-code" }, "404"),
      h$1("h1", { class: "error-title" }, themeLocale.value.routeLocales.notFoundTitle),
      h$1("p", { class: "error-hint" }, getMsg())
    ]);
  }
});
const NotFound = defineComponent({
  name: "NotFound",
  slots: Object,
  setup(_props, { slots }) {
    const router = useRouter();
    const routeLocale = useRouteLocale();
    const themeLocale = useThemeLocaleData();
    return () => [
      h$1(SkipLink),
      h$1(CommonWrapper, { noSidebar: true }, () => {
        var _a2;
        return h$1("main", { id: "main-content", class: "vp-page not-found" }, ((_a2 = slots.default) == null ? void 0 : _a2.call(slots)) ?? [
          h$1(NotFoundHint),
          h$1("div", { class: "actions" }, [
            h$1("button", {
              type: "button",
              class: "action-button",
              onClick: () => {
                window.history.go(-1);
              }
            }, themeLocale.value.routeLocales.back),
            h$1("button", {
              type: "button",
              class: "action-button",
              onClick: () => {
                void router.push(themeLocale.value.home ?? routeLocale.value);
              }
            }, themeLocale.value.routeLocales.home)
          ])
        ]);
      })
    ];
  }
});
const icons = { "Baidu": '<svg xmlns="http://www.w3.org/2000/svg" class="icon baidu-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#2319DC"/><path fill="#FFF" d="M320 528c65-14 56-92 54-109-3-26-34-72-76-68-52 4-60 81-60 81-7 35 17 110 82 96m121-131c36 0 65-41 65-92 0-52-29-93-65-93s-65 41-65 93c0 51 29 92 65 92m155 7c48 6 79-46 86-85 6-38-25-84-59-91-35-8-77 46-81 82-5 44 6 87 54 94m191 65c0-19-15-75-73-75-57 0-65 53-65 91 0 35 3 85 75 84 71-2 63-81 63-100m-73 163s-74-57-118-119c-59-92-142-55-170-8s-72 76-78 84-90 53-71 135c18 83 83 81 83 81s49 5 104-7c56-13 104 3 104 3s131 43 166-41c36-84-20-128-20-128"/><path fill="#2319DC" d="M453 552v56h-45s-46 3-61 54c-6 35 4 55 6 59s17 29 53 37h85V553zm-1 172h-34s-24-1-31-29c-4-12 0-26 2-31 2-6 10-19 26-23h37zm60-111v107s2 27 39 37h98V613h-42v108h-40s-13-2-16-12v-97z"/></svg>', "BiliBili": '<svg xmlns="http://www.w3.org/2000/svg" class="icon bilibili-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#1296db"/><path fill="#fff" d="M745.363 177.725a47 47 0 0 1 0 66.3L702.5 286.85h44A141 141 0 0 1 887 427.512v281.25a141 141 0 0 1-141 140.626H277.25A141 141 0 0 1 137 708.763v-281.25a141 141 0 0 1 141-141h43.725l-42.788-42.825a47 47 0 1 1 66.263-66.3l99.45 99.45c2.963 2.962 5.438 6.187 7.425 9.637h120.487c1.988-3.45 4.5-6.75 7.463-9.675l99.413-99.45a47 47 0 0 1 66.3 0zm1.012 203.25h-468.75a47 47 0 0 0-46.763 43.388l-.112 3.525v281.25c0 24.712 19.125 44.962 43.387 46.724l3.488.15h468.75a47 47 0 0 0 46.763-43.387l.112-3.487v-281.25c0-26-21-47-47-46.876zm-375 93.75c26 0 47 21 47 47v47a47 47 0 1 1-93.75 0V521.6c0-26 21-47 47-47zm281.25 0c26 0 47 21 47 47v47a47 47 0 1 1-93.75 0V521.6c0-26 21-47 47-47z"/></svg>', "Bitbucket": '<svg xmlns="http://www.w3.org/2000/svg" class="icon bitbucket-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#205081"/><path fill="#fff" d="M512 191.32v.01-.01c-152.76 0-277.805 41.114-277.805 92.166 0 13.443 33.353 206.247 46.577 282.708 5.932 34.285 94.508 84.563 231.126 84.563l.102-.407v.407c137.484 0 225.26-50.278 231.192-84.578 13.23-76.457 46.592-269 46.592-282.698.005-51.047-125-92.165-277.784-92.165zm0 397.493c-48.771 0-88.31-39.545-88.31-88.31 0-48.772 39.539-88.306 88.31-88.306s88.31 39.534 88.31 88.31c0 48.766-39.539 88.306-88.31 88.306zm-.05-276.842c-98.256-.153-177.885-17.232-177.855-38.14.036-20.912 79.72-37.731 177.976-37.568 98.256.153 177.884 17.22 177.849 38.139 0 20.908-79.705 37.716-177.966 37.564z"/><path fill="#fff" d="M711.668 642.814c-4.227 0-7.608 2.994-7.608 2.994S635.65 699.987 512 699.987s-192.06-54.18-192.06-54.18-3.386-2.988-7.608-2.988c-5.04 0-9.827 3.391-9.827 10.871 0 .79.076 1.579.224 2.353 10.617 56.826 18.382 97.206 19.736 103.347 9.268 41.805 91.045 73.411 189.525 73.411 98.49 0 180.267-31.606 189.535-73.411 1.364-6.136 9.114-46.49 19.736-103.317.143-.779.224-1.578.224-2.368 0-7.485-4.786-10.881-9.827-10.881zM467.659 500.477a44 44 0 1 0 88.51 0 44 44 0 1 0-88.51 0z"/></svg>', "Dingding": '<svg xmlns="http://www.w3.org/2000/svg" class="icon dingding-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#1C9DF7"/><path fill="#fff" d="M760.551 442c0 5-5 13-7.767 20.713-23.302 49.192-82.85 145-82.85 145l-18.124 31.069h85.44L576.727 853.758l36.247-145h-67.316l23.302-95.796c-18.124 5-41.426 10-67.316 18.124 0 0-36.247 20.712-101-38.837 0 0-44.015-38.836-18.124-49.192 10-5 54.37-10 88.029-13 44.014-5.179 72.494-10 72.494-10s-139.81 2.59-173.468-2.589c-33.658-5-75.083-59.549-82.85-108.741 0 0-12.946-25.89 28.48-13 44.013 13 222.66 49.192 222.66 49.192s-235.606-72.494-251.14-90.618c-15.535-18.123-46.604-95.796-41.426-145 0 0 2.59-13 13-7.767 0 0 173.469 80.261 292.566 121.686 119 41.426 222.66 64.727 209.715 119z"/></svg>', "Discord": '<svg xmlns="http://www.w3.org/2000/svg" class="icon discord-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#2DAAE1"/><path fill="#fff" d="m422.935 240.147 5.851 8.052c-113.039 34.253-165.649 84.585-165.649 84.585s13.645-8.052 37.024-18.123c66.28-30.215 118.865-38.267 142.244-40.286 3.91 0 7.819-1.994 9.76-1.994 38.966-6.058 81.816-6.058 126.658-2.02 58.462 8.053 122.749 24.157 187.061 62.423 0 0-48.7-48.338-155.862-82.566l7.767-10.071h1.968c13.308.233 91.757 4.246 173.416 68.481 0 0 89.634 169.144 89.634 376.555 1.942-2.02-50.668 92.637-189.003 96.65 0 0-23.405-28.194-40.933-52.35 81.84-24.157 113.013-76.534 113.013-76.534a313.796 313.796 0 0 1-72.106 38.267c-31.172 14.11-60.403 22.162-89.633 28.22-60.404 12.066-114.955 8.027-161.74 0a636.81 636.81 0 0 1-91.576-28.22c-13.644-6.033-29.23-12.065-44.817-22.137-1.941-2.02-3.883-2.02-5.85-4.039-1.943 0-1.943-2.02-1.943-2.02-11.702-6.032-17.528-10.07-17.528-10.07s29.23 52.376 109.104 76.532c-19.47 24.157-40.907 54.371-40.907 54.371-138.36-4.039-190.97-98.67-190.97-98.67 0-207.41 89.633-376.555 89.633-376.555 89.634-70.5 175.384-68.481 175.384-68.481zm213.961 233.017c-35.315 0-65 34.512-65 78s29.412 78 65 78 65-34.512 65-78-29.412-78-65-78zm-233.016 0c-35.315 0-65 34.512-65 78s29.412 78 65 78 64.726-34.512 64.726-78-29.411-78-64.726-78z"/></svg>', "Dribbble": '<svg xmlns="http://www.w3.org/2000/svg" class="icon dribbble-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#DC4373"/><path fill="#C13366" d="M716.668 302.752c-13.332 5.154-28.61 3.676-35.726-1.068-86.196-48.27-179.286-62.06-265.482-37.926C292.074 300.212 241.674 437.028 242 564.746c22.622 42.136 52.558 105.234 61.854 153.104l298.24 298.246c210.532-37.376 376.584-203.408 413.986-413.928L716.668 302.752z"/><path fill="#F0F1F1" d="M511.994 219.308c-161.592 0-293.058 131.31-293.058 292.696s131.466 292.684 293.058 292.684c161.598 0 293.07-131.292 293.07-292.684 0-161.386-131.472-292.696-293.07-292.696zm192.842 138.148c33.43 41.432 53.744 93.756 54.682 150.772-11.122-2.282-58.23-11.068-114.526-11.068-18.164 0-37.282.91-56.448 3.278a822.854 822.854 0 0 0-4.938-11.812c-4.972-11.692-10.326-23.29-15.874-34.72 86.642-35.696 128.436-85.238 137.104-96.45zm-192.842-92.33c62.446 0 119.528 23.2 163.126 61.412-6.902 9.416-44.332 56.202-127.876 87.768-38.67-70.688-80.996-129.22-91.07-142.812a247.13 247.13 0 0 1 55.82-6.368zm-106.352 23.99c8.536 11.758 50.928 70.918 90.592 141.036-106.448 27.982-200.976 29.806-223.79 29.806h-2.424c16.39-75.534 67.424-138.298 135.622-170.842zM264.402 512.39c0-2.038.034-4.076.1-6.102 1.48.018 3.666.018 6.5.018 30.726 0 137.382-2.538 247.288-35.154a828.402 828.402 0 0 1 18.928 39.526 232.24 232.24 0 0 0-8.234 2.482C405.236 553.126 337.216 658.936 326.75 676.232c-38.778-43.696-62.348-101.058-62.348-163.842zm247.592 247.246c-56.786 0-109.192-19.232-151.01-51.48 7.074-13.868 58.412-106.3 194.026-153.5a1.806 1.806 0 0 1 .272-.09c34.006 88.53 48.408 162.834 52.358 185.862-29.432 12.374-61.752 19.208-95.646 19.208zm140.236-43.584c-3.32-19.052-16.66-88.688-47.452-173.618 17.27-2.686 34.072-3.748 49.828-3.748 51.748 0 92.23 11.33 101.634 14.204-11.182 67.444-49.794 125.808-104.01 163.162z"/><path fill="#D1D1D1" d="M511.994 219.308c-.382 0-.758.028-1.142.028v45.804c.38 0 .758-.018 1.142-.018 62.446 0 119.528 23.2 163.126 61.412-6.902 9.416-44.332 56.202-127.876 87.768-12.14-22.194-24.642-43.188-36.392-61.968V473.29c2.476-.706 4.954-1.41 7.434-2.144a828.402 828.402 0 0 1 18.928 39.526c-2.776.796-5.514 1.592-8.234 2.478a323.314 323.314 0 0 0-18.128 6.52v53.228a418.976 418.976 0 0 1 44.428-18.332c34.006 88.53 48.408 162.834 52.358 185.862-29.428 12.374-61.746 19.208-95.646 19.208-.382 0-.758-.024-1.142-.024v45.05c.382 0 .758.028 1.142.028 161.598 0 293.07-131.292 293.07-292.684.002-161.388-131.47-292.698-293.068-292.698zm71.614 269.316c-4.972-11.692-10.326-23.29-15.874-34.72 86.64-35.696 128.434-85.236 137.102-96.45 33.43 41.432 53.748 93.756 54.682 150.77-11.122-2.282-58.23-11.068-114.522-11.068-18.164 0-37.282.914-56.448 3.278-1.624-3.932-3.24-7.852-4.94-11.81zm68.622 227.428c-3.32-19.052-16.66-88.688-47.452-173.618 17.27-2.686 34.072-3.748 49.828-3.748 51.748 0 92.23 11.33 101.634 14.204-11.182 67.444-49.794 125.808-104.01 163.162z"/></svg>', "Email": '<svg xmlns="http://www.w3.org/2000/svg" class="icon email-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#1384FF"/><path fill="#fff" d="M270.077 286.233H751.99c32.933 0 59.86 24.855 60.274 55.51l-301.023 157L210.217 341.88c.207-30.723 26.927-55.717 59.86-55.717zm-59.929 115.714-.276 277.756c0 30.931 27.134 56.2 60.205 56.2H751.99c33.14 0 60.274-25.269 60.274-56.2V401.81L518.283 551.492a15.88 15.88 0 0 1-14.43 0L210.148 401.947z"/></svg>', "Evernote": '<svg xmlns="http://www.w3.org/2000/svg" class="icon evernote-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#14cc45"/><path fill="#595757" d="M347.671 193.259v87.51h-87.51z"/><path fill="#595757" d="M788.047 323.645s3.65-77.491-73.84-103.02c0 0-89.479-12.867-151.41-11.91 0 0-8.595-53.23-103.33-53.23 0 0-89.556-1.244-89.892 70.526v61.671s2.848 14.991-27.833 14.991h-81.581s-34.28 5.282-34.28 72.934c0 0 3.133 120.082 41.322 200.24 0 0 9.398 34.667 58.228 46.577 0 0 95.822 25.477 123.991 21.722 0 0 58.228 22.137 62.008-111.874 0 0 3.755-19.935 6.266 11.392 0 0-1.89 68.948 57.607 72.702 0 0 45.723 12.557 73.892 10.045 0 0 37.568 2.15 37.568 64.158 0 0 13.152 71.665-34.435 71.665h-65.763s-18.149 4.428-18.149-21.877c0 0-4.997-21.878 26.305-21.878h15.534v-43.756h-43.082s-66.332-6.317-66.332 50.047v75.135s9.347 49.866 66.332 49.866h121.273s48.441.44 76.61-90.359c0-.078 48.52-182.323 22.991-435.767zM625.272 486.523c0-21.877 18.02-51.16 39.432-51.16s36.48 36.118 36.48 58.022c-28.79-7.897-45.827-9.606-75.912-6.862z"/></svg>', "Facebook": '<svg xmlns="http://www.w3.org/2000/svg" class="icon facebook-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#3c599b"/><path fill="#fff" d="M353.357 400.378h68.151v-66.235c0-29.206.737-74.247 21.952-102.142 22.348-29.542 53.026-49.622 105.794-49.622 85.976 0 122.18 12.263 122.18 12.263L654.4 295.61s-28.407-8.213-54.903-8.213c-26.512 0-50.243 9.5-50.243 35.995v76.988h108.687L650.352 499H549.254v342.602H421.508V499h-68.15v-98.622z"/></svg>', "Flipboard": '<svg xmlns="http://www.w3.org/2000/svg" class="icon flipboard-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#e12828"/><path fill="#fff" d="M263.487 261.893H445.92V809.17H263.487V261.893z"/><path fill="#fce9e9" d="M445.92 261.893h364.842v182.435H445.92V261.893z"/><path fill="#f6bebe" d="M445.92 444.328h182.435v182.435H445.92V444.328z"/></svg>', "Gitee": '<svg xmlns="http://www.w3.org/2000/svg" class="icon gitee-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#C71D23"/><path fill="#fff" d="M772.953 454.723H480.17v.006a25.46 25.46 0 0 0-25.46 25.453l-.025 63.649a25.46 25.46 0 0 0 25.46 25.466l178.242-.007a25.46 25.46 0 0 1 25.459 25.46v12.73c0 42.18-34.198 76.378-76.378 76.378H365.583a25.46 25.46 0 0 1-25.46-25.46V416.533h-.006c0-42.18 34.192-76.378 76.378-76.378h356.388v-.013a25.46 25.46 0 0 0 25.46-25.446l.057-63.65h.013a25.46 25.46 0 0 0-25.46-25.471l-356.432.012c-105.453 0-190.946 85.493-190.946 190.946v356.433a25.46 25.46 0 0 0 25.46 25.46H626.56c94.913 0 171.852-76.94 171.852-171.852V480.182a25.46 25.46 0 0 0-25.46-25.46z"/></svg>', "GitHub": '<svg xmlns="http://www.w3.org/2000/svg" class="icon github-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#171515"/><path fill="#fff" d="M509.423 146.442c-200.317 0-362.756 162.42-362.756 362.8 0 160.266 103.936 296.24 248.109 344.217 18.139 3.327 24.76-7.872 24.76-17.486 0-8.613-.313-31.427-.49-61.702-100.912 21.923-122.205-48.63-122.205-48.63-16.495-41.91-40.28-53.067-40.28-53.067-32.937-22.51 2.492-22.053 2.492-22.053 36.407 2.566 55.568 37.386 55.568 37.386 32.362 55.438 84.907 39.43 105.58 30.143 3.296-23.444 12.667-39.43 23.032-48.498-80.557-9.156-165.246-40.28-165.246-179.297 0-39.604 14.135-71.988 37.342-97.348-3.731-9.178-16.18-46.063 3.556-96.009 0 0 30.46-9.754 99.76 37.19 28.937-8.048 59.97-12.071 90.823-12.211 30.807.14 61.843 4.165 90.822 12.21 69.26-46.944 99.663-37.189 99.663-37.189 19.792 49.946 7.34 86.831 3.61 96.01 23.25 25.359 37.29 57.742 37.29 97.347 0 139.366-84.82 170.033-165.637 179.013 13.026 11.2 24.628 33.342 24.628 67.182 0 48.498-.445 87.627-.445 99.521 0 9.702 6.535 20.988 24.945 17.444 144.03-48.067 247.881-183.95 247.881-344.175 0-200.378-162.442-362.798-362.802-362.798z"/></svg>', "Gitlab": '<svg xmlns="http://www.w3.org/2000/svg" class="icon gitlab-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#E8F0FF"/><path fill="#E24329" d="m512 808 110-340H402z"/><path fill="#FC6D26" d="M512 808 402 468H247z"/><path fill="#E24329" d="M247 468h155l-67-204c-4-11-19-11-22 0z"/><path fill="#FC6D26" d="m512 808 110-340h156z"/><path fill="#FCA326" d="m778 468 33 104c3 10-1 19-9 25L512 808z"/><path fill="#E24329" d="M778 468H622l68-204c3-11 18-11 21 0z"/><path fill="#FCA326" d="M512 808 222 597c-8-5-12-16-9-25l34-104z"/></svg>', "Gmail": '<svg xmlns="http://www.w3.org/2000/svg" class="icon gmail-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#DB4437"/><path fill="#E67C73" d="M277.48 285.567h465.767v441.362H277.48V285.567z"/><path fill="#FFF" d="M282.543 285.567h-10.645c-25.962 0-47.122 21.808-47.122 48.705v343.952c0 26.897 21.08 48.705 47.122 48.705h24.976V407.954l213.49 169.95 213.489-169.95V726.93h24.975c26.04 0 47.123-21.809 47.123-48.705V334.272c0-26.897-21.134-48.705-47.123-48.705h-10.644L510.364 480.44 282.542 285.567z"/></svg>', "Instagram": '<svg xmlns="http://www.w3.org/2000/svg" class="icon instagram-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#181818"/><path fill="#fff" d="M512 348.16c-88.222 0-163.84 71.417-163.84 163.84 0 88.222 71.417 163.84 163.84 163.84 88.222 0 163.84-71.417 163.84-163.84 0-88.222-75.618-163.84-163.84-163.84zm0 268.866c-58.814 0-105.026-46.212-105.026-105.026S453.186 406.974 512 406.974 617 453.186 617 512s-46.186 105-105 105zM680.041 306.15c-21 0-37.81 16.804-37.81 37.809s16.805 37.81 37.81 37.81 37.81-16.805 37.81-37.81-16.805-37.81-37.81-37.81z"/><path fill="#FFF" d="M659.036 196.923h-16.804c-50.413-4.2-210.051-4.2-260.464 0-96.623-4.2-180.644 71.418-184.845 168.041v16.804c-4.2 50.413-4.2 210.051 0 260.464-4.2 96.623 71.418 180.644 168.041 184.845h16.804c50.413 4.2 210.051 4.2 260.464 0 96.623 4.2 180.644-71.418 184.845-168.041V381.768c4.2-96.623-71.418-180.644-168.041-184.845zM759.86 696.845c-12.604 29.407-33.609 50.412-58.815 58.814-121.83 16.805-247.86 16.805-373.891 0-29.407-12.603-50.412-33.608-58.814-58.814-12.604-63.015-16.805-126-12.604-184.845-4.2-63.015 0-126 12.604-184.845 12.603-29.407 33.608-50.412 58.814-58.814 121.83-16.805 247.86-16.805 373.891 0 29.407 12.603 50.412 33.608 58.815 58.814 12.603 63.015 16.804 126 12.603 184.845 4.2 63.015 0 126-12.603 184.845z"/></svg>', "Lark": '<svg xmlns="http://www.w3.org/2000/svg" class="icon lark-icon" viewBox="0 0 700 700"><path fill="#fdfdfd" d="M0 350C0 156.7 156.7 0 350 0s350 156.7 350 350-156.7 350-350 350S0 543.3 0 350Z"/><path fill="#326ffd" d="M94.683 255.472c-1.188.99-3.547 1.424-3.565 2.971-.892 77.877-1.647 155.803.853 233.645.135 4.185 3.811 7.709 6.987 10.437 8.041 6.906 16.845 13.026 26.179 18.048 15.915 8.564 32.118 16.959 49.299 22.567 22.582 7.37 45.902 12.712 69.402 16.176 16.45 2.425 33.243 1.892 49.863 1.404 85.699-2.518 170.495-42.242 226.974-107.047 13.128-15.062 24.349-31.701 35.801-48.072.482-.689-.29-1.655-.435-2.483-11.645 12.501-23.322 25.66-38.015 34.376-38.027 22.561-80.103 18.178-120.414 4.963-24.658-8.083-49.594-15.711-73.208-26.468-32.043-14.597-63.264-31.14-93.363-49.411-50.119-30.424-92.859-71.794-136.358-111.106Z"/><path fill="#00d5b8" d="M373.34 355.289c22.389-21.264 43.857-43.542 67.167-63.793 15.84-13.761 40.614-23.584 58.792-32.162-13.932-44.24-30.142-84.389-60.513-120.46-3.54-4.204-7.91-9.366-13.399-9.603-81.245-3.519-162.641-2.296-243.958-1.541-1.72.016-3.262 2.127-3.451 3.836-.209 1.893 1.026 3.902 2.457 5.159 21.134 18.566 43.735 35.416 64.865 53.985 52.859 46.45 91.839 105.023 128.04 164.579Z"/><path fill="#133c99" d="M302.636 406.089c63.531 28.909 161.471 77.441 225.923 24.345 10.473-8.628 22.415-16.393 29.694-27.844 19.077-30.011 31.761-63.645 48.432-95.056 8.019-15.112 17.249-23.738 28.765-36.905-17.982-10.513-43.141-16.899-63.455-18.431-44.467-3.354-94.982 6.952-129.899 36.91-29.717 25.495-55.957 54.804-84.849 81.23-16.051 14.681-36.135 24.874-54.611 35.751Z"/></svg>', "Lines": '<svg xmlns="http://www.w3.org/2000/svg" class="icon lines-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#00C300"/><path fill="#fff" d="M861.44 469.76C861.44 313.28 704 186.08 512 186.08s-349.44 127.2-349.44 283.68C162.56 608 287 727.52 455 752c11.52 2.4 27 7.68 30.72 17.28a71.04 71.04 0 0 1 0 31.68l-5.28 29.76c0 8.64-7.2 34.56 30.24 19a1104 1104 0 0 0 274.56-202.56 251.52 251.52 0 0 0 75-175zM375.2 562.88h-69.12a17.76 17.76 0 0 1-18-18v-139.2a17.76 17.76 0 0 1 18-18 18 18 0 0 1 18 18v120.48h51a19 19 0 0 1 18 19 18 18 0 0 1-18 18zm72-18a18 18 0 1 1-36.48 0v-139.2a18 18 0 0 1 36.48 0zm167.04 0a18 18 0 0 1-12.48 17.28H596a18 18 0 0 1-14.4-7.2l-69.6-96v85.92a18 18 0 1 1-36.48 0v-139.2A18 18 0 0 1 488 388.16h5.76a18 18 0 0 1 14.4 7.2l71.52 96v-85.92a18 18 0 1 1 36.48 0zm112.32-87.84a18 18 0 0 1 18 18 17.76 17.76 0 0 1-18 18h-51v32.64h51a19 19 0 0 1 18 19 18 18 0 0 1-18 18H656a18 18 0 0 1-18-18v-139.2a18 18 0 0 1 18-18.28h69.12a18 18 0 0 1 18 18 18 18 0 0 1-18 19h-49.44v32.64zm0 0"/></svg>', "Linkedin": '<svg xmlns="http://www.w3.org/2000/svg" class="icon linkedin-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#4376B1"/><path fill="#F1F2F2" d="M838.301 555.94v225.157h-130.54V571.03c0-52.746-18.847-88.766-66.112-88.766-36.069 0-57.496 24.25-66.959 47.732-3.436 8.391-4.322 20.045-4.322 31.814v219.277h-130.55s1.752-355.784 0-392.613h130.56v55.637c-.263.438-.633.867-.867 1.285h.866v-1.285c17.349-26.694 48.287-64.856 117.651-64.856 85.884 0 150.273 56.114 150.273 176.685zm-535.05-356.72c-44.655 0-73.87 29.314-73.87 67.826 0 37.695 28.368 67.855 72.157 67.855h.847c45.532 0 73.842-30.16 73.842-67.855-.866-38.512-28.31-67.825-72.975-67.825zM237.14 781.098h130.5V388.474h-130.5v392.623z"/></svg>', "Pinterest": '<svg xmlns="http://www.w3.org/2000/svg" class="icon pinterest-icon" viewBox="0 0 1024 1024"><path fill="#fff" d="M512 1023.147c282.773 0 512-228.288 512-509.888 0-281.622-229.227-509.91-512-509.91S0 231.637 0 513.26c0 281.6 229.227 509.888 512 509.888z"/><path fill="#CA242D" d="M512 3.35C229.248 3.35 0 231.658 0 513.258c0 216.128 134.848 400.789 325.312 475.05-4.63-40.277-8.427-102.378 1.685-146.453 9.28-39.872 59.84-253.483 59.84-253.483s-15.168-30.634-15.168-75.541c0-70.933 41.302-123.797 92.715-123.797 43.819 0 64.896 32.725 64.896 71.765 0 43.627-27.819 109.099-42.56 169.963-12.224 50.773 25.707 92.33 75.84 92.33 91.03 0 160.981-95.68 160.981-233.344 0-122.133-88.064-207.317-214.058-207.317-145.814 0-231.36 108.693-231.36 221.163 0 43.648 16.853 90.645 37.93 116.245a15.19 15.19 0 0 1 3.371 14.699c-3.797 15.936-12.65 50.773-14.336 57.92-2.09 9.216-7.573 11.328-17.28 6.698-64.043-29.781-104.085-122.538-104.085-197.653 0-160.747 117.162-308.459 338.389-308.459 177.408 0 315.627 125.888 315.627 294.614 0 175.829-111.254 317.269-265.472 317.269-51.84 0-100.715-26.859-117.163-58.752l-32.021 121.28c-11.371 44.48-42.56 99.883-63.638 133.867A516.01 516.01 0 0 0 511.168 1024c282.752 0 512-228.31 512-509.91C1024 231.66 794.752 3.35 512 3.35z"/></svg>', "Pocket": '<svg xmlns="http://www.w3.org/2000/svg" class="icon pocket-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#EE4056"/><path fill="#fff" d="M716.52 309.066c12.549 0 23.172 4.394 31.87 13.182 8.697 8.788 13.023 19.48 13.023 32.006v150.4c0 33.975-6.568 66.41-19.705 97.307-13.138 30.918-30.76 57.487-52.89 79.685-22.106 22.197-48.562 39.864-79.367 52.888-30.804 13.024-63.081 19.547-96.876 19.547a246.897 246.897 0 0 1-97.215-19.547c-30.805-13.046-57.306-30.668-79.504-52.888-22.198-22.198-39.865-48.767-53.003-79.663a246.311 246.311 0 0 1-19.728-97.33V354.255c0-12.321 4.44-22.945 13.319-31.847a43.489 43.489 0 0 1 31.87-13.341H716.52zM512.574 617.339c9.06 0 16.989-3.216 23.738-9.581l117.103-112.415a32.622 32.622 0 0 0 10.691-24.62c0-9.469-3.33-17.533-9.966-24.191a32.958 32.958 0 0 0-24.237-10.012c-9.06 0-16.988 3.171-23.737 9.56l-93.547 89.808-93.614-89.809a33.185 33.185 0 0 0-23.443-9.559c-9.468 0-17.532 3.33-24.19 9.967-6.66 6.682-9.967 14.722-9.967 24.236 0 9.83 3.443 18.03 10.419 24.599l117.33 112.413c6.342 6.342 14.179 9.56 23.466 9.56l-.046.044z"/></svg>', "QQ": '<svg xmlns="http://www.w3.org/2000/svg" class="icon qq-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#5eaade"/><path fill="#fff" d="M805.25 585.542c-15-48.188-32.25-88.688-58.781-154.97 4.125-174.093-68.25-314.905-234.938-314.905-168.562 0-239.344 143.625-234.844 314.906-26.625 66.375-43.78 106.594-58.78 154.969-31.876 102.656-21.563 145.125-13.688 146.062 16.875 2.063 65.718-77.25 65.718-77.25 0 45.938 23.625 105.844 74.813 149.063-24.75 7.593-80.344 28.03-67.125 50.437 10.688 18.094 183.938 11.531 233.906 5.906 49.969 5.625 223.219 12.188 233.906-5.906 13.22-22.312-42.468-42.844-67.125-50.437 51.188-43.313 74.813-103.22 74.813-149.063 0 0 48.844 79.313 65.719 77.25 7.969-1.031 18.281-43.5-13.594-146.062z"/></svg>', "Qzone": '<svg xmlns="http://www.w3.org/2000/svg" class="icon qzone-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#0985DD"/><path fill="#fff" d="M722.38 595.24c22.486-4.056 11.345-12.424 2.156-11.346-16.685 1.72-40.43 1.925-66.562 1.284l3.029 17.79a656.641 656.641 0 0 0 61.402-7.702l-.025-.026zm68.95-174.915a5.287 5.287 0 0 0-4.493-3.645L598.42 389.29l-84.326-170.628c-1.925-3.594-7.958-3.594-9.857 0L419.885 389.29l-188.417 27.39a5.338 5.338 0 0 0-4.466 3.645 5.493 5.493 0 0 0 1.488 5.57l136.36 132.92-32.088 187.519a5.263 5.263 0 0 0 2.13 5.39c1.695 1.284 3.851 1.463 5.776.385l168.651-88.407 168.524 88.638 2.567.642 3.209-1.079c1.72-1.283 2.566-3.208 2.13-5.34l-24.591-143.648c-27.21 2.156-54.37 3.183-76.42 3.183-77.267 0-135.075-3.645-135.948-3.645a16.48 16.48 0 0 1-14.785-11.757 16.247 16.247 0 0 1 5.981-17.764l155.431-113.05c-99.959-7.906-183.873-6.418-184.721-6.418-13.502.642-25.67-3.645.642-14.375 4.518-1.694 109.2-23.72 230.362-7.445 6.673.847 12.013 5.75 13.733 12.194a16.61 16.61 0 0 1-6.263 17.302L497.204 571.598c27.826 5.802 100.37 12.014 160.745 13.502l-4.519-26.312 136.308-132.97a5.338 5.338 0 0 0 1.54-5.544l.051.051z"/></svg>', "Reddit": '<svg xmlns="http://www.w3.org/2000/svg" class="icon reddit-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#ff4501"/><path fill="#fff" d="M617.199 680.55c5.666 5.974 5.666 11.742 0 17.34-21.845 23.143-56.9 34.714-105.199 34.714s-83.354-11.571-105.199-34.714c-5.666-5.598-5.666-11.366 0-17.34a10.445 10.445 0 0 1 7.919-3.379c3.174 0 5.803 1.127 7.919 3.38 16.93 18.295 46.728 27.408 89.361 27.408 42.325 0 72.09-9.113 89.361-27.409a10.445 10.445 0 0 1 7.919-3.379c3.174 0 5.803 1.127 7.919 3.38zm-176.06-136.635c9.182 9.694 13.756 21.47 13.756 35.294 0 13.79-4.574 25.565-13.756 35.26a44.134 44.134 0 0 1-33.28 14.54c-13.073 0-24.234-4.847-33.587-14.54a49.015 49.015 0 0 1-13.995-35.26c0-14.2 4.642-26.147 13.995-35.84 9.353-9.728 20.514-14.575 33.587-14.575 13.04 0 24.132 5.051 33.28 15.12zm222.584 35.294c0 13.79-4.642 25.565-13.995 35.26a44.954 44.954 0 0 1-33.587 14.54c-13.04 0-24.132-4.847-33.28-14.54a49.493 49.493 0 0 1-13.756-35.26c0-13.824 4.574-25.669 13.756-35.567 9.148-9.9 20.24-14.848 33.28-14.848 13.073 0 24.234 4.847 33.587 14.575 9.353 9.693 13.995 21.64 13.995 35.84zM796.433 512c0-18.295-6.144-33.963-18.5-47.036a59.494 59.494 0 0 0-44.92-19.592c-17.647 0-32.768 6.724-45.465 20.138-45.841-33.587-100.66-51.507-164.455-53.725l33.314-158.482 105.746 25.19c0 13.825 4.573 25.6 13.755 35.295 9.148 9.694 20.241 14.54 33.314 14.54 13.04 0 24.235-4.915 33.553-14.813 9.353-9.899 13.995-21.743 13.995-35.567s-4.642-25.669-13.995-35.567a44.578 44.578 0 0 0-33.553-14.814c-19.046 0-33.143 9.318-42.325 27.99L550.06 228.112c-6.69-1.877-11.094 1.126-13.21 8.977l-36.488 174.695c-63.454 2.594-117.897 20.718-163.363 54.272a59.187 59.187 0 0 0-46.011-20.685c-17.613 0-32.598 6.52-44.92 19.592a66.082 66.082 0 0 0-18.5 47.036c0 13.073 3.243 25.02 9.762 35.84 6.52 10.82 15.258 19.046 26.18 24.644a152.303 152.303 0 0 0-3.174 31.335c0 53.009 24.678 98.372 74.035 136.09 49.323 37.682 108.715 56.524 178.176 56.524 69.769 0 129.365-18.842 178.688-56.525 49.357-37.717 74.001-83.08 74.001-136.09 0-11.946-1.229-22.561-3.686-31.914 10.581-5.598 19.046-13.722 25.395-24.337 6.315-10.65 9.49-22.528 9.49-35.567z"/></svg>', "Rss": '<svg xmlns="http://www.w3.org/2000/svg" class="icon rss-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#FD9B00"/><path fill="#fff" d="M687.981 740.39c0-225.92-183.617-409.777-409.21-409.777v-97.205c279.353 0 506.617 227.506 506.617 506.98H687.98zm-74.841 0h-97.538c0-63.567-24.688-123.245-69.43-167.993-44.762-44.856-104.24-69.556-167.54-69.556v-97.176c184.44 0 334.508 150.046 334.508 334.725zM346.038 605.166c37.35 0 67.514 30.357 67.514 67.39 0 37.146-30.163 67.177-67.514 67.177-37.219 0-67.458-30.03-67.458-67.176 0-37.034 30.24-67.391 67.458-67.391z"/></svg>', "Steam": '<svg xmlns="http://www.w3.org/2000/svg" class="icon steam-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="488" fill="#fff"/><path fill="#13227a" d="M1008 512c0 274-222.4 496-496.8 496-227.6 0-419.2-152.6-478-360.8l190.4 78.6c12.8 64.2 69.8 112.8 137.8 112.8 78.4 0 143.8-64.8 140.4-147l169-120.4c104.2 2.6 191.6-81.8 191.6-187 0-103.2-84-187-187.4-187s-187.4 84-187.4 187v2.4L369.2 558c-31-1.8-61.4 6.8-87 24.2L16 472.2C36.4 216.8 250.2 16 511.2 16 785.6 16 1008 238 1008 512zM327.4 768.6l-61-25.2a105.58 105.58 0 0 0 54.4 51.6c53.8 22.4 115.6-3.2 138-56.8 10.8-26 11-54.6.2-80.6-10.8-26-31-46.4-57-57.2-25.8-10.8-53.4-10.4-77.8-1.2l63 26c39.6 16.4 58.4 61.8 41.8 101.4-16.6 39.8-62 58.4-101.6 42zM675 508.8c-68.8 0-124.8-56-124.8-124.6s56-124.6 124.8-124.6 124.8 56 124.8 124.6S744 508.8 675 508.8zm.2-31.2c51.8 0 93.8-42 93.8-93.6 0-51.8-42-93.6-93.8-93.6s-93.8 42-93.8 93.6c.2 51.6 42.2 93.6 93.8 93.6z"/></svg>', "Twitter": '<svg xmlns="http://www.w3.org/2000/svg" class="icon twitter-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512"/><path fill="#FFF" d="m560 473 186-216h-44L540 445 411 257H262l195 284-195 226h44l171-198 136 198h149zM322 290h68l312 445h-68z"/></svg>', "Wechat": '<svg xmlns="http://www.w3.org/2000/svg" class="icon wechat-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#2AAE67"/><path fill="#FFF" d="M501 417c-14 0-25-12-25-26s11-26 25-26 26 12 26 26-12 26-26 26m-144 0c-15 0-26-12-26-26s11-26 26-26 25 12 25 26-11 26-25 26m72-150c-120 0-217 82-217 183 0 55 29 104 75 138a15 15 0 0 1 6 11l-1 5-9 37-2 5c0 4 4 8 8 8l4-2 47-27c4-3 8-4 12-4l6 1a255 255 0 0 0 83 10c-5-14-7-29-7-45 0-92 88-166 197-166h9c-16-87-103-154-211-154"/><path fill="#FFF" d="M692 561c-13 0-23-10-23-23 0-12 10-22 23-22 12 0 22 10 22 22 0 13-10 23-22 23m-121 0c-12 0-23-10-23-23 0-12 11-22 23-22s23 10 23 22c0 13-11 23-23 23m179 141c38-28 62-69 62-115 0-84-81-152-181-152s-180 68-180 152 80 152 180 152a212 212 0 0 0 65-9l9 3 40 23 3 1a6 6 0 0 0 6-6l-1-5-8-30v-4c0-4 2-8 5-10"/></svg>', "Weibo": '<svg xmlns="http://www.w3.org/2000/svg" class="icon weibo-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#D52C2B"/><path fill="#D52C2B" d="M256 601c0 68 91 124 203 124 113 0 203-56 203-124s-90-123-203-123c-112 0-203 55-203 123"/><path fill="#FFF" d="M464 715c-99 9-185-35-191-98-7-64 68-123 168-133 99-10 185 34 191 98 7 64-69 123-168 133m199-212c-9-2-15-4-10-15 9-23 10-44 0-58-19-27-73-26-134-1 0 0-19 8-14-7 9-29 8-54-7-68-33-33-121 1-196 75-57 55-90 114-90 165 0 97 127 156 252 156 163 0 271-93 271-167 0-44-38-69-72-80m108-177c-39-43-98-59-151-48-13 3-20 14-18 27 3 12 15 19 27 17 39-8 80 3 108 34 27 29 36 70 24 108a22 22 0 0 0 14 28c12 4 25-3 29-14 18-53 5-112-33-152"/><path fill="#FFF" d="M711 379a78 78 0 0 0-74-23c-11 2-17 12-15 22v1c2 10 12 17 23 15a38 38 0 0 1 36 11c10 10 12 24 8 36a19 19 0 0 0 13 25c10 3 21-3 25-13a74 74 0 0 0-16-74M470 599c-4 6-12 9-18 6-6-2-7-8-4-14s11-9 17-6c6 2 8 8 5 14m-32 40a38 38 0 0 1-46 15c-15-7-20-25-10-39 10-15 29-21 45-15 15 7 20 24 11 39m36-106c-47-12-101 11-121 52-21 41-1 87 47 102 49 16 108-8 128-53 20-44-5-89-54-101"/></svg>', "Whatsapp": '<svg xmlns="http://www.w3.org/2000/svg" class="icon whatsapp-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#31B84C"/><path fill="#fff" d="m192.021 832 45.227-164.33a315.413 315.413 0 0 1-42.539-158.529C194.731 334.251 337.707 192 513.344 192c84.587-.213 165.76 33.28 225.387 93.013A314.453 314.453 0 0 1 832 509.376c-.085 174.848-143.04 317.141-318.656 317.141h-.15a319.61 319.61 0 0 1-152.277-38.613L192 832h.021zm241.686-455.467c-6.443-15.445-13.014-13.354-17.92-13.61-4.63-.214-9.942-.256-15.254-.256a29.227 29.227 0 0 0-21.226 9.898c-7.296 7.958-27.84 27.136-27.84 66.134s28.501 76.672 32.49 81.962c3.968 5.291 56.15 85.334 136 119.638 19.008 8.17 33.814 13.056 45.398 16.704 19.072 6.037 36.437 5.184 50.133 3.157 15.296-2.283 47.125-19.2 53.76-37.675 6.613-18.56 6.613-34.389 4.65-37.717-1.983-3.264-7.295-5.27-15.274-9.237-7.957-3.947-47.125-23.126-54.4-25.771-7.296-2.667-12.587-3.968-17.92 3.947-5.312 7.936-20.565 25.792-25.195 31.061-4.65 5.312-9.301 5.973-17.258 2.005-7.979-3.968-33.622-12.33-64-39.338-23.68-20.992-39.68-46.955-44.331-54.912-4.65-7.915-.47-12.203 3.52-16.15 3.563-3.541 7.936-9.258 11.904-13.866 3.99-4.651 5.333-7.958 7.979-13.227 2.645-5.29 1.322-9.92-.64-13.888-2.006-3.968-17.92-42.987-24.555-58.859h-.021z"/></svg>', "Youtube": '<svg xmlns="http://www.w3.org/2000/svg" class="icon youtube-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#DD1829"/><path fill="#fff" d="M800.305 372.2c-12.805-42.429-22.873-65.942-65.303-71.064 0 0-113.644-5.761-226.64-5.761-111.716 0-222.797 5.761-222.797 5.761-44.992 5.122-55.7 29.915-67.223 71.065 0 0-11.524 65.527-11.524 131.886 0 68.066 11.524 137.008 11.524 137.008 8.963 39.87 27.354 65.943 67.223 71.065 0 0 123.292 7.682 240.724 7.682 106.78 0 208.714-7.682 208.714-7.682 39.87-7.682 53.78-28.635 65.303-71.065 0 0 11.523-63.022 11.523-128.045 0-69.288-11.524-140.85-11.524-140.85zM448.82 619.97V393.33l174.781 113.32L448.82 619.97z"/></svg>', "Zhihu": '<svg xmlns="http://www.w3.org/2000/svg" class="icon zhihu-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#006CE2"/><path fill="#fff" d="M513.65 491.261H411.551c1.615-16.154 5.815-60.095 5.815-84.973 0-24.88-.323-60.742-.323-60.742h102.744V329.39c0-21.647-9.37-31.34-17.124-31.34h-178.67s5.169-17.77 10.015-36.186c4.846-18.417 15.832-44.264 15.832-44.264-63.003 4.2-67.958 50.941-81.743 92.729-13.787 41.785-24.556 62.356-44.586 107.912 27.786 0 55.249-13.57 66.879-32.309 11.631-18.74 16.908-40.71 16.908-40.71h62.035v59.019c0 21.107-3.878 87.45-3.878 87.45H254.742c-19.386 0-29.724 48.894-29.724 48.894h133.76c-8.4 75.82-26.493 106.191-51.91 152.716-25.418 46.525-92.728 99.406-92.728 99.406 41.033 11.63 86.589-3.555 105.974-21.972 19.386-18.417 35.863-49.756 47.817-72.838 11.954-23.081 21.972-65.124 21.972-65.124L498.462 766.86s4.846-24.233 6.461-39.418c1.616-15.186-.755-26.385-4.63-35.433-3.878-9.046-15.509-21.54-31.018-39.634-15.507-18.094-48.034-52.879-48.034-52.879s-15.832 11.63-28.108 21.001c9.046-21.97 16.262-79.695 16.262-79.695h122.343v-20.249c.003-17.66-7.319-29.29-18.089-29.29zm287.337-200.747h-234.35a4.308 4.308 0 0 0-4.309 4.308v435.099a4.308 4.308 0 0 0 4.308 4.308h40.226l14.7 50.402 81.096-50.402h98.328a4.308 4.308 0 0 0 4.308-4.308v-435.1a4.308 4.308 0 0 0-4.308-4.308zM755.97 684.47h-52.343l-61.548 39.095-10.823-39.095h-18.738V338.116H755.97v346.355z"/></svg>' };
const categoriesMap = { "category": { "/": { "path": "/category/", "map": { "Guide": { "path": "/category/guide/", "indexes": [0, 1, 2, 3, 4, 5] }, "Cherry": { "path": "/category/cherry/", "indexes": [6] }, "Dragon Fruit": { "path": "/category/dragon-fruit/", "indexes": [7] }, "Fruit": { "path": "/category/fruit/", "indexes": [8, 7, 9, 10, 11, 12] }, "Strawberry": { "path": "/category/strawberry/", "indexes": [8] }, "Vegetable": { "path": "/category/vegetable/", "indexes": [13] }, "Banana": { "path": "/category/banana/", "indexes": [14, 15, 9, 10] }, "Apple": { "path": "/category/apple/", "indexes": [11, 12, 16, 17] } } }, "/zh/": { "path": "/zh/category/", "map": { "使用指南": { "path": "/zh/category/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/", "indexes": [18, 19, 20, 21, 22] }, "指南": { "path": "/zh/category/%E6%8C%87%E5%8D%97/", "indexes": [23] }, "樱桃": { "path": "/zh/category/%E6%A8%B1%E6%A1%83/", "indexes": [24] }, "火龙果": { "path": "/zh/category/%E7%81%AB%E9%BE%99%E6%9E%9C/", "indexes": [25] }, "水果": { "path": "/zh/category/%E6%B0%B4%E6%9E%9C/", "indexes": [26, 25, 27, 28, 29, 30] }, "草莓": { "path": "/zh/category/%E8%8D%89%E8%8E%93/", "indexes": [26] }, "蔬菜": { "path": "/zh/category/%E8%94%AC%E8%8F%9C/", "indexes": [31] }, "苹果": { "path": "/zh/category/%E8%8B%B9%E6%9E%9C/", "indexes": [29, 30, 32, 33] }, "香蕉": { "path": "/zh/category/%E9%A6%99%E8%95%89/", "indexes": [34, 35, 27, 28] } } } }, "tag": { "/": { "path": "/tag/", "map": { "disable": { "path": "/tag/disable/", "indexes": [2] }, "encryption": { "path": "/tag/encryption/", "indexes": [3] }, "Layout": { "path": "/tag/layout/", "indexes": [1] }, "Markdown": { "path": "/tag/markdown/", "indexes": [4] }, "Page config": { "path": "/tag/page-config/", "indexes": [0] }, "Guide": { "path": "/tag/guide/", "indexes": [0] }, "red": { "path": "/tag/red/", "indexes": [13, 8, 7, 6, 11, 12, 16, 17] }, "small": { "path": "/tag/small/", "indexes": [8, 6] }, "round": { "path": "/tag/round/", "indexes": [13, 6, 11, 12, 16, 17] }, "big": { "path": "/tag/big/", "indexes": [7, 11, 12, 16, 17] }, "yellow": { "path": "/tag/yellow/", "indexes": [14, 15, 9, 10] }, "curly": { "path": "/tag/curly/", "indexes": [14, 15, 9, 10] }, "long": { "path": "/tag/long/", "indexes": [14, 15, 9, 10] } } }, "/zh/": { "path": "/zh/tag/", "map": { "禁用": { "path": "/zh/tag/%E7%A6%81%E7%94%A8/", "indexes": [19] }, "加密": { "path": "/zh/tag/%E5%8A%A0%E5%AF%86/", "indexes": [20] }, "布局": { "path": "/zh/tag/%E5%B8%83%E5%B1%80/", "indexes": [23] }, "Markdown": { "path": "/zh/tag/markdown/", "indexes": [21] }, "页面配置": { "path": "/zh/tag/%E9%A1%B5%E9%9D%A2%E9%85%8D%E7%BD%AE/", "indexes": [18] }, "使用指南": { "path": "/zh/tag/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/", "indexes": [18] }, "红": { "path": "/zh/tag/%E7%BA%A2/", "indexes": [31, 26, 25, 24, 29, 30, 32, 33] }, "小": { "path": "/zh/tag/%E5%B0%8F/", "indexes": [26, 24] }, "圆": { "path": "/zh/tag/%E5%9C%86/", "indexes": [31, 24, 29, 30, 32, 33] }, "大": { "path": "/zh/tag/%E5%A4%A7/", "indexes": [25, 29, 30, 32, 33] }, "黄": { "path": "/zh/tag/%E9%BB%84/", "indexes": [34, 35, 27, 28] }, "弯曲的": { "path": "/zh/tag/%E5%BC%AF%E6%9B%B2%E7%9A%84/", "indexes": [34, 35, 27, 28] }, "长": { "path": "/zh/tag/%E9%95%BF/", "indexes": [34, 35, 27, 28] } } } } };
const store = ["/demo/page.html", "/demo/layout.html", "/demo/disable.html", "/demo/encrypt.html", "/demo/markdown.html", "/demo/", "/posts/cherry.html", "/posts/dragonfruit.html", "/posts/strawberry.html", "/posts/banana/2.html", "/posts/banana/1.html", "/posts/apple/4.html", "/posts/apple/3.html", "/posts/tomato.html", "/posts/banana/4.html", "/posts/banana/3.html", "/posts/apple/2.html", "/posts/apple/1.html", "/zh/demo/page.html", "/zh/demo/disable.html", "/zh/demo/encrypt.html", "/zh/demo/markdown.html", "/zh/demo/", "/zh/demo/layout.html", "/zh/posts/cherry.html", "/zh/posts/dragonfruit.html", "/zh/posts/strawberry.html", "/zh/posts/banana/2.html", "/zh/posts/banana/1.html", "/zh/posts/apple/4.html", "/zh/posts/apple/3.html", "/zh/posts/tomato.html", "/zh/posts/apple/2.html", "/zh/posts/apple/1.html", "/zh/posts/banana/4.html", "/zh/posts/banana/3.html", "/intro.html", "/slide.html", "/zh/intro.html", "/zh/slide.html"];
const categoryMapRef = shallowRef(categoriesMap);
readonly(categoryMapRef);
const useBlogCategory = (key) => {
  const page = usePageData();
  const frontmatter = usePageFrontmatter();
  const routeLocale = useRouteLocale();
  return computed(() => {
    var _a2;
    const mapKey = key ?? ((_a2 = frontmatter.value.blog) == null ? void 0 : _a2.key) ?? "";
    if (!mapKey) {
      console.warn(`useBlogCategory: key not found`);
      return { path: "/", map: {} };
    }
    if (!categoryMapRef.value[mapKey])
      throw new Error(`useBlogCategory: key ${mapKey} is invalid`);
    const currentMap = categoryMapRef.value[mapKey][routeLocale.value];
    const result = {
      path: currentMap.path,
      map: {}
    };
    for (const category in currentMap.map) {
      const categoryMap = currentMap.map[category];
      result.map[category] = { path: categoryMap.path, items: [] };
      for (const index of categoryMap.indexes) {
        const { path, meta } = resolveRoute(store[index]);
        result.map[category].items.push({
          path,
          info: meta
        });
      }
      if (page.value.path === categoryMap.path)
        result.currentItems = result.map[category].items;
    }
    return result;
  });
};
const typesMap = { "article": { "/": { "path": "/article/", "indexes": [13, 0, 1, 8, 7, 6, 14, 15, 9, 10, 11, 12, 16, 17, 36, 2, 3, 4, 5, 37] }, "/zh/": { "path": "/zh/article/", "indexes": [31, 18, 23, 38, 26, 25, 24, 34, 35, 27, 28, 29, 30, 32, 33, 19, 20, 21, 22, 39] } }, "star": { "/": { "path": "/star/", "indexes": [9, 13, 16, 0] }, "/zh/": { "path": "/zh/star/", "indexes": [27, 31, 32, 18] } }, "timeline": { "/": { "path": "/timeline/", "indexes": [1, 13, 8, 7, 6, 14, 15, 9, 10, 11, 12, 16, 17, 36, 2, 3, 4, 5, 37, 0] }, "/zh/": { "path": "/zh/timeline/", "indexes": [23, 38, 31, 26, 25, 24, 34, 35, 27, 28, 29, 30, 32, 33, 19, 20, 21, 22, 39, 18] } }, "tutorial": { "/": { "path": "/tutorial/", "indexes": [0, 2, 3, 1, 4, 5] }, "/zh/": { "path": "/zh/tutorial/", "indexes": [18, 19, 20, 23, 21, 22] } } };
const typeMapRef = shallowRef(typesMap);
readonly(typeMapRef);
const useBlogType = (key) => {
  const frontmatter = usePageFrontmatter();
  const routeLocale = useRouteLocale();
  return computed(() => {
    var _a2;
    const mapKey = key ?? ((_a2 = frontmatter.value.blog) == null ? void 0 : _a2.key) ?? "";
    if (!mapKey) {
      console.warn(`useBlogType: key not found`);
      return { path: "/", items: [] };
    }
    if (!typeMapRef.value[mapKey])
      throw new Error(`useBlogType: key ${key} is invalid`);
    const configMap = typeMapRef.value[mapKey][routeLocale.value];
    const result = {
      path: configMap.path,
      items: []
    };
    for (const index of configMap.indexes) {
      const { path, meta } = resolveRoute(store[index]);
      result.items.push({
        path,
        info: meta
      });
    }
    return result;
  });
};
const timelineSymbol = Symbol("");
const useTimeline = () => {
  const timeline = inject(timelineSymbol);
  if (!timeline)
    throw new Error("useTimeline() is called without provider.");
  return timeline;
};
const setupTimeline = () => {
  const timeline = useBlogType("timeline");
  const timelineItems = computed(() => {
    const timelineItems2 = [];
    timeline.value.items.forEach(({ info, path }) => {
      const result = getDate(info[ArticleInfo.date]);
      if (result) {
        const year = result.getFullYear();
        const month = result.getMonth() + 1;
        const day = result.getDate();
        if (!timelineItems2[0] || timelineItems2[0].year !== year)
          timelineItems2.unshift({ year, items: [] });
        timelineItems2[0].items.push({
          date: `${month}/${day}`,
          info,
          path
        });
      }
    });
    return {
      ...timeline.value,
      config: timelineItems2.reverse()
    };
  });
  provide(timelineSymbol, timelineItems);
};
const articlesSymbol = Symbol("");
const useArticles = () => {
  const articles = inject(articlesSymbol);
  if (!articles)
    throw new Error("useArticles() is called without provider.");
  return articles;
};
const setupArticles = () => {
  const articles = useBlogType("article");
  provide(articlesSymbol, articles);
};
const categoryMapSymbol = Symbol.for("categoryMap");
const useCategoryMap = () => {
  const categoryMap = inject(categoryMapSymbol);
  if (!categoryMap)
    throw new Error("useCategoryMap() is called without provider.");
  return categoryMap;
};
const setupCategoryMap = () => {
  const categoryMap = useBlogCategory("category");
  provide(categoryMapSymbol, categoryMap);
};
const starsSymbol = Symbol("");
const useStars = () => {
  const stars = inject(starsSymbol);
  if (!stars)
    throw new Error("useStars() is called without provider.");
  return stars;
};
const setupStars = () => {
  const stars = useBlogType("star");
  provide(starsSymbol, stars);
};
const tagMapSymbol = Symbol.for("tagMap");
const useTagMap = () => {
  const tagMap = inject(tagMapSymbol);
  if (!tagMap)
    throw new Error("useTagMap() is called without provider.");
  return tagMap;
};
const setupTagMap = () => {
  const tagMap = useBlogCategory("tag");
  provide(tagMapSymbol, tagMap);
};
const setupBlog = () => {
  setupArticles();
  setupCategoryMap();
  setupStars();
  setupTagMap();
  setupTimeline();
};
const useBlogOptions = () => {
  const themeData2 = useThemeData();
  const themeLocale = useThemeLocaleData();
  return computed(() => ({
    ...themeData2.value.blog,
    ...themeLocale.value.blog
  }));
};
const useArticleAuthor = (info) => {
  const themeLocale = useThemeLocaleData();
  return computed(() => {
    const { [ArticleInfo.author]: author } = info.value;
    if (author)
      return i1(author);
    if (author === false)
      return [];
    return i1(themeLocale.value.author, false);
  });
};
const useArticleCategory = (info) => {
  const categoryMap = useCategoryMap();
  return computed(() => o1(info.value[ArticleInfo.category]).map((name) => ({
    name,
    path: categoryMap.value.map[name].path
  })));
};
const useArticleTag = (info) => {
  const tagMap = useTagMap();
  return computed(() => s1(info.value[ArticleInfo.tag]).map((name) => ({
    name,
    path: tagMap.value.map[name].path
  })));
};
const useArticleDate = (info) => computed(() => {
  const { [ArticleInfo.date]: timestamp } = info.value;
  return getDate(timestamp);
});
const useArticleInfo = (props) => {
  const articleInfo = toRef$1(props, "info");
  const blogOptions = useBlogOptions();
  const author = useArticleAuthor(articleInfo);
  const category = useArticleCategory(articleInfo);
  const tag = useArticleTag(articleInfo);
  const date = useArticleDate(articleInfo);
  const readingTimeLocaleConfig = useReadingTimeLocaleConfig();
  const info = computed(() => ({
    author: author.value,
    category: category.value,
    date: date.value,
    localizedDate: articleInfo.value[ArticleInfo.localizedDate] ?? "",
    tag: tag.value,
    isOriginal: articleInfo.value[ArticleInfo.isOriginal] ?? false,
    readingTime: articleInfo.value[ArticleInfo.readingTime] ?? null,
    readingTimeLocale: articleInfo.value[ArticleInfo.readingTime] && readingTimeLocaleConfig.value ? getReadingTimeLocale(articleInfo.value[ArticleInfo.readingTime], readingTimeLocaleConfig.value) : null,
    pageview: props.path
  }));
  const items = computed(() => blogOptions.value.articleInfo);
  return { info, items };
};
const SocialMedias = defineComponent({
  name: "SocialMedias",
  setup() {
    const blogOptions = useBlogOptions();
    const isPure = usePure();
    const mediaLinks = computed(() => entries(blogOptions.value.medias ?? {}).map(([media, config2]) => typeof config2 === "string" ? {
      name: media,
      icon: icons[media],
      link: config2
    } : { name: media, ...config2 }));
    return () => mediaLinks.value.length ? h$1("div", { class: "vp-social-medias" }, mediaLinks.value.map(({ name, icon, link }) => h$1("a", {
      class: "vp-social-media",
      href: link,
      rel: "noopener noreferrer",
      target: "_blank",
      "aria-label": name || "",
      ...isPure.value ? {} : { "data-balloon-pos": "up" },
      innerHTML: isLinkHttp(icon) ? `<img class="icon ${name}-icon" src="${icon}">` : icon
    }))) : null;
  }
});
const BloggerInfo = defineComponent({
  name: "BloggerInfo",
  setup() {
    const blogOptions = useBlogOptions();
    const siteLocale = useSiteLocaleData();
    const themeLocale = useThemeLocaleData();
    const articles = useArticles();
    const categoryMap = useCategoryMap();
    const tagMap = useTagMap();
    const timelines = useTimeline();
    const navigate = useNavigate();
    const bloggerName = computed(() => {
      var _a2;
      return blogOptions.value.name ?? ((_a2 = i1(themeLocale.value.author)[0]) == null ? void 0 : _a2.name) ?? siteLocale.value.title;
    });
    const bloggerAvatar = computed(() => blogOptions.value.avatar ?? themeLocale.value.logo);
    const locale = computed(() => themeLocale.value.blogLocales);
    const intro = computed(() => blogOptions.value.intro);
    return () => {
      const { article, category, tag, timeline } = locale.value;
      const countItems = [
        [articles.value.path, articles.value.items.length, article],
        [categoryMap.value.path, keys(categoryMap.value.map).length, category],
        [tagMap.value.path, keys(tagMap.value.map).length, tag],
        [timelines.value.path, timelines.value.items.length, timeline]
      ];
      return h$1("div", {
        class: "vp-blogger-info",
        vocab: "https://schema.org/",
        typeof: "Person"
      }, [
        h$1("div", {
          class: "vp-blogger",
          ...intro.value ? {
            "aria-label": locale.value.intro,
            "data-balloon-pos": "down",
            role: "link",
            onClick: () => navigate(intro.value)
          } : {}
        }, [
          bloggerAvatar.value ? h$1("img", {
            class: "vp-blogger-avatar",
            src: withBase(bloggerAvatar.value),
            property: "image",
            alt: "Blogger Avatar",
            loading: "lazy"
          }) : null,
          bloggerName.value ? h$1("div", { class: "vp-blogger-name", property: "name" }, bloggerName.value) : null,
          blogOptions.value.description ? h$1("div", {
            class: "vp-blogger-description",
            innerHTML: blogOptions.value.description
          }) : null,
          intro.value ? h$1("meta", { property: "url", content: withBase(intro.value) }) : null
        ]),
        h$1("div", { class: "vp-blog-counts" }, countItems.map(([path, count, locale2]) => h$1(RouteLink, { class: "vp-blog-count", to: path }, () => [
          h$1("div", { class: "count" }, count),
          h$1("div", locale2)
        ]))),
        h$1(SocialMedias)
      ]);
    };
  }
});
const CategoryIcon = () => h$1(c$1, { name: "category" }, () => h$1("path", {
  d: "M148.41 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H148.41c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.311-40.31zM147.556 553.478H429.73c22.263 0 40.311 18.048 40.311 40.31v282.176c0 22.263-18.048 40.312-40.31 40.312H147.555c-22.263 0-40.311-18.049-40.311-40.312V593.79c0-22.263 18.048-40.311 40.31-40.311zM593.927 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H593.927c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.31-40.31zM730.22 920.502H623.926c-40.925 0-74.22-33.388-74.22-74.425V623.992c0-41.038 33.387-74.424 74.425-74.424h222.085c41.038 0 74.424 33.226 74.424 74.067v114.233c0 10.244-8.304 18.548-18.547 18.548s-18.548-8.304-18.548-18.548V623.635c0-20.388-16.746-36.974-37.33-36.974H624.13c-20.585 0-37.331 16.747-37.331 37.33v222.086c0 20.585 16.654 37.331 37.126 37.331H730.22c10.243 0 18.547 8.304 18.547 18.547 0 10.244-8.304 18.547-18.547 18.547z"
}));
CategoryIcon.displayName = "CategoryIcon";
const TagIcon = () => h$1(c$1, { name: "tag" }, () => h$1("path", {
  d: "M939.902 458.563L910.17 144.567c-1.507-16.272-14.465-29.13-30.737-30.737L565.438 84.098h-.402c-3.215 0-5.726 1.005-7.634 2.913l-470.39 470.39a10.004 10.004 0 000 14.164l365.423 365.424c1.909 1.908 4.42 2.913 7.132 2.913s5.223-1.005 7.132-2.913l470.39-470.39c2.01-2.11 3.014-5.023 2.813-8.036zm-240.067-72.121c-35.458 0-64.286-28.828-64.286-64.286s28.828-64.285 64.286-64.285 64.286 28.828 64.286 64.285-28.829 64.286-64.286 64.286z"
}));
TagIcon.displayName = "TagIcon";
const TimelineIcon = () => h$1(c$1, { name: "timeline" }, () => h$1("path", {
  d: "M511.997 70.568c-243.797 0-441.429 197.633-441.429 441.435 0 243.797 197.632 441.429 441.43 441.429S953.431 755.8 953.431 512.002c0-243.796-197.637-441.434-441.435-441.434zm150.158 609.093-15.605 15.61c-8.621 8.615-22.596 8.615-31.215 0L472.197 552.126c-4.95-4.944-4.34-14.888-4.34-24.677V247.14c0-12.19 9.882-22.07 22.07-22.07h22.07c12.19 0 22.07 9.882 22.07 22.07v273.218l128.088 128.088c8.62 8.62 8.62 22.595 0 31.215zm0 0"
}));
TimelineIcon.displayName = "TimelineIcon";
const SlideIcon = () => h$1(c$1, { name: "slides" }, () => h$1("path", {
  d: "M896 170.667v426.666a85.333 85.333 0 0 1-85.333 85.334h-256v61.184l192.597 115.584-43.861 73.13-148.736-89.173v95.275h-85.334v-95.318l-148.736 89.216-43.861-73.13 192.597-115.627v-61.141h-256A85.333 85.333 0 0 1 128 597.333V170.667H85.333V85.333h853.334v85.334H896zm-682.667 0v426.666h597.334V170.667H213.333zM426.667 512h-85.334V341.333h85.334V512zm128 0h-85.334V256h85.334v256zm128 0h-85.334V384h85.334v128z"
}));
SlideIcon.displayName = "SlideIcon";
const StickyIcon = () => h$1(c$1, { name: "sticky" }, () => [
  h$1("path", {
    d: "m381.3 733.8l-161.9 118c-5.9 4.5-13.2 6.6-20.1 6.6-8.7 0-17.7-3.4-24.3-10-12.2-12.2-13.9-31.3-3.5-45.2l144.5-195.5-113.6-112.9c-11.1-11.1-13.2-28.4-5.5-42 5.5-8.7 52.1-76.4 155.5-51 1.8 0.3 3.5 0.3 5.6 0.7 4.2 0.3 9 0.7 14.2 1.7 21.9 3.5 60.8-13.9 94.5-42.7 32.3-27.5 53.1-59.4 53.1-81.6 0-5.2 0-10.8-0.3-16-0.7-20.8-2.1-52.8 21.5-76.4 28.1-28.1 72.9-30.6 103.9-5.2 0.6 0.3 1 1 1.7 1.7 16.7 16.3 187.5 187.2 189.3 188.9 14.5 14.6 22.9 34.4 22.9 55.3 0 20.8-8 40.2-22.9 54.8-23.7 23.6-56 22.6-77.1 21.6-4.9 0-10.5-0.4-15.7-0.4-20.8 0-45.8 14.6-70.5 41.3-34.3 37.5-55.5 85.8-53.8 107.7 0.7 6.9 2.1 19.1 2.4 20.8 25 101.4-42.7 147.6-50.7 152.8-13.9 8.4-31.6 6.3-42.7-4.8l-112.1-112.2z"
  })
]);
StickyIcon.displayName = "StickyIcon";
const ArticleIcon = () => h$1(c$1, { name: "article" }, () => h$1("path", {
  d: "M853.333 938.667H170.667A42.667 42.667 0 0 1 128 896V128a42.667 42.667 0 0 1 42.667-42.667h682.666A42.667 42.667 0 0 1 896 128v768a42.667 42.667 0 0 1-42.667 42.667zm-42.666-85.334V170.667H213.333v682.666h597.334zM298.667 256h170.666v170.667H298.667V256zm0 256h426.666v85.333H298.667V512zm0 170.667h426.666V768H298.667v-85.333zm256-384h170.666V384H554.667v-85.333z"
}));
ArticleIcon.displayName = "ArticleIcon";
const BookIcon = () => h$1(c$1, { name: "book" }, () => h$1("path", {
  d: "M256 853.333h426.667A85.333 85.333 0 0 0 768 768V256a85.333 85.333 0 0 0-85.333-85.333H469.333a42.667 42.667 0 0 1 0-85.334h213.334A170.667 170.667 0 0 1 853.333 256v512a170.667 170.667 0 0 1-170.666 170.667H213.333A42.667 42.667 0 0 1 170.667 896V128a42.667 42.667 0 0 1 42.666-42.667h128A42.667 42.667 0 0 1 384 128v304.256l61.653-41.088a42.667 42.667 0 0 1 47.36 0l61.654 41.045V256A42.667 42.667 0 0 1 640 256v256a42.667 42.667 0 0 1-66.347 35.499l-104.32-69.547-104.32 69.547A42.667 42.667 0 0 1 298.667 512V170.667H256v682.666z"
}));
BookIcon.displayName = "BookIcon";
const LinkIcon = () => h$1(c$1, { name: "link" }, () => h$1("path", {
  d: "M460.8 584.533c17.067 17.067 17.067 42.667 0 59.734-17.067 17.066-42.667 17.066-59.733 0-85.334-85.334-85.334-217.6 0-302.934L554.667 192C640 110.933 776.533 110.933 857.6 196.267c81.067 81.066 81.067 213.333 0 294.4l-68.267 64c0-34.134-4.266-68.267-17.066-102.4l21.333-21.334c51.2-46.933 55.467-128 4.267-179.2s-128-55.466-179.2-4.266c-4.267 0-4.267 4.266-4.267 4.266L465.067 401.067c-51.2 51.2-51.2 132.266-4.267 183.466m123.733-183.466C601.6 384 627.2 384 644.267 401.067c85.333 85.333 85.333 217.6 0 302.933l-153.6 149.333C405.333 934.4 268.8 934.4 187.733 849.067c-81.066-81.067-81.066-213.334 0-294.4l68.267-64c0 34.133 4.267 72.533 17.067 102.4L251.733 614.4C204.8 665.6 204.8 746.667 256 793.6c51.2 46.933 123.733 46.933 174.933 0l149.334-149.333c51.2-51.2 51.2-128 0-179.2-12.8-17.067-17.067-46.934 4.266-64z"
}));
LinkIcon.displayName = "LinkIcon";
const ProjectIcon = () => h$1(c$1, { name: "project" }, () => h$1("path", {
  d: "M987.456 425.152H864V295.296a36.48 36.48 0 0 0-36.544-36.544h-360l-134.08-128.256A9.344 9.344 0 0 0 327.04 128H36.48A36.48 36.48 0 0 0 0 164.544v676.608a36.48 36.48 0 0 0 36.544 36.544h797.76a36.672 36.672 0 0 0 33.92-22.848L1021.44 475.52a36.48 36.48 0 0 0-33.92-50.304zM82.304 210.304h215.424l136.64 130.752h347.328v84.096H198.848A36.672 36.672 0 0 0 164.928 448L82.304 652.8V210.304zM808.32 795.456H108.544l118.08-292.608h699.904L808.32 795.52z"
}));
ProjectIcon.displayName = "ProjectIcon";
const FriendIcon = () => h$1(c$1, { name: "friend" }, () => h$1("path", {
  d: "M860.16 213.333A268.373 268.373 0 0 0 512 186.027a267.52 267.52 0 0 0-348.16 404.48L428.8 855.893a118.613 118.613 0 0 0 166.4 0l264.96-265.386a267.52 267.52 0 0 0 0-377.174zM800 531.627l-264.96 264.96a32.427 32.427 0 0 1-46.08 0L224 530.347a183.04 183.04 0 0 1 0-256 182.187 182.187 0 0 1 256 0 42.667 42.667 0 0 0 60.587 0 182.187 182.187 0 0 1 256 0 183.04 183.04 0 0 1 3.413 256z"
}));
FriendIcon.displayName = "FriendIcon";
const SlideDownIcon = () => h$1(c$1, { name: "slide-down" }, () => h$1("path", {
  d: "M108.775 312.23c13.553 0 27.106 3.734 39.153 11.806l375.205 250.338 363.641-252.808c32.587-21.624 76.499-12.83 98.123 19.757 21.685 32.467 12.95 76.56-19.576 98.184l-402.854 278.89c-23.733 15.901-54.694 15.962-78.547.12L69.501 442.097c-32.647-21.685-41.441-65.777-19.817-98.304 13.734-20.54 36.201-31.563 59.09-31.563Z"
}));
SlideDownIcon.displayName = "SlideDownIcon";
const EmptyIcon = () => h$1("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  // eslint-disable-next-line @typescript-eslint/naming-convention
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  class: "empty-icon",
  viewBox: "0 0 1024 1024",
  innerHTML: '<defs><linearGradient id="f" x1="512.342" y1="2266.13" x2="512.342" y2="666.063" gradientUnits="userSpaceOnUse"><stop offset=".919" stop-color="#e6e6e6" stop-opacity="0"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="g" x1="528.912" y1="774" x2="388.088" y2="612" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#e6e6e6" stop-opacity="0"/></linearGradient><linearGradient id="h" x1="213.219" y1="721.704" x2="251.313" y2="683.61" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#d7d7d7"/><stop offset=".485" stop-color="#fafafa"/><stop offset="1" stop-color="#fafafa"/></linearGradient><linearGradient id="i" x1="724.813" y1="821.718" x2="768.656" y2="777.876" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fafafa"/></linearGradient><linearGradient id="a" x1="513.493" y1="714.594" x2="471.007" y2="544.188" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#999"/><stop offset="1" stop-color="#ccc"/></linearGradient><linearGradient id="b" x1="440.156" y1="564.031" x2="508.594" y2="495.594" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="l" x1="660.988" y1="754.156" x2="608.637" y2="544.188" xlink:href="#a"/><linearGradient id="m" x1="479.188" y1="774.219" x2="649.782" y2="603.625" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#b3b3b3"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="n" x1="447.121" y1="774.219" x2="394.661" y2="563.813" xlink:href="#a"/><linearGradient id="o" x1="494" y1="597" x2="628" y2="463" xlink:href="#b"/><linearGradient id="d" x1="610.485" y1="604.938" x2="697.298" y2="518.125" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fff"/></linearGradient><linearGradient id="p" x1="457.438" y1="619.25" x2="353.469" y2="619.25" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e6e6e6" stop-opacity="0"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="q" x1="542.734" y1="674.25" x2="615.672" y2="601.313" xlink:href="#b"/><linearGradient id="c" x1="627.933" y1="358.938" x2="685.192" y2="422.531" gradientUnits="userSpaceOnUse"><stop offset=".4" stop-color="#e6e6e6" stop-opacity=".4"/><stop offset=".443" stop-color="#fff"/><stop offset=".6" stop-color="#ccc"/></linearGradient><linearGradient id="r" x1="618.547" y1="422.531" x2="681.547" y2="359.531" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e6e6e6"/><stop offset=".761" stop-color="#fff"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="s" x1="625" y1="441.5" x2="697" y2="369.5" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset=".761" stop-color="#fff"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="t" x1="627.681" y1="361.438" x2="692.257" y2="433.156" xlink:href="#c"/><linearGradient id="u" x1="561.414" y1="735.438" x2="573.149" y2="688.375" xlink:href="#d"/><linearGradient id="v" x1="405" y1="485.875" x2="440" y2="450.875" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fff" stop-opacity=".702"/></linearGradient><linearGradient id="w" x1="404.61" y1="486.906" x2="441.86" y2="449.656" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset=".495" stop-color="#ccc" stop-opacity=".702"/><stop offset=".498" stop-color="#ccc"/><stop offset="1" stop-color="#fff" stop-opacity=".302"/></linearGradient><radialGradient id="e" cx="329.297" cy="647.578" r="8.172" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fafafa"/><stop offset="1.2" stop-color="#e6e6e6"/></radialGradient><radialGradient id="j" cx="802.297" cy="673.578" r="8.172" xlink:href="#e"/><radialGradient id="k" cx="774.844" cy="642.75" r="5.531" xlink:href="#e"/></defs><path d="M512.33 666.07c441.828 0 800 358.18 800 800.03s-358.172 800.02-800 800.02-800-358.18-800-800.02 358.17-800.03 800-800.03z" style="fill:url(#f);fill-rule:evenodd"/><path d="m272 694 242-82 131 119-188 43z" style="fill:url(#g);fill-rule:evenodd"/><path fill="#b3b3b3" fill-rule="evenodd" d="M232.391 723.534a2.4 2.4 0 0 1 2.4 2.4v17.725a2.4 2.4 0 0 1-4.8 0v-17.725a2.4 2.4 0 0 1 2.4-2.4z"/><path d="M232.255 676.559c10.33 0 17.067 15.408 18.7 28.493 1.619 12.942-2.372 23.694-18.7 23.694-16.878 0-20.213-10.733-18.7-23.694 1.633-14.061 8.37-28.493 18.7-28.493z" style="fill:url(#h);fill-rule:evenodd"/><path fill="#b3b3b3" fill-rule="evenodd" d="M745.853 826h.938a2.4 2.4 0 0 1 2.4 2.4v22.238a2.4 2.4 0 0 1-2.4 2.4h-.938a2.4 2.4 0 0 1-2.4-2.4V828.4a2.4 2.4 0 0 1 2.4-2.4z"/><path d="M746.727 830.3c-19.438 0-23.278-9.326-21.541-20.59a34.467 34.467 0 0 1 3.289-10.369 16.628 16.628 0 0 1 0-9.112c2.889-12.327 12.059-20.911 18.356-20.911 6.56 0 15.468 9.1 18.356 20.911a14.589 14.589 0 0 1-.335 9.217 34.36 34.36 0 0 1 3.419 10.264c1.861 11.243-2.735 20.59-21.544 20.59z" style="fill:url(#i);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M328.841 654.562a6.571 6.571 0 0 0-5.2-5.027q-4.107-.952-.034-2.045a6.571 6.571 0 0 0 5.027-5.2q.952-4.109 2.045-.035a6.569 6.569 0 0 0 5.2 5.027q4.109.954.035 2.045a6.569 6.569 0 0 0-5.027 5.2q-.955 4.108-2.046.035z"/><path d="M328.383 653.73a6.567 6.567 0 0 0-5.2-5.027q-4.109-.954-.035-2.045a6.568 6.568 0 0 0 5.027-5.2q.954-4.107 2.046-.034a6.568 6.568 0 0 0 5.2 5.027q4.107.952.035 2.045a6.568 6.568 0 0 0-5.027 5.2q-.954 4.104-2.046.034z" style="fill:url(#e);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M801.841 680.562a6.571 6.571 0 0 0-5.2-5.027q-4.107-.952-.034-2.045a6.571 6.571 0 0 0 5.027-5.2q.952-4.109 2.045-.035a6.569 6.569 0 0 0 5.2 5.027q4.108.954.035 2.045a6.569 6.569 0 0 0-5.027 5.2q-.955 4.108-2.046.035z"/><path d="M801.383 679.73a6.567 6.567 0 0 0-5.2-5.027q-4.108-.954-.035-2.045a6.568 6.568 0 0 0 5.027-5.2q.954-4.107 2.046-.034a6.568 6.568 0 0 0 5.2 5.027q4.107.952.035 2.045a6.568 6.568 0 0 0-5.027 5.2q-.954 4.104-2.046.034z" style="fill:url(#j);fill-rule:evenodd"/><path d="M774.21 646.9a4.446 4.446 0 0 0-3.517-3.4q-2.778-.643-.023-1.383a4.443 4.443 0 0 0 3.4-3.517q.645-2.778 1.383-.023a4.443 4.443 0 0 0 3.517 3.4q2.778.645.023 1.383a4.446 4.446 0 0 0-3.4 3.517q-.645 2.78-1.383.023z" style="fill:url(#k);fill-rule:evenodd"/><path d="m385.6 714.6.158-150.658L598.9 544.174l-.158 150.658z" style="fill:url(#a);fill-rule:evenodd"/><path d="m385.474 564.031 214.763-19.383-36.171-49.067-215.559 17.634z" style="fill:url(#b);fill-rule:evenodd"/><path d="m598.744 694.832.156-150.658 71.975 59.319-.158 150.658z" style="fill:url(#l);fill-rule:evenodd"/><path d="m457.064 774.209.158-150.658 214.691-19.914-.158 150.663z" style="fill:url(#m);fill-rule:evenodd"/><path d="m384.566 714.459.158-150.659 72.5 59.75-.158 150.658z" style="fill:url(#n);fill-rule:evenodd"/><path d="M494 640s75.357-58.4 42-83-38.887 1.663-37 14 53.847 12.465 54-26c.2-49.979 75-125 75-125" style="fill:none;stroke-width:3px;stroke-dasharray:12 6;stroke:url(#o);fill-rule:evenodd"/><path d="m670.275 604.939-72.041-59.9 38.476-26.909 72.86 58.159z" style="fill:url(#d);fill-rule:evenodd"/><path d="m425.5 674.383-72.042-59.9 31.109-50.347 72.86 58.16z" style="fill:url(#p);fill-rule:evenodd"/><path d="m487.918 674.235 214.482-22.57-31.1-50.346-215.309 20.833z" style="fill:url(#q);fill-rule:evenodd"/><path style="fill:#fff;fill-rule:evenodd" d="m697.363 358.927-69.58 62.511-12.035 1.082z"/><path d="m697.363 358.927-69.58 62.511-12.035 1.082z" style="fill:url(#c);fill-rule:evenodd"/><path d="M615.748 422.52 604 413l92.089-53.46" style="fill:url(#r);fill-rule:evenodd"/><path d="m625 432 12 18 60-89" style="fill:url(#s);fill-rule:evenodd"/><path d="m626.98 421.335-2.471 11.828 70.918-71.735" style="fill:#fff;fill-rule:evenodd"/><path d="m626.98 421.335-2.471 11.828 70.918-71.735" style="fill:url(#t);fill-rule:evenodd"/><path d="m494.814 735.44 21.293-2.1v-6.613l-13.4 1.319v-6.965l10.977-1.08v-6.613l-10.977 1.08v-6.084l12.917-1.27v-6.525l-20.808 2.047v32.8zM521 732.863l7.054-.694v-11.241a106.361 106.361 0 0 0-1.014-11.274l.176-.017 2.645 7.586 4.453 11.553 4.32-.425 4.408-12.424 2.733-8.116.177-.018a111.811 111.811 0 0 0-1.014 11.474v11.241l7.185-.707V697l-8.552.841-5.025 14.646c-.618 1.956-1.147 4.08-1.808 6.173l-.22.022c-.617-1.968-1.146-3.987-1.808-5.818l-5.2-13.639-8.508.837v32.8zm37.213-3.661 7.891-.776v-10.889l3.835-.377c6.922-.681 12.961-4.714 12.961-12.517 0-8.111-5.951-10.082-13.181-9.371l-11.504 1.128v32.8zm7.891-17.881v-9.478l3.218-.316c3.792-.373 5.908.565 5.908 3.871 0 3.218-1.852 5.208-5.687 5.585zM594 725.682l7.891-.777v-26.274l8.905-.876v-6.524l-25.657 2.524v6.524l8.861-.871v26.274zm27.991-2.754 7.847-.772v-11.594l9.919-22.18-8.244.811-2.733 7.542c-.925 2.56-1.807 4.939-2.733 7.587l-.176.018c-.926-2.466-1.764-4.676-2.645-7.058l-2.734-7-8.375.824 9.874 20.233v11.594z" style="fill:url(#u);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M408.938 457.309a17.5 17.5 0 0 0 21.374 26.725 17.5 17.5 0 1 1-16.306-30.955 17.442 17.442 0 0 0-5.068 4.23z"/><circle cx="422.5" cy="468.375" r="17.5" style="fill:url(#v)"/><path fill="#ccc" fill-rule="evenodd" d="M391.76 451.5c-2.358 4.419 9.827 15.52 27.215 24.8 15.131 8.071 29.212 12.1 34.166 10.093-4.191 2.772-18.943-1.24-34.86-9.73-17.388-9.275-29.573-20.376-27.215-24.8a2.96 2.96 0 0 1 1.585-1.3 2.606 2.606 0 0 0-.891.937z"/><path d="M418.975 476.29c-17.388-9.275-29.573-20.376-27.215-24.8s18.363-.484 35.751 8.791 29.572 20.376 27.215 24.8-18.364.483-35.751-8.791zm31.634 5.732c1.824-3.42-8.789-12.642-23.7-20.6s-28.486-11.633-30.31-8.213 8.789 12.642 23.7 20.6 28.486 11.633 30.31 8.213zm-36.645-29.008-2.775 1.452.032 1.751 28.637 14.183.266-4.559z" style="fill:url(#w);fill-rule:evenodd"/><g class="people"><path style="fill:#f8cfad;fill-rule:evenodd" d="m612.131 676.5 1.362 3.532 3.255-2.324-1.361-3.532zM629.131 665.5l1.362 3.532 3.255-2.324-1.361-3.532z"/><path style="fill:#141a33;fill-rule:evenodd" d="m617.764 678.184-3.162-.078a11.028 11.028 0 0 0-1.034 3.454c-.258 2.006-1.177 5-.449 5.367 1.5 2.659 4.118-.215 4.118-.215s2.187-2.848 1.925-5.265c-.106-.973-1.181-1.869-1.398-3.263zM633.781 665.855l3.019.945a11.008 11.008 0 0 1-.137 3.6c-.4 1.981-.179 4.166-.986 4.277-2.283 2.03-3.827-1.533-3.827-1.533s-1.473-2.456-.444-4.659c.412-.88 1.718-1.385 2.375-2.63z"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M599.935 592.534s10.293 9.761 11.95 7.564 3.536-3.463-6.758-13.65z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M611.3 596.361c1.674-1.105 11.5 7.048 14.5 11.774s-12.705-4.36-14.632-6.776-1.54-3.893.132-4.998z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M621.815 607.988s1.809 2.549 2.433 1.756 2.475-1.064 2.449-1.138.1-.819 1.288-2.331-3.8-3.632-5.81-.494a2.556 2.556 0 0 0-.36 2.207z"/><path fill="#232c57" fill-rule="evenodd" d="M598 617s14.968-5.618 17 7a150.235 150.235 0 0 1 2 22s12.666 11.836 16 19c0 0-4.753-1.629-4 2 0 0-18.132-14.647-19-19s-9.148-18.716-12-31z"/><path d="M589 622s14.968-5.618 17 7a150.235 150.235 0 0 1 2 22s4.666 17.836 8 25c0 0-4.753-1.629-4 2 0 0-10.132-20.647-11-25s-9.148-18.716-12-31z" style="fill:#292966;fill-rule:evenodd"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M585.626 597.7s-10.292 9.761-11.95 7.563-3.536-3.463 6.758-13.65z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M574.259 601.529c-1.675-1.105-11.5 7.049-14.5 11.774s12.7-4.36 14.631-6.775 1.543-3.894-.131-4.999z"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M591.715 577.752s-.606 1.681 1.48 3.716-3.615 5.307-4.645 2.85-.48-2.716-.48-2.716z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M583.527 574.123c-.839 1.043.491 3.873 1.453 5.449s2.749 2.833 3.364 2.428 4.088-2.657 4-4-.228-3.4-.228-3.4 2.562-1.641 2.154-2.916-2.916-.154-2.916-.154a15.853 15.853 0 0 0-.227-2.224c-.189-.929-6.887-1.445-7.827 2.6s.558 1.805.227 2.217z"/><path fill="#232c57" fill-rule="evenodd" d="M584.227 567.758c2.1-.885 7.2-3.684 10.125.318s.842 4.385.989 5.294-1.894 5.69-1.341 6.63-3.865.8-4.657-1.179-2.844-.539-2.227-1.224-1.3-4.456-2.916-2.154a9.252 9.252 0 0 0 .309-1.38c-.115.192.259-3.257-.673-1.32s-2.1 1.037-3.069.762-1.8-1.118-1.071-1.689c.023-.016 2.436-3.172 4.531-4.058z"/><path d="M589 585c-2.584-.47-10.055.362-13 13 0 0 1.9 3.349 5 4s6 21 6 21 24.016 11.06 27-3c-.07-13.826-8-21-8-21s5.829-3.2 5-6-8.016-10.153-11-10-6 0-6 0-2.416 2.47-5 2z" style="fill:#f6bb07;fill-rule:evenodd"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M563.284 612.581s-.986 2.965-1.814 2.389-2.678-.3-2.675-.374-.333-.755-1.912-1.854 2.577-4.583 5.414-2.167a2.551 2.551 0 0 1 .987 2.006z"/></g>'
});
EmptyIcon.displayName = "EmptyIcon";
const LockIcon = () => h$1(c$1, { name: "lock" }, () => h$1("path", {
  d: "M787.168 952.268H236.832c-30.395 0-55.033-24.638-55.033-55.033V429.45c0-30.395 24.638-55.034 55.033-55.034h82.55V264.35c0-106.38 86.238-192.618 192.618-192.618S704.618 157.97 704.618 264.35v110.066h82.55c30.395 0 55.033 24.639 55.033 55.034v467.785c0 30.395-24.639 55.033-55.033 55.033zM484.483 672.046v115.122h55.034V672.046c31.99-11.373 55.033-41.605 55.033-77.496 0-45.592-36.958-82.55-82.55-82.55s-82.55 36.958-82.55 82.55c0 35.89 23.042 66.123 55.033 77.496zM622.067 264.35c0-60.788-49.28-110.067-110.067-110.067s-110.067 49.28-110.067 110.067v110.066h220.135V264.35z"
}));
LockIcon.displayName = "LockIcon";
const ArticleItem = defineComponent({
  name: "ArticleItem",
  props: {
    /**
     * Article information
     *
     * 文章信息
     */
    info: {
      type: Object,
      required: true
    },
    /**
     * Article path
     *
     * 文章路径
     */
    path: { type: String, required: true }
  },
  slots: Object,
  setup(props, { slots }) {
    const articleInfo = toRef$1(props, "info");
    const { info: pageInfo, items } = useArticleInfo(props);
    return () => {
      var _a2, _b2, _c;
      const { [PageInfo$1.title]: title, [ArticleInfo.type]: type, [ArticleInfo.isEncrypted]: isEncrypted = false, [ArticleInfo.cover]: cover, [ArticleInfo.excerpt]: excerpt, [ArticleInfo.sticky]: sticky } = articleInfo.value;
      const info = pageInfo.value;
      return h$1("div", { class: "vp-article-wrapper" }, h$1("article", {
        class: "vp-article-item",
        vocab: "https://schema.org/",
        typeof: "Article"
      }, [
        ((_a2 = slots.cover) == null ? void 0 : _a2.call(slots, { cover })) ?? (cover ? [
          h$1("img", {
            class: "vp-article-cover",
            src: withBase(cover),
            alt: "",
            loading: "lazy"
          }),
          h$1("meta", {
            property: "image",
            content: withBase(cover)
          })
        ] : []),
        sticky ? h$1(StickyIcon) : null,
        h$1(RouteLink, { to: props.path }, () => {
          var _a3;
          return ((_a3 = slots.title) == null ? void 0 : _a3.call(slots, { title, isEncrypted, type })) ?? h$1("header", { class: "vp-article-title" }, [
            isEncrypted ? h$1(LockIcon) : null,
            type === PageType.slide ? h$1(SlideIcon) : null,
            h$1("span", { property: "headline" }, title)
          ]);
        }),
        ((_b2 = slots.excerpt) == null ? void 0 : _b2.call(slots, { excerpt })) ?? (excerpt ? h$1("div", {
          class: "vp-article-excerpt",
          innerHTML: excerpt
        }) : null),
        h$1("hr", { class: "vp-article-hr" }),
        ((_c = slots.info) == null ? void 0 : _c.call(slots, { info })) ?? h$1(PageInfo, {
          info,
          ...items.value ? { items: items.value } : {}
        })
      ]));
    };
  }
});
const Pagination = defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Pagination",
  props: {
    /**
     * Number of total items
     *
     * 项目总数
     */
    total: { type: Number, default: 10 },
    /**
     * Items per page
     *
     * 每页项目数
     */
    perPage: { type: Number, default: 10 },
    /**
     * Current page number
     *
     * 当前页面
     */
    current: { type: Number, default: 1 }
  },
  emits: ["updateCurrentPage"],
  setup(props, { emit }) {
    let message;
    const themeLocale = useThemeLocaleData();
    const input = ref("");
    const locale = computed(() => themeLocale.value.paginationLocales);
    const totalPages = computed(() => Math.ceil(props.total / props.perPage));
    const enable = computed(() => Boolean(totalPages.value) && totalPages.value !== 1);
    const displayLeftEllipsis = computed(() => {
      if (totalPages.value < 7)
        return false;
      return props.current > 4;
    });
    const displayRightEllipsis = computed(() => {
      if (totalPages.value < 7)
        return false;
      return props.current < totalPages.value - 3;
    });
    const indexes = computed(() => {
      const { current: currentPage } = props;
      let min = 1;
      let max2 = totalPages.value;
      const arr = [];
      if (totalPages.value >= 7) {
        if (currentPage <= 4 && currentPage < totalPages.value - 3) {
          min = 1;
          max2 = 5;
        } else if (currentPage > 4 && currentPage >= totalPages.value - 3) {
          max2 = totalPages.value;
          min = totalPages.value - 4;
        } else if (totalPages.value > 7) {
          min = currentPage - 2;
          max2 = currentPage + 2;
        }
      }
      for (let i2 = min; i2 <= max2; i2++)
        arr.push(i2);
      return arr;
    });
    const navigate = (page) => emit("updateCurrentPage", page);
    const jumpPage = (index) => {
      const pageNum = parseInt(index, 10);
      if (pageNum <= totalPages.value && pageNum > 0)
        navigate(pageNum);
      else
        message.pop(`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M64 512a448 448 0 1 0 896 0 448 448 0 1 0-896 0Z" fill="#FA5151"/><path d="m557.3 512 113.1-113.1c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L512 466.7 398.9 353.6c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L466.7 512 353.6 625.1c-12.5 12.5-12.5 32.8 0 45.3 6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4L512 557.3l113.1 113.1c6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4c12.5-12.5 12.5-32.8 0-45.3L557.3 512z" fill="#FFF"/></svg>${locale.value.errorText.replace(/\$page/gu, totalPages.value.toString())}`);
    };
    onMounted(() => {
      message = new X$1();
    });
    return () => h$1("div", { class: "vp-pagination" }, enable.value ? h$1("nav", { class: "vp-pagination-list" }, [
      h$1("div", { class: "vp-pagination-number " }, [
        // Prev button
        props.current > 1 ? h$1("div", {
          class: "prev",
          role: "navigation",
          unselectable: "on",
          onClick: () => navigate(props.current - 1)
        }, locale.value.prev) : null,
        // Left ellipsis
        displayLeftEllipsis.value ? [
          h$1("div", {
            role: "navigation",
            onClick: () => navigate(1)
          }, 1),
          h$1("div", { class: "ellipsis" }, "...")
        ] : null,
        // Numbers
        indexes.value.map((num) => h$1("div", {
          key: num,
          class: { active: props.current === num },
          role: "navigation",
          onClick: () => navigate(num)
        }, num)),
        // Right ellipsis
        displayRightEllipsis.value ? [
          h$1("div", { class: "ellipsis" }, "..."),
          h$1("div", {
            role: "navigation",
            onClick: () => navigate(totalPages.value)
          }, totalPages.value)
        ] : null,
        // Next button
        props.current < totalPages.value ? h$1("div", {
          class: "next",
          role: "navigation",
          unselectable: "on",
          onClick: () => navigate(props.current + 1)
        }, locale.value.next) : null
      ]),
      h$1("div", { class: "vp-pagination-nav" }, [
        h$1("label", { for: "navigation-text" }, `${locale.value.navigate}: `),
        h$1("input", {
          id: "navigation-text",
          value: input.value,
          onInput: ({ target }) => {
            input.value = target.value;
          },
          onKeydown: (event) => {
            if (event.key === "Enter") {
              event.preventDefault();
              jumpPage(input.value);
            }
          }
        }),
        h$1("button", {
          class: "vp-pagination-button",
          type: "button",
          role: "navigation",
          title: locale.value.action,
          onClick: () => jumpPage(input.value)
        }, locale.value.action)
      ])
    ]) : []);
  }
});
const ArticleList = defineComponent({
  name: "ArticleList",
  props: {
    /**
     * Articles
     *
     * 文章项目
     */
    items: {
      type: Array,
      default: () => []
    }
  },
  setup(props) {
    const route = useRoute();
    const router = useRouter();
    const blogOptions = useBlogOptions();
    const updatePageview = usePageview();
    const currentPage = ref(1);
    const articlePerPage = computed(() => blogOptions.value.articlePerPage ?? 10);
    const currentArticles = computed(() => props.items.slice((currentPage.value - 1) * articlePerPage.value, currentPage.value * articlePerPage.value));
    const updatePage = async (page) => {
      currentPage.value = page;
      const query = { ...route.query };
      const needUpdate = !(query["page"] === page.toString() || // Page equal as query
      // Page is 1 and query is empty
      page === 1 && !query["page"]);
      if (needUpdate) {
        if (page === 1)
          delete query["page"];
        else
          query["page"] = page.toString();
        await router.push({ path: route.path, query });
      }
      {
        await nextTick();
        updatePageview({ selector: ".vp-pageview" });
      }
    };
    onMounted(() => {
      const { page } = route.query;
      void updatePage(page ? Number(page) : 1);
      watch(currentPage, () => {
        const distance = document.querySelector("#article-list").getBoundingClientRect().top + window.scrollY;
        setTimeout(() => {
          window.scrollTo(0, distance);
        }, 100);
      });
    });
    return () => h$1("div", { id: "article-list", class: "vp-article-list", role: "feed" }, currentArticles.value.length ? [
      ...currentArticles.value.map(({ info, path }, index) => h$1(DropTransition, { appear: true, delay: index * 0.04 }, () => h$1(ArticleItem, { key: path, info, path }))),
      h$1(Pagination, {
        current: currentPage.value,
        perPage: articlePerPage.value,
        total: props.items.length,
        onUpdateCurrentPage: updatePage
      })
    ] : h$1(EmptyIcon));
  }
});
const CategoryList = defineComponent({
  name: "CategoryList",
  setup() {
    const page = usePageData();
    const categoryMap = useCategoryMap();
    return () => h$1("ul", { class: "vp-category-list" }, entries(categoryMap.value.map).sort(([, a2], [, b2]) => b2.items.length - a2.items.length).map(([category, { path, items }]) => h$1("li", {
      class: [
        "vp-category",
        `color${Q$1(category, Number(cssVariables["colorNumber"]))}`,
        { active: path === page.value.path }
      ]
    }, h$1(RouteLink, { to: path }, () => [
      category,
      h$1("span", { class: "count" }, items.length)
    ]))));
  }
});
const TagList = defineComponent({
  name: "TagList",
  setup() {
    const frontmatter = usePageFrontmatter();
    const tagMap = useTagMap();
    const isActive = (name) => {
      var _a2;
      return name === ((_a2 = frontmatter.value.blog) == null ? void 0 : _a2.name);
    };
    return () => h$1("ul", { class: "tag-list-wrapper" }, entries(tagMap.value.map).sort(([, a2], [, b2]) => b2.items.length - a2.items.length).map(([tag, { path, items }]) => h$1("li", {
      class: [
        "tag",
        `color${Q$1(tag, Number(cssVariables["colorNumber"]))}`,
        { active: isActive(tag) }
      ]
    }, h$1(RouteLink, { to: path }, () => [
      tag,
      h$1("span", { class: "tag-num" }, items.length)
    ]))));
  }
});
const TimelineList = defineComponent({
  name: "TimelineList",
  setup() {
    const themeLocale = useThemeLocaleData();
    const timelines = useTimeline();
    const navigate = useNavigate();
    const hint = computed(() => themeLocale.value.blogLocales.timeline);
    return () => h$1("div", { class: "timeline-list-wrapper" }, [
      h$1("div", {
        class: "timeline-list-title",
        onClick: () => navigate(timelines.value.path)
      }, [
        h$1(TimelineIcon),
        h$1("span", { class: "num" }, timelines.value.items.length),
        hint.value
      ]),
      h$1("hr"),
      h$1("div", { class: "timeline-content" }, h$1("ul", { class: "timeline-list" }, timelines.value.config.map(({ year, items }, index) => h$1(DropTransition, { appear: true, delay: 0.08 * (index + 1) }, () => h$1("li", [
        h$1("h3", { class: "timeline-year" }, year),
        h$1("ul", { class: "timeline-year-wrapper" }, items.map(({ date, info, path }) => h$1("li", { class: "timeline-item" }, [
          h$1("span", { class: "timeline-date" }, date),
          h$1(RouteLink, { class: "timeline-title", to: path }, () => info[PageInfo$1.title])
        ])))
      ])))))
    ]);
  }
});
const buttons = {
  article: ArticleIcon,
  category: CategoryIcon,
  tag: TagIcon,
  timeline: TimelineIcon
};
const InfoList = defineComponent({
  name: "InfoList",
  setup() {
    const themeLocale = useThemeLocaleData();
    const articles = useArticles();
    const categoryMap = useCategoryMap();
    const categoryNumber = computed(() => keys(categoryMap.value.map).length);
    const stars = useStars();
    const tagMap = useTagMap();
    const tagNumber = computed(() => keys(tagMap.value.map).length);
    const navigate = useNavigate();
    const activeType = ref("article");
    const locale = computed(() => themeLocale.value.blogLocales);
    return () => h$1("div", { class: "vp-blog-infos" }, [
      h$1("div", { class: "vp-blog-type-switcher" }, entries(buttons).map(([key, Icon]) => h$1("button", {
        type: "button",
        class: "vp-blog-type-button",
        onClick: () => {
          activeType.value = key;
        }
      }, h$1("div", {
        class: [
          "icon-wrapper",
          { active: activeType.value === key }
        ],
        "aria-label": locale.value[key],
        "data-balloon-pos": "up"
      }, h$1(Icon))))),
      h$1(DropTransition, () => (
        // Star articles
        activeType.value === "article" ? h$1("div", { class: "vp-star-article-wrapper" }, [
          h$1("div", {
            class: "title",
            onClick: () => navigate(articles.value.path)
          }, [
            h$1(ArticleIcon),
            h$1("span", { class: "num" }, articles.value.items.length),
            locale.value.article
          ]),
          h$1("hr"),
          stars.value.items.length ? h$1("ul", { class: "vp-star-articles" }, stars.value.items.map(({ info, path }, index) => h$1(DropTransition, { appear: true, delay: 0.08 * (index + 1) }, () => h$1("li", { class: "vp-star-article" }, h$1(RouteLink, { to: path }, () => info[PageInfo$1.title]))))) : h$1("div", { class: "vp-star-article-empty" }, locale.value.empty.replace("$text", locale.value.star))
        ]) : activeType.value === "category" ? h$1("div", { class: "vp-category-wrapper" }, [
          categoryNumber.value ? [
            h$1("div", {
              class: "title",
              onClick: () => navigate(categoryMap.value.path)
            }, [
              h$1(CategoryIcon),
              h$1("span", { class: "num" }, categoryNumber.value),
              locale.value.category
            ]),
            h$1("hr"),
            h$1(DropTransition, { delay: 0.04 }, () => h$1(CategoryList))
          ] : h$1("div", { class: "vp-category-empty" }, locale.value.empty.replace("$text", locale.value.category))
        ]) : activeType.value === "tag" ? h$1("div", { class: "vp-tag-wrapper" }, [
          tagNumber.value ? [
            h$1("div", {
              class: "title",
              onClick: () => navigate(tagMap.value.path)
            }, [
              h$1(TagIcon),
              h$1("span", { class: "num" }, tagNumber.value),
              locale.value.tag
            ]),
            h$1("hr"),
            h$1(DropTransition, { delay: 0.04 }, () => h$1(TagList))
          ] : h$1("div", { class: "vp-tag-empty" }, locale.value.empty.replace("$text", locale.value.tag))
        ]) : h$1(DropTransition, () => h$1(TimelineList))
      ))
    ]);
  }
});
const BlogWrapper = defineComponent({
  name: "BlogWrapper",
  slots: Object,
  setup(_props, { slots }) {
    const { isMobile } = useWindowSize();
    return () => [
      h$1(SkipLink),
      h$1(CommonWrapper, { noSidebar: true, noToc: true }, {
        default: () => slots.default(),
        navScreenBottom: () => h$1(BloggerInfo),
        sidebar: isMobile.value ? () => h$1(InfoList) : null
      })
    ];
  }
});
const InfoPanel = () => h$1("aside", { class: "vp-blog-info-wrapper" }, [
  h$1(DropTransition, () => h$1(BloggerInfo)),
  h$1(DropTransition, { delay: 0.04 }, () => h$1(InfoList))
]);
InfoPanel.displayName = "InfoPanel";
const BlogCategory = defineComponent({
  name: "BlogPage",
  setup() {
    const page = usePageData();
    const frontmatter = usePageFrontmatter();
    const categoryMap = useCategoryMap();
    const tagMap = useTagMap();
    return () => {
      const { key = "", name = "" } = frontmatter.value.blog || {};
      const items = name ? key === "category" ? categoryMap.value.map[name].items : key === "tag" ? tagMap.value.map[name].items : [] : [];
      return h$1(BlogWrapper, () => h$1("div", { class: "vp-page vp-blog" }, h$1("div", { class: "blog-page-wrapper" }, [
        h$1("main", { id: "main-content", class: "vp-blog-main" }, [
          h$1(DropTransition, () => key === "category" ? h$1(CategoryList) : key === "tag" ? h$1(TagList) : null),
          name ? h$1(DropTransition, { appear: true, delay: 0.24 }, () => h$1(ArticleList, {
            key: page.value.path,
            items
          })) : null
        ]),
        h$1(DropTransition, { delay: 0.16 }, () => h$1(InfoPanel, { key: "blog" }))
      ])));
    };
  }
});
const DEFAULT_HERO = "//theme-hope-assets.vuejs.press/hero/default.jpg";
const BlogHero$1 = defineComponent({
  name: "BlogHero",
  slots: Object,
  setup(_props, { slots }) {
    const frontmatter = usePageFrontmatter();
    const siteLocale = useSiteLocaleData();
    const hero = shallowRef();
    const isFullScreen = computed(() => frontmatter.value.heroFullScreen ?? false);
    const info = computed(() => {
      const { heroText, heroImage, heroImageDark, heroAlt, heroImageStyle, tagline } = frontmatter.value;
      return {
        text: heroText ?? siteLocale.value.title ?? "Hello",
        tagline: tagline ?? "",
        image: heroImage ? withBase(heroImage) : null,
        imageDark: heroImageDark ? withBase(heroImageDark) : null,
        alt: heroAlt ?? heroText ?? "",
        imageStyle: heroImageStyle,
        isFullScreen: isFullScreen.value
      };
    });
    const bg = computed(() => {
      const { bgImage, bgImageDark, bgImageStyle } = frontmatter.value;
      return {
        image: isString(bgImage) ? withBase(bgImage) : bgImage === false ? null : DEFAULT_HERO,
        imageDark: isString(bgImageDark) ? withBase(bgImageDark) : null,
        bgStyle: bgImageStyle,
        isFullScreen: isFullScreen.value
      };
    });
    return () => {
      var _a2, _b2;
      return frontmatter.value.hero === false ? null : h$1("div", {
        ref: hero,
        class: [
          "vp-blog-hero",
          {
            fullscreen: isFullScreen.value,
            "no-bg": !bg.value.image
          }
        ]
      }, [
        ((_a2 = slots.bg) == null ? void 0 : _a2.call(slots, bg.value)) ?? [
          bg.value.image ? h$1("div", {
            class: ["vp-blog-mask", { light: bg.value.imageDark }],
            style: [
              {
                background: `url(${bg.value.image}) center/cover no-repeat`
              },
              bg.value.bgStyle
            ]
          }) : null,
          bg.value.imageDark ? h$1("div", {
            class: "vp-blog-mask dark",
            style: [
              {
                background: `url(${bg.value.imageDark}) center/cover no-repeat`
              },
              bg.value.bgStyle
            ]
          }) : null
        ],
        ((_b2 = slots.info) == null ? void 0 : _b2.call(slots, info.value)) ?? [
          h$1(DropTransition, { appear: true, type: "group", delay: 0.04 }, () => {
            const { image, imageDark, imageStyle, alt } = info.value;
            return [
              image ? h$1("img", {
                key: "light",
                class: ["vp-blog-hero-image", { light: imageDark }],
                style: imageStyle,
                src: image,
                alt
              }) : null,
              imageDark ? h$1("img", {
                key: "dark",
                class: "vp-blog-hero-image dark",
                style: imageStyle,
                src: imageDark,
                alt
              }) : null
            ];
          }),
          h$1(DropTransition, { appear: true, delay: 0.08 }, () => info.value.text ? h$1("h1", { class: "vp-blog-hero-title" }, info.value.text) : null),
          h$1(DropTransition, { appear: true, delay: 0.12 }, () => info.value.tagline ? h$1("p", {
            class: "vp-blog-hero-description",
            innerHTML: info.value.tagline
          }) : null)
        ],
        info.value.isFullScreen ? h$1("button", {
          type: "button",
          class: "slide-down-button",
          onClick: () => {
            window.scrollTo({
              top: hero.value.clientHeight,
              behavior: "smooth"
            });
          }
        }, [h$1(SlideDownIcon), h$1(SlideDownIcon)]) : null
      ]);
    };
  }
});
const bingStorage = useStorage("bing-image", {
  index: 0,
  data: []
});
const BingHeroBackground = defineComponent({
  name: "BingHeroBackground",
  /*
   * TODO: Add download button
   * props: {
   *   download: Boolean,
   * },
   */
  setup() {
    const lang = usePageLang();
    const bingInfo = shallowRef();
    const showInfo = ref(false);
    const currentWallpaper = computed(() => {
      const info = bingStorage.value.data[bingStorage.value.index];
      const langCode = lang.value.toLowerCase().split("-").shift();
      if (info) {
        const { url, wallpaper, downloadable, locales: locales2 } = info;
        return {
          url,
          wallpaper,
          downloadable,
          ...locales2[langCode] ?? locales2["en"]
        };
      }
      return null;
    });
    const getImage = () => fetch("https://bing-wallpaper.vuejs.press/api/wallpaper").then((response) => response.json());
    const prev = () => {
      bingStorage.value.index -= 1;
    };
    const next = () => {
      bingStorage.value.index += 1;
    };
    onClickOutside(bingInfo, () => {
      showInfo.value = false;
    });
    onMounted(() => {
      void getImage().then((res) => {
        bingStorage.value.data = res;
      });
    });
    return () => {
      const { title, headline, url, backstage, quickFact, copyright } = currentWallpaper.value ?? {};
      return h$1(ClientOnly, () => url ? [
        h$1("div", {
          class: "vp-blog-mask",
          style: {
            background: `url(${url}) center/cover no-repeat`
          }
        }),
        h$1("div", {
          class: "bing-switch",
          onClick: () => {
            showInfo.value = true;
          }
        }, [
          h$1(Transition, { name: "fade" }, () => showInfo.value ? h$1("div", { class: "bing-info", ref: bingInfo }, [
            h$1("a", {
              href: backstage,
              target: "_blank",
              class: "bing-info-header"
            }, headline),
            h$1("hr"),
            h$1("div", { class: "bing-info-body" }, quickFact),
            h$1("div", { class: "bing-info-copyright" }, copyright)
          ]) : null),
          h$1("div", { class: "bing-location" }, [
            h$1("span", { class: "bing-location-icon" }),
            title
          ]),
          h$1("button", {
            class: "bing-switch-prev",
            title: "prev image",
            type: "button",
            disabled: bingStorage.value.index === 0,
            onClick: () => prev()
          }),
          h$1("button", {
            class: "bing-switch-next",
            title: "next image",
            type: "button",
            disabled: bingStorage.value.index === bingStorage.value.data.length - 1,
            onClick: () => next()
          })
        ])
      ] : null);
    };
  }
});
const HitokotoBlogHero = defineComponent({
  name: "HitokotoBlogHero",
  inheritAttrs: false,
  props: {
    /** Hero text */
    text: {
      type: String,
      required: true
    },
    /** Hero image */
    image: { type: String, default: null },
    /** Hero image dark */
    imageDark: { type: String, default: null },
    /** Hero image alt */
    alt: { type: String, required: true },
    /** Hero image style */
    imageStyle: {
      type: [String, Object],
      default: null
    }
  },
  setup(props) {
    const text = ref("");
    const display = ref("");
    const author = ref("");
    let isMounted = false;
    const getHitokoto = () => fetch("https://v1.hitokoto.cn").then((res) => res.json()).then(({ from, hitokoto }) => {
      text.value = hitokoto;
      author.value = from;
    });
    onMounted(() => {
      isMounted = true;
      watch(text, () => {
        display.value = "";
        let index = 0;
        const renderNextWord = () => {
          display.value += text.value[index];
          index += 1;
          return nextTick().then(() => {
            if (index < text.value.length)
              setTimeout(() => {
                void renderNextWord();
              }, 150);
            else if (isMounted)
              setTimeout(() => {
                void getHitokoto();
              }, 3e3);
          });
        };
        void renderNextWord();
      });
      void getHitokoto();
    });
    onUnmounted(() => {
      isMounted = false;
    });
    return () => [
      h$1(DropTransition, { appear: true, type: "group", delay: 0.04 }, () => [
        props.image ? h$1("img", {
          key: "light",
          class: ["vp-blog-hero-image", { light: props.imageDark }],
          style: props.imageStyle,
          src: props.image,
          alt: props.alt
        }) : null,
        props.imageDark ? h$1("img", {
          key: "dark",
          class: "vp-blog-hero-image dark",
          style: props.imageStyle,
          src: props.imageDark,
          alt: props.alt
        }) : null
      ]),
      h$1(DropTransition, { appear: true, delay: 0.08 }, () => props.text ? h$1("h1", { class: "vp-blog-hero-title" }, props.text) : null),
      h$1("div", { class: "hitokoto" }, [
        h$1("p", { class: "hitokoto-text" }, h$1("span", display.value)),
        h$1("p", {
          class: "hitokoto-author",
          style: { opacity: display.value.length > 4 ? 1 : 0 }
        }, `——「${author.value}」`)
      ])
    ];
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BlogHero",
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { get BlogHero() {
      return BlogHero$1;
    }, get BingHeroBackground() {
      return BingHeroBackground;
    }, get HitokotoBlogHero() {
      return HitokotoBlogHero;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(ssrRenderComponent($setup["BlogHero"], _attrs, {
    info: withCtx((info, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent($setup["HitokotoBlogHero"], info, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(
            $setup["HitokotoBlogHero"],
            info,
            null,
            16
            /* FULL_PROPS */
          )
        ];
      }
    }),
    bg: withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent($setup["BingHeroBackground"], null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode($setup["BingHeroBackground"])
        ];
      }
    }),
    _: 1
    /* STABLE */
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../components/BlogHero.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const BlogHero = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "BlogHero.vue"]]);
const AVAILABLE_PROJECT_TYPES = [
  "link",
  "article",
  "book",
  "project",
  "friend"
];
const ProjectPanel = defineComponent({
  name: "ProjectPanel",
  components: { ArticleIcon, BookIcon, FriendIcon, LinkIcon, ProjectIcon },
  props: {
    /** 项目列表 */
    items: {
      type: Array,
      required: true
    }
  },
  setup(props) {
    const isPure = usePure();
    const navigate = useNavigate();
    const renderIcon = (icon = "", alt = "icon") => {
      if (AVAILABLE_PROJECT_TYPES.includes(icon))
        return h$1(resolveComponent(`${icon}-icon`));
      if (isLinkHttp(icon))
        return h$1("img", { class: "vp-project-image", src: icon, alt });
      if (isLinkAbsolute(icon))
        return h$1("img", {
          class: "vp-project-image",
          src: withBase(icon),
          alt
        });
      return h$1(HopeIcon, { icon });
    };
    return () => h$1("div", { class: "vp-project-panel" }, props.items.map(({ icon, link, name, desc, background }) => h$1("div", {
      class: [
        "vp-project-card",
        {
          [`color${Q$1(name, Number(cssVariables["colorNumber"]))}`]: !isPure.value && !background
        }
      ],
      ...background ? { style: background } : {},
      onClick: () => navigate(link)
    }, [
      renderIcon(icon, name),
      h$1("div", { class: "vp-project-name" }, name),
      h$1("div", { class: "vp-project-desc" }, desc)
    ])));
  }
});
const BlogHomePage = defineComponent({
  name: "BlogHomePage",
  setup() {
    const articles = useArticles();
    const frontmatter = usePageFrontmatter();
    const projects = computed(() => frontmatter.value.projects ?? []);
    return () => h$1("div", { class: "vp-page vp-blog-home" }, [
      h$1(BlogHero),
      h$1("div", { class: "blog-page-wrapper" }, [
        h$1("main", { id: "main-content", class: "vp-blog-main" }, [
          projects.value.length ? h$1(DropTransition, { appear: true, delay: 0.16 }, () => h$1(ProjectPanel, { items: projects.value })) : null,
          h$1(DropTransition, { appear: true, delay: 0.24 }, () => h$1(ArticleList, { items: articles.value.items }))
        ]),
        h$1(DropTransition, { appear: true, delay: 0.16 }, () => h$1(InfoPanel, { key: "blog" }))
      ]),
      h$1(DropTransition, { appear: true, delay: 0.28 }, () => h$1(MarkdownContent))
    ]);
  }
});
const BlogHome = () => h$1(BlogWrapper, () => h$1(BlogHomePage));
BlogHome.displayName = "BlogHome";
var define_VP_BLOG_TYPES_default = [{ key: "tutorial", path: "/tutorial/" }];
const ArticleType = defineComponent({
  name: "ArticleType",
  setup() {
    const page = usePageData();
    const localePath = useRouteLocale();
    const themeLocale = useThemeLocaleData();
    const articles = useArticles();
    const stars = useStars();
    const types = computed(() => {
      const locale = themeLocale.value.blogLocales;
      return [
        {
          text: locale.all,
          path: articles.value.path
        },
        { text: locale.star, path: stars.value.path },
        ...define_VP_BLOG_TYPES_default.map(({ key, path }) => {
          const routePath = path.replace(/^\//, localePath.value);
          return {
            text: locale[key] ?? resolveRoute(routePath).meta[PageInfo$1.title] ?? key,
            path: routePath
          };
        })
      ];
    });
    return () => h$1("ul", { class: "vp-article-type-wrapper" }, types.value.map((type) => h$1("li", {
      class: [
        "vp-article-type",
        { active: type.path === page.value.path }
      ]
    }, h$1(RouteLink, { to: type.path }, () => type.text))));
  }
});
const BlogType = defineComponent({
  name: "BlogPage",
  setup() {
    const blogType = useBlogType();
    const frontmatter = usePageFrontmatter();
    const page = usePageData();
    const articles = useArticles();
    const stars = useStars();
    const items = computed(() => {
      const { key = "", type } = frontmatter.value.blog || {};
      return key === "star" ? stars.value.items : type === "type" && key ? blogType.value.items : articles.value.items;
    });
    return () => h$1(BlogWrapper, () => h$1("div", { class: "vp-page vp-blog" }, h$1("div", { class: "blog-page-wrapper" }, [
      h$1("main", { id: "main-content", class: "vp-blog-main" }, [
        h$1(DropTransition, () => h$1(ArticleType)),
        h$1(DropTransition, { appear: true, delay: 0.24 }, () => h$1(ArticleList, { key: page.value.path, items: items.value }))
      ]),
      h$1(DropTransition, { delay: 0.16 }, () => h$1(InfoPanel, { key: "blog" }))
    ])));
  }
});
const TimelineItems = defineComponent({
  name: "TimelineItems",
  setup() {
    const blogOptions = useBlogOptions();
    const themeLocale = useThemeLocaleData();
    const timelines = useTimeline();
    const hint = computed(() => blogOptions.value.timeline ?? themeLocale.value.blogLocales.timelineTitle);
    const items = computed(() => timelines.value.config.map(({ year }) => ({
      title: year.toString(),
      level: 2,
      slug: year.toString(),
      children: []
    })));
    return () => h$1("div", { class: "timeline-wrapper" }, h$1("ul", { class: "timeline-content" }, [
      h$1(DropTransition, () => h$1("li", { class: "motto" }, hint.value)),
      h$1(TOC, { items: items.value }),
      timelines.value.config.map(({ year, items: items2 }, index) => h$1(DropTransition, { appear: true, delay: 0.08 * (index + 1), type: "group" }, () => [
        h$1("h3", { key: "title", id: year, class: "timeline-year-title" }, h$1("span", year)),
        h$1("li", { key: "content", class: "timeline-year-list" }, [
          h$1("ul", { class: "timeline-year-wrapper" }, items2.map(({ date, info, path }) => h$1("li", { class: "timeline-item" }, [
            h$1("span", { class: "timeline-date" }, date),
            h$1(RouteLink, {
              class: "timeline-title",
              to: path
            }, () => info[PageInfo$1.title])
          ])))
        ])
      ]))
    ]));
  }
});
const Timeline = () => h$1(BlogWrapper, () => h$1("div", { class: "vp-page vp-blog" }, h$1("div", { class: "blog-page-wrapper" }, [
  h$1("main", { id: "main-content", class: "vp-blog-main" }, [
    h$1(DropTransition, { appear: true, delay: 0.24 }, () => h$1(TimelineItems))
  ]),
  h$1(DropTransition, { delay: 0.16 }, () => h$1(InfoPanel, { key: "blog" }))
])));
Timeline.displayName = "Timeline";
const PasswordModal = defineComponent({
  name: "PasswordModal",
  props: {
    /**
     * Whether is fullscreen
     *
     * 是否是全屏
     */
    full: Boolean
  },
  emits: ["verify"],
  setup(props, { emit }) {
    const frontmatter = usePageFrontmatter();
    const themeLocale = useThemeLocaleData();
    const password = ref("");
    const hasTried = ref(false);
    const remember = ref(false);
    const locale = computed(() => themeLocale.value.encryptLocales);
    let hintHandler = null;
    const verify = () => {
      if (hintHandler)
        clearTimeout(hintHandler);
      hasTried.value = false;
      emit("verify", password.value, remember.value);
      void nextTick().then(() => {
        hasTried.value = true;
        hintHandler = setTimeout(() => {
          hasTried.value = false;
        }, 1e3);
      });
    };
    return () => h$1("div", {
      class: [
        "vp-decrypt-layer",
        { expand: props.full || frontmatter.value["home"] }
      ]
    }, h$1("div", { class: "vp-decrypt-modal" }, [
      h$1("div", { class: ["vp-decrypt-hint", { tried: hasTried.value }] }, hasTried.value ? locale.value.errorHint : h$1(LockIcon, { "aria-label": locale.value.iconLabel })),
      h$1("div", { class: "vp-decrypt-input" }, [
        h$1("input", {
          type: "password",
          value: password.value,
          placeholder: locale.value.placeholder,
          onInput: ({ target }) => {
            password.value = target.value;
          },
          onKeydown: ({ key }) => {
            if (key === "Enter")
              verify();
          }
        })
      ]),
      h$1("div", { class: "vp-remember-password" }, [
        h$1("input", {
          id: "remember-password",
          type: "checkbox",
          value: remember.value,
          onChange: () => remember.value = !remember.value
        }),
        h$1("label", { for: "remember-password" }, locale.value.remember)
      ]),
      h$1("button", {
        type: "button",
        class: "vp-decrypt-submit",
        onClick: () => verify()
      }, "OK")
    ]));
  }
});
const useEncryptData = () => {
  const themeData2 = useThemeData();
  return computed(() => themeData2.value.encrypt || {});
};
const A = "./ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), I = Array.from({ length: 64 }, (n2, r2) => r2), f = (n2) => Array(n2).fill(-1), E = [...f(46), 0, 1, ...I.slice(54, 64), ...f(7), ...I.slice(2, 28), ...f(6), ...I.slice(28, 54), ...f(5)], L = [608135816, 2242054355, 320440878, 57701188, 2752067618, 698298832, 137296536, 3964562569, 1160258022, 953160567, 3193202383, 887688300, 3232508343, 3380367581, 1065670069, 3041331479, 2450970073, 2306472731], b = [3509652390, 2564797868, 805139163, 3491422135, 3101798381, 1780907670, 3128725573, 4046225305, 614570311, 3012652279, 134345442, 2240740374, 1667834072, 1901547113, 2757295779, 4103290238, 227898511, 1921955416, 1904987480, 2182433518, 2069144605, 3260701109, 2620446009, 720527379, 3318853667, 677414384, 3393288472, 3101374703, 2390351024, 1614419982, 1822297739, 2954791486, 3608508353, 3174124327, 2024746970, 1432378464, 3864339955, 2857741204, 1464375394, 1676153920, 1439316330, 715854006, 3033291828, 289532110, 2706671279, 2087905683, 3018724369, 1668267050, 732546397, 1947742710, 3462151702, 2609353502, 2950085171, 1814351708, 2050118529, 680887927, 999245976, 1800124847, 3300911131, 1713906067, 1641548236, 4213287313, 1216130144, 1575780402, 4018429277, 3917837745, 3693486850, 3949271944, 596196993, 3549867205, 258830323, 2213823033, 772490370, 2760122372, 1774776394, 2652871518, 566650946, 4142492826, 1728879713, 2882767088, 1783734482, 3629395816, 2517608232, 2874225571, 1861159788, 326777828, 3124490320, 2130389656, 2716951837, 967770486, 1724537150, 2185432712, 2364442137, 1164943284, 2105845187, 998989502, 3765401048, 2244026483, 1075463327, 1455516326, 1322494562, 910128902, 469688178, 1117454909, 936433444, 3490320968, 3675253459, 1240580251, 122909385, 2157517691, 634681816, 4142456567, 3825094682, 3061402683, 2540495037, 79693498, 3249098678, 1084186820, 1583128258, 426386531, 1761308591, 1047286709, 322548459, 995290223, 1845252383, 2603652396, 3431023940, 2942221577, 3202600964, 3727903485, 1712269319, 422464435, 3234572375, 1170764815, 3523960633, 3117677531, 1434042557, 442511882, 3600875718, 1076654713, 1738483198, 4213154764, 2393238008, 3677496056, 1014306527, 4251020053, 793779912, 2902807211, 842905082, 4246964064, 1395751752, 1040244610, 2656851899, 3396308128, 445077038, 3742853595, 3577915638, 679411651, 2892444358, 2354009459, 1767581616, 3150600392, 3791627101, 3102740896, 284835224, 4246832056, 1258075500, 768725851, 2589189241, 3069724005, 3532540348, 1274779536, 3789419226, 2764799539, 1660621633, 3471099624, 4011903706, 913787905, 3497959166, 737222580, 2514213453, 2928710040, 3937242737, 1804850592, 3499020752, 2949064160, 2386320175, 2390070455, 2415321851, 4061277028, 2290661394, 2416832540, 1336762016, 1754252060, 3520065937, 3014181293, 791618072, 3188594551, 3933548030, 2332172193, 3852520463, 3043980520, 413987798, 3465142937, 3030929376, 4245938359, 2093235073, 3534596313, 375366246, 2157278981, 2479649556, 555357303, 3870105701, 2008414854, 3344188149, 4221384143, 3956125452, 2067696032, 3594591187, 2921233993, 2428461, 544322398, 577241275, 1471733935, 610547355, 4027169054, 1432588573, 1507829418, 2025931657, 3646575487, 545086370, 48609733, 2200306550, 1653985193, 298326376, 1316178497, 3007786442, 2064951626, 458293330, 2589141269, 3591329599, 3164325604, 727753846, 2179363840, 146436021, 1461446943, 4069977195, 705550613, 3059967265, 3887724982, 4281599278, 3313849956, 1404054877, 2845806497, 146425753, 1854211946, 1266315497, 3048417604, 3681880366, 3289982499, 290971e4, 1235738493, 2632868024, 2414719590, 3970600049, 1771706367, 1449415276, 3266420449, 422970021, 1963543593, 2690192192, 3826793022, 1062508698, 1531092325, 1804592342, 2583117782, 2714934279, 4024971509, 1294809318, 4028980673, 1289560198, 2221992742, 1669523910, 35572830, 157838143, 1052438473, 1016535060, 1802137761, 1753167236, 1386275462, 3080475397, 2857371447, 1040679964, 2145300060, 2390574316, 1461121720, 2956646967, 4031777805, 4028374788, 33600511, 2920084762, 1018524850, 629373528, 3691585981, 3515945977, 2091462646, 2486323059, 586499841, 988145025, 935516892, 3367335476, 2599673255, 2839830854, 265290510, 3972581182, 2759138881, 3795373465, 1005194799, 847297441, 406762289, 1314163512, 1332590856, 1866599683, 4127851711, 750260880, 613907577, 1450815602, 3165620655, 3734664991, 3650291728, 3012275730, 3704569646, 1427272223, 778793252, 1343938022, 2676280711, 2052605720, 1946737175, 3164576444, 3914038668, 3967478842, 3682934266, 1661551462, 3294938066, 4011595847, 840292616, 3712170807, 616741398, 312560963, 711312465, 1351876610, 322626781, 1910503582, 271666773, 2175563734, 1594956187, 70604529, 3617834859, 1007753275, 1495573769, 4069517037, 2549218298, 2663038764, 504708206, 2263041392, 3941167025, 2249088522, 1514023603, 1998579484, 1312622330, 694541497, 2582060303, 2151582166, 1382467621, 776784248, 2618340202, 3323268794, 2497899128, 2784771155, 503983604, 4076293799, 907881277, 423175695, 432175456, 1378068232, 4145222326, 3954048622, 3938656102, 3820766613, 2793130115, 2977904593, 26017576, 3274890735, 3194772133, 1700274565, 1756076034, 4006520079, 3677328699, 720338349, 1533947780, 354530856, 688349552, 3973924725, 1637815568, 332179504, 3949051286, 53804574, 2852348879, 3044236432, 1282449977, 3583942155, 3416972820, 4006381244, 1617046695, 2628476075, 3002303598, 1686838959, 431878346, 2686675385, 1700445008, 1080580658, 1009431731, 832498133, 3223435511, 2605976345, 2271191193, 2516031870, 1648197032, 4164389018, 2548247927, 300782431, 375919233, 238389289, 3353747414, 2531188641, 2019080857, 1475708069, 455242339, 2609103871, 448939670, 3451063019, 1395535956, 2413381860, 1841049896, 1491858159, 885456874, 4264095073, 4001119347, 1565136089, 3898914787, 1108368660, 540939232, 1173283510, 2745871338, 3681308437, 4207628240, 3343053890, 4016749493, 1699691293, 1103962373, 3625875870, 2256883143, 3830138730, 1031889488, 3479347698, 1535977030, 4236805024, 3251091107, 2132092099, 1774941330, 1199868427, 1452454533, 157007616, 2904115357, 342012276, 595725824, 1480756522, 206960106, 497939518, 591360097, 863170706, 2375253569, 3596610801, 1814182875, 2094937945, 3421402208, 1082520231, 3463918190, 2785509508, 435703966, 3908032597, 1641649973, 2842273706, 3305899714, 1510255612, 2148256476, 2655287854, 3276092548, 4258621189, 236887753, 3681803219, 274041037, 1734335097, 3815195456, 3317970021, 1899903192, 1026095262, 4050517792, 356393447, 2410691914, 3873677099, 3682840055, 3913112168, 2491498743, 4132185628, 2489919796, 1091903735, 1979897079, 3170134830, 3567386728, 3557303409, 857797738, 1136121015, 1342202287, 507115054, 2535736646, 337727348, 3213592640, 1301675037, 2528481711, 1895095763, 1721773893, 3216771564, 62756741, 2142006736, 835421444, 2531993523, 1442658625, 3659876326, 2882144922, 676362277, 1392781812, 170690266, 3921047035, 1759253602, 3611846912, 1745797284, 664899054, 1329594018, 3901205900, 3045908486, 2062866102, 2865634940, 3543621612, 3464012697, 1080764994, 553557557, 3656615353, 3996768171, 991055499, 499776247, 1265440854, 648242737, 3940784050, 980351604, 3713745714, 1749149687, 3396870395, 4211799374, 3640570775, 1161844396, 3125318951, 1431517754, 545492359, 4268468663, 3499529547, 1437099964, 2702547544, 3433638243, 2581715763, 2787789398, 1060185593, 1593081372, 2418618748, 4260947970, 69676912, 2159744348, 86519011, 2512459080, 3838209314, 1220612927, 3339683548, 133810670, 1090789135, 1078426020, 1569222167, 845107691, 3583754449, 4072456591, 1091646820, 628848692, 1613405280, 3757631651, 526609435, 236106946, 48312990, 2942717905, 3402727701, 1797494240, 859738849, 992217954, 4005476642, 2243076622, 3870952857, 3732016268, 765654824, 3490871365, 2511836413, 1685915746, 3888969200, 1414112111, 2273134842, 3281911079, 4080962846, 172450625, 2569994100, 980381355, 4109958455, 2819808352, 2716589560, 2568741196, 3681446669, 3329971472, 1835478071, 660984891, 3704678404, 4045999559, 3422617507, 3040415634, 1762651403, 1719377915, 3470491036, 2693910283, 3642056355, 3138596744, 1364962596, 2073328063, 1983633131, 926494387, 3423689081, 2150032023, 4096667949, 1749200295, 3328846651, 309677260, 2016342300, 1779581495, 3079819751, 111262694, 1274766160, 443224088, 298511866, 1025883608, 3806446537, 1145181785, 168956806, 3641502830, 3584813610, 1689216846, 3666258015, 3200248200, 1692713982, 2646376535, 4042768518, 1618508792, 1610833997, 3523052358, 4130873264, 2001055236, 3610705100, 2202168115, 4028541809, 2961195399, 1006657119, 2006996926, 3186142756, 1430667929, 3210227297, 1314452623, 4074634658, 4101304120, 2273951170, 1399257539, 3367210612, 3027628629, 1190975929, 2062231137, 2333990788, 2221543033, 2438960610, 1181637006, 548689776, 2362791313, 3372408396, 3104550113, 3145860560, 296247880, 1970579870, 3078560182, 3769228297, 1714227617, 3291629107, 3898220290, 166772364, 1251581989, 493813264, 448347421, 195405023, 2709975567, 677966185, 3703036547, 1463355134, 2715995803, 1338867538, 1343315457, 2802222074, 2684532164, 233230375, 2599980071, 2000651841, 3277868038, 1638401717, 4028070440, 3237316320, 6314154, 819756386, 300326615, 590932579, 1405279636, 3267499572, 3150704214, 2428286686, 3959192993, 3461946742, 1862657033, 1266418056, 963775037, 2089974820, 2263052895, 1917689273, 448879540, 3550394620, 3981727096, 150775221, 3627908307, 1303187396, 508620638, 2975983352, 2726630617, 1817252668, 1876281319, 1457606340, 908771278, 3720792119, 3617206836, 2455994898, 1729034894, 1080033504, 976866871, 3556439503, 2881648439, 1522871579, 1555064734, 1336096578, 3548522304, 2579274686, 3574697629, 3205460757, 3593280638, 3338716283, 3079412587, 564236357, 2993598910, 1781952180, 1464380207, 3163844217, 3332601554, 1699332808, 1393555694, 1183702653, 3581086237, 1288719814, 691649499, 2847557200, 2895455976, 3193889540, 2717570544, 1781354906, 1676643554, 2592534050, 3230253752, 1126444790, 2770207658, 2633158820, 2210423226, 2615765581, 2414155088, 3127139286, 673620729, 2805611233, 1269405062, 4015350505, 3341807571, 4149409754, 1057255273, 2012875353, 2162469141, 2276492801, 2601117357, 993977747, 3918593370, 2654263191, 753973209, 36408145, 2530585658, 25011837, 3520020182, 2088578344, 530523599, 2918365339, 1524020338, 1518925132, 3760827505, 3759777254, 1202760957, 3985898139, 3906192525, 674977740, 4174734889, 2031300136, 2019492241, 3983892565, 4153806404, 3822280332, 352677332, 2297720250, 60907813, 90501309, 3286998549, 1016092578, 2535922412, 2839152426, 457141659, 509813237, 4120667899, 652014361, 1966332200, 2975202805, 55981186, 2327461051, 676427537, 3255491064, 2882294119, 3433927263, 1307055953, 942726286, 933058658, 2468411793, 3933900994, 4215176142, 1361170020, 2001714738, 2830558078, 3274259782, 1222529897, 1679025792, 2729314320, 3714953764, 1770335741, 151462246, 3013232138, 1682292957, 1483529935, 471910574, 1539241949, 458788160, 3436315007, 1807016891, 3718408830, 978976581, 1043663428, 3165965781, 1927990952, 4200891579, 2372276910, 3208408903, 3533431907, 1412390302, 2931980059, 4132332400, 1947078029, 3881505623, 4168226417, 2941484381, 1077988104, 1320477388, 886195818, 18198404, 3786409e3, 2509781533, 112762804, 3463356488, 1866414978, 891333506, 18488651, 661792760, 1628790961, 3885187036, 3141171499, 876946877, 2693282273, 1372485963, 791857591, 2686433993, 3759982718, 3167212022, 3472953795, 2716379847, 445679433, 3561995674, 3504004811, 3574258232, 54117162, 3331405415, 2381918588, 3769707343, 4154350007, 1140177722, 4074052095, 668550556, 3214352940, 367459370, 261225585, 2610173221, 4209349473, 3468074219, 3265815641, 314222801, 3066103646, 3808782860, 282218597, 3406013506, 3773591054, 379116347, 1285071038, 846784868, 2669647154, 3771962079, 3550491691, 2305946142, 453669953, 1268987020, 3317592352, 3279303384, 3744833421, 2610507566, 3859509063, 266596637, 3847019092, 517658769, 3462560207, 3443424879, 370717030, 4247526661, 2224018117, 4143653529, 4112773975, 2788324899, 2477274417, 1456262402, 2901442914, 1517677493, 1846949527, 2295493580, 3734397586, 2176403920, 1280348187, 1908823572, 3871786941, 846861322, 1172426758, 3287448474, 3383383037, 1655181056, 3139813346, 901632758, 1897031941, 2986607138, 3066810236, 3447102507, 1393639104, 373351379, 950779232, 625454576, 3124240540, 4148612726, 2007998917, 544563296, 2244738638, 2330496472, 2058025392, 1291430526, 424198748, 50039436, 29584100, 3605783033, 2429876329, 2791104160, 1057563949, 3255363231, 3075367218, 3463963227, 1469046755, 985887462], C$1 = [1332899944, 1700884034, 1701343084, 1684370003, 1668446532, 1869963892], S = (n2, r2) => {
  if (r2 <= 0 || r2 > n2.length) throw Error(`Illegal len: ${r2}`);
  let o2 = 0, t2, e2;
  const l2 = [];
  for (; o2 < r2; ) {
    if (t2 = n2[o2++] & 255, l2.push(A[t2 >> 2 & 63]), t2 = (t2 & 3) << 4, o2 >= r2) {
      l2.push(A[t2 & 63]);
      break;
    }
    if (e2 = n2[o2++] & 255, t2 |= e2 >> 4 & 15, l2.push(A[t2 & 63]), t2 = (e2 & 15) << 2, o2 >= r2) {
      l2.push(A[t2 & 63]);
      break;
    }
    e2 = n2[o2++] & 255, t2 |= e2 >> 6 & 3, l2.push(A[t2 & 63]), l2.push(A[e2 & 63]);
  }
  return l2.join("");
}, O = (n2, r2) => {
  const o2 = n2.length;
  let t2 = 0, e2 = 0, l2, s2, h2, u2, i2, p2;
  const g2 = [];
  for (; t2 < o2 - 1 && e2 < r2 && (p2 = n2.charCodeAt(t2++), l2 = p2 < E.length ? E[p2] : -1, p2 = n2.charCodeAt(t2++), s2 = p2 < E.length ? E[p2] : -1, !(l2 == -1 || s2 == -1 || (i2 = l2 << 2 >>> 0, i2 |= (s2 & 48) >> 4, g2.push(String.fromCharCode(i2)), ++e2 >= r2 || t2 >= o2) || (p2 = n2.charCodeAt(t2++), h2 = p2 < E.length ? E[p2] : -1, h2 == -1) || (i2 = (s2 & 15) << 4 >>> 0, i2 |= (h2 & 60) >> 2, g2.push(String.fromCharCode(i2)), ++e2 >= r2 || t2 >= o2))); ) p2 = n2.charCodeAt(t2++), u2 = p2 < E.length ? E[p2] : -1, i2 = (h2 & 3) << 6 >>> 0, i2 |= u2, g2.push(String.fromCharCode(i2)), ++e2;
  return g2.map((c2) => c2.charCodeAt(0));
}, D = (n2, r2) => {
  let o2 = null;
  for (typeof n2 == "number" && (o2 = n2, n2 = () => null); o2 !== null || (o2 = n2()) !== null; ) o2 < 128 ? r2(o2 & 127) : o2 < 2048 ? (r2(o2 >> 6 & 31 | 192), r2(o2 & 63 | 128)) : o2 < 65536 ? (r2(o2 >> 12 & 15 | 224), r2(o2 >> 6 & 63 | 128), r2(o2 & 63 | 128)) : (r2(o2 >> 18 & 7 | 240), r2(o2 >> 12 & 63 | 128), r2(o2 >> 6 & 63 | 128), r2(o2 & 63 | 128)), o2 = null;
}, B = (n2, r2) => {
  let o2, t2 = null;
  for (; (o2 = t2 !== null ? t2 : n2()) !== null; ) {
    if (o2 >= 55296 && o2 <= 57343 && (t2 = n2()) !== null && t2 >= 56320 && t2 <= 57343) {
      r2((o2 - 55296) * 1024 + t2 - 56320 + 65536), t2 = null;
      continue;
    }
    r2(o2);
  }
  t2 !== null && r2(t2);
}, j = (n2, r2) => {
  B(n2, function(o2) {
    D(o2, r2);
  });
}, w = typeof process == "object" && process.env.NEXT_RUNTIME === "edge" ? setTimeout : typeof setImmediate == "function" ? setImmediate : typeof process == "object" && typeof process.nextTick == "function" ? process.nextTick : setTimeout, k = (n2) => {
  const r2 = [];
  let o2 = 0;
  return j(() => o2 >= n2.length ? null : n2.charCodeAt(o2++), (t2) => {
    r2.push(t2);
  }), r2;
}, _ = (n2, r2, o2, t2) => {
  let e2, l2 = n2[r2], s2 = n2[r2 + 1];
  return l2 ^= o2[0], e2 = t2[l2 >>> 24], e2 += t2[256 | l2 >> 16 & 255], e2 ^= t2[512 | l2 >> 8 & 255], e2 += t2[768 | l2 & 255], s2 ^= e2 ^ o2[1], e2 = t2[s2 >>> 24], e2 += t2[256 | s2 >> 16 & 255], e2 ^= t2[512 | s2 >> 8 & 255], e2 += t2[768 | s2 & 255], l2 ^= e2 ^ o2[2], e2 = t2[l2 >>> 24], e2 += t2[256 | l2 >> 16 & 255], e2 ^= t2[512 | l2 >> 8 & 255], e2 += t2[768 | l2 & 255], s2 ^= e2 ^ o2[3], e2 = t2[s2 >>> 24], e2 += t2[256 | s2 >> 16 & 255], e2 ^= t2[512 | s2 >> 8 & 255], e2 += t2[768 | s2 & 255], l2 ^= e2 ^ o2[4], e2 = t2[l2 >>> 24], e2 += t2[256 | l2 >> 16 & 255], e2 ^= t2[512 | l2 >> 8 & 255], e2 += t2[768 | l2 & 255], s2 ^= e2 ^ o2[5], e2 = t2[s2 >>> 24], e2 += t2[256 | s2 >> 16 & 255], e2 ^= t2[512 | s2 >> 8 & 255], e2 += t2[768 | s2 & 255], l2 ^= e2 ^ o2[6], e2 = t2[l2 >>> 24], e2 += t2[256 | l2 >> 16 & 255], e2 ^= t2[512 | l2 >> 8 & 255], e2 += t2[768 | l2 & 255], s2 ^= e2 ^ o2[7], e2 = t2[s2 >>> 24], e2 += t2[256 | s2 >> 16 & 255], e2 ^= t2[512 | s2 >> 8 & 255], e2 += t2[768 | s2 & 255], l2 ^= e2 ^ o2[8], e2 = t2[l2 >>> 24], e2 += t2[256 | l2 >> 16 & 255], e2 ^= t2[512 | l2 >> 8 & 255], e2 += t2[768 | l2 & 255], s2 ^= e2 ^ o2[9], e2 = t2[s2 >>> 24], e2 += t2[256 | s2 >> 16 & 255], e2 ^= t2[512 | s2 >> 8 & 255], e2 += t2[768 | s2 & 255], l2 ^= e2 ^ o2[10], e2 = t2[l2 >>> 24], e2 += t2[256 | l2 >> 16 & 255], e2 ^= t2[512 | l2 >> 8 & 255], e2 += t2[768 | l2 & 255], s2 ^= e2 ^ o2[11], e2 = t2[s2 >>> 24], e2 += t2[256 | s2 >> 16 & 255], e2 ^= t2[512 | s2 >> 8 & 255], e2 += t2[768 | s2 & 255], l2 ^= e2 ^ o2[12], e2 = t2[l2 >>> 24], e2 += t2[256 | l2 >> 16 & 255], e2 ^= t2[512 | l2 >> 8 & 255], e2 += t2[768 | l2 & 255], s2 ^= e2 ^ o2[13], e2 = t2[s2 >>> 24], e2 += t2[256 | s2 >> 16 & 255], e2 ^= t2[512 | s2 >> 8 & 255], e2 += t2[768 | s2 & 255], l2 ^= e2 ^ o2[14], e2 = t2[l2 >>> 24], e2 += t2[256 | l2 >> 16 & 255], e2 ^= t2[512 | l2 >> 8 & 255], e2 += t2[768 | l2 & 255], s2 ^= e2 ^ o2[15], e2 = t2[s2 >>> 24], e2 += t2[256 | s2 >> 16 & 255], e2 ^= t2[512 | s2 >> 8 & 255], e2 += t2[768 | s2 & 255], l2 ^= e2 ^ o2[16], n2[r2] = s2 ^ o2[17], n2[r2 + 1] = l2, n2;
}, T = (n2, r2) => {
  let o2 = 0;
  for (let t2 = 0; t2 < 4; ++t2) o2 = o2 << 8 | n2[r2] & 255, r2 = (r2 + 1) % n2.length;
  return { key: o2, offp: r2 };
}, N = (n2, r2, o2) => {
  const t2 = r2.length, e2 = o2.length;
  let l2 = 0, s2 = [0, 0], h2;
  for (let u2 = 0; u2 < t2; u2++) h2 = T(n2, l2), l2 = h2.offp, r2[u2] = r2[u2] ^ h2.key;
  for (let u2 = 0; u2 < t2; u2 += 2) s2 = _(s2, 0, r2, o2), r2[u2] = s2[0], r2[u2 + 1] = s2[1];
  for (let u2 = 0; u2 < e2; u2 += 2) s2 = _(s2, 0, r2, o2), o2[u2] = s2[0], o2[u2 + 1] = s2[1];
}, F = (n2, r2, o2, t2) => {
  const e2 = o2.length, l2 = t2.length;
  let s2 = 0, h2 = [0, 0], u2;
  for (let i2 = 0; i2 < e2; i2++) u2 = T(r2, s2), s2 = u2.offp, o2[i2] = o2[i2] ^ u2.key;
  s2 = 0;
  for (let i2 = 0; i2 < e2; i2 += 2) u2 = T(n2, s2), s2 = u2.offp, h2[0] ^= u2.key, u2 = T(n2, s2), s2 = u2.offp, h2[1] ^= u2.key, h2 = _(h2, 0, o2, t2), o2[i2] = h2[0], o2[i2 + 1] = h2[1];
  for (let i2 = 0; i2 < l2; i2 += 2) u2 = T(n2, s2), s2 = u2.offp, h2[0] ^= u2.key, u2 = T(n2, s2), s2 = u2.offp, h2[1] ^= u2.key, h2 = _(h2, 0, o2, t2), t2[i2] = h2[0], t2[i2 + 1] = h2[1];
}, R = (n2, r2, o2, t2, e2) => {
  const l2 = C$1.slice(), s2 = l2.length;
  if (o2 < 4 || o2 > 31) {
    const c2 = new Error(`Illegal number of rounds (4-31): ${o2}`);
    if (t2 === false) return Promise.reject(c2);
    throw c2;
  }
  if (r2.length !== 16) {
    const c2 = new Error(`Illegal salt length: ${r2.length} != 16`);
    if (t2 === false) return Promise.reject(c2);
    throw c2;
  }
  o2 = 1 << o2 >>> 0;
  let h2, u2, i2 = 0, p2;
  Int32Array ? (h2 = new Int32Array(L), u2 = new Int32Array(b)) : (h2 = L.slice(), u2 = b.slice()), F(r2, n2, h2, u2);
  const g2 = () => {
    if (i2 < o2) {
      const c2 = Date.now();
      for (; i2 < o2 && (i2 = i2 + 1, N(n2, h2, u2), N(r2, h2, u2), !(Date.now() - c2 > 100)); ) ;
    } else {
      for (i2 = 0; i2 < 64; i2++) for (p2 = 0; p2 < s2 >> 1; p2++) _(l2, p2 << 1, h2, u2);
      const c2 = [];
      for (i2 = 0; i2 < s2; i2++) c2.push((l2[i2] >> 24 & 255) >>> 0), c2.push((l2[i2] >> 16 & 255) >>> 0), c2.push((l2[i2] >> 8 & 255) >>> 0), c2.push((l2[i2] & 255) >>> 0);
      return t2 === false ? Promise.resolve(c2) : c2;
    }
    if (t2 === false) return new Promise((c2) => w(() => {
      g2().then(c2);
    }));
  };
  if (t2 === false) return g2();
  {
    let c2;
    for (; ; ) if (typeof (c2 = g2()) < "u") return c2 || [];
  }
}, G = (n2) => {
  try {
    let r2;
    typeof window < "u" ? r2 = window.crypto ?? window.msCrypto : r2 = globalThis.crypto;
    const o2 = new Uint32Array(n2);
    return r2 == null || r2.getRandomValues(o2), Array.from(o2);
  } catch {
    throw Error("WebCryptoAPI is not available");
  }
}, m = (n2 = 10) => {
  if (typeof n2 != "number") throw Error("Illegal arguments: " + typeof n2);
  n2 < 4 ? n2 = 4 : n2 > 31 && (n2 = 31);
  const r2 = [];
  return r2.push("$2a$"), n2 < 10 && r2.push("0"), r2.push(n2.toString()), r2.push("$"), r2.push(S(G(16), 16)), r2.join("");
};
function d(n2, r2, o2, t2) {
  if (typeof n2 != "string" || typeof r2 != "string") {
    const a2 = new Error("Invalid string / salt: Not a string");
    if (o2 === false) return Promise.reject(a2);
    throw a2;
  }
  let e2, l2;
  if (r2.charAt(0) !== "$" || r2.charAt(1) !== "2") {
    const a2 = new Error("Invalid salt version: " + r2.substring(0, 2));
    if (o2 === false) return Promise.reject(a2);
    throw a2;
  }
  if (r2.charAt(2) === "$") e2 = "\0", l2 = 3;
  else {
    if (e2 = r2.charAt(2), e2 !== "a" && e2 !== "b" && e2 !== "y" || r2.charAt(3) !== "$") {
      const a2 = Error("Invalid salt revision: " + r2.substring(2, 4));
      if (o2 === false) return Promise.reject(a2);
      throw a2;
    }
    l2 = 4;
  }
  if (r2.charAt(l2 + 2) > "$") {
    const a2 = new Error("Missing salt rounds");
    if (o2 === false) return Promise.reject(a2);
    throw a2;
  }
  const s2 = parseInt(r2.substring(l2, l2 + 1), 10) * 10, h2 = parseInt(r2.substring(l2 + 1, l2 + 2), 10), u2 = s2 + h2, i2 = r2.substring(l2 + 3, l2 + 25);
  n2 += e2 >= "a" ? "\0" : "";
  const p2 = k(n2), g2 = O(i2, 16), c2 = (a2) => {
    const y2 = [];
    return y2.push("$2"), e2 >= "a" && y2.push(e2), y2.push("$"), u2 < 10 && y2.push("0"), y2.push(u2.toString()), y2.push("$"), y2.push(S(g2, g2.length)), y2.push(S(a2, C$1.length * 4 - 1)), y2.join("");
  };
  return o2 === false ? R(p2, g2, u2, false).then((a2) => c2(a2)) : c2(R(p2, g2, u2, true));
}
const U = (n2, r2 = 10) => {
  if (typeof r2 == "number" && (r2 = m(r2)), typeof n2 != "string" || typeof r2 != "string") throw Error("Illegal arguments: " + typeof n2 + ", " + typeof r2);
  return d(n2, r2, true);
}, x = (n2, r2) => {
  if (typeof n2 != "string" || typeof r2 != "string") throw Error("Illegal arguments: " + typeof n2 + ", " + typeof r2);
  return r2.length !== 60 ? false : U(n2, r2.substring(0, r2.length - 31)) === r2;
};
const STORAGE_KEY$1 = "VUEPRESS_HOPE_GLOBAL_TOKEN";
const useGlobalEncrypt = () => {
  const encryptData = useEncryptData();
  const localToken = useStorage(STORAGE_KEY$1, "");
  const sessionToken = useSessionStorage(STORAGE_KEY$1, "");
  const isEncrypted = computed(() => {
    const { global: global2 = false, admin = [] } = encryptData.value;
    return global2 && admin.length > 0;
  });
  const isDecrypted = computed(() => {
    if (isEncrypted.value) {
      if (localToken.value)
        return encryptData.value.admin.some((hash) => x(localToken.value, hash));
      if (sessionToken.value)
        return encryptData.value.admin.some((hash) => x(sessionToken.value, hash));
    }
    return false;
  });
  const validate = (inputToken, keep = false) => {
    (keep ? localToken : sessionToken).value = inputToken;
  };
  return {
    isEncrypted,
    isDecrypted,
    validate
  };
};
const isTokenMatched = (token = "", hash) => Boolean(token) && x(token, hash);
const STORAGE_KEY = "VUEPRESS_HOPE_PATH_TOKEN";
const usePathEncrypt = () => {
  const page = usePageData();
  const encryptData = useEncryptData();
  const localToken = useStorage(STORAGE_KEY, {});
  const sessionToken = useSessionStorage(STORAGE_KEY, {});
  const getPathMatchedKeys = (path) => isPlainObject(encryptData.value.config) ? keys(encryptData.value.config).filter((key) => startsWith(decodeURI(path), key)).sort((a2, b2) => b2.length - a2.length) : [];
  const getStatus = (path) => {
    const matchedKeys = getPathMatchedKeys(path);
    if (matchedKeys.length > 0) {
      const { config: config2 = {} } = encryptData.value;
      return {
        isEncrypted: true,
        isDecrypted: matchedKeys.some((key) => localToken.value[key] && config2[key].some((token) => isTokenMatched(localToken.value[key], token)) || sessionToken.value[key] && config2[key].some((token) => isTokenMatched(sessionToken.value[key], token)))
      };
    }
    return {
      isDecrypted: false,
      isEncrypted: false
    };
  };
  const status = computed(() => getStatus(page.value.path));
  const validate = (inputToken, keep = false) => {
    const { config: config2 = {} } = encryptData.value;
    const matchedKeys = getPathMatchedKeys(page.value.path);
    for (const hitKey of matchedKeys)
      if (config2[hitKey].filter((token) => isTokenMatched(inputToken, token))) {
        (keep ? localToken : sessionToken).value[hitKey] = inputToken;
        break;
      }
  };
  return {
    status,
    getStatus,
    validate
  };
};
const GlobalEncrypt = defineComponent({
  name: "GlobalEncrypt",
  slots: Object,
  setup(_props, { slots }) {
    const { isDecrypted, isEncrypted, validate } = useGlobalEncrypt();
    const isPure = usePure();
    const isMounted = ref(false);
    onMounted(() => {
      isMounted.value = true;
    });
    return () => h$1(isPure.value ? B$1 : FadeSlideY, () => isEncrypted.value ? isMounted.value ? isDecrypted.value ? slots.default() : h$1(PasswordModal, { full: true, onVerify: validate }) : null : slots.default());
  }
});
const LocalEncrypt = defineComponent({
  name: "LocalEncrypt",
  slots: Object,
  setup(_props, { slots }) {
    const { status, validate } = usePathEncrypt();
    const isMounted = ref(false);
    onMounted(() => {
      isMounted.value = true;
    });
    return () => {
      const { isEncrypted, isDecrypted } = status.value;
      return isEncrypted ? isMounted.value ? isDecrypted ? slots.default() : h$1(PasswordModal, { full: true, onVerify: validate }) : null : slots.default();
    };
  }
});
var C = defineComponent({ name: "SlidePage", setup() {
  const n2 = useRouter(), u2 = useRouteLocale(), t2 = ref(false), a2 = shallowRef(), s2 = () => {
    t2.value = !t2.value;
  }, o2 = () => {
    t2.value = false;
  }, l2 = () => {
    o2(), window.history.go(-1);
  }, i2 = () => {
    o2(), n2.push(u2.value);
  };
  return onClickOutside(a2, o2), () => h$1("div", { class: "vp-reveal-page" }, [h$1(Content), h$1("div", { ref: a2, class: ["vp-reveal-menu", { active: t2.value }] }, [h$1("button", { type: "button", class: "menu-button", onClick: () => s2() }, h$1("span", { class: "icon" })), h$1("button", { type: "button", class: "back-button", onClick: () => l2() }, h$1(q$1)), h$1("button", { type: "button", class: "home-button", onClick: () => i2() }, h$1(a$5))])]);
} });
defineCatalogInfoGetter((meta) => {
  const title = meta.t;
  const shouldIndex = meta.I !== false;
  const icon = meta.i;
  return shouldIndex ? {
    title,
    content: icon ? () => [h$1(HopeIcon, { icon }), title] : null,
    order: meta.O,
    index: meta.I
  } : null;
});
const config = defineClientConfig({
  enhance: ({ app, router }) => {
    const { scrollBehavior } = router.options;
    router.options.scrollBehavior = async (...args) => {
      await scrollPromise.wait();
      return scrollBehavior(...args);
    };
    injectDarkmode(app);
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
    Slide: C
  }
});
const clientConfig13 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: config
}, Symbol.toStringTag, { value: "Module" }));
const millisecondPerDay = 1e3 * 60 * 60 * 24;
const setupRunningTimeFooter = (date, locales2 = {
  "/": "Running time: :day days :hour hours :minute minutes :second seconds"
}, preserveContent = false) => {
  const initialTimeStamp = (date instanceof Date ? date : new Date(date)).getTime();
  let prevTimeText = "";
  const page = usePageData();
  const now = useNow();
  const routeLocale = useRouteLocale();
  const pastedTime = computed(() => {
    const passedTime = now.value.getTime() - initialTimeStamp;
    const restDate = new Date(passedTime % millisecondPerDay);
    return {
      day: Math.floor(passedTime / millisecondPerDay),
      hour: restDate.getHours(),
      minute: restDate.getMinutes(),
      second: restDate.getSeconds()
    };
  });
  onMounted(() => {
    watch(() => [page.value.path, pastedTime.value], () => {
      const footer = document.querySelector(".vp-footer");
      if (footer) {
        const { day, hour, minute, second } = pastedTime.value;
        const localeText = (locales2[routeLocale.value] || locales2["/"]).replace(":day", day.toString()).replace(":hour", hour.toString()).replace(":minute", minute.toString()).replace(":second", second.toString());
        footer.innerHTML = `${preserveContent ? `${footer.innerHTML.replace(`<br>${prevTimeText}`, "")}<br>` : ""}${localeText}`;
        prevTimeText = localeText;
      }
    }, {
      flush: "post",
      immediate: true
    });
  });
};
const BLOG_HOMEPAGE_STYLE = `.theme-container .vp-page.vp-portfolio-home,
.theme-container .vp-page.vp-blog-home {
  padding-top: 0;
}
.vp-blog-hero.fullscreen {
  height: 100vh;
}
`;
const HOMEPAGE_STYLE = BLOG_HOMEPAGE_STYLE + `.theme-container .vp-project-home {
  padding-top: 0;
}

.vp-hero-info-wrapper{
  padding-top: var(--navbar-height);
}
`;
const COLOR_SELECTORS = [
  ".vp-navbar",
  ".vp-site-name",
  ".vp-dropdown-title",
  ".vp-dropdown-subtitle",
  ".vp-navbar .auto-link",
  ".vp-navbar .auto-link.route-link-active",
  ".vp-action-link",
  ".vp-color-mode-switch",
  ".vp-outlook-button",
  ".search-pro-button",
  ".DocSearch-Button"
];
const BACKGROUND_SELECTORS = [
  ".vp-toggle-navbar-button .vp-top",
  ".vp-toggle-navbar-button .vp-middle",
  ".vp-toggle-navbar-button .vp-bottom",
  ".vp-toggle-sidebar-button .icon",
  ".vp-toggle-sidebar-button:before",
  ".vp-toggle-sidebar-button:after"
];
const encodeDataURI = (content) => content.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/{/g, "%7B").replace(/}/g, "%7D").replace(/</g, "%3C").replace(/>/g, "%3E");
const getStyle = (color, parentSelector = "") => `${COLOR_SELECTORS.map((item) => `${parentSelector} .transparent-navbar ${item}`).join(",")} {
  color: ${color};
}
${BACKGROUND_SELECTORS.map((item) => `${parentSelector} .transparent-navbar ${item}`).join(",")} {
  background: ${color};
}

${parentSelector}.transparent-navbar .dropdown-wrapper .dropdown-title > .arrow {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='${encodeDataURI(color)}' d='M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z'/%3E%3C/svg%3E");
}
`;
const setupTransparentNavbar = ({ type, threshold = 50, light = "#fff", dark = "#bbb" } = {}) => {
  const route = useRoute();
  const routeLocale = useRouteLocale();
  const frontmatter = usePageFrontmatter();
  const shouldTransparent = computed(type === "all" ? () => true : type === "homepage" ? () => frontmatter.value["home"] ?? route.path === routeLocale.value : () => frontmatter.value["portfolio"] ?? frontmatter.value.layout === "BlogHome");
  const transparentNavbar = () => {
    if (window.scrollY < threshold && shouldTransparent.value) {
      document.body.classList.add("transparent-navbar");
    } else {
      document.body.classList.remove("transparent-navbar");
    }
  };
  useStyleTag((type === "homepage" ? HOMEPAGE_STYLE : BLOG_HOMEPAGE_STYLE) + (light === dark ? getStyle(light, "") : getStyle(light, "html[data-theme=light] ") + getStyle(dark, "html[data-theme=dark] ")));
  useEventListener("scroll", transparentNavbar);
  watch(() => route.path, () => nextTick().then(transparentNavbar));
  onMounted(() => {
    transparentNavbar();
  });
};
const client = defineClientConfig({
  setup() {
    setupRunningTimeFooter(
      /* @__PURE__ */ new Date("2022-01-01"),
      {
        "/": "Running time: :day days :hour hours :minute minutes :second seconds",
        "/zh/": "已运行 :day 天 :hour 小时 :minute 分钟 :second 秒"
      },
      true
    );
    setupTransparentNavbar();
  }
});
const clientConfig14 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: client
}, Symbol.toStringTag, { value: "Module" }));
const clientConfigs = [
  clientConfig0,
  clientConfig1,
  clientConfig2,
  clientConfig3,
  clientConfig4,
  clientConfig5,
  clientConfig6,
  clientConfig7,
  clientConfig8,
  clientConfig9,
  clientConfig10,
  clientConfig11,
  clientConfig12,
  clientConfig13,
  clientConfig14
].map((m2) => m2.default).filter(Boolean);
const siteData$1 = JSON.parse('{"base":"/","lang":"en-US","title":"","description":"","head":[["link",{"rel":"icon","href":"/favicon.ico"}],["link",{"rel":"icon","href":"/assets/icon/chrome-mask-512.png","type":"image/png","sizes":"512x512"}],["link",{"rel":"icon","href":"/assets/icon/chrome-mask-192.png","type":"image/png","sizes":"192x192"}],["link",{"rel":"icon","href":"/assets/icon/chrome-512.png","type":"image/png","sizes":"512x512"}],["link",{"rel":"icon","href":"/assets/icon/chrome-192.png","type":"image/png","sizes":"192x192"}],["link",{"rel":"manifest","href":"/manifest.webmanifest","crossorigin":"use-credentials"}],["meta",{"name":"theme-color","content":"#46bd87"}],["link",{"rel":"apple-touch-icon","href":"/assets/icon/apple-icon-152.png"}],["meta",{"name":"apple-mobile-web-app-capable","content":"yes"}],["meta",{"name":"apple-mobile-web-app-status-bar-style","content":"black"}],["meta",{"name":"msapplication-TileImage","content":"/assets/icon/ms-icon-144.png"}],["meta",{"name":"msapplication-TileColor","content":"#ffffff"}]],"locales":{"/":{"lang":"en-US","title":"Blog Demo","description":"A blog demo for vuepress-theme-hope"},"/zh/":{"lang":"zh-CN","title":"博客演示","description":"vuepress-theme-hope 的博客演示"}}}');
var siteData = shallowRef(siteData$1);
var historyCreator = createMemoryHistory;
var createVueRouter = () => {
  const router = createRouter({
    // it might be an issue of vue-router that have to remove the ending slash
    history: historyCreator(removeEndingSlash("/")),
    routes: [
      {
        name: "vuepress-route",
        path: "/:catchAll(.*)",
        components: {}
      }
    ],
    scrollBehavior: (to, _from, savedPosition) => {
      if (savedPosition) return savedPosition;
      if (to.hash) return { el: to.hash };
      return { top: 0 };
    }
  });
  router.beforeResolve(async (to, from) => {
    if (to.path !== from.path || from === START_LOCATION) {
      const route = resolveRoute(to.fullPath);
      if (route.path !== to.fullPath) {
        return route.path;
      }
      const pageChunk = await route.loader();
      to.meta = {
        // attach route meta
        ...route.meta,
        // attach page chunk route meta
        _pageChunk: pageChunk
      };
    } else if (to.path === from.path) {
      to.meta = from.meta;
    }
  });
  return router;
};
var setupGlobalComponents = (app) => {
  app.component("ClientOnly", ClientOnly);
  app.component("Content", Content);
  app.component("RouteLink", RouteLink);
};
var setupGlobalComputed = (app, router, clientConfigs2) => {
  const routePath = computed(() => router.currentRoute.value.path);
  const pageChunk = customRef((track, trigger) => ({
    get() {
      track();
      return router.currentRoute.value.meta._pageChunk;
    },
    set(value) {
      router.currentRoute.value.meta._pageChunk = value;
      trigger();
    }
  }));
  const layouts = computed(() => resolvers.resolveLayouts(clientConfigs2));
  const routeLocale = computed(
    () => resolvers.resolveRouteLocale(siteData.value.locales, routePath.value)
  );
  const siteLocaleData = computed(
    () => resolvers.resolveSiteLocaleData(siteData.value, routeLocale.value)
  );
  const pageComponent = computed(() => pageChunk.value.comp);
  const pageData = computed(() => pageChunk.value.data);
  const pageFrontmatter = computed(() => pageData.value.frontmatter);
  const pageHeadTitle = computed(
    () => resolvers.resolvePageHeadTitle(pageData.value, siteLocaleData.value)
  );
  const pageHead = computed(
    () => resolvers.resolvePageHead(
      pageHeadTitle.value,
      pageFrontmatter.value,
      siteLocaleData.value
    )
  );
  const pageLang = computed(
    () => resolvers.resolvePageLang(pageData.value, siteLocaleData.value)
  );
  const pageLayout = computed(
    () => resolvers.resolvePageLayout(pageData.value, layouts.value)
  );
  const clientData = {
    layouts,
    pageData,
    pageComponent,
    pageFrontmatter,
    pageHead,
    pageHeadTitle,
    pageLang,
    pageLayout,
    redirects,
    routeLocale,
    routePath,
    routes,
    siteData,
    siteLocaleData
  };
  app.provide(clientDataSymbol, clientData);
  Object.defineProperties(app.config.globalProperties, {
    $frontmatter: { get: () => pageFrontmatter.value },
    $head: { get: () => pageHead.value },
    $headTitle: { get: () => pageHeadTitle.value },
    $lang: { get: () => pageLang.value },
    $page: { get: () => pageData.value },
    $routeLocale: { get: () => routeLocale.value },
    $site: { get: () => siteData.value },
    $siteLocale: { get: () => siteLocaleData.value },
    $withBase: { get: () => withBase }
  });
  return clientData;
};
var setupUpdateHead = () => {
  const head = usePageHead();
  const lang = usePageLang();
  {
    const ssrContext = useSSRContext();
    if (ssrContext) {
      ssrContext.head = head.value;
      ssrContext.lang = lang.value;
    }
    return;
  }
};
var appCreator = createSSRApp;
var createVueApp = async () => {
  var _a2;
  const app = appCreator({
    name: "Vuepress",
    setup() {
      var _a3;
      setupUpdateHead();
      for (const clientConfig of clientConfigs) {
        (_a3 = clientConfig.setup) == null ? void 0 : _a3.call(clientConfig);
      }
      const rootComponents = clientConfigs.flatMap(
        ({ rootComponents: rootComponents2 = [] }) => rootComponents2.map((component) => h$1(component))
      );
      const pageLayout = usePageLayout();
      return () => [h$1(pageLayout.value), rootComponents];
    }
  });
  const router = createVueRouter();
  setupGlobalComponents(app);
  setupGlobalComputed(app, router, clientConfigs);
  for (const clientConfig of clientConfigs) {
    await ((_a2 = clientConfig.enhance) == null ? void 0 : _a2.call(clientConfig, { app, router, siteData }));
  }
  app.use(router);
  return {
    app,
    router
  };
};
export {
  _export_sfc as _,
  decodeData as a,
  createVueApp,
  deepAssign as d,
  e$4 as e,
  i,
  useMutationObserver as u
};
