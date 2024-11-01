import { Branding, Navigation } from "@toolpad/core";
import SchoolIcon from "@mui/icons-material/School";
import BarChartIcon from "@mui/icons-material/BarChart";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import PeopleIcon from "@mui/icons-material/People";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import Groups2Icon from "@mui/icons-material/Groups2";
import RoomIcon from "@mui/icons-material/Room";

export const BRANDING: Branding = {
	title: "School Management System",
	logo: <SchoolIcon />
};

export const NAVIGATION: Navigation = [
	{
		title: "Főoldal",
		segment: "dashboard",
		icon: <BarChartIcon />
	},
	{
		kind: "divider"
	},
	{
		kind: "header",
		title: "Irányítási feladatok"
	},
	{
		segment: "dashboard/rings",
		title: "Csengetési rend",
		icon: <AccessAlarmIcon />
	},
	{
		segment: "dashboard/students",
		title: "Tanulók kezelése",
		icon: <PeopleIcon />
	},
	{
		segment: "dashboard/teachers",
		title: "Tanárok kezelése",
		icon: <PeopleAltIcon />
	},
	{
		segment: "dashboard/classes",
		title: "Osztályok kezelése",
		icon: <Groups2Icon />
	},
	{
		segment: "dashboard/classrooms",
		title: "Tantermek kezelése",
		icon: <RoomIcon />
	},
	{
		kind: "header",
		title: "Naplózás és adminisztrációs feladatok"
	}
];
