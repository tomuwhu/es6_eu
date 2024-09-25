<script>
	import { page } from '$app/stores'
	$: currentRoute = $page.url.pathname
	const menu = [
		{ name: 'Órai munka és tananyagok', href: '/sob' },
		{ name: 'Portfólió követelmények', href: '/sob/portfolio' },
		{ name: 'Frontend tematika', href: '/sob/frontend' }
	]
</script>

<div class="cont">
	{#each menu as item}
		<a class={currentRoute === item.href ? 'selected' : 'norm'} href={item.href}>{item.name}</a>
	{/each}
</div>
<slot />

<style>
	div.cont {
		display: inline-flex;
		flex-wrap: wrap;
		justify-content: center;
	}
	a {
		padding: 0px;
		padding-left: 10px;
		padding-right: 10px;
		margin-left: 3px;
		margin-right: 3px;
		margin-bottom: 10px;
		border-radius: 7px;
		background-color: rgb(186, 217, 207);
		box-shadow: 1px 1px 4px black;
		white-space: nowrap;
	}
	a.selected {
		background-color: black;
		color: white;
	}
	a:hover {
		background-color: rgb(85, 107, 99);
	}
</style>
