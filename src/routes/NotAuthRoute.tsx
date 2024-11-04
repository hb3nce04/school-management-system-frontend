import { lazy, useContext } from "react";
import { Navigate } from "react-router-dom";
import { Session, SessionContext } from "@toolpad/core";
const SigninPage = lazy(() => import("../pages/signin"));

// Pass the sign in page to the react-router-dom component
export const NotAuthRoute = () => {
	const session: Session | null = useContext(SessionContext);
	return (session && session.user) || localStorage.getItem("token") ? (
		<Navigate to="/dashboard" />
	) : (
		<SigninPage />
	);
};
