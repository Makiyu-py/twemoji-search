<template>
	<div class="card">
		<img :src="info.url.png" />
		<div class="text">
			<!-- add underlines with no redirects lmao-->
			<a>{{ info.label }}</a>
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

<style scoped>
div.card {
	margin: auto;
	margin-bottom: 0.8em;
	text-align: left;
	position: relative;
	display: grid;
	grid-template-columns: auto auto auto auto;
	border-radius: 0.5rem;
	height: 5em;
	width: 20em;
	background-color: aliceblue;
}
img {
	margin-left: 1em;
	width: 3em;
	/* vertically align img */
	position: relative;
	top: 50%;
	transform: translateY(-50%);
}
.text {
	text-align: center;
	padding-inline: 1em;
	line-height: 1.3;
	display: flex;
	align-items: center;
	justify-content: center;
}
.btns {
	margin-right: 1em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
}

/* from https://fdossena.com/?p=html5cool/buttons/i.frag */
a.dwnld-btn {
	display: block;
	padding: 0.3em 1.2em;
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

.btns a:not(:last-child) {
	margin-bottom: 0.45em;
}
</style>
