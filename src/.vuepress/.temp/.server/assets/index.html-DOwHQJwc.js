import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.gpVoHC1a.mjs";
import "vue-router";
import "@waline/client/pageview";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/zh/category/苹果/index.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/zh/category/%E8%8B%B9%E6%9E%9C/","title":"苹果 分类","lang":"en-US","frontmatter":{"title":"苹果 分类","dir":{"index":false},"index":false,"feed":false,"sitemap":false,"blog":{"type":"category","name":"苹果","key":"category"},"layout":"BlogCategory","gitInclude":[],"head":[["meta",{"property":"og:url","content":"https://theme-hope-blog-demo.vuejs.press/zh/category/%E8%8B%B9%E6%9E%9C/"}],["meta",{"property":"og:site_name","content":"Blog Demo"}],["meta",{"property":"og:title","content":"苹果 分类"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"article:author","content":"Mr.Hope"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"苹果 分类\\"}"]]},"headers":[],"git":{},"readingTime":{"minutes":0,"words":0},"filePathRelative":null,"excerpt":""}');
export {
  index_html as comp,
  data
};
