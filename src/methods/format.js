// 售價
export function currencyFormat(num = 0) {
	const parts = num.toString().split(".");
	parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	return `${parts.join(".")}`;
}

// 格局
export function patternFormat(patterns = "") {
	const patternsCount = patterns.toString().split("/");
	let result = "";
	patternsCount.forEach((patternCount, index) => {
		const patternName = ["房", "廳", "衛", "室"];
		if (patternCount > 0) {
			result += patternCount + patternName[index];
		}
	});
	return result;
}

// 百分比
export function calToPercent(originPrice = 0, currentPrice = 0, type) {
	let result = ((originPrice - currentPrice) / originPrice) * 100;
	switch (type) {
		case "discount":
			result = result.toFixed(2) + "%";
			break;
		case "management":
			result = result.toFixed(1) + "%";
			break;
		default:
			break;
	}
	return result;
}

// 標籤
export function filterItemTag(item) {
	const filteredTags = item.tags.filter((tag) => {
		return tag === "新上架" || tag === "低總價" || tag === "店長推薦";
	});
	return filteredTags;
}

// 時間
// YYYY-MM-DD
export function dateFormat(time = "") {
	if (time === "") return false;
	const localDate = new Date(time * 1000);
	return localDate.toLocaleDateString();
}

// YYYY-MM-DD HH:MM
export function dateFormatWithTime(dateTime) {
	function padTo2Digits(dateTime) {
		return dateTime.toString().padStart(2, "0");
	}

	return (
		[
			dateTime.getFullYear(),
			padTo2Digits(dateTime.getMonth() + 1),
			padTo2Digits(dateTime.getDate()),
		].join("/") +
		" " +
		[
			padTo2Digits(dateTime.getHours()),
			padTo2Digits(dateTime.getMinutes()),
			padTo2Digits(dateTime.getSeconds()),
		].join(":")
	);
}

// DD YYYY-MM
export function publicDateFormat(time = "") {
	if (time === "") return false;
	let dateFormatAttay = dateFormat(time);
	dateFormatAttay = dateFormatAttay.replace("/", ".").split("/");
	return dateFormatAttay;
}
