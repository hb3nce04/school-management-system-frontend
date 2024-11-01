import { Box, Typography } from "@mui/material";
import StatCard from "../components/index/StatCard";
import { QuoteCard } from "../components/index/QuoteCard";

export function IndexPage() {
	return (
		<>
			<Typography variant="h4" sx={{ fontWeight: "light" }}>
				Üdv a felületen,{" "}
				<Typography variant="span" color="primary">
					admin
				</Typography>
				!
			</Typography>
			<QuoteCard />
			<Typography variant="h4" color="primary">
				Intézmény statisztikák
			</Typography>
			<Box
				sx={{
					display: "flex",
					flexWrap: "wrap",
					gap: 4,
					alignItems: "center"
				}}
			>
				<StatCard title="Felhasználók" value={10} />
				<StatCard title="Bejelentkezések" value={100} />
				<StatCard title="Hibák" value={0} />
			</Box>
		</>
	);
}
