import { Backdrop, CircularProgress } from "@mui/material";
import { usePromiseTracker } from "react-promise-tracker";

export const LoadingBackdrop = ({
	withPromiseTracker
}: {
	withPromiseTracker: boolean;
}) => {
	const { promiseInProgress } = usePromiseTracker();

	return withPromiseTracker ? (
		<Backdrop
			open={promiseInProgress}
			sx={(theme) => ({
				color: "#fff",
				zIndex: theme.zIndex.drawer + 1
			})}
		>
			<CircularProgress />
		</Backdrop>
	) : (
		<Backdrop
			open={true}
			sx={(theme) => ({
				color: "#fff",
				zIndex: theme.zIndex.drawer + 1
			})}
		>
			<CircularProgress />
		</Backdrop>
	);
};
