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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/zh/demo/index.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/zh/demo/","title":"主要功能与配置演示","lang":"zh-CN","frontmatter":{"title":"主要功能与配置演示","index":false,"icon":"laptop-code","category":["使用指南"],"head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://theme-hope-blog-demo.vuejs.press/demo/"}],["meta",{"property":"og:url","content":"https://theme-hope-blog-demo.vuejs.press/zh/demo/"}],["meta",{"property":"og:site_name","content":"博客演示"}],["meta",{"property":"og:title","content":"主要功能与配置演示"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-02-05T11:26:54.000Z"}],["meta",{"property":"article:author","content":"Mr.Hope"}],["meta",{"property":"article:modified_time","content":"2024-02-05T11:26:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"主要功能与配置演示\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-02-05T11:26:54.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[],"git":{"createdTime":1622991562000,"updatedTime":1707132414000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":5}]},"readingTime":{"minutes":0.07,"words":22},"filePathRelative":"zh/demo/README.md","localizedDate":"2021年6月6日","excerpt":""}');
export {
  index_html as comp,
  data
};
