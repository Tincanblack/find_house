import { defineStore } from "pinia";

export default defineStore("cardLayoutStore", {
	// data
	state: () => ({
		cardLayout: "card",
		cardLoading: false,
	}),
	// methods
	actions: {
		getCaseCardLayout() {
			const layout = localStorage.getItem("card_layout");
			if (layout === null || layout === undefined) return "card";
			localStorage.setItem("card_layout", layout);
			return layout;
		},
		changeCardlayout(view) {
			this.cardLayout = view;
			this.cardLoading = true;
			setTimeout(() => {
				this.cardLoading = false;
				localStorage.setItem("card_layout", this.cardLayout);
			}, 1000);
		},
	},
});
