import { openBlock as s, createElementBlock as r } from "vue";
const a = (t, o) => {
  const n = t.__vccOpts || t;
  for (const [c, e] of o)
    n[c] = e;
  return n;
}, _ = {};
function f(t, o) {
  return s(), r("button", null, "my test button");
}
const l = /* @__PURE__ */ a(_, [["render", f]]), u = [l], i = function(t, o) {
  u.forEach((n) => {
    t.component(n.name, n);
  });
}, p = { install: i };
export {
  l as TestBtn,
  p as default
};
