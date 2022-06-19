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
export function dateFormat(time) {
	const localDate = new Date(time * 1000);
	return localDate.toLocaleDateString();
}
