import { defineStore } from "pinia";

export default defineStore("compareAnchorStore", {
	// data
	state: () => ({
		toAnchor: false,
	}),
	// methods
	actions: {
		clickCompareAnchor() {
			this.toAnchor = true;
			this.goCompareAnchor();
		},
		goCompareAnchor() {
			if (this.toAnchor !== false) return;
			setTimeout(() => {
				const anchor = document.querySelector("#caseCompare");
				const headerHiehgt = document.querySelector(".navbar").offsetHeight;
				document.documentElement.scrollTop = anchor.offsetTop - headerHiehgt;
			}, 750);
			this.toAnchor = false;
		},
	},
});
