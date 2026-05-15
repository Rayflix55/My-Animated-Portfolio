export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([]),
	mimeTypes: {},
	_: {
		client: {start:"_app/immutable/entry/start.CToWqUlV.js",app:"_app/immutable/entry/app.C08KCZp4.js",imports:["_app/immutable/entry/start.CToWqUlV.js","_app/immutable/chunks/euxw3m8B.js","_app/immutable/chunks/DYh2FHLc.js","_app/immutable/entry/app.C08KCZp4.js","_app/immutable/chunks/DYh2FHLc.js","_app/immutable/chunks/Bkw4FBBR.js","_app/immutable/chunks/BbdRq5bs.js","_app/immutable/chunks/BjRpY627.js","_app/immutable/chunks/QN0zyPkX.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
