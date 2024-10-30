import { Container, Typography } from "@mui/material";

// TODO + FIX SHOW ERRORS
function Error() {
	return (
		<Container sx={{ textAlign: "center", mt: 2 }}>
			<Typography variant="h2">Oops!</Typography>
			<Typography variant="h6">
				Sorry, an unexpected error has occurred.
			</Typography>
		</Container>
	);
}

export default Error;
