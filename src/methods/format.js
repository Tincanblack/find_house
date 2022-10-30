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
export function dateFormat(timestamp = "", clock = false) {
	if (timestamp === "") return false;
	let dataTime = new Date(timestamp * 1000);
	let Y = dataTime.getFullYear() + "-";
	let M =
		(dataTime.getMonth() + 1 < 10
			? "0" + (dataTime.getMonth() + 1)
			: dataTime.getMonth() + 1) + "-";
	let D =
		(dataTime.getDate() < 10
			? "0" + dataTime.getDate()
			: dataTime.getDate()) + " ";
	let h = "";
	let m = "";
	let s = "";
	if (clock) {
		h =
			(dataTime.getHours() < 10
				? "0" + dataTime.getHours()
				: dataTime.getHours()) + ":";
		m =
			(dataTime.getMinutes() < 10
				? "0" + dataTime.getMinutes()
				: dataTime.getMinutes()) + ":";
		s =
			dataTime.getSeconds() < 10
				? "0" + dataTime.getSeconds()
				: dataTime.getSeconds();
	}
	dataTime = Y + M + D + h + m + s;
	return dataTime;
}

// DD YYYY-MM
export function publicDateFormat(timestamp = "") {
	if (timestamp === "") return false;
	let dateFormatAttay = new Date(timestamp * 1000).toLocaleDateString();
	dateFormatAttay = dateFormatAttay.replace("/", ".").split("/");
	return dateFormatAttay;
}
