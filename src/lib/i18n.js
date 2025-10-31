// src/lib/i18n.js
import { register, init, getLocaleFromNavigator } from 'svelte-i18n';

// Register translation files
register('en', () => import('./locales/en.json'));
register('bn', () => import('./locales/bn.json'));

// Init i18n
init({
  fallbackLocale: 'en',
  initialLocale: getLocaleFromNavigator()
});
