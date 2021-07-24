<template>
	<h1>Twemoji Search!</h1>
	<form v-on:submit.prevent="findSearch">
		<input
			type="text"
			v-model="searchQuery"
			placeholder="smile"
			@keyup="findSearch"
		/>
	</form>
	<ul class="res" v-show="hasResults">
		<li v-for="em in queriedEmojis" v-bind:key="em">
			<a v-bind:href="em.url.png" download>
				{{ em.name }} <img v-bind:src="em.url.png" class="emoji" />
			</a>
		</li>
	</ul>
	<h3 v-show="!hasResults">Welp, no results!</h3>
	<footer class="footer">
		Made with
		<img v-bind:src="emojiMap['blue_heart'].url.png" class="emoji" /> (and
		<a href="https://v3.vuejs.org/" style="text-decoration-color: #42b883"
			>Vue.js</a
		>) by
		<a href="https://github.com/Makiyu-py">Makiyu</a>
	</footer>
</template>

<script>
// current idea on how to implement this thing
// 1. we get all code points and emoji info
//	  (https://api.github.com/repos/twitter/twemoji/git/trees/fc6688975af4c908eae5a144f6df6e71bdb8a428)
// 	  (https://unpkg.com/emoji.json/emoji.json)
// 2. get the search bar then we map all the emojis from `emoji-name-map` to what the user
//    is searching
// 3. we get all the code points of the map from the emoji info
// 4. check/convert if it's a valid code point with the code points we got
// 4. make a object with the links for the downloadable emojis https://twemoji.maxcdn.com/v/latest/svg/{codes}.svg

export default {
	name: 'App',
	methods: {
		findSearch() {
			if (this.searchQuery.length === 0) {
				this.queriedEmojis = [];
				this.hasResults = false;
				return;
			}
			// copy search query
			let copiedQuery = (' ' + this.searchQuery).slice(1);
			copiedQuery = copiedQuery
				.toLowerCase()
				.replaceAll(/[^a-z\s]/g, '') // remove/ignore special chars
				.replaceAll(/\s/g, '_');

			// this is the worst search algorithm someone has made but idk
			// how to make a better one so I'm sticking with this
			let results = Object.keys(this.emojiMap).filter(function (emojiName) {
				// check if the query is a substring of the emoji name
				// to count as a result
				return emojiName.includes(copiedQuery);
			});
			if (results.length > 10) results = results.slice(0, 10);
			this.queriedEmojis = results.map((e) => this.emojiMap[e]);
			if (this.queriedEmojis.length > 0) this.hasResults = true;
		},
	},
	data() {
		return {
			hasResults: false,
			queriedEmojis: [],
			searchQuery: '',
		};
	},
};
</script>

<style>
@import './style.css';
</style>
