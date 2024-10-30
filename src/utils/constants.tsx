import { Branding, Navigation } from "@toolpad/core";
import SchoolIcon from "@mui/icons-material/School";
import BarChartIcon from "@mui/icons-material/BarChart";
import DescriptionIcon from "@mui/icons-material/Description";

import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";

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
		segment: "",
		title: "Főoldal",
		icon: <BarChartIcon />
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
