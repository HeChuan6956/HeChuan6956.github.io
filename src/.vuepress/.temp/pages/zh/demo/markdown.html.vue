<template><div><p>VuePress 主要从 Markdown 文件生成页面。因此，你可以使用它轻松生成文档或博客站点。</p>
<p>你需要创建并编写 Markdown，以便 VuePress 可以根据文件结构将它们转换为不同的页面。</p>
<!-- more -->
<h2 id="markdown-介绍" tabindex="-1"><a class="header-anchor" href="#markdown-介绍"><span>Markdown 介绍</span></a></h2>
<p>如果你是一个新手，还不会编写 Markdown，请先阅读 <a href="https://theme-hope.vuejs.press/zh/cookbook/markdown/" target="_blank" rel="noopener noreferrer">Markdown 介绍</a> 和 <a href="https://theme-hope.vuejs.press/zh/cookbook/markdown/demo.html" target="_blank" rel="noopener noreferrer">Markdown 演示</a>。</p>
<h2 id="markdown-配置" tabindex="-1"><a class="header-anchor" href="#markdown-配置"><span>Markdown 配置</span></a></h2>
<p>VuePress 通过 Frontmatter 为每个 Markdown 页面引入配置。</p>
<div class="hint-container important">
<p class="hint-container-title">Frontmatter</p>
<p>Frontmatter 是 VuePress 中很重要的一个概念，请阅读 <a href="https://theme-hope.vuejs.press/zh/cookbook/vuepress/page.html#front-matter" target="_blank" rel="noopener noreferrer">Frontmatter 介绍</a> 了解详情。</p>
</div>
<h2 id="markdown-扩展" tabindex="-1"><a class="header-anchor" href="#markdown-扩展"><span>Markdown 扩展</span></a></h2>
<p>VuePress 会使用 <a href="https://github.com/markdown-it/markdown-it" target="_blank" rel="noopener noreferrer">markdown-it</a> 来解析 Markdown 内容，因此可以借助于 markdown-it 插件来实现 <a href="https://github.com/markdown-it/markdown-it#syntax-extensions" target="_blank" rel="noopener noreferrer">语法扩展</a> 。</p>
<h3 id="vuepress-扩展" tabindex="-1"><a class="header-anchor" href="#vuepress-扩展"><span>VuePress 扩展</span></a></h3>
<p>为了丰富文档写作，VuePress 对 Markdown 语法进行了扩展。</p>
<p>关于这些扩展，请阅读 <a href="https://theme-hope.vuejs.press/zh/cookbook/vuepress/markdown.html" target="_blank" rel="noopener noreferrer">VuePress 中的 Markdown 扩展</a>。</p>
<h3 id="主题扩展" tabindex="-1"><a class="header-anchor" href="#主题扩展"><span>主题扩展</span></a></h3>
<p>通过 <a href="https://plugin-md-enhance.vuejs.press/zh/" target="_blank" rel="noopener noreferrer"><code v-pre>vuepress-plugin-md-enhance</code></a>，主题扩展了更多 Markdown 语法，提供更加丰富的写作功能。</p>
<h4 id="选项卡" tabindex="-1"><a class="header-anchor" href="#选项卡"><span>选项卡</span></a></h4>
<Tabs id="48" :data='[{"id":"apple"},{"id":"banana"},{"id":"orange"}]' tab-id="fruit">
<template #title0="{ value, isActive }">apple</template>
<template #title1="{ value, isActive }">banana</template>
<template #title2="{ value, isActive }">orange</template>
<template #tab0="{ value, isActive }">
<p>Apple</p>
</template>
<template #tab1="{ value, isActive }">
<p>Banana</p>
</template>
<template #tab2="{ value, isActive }">
<p>Orange</p>
</template>
</Tabs>
<ul>
<li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/content/tabs.html" target="_blank" rel="noopener noreferrer">查看详情</a></li>
</ul>
<h4 id="脚注" tabindex="-1"><a class="header-anchor" href="#脚注"><span>脚注</span></a></h4>
<p>此文字有脚注<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1" /></sup>.</p>
<ul>
<li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/content/footnote.html" target="_blank" rel="noopener noreferrer">查看详情</a></li>
</ul>
<h4 id="导入文件" tabindex="-1"><a class="header-anchor" href="#导入文件"><span>导入文件</span></a></h4>
<ul>
<li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/content/include.html" target="_blank" rel="noopener noreferrer">查看详情</a></li>
</ul>
<h4 id="幻灯片" tabindex="-1"><a class="header-anchor" href="#幻灯片"><span>幻灯片</span></a></h4>
<RevealJs id="revealjs-100" code="eJzjUlZWeLpz9/PG9c872xUMubie7Gh4smPVszmdz6a1P107/emkHoXol5P3PetbGquRUVJSUGylr5+bWVySWqSbkV+Qqpecn6up8HxWy7N1W19M2MvFpaury4VqqBFQUOHlwp3PZ68DWgBngoQx1BrrAZ2QkJCQVcyVnJ9XXKKQqGCrYGgNEgIpx1ANNERFhctLI6YkI7UkMd5AB8ow1ATqiykuzY2vzrQ1qAUpAgAALl2Z" theme="auto"></RevealJs><ul>
<li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/content/revealjs.html" target="_blank" rel="noopener noreferrer">查看详情</a></li>
</ul>
<!-- markdownlint-disable MD001 -->
<h4 id="tex-语法" tabindex="-1"><a class="header-anchor" href="#tex-语法"><span>TeX 语法</span></a></h4>
<p v-pre class='katex-block'><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mfrac><msup><mi mathvariant="normal">∂</mi><mi>r</mi></msup><mrow><mi mathvariant="normal">∂</mi><msup><mi>ω</mi><mi>r</mi></msup></mrow></mfrac><mrow><mo fence="true">(</mo><mfrac><msup><mi>y</mi><mi>ω</mi></msup><mi>ω</mi></mfrac><mo fence="true">)</mo></mrow><mo>=</mo><mrow><mo fence="true">(</mo><mfrac><msup><mi>y</mi><mi>ω</mi></msup><mi>ω</mi></mfrac><mo fence="true">)</mo></mrow><mrow><mo fence="true">{</mo><mo stretchy="false">(</mo><mi>log</mi><mo>⁡</mo><mi>y</mi><msup><mo stretchy="false">)</mo><mi>r</mi></msup><mo>+</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>r</mi></munderover><mfrac><mrow><mo stretchy="false">(</mo><mo>−</mo><mn>1</mn><msup><mo stretchy="false">)</mo><mi>i</mi></msup><mi>r</mi><mo>⋯</mo><mo stretchy="false">(</mo><mi>r</mi><mo>−</mo><mi>i</mi><mo>+</mo><mn>1</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mi>log</mi><mo>⁡</mo><mi>y</mi><msup><mo stretchy="false">)</mo><mrow><mi>r</mi><mo>−</mo><mi>i</mi></mrow></msup></mrow><msup><mi>ω</mi><mi>i</mi></msup></mfrac><mo fence="true">}</mo></mrow></mrow><annotation encoding="application/x-tex">
\frac {\partial^r} {\partial \omega^r} \left(\frac {y^{\omega}} {\omega}\right)
= \left(\frac {y^{\omega}} {\omega}\right) \left\{(\log y)^r + \sum_{i=1}^r \frac {(-1)^i r \cdots (r-i+1) (\log y)^{r-i}} {\omega^i} \right\}
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:2.4em;vertical-align:-0.95em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.3714em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord" style="margin-right:0.05556em;">∂</span><span class="mord"><span class="mord mathnormal" style="margin-right:0.03588em;">ω</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.5904em;"><span style="top:-2.989em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.02778em;">r</span></span></span></span></span></span></span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord"><span class="mord" style="margin-right:0.05556em;">∂</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.6644em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.02778em;">r</span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.686em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="minner"><span class="mopen delimcenter" style="top:0em;"><span class="delimsizing size3">(</span></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.3414em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.03588em;">ω</span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord"><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.6644em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.03588em;">ω</span></span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.686em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mclose delimcenter" style="top:0em;"><span class="delimsizing size3">)</span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:3.0277em;vertical-align:-1.2777em;"></span><span class="minner"><span class="mopen delimcenter" style="top:0em;"><span class="delimsizing size3">(</span></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.3414em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.03588em;">ω</span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord"><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.6644em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.03588em;">ω</span></span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.686em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mclose delimcenter" style="top:0em;"><span class="delimsizing size3">)</span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="minner"><span class="mopen delimcenter" style="top:0em;"><span class="delimsizing size4">{</span></span><span class="mopen">(</span><span class="mop">lo<span style="margin-right:0.01389em;">g</span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mclose"><span class="mclose">)</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.7144em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.02778em;">r</span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mop op-limits"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.6514em;"><span style="top:-1.8723em;margin-left:0em;"><span class="pstrut" style="height:3.05em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">i</span><span class="mrel mtight">=</span><span class="mord mtight">1</span></span></span></span><span style="top:-3.05em;"><span class="pstrut" style="height:3.05em;"></span><span><span class="mop op-symbol large-op">∑</span></span></span><span style="top:-4.3em;margin-left:0em;"><span class="pstrut" style="height:3.05em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.02778em;">r</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:1.2777em;"><span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.5017em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord"><span class="mord mathnormal" style="margin-right:0.03588em;">ω</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.7507em;"><span style="top:-2.989em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">i</span></span></span></span></span></span></span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mopen">(</span><span class="mord">−</span><span class="mord">1</span><span class="mclose"><span class="mclose">)</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8247em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">i</span></span></span></span></span></span></span></span><span class="mord mathnormal" style="margin-right:0.02778em;">r</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="minner">⋯</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.02778em;">r</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord mathnormal">i</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord">1</span><span class="mclose">)</span><span class="mopen">(</span><span class="mop">lo<span style="margin-right:0.01389em;">g</span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mclose"><span class="mclose">)</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8247em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.02778em;">r</span><span class="mbin mtight">−</span><span class="mord mathnormal mtight">i</span></span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.686em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mclose delimcenter" style="top:0em;"><span class="delimsizing size4">}</span></span></span></span></span></span></span></p>
<ul>
<li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/grammar/tex.html" target="_blank" rel="noopener noreferrer">查看详情</a></li>
</ul>
<h4 id="任务列表" tabindex="-1"><a class="header-anchor" href="#任务列表"><span>任务列表</span></a></h4>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> 计划 1</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> 计划 2</label></li>
</ul>
<p><a href="https://theme-hope.vuejs.press/zh/guide/markdown/grammar/tasklist.html" target="_blank" rel="noopener noreferrer">查看详情</a></p>
<h3 id="图片增强" tabindex="-1"><a class="header-anchor" href="#图片增强"><span>图片增强</span></a></h3>
<p>支持为图片设置颜色模式和大小。</p>
<ul>
<li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/grammar/image.html" target="_blank" rel="noopener noreferrer">查看详情</a></li>
</ul>
<h4 id="上下角标" tabindex="-1"><a class="header-anchor" href="#上下角标"><span>上下角标</span></a></h4>
<p>19<sup>th</sup> H<sub>2</sub>O</p>
<ul>
<li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/grammar/sup-sub.html" target="_blank" rel="noopener noreferrer">查看详情</a></li>
</ul>
<h4 id="组件" tabindex="-1"><a class="header-anchor" href="#组件"><span>组件</span></a></h4>
<VPCard v-bind='{"title":"Mr.Hope","desc":"Where there is light, there is hope","logo":"https://mister-hope.com/logo.svg","link":"https://mister-hope.com","background":"rgba(253, 230, 138, 0.15)"}' /><ul>
<li><a href="https://theme-hope.vuejs.press/zh/guide/component/grammar.html" target="_blank" rel="noopener noreferrer">查看详情</a></li>
</ul>
<h4 id="提示容器" tabindex="-1"><a class="header-anchor" href="#提示容器"><span>提示容器</span></a></h4>
<div v-pre>
<p>安全的在 Markdown 中使用 {{ variable }}。</p>
</div>
<div class="hint-container info">
<p class="hint-container-title">自定义标题</p>
<p>信息容器，包含 <code v-pre>代码</code> 与 <a href="#%E6%8F%90%E7%A4%BA%E5%AE%B9%E5%99%A8">链接</a>。</p>
<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B"> a</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></div>
<div class="hint-container tip">
<p class="hint-container-title">自定义标题</p>
<p>提示容器</p>
</div>
<div class="hint-container warning">
<p class="hint-container-title">自定义标题</p>
<p>警告容器</p>
</div>
<div class="hint-container caution">
<p class="hint-container-title">自定义标题</p>
<p>危险容器</p>
</div>
<details class="hint-container details"><summary>自定义标题</summary>
<p>详情容器</p>
</details>
<ul>
<li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/stylize/alert.html" target="_blank" rel="noopener noreferrer">GitHub 警示</a></li>
<li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/stylize/hint.html" target="_blank" rel="noopener noreferrer">提示框</a></li>
</ul>
<h4 id="自定义对齐" tabindex="-1"><a class="header-anchor" href="#自定义对齐"><span>自定义对齐</span></a></h4>
<div style="text-align:center">
<p>我是居中的</p>
</div>
<div style="text-align:right">
<p>我在右对齐</p>
</div>
<ul>
<li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/stylize/align.html" target="_blank" rel="noopener noreferrer">查看详情</a></li>
</ul>
<h4 id="属性支持" tabindex="-1"><a class="header-anchor" href="#属性支持"><span>属性支持</span></a></h4>
<p>一个拥有 ID 的 <strong id="word">单词</strong>。</p>
<ul>
<li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/stylize/attrs.html" target="_blank" rel="noopener noreferrer">查看详情</a></li>
</ul>
<h4 id="标记" tabindex="-1"><a class="header-anchor" href="#标记"><span>标记</span></a></h4>
<p>你可以标记 <mark>重要的内容</mark> 。</p>
<ul>
<li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/stylize/mark.html" target="_blank" rel="noopener noreferrer">查看详情</a></li>
</ul>
<h4 id="剧透" tabindex="-1"><a class="header-anchor" href="#剧透"><span>剧透</span></a></h4>
<p>VuePress Theme Hope <span class="spoiler" tabindex="-1">十分强大</span>.</p>
<ul>
<li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/stylize/spoiler.html" target="_blank" rel="noopener noreferrer">查看详情</a></li>
</ul>
<h4 id="样式化" tabindex="-1"><a class="header-anchor" href="#样式化"><span>样式化</span></a></h4>
<p>向 Mr.Hope 捐赠一杯咖啡。 <Badge type="tip">Recommended</Badge></p>
<ul>
<li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/stylize/stylize.html" target="_blank" rel="noopener noreferrer">查看详情</a></li>
</ul>
<h4 id="图表" tabindex="-1"><a class="header-anchor" href="#图表"><span>图表</span></a></h4>
<ChartJS id="chart-296" config="eJxtULsOgjAU3fmKppMmaETDoKufYRgKNIRYKYGaSAyLg5sjk6O7cfWHMP6F95byMGFp2vO6t+dsEUJVkXK6ITQPmFI8ozaCIVMMQBSYV85VDshOI8QwmhXM5wIT6urxubzr6lXfnt/7VScZjclr3TqB0BNAM2dhE1rAbUHK3tHxLeuM053bHXfP3Zafg6ITeIPdfBbso0wek3ArhczwJ1nkT5YuWNdrmzir5ZQaeZPgwamnUZmqWCZYjKkKWhS8fwOCawzaausWccJZ07ZhUpnHmIasL5WSh/+peJZWaf0ALadm1Q==" title="%E4%B8%80%E4%B8%AA%E6%95%A3%E7%82%B9%E5%9B%BE%E6%A1%88%E4%BE%8B" type="json"></ChartJS><ul>
<li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/chart/chartjs.html" target="_blank" rel="noopener noreferrer">查看详情</a></li>
</ul>
<h4 id="echarts" tabindex="-1"><a class="header-anchor" href="#echarts"><span>ECharts</span></a></h4>
<ECharts id="echarts-309" config="eJyr5lJQUKpwrMgsVrJSAHGA3JLKglQgTyk5sSQ1Pb+oUkkHIp6SWJIIFI9W8s3PU9JRUAopTQVR4akpYF5GKYhyK8oEUcGJJWCqNE8pFqi7FmSEUiV2e8oSc4AmwVUVpxZlpoKURYOVQRQjWW9oaqCjYGQMIoxMgIShhY6CobEpkDAxB3LNDGIh7kWyISczD2wB0AogGctVywUA9j06jQ==" title="%E4%B8%80%E4%B8%AA%E6%8A%98%E7%BA%BF%E5%9B%BE%E6%A1%88%E4%BE%8B"></ECharts><ul>
<li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/chart/echarts.html" target="_blank" rel="noopener noreferrer">查看详情</a></li>
</ul>
<h4 id="流程图" tabindex="-1"><a class="header-anchor" href="#流程图"><span>流程图</span></a></h4>
<FlowChart id="flowchart-322" code="eJxLzs9LsbUDkZklmfl5VgrPZqx/OmHZs87lLxb2PJvc+2TvHHuugqL85NTiYlu7/ILUokSoOrAcV6qtXWpeipXC892Tn82dz8UFMkmjMrVYU9cOqkvXLhUimpcPFEzlAgD7FTFE" preset="vue"></FlowChart><ul>
<li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/chart/flowchart.html" target="_blank" rel="noopener noreferrer">查看详情</a></li>
</ul>
<h4 id="markmap" tabindex="-1"><a class="header-anchor" href="#markmap"><span>MarkMap</span></a></h4>
<MarkMap id="markmap-333" content="eJydj81OwkAQx+99ikk0UZssJMQTWo9qoncPoumHG0BbF9tKiASCQQWJYgwRlaCCQkL8QI58iLxMt7Rv4ULgBbzszsz/N/+ZQQhxmqQfaFLEzwEoRCX6qo7xCd7EUaz6wceNEG4GJhQLZ8At/Nr5OschWA6ZZsTwe70T2bNveIge9K4wbXstbK4fyzvzUyYYNkPHskch2hSf/gtjW5p7cdL9ke1kAAKepz9dp5XmeUgmabbiPtaG3UEyCbxdLFv9Ag+C4H48WN2mIDCc1kpO9YodYhcz9OueVUSW04tzq/c2rJyKHGIagCiK+8Y4UsihQVTsUUlwfk4hexhklSgHcwtLU5B5bEgmjrEcwWwMBIgjGQIRDQLGkW7G5V0fWpSUBARIFOvgkxKzrGWYb9Fyw87eWr1PevNt9epuquQMMiBqUmwrvGeGRHBTl26142Teaa5hX7+yRd2nZ9pu//O9GwxLZ+xU2uxwf2vm1oQ="></MarkMap><ul>
<li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/chart/markmap.html" target="_blank" rel="noopener noreferrer">查看详情</a></li>
</ul>
<h4 id="mermaid" tabindex="-1"><a class="header-anchor" href="#mermaid"><span>Mermaid</span></a></h4>
<Mermaid id="mermaid-344" code="eJzT1dXlKsksyUm1UnDLyS9PzkgsKuECCabBeAohTlwKQJBsqKtrl2gEZheXJqUXJRZkKOTnpYIFEpEkU/NSUBWVlOeDBZJAipJwKcooSoWYBbYoGVUZ0B4FoCjcKLBqVJHyfDAfqBEAuj83LQ=="></Mermaid><ul>
<li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/chart/mermaid.html" target="_blank" rel="noopener noreferrer">查看详情</a></li>
</ul>
<h4 id="plantuml" tabindex="-1"><a class="header-anchor" href="#plantuml"><span>PlantUML</span></a></h4>
<p>@startuml<br>
Alice -&gt; Bob: 认证请求</p>
<p>alt 成功情况</p>
<pre><code>Bob -&gt; Alice: 认证接受
</code></pre>
<p>else 某种失败情况</p>
<pre><code>Bob -&gt; Alice: 认证失败
group 我自己的标签
Alice -&gt; Log : 开始记录攻击日志
    loop 1000次
        Alice -&gt; Bob: DNS 攻击
    end
