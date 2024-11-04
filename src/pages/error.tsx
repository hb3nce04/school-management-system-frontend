import { Container, Typography } from "@mui/material";

// TODO + FIX SHOW ERRORS
export default function ErrorPage() {
	return (
		<Container sx={{ textAlign: "center" }}>
			<Typography variant="h2">Oops!</Typography>
			<Typography variant="h6">
				Sorry, an unexpected error has occurred.
			</Typography>
		</Container>
	);
}
