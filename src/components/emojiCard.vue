<template>
	<div class="card">
		<img :src="info.url.png" />
		<div class="text">
			<a :href="info.url.png" target="_blank">{{ info.name }}</a>
		</div>
		<br />
		<div class="btns">
			<form :action="info.url.png" target="_blank">
				<input type="submit" value="PNG Download" />
			</form>
			<form :action="info.url.svg" target="_blank">
				<input type="submit" value="SVG Download" />
			</form>
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
	box-shadow: 0 0.4em 0.7em rgba(0, 0, 0, 0.356);
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
div.card .btns form {
	display: block;
}
div.card .btns form:not(:last-child) {
	margin-right: 0.45em;
}

</style>
