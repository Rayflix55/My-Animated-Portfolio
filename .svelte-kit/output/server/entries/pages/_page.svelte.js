import { w as fallback, F as FILENAME } from "../../chunks/dev2.js";
import { clsx as clsx$1 } from "clsx";
import { p as push_element, a as pop_element } from "../../chunks/dev.js";
import { O as rune_outside_svelte, Q as sanitize_props, V as rest_props, X as attributes, Y as clsx, Z as ensure_array_like, _ as validate_dynamic_element_tag, $ as element, a0 as slot, a1 as bind_props, a2 as spread_props, K as prevent_snippet_stringification, a3 as attr_class, a4 as attr, a5 as stringify, e as escape_html, a6 as attr_style, N as derived } from "../../chunks/renderer.js";
import { twMerge } from "tailwind-merge";
{
  let throw_rune_error = function(rune) {
    if (!(rune in globalThis)) {
      let value;
      Object.defineProperty(globalThis, rune, {
        configurable: true,
        // eslint-disable-next-line getter-return
        get: () => {
          if (value !== void 0) {
            return value;
          }
          rune_outside_svelte(rune);
        },
        set: (v) => {
          value = v;
        }
      });
    }
  };
  throw_rune_error("$state");
  throw_rune_error("$effect");
  throw_rune_error("$derived");
  throw_rune_error("$inspect");
  throw_rune_error("$props");
  throw_rune_error("$bindable");
}
/**
 * @license lucide-svelte v0.475.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 */
const defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};
Icon[FILENAME] = "node_modules/lucide-svelte/dist/Icon.svelte";
function Icon($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "name",
    "color",
    "size",
    "strokeWidth",
    "absoluteStrokeWidth",
    "iconNode"
  ]);
  $$renderer.component(
    ($$renderer2) => {
      let name = fallback($$props["name"], void 0);
      let color = fallback($$props["color"], "currentColor");
      let size = fallback($$props["size"], 24);
      let strokeWidth = fallback($$props["strokeWidth"], 2);
      let absoluteStrokeWidth = fallback($$props["absoluteStrokeWidth"], false);
      let iconNode = fallback($$props["iconNode"], () => [], true);
      const mergeClasses = (...classes) => classes.filter((className, index, array) => {
        return Boolean(className) && array.indexOf(className) === index;
      }).join(" ");
      $$renderer2.push(`<svg${attributes(
        {
          ...defaultAttributes,
          ...$$restProps,
          width: size,
          height: size,
          stroke: color,
          "stroke-width": absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
          class: clsx(mergeClasses("lucide-icon", "lucide", name ? `lucide-${name}` : "", $$sanitized_props.class))
        },
        void 0,
        void 0,
        void 0,
        3
      )}>`);
      push_element($$renderer2, "svg", 14, 0);
      $$renderer2.push(`<!--[-->`);
      const each_array = ensure_array_like(iconNode);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let [tag, attrs] = each_array[$$index];
        validate_dynamic_element_tag(() => tag);
        push_element($$renderer2, tag, 35, 4);
        element($$renderer2, tag, () => {
          $$renderer2.push(`${attributes({ ...attrs }, void 0, void 0, void 0, 3)}`);
        });
        pop_element();
      }
      $$renderer2.push(`<!--]--><!--[-->`);
      slot($$renderer2, $$props, "default", {});
      $$renderer2.push(`<!--]--></svg>`);
      pop_element();
      bind_props($$props, {
        name,
        color,
        size,
        strokeWidth,
        absoluteStrokeWidth,
        iconNode
      });
    },
    Icon
  );
}
Icon.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte.dev/docs/svelte/v5-migration-guide#Components-are-no-longer-classes for more information");
};
Arrow_up_right[FILENAME] = "node_modules/lucide-svelte/dist/icons/arrow-up-right.svelte";
function Arrow_up_right($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  $$renderer.component(
    ($$renderer2) => {
      /**
       * @license lucide-svelte v0.475.0 - ISC
       *
       * ISC License
       *
       * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
       *
       * Permission to use, copy, modify, and/or distribute this software for any
       * purpose with or without fee is hereby granted, provided that the above
       * copyright notice and this permission notice appear in all copies.
       *
       * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
       * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
       * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
       * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
       * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
       * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
       * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
       *
       */
      const iconNode = [
        ["path", { "d": "M7 7h10v10" }],
        ["path", { "d": "M7 17 17 7" }]
      ];
      Icon($$renderer2, spread_props([
        { name: "arrow-up-right" },
        $$sanitized_props,
        {
          /**
           * @component @name ArrowUpRight
           * @description Lucide SVG icon component, renders SVG Element with children.
           *
           * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNNyA3aDEwdjEwIiAvPgogIDxwYXRoIGQ9Ik03IDE3IDE3IDciIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/arrow-up-right
           * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
           *
           * @param {Object} props - Lucide icons props and any valid SVG attribute
           * @returns {FunctionalComponent} Svelte component
           *
           */
          iconNode,
          children: prevent_snippet_stringification(($$renderer3) => {
            $$renderer3.push(`<!--[-->`);
            slot($$renderer3, $$props, "default", {});
            $$renderer3.push(`<!--]-->`);
          }),
          $$slots: { default: true }
        }
      ]));
    },
    Arrow_up_right
  );
}
Arrow_up_right.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte.dev/docs/svelte/v5-migration-guide#Components-are-no-longer-classes for more information");
};
Cpu[FILENAME] = "node_modules/lucide-svelte/dist/icons/cpu.svelte";
function Cpu($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  $$renderer.component(
    ($$renderer2) => {
      /**
       * @license lucide-svelte v0.475.0 - ISC
       *
       * ISC License
       *
       * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
       *
       * Permission to use, copy, modify, and/or distribute this software for any
       * purpose with or without fee is hereby granted, provided that the above
       * copyright notice and this permission notice appear in all copies.
       *
       * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
       * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
       * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
       * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
       * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
       * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
       * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
       *
       */
      const iconNode = [
        [
          "rect",
          { "width": "16", "height": "16", "x": "4", "y": "4", "rx": "2" }
        ],
        [
          "rect",
          { "width": "6", "height": "6", "x": "9", "y": "9", "rx": "1" }
        ],
        ["path", { "d": "M15 2v2" }],
        ["path", { "d": "M15 20v2" }],
        ["path", { "d": "M2 15h2" }],
        ["path", { "d": "M2 9h2" }],
        ["path", { "d": "M20 15h2" }],
        ["path", { "d": "M20 9h2" }],
        ["path", { "d": "M9 2v2" }],
        ["path", { "d": "M9 20v2" }]
      ];
      Icon($$renderer2, spread_props([
        { name: "cpu" },
        $$sanitized_props,
        {
          /**
           * @component @name Cpu
           * @description Lucide SVG icon component, renders SVG Element with children.
           *
           * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cmVjdCB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHg9IjQiIHk9IjQiIHJ4PSIyIiAvPgogIDxyZWN0IHdpZHRoPSI2IiBoZWlnaHQ9IjYiIHg9IjkiIHk9IjkiIHJ4PSIxIiAvPgogIDxwYXRoIGQ9Ik0xNSAydjIiIC8+CiAgPHBhdGggZD0iTTE1IDIwdjIiIC8+CiAgPHBhdGggZD0iTTIgMTVoMiIgLz4KICA8cGF0aCBkPSJNMiA5aDIiIC8+CiAgPHBhdGggZD0iTTIwIDE1aDIiIC8+CiAgPHBhdGggZD0iTTIwIDloMiIgLz4KICA8cGF0aCBkPSJNOSAydjIiIC8+CiAgPHBhdGggZD0iTTkgMjB2MiIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/cpu
           * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
           *
           * @param {Object} props - Lucide icons props and any valid SVG attribute
           * @returns {FunctionalComponent} Svelte component
           *
           */
          iconNode,
          children: prevent_snippet_stringification(($$renderer3) => {
            $$renderer3.push(`<!--[-->`);
            slot($$renderer3, $$props, "default", {});
            $$renderer3.push(`<!--]-->`);
          }),
          $$slots: { default: true }
        }
      ]));
    },
    Cpu
  );
}
Cpu.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte.dev/docs/svelte/v5-migration-guide#Components-are-no-longer-classes for more information");
};
Github[FILENAME] = "node_modules/lucide-svelte/dist/icons/github.svelte";
function Github($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  $$renderer.component(
    ($$renderer2) => {
      /**
       * @license lucide-svelte v0.475.0 - ISC
       *
       * ISC License
       *
       * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
       *
       * Permission to use, copy, modify, and/or distribute this software for any
       * purpose with or without fee is hereby granted, provided that the above
       * copyright notice and this permission notice appear in all copies.
       *
       * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
       * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
       * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
       * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
       * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
       * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
       * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
       *
       */
      const iconNode = [
        [
          "path",
          {
            "d": "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
          }
        ],
        ["path", { "d": "M9 18c-4.51 2-5-2-7-2" }]
      ];
      Icon($$renderer2, spread_props([
        { name: "github" },
        $$sanitized_props,
        {
          /**
           * @component @name Github
           * @description Lucide SVG icon component, renders SVG Element with children.
           *
           * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTUgMjJ2LTRhNC44IDQuOCAwIDAgMC0xLTMuNWMzIDAgNi0yIDYtNS41LjA4LTEuMjUtLjI3LTIuNDgtMS0zLjUuMjgtMS4xNS4yOC0yLjM1IDAtMy41IDAgMC0xIDAtMyAxLjUtMi42NC0uNS01LjM2LS41LTggMEM2IDIgNSAyIDUgMmMtLjMgMS4xNS0uMyAyLjM1IDAgMy41QTUuNDAzIDUuNDAzIDAgMCAwIDQgOWMwIDMuNSAzIDUuNSA2IDUuNS0uMzkuNDktLjY4IDEuMDUtLjg1IDEuNjUtLjE3LjYtLjIyIDEuMjMtLjE1IDEuODV2NCIgLz4KICA8cGF0aCBkPSJNOSAxOGMtNC41MSAyLTUtMi03LTIiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/github
           * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
           *
           * @param {Object} props - Lucide icons props and any valid SVG attribute
           * @returns {FunctionalComponent} Svelte component
           * @deprecated Brand icons have been deprecated and are due to be removed, please refer to https://github.com/lucide-icons/lucide/issues/670. We recommend using https://simpleicons.org/?q=github instead. This icon will be removed in v1.0
           */
          iconNode,
          children: prevent_snippet_stringification(($$renderer3) => {
            $$renderer3.push(`<!--[-->`);
            slot($$renderer3, $$props, "default", {});
            $$renderer3.push(`<!--]-->`);
          }),
          $$slots: { default: true }
        }
      ]));
    },
    Github
  );
}
Github.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte.dev/docs/svelte/v5-migration-guide#Components-are-no-longer-classes for more information");
};
Globe[FILENAME] = "node_modules/lucide-svelte/dist/icons/globe.svelte";
function Globe($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  $$renderer.component(
    ($$renderer2) => {
      /**
       * @license lucide-svelte v0.475.0 - ISC
       *
       * ISC License
       *
       * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
       *
       * Permission to use, copy, modify, and/or distribute this software for any
       * purpose with or without fee is hereby granted, provided that the above
       * copyright notice and this permission notice appear in all copies.
       *
       * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
       * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
       * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
       * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
       * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
       * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
       * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
       *
       */
      const iconNode = [
        ["circle", { "cx": "12", "cy": "12", "r": "10" }],
        [
          "path",
          { "d": "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" }
        ],
        ["path", { "d": "M2 12h20" }]
      ];
      Icon($$renderer2, spread_props([
        { name: "globe" },
        $$sanitized_props,
        {
          /**
           * @component @name Globe
           * @description Lucide SVG icon component, renders SVG Element with children.
           *
           * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIgLz4KICA8cGF0aCBkPSJNMTIgMmExNC41IDE0LjUgMCAwIDAgMCAyMCAxNC41IDE0LjUgMCAwIDAgMC0yMCIgLz4KICA8cGF0aCBkPSJNMiAxMmgyMCIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/globe
           * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
           *
           * @param {Object} props - Lucide icons props and any valid SVG attribute
           * @returns {FunctionalComponent} Svelte component
           *
           */
          iconNode,
          children: prevent_snippet_stringification(($$renderer3) => {
            $$renderer3.push(`<!--[-->`);
            slot($$renderer3, $$props, "default", {});
            $$renderer3.push(`<!--]-->`);
          }),
          $$slots: { default: true }
        }
      ]));
    },
    Globe
  );
}
Globe.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte.dev/docs/svelte/v5-migration-guide#Components-are-no-longer-classes for more information");
};
Layers[FILENAME] = "node_modules/lucide-svelte/dist/icons/layers.svelte";
function Layers($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  $$renderer.component(
    ($$renderer2) => {
      /**
       * @license lucide-svelte v0.475.0 - ISC
       *
       * ISC License
       *
       * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
       *
       * Permission to use, copy, modify, and/or distribute this software for any
       * purpose with or without fee is hereby granted, provided that the above
       * copyright notice and this permission notice appear in all copies.
       *
       * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
       * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
       * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
       * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
       * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
       * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
       * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
       *
       */
      const iconNode = [
        [
          "path",
          {
            "d": "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"
          }
        ],
        [
          "path",
          {
            "d": "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"
          }
        ],
        [
          "path",
          {
            "d": "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"
          }
        ]
      ];
      Icon($$renderer2, spread_props([
        { name: "layers" },
        $$sanitized_props,
        {
          /**
           * @component @name Layers
           * @description Lucide SVG icon component, renders SVG Element with children.
           *
           * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTIuODMgMi4xOGEyIDIgMCAwIDAtMS42NiAwTDIuNiA2LjA4YTEgMSAwIDAgMCAwIDEuODNsOC41OCAzLjkxYTIgMiAwIDAgMCAxLjY2IDBsOC41OC0zLjlhMSAxIDAgMCAwIDAtMS44M3oiIC8+CiAgPHBhdGggZD0iTTIgMTJhMSAxIDAgMCAwIC41OC45MWw4LjYgMy45MWEyIDIgMCAwIDAgMS42NSAwbDguNTgtMy45QTEgMSAwIDAgMCAyMiAxMiIgLz4KICA8cGF0aCBkPSJNMiAxN2ExIDEgMCAwIDAgLjU4LjkxbDguNiAzLjkxYTIgMiAwIDAgMCAxLjY1IDBsOC41OC0zLjlBMSAxIDAgMCAwIDIyIDE3IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/layers
           * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
           *
           * @param {Object} props - Lucide icons props and any valid SVG attribute
           * @returns {FunctionalComponent} Svelte component
           *
           */
          iconNode,
          children: prevent_snippet_stringification(($$renderer3) => {
            $$renderer3.push(`<!--[-->`);
            slot($$renderer3, $$props, "default", {});
            $$renderer3.push(`<!--]-->`);
          }),
          $$slots: { default: true }
        }
      ]));
    },
    Layers
  );
}
Layers.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte.dev/docs/svelte/v5-migration-guide#Components-are-no-longer-classes for more information");
};
Linkedin[FILENAME] = "node_modules/lucide-svelte/dist/icons/linkedin.svelte";
function Linkedin($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  $$renderer.component(
    ($$renderer2) => {
      /**
       * @license lucide-svelte v0.475.0 - ISC
       *
       * ISC License
       *
       * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
       *
       * Permission to use, copy, modify, and/or distribute this software for any
       * purpose with or without fee is hereby granted, provided that the above
       * copyright notice and this permission notice appear in all copies.
       *
       * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
       * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
       * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
       * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
       * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
       * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
       * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
       *
       */
      const iconNode = [
        [
          "path",
          {
            "d": "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
          }
        ],
        ["rect", { "width": "4", "height": "12", "x": "2", "y": "9" }],
        ["circle", { "cx": "4", "cy": "4", "r": "2" }]
      ];
      Icon($$renderer2, spread_props([
        { name: "linkedin" },
        $$sanitized_props,
        {
          /**
           * @component @name Linkedin
           * @description Lucide SVG icon component, renders SVG Element with children.
           *
           * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTYgOGE2IDYgMCAwIDEgNiA2djdoLTR2LTdhMiAyIDAgMCAwLTItMiAyIDIgMCAwIDAtMiAydjdoLTR2LTdhNiA2IDAgMCAxIDYtNnoiIC8+CiAgPHJlY3Qgd2lkdGg9IjQiIGhlaWdodD0iMTIiIHg9IjIiIHk9IjkiIC8+CiAgPGNpcmNsZSBjeD0iNCIgY3k9IjQiIHI9IjIiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/linkedin
           * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
           *
           * @param {Object} props - Lucide icons props and any valid SVG attribute
           * @returns {FunctionalComponent} Svelte component
           * @deprecated Brand icons have been deprecated and are due to be removed, please refer to https://github.com/lucide-icons/lucide/issues/670. We recommend using https://simpleicons.org/?q=linkedin instead. This icon will be removed in v1.0
           */
          iconNode,
          children: prevent_snippet_stringification(($$renderer3) => {
            $$renderer3.push(`<!--[-->`);
            slot($$renderer3, $$props, "default", {});
            $$renderer3.push(`<!--]-->`);
          }),
          $$slots: { default: true }
        }
      ]));
    },
    Linkedin
  );
}
Linkedin.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte.dev/docs/svelte/v5-migration-guide#Components-are-no-longer-classes for more information");
};
Mail[FILENAME] = "node_modules/lucide-svelte/dist/icons/mail.svelte";
function Mail($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  $$renderer.component(
    ($$renderer2) => {
      /**
       * @license lucide-svelte v0.475.0 - ISC
       *
       * ISC License
       *
       * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
       *
       * Permission to use, copy, modify, and/or distribute this software for any
       * purpose with or without fee is hereby granted, provided that the above
       * copyright notice and this permission notice appear in all copies.
       *
       * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
       * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
       * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
       * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
       * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
       * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
       * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
       *
       */
      const iconNode = [
        [
          "rect",
          { "width": "20", "height": "16", "x": "2", "y": "4", "rx": "2" }
        ],
        ["path", { "d": "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" }]
      ];
      Icon($$renderer2, spread_props([
        { name: "mail" },
        $$sanitized_props,
        {
          /**
           * @component @name Mail
           * @description Lucide SVG icon component, renders SVG Element with children.
           *
           * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMTYiIHg9IjIiIHk9IjQiIHJ4PSIyIiAvPgogIDxwYXRoIGQ9Im0yMiA3LTguOTcgNS43YTEuOTQgMS45NCAwIDAgMS0yLjA2IDBMMiA3IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/mail
           * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
           *
           * @param {Object} props - Lucide icons props and any valid SVG attribute
           * @returns {FunctionalComponent} Svelte component
           *
           */
          iconNode,
          children: prevent_snippet_stringification(($$renderer3) => {
            $$renderer3.push(`<!--[-->`);
            slot($$renderer3, $$props, "default", {});
            $$renderer3.push(`<!--]-->`);
          }),
          $$slots: { default: true }
        }
      ]));
    },
    Mail
  );
}
Mail.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte.dev/docs/svelte/v5-migration-guide#Components-are-no-longer-classes for more information");
};
Menu[FILENAME] = "node_modules/lucide-svelte/dist/icons/menu.svelte";
function Menu($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  $$renderer.component(
    ($$renderer2) => {
      /**
       * @license lucide-svelte v0.475.0 - ISC
       *
       * ISC License
       *
       * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
       *
       * Permission to use, copy, modify, and/or distribute this software for any
       * purpose with or without fee is hereby granted, provided that the above
       * copyright notice and this permission notice appear in all copies.
       *
       * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
       * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
       * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
       * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
       * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
       * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
       * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
       *
       */
      const iconNode = [
        ["line", { "x1": "4", "x2": "20", "y1": "12", "y2": "12" }],
        ["line", { "x1": "4", "x2": "20", "y1": "6", "y2": "6" }],
        ["line", { "x1": "4", "x2": "20", "y1": "18", "y2": "18" }]
      ];
      Icon($$renderer2, spread_props([
        { name: "menu" },
        $$sanitized_props,
        {
          /**
           * @component @name Menu
           * @description Lucide SVG icon component, renders SVG Element with children.
           *
           * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8bGluZSB4MT0iNCIgeDI9IjIwIiB5MT0iMTIiIHkyPSIxMiIgLz4KICA8bGluZSB4MT0iNCIgeDI9IjIwIiB5MT0iNiIgeTI9IjYiIC8+CiAgPGxpbmUgeDE9IjQiIHgyPSIyMCIgeTE9IjE4IiB5Mj0iMTgiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/menu
           * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
           *
           * @param {Object} props - Lucide icons props and any valid SVG attribute
           * @returns {FunctionalComponent} Svelte component
           *
           */
          iconNode,
          children: prevent_snippet_stringification(($$renderer3) => {
            $$renderer3.push(`<!--[-->`);
            slot($$renderer3, $$props, "default", {});
            $$renderer3.push(`<!--]-->`);
          }),
          $$slots: { default: true }
        }
      ]));
    },
    Menu
  );
}
Menu.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte.dev/docs/svelte/v5-migration-guide#Components-are-no-longer-classes for more information");
};
Message_square[FILENAME] = "node_modules/lucide-svelte/dist/icons/message-square.svelte";
function Message_square($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  $$renderer.component(
    ($$renderer2) => {
      /**
       * @license lucide-svelte v0.475.0 - ISC
       *
       * ISC License
       *
       * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
       *
       * Permission to use, copy, modify, and/or distribute this software for any
       * purpose with or without fee is hereby granted, provided that the above
       * copyright notice and this permission notice appear in all copies.
       *
       * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
       * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
       * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
       * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
       * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
       * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
       * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
       *
       */
      const iconNode = [
        [
          "path",
          {
            "d": "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
          }
        ]
      ];
      Icon($$renderer2, spread_props([
        { name: "message-square" },
        $$sanitized_props,
        {
          /**
           * @component @name MessageSquare
           * @description Lucide SVG icon component, renders SVG Element with children.
           *
           * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMjEgMTVhMiAyIDAgMCAxLTIgMkg3bC00IDRWNWEyIDIgMCAwIDEgMi0yaDE0YTIgMiAwIDAgMSAyIDJ6IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/message-square
           * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
           *
           * @param {Object} props - Lucide icons props and any valid SVG attribute
           * @returns {FunctionalComponent} Svelte component
           *
           */
          iconNode,
          children: prevent_snippet_stringification(($$renderer3) => {
            $$renderer3.push(`<!--[-->`);
            slot($$renderer3, $$props, "default", {});
            $$renderer3.push(`<!--]-->`);
          }),
          $$slots: { default: true }
        }
      ]));
    },
    Message_square
  );
}
Message_square.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte.dev/docs/svelte/v5-migration-guide#Components-are-no-longer-classes for more information");
};
Twitter[FILENAME] = "node_modules/lucide-svelte/dist/icons/twitter.svelte";
function Twitter($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  $$renderer.component(
    ($$renderer2) => {
      /**
       * @license lucide-svelte v0.475.0 - ISC
       *
       * ISC License
       *
       * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
       *
       * Permission to use, copy, modify, and/or distribute this software for any
       * purpose with or without fee is hereby granted, provided that the above
       * copyright notice and this permission notice appear in all copies.
       *
       * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
       * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
       * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
       * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
       * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
       * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
       * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
       *
       */
      const iconNode = [
        [
          "path",
          {
            "d": "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"
          }
        ]
      ];
      Icon($$renderer2, spread_props([
        { name: "twitter" },
        $$sanitized_props,
        {
          /**
           * @component @name Twitter
           * @description Lucide SVG icon component, renders SVG Element with children.
           *
           * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMjIgNHMtLjcgMi4xLTIgMy40YzEuNiAxMC05LjQgMTcuMy0xOCAxMS42IDIuMi4xIDQuNC0uNiA2LTJDMyAxNS41LjUgOS42IDMgNWMyLjIgMi42IDUuNiA0LjEgOSA0LS45LTQuMiA0LTYuNiA3LTMuOCAxLjEgMCAzLTEuMiAzLTEuMnoiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/twitter
           * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
           *
           * @param {Object} props - Lucide icons props and any valid SVG attribute
           * @returns {FunctionalComponent} Svelte component
           * @deprecated Brand icons have been deprecated and are due to be removed, please refer to https://github.com/lucide-icons/lucide/issues/670. We recommend using https://simpleicons.org/?q=twitter instead. This icon will be removed in v1.0
           */
          iconNode,
          children: prevent_snippet_stringification(($$renderer3) => {
            $$renderer3.push(`<!--[-->`);
            slot($$renderer3, $$props, "default", {});
            $$renderer3.push(`<!--]-->`);
          }),
          $$slots: { default: true }
        }
      ]));
    },
    Twitter
  );
}
Twitter.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte.dev/docs/svelte/v5-migration-guide#Components-are-no-longer-classes for more information");
};
X[FILENAME] = "node_modules/lucide-svelte/dist/icons/x.svelte";
function X($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  $$renderer.component(
    ($$renderer2) => {
      /**
       * @license lucide-svelte v0.475.0 - ISC
       *
       * ISC License
       *
       * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
       *
       * Permission to use, copy, modify, and/or distribute this software for any
       * purpose with or without fee is hereby granted, provided that the above
       * copyright notice and this permission notice appear in all copies.
       *
       * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
       * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
       * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
       * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
       * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
       * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
       * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
       *
       */
      const iconNode = [
        ["path", { "d": "M18 6 6 18" }],
        ["path", { "d": "m6 6 12 12" }]
      ];
      Icon($$renderer2, spread_props([
        { name: "x" },
        $$sanitized_props,
        {
          /**
           * @component @name X
           * @description Lucide SVG icon component, renders SVG Element with children.
           *
           * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTggNiA2IDE4IiAvPgogIDxwYXRoIGQ9Im02IDYgMTIgMTIiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/x
           * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
           *
           * @param {Object} props - Lucide icons props and any valid SVG attribute
           * @returns {FunctionalComponent} Svelte component
           *
           */
          iconNode,
          children: prevent_snippet_stringification(($$renderer3) => {
            $$renderer3.push(`<!--[-->`);
            slot($$renderer3, $$props, "default", {});
            $$renderer3.push(`<!--]-->`);
          }),
          $$slots: { default: true }
        }
      ]));
    },
    X
  );
}
X.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte.dev/docs/svelte/v5-migration-guide#Components-are-no-longer-classes for more information");
};
Zap[FILENAME] = "node_modules/lucide-svelte/dist/icons/zap.svelte";
function Zap($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  $$renderer.component(
    ($$renderer2) => {
      /**
       * @license lucide-svelte v0.475.0 - ISC
       *
       * ISC License
       *
       * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
       *
       * Permission to use, copy, modify, and/or distribute this software for any
       * purpose with or without fee is hereby granted, provided that the above
       * copyright notice and this permission notice appear in all copies.
       *
       * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
       * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
       * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
       * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
       * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
       * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
       * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
       *
       */
      const iconNode = [
        [
          "path",
          {
            "d": "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"
          }
        ]
      ];
      Icon($$renderer2, spread_props([
        { name: "zap" },
        $$sanitized_props,
        {
          /**
           * @component @name Zap
           * @description Lucide SVG icon component, renders SVG Element with children.
           *
           * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNNCAxNGExIDEgMCAwIDEtLjc4LTEuNjNsOS45LTEwLjJhLjUuNSAwIDAgMSAuODYuNDZsLTEuOTIgNi4wMkExIDEgMCAwIDAgMTMgMTBoN2ExIDEgMCAwIDEgLjc4IDEuNjNsLTkuOSAxMC4yYS41LjUgMCAwIDEtLjg2LS40NmwxLjkyLTYuMDJBMSAxIDAgMCAwIDExIDE0eiIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/zap
           * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
           *
           * @param {Object} props - Lucide icons props and any valid SVG attribute
           * @returns {FunctionalComponent} Svelte component
           *
           */
          iconNode,
          children: prevent_snippet_stringification(($$renderer3) => {
            $$renderer3.push(`<!--[-->`);
            slot($$renderer3, $$props, "default", {});
            $$renderer3.push(`<!--]-->`);
          }),
          $$slots: { default: true }
        }
      ]));
    },
    Zap
  );
}
Zap.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte.dev/docs/svelte/v5-migration-guide#Components-are-no-longer-classes for more information");
};
function cn(...inputs) {
  return twMerge(clsx$1(inputs));
}
Button[FILENAME] = "src/components/UI/Button.svelte";
function Button($$renderer, $$props) {
  $$renderer.component(
    ($$renderer2) => {
      let {
        children,
        onclick = () => {
        },
        class: className = "",
        variant = "primary"
      } = $$props;
      const variants = {
        primary: "bg-white text-black hover:bg-primary transition-all font-mono font-bold uppercase tracking-widest",
        outline: "border border-white/10 hover:border-primary hover:text-primary transition-all backdrop-blur-md bg-white/[0.02] font-mono",
        ghost: "text-white/40 hover:text-white transition-colors font-mono"
      };
      $$renderer2.push(`<button${attr_class(clsx(cn("px-8 py-4 text-xs flex items-center justify-center gap-2 transition-all relative group overflow-hidden active:scale-95 hover:scale-105", variants[variant], className)))}>`);
      push_element($$renderer2, "button", 21, 0);
      if (variant === "outline") {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<div class="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/20 group-hover:border-primary transition-colors">`);
        push_element($$renderer2, "div", 30, 4);
        $$renderer2.push(`</div>`);
        pop_element();
        $$renderer2.push(` <div class="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/20 group-hover:border-primary transition-colors">`);
        push_element($$renderer2, "div", 31, 4);
        $$renderer2.push(`</div>`);
        pop_element();
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--> `);
      children($$renderer2);
      $$renderer2.push(`<!----></button>`);
      pop_element();
    },
    Button
  );
}
Button.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte.dev/docs/svelte/v5-migration-guide#Components-are-no-longer-classes for more information");
};
Navbar[FILENAME] = "src/components/Navbar.svelte";
function Navbar($$renderer, $$props) {
  $$renderer.component(
    ($$renderer2) => {
      let isOpen = false;
      const navLinks = [
        { name: "Home", id: "hero" },
        { name: "About", id: "about" },
        { name: "Work", id: "portfolio" },
        { name: "Tech", id: "experience" },
        { name: "Services", id: "services" },
        { name: "Contact", id: "contact" }
      ];
      const handleNavClick = (e, id) => {
        e.preventDefault();
        const element2 = document.getElementById(id);
        if (element2) {
          const offset = 80;
          const elementPosition = element2.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
        isOpen = false;
      };
      $$renderer2.push(`<nav${attr_class(`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${stringify("p-6 md:p-10")}`)}>`);
      push_element($$renderer2, "nav", 45, 0);
      $$renderer2.push(`<div${attr_class(`container mx-auto flex items-center justify-between transition-all duration-500 ${stringify("bg-transparent")}`)}>`);
      push_element($$renderer2, "div", 48, 2);
      $$renderer2.push(`<div class="flex items-center gap-4">`);
      push_element($$renderer2, "div", 49, 4);
      $$renderer2.push(`<div role="button" tabindex="0" class="w-10 h-10 border border-primary/30 flex items-center justify-center relative bg-white/[0.02] backdrop-blur-md group cursor-pointer overflow-hidden rounded-sm">`);
      push_element($$renderer2, "div", 50, 6);
      $$renderer2.push(`<span class="text-primary font-mono text-xs font-bold relative z-10 transition-transform group-hover:scale-125">`);
      push_element($$renderer2, "span", 57, 8);
      $$renderer2.push(`RF</span>`);
      pop_element();
      $$renderer2.push(` <div class="absolute inset-0 bg-primary/5 -translate-x-full group-hover:translate-x-0 transition-transform duration-500">`);
      push_element($$renderer2, "div", 58, 8);
      $$renderer2.push(`</div>`);
      pop_element();
      $$renderer2.push(` <div class="absolute -top-1 -left-1 w-1.5 h-1.5 bg-primary">`);
      push_element($$renderer2, "div", 59, 8);
      $$renderer2.push(`</div>`);
      pop_element();
      $$renderer2.push(`</div>`);
      pop_element();
      $$renderer2.push(` <div class="hidden sm:block text-left">`);
      push_element($$renderer2, "div", 61, 6);
      $$renderer2.push(`<div class="text-[10px] font-mono text-primary/60 tracking-[0.2em] uppercase">`);
      push_element($$renderer2, "div", 62, 8);
      $$renderer2.push(`Rayflix.OS</div>`);
      pop_element();
      $$renderer2.push(` <div class="text-sm font-bold tracking-tighter uppercase whitespace-nowrap">`);
      push_element($$renderer2, "div", 63, 8);
      $$renderer2.push(`Frontend Developer</div>`);
      pop_element();
      $$renderer2.push(`</div>`);
      pop_element();
      $$renderer2.push(`</div>`);
      pop_element();
      $$renderer2.push(` <div class="flex items-center gap-4 md:gap-8 text-[11px] font-mono tracking-[0.2em] uppercase">`);
      push_element($$renderer2, "div", 67, 4);
      $$renderer2.push(`<div class="hidden lg:flex items-center gap-6">`);
      push_element($$renderer2, "div", 68, 6);
      $$renderer2.push(`<div class="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/5 text-[9px] font-mono text-white/30 mr-4 lowercase">`);
      push_element($$renderer2, "div", 69, 8);
      $$renderer2.push(`<span class="text-primary">`);
      push_element($$renderer2, "span", 70, 10);
      $$renderer2.push(`⌘+K</span>`);
      pop_element();
      $$renderer2.push(` Quick_Search</div>`);
      pop_element();
      $$renderer2.push(` <!--[-->`);
      const each_array = ensure_array_like(navLinks);
      for (let i = 0, $$length = each_array.length; i < $$length; i++) {
        let link = each_array[i];
        $$renderer2.push(`<a${attr("href", `#${stringify(link.id)}`)} class="hover:text-primary transition-colors text-white/50 hover:text-white">`);
        push_element($$renderer2, "a", 73, 10);
        $$renderer2.push(`<span class="text-primary/40 mr-1">`);
        push_element($$renderer2, "span", 78, 12);
        $$renderer2.push(`0${escape_html(i + 1)}_</span>`);
        pop_element();
        $$renderer2.push(`${escape_html(link.name)}</a>`);
        pop_element();
      }
      $$renderer2.push(`<!--]--></div>`);
      pop_element();
      $$renderer2.push(` <div class="flex items-center gap-3">`);
      push_element($$renderer2, "div", 83, 6);
      Button($$renderer2, {
        variant: "primary",
        class: "px-4 md:px-6 py-2 h-9 md:h-10 flex items-center text-[10px] md:text-[11px]",
        onclick: (e) => handleNavClick(e, "contact"),
        children: prevent_snippet_stringification(($$renderer3) => {
          $$renderer3.push(`<!---->Hire Me`);
        })
      });
      $$renderer2.push(`<!----> <button class="lg:hidden w-9 h-9 border border-white/10 flex items-center justify-center hover:border-primary/50 transition-colors bg-white/[0.05] backdrop-blur-md rounded-sm">`);
      push_element($$renderer2, "button", 92, 8);
      if (isOpen) {
        $$renderer2.push("<!--[0-->");
        X($$renderer2, { size: 18 });
      } else {
        $$renderer2.push("<!--[-1-->");
        Menu($$renderer2, { size: 18 });
      }
      $$renderer2.push(`<!--]--></button>`);
      pop_element();
      $$renderer2.push(`</div>`);
      pop_element();
      $$renderer2.push(`</div>`);
      pop_element();
      $$renderer2.push(`</div>`);
      pop_element();
      $$renderer2.push(`</nav>`);
      pop_element();
      $$renderer2.push(` `);
      if (isOpen) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<div role="button" tabindex="0" class="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60] lg:hidden">`);
        push_element($$renderer2, "div", 108, 2);
        $$renderer2.push(`</div>`);
        pop_element();
        $$renderer2.push(` <div class="fixed top-0 right-0 w-[80%] max-w-sm h-full bg-background border-l border-white/10 z-[70] lg:hidden p-10 flex flex-col justify-center">`);
        push_element($$renderer2, "div", 116, 2);
        $$renderer2.push(`<div class="absolute top-10 right-10">`);
        push_element($$renderer2, "div", 120, 4);
        $$renderer2.push(`<button class="text-white/40 hover:text-primary transition-colors">`);
        push_element($$renderer2, "button", 121, 6);
        X($$renderer2, { size: 32, strokeWidth: 1 });
        $$renderer2.push(`<!----></button>`);
        pop_element();
        $$renderer2.push(`</div>`);
        pop_element();
        $$renderer2.push(` <div class="space-y-6">`);
        push_element($$renderer2, "div", 126, 4);
        $$renderer2.push(`<!--[-->`);
        const each_array_1 = ensure_array_like(navLinks);
        for (let i = 0, $$length = each_array_1.length; i < $$length; i++) {
          let link = each_array_1[i];
          $$renderer2.push(`<div>`);
          push_element($$renderer2, "div", 128, 8);
          $$renderer2.push(`<a${attr("href", `#${stringify(link.id)}`)} class="block text-3xl font-display font-bold uppercase tracking-tighter hover:text-primary transition-colors text-white/80">`);
          push_element($$renderer2, "a", 129, 10);
          $$renderer2.push(`<span class="text-primary text-[10px] font-mono block mb-1">`);
          push_element($$renderer2, "span", 134, 12);
          $$renderer2.push(`0${escape_html(i + 1)}_//</span>`);
          pop_element();
          $$renderer2.push(` ${escape_html(link.name)}</a>`);
          pop_element();
          $$renderer2.push(`</div>`);
          pop_element();
        }
        $$renderer2.push(`<!--]--></div>`);
        pop_element();
        $$renderer2.push(` <div class="mt-20 pt-10 border-t border-white/5">`);
        push_element($$renderer2, "div", 141, 4);
        $$renderer2.push(`<div class="text-[10px] font-mono text-white/20 uppercase tracking-widest mb-4">`);
        push_element($$renderer2, "div", 142, 6);
        $$renderer2.push(`Connection_Terminal</div>`);
        pop_element();
        $$renderer2.push(` <div class="flex gap-6">`);
        push_element($$renderer2, "div", 143, 6);
        $$renderer2.push(`<!--[-->`);
        const each_array_2 = ensure_array_like(["IN", "TW", "GH"]);
        for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
          let social = each_array_2[$$index_2];
          $$renderer2.push(`<a href="/" class="text-xs font-mono text-white/40 hover:text-primary transition-colors">`);
          push_element($$renderer2, "a", 145, 10);
          $$renderer2.push(`${escape_html(social)}</a>`);
          pop_element();
        }
        $$renderer2.push(`<!--]--></div>`);
        pop_element();
        $$renderer2.push(`</div>`);
        pop_element();
        $$renderer2.push(`</div>`);
        pop_element();
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]-->`);
    },
    Navbar
  );
}
Navbar.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte.dev/docs/svelte/v5-migration-guide#Components-are-no-longer-classes for more information");
};
Hero[FILENAME] = "src/components/Hero.svelte";
function Hero($$renderer, $$props) {
  $$renderer.component(
    ($$renderer2) => {
      let scrollY = 0;
      let yHero = derived(() => scrollY * 0.4);
      let ySub = derived(() => scrollY * 0.2);
      let yTop = derived(() => scrollY * 0.1);
      let yGrid = derived(() => scrollY * 0.25);
      let textOpacity = derived(() => Math.max(0, 1 - scrollY / 600));
      let textScale = derived(() => 1 + scrollY / 2e3);
      let orbY = derived(() => -scrollY * 0.15);
      let orbScale = derived(() => 1 + scrollY / 1e3);
      $$renderer2.push(`<section id="hero" class="relative min-h-[140vh] flex flex-col items-center justify-center pt-32 pb-40 overflow-hidden text-center">`);
      push_element($$renderer2, "section", 30, 0);
      $$renderer2.push(`<div class="absolute inset-0 -z-30 pointer-events-none opacity-80 bg-gradient-to-b from-primary/5 to-transparent">`);
      push_element($$renderer2, "div", 35, 2);
      $$renderer2.push(`</div>`);
      pop_element();
      $$renderer2.push(` <div class="container mx-auto px-6 lg:px-20 z-10 relative">`);
      push_element($$renderer2, "div", 37, 2);
      $$renderer2.push(`<div class="text-primary font-mono text-sm mb-6 flex items-center justify-center gap-4"${attr_style("", {
        transform: `translateY(${stringify(yTop())}px)`,
        opacity: textOpacity()
      })}>`);
      push_element($$renderer2, "div", 38, 4);
      $$renderer2.push(`<span class="w-12 h-[1px] bg-primary/40">`);
      push_element($$renderer2, "span", 44, 6);
      $$renderer2.push(`</span>`);
      pop_element();
      $$renderer2.push(` JUNIOR FRONTEND DEVELOPER <span class="w-12 h-[1px] bg-primary/40">`);
      push_element($$renderer2, "span", 46, 6);
      $$renderer2.push(`</span>`);
      pop_element();
      $$renderer2.push(`</div>`);
      pop_element();
      $$renderer2.push(` <h1 class="text-6xl sm:text-7xl md:text-8xl lg:text-[12rem] font-display font-bold leading-[0.85] tracking-tight text-gradient mb-8 md:mb-12 drop-shadow-[0_0_30px_rgba(6,182,212,0.1)]"${attr_style("", {
        transform: `translateY(${stringify(yHero())}px) scale(${stringify(textScale())})`,
        opacity: textOpacity()
      })}>`);
      push_element($$renderer2, "h1", 49, 4);
      $$renderer2.push(`Rayflix</h1>`);
      pop_element();
      $$renderer2.push(` <div class="flex flex-col items-center gap-10"${attr_style("", {
        transform: `translateY(${stringify(ySub())}px)`,
        opacity: textOpacity()
      })}>`);
      push_element($$renderer2, "div", 58, 4);
      $$renderer2.push(`<p class="max-w-2xl text-white/40 leading-relaxed font-light text-lg md:text-xl px-4 md:px-0">`);
      push_element($$renderer2, "p", 64, 6);
      $$renderer2.push(`Building modern web solutions with a focus on high-end frontend experiences and intuitive UI. Known as Akpe Samuel.</p>`);
      pop_element();
      $$renderer2.push(` <div class="flex flex-wrap items-center justify-center gap-6">`);
      push_element($$renderer2, "div", 68, 6);
      Button($$renderer2, {
        variant: "primary",
        class: "px-10 h-16 text-sm",
        children: prevent_snippet_stringification(($$renderer3) => {
          $$renderer3.push(`<!---->Hire Me `);
          Arrow_up_right($$renderer3, { size: 18 });
          $$renderer3.push(`<!---->`);
        })
      });
      $$renderer2.push(`<!----> `);
      Button($$renderer2, {
        variant: "outline",
        class: "px-10 h-16 text-sm",
        children: prevent_snippet_stringification(($$renderer3) => {
          $$renderer3.push(`<!---->View Work`);
        })
      });
      $$renderer2.push(`<!----></div>`);
      pop_element();
      $$renderer2.push(` <div class="flex items-center gap-3 text-[10px] font-mono text-white/30 tracking-widest uppercase">`);
      push_element($$renderer2, "div", 77, 6);
      $$renderer2.push(`<span class="w-2 h-2 rounded-full bg-green-500 animate-pulse">`);
      push_element($$renderer2, "span", 78, 8);
      $$renderer2.push(`</span>`);
      pop_element();
      $$renderer2.push(` Available for Hire</div>`);
      pop_element();
      $$renderer2.push(`</div>`);
      pop_element();
      $$renderer2.push(`</div>`);
      pop_element();
      $$renderer2.push(` <div class="absolute bottom-[20%] left-1/2 w-[60vw] aspect-video bg-primary/10 blur-[120px] rounded-full -z-10"${attr_style("", {
        transform: `translate(-50%, ${stringify(orbY())}px) scale(${stringify(orbScale())})`
      })}>`);
      push_element($$renderer2, "div", 84, 2);
      $$renderer2.push(`</div>`);
      pop_element();
      $$renderer2.push(` <div class="absolute bottom-[-30%] left-[-10%] w-[120%] h-[80%] grid-background opacity-10 -z-20 pointer-events-none"${attr_style("", {
        transform: `rotateX(60deg) translateY(${stringify(yGrid())}px)`
      })}>`);
      push_element($$renderer2, "div", 89, 2);
      $$renderer2.push(`</div>`);
      pop_element();
      $$renderer2.push(`</section>`);
      pop_element();
    },
    Hero
  );
}
Hero.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte.dev/docs/svelte/v5-migration-guide#Components-are-no-longer-classes for more information");
};
SectionHeader[FILENAME] = "src/components/UI/SectionHeader.svelte";
function SectionHeader($$renderer, $$props) {
  $$renderer.component(
    ($$renderer2) => {
      let { title, subtitle, class: className = "" } = $$props;
      $$renderer2.push(`<div${attr("id", `header-${stringify(title.replace(/\s+/g, "-").toLowerCase())}`)}${attr_class(clsx(cn("mb-16", className)))}>`);
      push_element($$renderer2, "div", 21, 0);
      {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--> `);
      {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--></div>`);
      pop_element();
    },
    SectionHeader
  );
}
SectionHeader.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte.dev/docs/svelte/v5-migration-guide#Components-are-no-longer-classes for more information");
};
AboutMe[FILENAME] = "src/components/AboutMe.svelte";
function AboutMe($$renderer, $$props) {
  $$renderer.component(
    ($$renderer2) => {
      let scrollYProgress = 0;
      let leftY = derived(() => (scrollYProgress - 0.5) * 100);
      let rightY = derived(() => 0.5 * 100);
      const stats = [
        {
          label: "Years Experience",
          value: "3+",
          sub: "Professional focus"
        },
        {
          label: "Successful Projects",
          value: "50+",
          sub: "Delivered solutions"
        }
      ];
      const skillStacks = [
        {
          icon: Cpu,
          title: "React / Frontend",
          tech: "Next.js, Tailwind, Motion"
        },
        {
          icon: Layers,
          title: "Svelte / Modern Web",
          tech: "SvelteKit, Reactive UI"
        },
        {
          icon: Zap,
          title: "Node.js / Backend",
          tech: "Express, PostgreSQL, Firebase"
        },
        {
          icon: Globe,
          title: "UI Architecture",
          tech: "Design Systems, Animations"
        }
      ];
      $$renderer2.push(`<section class="py-40 container mx-auto px-6 lg:px-20 relative" id="about">`);
      push_element($$renderer2, "section", 44, 0);
      $$renderer2.push(`<div class="absolute inset-0 -z-10 pointer-events-none overflow-hidden opacity-70">`);
      push_element($$renderer2, "div", 50, 2);
      $$renderer2.push(`</div>`);
      pop_element();
      $$renderer2.push(` `);
      SectionHeader($$renderer2, { subtitle: "01 // Profile", title: "About Me" });
      $$renderer2.push(`<!----> <div class="grid lg:grid-cols-2 gap-12 items-start mt-12 perspective-2000">`);
      push_element($$renderer2, "div", 57, 2);
      $$renderer2.push(`<div class="space-y-6"${attr_style("", { transform: `translateY(${stringify(leftY())}px)` })}>`);
      push_element($$renderer2, "div", 58, 4);
      $$renderer2.push(`<div class="engineered-border bg-white/[0.02] p-10 relative overflow-hidden transition-all hover:scale-[1.02] active:scale-95">`);
      push_element($$renderer2, "div", 59, 6);
      $$renderer2.push(`<div class="absolute top-0 right-0 p-4 text-[10px] font-mono text-white/5 uppercase tracking-widest">`);
      push_element($$renderer2, "div", 60, 9);
      $$renderer2.push(`Stack_Catalog</div>`);
      pop_element();
      $$renderer2.push(` <h3 class="text-xl font-display font-bold uppercase tracking-wider mb-8">`);
      push_element($$renderer2, "h3", 61, 8);
      $$renderer2.push(`Technical Proficiency</h3>`);
      pop_element();
      $$renderer2.push(` <div class="space-y-4">`);
      push_element($$renderer2, "div", 62, 8);
      $$renderer2.push(`<!--[-->`);
      const each_array = ensure_array_like(skillStacks);
      for (let i = 0, $$length = each_array.length; i < $$length; i++) {
        let stack = each_array[i];
        const Icon2 = stack.icon;
        $$renderer2.push(`<div class="p-4 border border-white/5 bg-white/[0.01] flex items-center gap-4 group hover:border-primary/30 transition-all hover:translate-x-2">`);
        push_element($$renderer2, "div", 65, 12);
        $$renderer2.push(`<div class="text-primary group-hover:scale-110 transition-transform">`);
        push_element($$renderer2, "div", 66, 14);
        if (Icon2) {
          $$renderer2.push("<!--[-->");
          Icon2($$renderer2, { size: 18 });
          $$renderer2.push("<!--]-->");
        } else {
          $$renderer2.push("<!--[!-->");
          $$renderer2.push("<!--]-->");
        }
        $$renderer2.push(`</div>`);
        pop_element();
        $$renderer2.push(` <div>`);
        push_element($$renderer2, "div", 69, 14);
        $$renderer2.push(`<div class="text-sm font-bold text-white/80">`);
        push_element($$renderer2, "div", 70, 16);
        $$renderer2.push(`${escape_html(stack.title)}</div>`);
        pop_element();
        $$renderer2.push(` <div class="text-[10px] font-mono text-white/20 uppercase tracking-tighter">`);
        push_element($$renderer2, "div", 71, 16);
        $$renderer2.push(`${escape_html(stack.tech)}</div>`);
        pop_element();
        $$renderer2.push(`</div>`);
        pop_element();
        $$renderer2.push(`</div>`);
        pop_element();
      }
      $$renderer2.push(`<!--]--></div>`);
      pop_element();
      $$renderer2.push(`</div>`);
      pop_element();
      $$renderer2.push(` <div class="grid sm:grid-cols-2 gap-6">`);
      push_element($$renderer2, "div", 78, 6);
      $$renderer2.push(`<!--[-->`);
      const each_array_1 = ensure_array_like(stats);
      for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
        let s = each_array_1[$$index_1];
        $$renderer2.push(`<div class="engineered-border bg-white/[0.02] p-8 group hover:border-primary/40 transition-all hover:scale-[1.02]">`);
        push_element($$renderer2, "div", 80, 10);
        $$renderer2.push(`<div class="text-4xl font-display font-black text-primary mb-2 group-hover:scale-110 transition-transform origin-left">`);
        push_element($$renderer2, "div", 81, 12);
        $$renderer2.push(`${escape_html(s.value)}</div>`);
        pop_element();
        $$renderer2.push(` <div class="text-sm font-bold uppercase tracking-wider text-white/80">`);
        push_element($$renderer2, "div", 82, 12);
        $$renderer2.push(`${escape_html(s.label)}</div>`);
        pop_element();
        $$renderer2.push(` <div class="text-[10px] font-mono text-white/20 uppercase mt-1">`);
        push_element($$renderer2, "div", 83, 12);
        $$renderer2.push(`${escape_html(s.sub)}</div>`);
        pop_element();
        $$renderer2.push(`</div>`);
        pop_element();
      }
      $$renderer2.push(`<!--]--></div>`);
      pop_element();
      $$renderer2.push(`</div>`);
      pop_element();
      $$renderer2.push(` <div class="relative"${attr_style("", { transform: `translateY(${stringify(rightY())}px)` })}>`);
      push_element($$renderer2, "div", 89, 4);
      $$renderer2.push(`<div class="relative z-10 space-y-6">`);
      push_element($$renderer2, "div", 90, 6);
      $$renderer2.push(`<p class="text-xl sm:text-2xl font-light text-white/60 leading-relaxed italic">`);
      push_element($$renderer2, "p", 91, 8);
      $$renderer2.push(`"I am Akpe Samuel, popularly known as Rayflix. I build frontend applications that combine robust engineering with engaging user experiences."</p>`);
      pop_element();
      $$renderer2.push(` <p class="text-white/40 leading-relaxed">`);
      push_element($$renderer2, "p", 94, 8);
      $$renderer2.push(`Based on a passion for technology and creative problem-solving, I collaborate with clients and teams to bring innovative digital ideas to life. I specialize in the modern web ecosystem, focusing on scalability and performance.</p>`);
      pop_element();
      $$renderer2.push(` <div class="pt-8 transition-transform hover:scale-[1.02]">`);
      push_element($$renderer2, "div", 98, 8);
      $$renderer2.push(`<img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&amp;w=500&amp;h=300" alt="Profile" class="w-full h-64 object-cover grayscale opacity-50 hover:grayscale-0 transition-all duration-700 engineered-border"/>`);
      push_element($$renderer2, "img", 99, 11);
      pop_element();
      $$renderer2.push(`</div>`);
      pop_element();
      $$renderer2.push(`</div>`);
      pop_element();
      $$renderer2.push(` <div class="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl -z-10">`);
      push_element($$renderer2, "div", 107, 6);
      $$renderer2.push(`</div>`);
      pop_element();
      $$renderer2.push(`</div>`);
      pop_element();
      $$renderer2.push(`</div>`);
      pop_element();
      $$renderer2.push(`</section>`);
      pop_element();
    },
    AboutMe
  );
}
AboutMe.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte.dev/docs/svelte/v5-migration-guide#Components-are-no-longer-classes for more information");
};
Projects[FILENAME] = "src/components/Projects.svelte";
function Projects($$renderer, $$props) {
  $$renderer.component(
    ($$renderer2) => {
      const projects = [
        {
          title: "Quantum Flux",
          category: "AI / Web Design",
          image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1964",
          link: "#"
        },
        {
          title: "Nova Dashboard",
          category: "Fintech Interface",
          image: "https://images.unsplash.com/photo-1551288049-bbbda536639a?auto=format&fit=crop&q=80&w=2070",
          link: "#"
        },
        {
          title: "Cortex OS",
          category: "System Design",
          image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072",
          link: "#"
        },
        {
          title: "Luma Creative",
          category: "Brand Portal",
          image: "https://images.unsplash.com/photo-1541462608141-ad4d156ec6b4?auto=format&fit=crop&q=80&w=2070",
          link: "#"
        }
      ];
      $$renderer2.push(`<section class="py-40 md:py-60 container mx-auto px-6 lg:px-20 relative" id="portfolio">`);
      push_element($$renderer2, "section", 21, 0);
      $$renderer2.push(`<div class="absolute inset-0 -z-10 pointer-events-none overflow-hidden opacity-80">`);
      push_element($$renderer2, "div", 23, 2);
      $$renderer2.push(`</div>`);
      pop_element();
      $$renderer2.push(` `);
      SectionHeader($$renderer2, { subtitle: "02 // Showcase", title: "Featured Work" });
      $$renderer2.push(`<!----> <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-32 mt-20 perspective-2000">`);
      push_element($$renderer2, "div", 30, 2);
      $$renderer2.push(`<!--[-->`);
      const each_array = ensure_array_like(projects);
      for (let i = 0, $$length = each_array.length; i < $$length; i++) {
        let project = each_array[i];
        $$renderer2.push(`<div class="h-full preserve-3d transition-all duration-700 hover:scale-[1.02] active:scale-95">`);
        push_element($$renderer2, "div", 32, 6);
        $$renderer2.push(`<div class="group relative overflow-hidden aspect-[4/5] md:aspect-[3/4] engineered-border bg-black perspective-1000 transform-style-3d">`);
        push_element($$renderer2, "div", 33, 8);
        $$renderer2.push(`<img${attr("src", project.image)}${attr("alt", project.title)} class="absolute inset-0 w-full h-full object-cover grayscale opacity-30 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"/>`);
        push_element($$renderer2, "img", 34, 10);
        pop_element();
        $$renderer2.push(` <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80">`);
        push_element($$renderer2, "div", 39, 10);
        $$renderer2.push(`</div>`);
        pop_element();
        $$renderer2.push(` <div class="absolute top-0 right-0 p-4 text-[10px] font-mono text-white/20 tracking-tighter uppercase">`);
        push_element($$renderer2, "div", 41, 10);
        $$renderer2.push(`${escape_html(project.category)}</div>`);
        pop_element();
        $$renderer2.push(` <div class="absolute bottom-0 left-0 p-8 w-full flex justify-between items-end">`);
        push_element($$renderer2, "div", 43, 10);
        $$renderer2.push(`<div class="text-left">`);
        push_element($$renderer2, "div", 44, 12);
        $$renderer2.push(`<h3 class="text-4xl font-display font-black uppercase tracking-tighter mb-2 group-hover:text-primary transition-colors leading-none">`);
        push_element($$renderer2, "h3", 45, 14);
        $$renderer2.push(`${escape_html(project.title)}</h3>`);
        pop_element();
        $$renderer2.push(` <div class="flex gap-3">`);
        push_element($$renderer2, "div", 46, 14);
        $$renderer2.push(`<span class="text-[10px] font-mono text-white/30 uppercase tracking-[0.2em]">`);
        push_element($$renderer2, "span", 47, 17);
        $$renderer2.push(`Archived_V1</span>`);
        pop_element();
        $$renderer2.push(` <span class="text-[10px] font-mono text-primary/40 uppercase tracking-[0.2em] animate-pulse">`);
        push_element($$renderer2, "span", 48, 17);
        $$renderer2.push(`Running</span>`);
        pop_element();
        $$renderer2.push(`</div>`);
        pop_element();
        $$renderer2.push(`</div>`);
        pop_element();
        $$renderer2.push(` <div class="w-14 h-14 border border-white/20 flex items-center justify-center text-white group-hover:border-primary group-hover:text-primary transition-all bg-black/40 backdrop-blur-md hover:rotate-45">`);
        push_element($$renderer2, "div", 51, 12);
        Arrow_up_right($$renderer2, { size: 28 });
        $$renderer2.push(`<!----></div>`);
        pop_element();
        $$renderer2.push(`</div>`);
        pop_element();
        $$renderer2.push(` <a${attr("href", project.link)} class="absolute inset-0 z-10"${attr("aria-label", `View ${project.title} project`)}>`);
        push_element($$renderer2, "a", 58, 10);
        $$renderer2.push(`</a>`);
        pop_element();
        $$renderer2.push(` <div class="absolute -bottom-1 -right-1 w-4 h-4 border-b border-r border-white/10 group-hover:border-primary transition-colors">`);
        push_element($$renderer2, "div", 59, 10);
        $$renderer2.push(`</div>`);
        pop_element();
        $$renderer2.push(`</div>`);
        pop_element();
        $$renderer2.push(`</div>`);
        pop_element();
      }
      $$renderer2.push(`<!--]--></div>`);
      pop_element();
      $$renderer2.push(`</section>`);
      pop_element();
    },
    Projects
  );
}
Projects.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte.dev/docs/svelte/v5-migration-guide#Components-are-no-longer-classes for more information");
};
Contact[FILENAME] = "src/components/Contact.svelte";
function Contact($$renderer, $$props) {
  $$renderer.component(
    ($$renderer2) => {
      const socialLinks = [
        { icon: Github, href: "#" },
        { icon: Twitter, href: "#" },
        { icon: Linkedin, href: "#" },
        { icon: Mail, href: "#" }
      ];
      $$renderer2.push(`<section class="py-40 container mx-auto px-6 lg:px-20 relative" id="contact">`);
      push_element($$renderer2, "section", 14, 0);
      $$renderer2.push(`<div class="absolute inset-0 -z-10 pointer-events-none overflow-hidden opacity-80">`);
      push_element($$renderer2, "div", 16, 2);
      $$renderer2.push(`</div>`);
      pop_element();
      $$renderer2.push(` <div class="engineered-border p-8 md:p-24 bg-white/[0.01] relative overflow-hidden group">`);
      push_element($$renderer2, "div", 18, 2);
      $$renderer2.push(`<div class="absolute top-0 right-0 p-6 text-[10px] font-mono text-white/5 uppercase tracking-[0.2em]">`);
      push_element($$renderer2, "div", 19, 4);
      $$renderer2.push(`Contact_Channel_Encrypted</div>`);
      pop_element();
      $$renderer2.push(` <div class="grid md:grid-cols-2 gap-20 relative z-10">`);
      push_element($$renderer2, "div", 21, 4);
      $$renderer2.push(`<div class="text-left">`);
      push_element($$renderer2, "div", 22, 6);
      SectionHeader($$renderer2, {
        subtitle: "04 // Terminal",
        title: "Get In Touch",
        class: "mb-10"
      });
      $$renderer2.push(`<!----> <p class="text-white/40 text-xl font-light mb-16 max-w-sm leading-relaxed">`);
      push_element($$renderer2, "p", 28, 8);
      $$renderer2.push(`Interested in working together or just want to say hi? I'm always open to new opportunities and collaborations.</p>`);
      pop_element();
      $$renderer2.push(` <div class="flex gap-4">`);
      push_element($$renderer2, "div", 32, 8);
      $$renderer2.push(`<!--[-->`);
      const each_array = ensure_array_like(socialLinks);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let link = each_array[$$index];
        $$renderer2.push(`<a${attr("href", link.href)} class="w-12 h-12 border border-white/5 bg-white/[0.02] flex items-center justify-center text-white/20 hover:text-primary hover:border-primary transition-all hover:-translate-y-1">`);
        push_element($$renderer2, "a", 34, 12);
        if (link.icon) {
          $$renderer2.push("<!--[-->");
          link.icon($$renderer2, { size: 18 });
          $$renderer2.push("<!--]-->");
        } else {
          $$renderer2.push("<!--[!-->");
          $$renderer2.push("<!--]-->");
        }
        $$renderer2.push(`</a>`);
        pop_element();
      }
      $$renderer2.push(`<!--]--></div>`);
      pop_element();
      $$renderer2.push(`</div>`);
      pop_element();
      $$renderer2.push(` <form class="space-y-6">`);
      push_element($$renderer2, "form", 44, 6);
      $$renderer2.push(`<div class="space-y-6">`);
      push_element($$renderer2, "div", 45, 8);
      $$renderer2.push(`<input type="text" placeholder="Full Name" class="w-full bg-white/[0.02] border border-white/10 p-5 focus:border-primary outline-none transition-colors font-mono text-sm text-primary placeholder:text-white/20"/>`);
      push_element($$renderer2, "input", 46, 10);
      pop_element();
      $$renderer2.push(` <input type="email" placeholder="Email Address" class="w-full bg-white/[0.02] border border-white/10 p-5 focus:border-primary outline-none transition-colors font-mono text-sm text-primary placeholder:text-white/20"/>`);
      push_element($$renderer2, "input", 51, 10);
      pop_element();
      $$renderer2.push(`</div>`);
      pop_element();
      $$renderer2.push(` <textarea placeholder="Your Message"${attr("rows", 5)} class="w-full bg-white/[0.02] border border-white/10 p-5 focus:border-primary outline-none transition-colors font-mono text-sm text-primary placeholder:text-white/20">`);
      push_element($$renderer2, "textarea", 57, 8);
      $$renderer2.push(`</textarea>`);
      pop_element();
      $$renderer2.push(` `);
      Button($$renderer2, {
        variant: "primary",
        class: "w-full py-6 text-sm",
        children: prevent_snippet_stringification(($$renderer3) => {
          $$renderer3.push(`<!---->Send Message `);
          Message_square($$renderer3, { size: 18 });
          $$renderer3.push(`<!---->`);
        })
      });
      $$renderer2.push(`<!----></form>`);
      pop_element();
      $$renderer2.push(`</div>`);
      pop_element();
      $$renderer2.push(` <div class="absolute -bottom-1 -right-1 w-8 h-8 border-b border-r border-primary">`);
      push_element($$renderer2, "div", 67, 4);
      $$renderer2.push(`</div>`);
      pop_element();
      $$renderer2.push(`</div>`);
      pop_element();
      $$renderer2.push(`</section>`);
      pop_element();
    },
    Contact
  );
}
Contact.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte.dev/docs/svelte/v5-migration-guide#Components-are-no-longer-classes for more information");
};
Footer[FILENAME] = "src/components/Footer.svelte";
function Footer($$renderer, $$props) {
  $$renderer.component(
    ($$renderer2) => {
      let scrollPercentage = 0;
      $$renderer2.push(`<footer class="relative pt-40 pb-20 overflow-hidden bg-background">`);
      push_element($$renderer2, "footer", 21, 0);
      $$renderer2.push(`<div class="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden h-[50%] top-0">`);
      push_element($$renderer2, "div", 22, 2);
      $$renderer2.push(`<div class="text-[25vw] md:text-[30vw] font-display font-black leading-none tracking-tighter text-white whitespace-nowrap opacity-[0.02]">`);
      push_element($$renderer2, "div", 23, 4);
      $$renderer2.push(`AKPE SAMUEL</div>`);
      pop_element();
      $$renderer2.push(`</div>`);
      pop_element();
      $$renderer2.push(` <div class="container mx-auto px-10 lg:px-20 relative z-10 border-t border-white/5 pt-20">`);
      push_element($$renderer2, "div", 30, 2);
      $$renderer2.push(`<div class="flex flex-col md:flex-row items-end justify-between gap-12">`);
      push_element($$renderer2, "div", 31, 4);
      $$renderer2.push(`<div class="flex flex-wrap gap-12 font-mono">`);
      push_element($$renderer2, "div", 32, 6);
      $$renderer2.push(`<div class="text-left">`);
      push_element($$renderer2, "div", 33, 8);
      $$renderer2.push(`<div class="text-[10px] text-white/20 mb-2 uppercase tracking-[0.2em]">`);
      push_element($$renderer2, "div", 34, 10);
      $$renderer2.push(`Coordinates</div>`);
      pop_element();
      $$renderer2.push(` <div class="text-xs text-white/60 tracking-tighter">`);
      push_element($$renderer2, "div", 35, 10);
      $$renderer2.push(`40.7128° N, 74.0060° W</div>`);
      pop_element();
      $$renderer2.push(`</div>`);
      pop_element();
      $$renderer2.push(` <div class="text-left">`);
      push_element($$renderer2, "div", 37, 8);
      $$renderer2.push(`<div class="text-[10px] text-white/20 mb-2 uppercase tracking-[0.2em]">`);
      push_element($$renderer2, "div", 38, 10);
      $$renderer2.push(`Tech_Stack</div>`);
      pop_element();
      $$renderer2.push(` <div class="text-xs text-white/60 tracking-tighter">`);
      push_element($$renderer2, "div", 39, 10);
      $$renderer2.push(`SVELTE_THRELTE_GSAP</div>`);
      pop_element();
      $$renderer2.push(`</div>`);
      pop_element();
      $$renderer2.push(` <div class="text-left">`);
      push_element($$renderer2, "div", 41, 8);
      $$renderer2.push(`<div class="text-[10px] text-white/20 mb-2 uppercase tracking-[0.2em]">`);
      push_element($$renderer2, "div", 42, 10);
      $$renderer2.push(`Signal</div>`);
      pop_element();
      $$renderer2.push(` <div class="text-xs text-primary font-bold tracking-tighter animate-pulse">`);
      push_element($$renderer2, "div", 43, 10);
      $$renderer2.push(`ENCRYPTED [60 FPS]</div>`);
      pop_element();
      $$renderer2.push(`</div>`);
      pop_element();
      $$renderer2.push(`</div>`);
      pop_element();
      $$renderer2.push(` <div class="flex items-center gap-6 mt-12 md:mt-0">`);
      push_element($$renderer2, "div", 47, 6);
      $$renderer2.push(`<div class="text-right">`);
      push_element($$renderer2, "div", 48, 8);
      $$renderer2.push(`<div class="text-[10px] text-white/20 uppercase tracking-[0.2em] mb-2 font-mono">`);
      push_element($$renderer2, "div", 49, 10);
      $$renderer2.push(`Scroll Status</div>`);
      pop_element();
      $$renderer2.push(` <div class="h-[2px] w-48 bg-white/5 relative overflow-hidden">`);
      push_element($$renderer2, "div", 50, 10);
      $$renderer2.push(`<div class="absolute top-0 left-0 h-full bg-primary transition-all duration-300"${attr_style("", { width: `${stringify(scrollPercentage)}%` })}>`);
      push_element($$renderer2, "div", 51, 12);
      $$renderer2.push(`</div>`);
      pop_element();
      $$renderer2.push(`</div>`);
      pop_element();
      $$renderer2.push(`</div>`);
      pop_element();
      $$renderer2.push(` <button class="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white/20 hover:text-white hover:border-primary cursor-pointer transition-all hover:scale-110">`);
      push_element($$renderer2, "button", 57, 8);
      Arrow_up_right($$renderer2, { class: "-rotate-45", size: 20 });
      $$renderer2.push(`<!----></button>`);
      pop_element();
      $$renderer2.push(`</div>`);
      pop_element();
      $$renderer2.push(`</div>`);
      pop_element();
      $$renderer2.push(`</div>`);
      pop_element();
      $$renderer2.push(`</footer>`);
      pop_element();
    },
    Footer
  );
}
Footer.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte.dev/docs/svelte/v5-migration-guide#Components-are-no-longer-classes for more information");
};
_page[FILENAME] = "src/routes/+page.svelte";
function _page($$renderer, $$props) {
  $$renderer.component(
    ($$renderer2) => {
      $$renderer2.push(`<div class="relative min-h-screen bg-background text-white selection:bg-primary selection:text-black">`);
      push_element($$renderer2, "div", 10, 0);
      $$renderer2.push(`<div class="fixed inset-0 grid-background opacity-20 -z-10">`);
      push_element($$renderer2, "div", 11, 2);
      $$renderer2.push(`</div>`);
      pop_element();
      $$renderer2.push(` `);
      Navbar($$renderer2);
      $$renderer2.push(`<!----> <main>`);
      push_element($$renderer2, "main", 15, 2);
      Hero($$renderer2);
      $$renderer2.push(`<!----> `);
      AboutMe($$renderer2);
      $$renderer2.push(`<!----> `);
      Projects($$renderer2);
      $$renderer2.push(`<!----> `);
      Contact($$renderer2);
      $$renderer2.push(`<!----></main>`);
      pop_element();
      $$renderer2.push(` `);
      Footer($$renderer2);
      $$renderer2.push(`<!----></div>`);
      pop_element();
    },
    _page
  );
}
_page.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte.dev/docs/svelte/v5-migration-guide#Components-are-no-longer-classes for more information");
};
export {
  _page as default
};
