<script>
	import { page } from '$app/stores'
	$: currentRoute = $page.url.pathname
	const menu = [
		{ name: 'Órai munka és tananyagok', href: '/sob' },
		{ name: 'Portfólió követelmények', href: '/sob/portfolio' },
		{ name: 'Frontend tematika', href: '/sob/frontend' }
	]
</script>

<div>
	{#each menu as item}
		<a class={currentRoute === item.href ? 'selected' : 'norm'} href={item.href}>{item.name}</a>
	{/each}
</div>
<slot />

<style>
	a {
		padding: 5px;
		margin: 3px;
		border-radius: 7px;
		background-color: rgb(186, 217, 207);
		box-shadow: 1px 1px 4px black;
	}
	a.selected {
		background-color: black;
		color: white;
	}
	a:hover {
		background-color: rgb(85, 107, 99);
	}
</style>
