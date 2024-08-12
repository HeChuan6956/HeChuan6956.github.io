import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.gpVoHC1a.mjs";
import "vue-router";
import "@waline/client/pageview";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="intro-page" tabindex="-1"><a class="header-anchor" href="#intro-page"><span>Intro Page</span></a></h1><p>Place your introduction and profile here.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/intro.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const intro_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "intro.html.vue"]]);
const data = JSON.parse('{"path":"/intro.html","title":"Intro Page","lang":"en-US","frontmatter":{"icon":"circle-info","cover":"/assets/images/cover3.jpg","description":"Intro Page Place your introduction and profile here.","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://theme-hope-blog-demo.vuejs.press/zh/intro.html"}],["meta",{"property":"og:url","content":"https://theme-hope-blog-demo.vuejs.press/intro.html"}],["meta",{"property":"og:site_name","content":"Blog Demo"}],["meta",{"property":"og:title","content":"Intro Page"}],["meta",{"property":"og:description","content":"Intro Page Place your introduction and profile here."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://theme-hope-blog-demo.vuejs.press/assets/images/cover3.jpg"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-31T12:16:52.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://theme-hope-blog-demo.vuejs.press/assets/images/cover3.jpg"}],["meta",{"name":"twitter:image:alt","content":"Intro Page"}],["meta",{"property":"article:author","content":"Mr.Hope"}],["meta",{"property":"article:modified_time","content":"2023-05-31T12:16:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Intro Page\\",\\"image\\":[\\"https://theme-hope-blog-demo.vuejs.press/assets/images/cover3.jpg\\"],\\"dateModified\\":\\"2023-05-31T12:16:52.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[],"git":{"createdTime":1623577866000,"updatedTime":1685535412000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":4}]},"readingTime":{"minutes":0.04,"words":13},"filePathRelative":"intro.md","localizedDate":"June 13, 2021","excerpt":"\\n<p>Place your introduction and profile here.</p>\\n","autoDesc":true}');
export {
  intro_html as comp,
  data
};
