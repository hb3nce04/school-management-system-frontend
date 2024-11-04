import { Session, SessionContext } from "@toolpad/core";
import { Box, Typography } from "@mui/material";
import StatCard from "../components/shared/StatCard";
import { QuoteCard } from "../components/shared/QuoteCard";
import { useContext } from "react";

// NOT TO LAZY LOAD
export default function IndexPage() {
	const session: Session = useContext(SessionContext);

	return (
		<>
			<Typography variant="h4" sx={{ fontWeight: "light" }}>
				Üdv a felületen,{" "}
				<Typography variant="span" color="primary">
					{session?.user?.name}
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
