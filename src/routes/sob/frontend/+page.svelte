<script>
	import markdownit from 'markdown-it'
	import { onMount } from 'svelte'
	const md = markdownit()
	var result
	onMount(async () => {
		let ft = await fetch('../../frontend.md').then((v) => v.text())
		result = md.render(ft)
	})
</script>

<table>
	<td>
		<div class="cont">
			<div>
				{@html result}
			</div>
		</div>
	</td>
</table>

<style>
    table {
    margin: auto;
}

:global(img) {
    width: 100px;
}

:global(h1) {
    font-size: 25px;
}

:global(h2) {
    font-size: 20px;
}

.cont div {
    display: inline-block;
    border: solid 1px gray;
    border-radius: 10px;
    padding: 25px;
    background-color: rgb(230, 242, 207);
    box-shadow: 1px 1px 3px inset black;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 13px;
    text-shadow: 0px 0px 2px gray;
    color: rgb(20, 73, 64);
}

.cont {
    color: rgb(36, 57, 66);
    display: inline-block;
    border: solid 1px gray;
    border-radius: 17px;
    padding: 10px;
    background-color: rgb(94, 94, 67);
    box-shadow: 1px 1px 3px black;
    text-align: left;
}

:global(img) {
    width: 60px;
}

:global(h1) {
    text-align: center;
    color: rgb(8, 92, 98);
    text-shadow: 1px 1px 3px gray;
    margin-top: 0px;
    font-size: 22px;
}

:global(em) {
    color: rgb(93, 93, 29);
    text-shadow: 1px 1px 2px gray;
}

:global(strong) {
    font-weight: normal;
    color: rgb(93, 59, 29);
    text-shadow: 1px 1px 2px gray;
}

:global(h2) {
    font-family: 'Courier New', Courier, monospace;
    text-align: left;
    padding-left: 20px;
    color: rgb(81, 101, 119);
    text-shadow: 1px 1px 3px gray;
    margin-top: 0px;
    font-size: 16px;
}

:global(p) {
    text-align: center;
    text-shadow: 1px 1px 3px gray;
    font-size: 14px;
    color: rgb(81, 101, 119);
}

:global(li p) {
    text-shadow: 0px 0px 1px gray;
    font-size: 12px;
    color: rgb(110, 65, 48);
    text-align: left;
}

:globa(div.tv) {
    padding-top: 20px;
    text-align: center;
    font-size: 18px;
    text-shadow: 1px 1px 3px gray;
    color: rgb(13, 13, 58);
}

:global(div.tv select) {
    border-radius: 10px;
    background-color: antiquewhite;
    color: rgb(22, 60, 47);
    font-size: 15px;
    padding: 5px;
}

:global(a) {
    all: unset;
    cursor: pointer;
    color: rgb(110, 57, 57);
}

:global(a:hover) {
    text-shadow: 1px 1px 3px gray;
}

:global(a:visited) {
    color: rgb(74, 20, 20);
}
</style>