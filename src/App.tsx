import { AppProvider, Session } from "@toolpad/core";

import { useMemo, useState } from "react";
import { extendTheme } from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";
import { BRANDING, NAVIGATION } from "./utils/constants.tsx";
import { enqueueSnackbar, SnackbarProvider } from "notistack";
import { useRouter } from "./hooks/useRouter.ts";
import { huHU } from "@mui/x-data-grid/locales";
import { SWRConfig } from "swr";
import { fetcher } from "./utils/fetcher.ts";
import LoadingBackdrop from "./components/index/LoadingBackdrop.tsx";

const theme = extendTheme(
	{
		colorSchemes: { light: true, dark: true },
		colorSchemeSelector: "class",
		breakpoints: {
			values: {
				xs: 0,
				sm: 600,
				md: 600,
				lg: 1200,
				xl: 1536
			}
		},
		typography: {
			fontSize: 14
		}
	},
	huHU
);

function App() {
	const router = useRouter();
	const navigate = useNavigate();

	const [session, setSession] = useState<Session | null>({
		user: {
			name: "admin"
		}
	});

	const authentication = useMemo(() => {
		return {
			signIn: () => {
				setSession({
					user: {
						name: "admin"
					}
				});
				localStorage.setItem("apikey", "teszt");
				enqueueSnackbar("Sikeres bejelentkezés!", {
					variant: "success"
				});
				navigate("/dashboard");
			},
			signOut: () => {
				setSession(null);
				navigate("/signin");
			}
		};
	}, []);

	return (
		<SnackbarProvider
			maxSnack={5}
			anchorOrigin={{
				vertical: "bottom",
				horizontal: "right"
			}}
		>
			<LoadingBackdrop />
			<AppProvider
				navigation={NAVIGATION}
				router={router}
				theme={theme}
				session={session}
				authentication={authentication}
				branding={BRANDING}
			>
				<SWRConfig
					value={{
						fetcher: fetcher
					}}
				>
					<Outlet />
				</SWRConfig>
			</AppProvider>
		</SnackbarProvider>
	);
}

export default App;
