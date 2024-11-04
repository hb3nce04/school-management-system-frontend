import ringJson from "../dummys/ring.json";
import { Button, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useDialogs } from "@toolpad/core";
import { useState } from "react";
import { CustomDialog } from "../components/CustomDialog";

export default function RingsPage() {
	const [rows, setRows] = useState(ringJson);
	const { open } = useDialogs();

	const columns: GridColDef<(typeof rows)[number]>[] = [
		{ field: "id", headerName: "ID", width: 90 },
		{
			field: "name",
			headerName: "Name",
			width: 150
		},
		{
			field: "isActive",
			headerName: "Active",
			width: 150,
			description: "Is the ring active?",
			type: "boolean",
			editable: true
		}
	];

	const processRowUpdate = (newRow: any, oldRow: any) => {
		const updatedRow = { ...oldRow, ...newRow };
		const updatedRows = rows.map((row) =>
			row.id === updatedRow.id ? updatedRow : row
		);
		setRows(updatedRows);
		return updatedRow;
	};

	return (
		<DataGrid
			rows={rows}
			columns={columns}
			processRowUpdate={processRowUpdate}
			slots={{
				toolbar: () => (
					<Button
						variant="contained"
						sx={{ width: "auto", margin: 2 }}
						onClick={() => {
							open(CustomDialog, {
								title: "Teszt",
								content: () => <Typography>Test</Typography>,
								actions: (
									<Button variant="contained">
										Óra hozzáadása
									</Button>
								)
							});
						}}
					>
						Óra hozzáadása
					</Button>
				)
			}}
			checkboxSelection
			disableRowSelectionOnClick
		/>
	);
}
