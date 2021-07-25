// binary search for an array of strings
const letterSearchBinary = function (payload) {
	const needle = payload.needle;
	const haystack = payload.haystack;

	if (needle === '') return [];

	let haystackLength = haystack.length;
	let needleLength = needle.length;

	if (typeof haystack === 'undefined' || !haystackLength) return [];

	// get middle position
	let mid;

	let high = haystack.length - 1;
	let low = 0;

	while (low <= high) {
		mid = Math.floor((low + high) / 2);
		let element = haystack[mid].substr(0, needleLength);

		if (element > needle) {
			high = mid - 1;
		} else if (element < needle) {
			low = mid + 1;
		} else {
			mid = mid;
			break;
		}
	}
	if (typeof mid === 'undefined') mid = -1;

	// getting the results
	if (mid === -1) return [];

	let start, end;

	for (let i = mid; i > -1; i--) {
		let element = haystack[i].substr(0, needleLength);
		if (element != needle) {
			start = i + 1;
			break;
		} else {
			start = 0;
		}
	}
	for (let i = mid; i < haystackLength; i++) {
		let element = haystack[i].substr(0, needleLength);
		if (element != needle) {
			end = i;
			break;
		} else {
			end = haystackLength - 1;
		}
	}
	let result = [];
	for (let i = start; i < end; i++) {
		result.push(haystack[i]);
	}

	return result;
};

export default letterSearchBinary;
