import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.gpVoHC1a.mjs";
import "vue-router";
import "@waline/client/pageview";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>你可以通过设置页面的 Frontmatter，在页面禁用功能与布局。</p><!-- more --><p>本页面就是一个示例，禁用了如下功能:</p><ul><li>导航栏</li><li>侧边栏</li><li>路径导航</li><li>页面信息</li><li>贡献者</li><li>编辑此页链接</li><li>更新时间</li><li>上一篇/下一篇 链接</li><li>评论</li><li>页脚</li><li>返回顶部按钮</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/zh/demo/disable.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const disable_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "disable.html.vue"]]);
const data = JSON.parse('{"path":"/zh/demo/disable.html","title":"布局与功能禁用","lang":"zh-CN","frontmatter":{"title":"布局与功能禁用","icon":"gears","order":4,"category":["使用指南"],"tag":["禁用"],"navbar":false,"sidebar":false,"breadcrumb":false,"pageInfo":false,"contributors":false,"editLink":false,"lastUpdated":false,"prev":false,"next":false,"comment":false,"footer":false,"backtotop":false,"description":"你可以通过设置页面的 Frontmatter，在页面禁用功能与布局。","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://theme-hope-blog-demo.vuejs.press/demo/disable.html"}],["meta",{"property":"og:url","content":"https://theme-hope-blog-demo.vuejs.press/zh/demo/disable.html"}],["meta",{"property":"og:site_name","content":"博客演示"}],["meta",{"property":"og:title","content":"布局与功能禁用"}],["meta",{"property":"og:description","content":"你可以通过设置页面的 Frontmatter，在页面禁用功能与布局。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-12-12T07:30:59.000Z"}],["meta",{"property":"article:author","content":"Mr.Hope"}],["meta",{"property":"article:tag","content":"禁用"}],["meta",{"property":"article:modified_time","content":"2023-12-12T07:30:59.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"布局与功能禁用\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-12-12T07:30:59.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[],"git":{"createdTime":1623577866000,"updatedTime":1702366259000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":3}]},"readingTime":{"minutes":0.43,"words":128},"filePathRelative":"zh/demo/disable.md","localizedDate":"2021年6月13日","excerpt":"<p>你可以通过设置页面的 Frontmatter，在页面禁用功能与布局。</p>\\n","autoDesc":true}');
export {
  disable_html as comp,
  data
};
