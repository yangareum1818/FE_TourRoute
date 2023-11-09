import axios from 'axios';

const ENDPOINT = process.env.REACT_APP_ENDPOINT;
const defaultHeaders = {
	headers: {
		'Content-Type': 'application/json',
	},
};
const formDataHeaders = {
	headers: {
		'Content-Type': 'multipart/form-data',
	},
};
const headerConfiguration = header => {
	const config = { ...header };
	const token = localStorage.getItem('token');
	if (token) config.headers.token = token;

	return { ...config };
};
export const axiosGetQuery = async (url, headers = defaultHeaders) => {
	const res = await axios.get(ENDPOINT + url, headers);
	return res.data;
};
export const axiosGet = async (url, body, headers = defaultHeaders) => {
	const res = await axios.get(ENDPOINT + url, body, headers);
	return res.data;
};
export const axiosTokenGet = async (url, headers = defaultHeaders) => {
	const res = await axios.get(ENDPOINT + url, headerConfiguration(headers));
	return res.data;
};
export const axiosPostQuery = async (url, headers = defaultHeaders) => {
	const res = await axios.post(ENDPOINT + url, headers);

	return res.data;
};
export const axiosPost = async (url, body, headers = defaultHeaders) => {
	const res = await axios.post(ENDPOINT + url, body, headers);

	return res.data;
};
export const axiosTokenPost = async (url, body, headers = defaultHeaders) => {
	const res = await axios.post(ENDPOINT + url, body, headerConfiguration(headers));
	return res.data;
};

export const axiosTokenFormPost = async (url, body, headers = formDataHeaders) => {
	const res = await axios.post(ENDPOINT + url, body, headerConfiguration(headers));
	return res;
};
export const axiosTokenFormPut = async (url, body, headers = formDataHeaders) => {
	const res = await axios.put(ENDPOINT + url, body, headerConfiguration(headers));
	return res;
};

export const axiosTokenPut = async (url, body, headers = formDataHeaders) => {
	const res = await axios.put(ENDPOINT + url, body, headerConfiguration(headers));
	return res.data;
};
export const axiosTokenDelete = async (url, headers = defaultHeaders) => {
	const res = await axios.delete(ENDPOINT + url, headerConfiguration(headers));
	return res.data;
};
