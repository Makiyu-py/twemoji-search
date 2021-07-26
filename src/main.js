import { createApp } from 'vue';
import App from './App.vue';
import Fuse from 'fuse.js';
import { fetchEmojiInfo } from './fetcher';

const app = createApp(App);

fetchEmojiInfo().then((data) => {
	let emojiMap = require('emoji-name-map').emoji;
	let emojiArray = [];
	Object.keys(emojiMap).forEach((key) => {
		// console.log	(key);
		let emojiCode = data.find((x) => x.char === emojiMap[key]);
		if (emojiCode === undefined) return;
		emojiCode = emojiCode.codes;
		emojiArray.push({
			name: key.replaceAll('_', ' '),
			emoji: emojiMap[key],
			url: {
				png: `https://twemoji.maxcdn.com/v/latest/72x72/${emojiCode}.png`,
				svg: `https://twemoji.maxcdn.com/v/latest/svg/${emojiCode}.svg`,
			},
			cp: emojiCode,
		});
	});

	app.config.globalProperties.emojiArray = emojiArray;
	app.config.globalProperties.charInfos = data;
	app.config.globalProperties.fuzzy = new Fuse(emojiArray, {
		threshold: 0.2,
		keys: ['name'],
	});
	app.mount('#app');
});
