import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
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
	{
		path: "/login",
		component: () => import("@/views/LoginView.vue"),
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
