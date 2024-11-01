import {
	Box,
	Dialog,
	DialogActions,
	DialogContent,
	DialogProps,
	DialogTitle,
	Grow,
	IconButton,
	Paper,
	PaperProps
} from "@mui/material";
import Draggable from "react-draggable";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import CloseIcon from "@mui/icons-material/Close";
import { forwardRef, memo, ReactElement, Ref, useState } from "react";
import { TransitionProps } from "notistack";

interface DialogPayload {
	title: string;
	content: ReactElement;
	actions?: ReactElement;
}

interface CustomDialogProps extends DialogProps {
	payload: DialogPayload;
}

const Transition = forwardRef(function Transition(
	props: TransitionProps & {
		children: ReactElement<any, any>;
	},
	ref: Ref<unknown>
) {
	return <Grow ref={ref} {...props} />;
});

function PaperComponent(props: PaperProps) {
	return (
		<Draggable handle="#dialog">
			<Paper variant="outlined" {...props} />
		</Draggable>
	);
}

export const CustomDialog = memo(
	({
		open,
		onClose,
		payload: { title, content, actions }
	}: CustomDialogProps) => {
		const [fullScreen, setFullScreen] = useState(false);

		return (
			<Dialog
				fullScreen={fullScreen}
				open={open}
				TransitionComponent={Transition}
				PaperComponent={PaperComponent}
				onClose={onClose}
				fullWidth
			>
				<DialogTitle style={{ cursor: "move" }} id="dialog">
					{title}
				</DialogTitle>
				<Box sx={{ position: "absolute", right: 0, padding: 1 }}>
					<IconButton onClick={() => setFullScreen(!fullScreen)}>
						<FullscreenIcon />
					</IconButton>
					<IconButton
						onClick={() => onClose && onClose({}, "backdropClick")}
					>
						<CloseIcon />
					</IconButton>
				</Box>

				<DialogContent>{content}</DialogContent>
				<DialogActions>{actions}</DialogActions>
			</Dialog>
		);
	}
);