Alice -&gt; Log : 结束记录攻击日志
end
</code></pre>
<p>else 另一种失败</p>
<pre><code>Bob -&gt; Alice: 请重复
</code></pre>
<p>end<br>
@enduml</p>
<ul>
<li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/chart/plantuml.html" target="_blank" rel="noopener noreferrer">View Detail</a></li>
</ul>
<h4 id="代码块" tabindex="-1"><a class="header-anchor" href="#代码块"><span>代码块</span></a></h4>
<CodeTabs id="383" :data='[{"id":"pnpm"},{"id":"yarn"},{"id":"npm"}]' :active="2">
<template #title0="{ value, isActive }">pnpm</template>
<template #title1="{ value, isActive }">yarn</template>
<template #title2="{ value, isActive }">npm</template>
<template #tab0="{ value, isActive }">
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">pnpm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> add</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -D</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> vuepress-theme-hope</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">yarn</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> add</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -D</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> vuepress-theme-hope</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template>
<template #tab2="{ value, isActive }">
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">npm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> i</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -D</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> vuepress-theme-hope</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template>
</CodeTabs>
<ul>
<li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/code/code-tabs.html" target="_blank" rel="noopener noreferrer">查看详情</a></li>
</ul>
<h4 id="代码演示" tabindex="-1"><a class="header-anchor" href="#代码演示"><span>代码演示</span></a></h4>
<CodeDemo id="code-demo-404" type="normal" title="%E4%B8%80%E4%B8%AA%E6%99%AE%E9%80%9A%20Demo" code="eJwljrGKAjEQhl9lbq5REJdrvZju4IorDhSrNEsysKvZZE2ygoiPopXgK4j4Olv4Fk7cZor5v3++OWCVGoszFNWXXHX0HyhGWFbUEPz6lkTBe+VEK0VsSwe1mSvcUdgrlM/Tub/dRJED2T/u/eX6IYqWcZzgOvJR43XXkEvTbceVBVnSyYeRws/hxHhaGvOzY+Kvjokc5UzbWm8UTmA0hrmEg3IApaWQOBuUg4vr38od82Cfjln4/vHd0N76MINAJkOMHF8ck1dC">
<div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">h1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>VuePress Theme Hope&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">h1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">span</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"very"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>非常&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">span</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>强大!&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">document</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">querySelector</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"#very"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">).</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">addEventListener</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"click"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, () </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">=></span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  alert</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"非常强大"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">});</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">span</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  color: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">red</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeDemo>
<ul>
<li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/code/demo.html" target="_blank" rel="noopener noreferrer">查看详情</a></li>
</ul>
<h4 id="交互演示" tabindex="-1"><a class="header-anchor" href="#交互演示"><span>交互演示</span></a></h4>
<Playground title="UnoCSS%20%E7%A4%BA%E4%BE%8B" link="https%3A%2F%2Funocss.dev%2Fplay%2F%3Fhtml%3DDwEwlgbgBAxgNgQwM5ILwCIBmcCmAPKbfAWhgHs4oAXfK0nAOxoCcoALYzAVzkoCsuSKmEwBPekxzN0APgBQUKKEixEKDDTx1mOELIAqAUQDK%2BwmVYgcmBDypQADjqQ4qwAPTgI8xcujxkNHRNOgASTBBSCgsDEzNMC1hBKjIAW1gUDy95LMh5IA%26config%3DJYWwDg9gTgLgBAbzgEwKYDNgDtUGEJaYDmANHGFKgM6owCqWEcAvnOlBCHAEQCujAYypVuAbgBQ41AA9IsFBgCGvADbw0mHPkLAiACgTi45SjRhUAXHADaFarQYQ9ASgC6Jcc2cSgA%26css%3DFwJw9mAuAEDeBQ1oFpkDMAmyDGYA2YIw0A5iAKbkB2A3PAL7xA">
</Playground>
<ul>
<li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/code/playground.html" target="_blank" rel="noopener noreferrer">查看详情</a></li>
</ul>
<h4 id="kotlin-交互演示" tabindex="-1"><a class="header-anchor" href="#kotlin-交互演示"><span>Kotlin 交互演示</span></a></h4>
<KotlinPlayground title="Simple%20Playground" key="67e7f70a" settings="%7B%7D" files="eJw9zDELwjAUBOC/cmRKoRRcg4ri5OxoHB6phkDyKi+xUMT/bkLFG++476pcpJxxmriQK3qmiDAanLn0mElwTxSiwaVIYN9Ztvx4MWrJmsRng6MILdt133d4W0ZNc9xqYvfXNz2sSiTLwTd2cFOyqqLt8axAiax/ryGMdfhYVrcvD2o3zg==">
</KotlinPlayground>
<ul>
<li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/code/kotlin-playground.html" target="_blank" rel="noopener noreferrer">查看详情</a></li>
</ul>
<h4 id="sandpack-交互演示" tabindex="-1"><a class="header-anchor" href="#sandpack-交互演示"><span>Sandpack 交互演示</span></a></h4>
<SandPack title="Vue%20%E7%A4%BA%E4%BE%8B" template="vue" files="eJxNjD0OwjAMRq9iPMEAESuESmyMHMBL1aalUv6UOJVQlLtjysL4/D2/iiqnQd1jPK3F4AV1HtISGbLhEjvyi4shMVRIZoIGUwoOCMUlvJInPwSfGVye4fZV9oQPY22Ap+3fcwrFjzvCg6ha/crSFGDjou3ZCAHo17mrdYu0ppXQdl18LAzr0YXR2Buh7ISgZNTq7x/bB3CyQ8s=" options="eJyrrgUAAXUA+Q==" customSetup="eJyrrgUAAXUA+Q==">
</SandPack>
<ul>
<li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/code/sandpack.html" target="_blank" rel="noopener noreferrer">查看详情</a></li>
</ul>
<h4 id="vue-交互演示" tabindex="-1"><a class="header-anchor" href="#vue-交互演示"><span>Vue 交互演示</span></a></h4>
<VuePlayground title="Vue%20%E4%BA%A4%E4%BA%92%E6%BC%94%E7%A4%BA" key="b594bf02" settings="%7B%7D" files="eyJBcHAudnVlIjoiPHNjcmlwdCBzZXR1cD5cbmltcG9ydCB7IHJlZiB9IGZyb20gXCJ2dWVcIjtcblxuY29uc3QgbXNnID0gcmVmKFwiSGVsbG8gV29ybGQhXCIpO1xuPC9zY3JpcHQ%2BXG5cbjx0ZW1wbGF0ZT5cbiAgPGgxPnt7IG1zZyB9fTwvaDE%2BXG4gIDxpbnB1dCB2LW1vZGVsPVwibXNnXCIgLz5cbjwvdGVtcGxhdGU%2BXG4ifQ%3D%3D">
</VuePlayground>
<ul>
<li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/code/vue-playground.html" target="_blank" rel="noopener noreferrer">查看详情</a></li>
</ul>
<hr class="footnotes-sep">
<section class="footnotes">
<ol class="footnotes-list">
<li id="footnote1" class="footnote-item"><p>这是脚注内容 <a href="#footnote-ref1" class="footnote-backref">↩︎</a></p>
</li>
</ol>
</section>
</div></template>


