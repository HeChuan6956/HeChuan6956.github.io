import { defineClientConfig } from "vuepress/client";
import ChartJS from "C:/Users/22068/Desktop/Projject/vuepress-theme-hope/packages/md-enhance/lib/client/components/ChartJS.js";
import CodeTabs from "C:/Users/22068/Desktop/Projject/vuepress-theme-hope/packages/md-enhance/lib/client/components/CodeTabs.js";
import CodeDemo from "C:/Users/22068/Desktop/Projject/vuepress-theme-hope/packages/md-enhance/lib/client/components/CodeDemo.js";
import MdDemo from "C:/Users/22068/Desktop/Projject/vuepress-theme-hope/packages/md-enhance/lib/client/components/MdDemo.js";
import ECharts from "C:/Users/22068/Desktop/Projject/vuepress-theme-hope/packages/md-enhance/lib/client/components/ECharts.js";
import { injectEChartsConfig } from "C:/Users/22068/Desktop/Projject/vuepress-theme-hope/packages/md-enhance/lib/client//index.js";
import "C:/Users/22068/Desktop/Projject/vuepress-theme-hope/packages/md-enhance/lib/client/styles/figure.scss";
import FlowChart from "C:/Users/22068/Desktop/Projject/vuepress-theme-hope/packages/md-enhance/lib/client/components/FlowChart.js";
import "C:/Users/22068/Desktop/Projject/vuepress-theme-hope/packages/md-enhance/lib/client/styles/footnote.scss";
import { useHintContainers } from "C:/Users/22068/Desktop/Projject/vuepress-theme-hope/packages/md-enhance/lib/client/composables/useHintContainers.js";
import "C:/Users/22068/Desktop/Projject/vuepress-theme-hope/packages/md-enhance/lib/client/styles/hint/index.scss";
import "C:/Users/22068/Desktop/Projject/vuepress-theme-hope/packages/md-enhance/lib/client/styles/image-mark.scss"
import "C:/Users/22068/Desktop/Projject/vuepress-theme-hope/node_modules/.pnpm/katex@0.16.11/node_modules/katex/dist/katex.min.css";
import "C:/Users/22068/Desktop/Projject/vuepress-theme-hope/packages/md-enhance/lib/client/styles/katex.scss";
import KotlinPlayground from "C:/Users/22068/Desktop/Projject/vuepress-theme-hope/packages/md-enhance/lib/client/components/KotlinPlayground.js";
import { injectKotlinPlaygroundConfig } from "C:/Users/22068/Desktop/Projject/vuepress-theme-hope/packages/md-enhance/lib/client/index.js";
import MarkMap from "C:/Users/22068/Desktop/Projject/vuepress-theme-hope/packages/md-enhance/lib/client/components/MarkMap.js";
import Mermaid from "C:/Users/22068/Desktop/Projject/vuepress-theme-hope/packages/md-enhance/lib/client/components/Mermaid.js";
import { injectMermaidConfig } from "C:/Users/22068/Desktop/Projject/vuepress-theme-hope/packages/md-enhance/lib/client//index.js";
import Playground from "C:/Users/22068/Desktop/Projject/vuepress-theme-hope/packages/md-enhance/lib/client/components/Playground.js";
import "C:/Users/22068/Desktop/Projject/vuepress-theme-hope/node_modules/.pnpm/reveal.js@5.1.0/node_modules/reveal.js/dist/reveal.css";
import RevealJs from "C:/Users/22068/Desktop/Projject/vuepress-theme-hope/packages/md-enhance/lib/client/components/RevealJs.js";
import { injectRevealJsConfig } from "C:/Users/22068/Desktop/Projject/vuepress-theme-hope/packages/md-enhance/lib/client/index.js";
import Tabs from "C:/Users/22068/Desktop/Projject/vuepress-theme-hope/packages/md-enhance/lib/client/components/Tabs.js";
import { defineAsyncComponent } from "vue";
import { LoadingIcon } from "C:/Users/22068/Desktop/Projject/vuepress-theme-hope/packages/shared/lib/client/index.js";
import { injectSandpackConfig } from "C:/Users/22068/Desktop/Projject/vuepress-theme-hope/packages/md-enhance/lib/client/index.js";
import "C:/Users/22068/Desktop/Projject/vuepress-theme-hope/node_modules/.pnpm/@mdit+plugin-spoiler@0.12.0_markdown-it@14.1.0/node_modules/@mdit/plugin-spoiler/spoiler.css";
import "C:/Users/22068/Desktop/Projject/vuepress-theme-hope/packages/md-enhance/lib/client/styles/tasklist.scss";
import VuePlayground from "C:/Users/22068/Desktop/Projject/vuepress-theme-hope/packages/md-enhance/lib/client/components/VuePlayground.js";
import { injectVuePlaygroundConfig } from "C:/Users/22068/Desktop/Projject/vuepress-theme-hope/packages/md-enhance/lib/client/index.js";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("ChartJS", ChartJS)
    app.component("CodeTabs", CodeTabs);
    app.component("CodeDemo", CodeDemo);
    app.component("MdDemo", MdDemo);
    app.component("ECharts", ECharts);
    injectEChartsConfig(app);
    app.component("FlowChart", FlowChart);
    injectKotlinPlaygroundConfig(app);
    app.component("KotlinPlayground", KotlinPlayground);
    app.component("MarkMap", MarkMap);
    injectMermaidConfig(app);
    app.component("Mermaid", Mermaid);
    app.component("Playground", Playground);
    injectRevealJsConfig(app);
    app.component("RevealJs", RevealJs);
    app.component("Tabs", Tabs);
    injectSandpackConfig(app);
    app.component(
  "SandPack",
  defineAsyncComponent({
    loader: () => import("C:/Users/22068/Desktop/Projject/vuepress-theme-hope/packages/md-enhance/lib/client/components/SandPack.js"),
    loadingComponent: LoadingIcon,
  })
);
    injectVuePlaygroundConfig(app);
    app.component("VuePlayground", VuePlayground);
  },
  setup: () => {
useHintContainers();
  }
});
