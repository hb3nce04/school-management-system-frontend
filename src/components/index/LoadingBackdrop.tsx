import { Backdrop, CircularProgress } from "@mui/material";
import { usePromiseTracker } from "react-promise-tracker";
function Loader() {
	const { promiseInProgress } = usePromiseTracker();

	return (
		promiseInProgress && (
			<Backdrop
				open={promiseInProgress}
				sx={(theme) => ({
					color: "#fff",
					zIndex: theme.zIndex.drawer + 1
				})}
			>
				<CircularProgress />
			</Backdrop>
		)
	);
}

export default Loader;
