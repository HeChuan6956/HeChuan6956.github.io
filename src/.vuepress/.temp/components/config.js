import { defineClientConfig } from "vuepress/client";
import { hasGlobalComponent } from "C:/Users/22068/Desktop/Projject/vuepress-theme-hope/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.40_typescript@5.5.4_vuepress@2.0.0-rc.14_@vuepress+bundler-vite@2.0_mmeivdz36cvxla3pcsazesegei/node_modules/@vuepress/helper/lib/client/index.js";

import { useScriptTag } from "C:/Users/22068/Desktop/Projject/vuepress-theme-hope/node_modules/.pnpm/@vueuse+core@10.11.0_vue@3.4.34_typescript@5.5.4_/node_modules/@vueuse/core/index.mjs";
import FontIcon from "C:/Users/22068/Desktop/Projject/vuepress-theme-hope/packages/components/lib/client/components/FontIcon.js";
import Badge from "C:/Users/22068/Desktop/Projject/vuepress-theme-hope/packages/components/lib/client/components/Badge.js";
import VPCard from "C:/Users/22068/Desktop/Projject/vuepress-theme-hope/packages/components/lib/client/components/VPCard.js";

import "C:/Users/22068/Desktop/Projject/vuepress-theme-hope/packages/components/lib/client/styles/sr-only.scss";

export default defineClientConfig({
  enhance: ({ app }) => {
    if(!hasGlobalComponent("FontIcon")) app.component("FontIcon", FontIcon);
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("VPCard")) app.component("VPCard", VPCard);
    
  },
  setup: () => {
    useScriptTag(
  `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/brands.min.js`,
  () => {},
  { attrs: { "data-auto-replace-svg": "nest" } }
);

    useScriptTag(
  `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/solid.min.js`,
  () => {},
  { attrs: { "data-auto-replace-svg": "nest" } }
);

    useScriptTag(
  `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/fontawesome.min.js`,
  () => {},
  { attrs: { "data-auto-replace-svg": "nest" } }
);

  },
  rootComponents: [

  ],
});
