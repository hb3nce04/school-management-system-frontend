import { Button, ButtonProps, CircularProgress } from "@mui/material";
import { memo, ReactNode } from "react";
import { usePromiseTracker } from "react-promise-tracker";

interface LoadingButtonProps extends ButtonProps {
	children: ReactNode;
}

export const LoadingButton = memo(
	({ children, ...props }: LoadingButtonProps) => {
		const { promiseInProgress } = usePromiseTracker();

		return (
			<Button {...props} disabled={props.disabled || promiseInProgress}>
				{promiseInProgress && (
					<CircularProgress
						color="inherit"
						size={"1.5rem"}
						sx={{ mr: 2 }}
					/>
				)}
				{children}
			</Button>
		);
	}
);
