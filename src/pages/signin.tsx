import { useForm, SubmitHandler } from "react-hook-form";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {
	Avatar,
	Card,
	Container,
	Fab,
	LinearProgress,
	useColorScheme
} from "@mui/material";
import { BRANDING } from "../utils/constants";
import { CustomTextField } from "../components/form/CustomTextField";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { LoadingButton } from "../components/form/LoadingButton";
import { useContext, useState } from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { Footer } from "../components/Footer";
import { AuthenticationContext } from "@toolpad/core";

const SignInSchema = z.object({
	username: z.string().min(3, "Rövid string"),
	password: z.string().min(3, "rövid").max(20, "túl nagy")
});

type SignInSchemaType = z.infer<typeof SignInSchema>;

export default function SigninPage() {
	const [isLoading, setLoading] = useState(false);
	const { mode, setMode } = useColorScheme();

	const { signIn } = useContext(AuthenticationContext);

	const { handleSubmit, control } = useForm<SignInSchemaType>({
		mode: "onChange",
		resolver: zodResolver(SignInSchema),
		defaultValues: {
			username: "admin",
			password: "admin"
		}
	});

	const onSubmit: SubmitHandler<SignInSchemaType> = () => {
		setLoading(true);
		setTimeout(() => {
			signIn();
		}, 2000);
	};

	return (
		<>
			<Fab
				sx={{
					position: "absolute",
					bottom: 15,
					right: 15
				}}
				size={"small"}
				color={"primary"}
				onClick={() => {
					setMode(mode == "dark" ? "light" : "dark");
				}}
			>
				<DarkModeIcon />
			</Fab>
			<Container component="main" maxWidth="xs" sx={{ mt: 10 }}>
				{isLoading && <LinearProgress />}
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
							type="text"
							label="Felhasználónév"
							autoFocus
							fullWidth
							required
							disabled
						/>
						<CustomTextField
							name="password"
							control={control}
							type="password"
							label="Jelszó"
							fullWidth
							required
							disabled
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
