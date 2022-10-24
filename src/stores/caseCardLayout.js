import { defineStore } from "pinia";

export default defineStore("cardLayoutStore", {
	// data
	state: () => ({
		card: {
			cardLayout: "",
			cardLoading: false,
		},
	}),
	// methods
	actions: {
		getCaseCardLayout() {
			return localStorage.getItem("card_layout");
		},
		changeCardlayout(view) {
			this.card.cardLayout = view === "card" ? "card" : "list";
			this.card.cardLoading = true;
			localStorage.setItem("card_layout", this.card.cardLayout);
			setTimeout(() => {
				this.card.cardLoading = false;
			}, 1000);
		},
	},
});
