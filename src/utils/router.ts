import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Layout from "../layouts/dashboard";
import { IndexPage } from "../pages";
import { RingsPage } from "../pages/rings";
import { StudentsPage } from "../pages/students";
import { TeachersPage } from "../pages/teachers";
import { SigninPage } from "../pages/signin";
import { ErrorPage } from "../pages/error";
import { ClassesPage } from "../pages/classes";
import { ClassroomsPage } from "../pages/classrooms";

export const router = createBrowserRouter([
	{
		Component: App,
		children: [
			{
				path: "/dashboard",
				Component: Layout,
				children: [
					{
						path: "/dashboard",
						Component: IndexPage
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
				Component: SigninPage
			},
			{
				path: "*",
				Component: ErrorPage
			}
		]
	}
]);
