import { AppProvider, Router, Session } from "@toolpad/core";

import { useMemo, useState } from "react";
import { extendTheme } from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";
import { BRANDING, NAVIGATION } from "./utils/constants.tsx";
import { enqueueSnackbar, SnackbarProvider } from "notistack";
import { useRouter } from "./hooks/useRouter.ts";

const theme = extendTheme({
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
	}
});

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
				navigate("/");
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
			<AppProvider
				navigation={NAVIGATION}
				router={router}
				theme={theme}
				session={session}
				authentication={authentication}
				branding={BRANDING}
			>
				<Outlet />
			</AppProvider>
		</SnackbarProvider>
	);
}

export default App;
