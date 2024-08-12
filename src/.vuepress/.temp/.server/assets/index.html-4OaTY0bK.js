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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/demo/index.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/demo/","title":"Features demo","lang":"en-US","frontmatter":{"title":"Features demo","index":false,"icon":"laptop-code","category":["Guide"],"head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://theme-hope-blog-demo.vuejs.press/zh/demo/"}],["meta",{"property":"og:url","content":"https://theme-hope-blog-demo.vuejs.press/demo/"}],["meta",{"property":"og:site_name","content":"Blog Demo"}],["meta",{"property":"og:title","content":"Features demo"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-05T11:26:54.000Z"}],["meta",{"property":"article:author","content":"Mr.Hope"}],["meta",{"property":"article:modified_time","content":"2024-02-05T11:26:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Features demo\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-02-05T11:26:54.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[],"git":{"createdTime":1622991562000,"updatedTime":1707132414000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":5}]},"readingTime":{"minutes":0.04,"words":12},"filePathRelative":"demo/README.md","localizedDate":"June 6, 2021","excerpt":""}');
export {
  index_html as comp,
  data
};
