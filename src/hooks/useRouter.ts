import { Router } from "@toolpad/core";
import { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export function useRouter(): Router {
	const location = useLocation();
	const navigate = useNavigate();
	const [pathname, setPathname] = useState(location.pathname);

	return useMemo(() => {
		return {
			pathname,
			searchParams: new URLSearchParams(),
			navigate: (path: string | URL) => {
				const newPath = String(path);
				navigate(newPath);
				setPathname(newPath);
			}
		};
	}, [pathname, navigate]);
}
