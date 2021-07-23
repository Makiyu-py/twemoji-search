import { createApp } from 'vue';
import App from './App.vue';
import { fetchEmojiInfo } from './fetcher';

const app = createApp(App);

fetchEmojiInfo().then((data) => {
	let emojiMap = require('emoji-name-map').emoji;
	let newEmojiObject = {};
	Object.keys(emojiMap).forEach((key) => {
		// console.log	(key);
		let emojiCode = data.find((x) => x.char === emojiMap[key]);
		if (emojiCode === undefined) return;
		emojiCode = emojiCode.codes;
		newEmojiObject[key] = {
			name: key.replace('-', ' '),
			emoji: emojiMap[key],
			url: {
				png: `https://twemoji.maxcdn.com/v/latest/72x72/${emojiCode}.png`,
				svg: `https://twemoji.maxcdn.com/v/latest/svg/${emojiCode}.svg`,
			},
			cp: emojiCode,
		};
	});

	app.config.globalProperties.emojiMap = newEmojiObject;
	app.config.globalProperties.charInfos = data;
	app.mount('#app');
});
