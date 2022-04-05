export function currencyFormat(num) {
	const parts = num.toString().split(".");
	parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	return `${parts.join(".")}萬`;
}

export function patternFormat(pattern) {
	const parts = pattern.toString().split("/");
	return parts;
}

export function priceDiscount(originPrice, currentPrice) {
	var result = ((originPrice - currentPrice) / originPrice) * 100;
	return result.toFixed(2) + "%";
}
