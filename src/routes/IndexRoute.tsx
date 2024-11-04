import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Session, SessionContext } from "@toolpad/core";

// Navigate to the dashboard if the user is signed in, otherwise show the sign in page
export const IndexRoute = () => {
	const session: Session | null = useContext(SessionContext);
	return (session && session.user) || localStorage.getItem("token") ? (
		<Navigate to="/dashboard" />
	) : (
		<Navigate to="/signin" />
	);
};
