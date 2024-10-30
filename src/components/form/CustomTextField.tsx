import { memo } from "react";
import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";

// TODO: typing
export const CustomTextField = memo(({ name, control, ...props }: any) => {
	return (
		<Controller
			name={name}
			control={control}
			render={({ field: { onChange, value }, fieldState: { error } }) => (
				<TextField
					{...props}
					id={name}
					name={name}
					helperText={error?.message || props.helperText}
					error={!!error}
					onChange={onChange}
					value={value}
				/>
			)}
		/>
	);
});
