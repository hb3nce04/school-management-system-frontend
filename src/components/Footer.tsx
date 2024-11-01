import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { BRANDING } from "../utils/constants";
import { memo } from "react";

export const Footer = memo(() => {
	return (
		<Box
			component="footer"
			sx={{
				backgroundColor: (theme) =>
					theme.palette.mode === "light"
						? theme.palette.grey[100]
						: theme.palette.grey[900],
				width: "100%",
				textAlign: "center",
				position: "absolute",
				bottom: 0,
				paddingY: 1,
				display: "flex",
				justifyContent: "space-evenly"
			}}
		>
			<Typography variant="body1">
				<Link href="https://github.com/hb3nce04/school-management-system-frontend">
					{BRANDING.title}
				</Link>
			</Typography>
			<Typography variant="body1">v0.0.1</Typography>
			<Typography variant="body1">
				© Copyright {new Date().getFullYear()}
			</Typography>
		</Box>
	);
});
