import { resolveComponent, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "../app.gpVoHC1a.mjs";
import "vue-router";
import "@waline/client/pageview";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Tabs = resolveComponent("Tabs");
  const _component_RevealJs = resolveComponent("RevealJs");
  const _component_VPCard = resolveComponent("VPCard");
  const _component_Badge = resolveComponent("Badge");
  const _component_ChartJS = resolveComponent("ChartJS");
  const _component_ECharts = resolveComponent("ECharts");
  const _component_FlowChart = resolveComponent("FlowChart");
  const _component_MarkMap = resolveComponent("MarkMap");
  const _component_Mermaid = resolveComponent("Mermaid");
  const _component_CodeTabs = resolveComponent("CodeTabs");
  const _component_CodeDemo = resolveComponent("CodeDemo");
  const _component_Playground = resolveComponent("Playground");
  const _component_KotlinPlayground = resolveComponent("KotlinPlayground");
  const _component_SandPack = resolveComponent("SandPack");
  const _component_VuePlayground = resolveComponent("VuePlayground");
  _push(`<div${ssrRenderAttrs(_attrs)}><p>VuePress basically generate pages from Markdown files. So you can use it to generate documentation or blog sites easily.</p><p>You should create and write Markdown files, so that VuePress can convert them to different pages according to file structure.</p><!-- more --><h2 id="markdown-introduction" tabindex="-1"><a class="header-anchor" href="#markdown-introduction"><span>Markdown Introduction</span></a></h2><p>If you are a new learner and don&#39;t know how to write Markdown, please read <a href="https://theme-hope.vuejs.press/cookbook/markdown/" target="_blank" rel="noopener noreferrer">Markdown Intro</a> and <a href="https://theme-hope.vuejs.press/cookbook/markdown/demo.html" target="_blank" rel="noopener noreferrer">Markdown Demo</a>.</p><h2 id="markdown-config" tabindex="-1"><a class="header-anchor" href="#markdown-config"><span>Markdown Config</span></a></h2><p>VuePress introduce configuration for each markdown page using Frontmatter.</p><div class="hint-container important"><p class="hint-container-title">Frontmatter</p><p>Frontmatter is an important concept in VuePress. If you don&#39;t know it, you need to read <a href="https://theme-hope.vuejs.press/cookbook/vuepress/page.html#front-matter" target="_blank" rel="noopener noreferrer">Frontmatter Introduction</a>.</p></div><h2 id="markdown-extension" tabindex="-1"><a class="header-anchor" href="#markdown-extension"><span>Markdown Extension</span></a></h2><p>The Markdown content in VuePress will be parsed by <a href="https://github.com/markdown-it/markdown-it" target="_blank" rel="noopener noreferrer">markdown-it</a>, which supports <a href="https://github.com/markdown-it/markdown-it#syntax-extensions" target="_blank" rel="noopener noreferrer">syntax extensions</a> via markdown-it plugins.</p><h3 id="vuepress-enhancement" tabindex="-1"><a class="header-anchor" href="#vuepress-enhancement"><span>VuePress Enhancement</span></a></h3><p>To enrich document writing, VuePress has extended Markdown syntax.</p><p>For these extensions, please read <a href="https://theme-hope.vuejs.press/basic/vuepress/markdown.html" target="_blank" rel="noopener noreferrer">Markdown extensions in VuePress</a>.</p><h3 id="theme-enhancement" tabindex="-1"><a class="header-anchor" href="#theme-enhancement"><span>Theme Enhancement</span></a></h3><p>By using <a href="https://md-enhance.vuejs.press/" target="_blank" rel="noopener noreferrer"><code>vuepress-plugin-md-enhance</code></a>, the theme extends more Markdown syntax and provides richer writing functions.</p><h4 id="tabs" tabindex="-1"><a class="header-anchor" href="#tabs"><span>Tabs</span></a></h4>`);
  _push(ssrRenderComponent(_component_Tabs, {
    id: "48",
    data: [{ "id": "apple" }, { "id": "banana" }, { "id": "orange" }],
    "tab-id": "fruit"
  }, {
    title0: withCtx(({ value, isActive }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`apple`);
      } else {
        return [
          createTextVNode("apple")
        ];
      }
    }),
    title1: withCtx(({ value, isActive }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`banana`);
      } else {
        return [
          createTextVNode("banana")
        ];
      }
    }),
    title2: withCtx(({ value, isActive }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`orange`);
      } else {
        return [
          createTextVNode("orange")
        ];
      }
    }),
    tab0: withCtx(({ value, isActive }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p${_scopeId}>Apple</p>`);
      } else {
        return [
          createVNode("p", null, "Apple")
        ];
      }
    }),
    tab1: withCtx(({ value, isActive }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p${_scopeId}>Banana</p>`);
      } else {
        return [
          createVNode("p", null, "Banana")
        ];
      }
    }),
    tab2: withCtx(({ value, isActive }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p${_scopeId}>Orange</p>`);
      } else {
        return [
          createVNode("p", null, "Orange")
        ];
      }
    }),
    _: 1
    /* STABLE */
  }, _parent));
  _push(`<ul><li><a href="https://theme-hope.vuejs.press/guide/markdown/content/tabs.html" target="_blank" rel="noopener noreferrer">View Detail</a></li></ul><h4 id="footnote" tabindex="-1"><a class="header-anchor" href="#footnote"><span>Footnote</span></a></h4><p>This text has footnote<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup>.</p><ul><li><a href="https://theme-hope.vuejs.press/guide/markdown/content/footnote.html" target="_blank" rel="noopener noreferrer">View Detail</a></li></ul><h4 id="include-files" tabindex="-1"><a class="header-anchor" href="#include-files"><span>Include files</span></a></h4><ul><li><a href="https://theme-hope.vuejs.press/guide/markdown/content/include.html" target="_blank" rel="noopener noreferrer">View Detail</a></li></ul><h4 id="reveal-js" tabindex="-1"><a class="header-anchor" href="#reveal-js"><span>Reveal.js</span></a></h4>`);
  _push(ssrRenderComponent(_component_RevealJs, {
    id: "revealjs-100",
    code: "eJxVjb0KwjAUhff7FBfaoQXTH92UDo66OlppQxtMtGlCc0VBfHcTKJRuh4/vnANRhJdB9QJLgCNaPvH7xK3EtyKJzmiBJD6EfOyR43VQ4/OWSCLr9nmulSMxMWmsyDqjUwDGGCyTWw/wREL78TkEtHJ2mT9u2/bhoDOj809YYXkIKKgr05fjGM5JTVIQb4rNHMrUd2r30s1XVcUvSH9FOzuV",
    theme: "auto"
  }, null, _parent));
  _push(`<ul><li><a href="https://theme-hope.vuejs.press/guide/markdown/content/revealjs.html" target="_blank" rel="noopener noreferrer">View Detail</a></li></ul><!-- markdownlint-disable MD001 --><h4 id="tex" tabindex="-1"><a class="header-anchor" href="#tex"><span>TeX</span></a></h4><p class="katex-block"><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mfrac><msup><mi mathvariant="normal">∂</mi><mi>r</mi></msup><mrow><mi mathvariant="normal">∂</mi><msup><mi>ω</mi><mi>r</mi></msup></mrow></mfrac><mrow><mo fence="true">(</mo><mfrac><msup><mi>y</mi><mi>ω</mi></msup><mi>ω</mi></mfrac><mo fence="true">)</mo></mrow><mo>=</mo><mrow><mo fence="true">(</mo><mfrac><msup><mi>y</mi><mi>ω</mi></msup><mi>ω</mi></mfrac><mo fence="true">)</mo></mrow><mrow><mo fence="true">{</mo><mo stretchy="false">(</mo><mi>log</mi><mo>⁡</mo><mi>y</mi><msup><mo stretchy="false">)</mo><mi>r</mi></msup><mo>+</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>r</mi></munderover><mfrac><mrow><mo stretchy="false">(</mo><mo>−</mo><mn>1</mn><msup><mo stretchy="false">)</mo><mi>i</mi></msup><mi>r</mi><mo>⋯</mo><mo stretchy="false">(</mo><mi>r</mi><mo>−</mo><mi>i</mi><mo>+</mo><mn>1</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mi>log</mi><mo>⁡</mo><mi>y</mi><msup><mo stretchy="false">)</mo><mrow><mi>r</mi><mo>−</mo><mi>i</mi></mrow></msup></mrow><msup><mi>ω</mi><mi>i</mi></msup></mfrac><mo fence="true">}</mo></mrow></mrow><annotation encoding="application/x-tex"> \\frac {\\partial^r} {\\partial \\omega^r} \\left(\\frac {y^{\\omega}} {\\omega}\\right) = \\left(\\frac {y^{\\omega}} {\\omega}\\right) \\left\\{(\\log y)^r + \\sum_{i=1}^r \\frac {(-1)^i r \\cdots (r-i+1) (\\log y)^{r-i}} {\\omega^i} \\right\\} </annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="${ssrRenderStyle({ "height": "2.4em", "vertical-align": "-0.95em" })}"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="${ssrRenderStyle({ "height": "1.3714em" })}"><span style="${ssrRenderStyle({ "top": "-2.314em" })}"><span class="pstrut" style="${ssrRenderStyle({ "height": "3em" })}"></span><span class="mord"><span class="mord" style="${ssrRenderStyle({ "margin-right": "0.05556em" })}">∂</span><span class="mord"><span class="mord mathnormal" style="${ssrRenderStyle({ "margin-right": "0.03588em" })}">ω</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="${ssrRenderStyle({ "height": "0.5904em" })}"><span style="${ssrRenderStyle({ "top": "-2.989em", "margin-right": "0.05em" })}"><span class="pstrut" style="${ssrRenderStyle({ "height": "2.7em" })}"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="${ssrRenderStyle({ "margin-right": "0.02778em" })}">r</span></span></span></span></span></span></span></span></span></span><span style="${ssrRenderStyle({ "top": "-3.23em" })}"><span class="pstrut" style="${ssrRenderStyle({ "height": "3em" })}"></span><span class="frac-line" style="${ssrRenderStyle({ "border-bottom-width": "0.04em" })}"></span></span><span style="${ssrRenderStyle({ "top": "-3.677em" })}"><span class="pstrut" style="${ssrRenderStyle({ "height": "3em" })}"></span><span class="mord"><span class="mord"><span class="mord" style="${ssrRenderStyle({ "margin-right": "0.05556em" })}">∂</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="${ssrRenderStyle({ "height": "0.6644em" })}"><span style="${ssrRenderStyle({ "top": "-3.063em", "margin-right": "0.05em" })}"><span class="pstrut" style="${ssrRenderStyle({ "height": "2.7em" })}"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="${ssrRenderStyle({ "margin-right": "0.02778em" })}">r</span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="${ssrRenderStyle({ "height": "0.686em" })}"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mspace" style="${ssrRenderStyle({ "margin-right": "0.1667em" })}"></span><span class="minner"><span class="mopen delimcenter" style="${ssrRenderStyle({ "top": "0em" })}"><span class="delimsizing size3">(</span></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="${ssrRenderStyle({ "height": "1.3414em" })}"><span style="${ssrRenderStyle({ "top": "-2.314em" })}"><span class="pstrut" style="${ssrRenderStyle({ "height": "3em" })}"></span><span class="mord"><span class="mord mathnormal" style="${ssrRenderStyle({ "margin-right": "0.03588em" })}">ω</span></span></span><span style="${ssrRenderStyle({ "top": "-3.23em" })}"><span class="pstrut" style="${ssrRenderStyle({ "height": "3em" })}"></span><span class="frac-line" style="${ssrRenderStyle({ "border-bottom-width": "0.04em" })}"></span></span><span style="${ssrRenderStyle({ "top": "-3.677em" })}"><span class="pstrut" style="${ssrRenderStyle({ "height": "3em" })}"></span><span class="mord"><span class="mord"><span class="mord mathnormal" style="${ssrRenderStyle({ "margin-right": "0.03588em" })}">y</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="${ssrRenderStyle({ "height": "0.6644em" })}"><span style="${ssrRenderStyle({ "top": "-3.063em", "margin-right": "0.05em" })}"><span class="pstrut" style="${ssrRenderStyle({ "height": "2.7em" })}"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="${ssrRenderStyle({ "margin-right": "0.03588em" })}">ω</span></span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="${ssrRenderStyle({ "height": "0.686em" })}"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mclose delimcenter" style="${ssrRenderStyle({ "top": "0em" })}"><span class="delimsizing size3">)</span></span></span><span class="mspace" style="${ssrRenderStyle({ "margin-right": "0.2778em" })}"></span><span class="mrel">=</span><span class="mspace" style="${ssrRenderStyle({ "margin-right": "0.2778em" })}"></span></span><span class="base"><span class="strut" style="${ssrRenderStyle({ "height": "3.0277em", "vertical-align": "-1.2777em" })}"></span><span class="minner"><span class="mopen delimcenter" style="${ssrRenderStyle({ "top": "0em" })}"><span class="delimsizing size3">(</span></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="${ssrRenderStyle({ "height": "1.3414em" })}"><span style="${ssrRenderStyle({ "top": "-2.314em" })}"><span class="pstrut" style="${ssrRenderStyle({ "height": "3em" })}"></span><span class="mord"><span class="mord mathnormal" style="${ssrRenderStyle({ "margin-right": "0.03588em" })}">ω</span></span></span><span style="${ssrRenderStyle({ "top": "-3.23em" })}"><span class="pstrut" style="${ssrRenderStyle({ "height": "3em" })}"></span><span class="frac-line" style="${ssrRenderStyle({ "border-bottom-width": "0.04em" })}"></span></span><span style="${ssrRenderStyle({ "top": "-3.677em" })}"><span class="pstrut" style="${ssrRenderStyle({ "height": "3em" })}"></span><span class="mord"><span class="mord"><span class="mord mathnormal" style="${ssrRenderStyle({ "margin-right": "0.03588em" })}">y</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="${ssrRenderStyle({ "height": "0.6644em" })}"><span style="${ssrRenderStyle({ "top": "-3.063em", "margin-right": "0.05em" })}"><span class="pstrut" style="${ssrRenderStyle({ "height": "2.7em" })}"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="${ssrRenderStyle({ "margin-right": "0.03588em" })}">ω</span></span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="${ssrRenderStyle({ "height": "0.686em" })}"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mclose delimcenter" style="${ssrRenderStyle({ "top": "0em" })}"><span class="delimsizing size3">)</span></span></span><span class="mspace" style="${ssrRenderStyle({ "margin-right": "0.1667em" })}"></span><span class="minner"><span class="mopen delimcenter" style="${ssrRenderStyle({ "top": "0em" })}"><span class="delimsizing size4">{</span></span><span class="mopen">(</span><span class="mop">lo<span style="${ssrRenderStyle({ "margin-right": "0.01389em" })}">g</span></span><span class="mspace" style="${ssrRenderStyle({ "margin-right": "0.1667em" })}"></span><span class="mord mathnormal" style="${ssrRenderStyle({ "margin-right": "0.03588em" })}">y</span><span class="mclose"><span class="mclose">)</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="${ssrRenderStyle({ "height": "0.7144em" })}"><span style="${ssrRenderStyle({ "top": "-3.113em", "margin-right": "0.05em" })}"><span class="pstrut" style="${ssrRenderStyle({ "height": "2.7em" })}"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="${ssrRenderStyle({ "margin-right": "0.02778em" })}">r</span></span></span></span></span></span></span></span><span class="mspace" style="${ssrRenderStyle({ "margin-right": "0.2222em" })}"></span><span class="mbin">+</span><span class="mspace" style="${ssrRenderStyle({ "margin-right": "0.2222em" })}"></span><span class="mop op-limits"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="${ssrRenderStyle({ "height": "1.6514em" })}"><span style="${ssrRenderStyle({ "top": "-1.8723em", "margin-left": "0em" })}"><span class="pstrut" style="${ssrRenderStyle({ "height": "3.05em" })}"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">i</span><span class="mrel mtight">=</span><span class="mord mtight">1</span></span></span></span><span style="${ssrRenderStyle({ "top": "-3.05em" })}"><span class="pstrut" style="${ssrRenderStyle({ "height": "3.05em" })}"></span><span><span class="mop op-symbol large-op">∑</span></span></span><span style="${ssrRenderStyle({ "top": "-4.3em", "margin-left": "0em" })}"><span class="pstrut" style="${ssrRenderStyle({ "height": "3.05em" })}"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="${ssrRenderStyle({ "margin-right": "0.02778em" })}">r</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="${ssrRenderStyle({ "height": "1.2777em" })}"><span></span></span></span></span></span><span class="mspace" style="${ssrRenderStyle({ "margin-right": "0.1667em" })}"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="${ssrRenderStyle({ "height": "1.5017em" })}"><span style="${ssrRenderStyle({ "top": "-2.314em" })}"><span class="pstrut" style="${ssrRenderStyle({ "height": "3em" })}"></span><span class="mord"><span class="mord"><span class="mord mathnormal" style="${ssrRenderStyle({ "margin-right": "0.03588em" })}">ω</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="${ssrRenderStyle({ "height": "0.7507em" })}"><span style="${ssrRenderStyle({ "top": "-2.989em", "margin-right": "0.05em" })}"><span class="pstrut" style="${ssrRenderStyle({ "height": "2.7em" })}"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">i</span></span></span></span></span></span></span></span></span></span><span style="${ssrRenderStyle({ "top": "-3.23em" })}"><span class="pstrut" style="${ssrRenderStyle({ "height": "3em" })}"></span><span class="frac-line" style="${ssrRenderStyle({ "border-bottom-width": "0.04em" })}"></span></span><span style="${ssrRenderStyle({ "top": "-3.677em" })}"><span class="pstrut" style="${ssrRenderStyle({ "height": "3em" })}"></span><span class="mord"><span class="mopen">(</span><span class="mord">−</span><span class="mord">1</span><span class="mclose"><span class="mclose">)</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="${ssrRenderStyle({ "height": "0.8247em" })}"><span style="${ssrRenderStyle({ "top": "-3.063em", "margin-right": "0.05em" })}"><span class="pstrut" style="${ssrRenderStyle({ "height": "2.7em" })}"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">i</span></span></span></span></span></span></span></span><span class="mord mathnormal" style="${ssrRenderStyle({ "margin-right": "0.02778em" })}">r</span><span class="mspace" style="${ssrRenderStyle({ "margin-right": "0.1667em" })}"></span><span class="minner">⋯</span><span class="mspace" style="${ssrRenderStyle({ "margin-right": "0.1667em" })}"></span><span class="mopen">(</span><span class="mord mathnormal" style="${ssrRenderStyle({ "margin-right": "0.02778em" })}">r</span><span class="mspace" style="${ssrRenderStyle({ "margin-right": "0.2222em" })}"></span><span class="mbin">−</span><span class="mspace" style="${ssrRenderStyle({ "margin-right": "0.2222em" })}"></span><span class="mord mathnormal">i</span><span class="mspace" style="${ssrRenderStyle({ "margin-right": "0.2222em" })}"></span><span class="mbin">+</span><span class="mspace" style="${ssrRenderStyle({ "margin-right": "0.2222em" })}"></span><span class="mord">1</span><span class="mclose">)</span><span class="mopen">(</span><span class="mop">lo<span style="${ssrRenderStyle({ "margin-right": "0.01389em" })}">g</span></span><span class="mspace" style="${ssrRenderStyle({ "margin-right": "0.1667em" })}"></span><span class="mord mathnormal" style="${ssrRenderStyle({ "margin-right": "0.03588em" })}">y</span><span class="mclose"><span class="mclose">)</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="${ssrRenderStyle({ "height": "0.8247em" })}"><span style="${ssrRenderStyle({ "top": "-3.063em", "margin-right": "0.05em" })}"><span class="pstrut" style="${ssrRenderStyle({ "height": "2.7em" })}"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="${ssrRenderStyle({ "margin-right": "0.02778em" })}">r</span><span class="mbin mtight">−</span><span class="mord mathnormal mtight">i</span></span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="${ssrRenderStyle({ "height": "0.686em" })}"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mclose delimcenter" style="${ssrRenderStyle({ "top": "0em" })}"><span class="delimsizing size4">}</span></span></span></span></span></span></span></p><ul><li><a href="https://theme-hope.vuejs.press/guide/markdown/grammar/tex.html" target="_blank" rel="noopener noreferrer">View Detail</a></li></ul><h4 id="tasklist" tabindex="-1"><a class="header-anchor" href="#tasklist"><span>Tasklist</span></a></h4><ul class="task-list-container"><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> Plan A</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> Plan B</label></li></ul><p><a href="https://theme-hope.vuejs.press/guide/markdown/grammar/tasklist.html" target="_blank" rel="noopener noreferrer">View Detail</a></p><h4 id="image-enhancement" tabindex="-1"><a class="header-anchor" href="#image-enhancement"><span>Image Enhancement</span></a></h4><p>Support setting color scheme and size.</p><ul><li><a href="https://theme-hope.vuejs.press/guide/markdown/grammar/image.html" target="_blank" rel="noopener noreferrer">View Detail</a></li></ul><h4 id="superscript-and-subscript" tabindex="-1"><a class="header-anchor" href="#superscript-and-subscript"><span>Superscript and Subscript</span></a></h4><p>19<sup>th</sup> H<sub>2</sub>O</p><ul><li><a href="https://theme-hope.vuejs.press/guide/markdown/grammar/sup-sub.html" target="_blank" rel="noopener noreferrer">View Detail</a></li></ul><h4 id="component" tabindex="-1"><a class="header-anchor" href="#component"><span>Component</span></a></h4>`);
  _push(ssrRenderComponent(_component_VPCard, { "title": "Mr.Hope", "desc": "Where there is light, there is hope", "logo": "https://mister-hope.com/logo.svg", "link": "https://mister-hope.com", "background": "rgba(253, 230, 138, 0.15)" }, null, _parent));
  _push(`<ul><li><a href="https://theme-hope.vuejs.press/guide/component/grammar.html" target="_blank" rel="noopener noreferrer">View Detail</a></li></ul><h4 id="hint-box-and-gfm-alerts" tabindex="-1"><a class="header-anchor" href="#hint-box-and-gfm-alerts"><span>Hint box and GFM alerts</span></a></h4><div><p>Safely use {{ variable }} in Markdown.</p></div><div class="hint-container info"><p class="hint-container-title">Custom Title</p><p>A custom information container with <code>code</code>, <a href="#markdown-extension">link</a>.</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="${ssrRenderStyle({ "--shiki-light": "#383A42", "--shiki-dark": "#abb2bf", "--shiki-light-bg": "#FAFAFA", "--shiki-dark-bg": "#282c34" })}"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#A626A4", "--shiki-dark": "#C678DD" })}">const</span><span style="${ssrRenderStyle({ "--shiki-light": "#986801", "--shiki-dark": "#E5C07B" })}"> a</span><span style="${ssrRenderStyle({ "--shiki-light": "#0184BC", "--shiki-dark": "#56B6C2" })}"> =</span><span style="${ssrRenderStyle({ "--shiki-light": "#986801", "--shiki-dark": "#D19A66" })}"> 1</span><span style="${ssrRenderStyle({ "--shiki-light": "#383A42", "--shiki-dark": "#ABB2BF" })}">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="${ssrRenderStyle({ "counter-reset": "line-number 0" })}"><div class="line-number"></div></div></div></div><div class="hint-container tip"><p class="hint-container-title">Custom Title</p><p>A custom tip container</p></div><div class="hint-container warning"><p class="hint-container-title">Custom Title</p><p>A custom warning container</p></div><div class="hint-container caution"><p class="hint-container-title">Custom Title</p><p>A custom caution container</p></div><details class="hint-container details"><summary>Custom Title</summary><p>A custom details container</p></details><ul><li><a href="https://theme-hope.vuejs.press/guide/markdown/stylize/alert.html" target="_blank" rel="noopener noreferrer">GitHub Alert</a></li><li><a href="https://theme-hope.vuejs.press/guide/markdown/stylize/hint.html" target="_blank" rel="noopener noreferrer">Hint boxes</a></li></ul><h4 id="align" tabindex="-1"><a class="header-anchor" href="#align"><span>Align</span></a></h4><div style="${ssrRenderStyle({ "text-align": "center" })}"><p>I am center</p></div><div style="${ssrRenderStyle({ "text-align": "right" })}"><p>I am right align</p></div><ul><li><a href="https://theme-hope.vuejs.press/guide/markdown/stylize/align.html" target="_blank" rel="noopener noreferrer">View Detail</a></li></ul><h4 id="attrs" tabindex="-1"><a class="header-anchor" href="#attrs"><span>Attrs</span></a></h4><p>A <strong id="word">word</strong> having id.</p><ul><li><a href="https://theme-hope.vuejs.press/guide/markdown/stylize/attrs.html" target="_blank" rel="noopener noreferrer">View Detail</a></li></ul><h4 id="mark" tabindex="-1"><a class="header-anchor" href="#mark"><span>Mark</span></a></h4><p>You can mark <mark>important words</mark> .</p><ul><li><a href="https://theme-hope.vuejs.press/guide/markdown/stylize/mark.html" target="_blank" rel="noopener noreferrer">View Detail</a></li></ul><h4 id="spoiler" tabindex="-1"><a class="header-anchor" href="#spoiler"><span>Spoiler</span></a></h4><p>VuePress Theme Hope is <span class="spoiler" tabindex="-1">powerful</span>.</p><ul><li><a href="https://theme-hope.vuejs.press/guide/markdown/stylize/spoiler.html" target="_blank" rel="noopener noreferrer">View Detail</a></li></ul><h4 id="stylize" tabindex="-1"><a class="header-anchor" href="#stylize"><span>Stylize</span></a></h4><p>Donate Mr.Hope a cup of coffee. `);
  _push(ssrRenderComponent(_component_Badge, { type: "tip" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Recommended`);
      } else {
        return [
          createTextVNode("Recommended")
        ];
      }
    }),
    _: 1
    /* STABLE */
  }, _parent));
  _push(`</p><ul><li><a href="https://theme-hope.vuejs.press/guide/markdown/stylize/stylize.html" target="_blank" rel="noopener noreferrer">View Detail</a></li></ul><h4 id="chart-js" tabindex="-1"><a class="header-anchor" href="#chart-js"><span>Chart.js</span></a></h4>`);
  _push(ssrRenderComponent(_component_ChartJS, {
    id: "chart-296",
    config: "eJxtUEsKgzAQ3XuKIasWrKjFhd22N+iyuIgaRJoa0RQqxbt3Jh+14CYk7zeT9w0AmJ56wS7AxoprLQYWElhzzREkgXuNQo+IPAwCjjGs5KWQlHC3CXCzcpPkNC7Pu00CsA9CpyQOgU14i2FeHQvv2WSfXtzZvjvKPB+hYhEUm91KXj2bQb27+qqkGugnQ1Me0gyteR5Cck6PzMltQoGnmcZUr1vVUTGuKmxRivWNCK2xacvXLdtOcNu2Y3o1tpRGbKm0Vq//qXTOwRz8AH72Yfs=",
    title: "A%20Scatter%20Chart",
    type: "json"
  }, null, _parent));
  _push(`<ul><li><a href="https://theme-hope.vuejs.press/guide/markdown/chart/chartjs.html" target="_blank" rel="noopener noreferrer">View Detail</a></li></ul><h4 id="echarts" tabindex="-1"><a class="header-anchor" href="#echarts"><span>ECharts</span></a></h4>`);
  _push(ssrRenderComponent(_component_ECharts, {
    id: "echarts-309",
    config: "eJyr5lJQUKpwrMgsVrJSAHGA3JLKglQgTyk5sSQ1Pb+oUkkHIp6SWJIIFI9W8s3PU9JRUAopTQVR4akpYF5GKYhyK8oEUcGJJWCqNE8pFqi7FmSEUiV2e8oSc4AmwVUVpxZlpoKURYOVQRQjWW9oaqCjYGQMIoxMgIShhY6CobEpkDAxB3LNDGIh7kWyISczD2wB0AogGctVywUA9j06jQ==",
    title: "A%20line%20chart"
  }, null, _parent));
  _push(`<ul><li><a href="https://theme-hope.vuejs.press/guide/markdown/chart/echarts.html" target="_blank" rel="noopener noreferrer">View Detail</a></li></ul><h4 id="flowchart" tabindex="-1"><a class="header-anchor" href="#flowchart"><span>Flowchart</span></a></h4>`);
  _push(ssrRenderComponent(_component_FlowChart, {
    id: "flowchart-322",
    code: "eJxLzs9LsbUDkZklmfl5VgoBRfnJqcXF9lwFEIatXX5BalEiiiRXqq1dal6KlYJrXgoXF0izRmVqsaauHVSPrl0qRDQvHyiYygUAPWgiyQ==",
    preset: "vue"
  }, null, _parent));
  _push(`<ul><li><a href="https://theme-hope.vuejs.press/guide/markdown/chart/flowchart.html" target="_blank" rel="noopener noreferrer">View Detail</a></li></ul><h4 id="markmap" tabindex="-1"><a class="header-anchor" href="#markmap"><span>MarkMap</span></a></h4>`);
  _push(ssrRenderComponent(_component_MarkMap, {
    id: "markmap-333",
    content: "eJyNkcFO4zAQhu95ipGKRBvJaTeUImU3u6dlV1oWIS4cWlBsZ0jcOnGwpzSA6LPjhFZCCCEOtuyZ7x/P/GaMBRW3q4o3SQAgjTb21CI+4hneo04gDjokGMCO8scBnKl65YKAwY+SqHHJeLzLRksXGVuMf/rc/I+iv2txPdwzhaJyLSJpqnGBlsc638tGfdVL1Jwwhwtrliipf2AujWQ76tNKb7hRpys4OfHALHbBL1X4UPHa2SlyWlvsO9L97AzC0JE1dRGGsN3mqLdbCBVxrWQIaVqqotR+UZp6tlprUl6I3mLClnwoU3UX8I7nmAXMJwCyLFu6/iRN7YzGSJtieNghILSRq8PR9z3oS/zzbrX+zuCghRSemIBFU8HC3Vl6Ejcxm3L5DAtzjxZi/nzQo/P/xuKrFH63vGo0uuvh4FeeFspRwm9PZnwq4+mxOJrE8WQmvs04yuPJUS5wciKSVaeMqrwz+dxsYONH4DVsLG/AP/TwftPeon5mENz5zzU1ZBVvr1ROZQamIWXq4AX0A9Fe"
  }, null, _parent));
  _push(`<ul><li><a href="https://theme-hope.vuejs.press/guide/markdown/chart/markmap.html" target="_blank" rel="noopener noreferrer">View Detail</a></li></ul><h4 id="mermaid" tabindex="-1"><a class="header-anchor" href="#mermaid"><span>Mermaid</span></a></h4>`);
  _push(ssrRenderComponent(_component_Mermaid, {
    id: "mermaid-344",
    code: "eJzT1dXlKsksyUm1UnDLyS9PzkgsKuECCabBeAohTlwKQJBsqKtrl2gEZheXJqUXJRZkKOTnpYIFEpEkU/NSUBWVlOeDBZJAipJwKcooSoWYBbYoGVUZ0B4FoCjcKLBqVJHyfDAfqBEAuj83LQ=="
  }, null, _parent));
  _push(`<ul><li><a href="https://theme-hope.vuejs.press/guide/markdown/chart/mermaid.html" target="_blank" rel="noopener noreferrer">View Detail</a></li></ul><h4 id="plantuml" tabindex="-1"><a class="header-anchor" href="#plantuml"><span>PlantUML</span></a></h4><p>@startuml<br> Alice -&gt; Bob: Authentication Request</p><p>alt successful case</p><pre><code>Bob -&gt; Alice: Authentication Accepted
</code></pre><p>else some kind of failure</p><pre><code>Bob -&gt; Alice: Authentication Failure
group My own label
Alice -&gt; Log : Log attack start
    loop 1000 times
        Alice -&gt; Bob: DNS Attack
    end
Alice -&gt; Log : Log attack end
end
</code></pre><p>else Another type of failure</p><p>Bob -&gt; Alice: Please repeat</p><p>end<br> @enduml</p><ul><li><a href="https://theme-hope.vuejs.press/guide/markdown/chart/plantuml.html" target="_blank" rel="noopener noreferrer">View Detail</a></li></ul><h4 id="code-tabs" tabindex="-1"><a class="header-anchor" href="#code-tabs"><span>Code Tabs</span></a></h4>`);
  _push(ssrRenderComponent(_component_CodeTabs, {
    id: "385",
    data: [{ "id": "pnpm" }, { "id": "yarn" }, { "id": "npm" }],
    active: 2,
    "tab-id": "shell"
  }, {
    title0: withCtx(({ value, isActive }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`pnpm`);
      } else {
        return [
          createTextVNode("pnpm")
        ];
      }
    }),
    title1: withCtx(({ value, isActive }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`yarn`);
      } else {
        return [
          createTextVNode("yarn")
        ];
      }
    }),
    title2: withCtx(({ value, isActive }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`npm`);
      } else {
        return [
          createTextVNode("npm")
        ];
      }
    }),
    tab0: withCtx(({ value, isActive }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="${ssrRenderStyle({ "--shiki-light": "#383A42", "--shiki-dark": "#abb2bf", "--shiki-light-bg": "#FAFAFA", "--shiki-dark-bg": "#282c34" })}"${_scopeId}><pre class="shiki shiki-themes one-light one-dark-pro vp-code"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#4078F2", "--shiki-dark": "#61AFEF" })}"${_scopeId}>pnpm</span><span style="${ssrRenderStyle({ "--shiki-light": "#50A14F", "--shiki-dark": "#98C379" })}"${_scopeId}> add</span><span style="${ssrRenderStyle({ "--shiki-light": "#986801", "--shiki-dark": "#D19A66" })}"${_scopeId}> -D</span><span style="${ssrRenderStyle({ "--shiki-light": "#50A14F", "--shiki-dark": "#98C379" })}"${_scopeId}> vuepress-theme-hope</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="${ssrRenderStyle({ "counter-reset": "line-number 0" })}"${_scopeId}><div class="line-number"${_scopeId}></div></div></div>`);
      } else {
        return [
          createVNode("div", {
            class: "language-bash line-numbers-mode",
            "data-highlighter": "shiki",
            "data-ext": "bash",
            "data-title": "bash",
            style: { "--shiki-light": "#383A42", "--shiki-dark": "#abb2bf", "--shiki-light-bg": "#FAFAFA", "--shiki-dark-bg": "#282c34" }
          }, [
            createVNode("pre", { class: "shiki shiki-themes one-light one-dark-pro vp-code" }, [
              createVNode("code", null, [
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-light": "#4078F2", "--shiki-dark": "#61AFEF" } }, "pnpm"),
                  createVNode("span", { style: { "--shiki-light": "#50A14F", "--shiki-dark": "#98C379" } }, " add"),
                  createVNode("span", { style: { "--shiki-light": "#986801", "--shiki-dark": "#D19A66" } }, " -D"),
                  createVNode("span", { style: { "--shiki-light": "#50A14F", "--shiki-dark": "#98C379" } }, " vuepress-theme-hope")
                ])
              ])
            ]),
            createVNode("div", {
              class: "line-numbers",
              "aria-hidden": "true",
              style: { "counter-reset": "line-number 0" }
            }, [
              createVNode("div", { class: "line-number" })
            ])
          ])
        ];
      }
    }),
    tab1: withCtx(({ value, isActive }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="${ssrRenderStyle({ "--shiki-light": "#383A42", "--shiki-dark": "#abb2bf", "--shiki-light-bg": "#FAFAFA", "--shiki-dark-bg": "#282c34" })}"${_scopeId}><pre class="shiki shiki-themes one-light one-dark-pro vp-code"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#4078F2", "--shiki-dark": "#61AFEF" })}"${_scopeId}>yarn</span><span style="${ssrRenderStyle({ "--shiki-light": "#50A14F", "--shiki-dark": "#98C379" })}"${_scopeId}> add</span><span style="${ssrRenderStyle({ "--shiki-light": "#986801", "--shiki-dark": "#D19A66" })}"${_scopeId}> -D</span><span style="${ssrRenderStyle({ "--shiki-light": "#50A14F", "--shiki-dark": "#98C379" })}"${_scopeId}> vuepress-theme-hope</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="${ssrRenderStyle({ "counter-reset": "line-number 0" })}"${_scopeId}><div class="line-number"${_scopeId}></div></div></div>`);
      } else {
        return [
          createVNode("div", {
            class: "language-bash line-numbers-mode",
            "data-highlighter": "shiki",
            "data-ext": "bash",
            "data-title": "bash",
            style: { "--shiki-light": "#383A42", "--shiki-dark": "#abb2bf", "--shiki-light-bg": "#FAFAFA", "--shiki-dark-bg": "#282c34" }
          }, [
            createVNode("pre", { class: "shiki shiki-themes one-light one-dark-pro vp-code" }, [
              createVNode("code", null, [
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-light": "#4078F2", "--shiki-dark": "#61AFEF" } }, "yarn"),
                  createVNode("span", { style: { "--shiki-light": "#50A14F", "--shiki-dark": "#98C379" } }, " add"),
                  createVNode("span", { style: { "--shiki-light": "#986801", "--shiki-dark": "#D19A66" } }, " -D"),
                  createVNode("span", { style: { "--shiki-light": "#50A14F", "--shiki-dark": "#98C379" } }, " vuepress-theme-hope")
                ])
              ])
            ]),
            createVNode("div", {
              class: "line-numbers",
              "aria-hidden": "true",
              style: { "counter-reset": "line-number 0" }
            }, [
              createVNode("div", { class: "line-number" })
            ])
          ])
        ];
      }
    }),
    tab2: withCtx(({ value, isActive }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="${ssrRenderStyle({ "--shiki-light": "#383A42", "--shiki-dark": "#abb2bf", "--shiki-light-bg": "#FAFAFA", "--shiki-dark-bg": "#282c34" })}"${_scopeId}><pre class="shiki shiki-themes one-light one-dark-pro vp-code"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#4078F2", "--shiki-dark": "#61AFEF" })}"${_scopeId}>npm</span><span style="${ssrRenderStyle({ "--shiki-light": "#50A14F", "--shiki-dark": "#98C379" })}"${_scopeId}> i</span><span style="${ssrRenderStyle({ "--shiki-light": "#986801", "--shiki-dark": "#D19A66" })}"${_scopeId}> -D</span><span style="${ssrRenderStyle({ "--shiki-light": "#50A14F", "--shiki-dark": "#98C379" })}"${_scopeId}> vuepress-theme-hope</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="${ssrRenderStyle({ "counter-reset": "line-number 0" })}"${_scopeId}><div class="line-number"${_scopeId}></div></div></div>`);
      } else {
        return [
          createVNode("div", {
            class: "language-bash line-numbers-mode",
            "data-highlighter": "shiki",
            "data-ext": "bash",
            "data-title": "bash",
            style: { "--shiki-light": "#383A42", "--shiki-dark": "#abb2bf", "--shiki-light-bg": "#FAFAFA", "--shiki-dark-bg": "#282c34" }
          }, [
            createVNode("pre", { class: "shiki shiki-themes one-light one-dark-pro vp-code" }, [
              createVNode("code", null, [
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-light": "#4078F2", "--shiki-dark": "#61AFEF" } }, "npm"),
                  createVNode("span", { style: { "--shiki-light": "#50A14F", "--shiki-dark": "#98C379" } }, " i"),
                  createVNode("span", { style: { "--shiki-light": "#986801", "--shiki-dark": "#D19A66" } }, " -D"),
                  createVNode("span", { style: { "--shiki-light": "#50A14F", "--shiki-dark": "#98C379" } }, " vuepress-theme-hope")
                ])
              ])
            ]),
            createVNode("div", {
              class: "line-numbers",
              "aria-hidden": "true",
              style: { "counter-reset": "line-number 0" }
            }, [
              createVNode("div", { class: "line-number" })
            ])
          ])
        ];
      }
    }),
    _: 1
    /* STABLE */
  }, _parent));
  _push(`<ul><li><a href="https://theme-hope.vuejs.press/guide/markdown/code/code-tabs.html" target="_blank" rel="noopener noreferrer">View Detail</a></li></ul><h4 id="code-demo" tabindex="-1"><a class="header-anchor" href="#code-demo"><span>Code Demo</span></a></h4>`);
  _push(ssrRenderComponent(_component_CodeDemo, {
    id: "code-demo-406",
    type: "normal",
    title: "A%20normal%20demo",
    code: "eJxFjjELAjEMhf9KjIuCeLhq7SYoOAiKU5ejjdxpr61tTxHxv5ueg0sCed97L29scmdxiaJZyHNPh0gpwamhjmDrA4mK78qJIHcJRAq1g9asFT4ovhTKskRVzhKCf1K89HYkqsAWnOE1cbDxuu/I5fm9Z/hIlnT2caJw/MuYzmtjNg8m9m3K5Kho2rb6pnAGkymsJbyVA6gtxczamW3/Mg5YKfcpgxt1KpXDm4NHe+vjEiKZAjHy+QJaqVDL"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="${ssrRenderStyle({ "--shiki-light": "#383A42", "--shiki-dark": "#abb2bf", "--shiki-light-bg": "#FAFAFA", "--shiki-dark-bg": "#282c34" })}"${_scopeId}><pre class="shiki shiki-themes one-light one-dark-pro vp-code"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#383A42", "--shiki-dark": "#ABB2BF" })}"${_scopeId}>&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#E45649", "--shiki-dark": "#E06C75" })}"${_scopeId}>h1</span><span style="${ssrRenderStyle({ "--shiki-light": "#383A42", "--shiki-dark": "#ABB2BF" })}"${_scopeId}>&gt;VuePress Theme Hope&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#E45649", "--shiki-dark": "#E06C75" })}"${_scopeId}>h1</span><span style="${ssrRenderStyle({ "--shiki-light": "#383A42", "--shiki-dark": "#ABB2BF" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#383A42", "--shiki-dark": "#ABB2BF" })}"${_scopeId}>&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#E45649", "--shiki-dark": "#E06C75" })}"${_scopeId}>p</span><span style="${ssrRenderStyle({ "--shiki-light": "#383A42", "--shiki-dark": "#ABB2BF" })}"${_scopeId}>&gt;Is &lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#E45649", "--shiki-dark": "#E06C75" })}"${_scopeId}>span</span><span style="${ssrRenderStyle({ "--shiki-light": "#986801", "--shiki-dark": "#D19A66" })}"${_scopeId}> id</span><span style="${ssrRenderStyle({ "--shiki-light": "#383A42", "--shiki-dark": "#ABB2BF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#50A14F", "--shiki-dark": "#98C379" })}"${_scopeId}>&quot;very&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#383A42", "--shiki-dark": "#ABB2BF" })}"${_scopeId}>&gt;very&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#E45649", "--shiki-dark": "#E06C75" })}"${_scopeId}>span</span><span style="${ssrRenderStyle({ "--shiki-light": "#383A42", "--shiki-dark": "#ABB2BF" })}"${_scopeId}>&gt; powerful!&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#E45649", "--shiki-dark": "#E06C75" })}"${_scopeId}>p</span><span style="${ssrRenderStyle({ "--shiki-light": "#383A42", "--shiki-dark": "#ABB2BF" })}"${_scopeId}>&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="${ssrRenderStyle({ "counter-reset": "line-number 0" })}"${_scopeId}><div class="line-number"${_scopeId}></div><div class="line-number"${_scopeId}></div></div></div><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="${ssrRenderStyle({ "--shiki-light": "#383A42", "--shiki-dark": "#abb2bf", "--shiki-light-bg": "#FAFAFA", "--shiki-dark-bg": "#282c34" })}"${_scopeId}><pre class="shiki shiki-themes one-light one-dark-pro vp-code"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#383A42", "--shiki-dark": "#E5C07B" })}"${_scopeId}>document</span><span style="${ssrRenderStyle({ "--shiki-light": "#383A42", "--shiki-dark": "#ABB2BF" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-light": "#4078F2", "--shiki-dark": "#61AFEF" })}"${_scopeId}>querySelector</span><span style="${ssrRenderStyle({ "--shiki-light": "#383A42", "--shiki-dark": "#ABB2BF" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "--shiki-light": "#50A14F", "--shiki-dark": "#98C379" })}"${_scopeId}>&quot;#very&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#383A42", "--shiki-dark": "#ABB2BF" })}"${_scopeId}>).</span><span style="${ssrRenderStyle({ "--shiki-light": "#4078F2", "--shiki-dark": "#61AFEF" })}"${_scopeId}>addEventListener</span><span style="${ssrRenderStyle({ "--shiki-light": "#383A42", "--shiki-dark": "#ABB2BF" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "--shiki-light": "#50A14F", "--shiki-dark": "#98C379" })}"${_scopeId}>&quot;click&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#383A42", "--shiki-dark": "#ABB2BF" })}"${_scopeId}>, () </span><span style="${ssrRenderStyle({ "--shiki-light": "#A626A4", "--shiki-dark": "#C678DD" })}"${_scopeId}>=&gt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#383A42", "--shiki-dark": "#ABB2BF" })}"${_scopeId}> {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#4078F2", "--shiki-dark": "#61AFEF" })}"${_scopeId}>  alert</span><span style="${ssrRenderStyle({ "--shiki-light": "#383A42", "--shiki-dark": "#ABB2BF" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "--shiki-light": "#50A14F", "--shiki-dark": "#98C379" })}"${_scopeId}>&quot;Very powerful!&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#383A42", "--shiki-dark": "#ABB2BF" })}"${_scopeId}>);</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#383A42", "--shiki-dark": "#ABB2BF" })}"${_scopeId}>});</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="${ssrRenderStyle({ "counter-reset": "line-number 0" })}"${_scopeId}><div class="line-number"${_scopeId}></div><div class="line-number"${_scopeId}></div><div class="line-number"${_scopeId}></div></div></div><div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" data-title="css" style="${ssrRenderStyle({ "--shiki-light": "#383A42", "--shiki-dark": "#abb2bf", "--shiki-light-bg": "#FAFAFA", "--shiki-dark-bg": "#282c34" })}"${_scopeId}><pre class="shiki shiki-themes one-light one-dark-pro vp-code"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#E45649", "--shiki-dark": "#E06C75" })}"${_scopeId}>span</span><span style="${ssrRenderStyle({ "--shiki-light": "#383A42", "--shiki-dark": "#ABB2BF" })}"${_scopeId}> {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#383A42", "--shiki-dark": "#ABB2BF" })}"${_scopeId}>  color: </span><span style="${ssrRenderStyle({ "--shiki-light": "#986801", "--shiki-dark": "#D19A66" })}"${_scopeId}>red</span><span style="${ssrRenderStyle({ "--shiki-light": "#383A42", "--shiki-dark": "#ABB2BF" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#383A42", "--shiki-dark": "#ABB2BF" })}"${_scopeId}>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="${ssrRenderStyle({ "counter-reset": "line-number 0" })}"${_scopeId}><div class="line-number"${_scopeId}></div><div class="line-number"${_scopeId}></div><div class="line-number"${_scopeId}></div></div></div>`);
      } else {
        return [
          createVNode("div", {
            class: "language-html line-numbers-mode",
            "data-highlighter": "shiki",
            "data-ext": "html",
            "data-title": "html",
            style: { "--shiki-light": "#383A42", "--shiki-dark": "#abb2bf", "--shiki-light-bg": "#FAFAFA", "--shiki-dark-bg": "#282c34" }
          }, [
            createVNode("pre", { class: "shiki shiki-themes one-light one-dark-pro vp-code" }, [
              createVNode("code", null, [
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-light": "#383A42", "--shiki-dark": "#ABB2BF" } }, "<"),
                  createVNode("span", { style: { "--shiki-light": "#E45649", "--shiki-dark": "#E06C75" } }, "h1"),
                  createVNode("span", { style: { "--shiki-light": "#383A42", "--shiki-dark": "#ABB2BF" } }, ">VuePress Theme Hope</"),
                  createVNode("span", { style: { "--shiki-light": "#E45649", "--shiki-dark": "#E06C75" } }, "h1"),
                  createVNode("span", { style: { "--shiki-light": "#383A42", "--shiki-dark": "#ABB2BF" } }, ">")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-light": "#383A42", "--shiki-dark": "#ABB2BF" } }, "<"),
                  createVNode("span", { style: { "--shiki-light": "#E45649", "--shiki-dark": "#E06C75" } }, "p"),
                  createVNode("span", { style: { "--shiki-light": "#383A42", "--shiki-dark": "#ABB2BF" } }, ">Is <"),
                  createVNode("span", { style: { "--shiki-light": "#E45649", "--shiki-dark": "#E06C75" } }, "span"),
                  createVNode("span", { style: { "--shiki-light": "#986801", "--shiki-dark": "#D19A66" } }, " id"),
                  createVNode("span", { style: { "--shiki-light": "#383A42", "--shiki-dark": "#ABB2BF" } }, "="),
                  createVNode("span", { style: { "--shiki-light": "#50A14F", "--shiki-dark": "#98C379" } }, '"very"'),
                  createVNode("span", { style: { "--shiki-light": "#383A42", "--shiki-dark": "#ABB2BF" } }, ">very</"),
                  createVNode("span", { style: { "--shiki-light": "#E45649", "--shiki-dark": "#E06C75" } }, "span"),
                  createVNode("span", { style: { "--shiki-light": "#383A42", "--shiki-dark": "#ABB2BF" } }, "> powerful!</"),
                  createVNode("span", { style: { "--shiki-light": "#E45649", "--shiki-dark": "#E06C75" } }, "p"),
                  createVNode("span", { style: { "--shiki-light": "#383A42", "--shiki-dark": "#ABB2BF" } }, ">")
                ])
              ])
            ]),
            createVNode("div", {
              class: "line-numbers",
              "aria-hidden": "true",
              style: { "counter-reset": "line-number 0" }
            }, [
              createVNode("div", { class: "line-number" }),
              createVNode("div", { class: "line-number" })
            ])
          ]),
          createVNode("div", {
            class: "language-js line-numbers-mode",
            "data-highlighter": "shiki",
            "data-ext": "js",
            "data-title": "js",
            style: { "--shiki-light": "#383A42", "--shiki-dark": "#abb2bf", "--shiki-light-bg": "#FAFAFA", "--shiki-dark-bg": "#282c34" }
          }, [
            createVNode("pre", { class: "shiki shiki-themes one-light one-dark-pro vp-code" }, [
              createVNode("code", null, [
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-light": "#383A42", "--shiki-dark": "#E5C07B" } }, "document"),
                  createVNode("span", { style: { "--shiki-light": "#383A42", "--shiki-dark": "#ABB2BF" } }, "."),
                  createVNode("span", { style: { "--shiki-light": "#4078F2", "--shiki-dark": "#61AFEF" } }, "querySelector"),
                  createVNode("span", { style: { "--shiki-light": "#383A42", "--shiki-dark": "#ABB2BF" } }, "("),
                  createVNode("span", { style: { "--shiki-light": "#50A14F", "--shiki-dark": "#98C379" } }, '"#very"'),
                  createVNode("span", { style: { "--shiki-light": "#383A42", "--shiki-dark": "#ABB2BF" } }, ")."),
                  createVNode("span", { style: { "--shiki-light": "#4078F2", "--shiki-dark": "#61AFEF" } }, "addEventListener"),
                  createVNode("span", { style: { "--shiki-light": "#383A42", "--shiki-dark": "#ABB2BF" } }, "("),
                  createVNode("span", { style: { "--shiki-light": "#50A14F", "--shiki-dark": "#98C379" } }, '"click"'),
                  createVNode("span", { style: { "--shiki-light": "#383A42", "--shiki-dark": "#ABB2BF" } }, ", () "),
                  createVNode("span", { style: { "--shiki-light": "#A626A4", "--shiki-dark": "#C678DD" } }, "=>"),
                  createVNode("span", { style: { "--shiki-light": "#383A42", "--shiki-dark": "#ABB2BF" } }, " {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-light": "#4078F2", "--shiki-dark": "#61AFEF" } }, "  alert"),
                  createVNode("span", { style: { "--shiki-light": "#383A42", "--shiki-dark": "#ABB2BF" } }, "("),
                  createVNode("span", { style: { "--shiki-light": "#50A14F", "--shiki-dark": "#98C379" } }, '"Very powerful!"'),
                  createVNode("span", { style: { "--shiki-light": "#383A42", "--shiki-dark": "#ABB2BF" } }, ");")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-light": "#383A42", "--shiki-dark": "#ABB2BF" } }, "});")
                ])
              ])
            ]),
            createVNode("div", {
              class: "line-numbers",
              "aria-hidden": "true",
              style: { "counter-reset": "line-number 0" }
            }, [
              createVNode("div", { class: "line-number" }),
              createVNode("div", { class: "line-number" }),
              createVNode("div", { class: "line-number" })
            ])
          ]),
          createVNode("div", {
            class: "language-css line-numbers-mode",
            "data-highlighter": "shiki",
            "data-ext": "css",
            "data-title": "css",
            style: { "--shiki-light": "#383A42", "--shiki-dark": "#abb2bf", "--shiki-light-bg": "#FAFAFA", "--shiki-dark-bg": "#282c34" }
          }, [
            createVNode("pre", { class: "shiki shiki-themes one-light one-dark-pro vp-code" }, [
              createVNode("code", null, [
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-light": "#E45649", "--shiki-dark": "#E06C75" } }, "span"),
                  createVNode("span", { style: { "--shiki-light": "#383A42", "--shiki-dark": "#ABB2BF" } }, " {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-light": "#383A42", "--shiki-dark": "#ABB2BF" } }, "  color: "),
                  createVNode("span", { style: { "--shiki-light": "#986801", "--shiki-dark": "#D19A66" } }, "red"),
                  createVNode("span", { style: { "--shiki-light": "#383A42", "--shiki-dark": "#ABB2BF" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-light": "#383A42", "--shiki-dark": "#ABB2BF" } }, "}")
                ])
              ])
            ]),
            createVNode("div", {
              class: "line-numbers",
              "aria-hidden": "true",
              style: { "counter-reset": "line-number 0" }
            }, [
              createVNode("div", { class: "line-number" }),
              createVNode("div", { class: "line-number" }),
              createVNode("div", { class: "line-number" })
            ])
          ])
        ];
      }
    }),
    _: 1
    /* STABLE */
  }, _parent));
  _push(`<ul><li><a href="https://theme-hope.vuejs.press/guide/markdown/code/demo.html" target="_blank" rel="noopener noreferrer">View Detail</a></li></ul><h4 id="playground" tabindex="-1"><a class="header-anchor" href="#playground"><span>Playground</span></a></h4>`);
  _push(ssrRenderComponent(_component_Playground, {
    title: "UnoCSS%20demo",
    link: "https%3A%2F%2Funocss.dev%2Fplay%2F%3Fhtml%3DDwEwlgbgBAxgNgQwM5ILwCIBmcCmAPKbfAWhgHs4oAXfK0nAOxoCcoALYzAVzkoCsuSKmEwBPekxzN0APgBQUKKEixEKDDTx1mOELIAqAUQDK%2BwmVYgcmBDypQADjqQ4qwAPTgI8xcujxkNHRNOgASTBBSCgsDEzNMC1hBKjIAW1gUDy95LMh5IA%26config%3DJYWwDg9gTgLgBAbzgEwKYDNgDtUGEJaYDmANHGFKgM6owCqWEcAvnOlBCHAEQCujAYypVuAbgBQ41AA9IsFBgCGvADbw0mHPkLAiACgTi45SjRhUAXHADaFarQYQ9ASgC6Jcc2cSgA%26css%3DFwJw9mAuAEDeBQ1oFpkDMAmyDGYA2YIw0A5iAKbkB2A3PAL7xA"
  }, null, _parent));
  _push(`<ul><li><a href="https://theme-hope.vuejs.press/guide/markdown/code/playground.html" target="_blank" rel="noopener noreferrer">View Detail</a></li></ul><h4 id="kotlin-playground" tabindex="-1"><a class="header-anchor" href="#kotlin-playground"><span>Kotlin Playground</span></a></h4>`);
  _push(ssrRenderComponent(_component_KotlinPlayground, {
    title: "Simple%20Playground",
    key: "6760c7fd",
    settings: "%7B%7D",
    files: "eJw9zDELwjAUBOC/cmRKoRRcg4ri5OxoHB6phkDyKi+xUMT/bkLFG++476pcpJxxmriQK3qmiDAanLn0mElwTxSiwaVIYN9Ztvx4MWrJmsRng6MILdt133d4W0ZNc9xqYvfXNz2sSiTLwTd2cFOyqqLt8axAiax/ryGMdfhYVrcvD2o3zg=="
  }, null, _parent));
  _push(`<ul><li><a href="https://theme-hope.vuejs.press/guide/markdown/code/kotlin-playground.html" target="_blank" rel="noopener noreferrer">View Detail</a></li></ul><h4 id="sandpack-playground" tabindex="-1"><a class="header-anchor" href="#sandpack-playground"><span>Sandpack Playground</span></a></h4>`);
  _push(ssrRenderComponent(_component_SandPack, {
    title: "Vue%20Demo",
    template: "vue",
    files: "eJxNjD0OwjAMRq9iPMEAESuESmyMHMBL1aalUv6UOJVQlLtjysL4/D2/iiqnQd1jPK3F4AV1HtISGbLhEjvyi4shMVRIZoIGUwoOCMUlvJInPwSfGVye4fZV9oQPY22Ap+3fcwrFjzvCg6ha/crSFGDjou3ZCAHo17mrdYu0ppXQdl18LAzr0YXR2Buh7ISgZNTq7x/bB3CyQ8s=",
    options: "eJyrrgUAAXUA+Q==",
    customSetup: "eJyrrgUAAXUA+Q=="
  }, null, _parent));
  _push(`<ul><li><a href="https://theme-hope.vuejs.press/guide/markdown/code/sandpack.html" target="_blank" rel="noopener noreferrer">View Detail</a></li></ul><h4 id="vue-playground" tabindex="-1"><a class="header-anchor" href="#vue-playground"><span>Vue Playground</span></a></h4>`);
  _push(ssrRenderComponent(_component_VuePlayground, {
    title: "Vue%20Playground",
    key: "3077ec44",
    settings: "%7B%7D",
    files: "eyJBcHAudnVlIjoiPHNjcmlwdCBzZXR1cD5cbmltcG9ydCB7IHJlZiB9IGZyb20gXCJ2dWVcIjtcblxuY29uc3QgbXNnID0gcmVmKFwiSGVsbG8gV29ybGQhXCIpO1xuPC9zY3JpcHQ%2BXG5cbjx0ZW1wbGF0ZT5cbiAgPGgxPnt7IG1zZyB9fTwvaDE%2BXG4gIDxpbnB1dCB2LW1vZGVsPVwibXNnXCIgLz5cbjwvdGVtcGxhdGU%2BXG4ifQ%3D%3D"
  }, null, _parent));
  _push(`<ul><li><a href="https://theme-hope.vuejs.press/guide/markdown/code/vue-playground.html" target="_blank" rel="noopener noreferrer">View Detail</a></li></ul><hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="footnote1" class="footnote-item"><p>This is footnote content <a href="#footnote-ref1" class="footnote-backref">↩︎</a></p></li></ol></section></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/demo/markdown.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const markdown_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "markdown.html.vue"]]);
const data = JSON.parse('{"path":"/demo/markdown.html","title":"Markdown Enhance","lang":"en-US","frontmatter":{"title":"Markdown Enhance","icon":"fab fa-markdown","order":1,"category":["Guide"],"tag":["Markdown"],"description":"VuePress basically generate pages from Markdown files. So you can use it to generate documentation or blog sites easily. You should create and write Markdown files, so that VueP...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://theme-hope-blog-demo.vuejs.press/zh/demo/markdown.html"}],["meta",{"property":"og:url","content":"https://theme-hope-blog-demo.vuejs.press/demo/markdown.html"}],["meta",{"property":"og:site_name","content":"Blog Demo"}],["meta",{"property":"og:title","content":"Markdown Enhance"}],["meta",{"property":"og:description","content":"VuePress basically generate pages from Markdown files. So you can use it to generate documentation or blog sites easily. You should create and write Markdown files, so that VueP..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-09T10:04:52.000Z"}],["meta",{"property":"article:author","content":"Mr.Hope"}],["meta",{"property":"article:tag","content":"Markdown"}],["meta",{"property":"article:modified_time","content":"2024-05-09T10:04:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Markdown Enhance\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-09T10:04:52.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"Markdown Introduction","slug":"markdown-introduction","link":"#markdown-introduction","children":[]},{"level":2,"title":"Markdown Config","slug":"markdown-config","link":"#markdown-config","children":[]},{"level":2,"title":"Markdown Extension","slug":"markdown-extension","link":"#markdown-extension","children":[{"level":3,"title":"VuePress Enhancement","slug":"vuepress-enhancement","link":"#vuepress-enhancement","children":[]},{"level":3,"title":"Theme Enhancement","slug":"theme-enhancement","link":"#theme-enhancement","children":[]}]}],"git":{"createdTime":1622991562000,"updatedTime":1715249092000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":21},{"name":"Mister-Hope","email":"mister-hope@outlook.com","commits":1},{"name":"Nan Huang","email":"teddyhuangnan@gmail.com","commits":1}]},"readingTime":{"minutes":3.55,"words":1065},"filePathRelative":"demo/markdown.md","localizedDate":"June 6, 2021","excerpt":"<p>VuePress basically generate pages from Markdown files. So you can use it to generate documentation or blog sites easily.</p>\\n<p>You should create and write Markdown files, so that VuePress can convert them to different pages according to file structure.</p>\\n","autoDesc":true}');
export {
  markdown_html as comp,
  data
};
