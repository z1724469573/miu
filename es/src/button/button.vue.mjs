import { defineComponent as e, computed as r, openBlock as s, createElementBlock as p, normalizeClass as l, unref as m, renderSlot as a } from "vue";
import "./style/index.css";
const f = /* @__PURE__ */ e({
  name: "button",
  props: {
    type: null
  },
  setup(n) {
    const t = n;
    e({
      name: "miu-button",
      setup() {
        return {};
      }
    });
    const o = r(() => ({ [`miu-button--${t.type}`]: t.type }));
    return (u, c) => (s(), p("button", {
      class: l(["miu-button", m(o)])
    }, [
      a(u.$slots, "default")
    ], 2));
  }
});
export {
  f as default
};
