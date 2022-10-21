<template>
	<div class="card">
		<img :src="info.url.png" />
		<div class="text">
			<!-- add underlines with no redirects lmao-->
			<a>{{ info.name }}</a>
		</div>
		<br />
		<div class="btns">
			<a class="dwnld-btn" :href="info.url.png" target="_blank">PNG</a>
			<a class="dwnld-btn" :href="info.url.svg" target="_blank">SVG</a>
		</div>
	</div>
</template>

<script>
export default {
	name: 'emojiCard',
	props: {
		info: Object,
	},
};
</script>

<style>
div.card {
	margin: auto;
	text-align: left;
	position: relative;
	display: grid;
	grid-template-columns: auto auto auto auto;
	border-radius: 0.5rem;
	width: 20em;
	background-color: aliceblue;
}
div.card img {
	margin: 1em 0 1em 0.8em;
	width: 3em;
}
div.card .text {
	text-align: center;
	display: block;
	margin-left: 0.5em;
}
div.card .btns {
	margin-top: 1em;
	margin-right: 0.5em;
	justify-self: end;
}
div.card .text {
	margin-top: 1.5em;
}

/* from https://fdossena.com/?p=html5cool/buttons/i.frag */
a.dwnld-btn {
	display: block;
	padding: 0.3em 1.2em;
	margin: 0 1em 0.4em 0;
	border-radius: 2em;
	box-sizing: border-box;
	text-decoration: none;
	color: #ffffff;
	font-size: 0.7em;
	background-color: #4eb5f1;
	transition: all 0.2s;
}
a.dwnld-btn:hover {
	background-color: #4095c6;
}

div.card .btns a:not(:last-child) {
	margin-bottom: 0.45em;
}
</style>
