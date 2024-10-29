import { Branding, Navigation } from "@toolpad/core";
import SchoolIcon from "@mui/icons-material/School";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BarChartIcon from "@mui/icons-material/BarChart";
import DescriptionIcon from "@mui/icons-material/Description";
import App from "../App";
import Layout from "../layouts/dashboard";
import IndexPage from "../pages";
import SigninPage from "../pages/signin";

import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import TestPage from "../pages/test";
import ErrorPage from "../pages/error";

export const BRANDING: Branding = {
	title: "School Management System",
	logo: <SchoolIcon />
};

export const NAVIGATION: Navigation = [
	{
		kind: "header",
		title: "Főoldal"
	},
	{
		segment: "dashboard",
		title: "Dashboard",
		icon: <DashboardIcon />
	},
	{
		kind: "divider"
	},
	{
		kind: "header",
		title: "Elemzés"
	},
	{
		segment: "reports",
		title: "Reports",
		icon: <BarChartIcon />,
		children: [
			{
				segment: "sales",
				title: "Sales",
				icon: <DescriptionIcon />
			}
		]
	},
	{
		kind: "divider"
	},
	{
		kind: "header",
		title: "Adminisztrációs és irányítási feladatok"
	},
	{
		segment: "rings",
		title: "Csengetési rend",
		icon: <AccessAlarmIcon />,
		children: [
			{
				segment: "sales",
				title: "Sales",
				icon: <DescriptionIcon />
			}
		]
	}
];

export const ROUTER = [
	{
		Component: App,
		children: [
			{
				path: "/dashboard",
				Component: Layout,
				children: [
					{
						path: "/dashboard",
						Component: IndexPage
					},
					{
						path: "/dashboard/test",
						Component: TestPage
					}
				]
			},
			{
				path: "/signin",
				Component: SigninPage
			},
			{
				path: "*",
				Component: ErrorPage
			}
		]
	}
];
