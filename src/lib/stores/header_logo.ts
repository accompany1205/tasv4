import { derived } from 'svelte/store';
import { page } from '$app/stores';
import { LogoType } from '$lib/constant';

const headerLogo = derived(page, ($page) => {
	if ($page.url.pathname === '/homepage') {
		return LogoType.GLOBE;
	}
	return LogoType.SKETCHUP;
});

export default headerLogo;
