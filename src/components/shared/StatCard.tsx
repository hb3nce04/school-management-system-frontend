import { Box, Fab, Paper, Typography } from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";

interface Props {
	title: string;
	value: number;
}

function StatCard(props: Props) {
	const { title, value } = props;

	return (
		<Paper
			elevation={4}
			sx={{
				display: "flex",
				flexWrap: "wrap",
				flexDirection: "row",
				alignItems: "space-evenly",
				marginY: "auto",
				padding: 2,
				width: "300"
			}}
		>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					textAlign: "right",
					width: "100%"
				}}
			>
				<Typography fontWeight={"bold"} fontSize={"2rem"}>
					{value}
				</Typography>
				<Typography>{title}</Typography>
			</Box>
		</Paper>
	);
}

export default StatCard;
