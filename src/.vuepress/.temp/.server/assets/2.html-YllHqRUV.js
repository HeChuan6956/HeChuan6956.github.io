import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.gpVoHC1a.mjs";
import "vue-router";
import "@waline/client/pageview";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="苹果-2" tabindex="-1"><a class="header-anchor" href="#苹果-2"><span>苹果 2</span></a></h1><p>一个被星标了的苹果文章。</p><!-- more --><h2 id="标题-2" tabindex="-1"><a class="header-anchor" href="#标题-2"><span>标题 2</span></a></h2><p>这里是内容。</p><h3 id="标题-3" tabindex="-1"><a class="header-anchor" href="#标题-3"><span>标题 3</span></a></h3><p>这里是内容。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/zh/posts/apple/2.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _2_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "2.html.vue"]]);
const data = JSON.parse('{"path":"/zh/posts/apple/2.html","title":"苹果 2","lang":"zh-CN","frontmatter":{"icon":"pen-to-square","date":"2022-01-02T00:00:00.000Z","category":["苹果"],"tag":["红","大","圆"],"star":true,"description":"一个被星标了的苹果文章。","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://theme-hope-blog-demo.vuejs.press/posts/apple/2.html"}],["meta",{"property":"og:url","content":"https://theme-hope-blog-demo.vuejs.press/zh/posts/apple/2.html"}],["meta",{"property":"og:site_name","content":"博客演示"}],["meta",{"property":"og:title","content":"苹果 2"}],["meta",{"property":"og:description","content":"一个被星标了的苹果文章。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-05-31T12:16:52.000Z"}],["meta",{"property":"article:author","content":"Mr.Hope"}],["meta",{"property":"article:tag","content":"红"}],["meta",{"property":"article:tag","content":"大"}],["meta",{"property":"article:tag","content":"圆"}],["meta",{"property":"article:published_time","content":"2022-01-02T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-31T12:16:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"苹果 2\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-01-02T00:00:00.000Z\\",\\"dateModified\\":\\"2023-05-31T12:16:52.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"标题 2","slug":"标题-2","link":"#标题-2","children":[{"level":3,"title":"标题 3","slug":"标题-3","link":"#标题-3","children":[]}]}],"git":{"createdTime":1644239470000,"updatedTime":1685535412000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":2}]},"readingTime":{"minutes":0.16,"words":48},"filePathRelative":"zh/posts/apple/2.md","localizedDate":"2022年1月2日","excerpt":"\\n<p>一个被星标了的苹果文章。</p>\\n","autoDesc":true}');
export {
  _2_html as comp,
  data
};
