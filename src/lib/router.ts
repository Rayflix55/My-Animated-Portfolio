import { writable } from 'svelte/store';

function normalizePath(pathname: string) {
  return pathname === '/projects' ? 'projects' : 'home';
}

export const route = writable(normalizePath(window.location.pathname));

export function initRouter() {
  route.set(normalizePath(window.location.pathname));
  window.addEventListener('popstate', () => route.set(normalizePath(window.location.pathname)));
}

export function navigate(path: string) {
  history.pushState({}, '', path);
  route.set(normalizePath(path));
}
