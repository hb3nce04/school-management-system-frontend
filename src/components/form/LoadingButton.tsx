import { Button, ButtonProps, CircularProgress } from "@mui/material";
import { memo, ReactNode } from "react";

interface LoadingButtonProps extends ButtonProps {
	children: ReactNode;
	loading?: boolean;
}

export const LoadingButton = memo(
	({ loading, children, ...props }: LoadingButtonProps) => {
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
);
