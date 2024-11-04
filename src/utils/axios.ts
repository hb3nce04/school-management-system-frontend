import axios, { AxiosRequestConfig } from "axios";
import { trackPromise } from "react-promise-tracker";

// TESTING
const delay = (promise: Promise<void>): Promise<void> => {
	return new Promise((resolve, reject) => {
		promise
			.then((result) => setTimeout(() => resolve(result), 1000))
			.catch((error) => setTimeout(() => reject(error), 1000));
	});
};

const instance = axios.create({
	baseURL: "http://localhost:3000/api",
	timeout: 3000
});

const trackedInstance = {
	get: (url: string, config?: AxiosRequestConfig<unknown>) =>
		trackPromise(delay(instance.get(url, config))),
	post: (url: string, data?: unknown, config?: AxiosRequestConfig<unknown>) =>
		trackPromise(delay(instance.post(url, data, config))),
	put: (url: string, data?: unknown, config?: AxiosRequestConfig<unknown>) =>
		trackPromise(delay(instance.put(url, data, config))),
	delete: (url: string, config?: AxiosRequestConfig<unknown>) =>
		trackPromise(delay(instance.delete(url, config)))
};

export { trackedInstance as instance };
