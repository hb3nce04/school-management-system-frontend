import ringJson from "../dummys/ring.json";
import { Box, Button, TextField, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useDialogs } from "@toolpad/core";
import { useState } from "react";
import { CustomDialog } from "../components/CustomDialog";

function ModalContent() {
	return (
		<Box
			component="form"
			sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
			noValidate
			autoComplete="off"
		>
			<div>
				<TextField
					required
					id="outlined-required"
					label="Required"
					defaultValue="Hello World"
				/>
				<TextField
					disabled
					id="outlined-disabled"
					label="Disabled"
					defaultValue="Hello World"
				/>
				<TextField
					id="outlined-password-input"
					label="Password"
					type="password"
					autoComplete="current-password"
				/>
				<TextField
					id="outlined-read-only-input"
					label="Read Only"
					defaultValue="Hello World"
					slotProps={{
						input: {
							readOnly: true
						}
					}}
				/>
				<TextField
					id="outlined-number"
					label="Number"
					type="number"
					slotProps={{
						inputLabel: {
							shrink: true
						}
					}}
				/>
				<TextField
					id="outlined-search"
					label="Search field"
					type="search"
				/>
				<TextField
					id="outlined-helperText"
					label="Helper text"
					defaultValue="Default Value"
					helperText="Some important text"
				/>
			</div>
			<div>
				<TextField
					required
					id="filled-required"
					label="Required"
					defaultValue="Hello World"
					variant="filled"
				/>
				<TextField
					disabled
					id="filled-disabled"
					label="Disabled"
					defaultValue="Hello World"
					variant="filled"
				/>
				<TextField
					id="filled-password-input"
					label="Password"
					type="password"
					autoComplete="current-password"
					variant="filled"
				/>
				<TextField
					id="filled-read-only-input"
					label="Read Only"
					defaultValue="Hello World"
					variant="filled"
					slotProps={{
						input: {
							readOnly: true
						}
					}}
				/>
				<TextField
					id="filled-number"
					label="Number"
					type="number"
					variant="filled"
					slotProps={{
						inputLabel: {
							shrink: true
						}
					}}
				/>
				<TextField
					id="filled-search"
					label="Search field"
					type="search"
					variant="filled"
				/>
				<TextField
					id="filled-helperText"
					label="Helper text"
					defaultValue="Default Value"
					helperText="Some important text"
					variant="filled"
				/>
			</div>
			<div>
				<TextField
					required
					id="standard-required"
					label="Required"
					defaultValue="Hello World"
					variant="standard"
				/>
				<TextField
					disabled
					id="standard-disabled"
					label="Disabled"
					defaultValue="Hello World"
					variant="standard"
				/>
				<TextField
					id="standard-password-input"
					label="Password"
					type="password"
					autoComplete="current-password"
					variant="standard"
				/>
				<TextField
					id="standard-read-only-input"
					label="Read Only"
					defaultValue="Hello World"
					variant="standard"
					slotProps={{
						input: {
							readOnly: true
						}
					}}
				/>
				<TextField
					id="standard-number"
					label="Number"
					type="number"
					variant="standard"
					slotProps={{
						inputLabel: {
							shrink: true
						}
					}}
				/>
				<TextField
					id="standard-search"
					label="Search field"
					type="search"
					variant="standard"
				/>
				<TextField
					id="standard-helperText"
					label="Helper text"
					defaultValue="Default Value"
					helperText="Some important text"
					variant="standard"
				/>
			</div>
		</Box>
	);
}

export default function IndexPage() {
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
		console.log(rows);
		setRows(updatedRows);
		return updatedRow;
	};

	return (
		<>
			<DataGrid
				rows={rows}
				columns={columns}
				processRowUpdate={processRowUpdate}
				slots={{
					toolbar: () => (
						<Button
							variant="contained"
							sx={{ width: "auto", margin: 2 }}
							onClick={async () => {
								open(CustomDialog, {
									title: "Teszt",
									content: ModalContent(),
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
		</>
	);
}
