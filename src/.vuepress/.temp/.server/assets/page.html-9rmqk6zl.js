import { defineComponent, ref, h, resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrInterpolate, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../app.gpVoHC1a.mjs";
import "vue-router";
import "@waline/client/pageview";
const _sfc_main = {
  __name: "page.html",
  setup(__props, { expose: __expose }) {
    __expose();
    const MyComponent = defineComponent({
      setup() {
        const input = ref("Hello world!");
        const onInput = (e) => {
          input.value = e.target.value;
        };
        return () => [
          h("p", [
            h("span", "Input: "),
            h("input", {
              value: input.value,
              onInput
            })
          ]),
          h("p", [h("span", "Output: "), input.value])
        ];
      }
    });
    const __returned__ = { MyComponent, defineComponent, h, ref };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Badge = resolveComponent("Badge");
  const _component_VPCard = resolveComponent("VPCard");
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Content before <code>more</code> comment is regarded as page excerpt.</p><!-- more --><h2 id="page-title" tabindex="-1"><a class="header-anchor" href="#page-title"><span>Page Title</span></a></h2><p>The first H1 title in Markdown will be regarded as page title.</p><p>You can also set title in Markdown&#39;s Frontmatter:</p><div class="language-md line-numbers-mode" data-highlighter="shiki" data-ext="md" data-title="md" style="${ssrRenderStyle({ "--shiki-light": "#383A42", "--shiki-dark": "#abb2bf", "--shiki-light-bg": "#FAFAFA", "--shiki-dark-bg": "#282c34" })}"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#383A42", "--shiki-dark": "#ABB2BF" })}">---</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#E45649", "--shiki-dark": "#E06C75" })}">title</span><span style="${ssrRenderStyle({ "--shiki-light": "#383A42", "--shiki-dark": "#ABB2BF" })}">: </span><span style="${ssrRenderStyle({ "--shiki-light": "#50A14F", "--shiki-dark": "#98C379" })}">Page Title</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#383A42", "--shiki-dark": "#ABB2BF" })}">---</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="${ssrRenderStyle({ "counter-reset": "line-number 0" })}"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="page-information" tabindex="-1"><a class="header-anchor" href="#page-information"><span>Page Information</span></a></h2><p>You can set page information in Markdown&#39;s Frontmatter.</p><ul><li>The author is Ms.Hope.</li><li>The writing date is January 1, 2020</li><li>Category is &quot;Guide&quot;</li><li>Tags are &quot;Page Config&quot; and &quot;Guide&quot;</li></ul><h2 id="page-content" tabindex="-1"><a class="header-anchor" href="#page-content"><span>Page Content</span></a></h2><p>You are free to write your Markdown here.</p><div class="hint-container tip"><p class="hint-container-title">Assets</p><ul><li>You can place images besides your Markdown files nd use <strong>relative links</strong>.</li><li>For images in <code>.vuepress/public</code> directory, please use absolute links (i.e.: starting with <code>/</code>).</li></ul></div><h2 id="components" tabindex="-1"><a class="header-anchor" href="#components"><span>Components</span></a></h2><p>Each markdown page is converted into a Vue component, which means you can use Vue syntax in Markdown:</p><p>${ssrInterpolate(1 + 1)}</p><!-- markdownlint-disable MD033 --><ul><!--[-->`);
  ssrRenderList(3, (i) => {
    _push(`<li>${ssrInterpolate(i)}</li>`);
  });
  _push(`<!--]--></ul><!-- markdownlint-enable MD033 --><p>You can also create and import your own components.</p>`);
  _push(ssrRenderComponent($setup["MyComponent"], null, null, _parent));
  _push(`<hr><p>The theme contains some useful components. Here are some examples:</p><ul><li><p>A dark blue badge text badge at the end of line. `);
  _push(ssrRenderComponent(_component_Badge, {
    text: "Badge text",
    color: "#242378"
  }, null, _parent));
  _push(`</p></li><li><p>A card:</p>`);
  _push(ssrRenderComponent(_component_VPCard, { "title": "Mr.Hope", "desc": "Where there is light, there is hope", "logo": "https://mister-hope.com/logo.svg", "link": "https://mister-hope.com", "background": "rgba(253, 230, 138, 0.15)" }, null, _parent));
  _push(`</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/demo/page.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const page_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "page.html.vue"]]);
const data = JSON.parse('{"path":"/demo/page.html","title":"Page Config","lang":"en-US","frontmatter":{"title":"Page Config","icon":"file","order":3,"author":"Ms.Hope","date":"2020-01-01T00:00:00.000Z","category":["Guide"],"tag":["Page config","Guide"],"sticky":true,"star":true,"footer":"Footer content for test","copyright":"No Copyright","description":"Content before more comment is regarded as page excerpt.","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://theme-hope-blog-demo.vuejs.press/zh/demo/page.html"}],["meta",{"property":"og:url","content":"https://theme-hope-blog-demo.vuejs.press/demo/page.html"}],["meta",{"property":"og:site_name","content":"Blog Demo"}],["meta",{"property":"og:title","content":"Page Config"}],["meta",{"property":"og:description","content":"Content before more comment is regarded as page excerpt."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-12T07:30:59.000Z"}],["meta",{"property":"article:author","content":"Ms.Hope"}],["meta",{"property":"article:tag","content":"Page config"}],["meta",{"property":"article:tag","content":"Guide"}],["meta",{"property":"article:published_time","content":"2020-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-12-12T07:30:59.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Page Config\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2023-12-12T07:30:59.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Ms.Hope\\"}]}"]]},"headers":[{"level":2,"title":"Page Title","slug":"page-title","link":"#page-title","children":[]},{"level":2,"title":"Page Information","slug":"page-information","link":"#page-information","children":[]},{"level":2,"title":"Page Content","slug":"page-content","link":"#page-content","children":[]},{"level":2,"title":"Components","slug":"components","link":"#components","children":[]}],"git":{"createdTime":1622991562000,"updatedTime":1702366259000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":8},{"name":"Nan Huang","email":"teddyhuangnan@gmail.com","commits":1}]},"readingTime":{"minutes":1.14,"words":341},"filePathRelative":"demo/page.md","localizedDate":"January 1, 2020","excerpt":"<p>Content before <code>more</code> comment is regarded as page excerpt.</p>\\n","autoDesc":true}');
export {
  page_html as comp,
  data
};
