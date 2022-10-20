import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
	{
		path: "/login",
		component: () => import("@/views/Login.vue"),
	},
	// admin
	{
		path: "/admin",
		component: () => import("@/views/admin/AdminView.vue"),
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
				path: "imageUpload",
				component: () => import("@/views/admin/ImageUpload.vue"),
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
				path: "news/:id",
				name: "newsDetail",
				component: () => import("@/views/NewsDetail.vue"),
			},
			{
				path: "collections",
				name: "collections",
				component: () => import("@/views/Collections.vue"),
			},
			{
				path: "reserve",
				name: "reserve",
				component: () => import("@/views/Reserve.vue"),
			},
		],
	},
	// 404頁面
	{
		path: "/:pathMatch(.*)*",
		component: () => import("@/views/NotFound.vue"),
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
	linkActiveClass: "active",
	scrollBehavior() {
		return {
			top: 0,
		};
	},
});

export default router;
