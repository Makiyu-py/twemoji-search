<template>
	<div class="not-footer">
		<h1>
			Twemoji Search!
			<img
				:src="`${getPublicPath()}logo.svg`"
				alt="logo"
				class="emoji"
				style="margin-left: 0.1em"
			/>
		</h1>
		<div class="placeholder-text" v-if="loading">Loading... ✨</div>
		<div v-else>
			<form v-on:submit.prevent="findSearch">
				<input
					style="text-align: center"
					type="text"
					v-model="searchQuery"
					placeholder="smile"
					@keyup="findSearch"
				/>
			</form>
			<div class="res" v-show="hasResults">
				<emojiCard
					v-for="em in queriedEmojis"
					v-bind:key="em"
					:info="em['item']"
				></emojiCard>
			</div>
			<div class="placeholder-text" v-show="!hasResults">
				Welp, no results (yet)!
			</div>
		</div>
	</div>
	<footer>
		Made with
		<img
			src="https://twemoji.maxcdn.com/v/latest/72x72/1f499.png"
			class="emoji"
		/>
		(and
		<a
			href="https://v3.vuejs.org/"
			target="_blank"
			style="text-decoration-color: #42b883"
			>Vue.js</a
		>) by
		<a
			href="https://github.com/Makiyu-py"
			style="text-decoration-color: #3b5375"
			target="_blank"
			>Makiyu</a
		>
	</footer>
</template>

<script>
import emojiCard from './components/emojiCard.vue';
// current idea on how to implement this thing
// 1. we get all code points and emoji info
//	  (https://api.github.com/repos/twitter/twemoji/git/trees/master?recursive=1 then filter)
// 	  (https://emojibase.dev/)
// 2. get the search bar then we map all the emojis from emojibase's shortcodes
//    to what the user is searching
// 3. we get all the code points of the map from the emoji info
// 4. check/convert if it's a valid code point with the code points we got
// 5. make a object with the links for the downloadable emojis https://twemoji.maxcdn.com/v/latest/svg/{codes}.svg

// inspiration for this implementation is from Sebastian Aigner's twemoji-amazing
// 	(https://github.com/SebastianAigner/twemoji-amazing/tree/master/src/main/kotlin)
import Fuse from 'fuse.js';
import { fetchEmojiInfo } from './fetcher.js';

export default {
	name: 'App',
	components: { emojiCard },
	methods: {
		// the `publicPath` variable always returned undefined so I made this method
		getPublicPath() {
			return process.env.NODE_ENV === 'production'
				? '/twemoji-search/'
				: '/';
		},
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

			let results = this.fuzzy.search(copiedQuery);
			if (results.length === 0) {
				this.queriedEmojis = [];
				this.hasResults = false;
				return;
			}
			if (results.length > 10) results = results.slice(0, 10);
			this.queriedEmojis = results;
			this.hasResults = true;
		},
	},
	data() {
		return {
			loading: true,
			hasResults: false,
			queriedEmojis: [],
			searchQuery: '',
		};
	},
	mounted() {
		fetchEmojiInfo().then((data) => {
			data = data.map((e) => ({
				...e,
				url: {
					png: `https://twemoji.maxcdn.com/v/latest/72x72/${e.hexcode.toLowerCase()}.png`,
					svg: `https://twemoji.maxcdn.com/v/latest/svg/${e.hexcode.toLowerCase()}.svg`,
				}
			}));
			this.fuzzy = new Fuse(data, {
				threshold: 0.2,
				keys: ['label'],
			});
			this.emojis = data;
			this.loading = false;
		});
	},
};
</script>
