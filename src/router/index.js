import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
	{
		path: "/login",
		component: () => import("@/views/LoginView.vue"),
	},
	// admin
	{
		path: "/admin",
		component: () => import("@/views/AdminView.vue"),
		children: [
			{
				path: "cases",
				component: () => import("@/views/admin/CasesManage.vue"),
			},
			{
				path: "news",
				component: () => import("@/views/admin/NewsManage.vue"),
			},
			{
				path: "reserves",
				component: () => import("@/views/admin/ReservesManage.vue"),
			},
			{
				path: "coupons",
				component: () => import("@/views/admin/CouponsManage.vue"),
			},
		],
	},
	// user
	{
		path: "/",
		component: () => import("@/views/FrontView.vue"),
		children: [
			{
				path: "",
				component: () => import("@/views/HomeView.vue"),
			},
		],
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	linkActiveClass: "active",
	routes,
});

export default router;
