import { fetchEmojis } from 'emojibase';
import axios from 'axios';

export async function getEmojiCodes() {
	// getting all emoji codes from twemoji github
	let res = await axios.get(
		'https://api.github.com/repos/twitter/twemoji/git/trees/master?recursive=1'
	);
	let emojiCodes = [];
	for (let x of res.data.tree) {
		if (x.path.startsWith('assets/svg/'))
			emojiCodes.push(x.path.substring(11, x.path.length - 4));
	}
	return emojiCodes;
}

export async function fetchEmojiInfo() {
	let emojiCodes = await getEmojiCodes();
	// getting all emoji info
	let data = await fetchEmojis('en', {
		shortcodes: ['cldr'],
	});
	// delete the emojis that doesn't exist on twemoji
	data = data.filter(function (item) {
		return emojiCodes.includes(item.hexcode.toLowerCase());
	});
	return data;
}
