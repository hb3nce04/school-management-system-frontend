import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { RouterProvider } from "react-router-dom";
import { router } from "./utils/router";
import Loader from "./components/index/LoadingBackdrop";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<RouterProvider router={router} fallbackElement={<Loader />} />
	</StrictMode>
);
