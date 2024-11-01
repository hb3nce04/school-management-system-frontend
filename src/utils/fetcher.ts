import { instance } from "./axios";

export const fetcher = (url: string) =>
	instance.get(url).then((res) => res.data);
