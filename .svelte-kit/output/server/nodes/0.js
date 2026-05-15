import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.D1G_OBgf.js","_app/immutable/chunks/BbdRq5bs.js","_app/immutable/chunks/DYh2FHLc.js","_app/immutable/chunks/QN0zyPkX.js"];
export const stylesheets = ["_app/immutable/assets/0.wjTgxNQw.css"];
export const fonts = [];
