import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { CustomToolbar } from "../components/CustomToolbar";
import useSWR from "swr";

const columns: GridColDef[] = [
	{ field: "id", headerName: "ID", width: 30 },
	// {
	// 	field: "name",
	// 	headerName: "Név",
	// 	flex: 1,
	// 	editable: true,
	// 	valueGetter: (row) => {
	// 		return `${row.firstName || ""} ${row.lastName || ""}`;
	// 	}
	// },
	// {
	// 	field: "motherName",
	// 	headerName: "Anyja születési neve",
	// 	flex: 1,
	// 	editable: true,
	// 	valueGetter: (row) => {
	// 		return `${row.motherFirstName || ""} ${row.motherLastName || ""}`;
	// 	}
	// },
	{
		field: "birthCity",
		headerName: "Születési hely",
		flex: 1
	},
	{
		field: "birthDate",
		headerName: "Születési idő",
		flex: 1
	}
	// {
	// 	field: "studentId",
	// 	headerName: "Oktatási azonosító",
	// 	flex: 1
	// }
	// {
	// 	field: "class.name",
	// 	headerName: "Osztály",
	// 	flex: 1
	// }
];

export function StudentsPage() {
	const { data, isLoading } = useSWR(
		"/students?fields=id,birthCity,birthDate"
	);

	return (
		<>
			<DataGrid
				rows={data}
				columns={columns}
				slots={{
					toolbar: CustomToolbar
				}}
				loading={isLoading}
				slotProps={{
					loadingOverlay: {
						variant: "skeleton",
						noRowsVariant: "skeleton"
					}
				}}
				initialState={{
					pagination: {
						paginationModel: {
							pageSize: 5
						}
					}
				}}
				checkboxSelection
				disableRowSelectionOnClick
			/>
		</>
	);
}
