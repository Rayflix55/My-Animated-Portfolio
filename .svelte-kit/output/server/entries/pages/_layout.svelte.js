import { F as FILENAME } from "../../chunks/dev2.js";
import "clsx";
import { p as push_element, a as pop_element } from "../../chunks/dev.js";
_layout[FILENAME] = "src/routes/+layout.svelte";
function _layout($$renderer, $$props) {
  $$renderer.component(
    ($$renderer2) => {
      let { children } = $$props;
      $$renderer2.push(`<div class="noise-overlay">`);
      push_element($$renderer2, "div", 8, 0);
      $$renderer2.push(`</div>`);
      pop_element();
      $$renderer2.push(` `);
      children($$renderer2);
      $$renderer2.push(`<!---->`);
    },
    _layout
  );
}
_layout.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte.dev/docs/svelte/v5-migration-guide#Components-are-no-longer-classes for more information");
};
export {
  _layout as default
};
