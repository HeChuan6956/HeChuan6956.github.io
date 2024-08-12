import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.gpVoHC1a.mjs";
import "vue-router";
import "@waline/client/pageview";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="香蕉-3" tabindex="-1"><a class="header-anchor" href="#香蕉-3"><span>香蕉 3</span></a></h1><h2 id="标题-2" tabindex="-1"><a class="header-anchor" href="#标题-2"><span>标题 2</span></a></h2><p>这里是内容。</p><h3 id="标题-3" tabindex="-1"><a class="header-anchor" href="#标题-3"><span>标题 3</span></a></h3><p>这里是内容。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/zh/posts/banana/3.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _3_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "3.html.vue"]]);
const data = JSON.parse('{"path":"/zh/posts/banana/3.html","title":"香蕉 3","lang":"zh-CN","frontmatter":{"icon":"pen-to-square","date":"2022-01-07T00:00:00.000Z","category":["香蕉"],"tag":["黄","弯曲的","长"],"description":"香蕉 3 标题 2 这里是内容。 标题 3 这里是内容。","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://theme-hope-blog-demo.vuejs.press/posts/banana/3.html"}],["meta",{"property":"og:url","content":"https://theme-hope-blog-demo.vuejs.press/zh/posts/banana/3.html"}],["meta",{"property":"og:site_name","content":"博客演示"}],["meta",{"property":"og:title","content":"香蕉 3"}],["meta",{"property":"og:description","content":"香蕉 3 标题 2 这里是内容。 标题 3 这里是内容。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-05-31T12:16:52.000Z"}],["meta",{"property":"article:author","content":"Mr.Hope"}],["meta",{"property":"article:tag","content":"黄"}],["meta",{"property":"article:tag","content":"弯曲的"}],["meta",{"property":"article:tag","content":"长"}],["meta",{"property":"article:published_time","content":"2022-01-07T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-31T12:16:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"香蕉 3\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-01-07T00:00:00.000Z\\",\\"dateModified\\":\\"2023-05-31T12:16:52.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"标题 2","slug":"标题-2","link":"#标题-2","children":[{"level":3,"title":"标题 3","slug":"标题-3","link":"#标题-3","children":[]}]}],"git":{"createdTime":1644239470000,"updatedTime":1685535412000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":2}]},"readingTime":{"minutes":0.12,"words":36},"filePathRelative":"zh/posts/banana/3.md","localizedDate":"2022年1月7日","excerpt":"\\n<h2>标题 2</h2>\\n<p>这里是内容。</p>\\n<h3>标题 3</h3>\\n<p>这里是内容。</p>\\n","autoDesc":true}');
export {
  _3_html as comp,
  data
};
