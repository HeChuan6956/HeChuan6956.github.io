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
  _push(`<div${ssrRenderAttrs(_attrs)}><p>VuePress 主要从 Markdown 文件生成页面。因此，你可以使用它轻松生成文档或博客站点。</p><p>你需要创建并编写 Markdown，以便 VuePress 可以根据文件结构将它们转换为不同的页面。</p><!-- more --><h2 id="markdown-介绍" tabindex="-1"><a class="header-anchor" href="#markdown-介绍"><span>Markdown 介绍</span></a></h2><p>如果你是一个新手，还不会编写 Markdown，请先阅读 <a href="https://theme-hope.vuejs.press/zh/cookbook/markdown/" target="_blank" rel="noopener noreferrer">Markdown 介绍</a> 和 <a href="https://theme-hope.vuejs.press/zh/cookbook/markdown/demo.html" target="_blank" rel="noopener noreferrer">Markdown 演示</a>。</p><h2 id="markdown-配置" tabindex="-1"><a class="header-anchor" href="#markdown-配置"><span>Markdown 配置</span></a></h2><p>VuePress 通过 Frontmatter 为每个 Markdown 页面引入配置。</p><div class="hint-container important"><p class="hint-container-title">Frontmatter</p><p>Frontmatter 是 VuePress 中很重要的一个概念，请阅读 <a href="https://theme-hope.vuejs.press/zh/cookbook/vuepress/page.html#front-matter" target="_blank" rel="noopener noreferrer">Frontmatter 介绍</a> 了解详情。</p></div><h2 id="markdown-扩展" tabindex="-1"><a class="header-anchor" href="#markdown-扩展"><span>Markdown 扩展</span></a></h2><p>VuePress 会使用 <a href="https://github.com/markdown-it/markdown-it" target="_blank" rel="noopener noreferrer">markdown-it</a> 来解析 Markdown 内容，因此可以借助于 markdown-it 插件来实现 <a href="https://github.com/markdown-it/markdown-it#syntax-extensions" target="_blank" rel="noopener noreferrer">语法扩展</a> 。</p><h3 id="vuepress-扩展" tabindex="-1"><a class="header-anchor" href="#vuepress-扩展"><span>VuePress 扩展</span></a></h3><p>为了丰富文档写作，VuePress 对 Markdown 语法进行了扩展。</p><p>关于这些扩展，请阅读 <a href="https://theme-hope.vuejs.press/zh/cookbook/vuepress/markdown.html" target="_blank" rel="noopener noreferrer">VuePress 中的 Markdown 扩展</a>。</p><h3 id="主题扩展" tabindex="-1"><a class="header-anchor" href="#主题扩展"><span>主题扩展</span></a></h3><p>通过 <a href="https://plugin-md-enhance.vuejs.press/zh/" target="_blank" rel="noopener noreferrer"><code>vuepress-plugin-md-enhance</code></a>，主题扩展了更多 Markdown 语法，提供更加丰富的写作功能。</p><h4 id="选项卡" tabindex="-1"><a class="header-anchor" href="#选项卡"><span>选项卡</span></a></h4>`);
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
  _push(`<ul><li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/content/tabs.html" target="_blank" rel="noopener noreferrer">查看详情</a></li></ul><h4 id="脚注" tabindex="-1"><a class="header-anchor" href="#脚注"><span>脚注</span></a></h4><p>此文字有脚注<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup>.</p><ul><li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/content/footnote.html" target="_blank" rel="noopener noreferrer">查看详情</a></li></ul><h4 id="导入文件" tabindex="-1"><a class="header-anchor" href="#导入文件"><span>导入文件</span></a></h4><ul><li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/content/include.html" target="_blank" rel="noopener noreferrer">查看详情</a></li></ul><h4 id="幻灯片" tabindex="-1"><a class="header-anchor" href="#幻灯片"><span>幻灯片</span></a></h4>`);
  _push(ssrRenderComponent(_component_RevealJs, {
    id: "revealjs-100",
    code: "eJzjUlZWeLpz9/PG9c872xUMubie7Gh4smPVszmdz6a1P107/emkHoXol5P3PetbGquRUVJSUGylr5+bWVySWqSbkV+Qqpecn6up8HxWy7N1W19M2MvFpaury4VqqBFQUOHlwp3PZ68DWgBngoQx1BrrAZ2QkJCQVcyVnJ9XXKKQqGCrYGgNEgIpx1ANNERFhctLI6YkI7UkMd5AB8ow1ATqiykuzY2vzrQ1qAUpAgAALl2Z",
    theme: "auto"
  }, null, _parent));
  _push(`<ul><li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/content/revealjs.html" target="_blank" rel="noopener noreferrer">查看详情</a></li></ul><!-- markdownlint-disable MD001 --><h4 id="tex-语法" tabindex="-1"><a class="header-anchor" href="#tex-语法"><span>TeX 语法</span></a></h4><p class="katex-block"><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mfrac><msup><mi mathvariant="normal">∂</mi><mi>r</mi></msup><mrow><mi mathvariant="normal">∂</mi><msup><mi>ω</mi><mi>r</mi></msup></mrow></mfrac><mrow><mo fence="true">(</mo><mfrac><msup><mi>y</mi><mi>ω</mi></msup><mi>ω</mi></mfrac><mo fence="true">)</mo></mrow><mo>=</mo><mrow><mo fence="true">(</mo><mfrac><msup><mi>y</mi><mi>ω</mi></msup><mi>ω</mi></mfrac><mo fence="true">)</mo></mrow><mrow><mo fence="true">{</mo><mo stretchy="false">(</mo><mi>log</mi><mo>⁡</mo><mi>y</mi><msup><mo stretchy="false">)</mo><mi>r</mi></msup><mo>+</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>r</mi></munderover><mfrac><mrow><mo stretchy="false">(</mo><mo>−</mo><mn>1</mn><msup><mo stretchy="false">)</mo><mi>i</mi></msup><mi>r</mi><mo>⋯</mo><mo stretchy="false">(</mo><mi>r</mi><mo>−</mo><mi>i</mi><mo>+</mo><mn>1</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mi>log</mi><mo>⁡</mo><mi>y</mi><msup><mo stretchy="false">)</mo><mrow><mi>r</mi><mo>−</mo><mi>i</mi></mrow></msup></mrow><msup><mi>ω</mi><mi>i</mi></msup></mfrac><mo fence="true">}</mo></mrow></mrow><annotation encoding="application/x-tex"> \\frac {\\partial^r} {\\partial \\omega^r} \\left(\\frac {y^{\\omega}} {\\omega}\\right) = \\left(\\frac {y^{\\omega}} {\\omega}\\right) \\left\\{(\\log y)^r + \\sum_{i=1}^r \\frac {(-1)^i r \\cdots (r-i+1) (\\log y)^{r-i}} {\\omega^i} \\right\\} </annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="${ssrRenderStyle({ "height": "2.4em", "vertical-align": "-0.95em" })}"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="${ssrRenderStyle({ "height": "1.3714em" })}"><span style="${ssrRenderStyle({ "top": "-2.314em" })}"><span class="pstrut" style="${ssrRenderStyle({ "height": "3em" })}"></span><span class="mord"><span class="mord" style="${ssrRenderStyle({ "margin-right": "0.05556em" })}">∂</span><span class="mord"><span class="mord mathnormal" style="${ssrRenderStyle({ "margin-right": "0.03588em" })}">ω</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="${ssrRenderStyle({ "height": "0.5904em" })}"><span style="${ssrRenderStyle({ "top": "-2.989em", "margin-right": "0.05em" })}"><span class="pstrut" style="${ssrRenderStyle({ "height": "2.7em" })}"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="${ssrRenderStyle({ "margin-right": "0.02778em" })}">r</span></span></span></span></span></span></span></span></span></span><span style="${ssrRenderStyle({ "top": "-3.23em" })}"><span class="pstrut" style="${ssrRenderStyle({ "height": "3em" })}"></span><span class="frac-line" style="${ssrRenderStyle({ "border-bottom-width": "0.04em" })}"></span></span><span style="${ssrRenderStyle({ "top": "-3.677em" })}"><span class="pstrut" style="${ssrRenderStyle({ "height": "3em" })}"></span><span class="mord"><span class="mord"><span class="mord" style="${ssrRenderStyle({ "margin-right": "0.05556em" })}">∂</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="${ssrRenderStyle({ "height": "0.6644em" })}"><span style="${ssrRenderStyle({ "top": "-3.063em", "margin-right": "0.05em" })}"><span class="pstrut" style="${ssrRenderStyle({ "height": "2.7em" })}"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="${ssrRenderStyle({ "margin-right": "0.02778em" })}">r</span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="${ssrRenderStyle({ "height": "0.686em" })}"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mspace" style="${ssrRenderStyle({ "margin-right": "0.1667em" })}"></span><span class="minner"><span class="mopen delimcenter" style="${ssrRenderStyle({ "top": "0em" })}"><span class="delimsizing size3">(</span></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="${ssrRenderStyle({ "height": "1.3414em" })}"><span style="${ssrRenderStyle({ "top": "-2.314em" })}"><span class="pstrut" style="${ssrRenderStyle({ "height": "3em" })}"></span><span class="mord"><span class="mord mathnormal" style="${ssrRenderStyle({ "margin-right": "0.03588em" })}">ω</span></span></span><span style="${ssrRenderStyle({ "top": "-3.23em" })}"><span class="pstrut" style="${ssrRenderStyle({ "height": "3em" })}"></span><span class="frac-line" style="${ssrRenderStyle({ "border-bottom-width": "0.04em" })}"></span></span><span style="${ssrRenderStyle({ "top": "-3.677em" })}"><span class="pstrut" style="${ssrRenderStyle({ "height": "3em" })}"></span><span class="mord"><span class="mord"><span class="mord mathnormal" style="${ssrRenderStyle({ "margin-right": "0.03588em" })}">y</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="${ssrRenderStyle({ "height": "0.6644em" })}"><span style="${ssrRenderStyle({ "top": "-3.063em", "margin-right": "0.05em" })}"><span class="pstrut" style="${ssrRenderStyle({ "height": "2.7em" })}"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="${ssrRenderStyle({ "margin-right": "0.03588em" })}">ω</span></span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="${ssrRenderStyle({ "height": "0.686em" })}"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mclose delimcenter" style="${ssrRenderStyle({ "top": "0em" })}"><span class="delimsizing size3">)</span></span></span><span class="mspace" style="${ssrRenderStyle({ "margin-right": "0.2778em" })}"></span><span class="mrel">=</span><span class="mspace" style="${ssrRenderStyle({ "margin-right": "0.2778em" })}"></span></span><span class="base"><span class="strut" style="${ssrRenderStyle({ "height": "3.0277em", "vertical-align": "-1.2777em" })}"></span><span class="minner"><span class="mopen delimcenter" style="${ssrRenderStyle({ "top": "0em" })}"><span class="delimsizing size3">(</span></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="${ssrRenderStyle({ "height": "1.3414em" })}"><span style="${ssrRenderStyle({ "top": "-2.314em" })}"><span class="pstrut" style="${ssrRenderStyle({ "height": "3em" })}"></span><span class="mord"><span class="mord mathnormal" style="${ssrRenderStyle({ "margin-right": "0.03588em" })}">ω</span></span></span><span style="${ssrRenderStyle({ "top": "-3.23em" })}"><span class="pstrut" style="${ssrRenderStyle({ "height": "3em" })}"></span><span class="frac-line" style="${ssrRenderStyle({ "border-bottom-width": "0.04em" })}"></span></span><span style="${ssrRenderStyle({ "top": "-3.677em" })}"><span class="pstrut" style="${ssrRenderStyle({ "height": "3em" })}"></span><span class="mord"><span class="mord"><span class="mord mathnormal" style="${ssrRenderStyle({ "margin-right": "0.03588em" })}">y</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="${ssrRenderStyle({ "height": "0.6644em" })}"><span style="${ssrRenderStyle({ "top": "-3.063em", "margin-right": "0.05em" })}"><span class="pstrut" style="${ssrRenderStyle({ "height": "2.7em" })}"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="${ssrRenderStyle({ "margin-right": "0.03588em" })}">ω</span></span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="${ssrRenderStyle({ "height": "0.686em" })}"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mclose delimcenter" style="${ssrRenderStyle({ "top": "0em" })}"><span class="delimsizing size3">)</span></span></span><span class="mspace" style="${ssrRenderStyle({ "margin-right": "0.1667em" })}"></span><span class="minner"><span class="mopen delimcenter" style="${ssrRenderStyle({ "top": "0em" })}"><span class="delimsizing size4">{</span></span><span class="mopen">(</span><span class="mop">lo<span style="${ssrRenderStyle({ "margin-right": "0.01389em" })}">g</span></span><span class="mspace" style="${ssrRenderStyle({ "margin-right": "0.1667em" })}"></span><span class="mord mathnormal" style="${ssrRenderStyle({ "margin-right": "0.03588em" })}">y</span><span class="mclose"><span class="mclose">)</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="${ssrRenderStyle({ "height": "0.7144em" })}"><span style="${ssrRenderStyle({ "top": "-3.113em", "margin-right": "0.05em" })}"><span class="pstrut" style="${ssrRenderStyle({ "height": "2.7em" })}"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="${ssrRenderStyle({ "margin-right": "0.02778em" })}">r</span></span></span></span></span></span></span></span><span class="mspace" style="${ssrRenderStyle({ "margin-right": "0.2222em" })}"></span><span class="mbin">+</span><span class="mspace" style="${ssrRenderStyle({ "margin-right": "0.2222em" })}"></span><span class="mop op-limits"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="${ssrRenderStyle({ "height": "1.6514em" })}"><span style="${ssrRenderStyle({ "top": "-1.8723em", "margin-left": "0em" })}"><span class="pstrut" style="${ssrRenderStyle({ "height": "3.05em" })}"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">i</span><span class="mrel mtight">=</span><span class="mord mtight">1</span></span></span></span><span style="${ssrRenderStyle({ "top": "-3.05em" })}"><span class="pstrut" style="${ssrRenderStyle({ "height": "3.05em" })}"></span><span><span class="mop op-symbol large-op">∑</span></span></span><span style="${ssrRenderStyle({ "top": "-4.3em", "margin-left": "0em" })}"><span class="pstrut" style="${ssrRenderStyle({ "height": "3.05em" })}"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="${ssrRenderStyle({ "margin-right": "0.02778em" })}">r</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="${ssrRenderStyle({ "height": "1.2777em" })}"><span></span></span></span></span></span><span class="mspace" style="${ssrRenderStyle({ "margin-right": "0.1667em" })}"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="${ssrRenderStyle({ "height": "1.5017em" })}"><span style="${ssrRenderStyle({ "top": "-2.314em" })}"><span class="pstrut" style="${ssrRenderStyle({ "height": "3em" })}"></span><span class="mord"><span class="mord"><span class="mord mathnormal" style="${ssrRenderStyle({ "margin-right": "0.03588em" })}">ω</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="${ssrRenderStyle({ "height": "0.7507em" })}"><span style="${ssrRenderStyle({ "top": "-2.989em", "margin-right": "0.05em" })}"><span class="pstrut" style="${ssrRenderStyle({ "height": "2.7em" })}"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">i</span></span></span></span></span></span></span></span></span></span><span style="${ssrRenderStyle({ "top": "-3.23em" })}"><span class="pstrut" style="${ssrRenderStyle({ "height": "3em" })}"></span><span class="frac-line" style="${ssrRenderStyle({ "border-bottom-width": "0.04em" })}"></span></span><span style="${ssrRenderStyle({ "top": "-3.677em" })}"><span class="pstrut" style="${ssrRenderStyle({ "height": "3em" })}"></span><span class="mord"><span class="mopen">(</span><span class="mord">−</span><span class="mord">1</span><span class="mclose"><span class="mclose">)</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="${ssrRenderStyle({ "height": "0.8247em" })}"><span style="${ssrRenderStyle({ "top": "-3.063em", "margin-right": "0.05em" })}"><span class="pstrut" style="${ssrRenderStyle({ "height": "2.7em" })}"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">i</span></span></span></span></span></span></span></span><span class="mord mathnormal" style="${ssrRenderStyle({ "margin-right": "0.02778em" })}">r</span><span class="mspace" style="${ssrRenderStyle({ "margin-right": "0.1667em" })}"></span><span class="minner">⋯</span><span class="mspace" style="${ssrRenderStyle({ "margin-right": "0.1667em" })}"></span><span class="mopen">(</span><span class="mord mathnormal" style="${ssrRenderStyle({ "margin-right": "0.02778em" })}">r</span><span class="mspace" style="${ssrRenderStyle({ "margin-right": "0.2222em" })}"></span><span class="mbin">−</span><span class="mspace" style="${ssrRenderStyle({ "margin-right": "0.2222em" })}"></span><span class="mord mathnormal">i</span><span class="mspace" style="${ssrRenderStyle({ "margin-right": "0.2222em" })}"></span><span class="mbin">+</span><span class="mspace" style="${ssrRenderStyle({ "margin-right": "0.2222em" })}"></span><span class="mord">1</span><span class="mclose">)</span><span class="mopen">(</span><span class="mop">lo<span style="${ssrRenderStyle({ "margin-right": "0.01389em" })}">g</span></span><span class="mspace" style="${ssrRenderStyle({ "margin-right": "0.1667em" })}"></span><span class="mord mathnormal" style="${ssrRenderStyle({ "margin-right": "0.03588em" })}">y</span><span class="mclose"><span class="mclose">)</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="${ssrRenderStyle({ "height": "0.8247em" })}"><span style="${ssrRenderStyle({ "top": "-3.063em", "margin-right": "0.05em" })}"><span class="pstrut" style="${ssrRenderStyle({ "height": "2.7em" })}"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="${ssrRenderStyle({ "margin-right": "0.02778em" })}">r</span><span class="mbin mtight">−</span><span class="mord mathnormal mtight">i</span></span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="${ssrRenderStyle({ "height": "0.686em" })}"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mclose delimcenter" style="${ssrRenderStyle({ "top": "0em" })}"><span class="delimsizing size4">}</span></span></span></span></span></span></span></p><ul><li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/grammar/tex.html" target="_blank" rel="noopener noreferrer">查看详情</a></li></ul><h4 id="任务列表" tabindex="-1"><a class="header-anchor" href="#任务列表"><span>任务列表</span></a></h4><ul class="task-list-container"><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> 计划 1</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> 计划 2</label></li></ul><p><a href="https://theme-hope.vuejs.press/zh/guide/markdown/grammar/tasklist.html" target="_blank" rel="noopener noreferrer">查看详情</a></p><h3 id="图片增强" tabindex="-1"><a class="header-anchor" href="#图片增强"><span>图片增强</span></a></h3><p>支持为图片设置颜色模式和大小。</p><ul><li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/grammar/image.html" target="_blank" rel="noopener noreferrer">查看详情</a></li></ul><h4 id="上下角标" tabindex="-1"><a class="header-anchor" href="#上下角标"><span>上下角标</span></a></h4><p>19<sup>th</sup> H<sub>2</sub>O</p><ul><li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/grammar/sup-sub.html" target="_blank" rel="noopener noreferrer">查看详情</a></li></ul><h4 id="组件" tabindex="-1"><a class="header-anchor" href="#组件"><span>组件</span></a></h4>`);
  _push(ssrRenderComponent(_component_VPCard, { "title": "Mr.Hope", "desc": "Where there is light, there is hope", "logo": "https://mister-hope.com/logo.svg", "link": "https://mister-hope.com", "background": "rgba(253, 230, 138, 0.15)" }, null, _parent));
  _push(`<ul><li><a href="https://theme-hope.vuejs.press/zh/guide/component/grammar.html" target="_blank" rel="noopener noreferrer">查看详情</a></li></ul><h4 id="提示容器" tabindex="-1"><a class="header-anchor" href="#提示容器"><span>提示容器</span></a></h4><div><p>安全的在 Markdown 中使用 {{ variable }}。</p></div><div class="hint-container info"><p class="hint-container-title">自定义标题</p><p>信息容器，包含 <code>代码</code> 与 <a href="#%E6%8F%90%E7%A4%BA%E5%AE%B9%E5%99%A8">链接</a>。</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="${ssrRenderStyle({ "--shiki-light": "#383A42", "--shiki-dark": "#abb2bf", "--shiki-light-bg": "#FAFAFA", "--shiki-dark-bg": "#282c34" })}"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#A626A4", "--shiki-dark": "#C678DD" })}">const</span><span style="${ssrRenderStyle({ "--shiki-light": "#986801", "--shiki-dark": "#E5C07B" })}"> a</span><span style="${ssrRenderStyle({ "--shiki-light": "#0184BC", "--shiki-dark": "#56B6C2" })}"> =</span><span style="${ssrRenderStyle({ "--shiki-light": "#986801", "--shiki-dark": "#D19A66" })}"> 1</span><span style="${ssrRenderStyle({ "--shiki-light": "#383A42", "--shiki-dark": "#ABB2BF" })}">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="${ssrRenderStyle({ "counter-reset": "line-number 0" })}"><div class="line-number"></div></div></div></div><div class="hint-container tip"><p class="hint-container-title">自定义标题</p><p>提示容器</p></div><div class="hint-container warning"><p class="hint-container-title">自定义标题</p><p>警告容器</p></div><div class="hint-container caution"><p class="hint-container-title">自定义标题</p><p>危险容器</p></div><details class="hint-container details"><summary>自定义标题</summary><p>详情容器</p></details><ul><li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/stylize/alert.html" target="_blank" rel="noopener noreferrer">GitHub 警示</a></li><li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/stylize/hint.html" target="_blank" rel="noopener noreferrer">提示框</a></li></ul><h4 id="自定义对齐" tabindex="-1"><a class="header-anchor" href="#自定义对齐"><span>自定义对齐</span></a></h4><div style="${ssrRenderStyle({ "text-align": "center" })}"><p>我是居中的</p></div><div style="${ssrRenderStyle({ "text-align": "right" })}"><p>我在右对齐</p></div><ul><li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/stylize/align.html" target="_blank" rel="noopener noreferrer">查看详情</a></li></ul><h4 id="属性支持" tabindex="-1"><a class="header-anchor" href="#属性支持"><span>属性支持</span></a></h4><p>一个拥有 ID 的 <strong id="word">单词</strong>。</p><ul><li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/stylize/attrs.html" target="_blank" rel="noopener noreferrer">查看详情</a></li></ul><h4 id="标记" tabindex="-1"><a class="header-anchor" href="#标记"><span>标记</span></a></h4><p>你可以标记 <mark>重要的内容</mark> 。</p><ul><li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/stylize/mark.html" target="_blank" rel="noopener noreferrer">查看详情</a></li></ul><h4 id="剧透" tabindex="-1"><a class="header-anchor" href="#剧透"><span>剧透</span></a></h4><p>VuePress Theme Hope <span class="spoiler" tabindex="-1">十分强大</span>.</p><ul><li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/stylize/spoiler.html" target="_blank" rel="noopener noreferrer">查看详情</a></li></ul><h4 id="样式化" tabindex="-1"><a class="header-anchor" href="#样式化"><span>样式化</span></a></h4><p>向 Mr.Hope 捐赠一杯咖啡。 `);
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
  _push(`</p><ul><li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/stylize/stylize.html" target="_blank" rel="noopener noreferrer">查看详情</a></li></ul><h4 id="图表" tabindex="-1"><a class="header-anchor" href="#图表"><span>图表</span></a></h4>`);
  _push(ssrRenderComponent(_component_ChartJS, {
    id: "chart-296",
    config: "eJxtULsOgjAU3fmKppMmaETDoKufYRgKNIRYKYGaSAyLg5sjk6O7cfWHMP6F95byMGFp2vO6t+dsEUJVkXK6ITQPmFI8ozaCIVMMQBSYV85VDshOI8QwmhXM5wIT6urxubzr6lXfnt/7VScZjclr3TqB0BNAM2dhE1rAbUHK3tHxLeuM053bHXfP3Zafg6ITeIPdfBbso0wek3ArhczwJ1nkT5YuWNdrmzir5ZQaeZPgwamnUZmqWCZYjKkKWhS8fwOCawzaausWccJZ07ZhUpnHmIasL5WSh/+peJZWaf0ALadm1Q==",
    title: "%E4%B8%80%E4%B8%AA%E6%95%A3%E7%82%B9%E5%9B%BE%E6%A1%88%E4%BE%8B",
    type: "json"
  }, null, _parent));
  _push(`<ul><li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/chart/chartjs.html" target="_blank" rel="noopener noreferrer">查看详情</a></li></ul><h4 id="echarts" tabindex="-1"><a class="header-anchor" href="#echarts"><span>ECharts</span></a></h4>`);
  _push(ssrRenderComponent(_component_ECharts, {
    id: "echarts-309",
    config: "eJyr5lJQUKpwrMgsVrJSAHGA3JLKglQgTyk5sSQ1Pb+oUkkHIp6SWJIIFI9W8s3PU9JRUAopTQVR4akpYF5GKYhyK8oEUcGJJWCqNE8pFqi7FmSEUiV2e8oSc4AmwVUVpxZlpoKURYOVQRQjWW9oaqCjYGQMIoxMgIShhY6CobEpkDAxB3LNDGIh7kWyISczD2wB0AogGctVywUA9j06jQ==",
    title: "%E4%B8%80%E4%B8%AA%E6%8A%98%E7%BA%BF%E5%9B%BE%E6%A1%88%E4%BE%8B"
  }, null, _parent));
  _push(`<ul><li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/chart/echarts.html" target="_blank" rel="noopener noreferrer">查看详情</a></li></ul><h4 id="流程图" tabindex="-1"><a class="header-anchor" href="#流程图"><span>流程图</span></a></h4>`);
  _push(ssrRenderComponent(_component_FlowChart, {
    id: "flowchart-322",
    code: "eJxLzs9LsbUDkZklmfl5VgrPZqx/OmHZs87lLxb2PJvc+2TvHHuugqL85NTiYlu7/ILUokSoOrAcV6qtXWpeipXC892Tn82dz8UFMkmjMrVYU9cOqkvXLhUimpcPFEzlAgD7FTFE",
    preset: "vue"
  }, null, _parent));
  _push(`<ul><li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/chart/flowchart.html" target="_blank" rel="noopener noreferrer">查看详情</a></li></ul><h4 id="markmap" tabindex="-1"><a class="header-anchor" href="#markmap"><span>MarkMap</span></a></h4>`);
  _push(ssrRenderComponent(_component_MarkMap, {
    id: "markmap-333",
    content: "eJydj81OwkAQx+99ikk0UZssJMQTWo9qoncPoumHG0BbF9tKiASCQQWJYgwRlaCCQkL8QI58iLxMt7Rv4ULgBbzszsz/N/+ZQQhxmqQfaFLEzwEoRCX6qo7xCd7EUaz6wceNEG4GJhQLZ8At/Nr5OschWA6ZZsTwe70T2bNveIge9K4wbXstbK4fyzvzUyYYNkPHskch2hSf/gtjW5p7cdL9ke1kAAKepz9dp5XmeUgmabbiPtaG3UEyCbxdLFv9Ag+C4H48WN2mIDCc1kpO9YodYhcz9OueVUSW04tzq/c2rJyKHGIagCiK+8Y4UsihQVTsUUlwfk4hexhklSgHcwtLU5B5bEgmjrEcwWwMBIgjGQIRDQLGkW7G5V0fWpSUBARIFOvgkxKzrGWYb9Fyw87eWr1PevNt9epuquQMMiBqUmwrvGeGRHBTl26142Teaa5hX7+yRd2nZ9pu//O9GwxLZ+xU2uxwf2vm1oQ="
  }, null, _parent));
  _push(`<ul><li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/chart/markmap.html" target="_blank" rel="noopener noreferrer">查看详情</a></li></ul><h4 id="mermaid" tabindex="-1"><a class="header-anchor" href="#mermaid"><span>Mermaid</span></a></h4>`);
  _push(ssrRenderComponent(_component_Mermaid, {
    id: "mermaid-344",
    code: "eJzT1dXlKsksyUm1UnDLyS9PzkgsKuECCabBeAohTlwKQJBsqKtrl2gEZheXJqUXJRZkKOTnpYIFEpEkU/NSUBWVlOeDBZJAipJwKcooSoWYBbYoGVUZ0B4FoCjcKLBqVJHyfDAfqBEAuj83LQ=="
  }, null, _parent));
  _push(`<ul><li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/chart/mermaid.html" target="_blank" rel="noopener noreferrer">查看详情</a></li></ul><h4 id="plantuml" tabindex="-1"><a class="header-anchor" href="#plantuml"><span>PlantUML</span></a></h4><p>@startuml<br> Alice -&gt; Bob: 认证请求</p><p>alt 成功情况</p><pre><code>Bob -&gt; Alice: 认证接受
</code></pre><p>else 某种失败情况</p><pre><code>Bob -&gt; Alice: 认证失败
group 我自己的标签
Alice -&gt; Log : 开始记录攻击日志
    loop 1000次
        Alice -&gt; Bob: DNS 攻击
    end
Alice -&gt; Log : 结束记录攻击日志
end
</code></pre><p>else 另一种失败</p><pre><code>Bob -&gt; Alice: 请重复
</code></pre><p>end<br> @enduml</p><ul><li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/chart/plantuml.html" target="_blank" rel="noopener noreferrer">View Detail</a></li></ul><h4 id="代码块" tabindex="-1"><a class="header-anchor" href="#代码块"><span>代码块</span></a></h4>`);
  _push(ssrRenderComponent(_component_CodeTabs, {
    id: "383",
    data: [{ "id": "pnpm" }, { "id": "yarn" }, { "id": "npm" }],
    active: 2
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
  _push(`<ul><li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/code/code-tabs.html" target="_blank" rel="noopener noreferrer">查看详情</a></li></ul><h4 id="代码演示" tabindex="-1"><a class="header-anchor" href="#代码演示"><span>代码演示</span></a></h4>`);
  _push(ssrRenderComponent(_component_CodeDemo, {
    id: "code-demo-404",
    type: "normal",
    title: "%E4%B8%80%E4%B8%AA%E6%99%AE%E9%80%9A%20Demo",
    code: "eJwljrGKAjEQhl9lbq5REJdrvZju4IorDhSrNEsysKvZZE2ygoiPopXgK4j4Olv4Fk7cZor5v3++OWCVGoszFNWXXHX0HyhGWFbUEPz6lkTBe+VEK0VsSwe1mSvcUdgrlM/Tub/dRJED2T/u/eX6IYqWcZzgOvJR43XXkEvTbceVBVnSyYeRws/hxHhaGvOzY+Kvjokc5UzbWm8UTmA0hrmEg3IApaWQOBuUg4vr38od82Cfjln4/vHd0N76MINAJkOMHF8ck1dC"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="${ssrRenderStyle({ "--shiki-light": "#383A42", "--shiki-dark": "#abb2bf", "--shiki-light-bg": "#FAFAFA", "--shiki-dark-bg": "#282c34" })}"${_scopeId}><pre class="shiki shiki-themes one-light one-dark-pro vp-code"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#383A42", "--shiki-dark": "#ABB2BF" })}"${_scopeId}>&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#E45649", "--shiki-dark": "#E06C75" })}"${_scopeId}>h1</span><span style="${ssrRenderStyle({ "--shiki-light": "#383A42", "--shiki-dark": "#ABB2BF" })}"${_scopeId}>&gt;VuePress Theme Hope&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#E45649", "--shiki-dark": "#E06C75" })}"${_scopeId}>h1</span><span style="${ssrRenderStyle({ "--shiki-light": "#383A42", "--shiki-dark": "#ABB2BF" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#383A42", "--shiki-dark": "#ABB2BF" })}"${_scopeId}>&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#E45649", "--shiki-dark": "#E06C75" })}"${_scopeId}>p</span><span style="${ssrRenderStyle({ "--shiki-light": "#383A42", "--shiki-dark": "#ABB2BF" })}"${_scopeId}>&gt;&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#E45649", "--shiki-dark": "#E06C75" })}"${_scopeId}>span</span><span style="${ssrRenderStyle({ "--shiki-light": "#986801", "--shiki-dark": "#D19A66" })}"${_scopeId}> id</span><span style="${ssrRenderStyle({ "--shiki-light": "#383A42", "--shiki-dark": "#ABB2BF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#50A14F", "--shiki-dark": "#98C379" })}"${_scopeId}>&quot;very&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#383A42", "--shiki-dark": "#ABB2BF" })}"${_scopeId}>&gt;非常&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#E45649", "--shiki-dark": "#E06C75" })}"${_scopeId}>span</span><span style="${ssrRenderStyle({ "--shiki-light": "#383A42", "--shiki-dark": "#ABB2BF" })}"${_scopeId}>&gt;强大!&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#E45649", "--shiki-dark": "#E06C75" })}"${_scopeId}>p</span><span style="${ssrRenderStyle({ "--shiki-light": "#383A42", "--shiki-dark": "#ABB2BF" })}"${_scopeId}>&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="${ssrRenderStyle({ "counter-reset": "line-number 0" })}"${_scopeId}><div class="line-number"${_scopeId}></div><div class="line-number"${_scopeId}></div></div></div><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="${ssrRenderStyle({ "--shiki-light": "#383A42", "--shiki-dark": "#abb2bf", "--shiki-light-bg": "#FAFAFA", "--shiki-dark-bg": "#282c34" })}"${_scopeId}><pre class="shiki shiki-themes one-light one-dark-pro vp-code"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#383A42", "--shiki-dark": "#E5C07B" })}"${_scopeId}>document</span><span style="${ssrRenderStyle({ "--shiki-light": "#383A42", "--shiki-dark": "#ABB2BF" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-light": "#4078F2", "--shiki-dark": "#61AFEF" })}"${_scopeId}>querySelector</span><span style="${ssrRenderStyle({ "--shiki-light": "#383A42", "--shiki-dark": "#ABB2BF" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "--shiki-light": "#50A14F", "--shiki-dark": "#98C379" })}"${_scopeId}>&quot;#very&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#383A42", "--shiki-dark": "#ABB2BF" })}"${_scopeId}>).</span><span style="${ssrRenderStyle({ "--shiki-light": "#4078F2", "--shiki-dark": "#61AFEF" })}"${_scopeId}>addEventListener</span><span style="${ssrRenderStyle({ "--shiki-light": "#383A42", "--shiki-dark": "#ABB2BF" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "--shiki-light": "#50A14F", "--shiki-dark": "#98C379" })}"${_scopeId}>&quot;click&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#383A42", "--shiki-dark": "#ABB2BF" })}"${_scopeId}>, () </span><span style="${ssrRenderStyle({ "--shiki-light": "#A626A4", "--shiki-dark": "#C678DD" })}"${_scopeId}>=&gt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#383A42", "--shiki-dark": "#ABB2BF" })}"${_scopeId}> {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#4078F2", "--shiki-dark": "#61AFEF" })}"${_scopeId}>  alert</span><span style="${ssrRenderStyle({ "--shiki-light": "#383A42", "--shiki-dark": "#ABB2BF" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "--shiki-light": "#50A14F", "--shiki-dark": "#98C379" })}"${_scopeId}>&quot;非常强大&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#383A42", "--shiki-dark": "#ABB2BF" })}"${_scopeId}>);</span></span>
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
                  createVNode("span", { style: { "--shiki-light": "#383A42", "--shiki-dark": "#ABB2BF" } }, "><"),
                  createVNode("span", { style: { "--shiki-light": "#E45649", "--shiki-dark": "#E06C75" } }, "span"),
                  createVNode("span", { style: { "--shiki-light": "#986801", "--shiki-dark": "#D19A66" } }, " id"),
                  createVNode("span", { style: { "--shiki-light": "#383A42", "--shiki-dark": "#ABB2BF" } }, "="),
                  createVNode("span", { style: { "--shiki-light": "#50A14F", "--shiki-dark": "#98C379" } }, '"very"'),
                  createVNode("span", { style: { "--shiki-light": "#383A42", "--shiki-dark": "#ABB2BF" } }, ">非常</"),
                  createVNode("span", { style: { "--shiki-light": "#E45649", "--shiki-dark": "#E06C75" } }, "span"),
                  createVNode("span", { style: { "--shiki-light": "#383A42", "--shiki-dark": "#ABB2BF" } }, ">强大!</"),
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
                  createVNode("span", { style: { "--shiki-light": "#50A14F", "--shiki-dark": "#98C379" } }, '"非常强大"'),
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
  _push(`<ul><li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/code/demo.html" target="_blank" rel="noopener noreferrer">查看详情</a></li></ul><h4 id="交互演示" tabindex="-1"><a class="header-anchor" href="#交互演示"><span>交互演示</span></a></h4>`);
  _push(ssrRenderComponent(_component_Playground, {
    title: "UnoCSS%20%E7%A4%BA%E4%BE%8B",
    link: "https%3A%2F%2Funocss.dev%2Fplay%2F%3Fhtml%3DDwEwlgbgBAxgNgQwM5ILwCIBmcCmAPKbfAWhgHs4oAXfK0nAOxoCcoALYzAVzkoCsuSKmEwBPekxzN0APgBQUKKEixEKDDTx1mOELIAqAUQDK%2BwmVYgcmBDypQADjqQ4qwAPTgI8xcujxkNHRNOgASTBBSCgsDEzNMC1hBKjIAW1gUDy95LMh5IA%26config%3DJYWwDg9gTgLgBAbzgEwKYDNgDtUGEJaYDmANHGFKgM6owCqWEcAvnOlBCHAEQCujAYypVuAbgBQ41AA9IsFBgCGvADbw0mHPkLAiACgTi45SjRhUAXHADaFarQYQ9ASgC6Jcc2cSgA%26css%3DFwJw9mAuAEDeBQ1oFpkDMAmyDGYA2YIw0A5iAKbkB2A3PAL7xA"
  }, null, _parent));
  _push(`<ul><li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/code/playground.html" target="_blank" rel="noopener noreferrer">查看详情</a></li></ul><h4 id="kotlin-交互演示" tabindex="-1"><a class="header-anchor" href="#kotlin-交互演示"><span>Kotlin 交互演示</span></a></h4>`);
  _push(ssrRenderComponent(_component_KotlinPlayground, {
    title: "Simple%20Playground",
    key: "67e7f70a",
    settings: "%7B%7D",
    files: "eJw9zDELwjAUBOC/cmRKoRRcg4ri5OxoHB6phkDyKi+xUMT/bkLFG++476pcpJxxmriQK3qmiDAanLn0mElwTxSiwaVIYN9Ztvx4MWrJmsRng6MILdt133d4W0ZNc9xqYvfXNz2sSiTLwTd2cFOyqqLt8axAiax/ryGMdfhYVrcvD2o3zg=="
  }, null, _parent));
  _push(`<ul><li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/code/kotlin-playground.html" target="_blank" rel="noopener noreferrer">查看详情</a></li></ul><h4 id="sandpack-交互演示" tabindex="-1"><a class="header-anchor" href="#sandpack-交互演示"><span>Sandpack 交互演示</span></a></h4>`);
  _push(ssrRenderComponent(_component_SandPack, {
    title: "Vue%20%E7%A4%BA%E4%BE%8B",
    template: "vue",
    files: "eJxNjD0OwjAMRq9iPMEAESuESmyMHMBL1aalUv6UOJVQlLtjysL4/D2/iiqnQd1jPK3F4AV1HtISGbLhEjvyi4shMVRIZoIGUwoOCMUlvJInPwSfGVye4fZV9oQPY22Ap+3fcwrFjzvCg6ha/crSFGDjou3ZCAHo17mrdYu0ppXQdl18LAzr0YXR2Buh7ISgZNTq7x/bB3CyQ8s=",
    options: "eJyrrgUAAXUA+Q==",
    customSetup: "eJyrrgUAAXUA+Q=="
  }, null, _parent));
  _push(`<ul><li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/code/sandpack.html" target="_blank" rel="noopener noreferrer">查看详情</a></li></ul><h4 id="vue-交互演示" tabindex="-1"><a class="header-anchor" href="#vue-交互演示"><span>Vue 交互演示</span></a></h4>`);
  _push(ssrRenderComponent(_component_VuePlayground, {
    title: "Vue%20%E4%BA%A4%E4%BA%92%E6%BC%94%E7%A4%BA",
    key: "b594bf02",
    settings: "%7B%7D",
    files: "eyJBcHAudnVlIjoiPHNjcmlwdCBzZXR1cD5cbmltcG9ydCB7IHJlZiB9IGZyb20gXCJ2dWVcIjtcblxuY29uc3QgbXNnID0gcmVmKFwiSGVsbG8gV29ybGQhXCIpO1xuPC9zY3JpcHQ%2BXG5cbjx0ZW1wbGF0ZT5cbiAgPGgxPnt7IG1zZyB9fTwvaDE%2BXG4gIDxpbnB1dCB2LW1vZGVsPVwibXNnXCIgLz5cbjwvdGVtcGxhdGU%2BXG4ifQ%3D%3D"
  }, null, _parent));
  _push(`<ul><li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/code/vue-playground.html" target="_blank" rel="noopener noreferrer">查看详情</a></li></ul><hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="footnote1" class="footnote-item"><p>这是脚注内容 <a href="#footnote-ref1" class="footnote-backref">↩︎</a></p></li></ol></section></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/zh/demo/markdown.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const markdown_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "markdown.html.vue"]]);
const data = JSON.parse('{"path":"/zh/demo/markdown.html","title":"Markdown 展示","lang":"zh-CN","frontmatter":{"title":"Markdown 展示","icon":"fab fa-markdown","order":2,"category":["使用指南"],"tag":["Markdown"],"description":"VuePress 主要从 Markdown 文件生成页面。因此，你可以使用它轻松生成文档或博客站点。 你需要创建并编写 Markdown，以便 VuePress 可以根据文件结构将它们转换为不同的页面。","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://theme-hope-blog-demo.vuejs.press/demo/markdown.html"}],["meta",{"property":"og:url","content":"https://theme-hope-blog-demo.vuejs.press/zh/demo/markdown.html"}],["meta",{"property":"og:site_name","content":"博客演示"}],["meta",{"property":"og:title","content":"Markdown 展示"}],["meta",{"property":"og:description","content":"VuePress 主要从 Markdown 文件生成页面。因此，你可以使用它轻松生成文档或博客站点。 你需要创建并编写 Markdown，以便 VuePress 可以根据文件结构将它们转换为不同的页面。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-05-28T04:47:23.000Z"}],["meta",{"property":"article:author","content":"Mr.Hope"}],["meta",{"property":"article:tag","content":"Markdown"}],["meta",{"property":"article:modified_time","content":"2024-05-28T04:47:23.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Markdown 展示\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-28T04:47:23.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"Markdown 介绍","slug":"markdown-介绍","link":"#markdown-介绍","children":[]},{"level":2,"title":"Markdown 配置","slug":"markdown-配置","link":"#markdown-配置","children":[]},{"level":2,"title":"Markdown 扩展","slug":"markdown-扩展","link":"#markdown-扩展","children":[{"level":3,"title":"VuePress 扩展","slug":"vuepress-扩展","link":"#vuepress-扩展","children":[]},{"level":3,"title":"主题扩展","slug":"主题扩展","link":"#主题扩展","children":[]},{"level":3,"title":"图片增强","slug":"图片增强","link":"#图片增强","children":[]}]}],"git":{"createdTime":1622991562000,"updatedTime":1716871643000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":22},{"name":"Mister-Hope","email":"mister-hope@outlook.com","commits":2}]},"readingTime":{"minutes":4.58,"words":1374},"filePathRelative":"zh/demo/markdown.md","localizedDate":"2021年6月6日","excerpt":"<p>VuePress 主要从 Markdown 文件生成页面。因此，你可以使用它轻松生成文档或博客站点。</p>\\n<p>你需要创建并编写 Markdown，以便 VuePress 可以根据文件结构将它们转换为不同的页面。</p>\\n","autoDesc":true}');
export {
  markdown_html as comp,
  data
};
