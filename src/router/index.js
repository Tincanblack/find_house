import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
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
					path: "",
					name: "dashboard",
					component: () => import("@/views/admin/Dashboard.vue"),
				},
				{
					path: "cases",
					name: "casesManage",
					component: () => import("@/views/admin/CasesManage.vue"),
				},
				{
					path: "news",
					name: "newsManage",
					component: () => import("@/views/admin/NewsManage.vue"),
				},
				{
					path: "reserves",
					name: "reservesManage",
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
					component: () => import("@/views/SearchReserve.vue"),
				},
				// 404頁面
				{
					path: "/:pathMatch(.*)*",
					component: () => import("@/views/NotFound.vue"),
				},
			],
		},
	],
	linkActiveClass: "active",
	scrollBehavior() {
		return {
			top: 0,
		};
	},
});

export default router;
