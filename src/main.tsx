import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Layout from "./layouts/dashboard";
import IndexPage from "./pages";
import TestPage from "./pages/ring";
import SigninPage from "./pages/signin";
import ErrorPage from "./pages/error";

const router = createBrowserRouter([
	{
		Component: App,
		children: [
			{
				path: "",
				Component: Layout,
				children: [
					{
						path: "",
						Component: IndexPage
					},
					{
						path: "/test",
						Component: TestPage
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

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
