import { Outlet } from "react-router-dom";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { PageContainer } from "@toolpad/core/PageContainer";
import { DialogsProvider } from "@toolpad/core";

export default function Layout() {
	return (
		<DialogsProvider>
			<DashboardLayout>
				<PageContainer>
					<Outlet />
				</PageContainer>
			</DashboardLayout>
		</DialogsProvider>
	);
}
