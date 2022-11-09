const axios = require('axios');

async function getEmojiCodes() {
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

async function fetchEmojiInfo() {
	let emojiCodes = await getEmojiCodes();
	console.log(emojiCodes);
	// getting all emoji info
	const res = await axios.get(
		'https://unpkg.com/emoji.json@13.1.0/emoji.json'
	);
	let data = res.data;
	for (let item of data) {
		item.name = item.name.replace(/:?\s/g, '_');
		item.codes = item.codes.toLowerCase().replace(/\s/g, '-');
	}
	// delete the emojis that doesn't exist on twemoji
	data = data.filter(function (item) {
		return emojiCodes.includes(item.codes);
	});
	return data;
}

module.exports = {
	fetchEmojiInfo,
	getEmojiCodes,
};
