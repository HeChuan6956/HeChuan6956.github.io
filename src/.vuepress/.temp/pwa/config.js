import { h }  from "vue";
import { defineClientConfig } from "vuepress/client";
import { setupPwa } from "C:/Users/22068/Desktop/Projject/vuepress-theme-hope/node_modules/.pnpm/@vuepress+plugin-pwa@2.0.0-rc.40_@types+babel__core@7.20.5_typescript@5.5.4_vuepress@2.0.0-rc_6mtux5widtzhif3bm2oj4m6wkm/node_modules/@vuepress/plugin-pwa/lib/client/composables/setupPwa.js";
import { setupViewPoint } from "C:/Users/22068/Desktop/Projject/vuepress-theme-hope/node_modules/.pnpm/@vuepress+plugin-pwa@2.0.0-rc.40_@types+babel__core@7.20.5_typescript@5.5.4_vuepress@2.0.0-rc_6mtux5widtzhif3bm2oj4m6wkm/node_modules/@vuepress/plugin-pwa/lib/client/composables/setupViewPoint.js";
import { PwaReadyPopup as _PwaReadyPopup } from "C:/Users/22068/Desktop/Projject/vuepress-theme-hope/node_modules/.pnpm/@vuepress+plugin-pwa@2.0.0-rc.40_@types+babel__core@7.20.5_typescript@5.5.4_vuepress@2.0.0-rc_6mtux5widtzhif3bm2oj4m6wkm/node_modules/@vuepress/plugin-pwa/lib/client/components/PwaReadyPopup.js";

import "C:/Users/22068/Desktop/Projject/vuepress-theme-hope/node_modules/.pnpm/@vuepress+plugin-pwa@2.0.0-rc.40_@types+babel__core@7.20.5_typescript@5.5.4_vuepress@2.0.0-rc_6mtux5widtzhif3bm2oj4m6wkm/node_modules/@vuepress/plugin-pwa/lib/client/styles/vars.css";

const locales = __PWA_LOCALES__;

const PwaReadyPopup = () => h(_PwaReadyPopup, { locales })

export default defineClientConfig({
  setup: () => {
    setupPwa(__SW_PATH__, __SW_FORCE_UPDATE__);
    setupViewPoint();
  },
  rootComponents: [
    PwaReadyPopup,
  ],
});
