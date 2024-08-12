import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.gpVoHC1a.mjs";
import "vue-router";
import "@waline/client/pageview";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="strawberry" tabindex="-1"><a class="header-anchor" href="#strawberry"><span>Strawberry</span></a></h1><h2 id="heading-2" tabindex="-1"><a class="header-anchor" href="#heading-2"><span>Heading 2</span></a></h2><p>Here is the content.</p><h3 id="heading-3" tabindex="-1"><a class="header-anchor" href="#heading-3"><span>Heading 3</span></a></h3><p>Here is the content.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/posts/strawberry.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const strawberry_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "strawberry.html.vue"]]);
const data = JSON.parse('{"path":"/posts/strawberry.html","title":"Strawberry","lang":"en-US","frontmatter":{"icon":"pen-to-square","date":"2022-01-11T00:00:00.000Z","category":["Fruit","Strawberry"],"tag":["red","small"],"description":"Strawberry Heading 2 Here is the content. Heading 3 Here is the content.","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://theme-hope-blog-demo.vuejs.press/zh/posts/strawberry.html"}],["meta",{"property":"og:url","content":"https://theme-hope-blog-demo.vuejs.press/posts/strawberry.html"}],["meta",{"property":"og:site_name","content":"Blog Demo"}],["meta",{"property":"og:title","content":"Strawberry"}],["meta",{"property":"og:description","content":"Strawberry Heading 2 Here is the content. Heading 3 Here is the content."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-31T12:16:52.000Z"}],["meta",{"property":"article:author","content":"Mr.Hope"}],["meta",{"property":"article:tag","content":"red"}],["meta",{"property":"article:tag","content":"small"}],["meta",{"property":"article:published_time","content":"2022-01-11T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-31T12:16:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Strawberry\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-01-11T00:00:00.000Z\\",\\"dateModified\\":\\"2023-05-31T12:16:52.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"Heading 2","slug":"heading-2","link":"#heading-2","children":[{"level":3,"title":"Heading 3","slug":"heading-3","link":"#heading-3","children":[]}]}],"git":{"createdTime":1644239470000,"updatedTime":1685535412000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":2}]},"readingTime":{"minutes":0.09,"words":27},"filePathRelative":"posts/strawberry.md","localizedDate":"January 11, 2022","excerpt":"\\n<h2>Heading 2</h2>\\n<p>Here is the content.</p>\\n<h3>Heading 3</h3>\\n<p>Here is the content.</p>\\n","autoDesc":true}');
export {
  strawberry_html as comp,
  data
};
