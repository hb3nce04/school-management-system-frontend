import useSWR from "swr";
import axios from "axios";
import Typography from "@mui/material/Typography";
import { Card, CardContent } from "@mui/material";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export function QuoteCard() {
	const { data } = useSWR(
		"https://api.quotable.io/random?tags=education",
		fetcher
	);

	return (
		data && (
			<Card sx={{ marginY: 2 }}>
				<CardContent>
					<Typography color="text.primary">
						{`"${data.content}"`}
					</Typography>
					<Typography color="text.secondary" textAlign={"right"}>
						- {data.author}
					</Typography>
				</CardContent>
			</Card>
		)
	);
}
