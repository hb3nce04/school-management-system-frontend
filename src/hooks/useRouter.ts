import { Router } from "@toolpad/core";
import { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export function useRouter(): Router {
	const location = useLocation();
	const navigate = useNavigate();
	const [pathname] = useState(location.pathname);

	return useMemo(() => {
		return {
			pathname,
			searchParams: new URLSearchParams(),
			navigate: (path: string | URL) => navigate(String(path))
		};
	}, []);
}
