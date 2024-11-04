import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { RouterProvider } from "react-router-dom";
import { router } from "./utils/router";
import { LoadingBackdrop } from "./components/LoadingBackdrop";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Suspense fallback={<LoadingBackdrop withPromiseTracker={false} />}>
			<RouterProvider
				router={router}
				fallbackElement={<LoadingBackdrop withPromiseTracker={false} />}
			/>
		</Suspense>
	</StrictMode>
);
