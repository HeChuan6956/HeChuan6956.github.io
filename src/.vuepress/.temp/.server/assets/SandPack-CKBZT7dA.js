import { defineComponent, ref, computed, onMounted, h as h$1 } from "vue";
import { i, d as deepAssign, e, u as useMutationObserver, a as decodeData } from "../app.gpVoHC1a.mjs";
import { Sandpack } from "sandpack-vue3";
import "vue-router";
import "@waline/client/pageview";
import "vue/server-renderer";
const h = (t) => JSON.parse(decodeData(t)), k = (t) => JSON.parse(decodeData(t)), y = (t) => JSON.parse(decodeData(t));
var O = defineComponent({ name: "SandPack", props: { title: { type: String, default: "" }, template: { type: String, default: "" }, files: { type: String, required: true }, options: { type: String, default: "{}" }, customSetup: { type: String, default: "{}" }, theme: { type: String, default: "" }, rtl: Boolean }, setup(t) {
  const o = i(), r = ref(false), i$1 = computed(() => deepAssign({}, o.options, k(t.options))), u = computed(() => t.template || o.template), l = computed(() => t.theme || r.value ? "dark" : "light"), m = computed(() => deepAssign({}, o.customSetup, y(t.customSetup)));
  return onMounted(() => {
    r.value = e(), useMutationObserver(document.documentElement, () => {
      r.value = e();
    }, { attributeFilter: ["class", "data-theme"], attributes: true });
  }), () => [h$1("div", { class: "sandpack-wrapper" }, [t.title ? h$1("div", { class: "header" }, decodeURIComponent(t.title)) : null, h$1("div", { class: "sandpack-container" }, h$1(Sandpack, { template: u.value, theme: l.value, files: h(t.files), options: i$1.value, customSetup: m.value, rtl: t.rtl }))])];
} });
export {
  O as default
};
