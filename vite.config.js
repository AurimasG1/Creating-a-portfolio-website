// vite.config.js
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
	plugins: [vue()],
	base: '/Creating-a-portfolio-website/', // 👈 change this to your GitHub repo name
});
