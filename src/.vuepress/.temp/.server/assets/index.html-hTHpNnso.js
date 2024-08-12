import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.gpVoHC1a.mjs";
import "vue-router";
import "@waline/client/pageview";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>这是一个博客主页的案例。</p><p>要使用此布局，你应该在页面前端设置 <code>layout: BlogHome</code> 和 <code>home: true</code>。</p><p>相关配置文档请见 <a href="https://theme-hope.vuejs.press/zh/guide/blog/home.html" target="_blank" rel="noopener noreferrer">博客主页</a>。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/zh/index.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/zh/","title":"博客主页","lang":"zh-CN","frontmatter":{"home":true,"layout":"BlogHome","icon":"home","title":"博客主页","heroImage":"https://theme-hope-assets.vuejs.press/logo.svg","heroText":"你博客的名称","heroFullScreen":true,"tagline":"你可以在这里放置你的口号与标语","projects":[{"icon":"project","name":"项目名称","desc":"项目详细描述","link":"https://你的项目链接"},{"icon":"link","name":"链接名称","desc":"链接详细描述","link":"https://链接地址"},{"icon":"book","name":"书籍名称","desc":"书籍详细描述","link":"https://你的书籍链接"},{"icon":"article","name":"文章名称","desc":"文章详细描述","link":"https://你的文章链接"},{"icon":"friend","name":"伙伴名称","desc":"伙伴详细介绍","link":"https://你的伙伴链接"},{"icon":"https://theme-hope-assets.vuejs.press/logo.svg","name":"自定义项目","desc":"自定义详细介绍","link":"https://你的自定义链接"}],"footer":"自定义你的页脚文字","description":"这是一个博客主页的案例。 要使用此布局，你应该在页面前端设置 layout: BlogHome 和 home: true。 相关配置文档请见 博客主页。","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://theme-hope-blog-demo.vuejs.press/"}],["meta",{"property":"og:url","content":"https://theme-hope-blog-demo.vuejs.press/zh/"}],["meta",{"property":"og:site_name","content":"博客演示"}],["meta",{"property":"og:title","content":"博客主页"}],["meta",{"property":"og:description","content":"这是一个博客主页的案例。 要使用此布局，你应该在页面前端设置 layout: BlogHome 和 home: true。 相关配置文档请见 博客主页。"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-04-29T11:25:25.000Z"}],["meta",{"property":"article:author","content":"Mr.Hope"}],["meta",{"property":"article:modified_time","content":"2024-04-29T11:25:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"博客主页\\",\\"description\\":\\"这是一个博客主页的案例。 要使用此布局，你应该在页面前端设置 layout: BlogHome 和 home: true。 相关配置文档请见 博客主页。\\"}"]]},"headers":[],"git":{"createdTime":1623577866000,"updatedTime":1714389925000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":5},{"name":"Mister-Hope","email":"mister-hope@outlook.com","commits":1}]},"readingTime":{"minutes":0.8,"words":241},"filePathRelative":"zh/README.md","localizedDate":"2021年6月13日","excerpt":"<p>这是一个博客主页的案例。</p>\\n<p>要使用此布局，你应该在页面前端设置 <code>layout: BlogHome</code> 和 <code>home: true</code>。</p>\\n<p>相关配置文档请见 <a href=\\"https://theme-hope.vuejs.press/zh/guide/blog/home.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">博客主页</a>。</p>\\n","autoDesc":true}');
export {
  index_html as comp,
  data
};
