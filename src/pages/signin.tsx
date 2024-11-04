import { useForm, SubmitHandler } from "react-hook-form";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Avatar, Card, Container, Fab, useColorScheme } from "@mui/material";
import { BRANDING } from "../utils/constants";
import { CustomTextField } from "../components/form/CustomTextField";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { LoadingButton } from "../components/form/LoadingButton";
import { useContext } from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { Footer } from "../components/Footer";
import { AuthenticationContext } from "@toolpad/core";

const SignInSchema = z.object({
	username: z.string().min(3, "Túl rövid felhasználónév"),
	password: z.string().min(3, "Túl rövid jelszó")
});

type SignInSchemaType = z.infer<typeof SignInSchema>;

// TODO implement loading bar top of the screen
export default function SigninPage() {
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

	// promisetracker for this solution
	const onSubmit: SubmitHandler<SignInSchemaType> = (data) => {
		signIn?.(data.username, data.password);
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
