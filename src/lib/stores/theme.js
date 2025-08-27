// src/lib/stores/theme.js
import { writable } from 'svelte/store';

export const theme = writable('default');

// optional: persist to localStorage
theme.subscribe((value) => {
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('theme', value);
  }
});
