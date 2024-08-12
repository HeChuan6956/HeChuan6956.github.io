import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.gpVoHC1a.mjs";
import "vue-router";
import "@waline/client/pageview";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="密码加密的文章" tabindex="-1"><a class="header-anchor" href="#密码加密的文章"><span>密码加密的文章</span></a></h1><p>实际的文章内容。</p><p>段落 1 文字段落 1 文字段落 1 文字段落 1 文字段落 1 文字段落 1 文字段落 1 文字段落 1 文字段落 1 文字段落 1 文字段落 1 文字段落 1 文字。</p><p>段落 2 文字段落 2 文字段落 2 文字段落 2 文字段落 2 文字段落 2 文字段落 2 文字段落 2 文字段落 2 文字段落 2 文字段落 2 文字段落 2 文字段落 2 文字段落 2 文字。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/zh/demo/encrypt.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const encrypt_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "encrypt.html.vue"]]);
const data = JSON.parse('{"path":"/zh/demo/encrypt.html","title":"密码加密的文章","lang":"zh-CN","frontmatter":{"icon":"lock","category":["使用指南"],"tag":["加密"],"feed":false,"seo":false,"head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://theme-hope-blog-demo.vuejs.press/demo/encrypt.html"}]]},"headers":[],"git":{"createdTime":1623577866000,"updatedTime":1702639822000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":2}]},"readingTime":{"minutes":0.51,"words":154},"filePathRelative":"zh/demo/encrypt.md","localizedDate":"2021年6月13日"}');
export {
  encrypt_html as comp,
  data
};
