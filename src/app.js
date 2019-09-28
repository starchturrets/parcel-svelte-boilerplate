import App from './components/App.svelte';

const app = new App({
  props: {
    name: 'World',
  },
  target: document.body,
});

export default app;
