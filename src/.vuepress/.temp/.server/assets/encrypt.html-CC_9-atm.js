import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.gpVoHC1a.mjs";
import "vue-router";
import "@waline/client/pageview";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="encryption-article" tabindex="-1"><a class="header-anchor" href="#encryption-article"><span>Encryption Article</span></a></h1><p>The actual article content.</p><p>Paragraph 1 text paragraph 1 text paragraph 1 text paragraph 1 text paragraph 1 text paragraph 1 text paragraph 1 text paragraph 1 text paragraph 1 text paragraph 1 text paragraph 1 text paragraph 1 text.</p><p>Paragraph 2 text paragraph 2 text paragraph 2 text paragraph 2 text paragraph 2 text paragraph 2 text paragraph 2 text paragraph 2 text paragraph 2 text paragraph 2 text paragraph 2 text paragraph 2 text paragraph 2 text paragraph 2 text.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/demo/encrypt.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const encrypt_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "encrypt.html.vue"]]);
const data = JSON.parse('{"path":"/demo/encrypt.html","title":"Encryption Article","lang":"en-US","frontmatter":{"icon":"lock","category":["Guide"],"tag":["encryption"],"feed":false,"seo":false,"head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://theme-hope-blog-demo.vuejs.press/zh/demo/encrypt.html"}]]},"headers":[],"git":{"createdTime":1623577866000,"updatedTime":1663414381000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1}]},"readingTime":{"minutes":0.3,"words":90},"filePathRelative":"demo/encrypt.md","localizedDate":"June 13, 2021"}');
export {
  encrypt_html as comp,
  data
};
