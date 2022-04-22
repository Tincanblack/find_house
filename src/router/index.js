import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
	{
		path: "/login",
		component: () => import("@/views/Login.vue"),
	},
	// admin
	{
		path: "/admin",
		component: () => import("@/views/AdminView.vue"),
		children: [
			{
				path: "cases",
				name: "cases",
				component: () => import("@/views/admin/CasesManage.vue"),
			},
			{
				path: "news",
				name: "news",
				component: () => import("@/views/admin/NewsManage.vue"),
			},
			{
				path: "reserves",
				name: "reserves",
				component: () => import("@/views/admin/ReservesManage.vue"),
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
				name: "index",
				component: () => import("@/views/Home.vue"),
			},
			{
				path: "about",
				name: "about",
				component: () => import("@/views/About.vue"),
			},
			{
				path: "cases",
				name: "cases",
				component: () => import("@/views/Cases.vue"),
			},
			{
				path: "case/:id",
				name: "case",
				component: () => import("@/views/Case.vue"),
			},
			{
				path: "news",
				name: "news",
				component: () => import("@/views/News.vue"),
			},
			{
				path: "collection",
				name: "collection",
				component: () => import("@/views/Collection.vue"),
			},
			{
				path: "reserves",
				name: "reserves",
				component: () => import("@/views/Reserves.vue"),
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
