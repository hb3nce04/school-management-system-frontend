import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { BRANDING } from "../utils/constants";

function Footer() {
	return (
		<Box
			component="footer"
			sx={{
				backgroundColor: (theme) =>
					theme.palette.mode === "light"
						? theme.palette.grey[100]
						: theme.palette.grey[900],
				width: "100%",
				position: "absolute",
				bottom: 0,
				textAlign: "center",
				paddingY: 2
			}}
		>
			<Typography variant="body1">
				<Link href="https://github.com/hb3nce04/school-management-system-frontend">
					{BRANDING.title}™
				</Link>
			</Typography>
			<Typography variant="body1">Verziószám: 0.0.1</Typography>
			<Typography variant="body1">
				© Minden jog fenntartva! {new Date().getFullYear()}
			</Typography>
		</Box>
	);
}

export default Footer;
