import { Button, ButtonProps, CircularProgress } from "@mui/material";
import { ReactNode } from "react";

interface LoadingButtonProps extends ButtonProps {
	children: ReactNode;
	loading?: boolean;
}

function LoadingButton({ loading, children, ...props }: LoadingButtonProps) {
	return (
		<Button {...props} disabled={props.disabled || loading}>
			{loading && (
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

export default LoadingButton;
