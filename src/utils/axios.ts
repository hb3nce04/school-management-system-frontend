import axios, { AxiosRequestConfig } from "axios";
import { trackPromise } from "react-promise-tracker";

const instance = axios.create({
	baseURL: "http://localhost:3000/api",
	timeout: 3000
});

const trackedInstance = {
	get: (url: string, config?: AxiosRequestConfig<unknown>) =>
		trackPromise(instance.get(url, config)),
	post: (url: string, data?: unknown, config?: AxiosRequestConfig<unknown>) =>
		trackPromise(instance.post(url, data, config)),
	put: (url: string, data?: unknown, config?: AxiosRequestConfig<unknown>) =>
		trackPromise(instance.put(url, data, config)),
	delete: (url: string, config?: AxiosRequestConfig<unknown>) =>
		trackPromise(instance.delete(url, config))
};

export { trackedInstance as instance };
