import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import App from "../App";

const RingsPage = lazy(() => import("../pages/rings"));
const StudentsPage = lazy(() => import("../pages/students"));
const TeachersPage = lazy(() => import("../pages/teachers"));
const ClassesPage = lazy(() => import("../pages/classes"));
const ClassroomsPage = lazy(() => import("../pages/classrooms"));

import IndexPage from "../pages/index";
import ErrorPage from "../pages/error";

import { NotAuthRoute } from "../routes/NotAuthRoute";
import { AuthRoute } from "../routes/AuthRoute";
import { IndexRoute } from "../routes/IndexRoute";

export const router = createBrowserRouter([
	{
		Component: App,
		children: [
			{
				path: "/",
				Component: IndexRoute,
				ErrorBoundary: ErrorPage
			},
			{
				path: "/dashboard",
				Component: AuthRoute,
				children: [
					{
						path: "/dashboard",
						Component: IndexPage,
						index: true
					},
					{
						path: "/dashboard/rings",
						Component: RingsPage
					},
					{
						path: "/dashboard/students",
						Component: StudentsPage
					},
					{
						path: "/dashboard/teachers",
						Component: TeachersPage
					},
					{
						path: "/dashboard/classes",
						Component: ClassesPage
					},
					{
						path: "/dashboard/classrooms",
						Component: ClassroomsPage
					}
				]
			},
			{
				path: "/signin",
				Component: NotAuthRoute
			},
			{
				path: "*",
				Component: ErrorPage
			}
		]
	}
]);
