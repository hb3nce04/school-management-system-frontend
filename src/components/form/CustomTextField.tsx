import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";

// TODO: typing
function CustomTextField({ name, control, ...props }: any) {
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
}

export default CustomTextField;
