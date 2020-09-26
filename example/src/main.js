import App from './App.svelte';
import { setup } from '../../../index'

setup()

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;
