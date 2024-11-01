import { Box, Button, Tooltip } from "@mui/material";
import {
	GridToolbarColumnsButton,
	GridToolbarContainer,
	GridToolbarDensitySelector,
	GridToolbarExport,
	GridToolbarFilterButton
} from "@mui/x-data-grid";
import AddIcon from "@mui/icons-material/Add";

export function CustomToolbar() {
	return (
		<GridToolbarContainer>
			<GridToolbarColumnsButton />
			<GridToolbarFilterButton />
			<GridToolbarDensitySelector
				slotProps={{ tooltip: { title: "Change density" } }}
			/>
			<Box sx={{ flexGrow: 1 }} />
			<Tooltip title="Új tanuló felvétele">
				<Button variant="contained" size="small">
					<AddIcon /> Új hozzáadása
				</Button>
			</Tooltip>
			<GridToolbarExport
				slotProps={{
					tooltip: { title: "Adatok exportálása" },
					button: { variant: "contained" }
				}}
			/>
		</GridToolbarContainer>
	);
}
