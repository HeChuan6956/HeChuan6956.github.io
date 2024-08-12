import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../app.gpVoHC1a.mjs";
import "vue-router";
import "@waline/client/pageview";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Catalog = resolveComponent("Catalog");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Catalog, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/posts/apple/index.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/posts/apple/","title":"Apple","lang":"en-US","frontmatter":{"title":"Apple","article":false,"feed":false,"sitemap":false,"gitInclude":[],"head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://theme-hope-blog-demo.vuejs.press/zh/posts/apple/"}],["meta",{"property":"og:url","content":"https://theme-hope-blog-demo.vuejs.press/posts/apple/"}],["meta",{"property":"og:site_name","content":"Blog Demo"}],["meta",{"property":"og:title","content":"Apple"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"article:author","content":"Mr.Hope"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"Apple\\"}"]]},"headers":[],"git":{},"readingTime":{"minutes":0,"words":1},"filePathRelative":null,"excerpt":""}');
export {
  index_html as comp,
  data
};
