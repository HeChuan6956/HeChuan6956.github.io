import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.gpVoHC1a.mjs";
import "vue-router";
import "@waline/client/pageview";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>You can disable some function and layout on the page by setting the Frontmatter of the page.</p><!-- more --><p>This page is an demo that disables the following features:</p><ul><li>Navbar</li><li>Sidebar</li><li>Breadcrumb</li><li>Page information</li><li>Contributors</li><li>Edit link</li><li>Update time</li><li>Prev/Next link</li><li>Comment</li><li>Footer</li><li>Back to top button</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/demo/disable.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const disable_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "disable.html.vue"]]);
const data = JSON.parse('{"path":"/demo/disable.html","title":"Disabling layout and features","lang":"en-US","frontmatter":{"title":"Disabling layout and features","icon":"gears","order":4,"category":["Guide"],"tag":["disable"],"navbar":false,"sidebar":false,"breadcrumb":false,"pageInfo":false,"contributors":false,"editLink":false,"lastUpdated":false,"prev":false,"next":false,"comment":false,"footer":false,"backtotop":false,"description":"You can disable some function and layout on the page by setting the Frontmatter of the page.","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://theme-hope-blog-demo.vuejs.press/zh/demo/disable.html"}],["meta",{"property":"og:url","content":"https://theme-hope-blog-demo.vuejs.press/demo/disable.html"}],["meta",{"property":"og:site_name","content":"Blog Demo"}],["meta",{"property":"og:title","content":"Disabling layout and features"}],["meta",{"property":"og:description","content":"You can disable some function and layout on the page by setting the Frontmatter of the page."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-12T07:30:59.000Z"}],["meta",{"property":"article:author","content":"Mr.Hope"}],["meta",{"property":"article:tag","content":"disable"}],["meta",{"property":"article:modified_time","content":"2023-12-12T07:30:59.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Disabling layout and features\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-12-12T07:30:59.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[],"git":{"createdTime":1623577866000,"updatedTime":1702366259000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":3}]},"readingTime":{"minutes":0.28,"words":83},"filePathRelative":"demo/disable.md","localizedDate":"June 13, 2021","excerpt":"<p>You can disable some function and layout on the page by setting the Frontmatter of the page.</p>\\n","autoDesc":true}');
export {
  disable_html as comp,
  data
};
