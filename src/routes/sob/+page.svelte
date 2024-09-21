<script>
const data = [
    {
        id: 1,
        sz: [1,2],
        date: '2024.09.05.',
        theme: 'HTML+CSS alap',
        source: 'https://github.com/tomuwhu/2024szft_example01',
        online: 'https://tomuwhu.github.io/2024szft_example01/'
    },
    {
        id: 2,
        sz: [3],
        date: '2024.09.05.',
        theme: 'JavaScript',
        source: 'https://github.com/tomuwhu/2024szft_example01/blob/main/p2/engine.js',
        online: 'https://tomuwhu.github.io/2024szft_example01/p2'
    },
    {
        id: 3,
        sz: [4,7],
        date: '2024.09.11.',
        theme: 'JavaScript',
        source: 'https://github.com/tomuwhu/2024szft_example01/blob/main/p3/egy.js',
        online: 'https://tomuwhu.github.io/2024szft_example01/p3'
    },
    {
        id: 4,
        sz: [8,10],
        date: '2024.09.12.',
        theme: 'SvelteKit Static Site Generator'
    },
    {
        id: 5,
        sz: [11,14],
        date: '2024.09.18.',
        theme: 'SvelteKit Számológép',
        source: 'https://github.com/tomuwhu/sov02_sveltekit',
        online: 'https://tomuwhu.github.io/sov02_sveltekit/'
    },
    {
        id: 5,
        sz: [15,17],
        date: '2024.09.19.',
        theme: 'Vite-Svelte Reversi',
        source: 'https://github.com/tomuwhu/reversi/blob/master/src/App.svelte',
        online: 'https://tomuwhu.github.io/reversi/'
    }

]   
</script>
<h1>Szakképzési oldal 2024/25</h1>
<hr />
<a class="x" href="https://discord.gg/q4G2k479Zw" target="_blank"
	>Discord Server Invite: q4G2k479Zw</a
>
<hr />
<table id="t1">
	<tr>
		<th class="id">Óra sorszáma</th>
		<th class="date">Dátum</th>
		<th>Téma</th>
		<th>Forrás</th>
		<th>Online kipróbálható</th>
	</tr>
    {#each data as item}
	<tr>
        {#if item.sz[1]}
		<td class="id">{item.sz[0]}. - {item.sz[1]}.</td>
        {:else}
        <td class="id">{item.sz[0]}.</td>
        {/if}
		<td class="t">{item.date}</td>
		<td class="t">{item.theme}</td>
        {#if item.source}
		<td class="i1"
			><a target="_blank" href={item.source}>👓</a></td
		>
        {/if}
        {#if item.online}
		<td class="i2"
			><a target="_blank"  href={item.online}>💻</a></td
		>
        {/if}
	</tr>
    {/each}
</table>

<style>
	:global(body) {
		background-color: #d6dba9;
		text-align: center;
		padding: 10px;
	}
	h1 {
		font-family: 'Courier New', Courier, monospace;
		padding: 20px;
	}
	table#t1 {
		margin: auto;
		border-collapse: collapse;
	}
    td, th {
        padding-left: 30px;
        padding-right: 30px;
    }
	.id,
	.date {
		text-align: center;
	}
	td.i1,
	td.i2 {
		font-size: 30px;
        cursor: pointer;
        padding: 0px;
	}
	td.t {
		font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
		text-shadow: 1px 1px 4px gray;
		color: rgb(37, 78, 95);
	}
	td.i1:hover,
	td.i2:hover {
		text-shadow: 1px 1px 4px black;
	}
	a {
		text-decoration: none;
	}
	a.x {
		padding: 10px;
		margin: 10px;
		width: 200px;
		border-radius: 10px;
		box-shadow: 1px 1px 3px black;
		background-color: #a9cedb;
	}
	a.x:hover {
		background-color: #a9dbd4;
		box-shadow: 1px 1px 5px black;
		border: solid 3px rgb(159, 69, 69);
	}
</style>
