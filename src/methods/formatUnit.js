export function currencyFormat(num) {
	const parts = num.toString().split(".");
	parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	return `${parts.join(".")}`;
}

export function patternFormat(patterns) {
	const formatPatternVal = patterns.toString().split("/");
	let result;
	formatPatternVal.forEach((pattern) => {
		const patternName = ["房", "廳", "衛", "室"];
		patternName.forEach((name) => {
			result += pattern.join(name);
		});
	});
	return result;
}

export function priceDiscount(originPrice, currentPrice) {
	var result = ((originPrice - currentPrice) / originPrice) * 100;
	return result.toFixed(2) + "%";
}
