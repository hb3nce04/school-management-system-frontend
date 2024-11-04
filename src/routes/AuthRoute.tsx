import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Session, SessionContext } from "@toolpad/core";
import Layout from "../layouts/dashboard";

// Pass the layout to the react-router-dom component
export const AuthRoute = () => {
	const session: Session | null = useContext(SessionContext);
	return !session || !session.user || !localStorage.getItem("token") ? (
		<Navigate to="/signin" />
	) : (
		<Layout />
	);
};
