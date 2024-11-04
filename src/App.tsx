import { AppProvider, Session } from "@toolpad/core";

import { useEffect, useMemo, useState } from "react";
import { extendTheme } from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";
import { BRANDING, NAVIGATION } from "./utils/constants.tsx";
import { enqueueSnackbar, SnackbarProvider } from "notistack";
import { useRouter } from "./hooks/useRouter.ts";
import { huHU } from "@mui/x-data-grid/locales";
import { SWRConfig } from "swr";
import { fetcher } from "./utils/fetcher.ts";
import { instance } from "./utils/axios.ts";
import { jwtDecode } from "jwt-decode";

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

// Extract JWT token and decode its payload to get user info
const getDecodedSession = (
	token: string
): { user: { id: string; name: string } } => {
	const decoded = jwtDecode(token);
	return {
		user: {
			id: decoded!.sub!.toString(),
			name: decoded.username!
		}
	};
};

function App() {
	const router = useRouter();
	const navigate = useNavigate();

	const [session, setSession] = useState<Session | null>();

	useEffect(() => {
		const savedToken = localStorage.getItem("token");
		if (savedToken) {
			setSession(getDecodedSession(savedToken));
		}
	}, []);

	// TODO: TYPING
	const authentication: any = useMemo(() => {
		return {
			signIn: (username: string, password: string) => {
				instance
					.post("/auth", { username, password })
					.then((res: any) => {
						const { token } = res.data;
						localStorage.setItem("token", token);
						setSession(getDecodedSession(token));
						enqueueSnackbar("Sikeres bejelentkezés!", {
							variant: "success"
						});
						navigate("/dashboard");
					})
					.catch((err) => {
						if (err.status === 401) {
							enqueueSnackbar(
								"Hibás felhasználónév vagy jelszó!",
								{
									variant: "error"
								}
							);
						}
					});
			},
			signOut: () => {
				localStorage.removeItem("token");
				setSession(null);
				navigate("/signin");
			}
		};
	});

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
