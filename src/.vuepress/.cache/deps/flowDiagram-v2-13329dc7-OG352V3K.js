import {
  flowRendererV2,
  flowStyles
} from "./chunk-PAH7UEH7.js";
import "./chunk-CAU5K3LM.js";
import {
  flowDb,
  parser$1
} from "./chunk-7BPONXE3.js";
import "./chunk-YDXDBWEC.js";
import "./chunk-LZ26YJSK.js";
import "./chunk-JSJ52WGX.js";
import "./chunk-LXCR43W4.js";
import {
  require_dayjs_min,
  require_dist,
  setConfig
} from "./chunk-N243M3WW.js";
import "./chunk-D3PSQDW3.js";
import "./chunk-YRJAYSJW.js";
import {
  __toESM
} from "./chunk-MTI3AIJG.js";

// ../../node_modules/.pnpm/mermaid@10.9.1/node_modules/mermaid/dist/flowDiagram-v2-13329dc7.js
var import_dayjs = __toESM(require_dayjs_min(), 1);
var import_sanitize_url = __toESM(require_dist(), 1);
var diagram = {
  parser: parser$1,
  db: flowDb,
  renderer: flowRendererV2,
  styles: flowStyles,
  init: (cnf) => {
    if (!cnf.flowchart) {
      cnf.flowchart = {};
    }
    cnf.flowchart.arrowMarkerAbsolute = cnf.arrowMarkerAbsolute;
    setConfig({ flowchart: { arrowMarkerAbsolute: cnf.arrowMarkerAbsolute } });
    flowRendererV2.setConf(cnf.flowchart);
    flowDb.clear();
    flowDb.setGen("gen-2");
  }
};
export {
  diagram
};
//# sourceMappingURL=flowDiagram-v2-13329dc7-OG352V3K.js.map
