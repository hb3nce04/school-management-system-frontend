import { useForm, SubmitHandler } from "react-hook-form";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Avatar, Card, Container, Fab, useColorScheme } from "@mui/material";
import { BRANDING } from "../utils/constants";
import { CustomTextField } from "../components/form/CustomTextField";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { LoadingButton } from "../components/form/LoadingButton";
import { useContext, useState } from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { Footer } from "../components/Footer";
import { AuthenticationContext } from "@toolpad/core";
import { enqueueSnackbar } from "notistack";

const SignInSchema = z.object({
	username: z.string().min(3, "Túl rövid felhasználónév"),
	password: z.string().min(3, "Túl rövid jelszó")
});

type SignInSchemaType = z.infer<typeof SignInSchema>;

// TODO implement loading bar top of the screen
export function SigninPage() {
	const [isLoading, setLoading] = useState(false);
	const { mode, setMode } = useColorScheme();

	const authContext = useContext(AuthenticationContext);
	const signIn = authContext?.signIn;

	const { handleSubmit, control } = useForm<SignInSchemaType>({
		mode: "onChange",
		resolver: zodResolver(SignInSchema),
		defaultValues: {
			username: "",
			password: ""
		}
	});

	const onSubmit: SubmitHandler<SignInSchemaType> = (data) => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);

			if (
				data &&
				data.username !== "admin" &&
				data.password !== "admin"
			) {
				enqueueSnackbar("Hibás felhasználónév vagy jelszó!", {
					variant: "error"
				});
				return;
			} else {
				if (signIn) {
					signIn();
				}
			}
		}, 500);
	};

	return (
		<>
			<Fab
				sx={{
					position: "absolute",
					bottom: 15,
					right: 15
				}}
				size={"medium"}
				color={"primary"}
				onClick={() => {
					setMode(mode == "dark" ? "light" : "dark");
				}}
			>
				<DarkModeIcon />
			</Fab>
			<Container component="main" maxWidth="xs" sx={{ mt: 10 }}>
				<Card
					sx={{
						padding: 3,
						textAlign: "center",
						display: "flex",
						flexDirection: "column"
					}}
				>
					<Avatar
						sx={{
							bgcolor: "primary.main",
							mx: "auto",
							fontSize: "2rem"
						}}
					>
						{BRANDING.logo}
					</Avatar>
					<Typography variant="h6">{BRANDING.title}</Typography>
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							mt: 2,
							gap: 2
						}}
						component="form"
						onSubmit={handleSubmit(onSubmit)}
					>
						<Typography variant="h5">Bejelentkezés</Typography>
						<CustomTextField
							helperText="Adott azonosító"
							name="username"
							control={control}
							label="Felhasználónév"
							autoFocus
							fullWidth
							required
						/>
						<CustomTextField
							name="password"
							control={control}
							type="password"
							label="Jelszó"
							fullWidth
							required
						/>
						<LoadingButton
							loading={isLoading}
							type="submit"
							variant="contained"
							fullWidth
						>
							Bejelentkezés
						</LoadingButton>
					</Box>
				</Card>
			</Container>
			<Footer />
		</>
	);
}
