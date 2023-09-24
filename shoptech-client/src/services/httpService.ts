import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import Cookies from "js-cookie";

interface AdminInfo {
  token: string;
}

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_API_BASE_URL}`,
  timeout: 50000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// Add a request interceptor
instance.interceptors.request.use((config: any) => {
  let adminInfo: AdminInfo | null = null;
  const adminInfoCookie = Cookies.get("adminInfo");
  if (adminInfoCookie) {
    adminInfo = JSON.parse(adminInfoCookie) as AdminInfo;
  }

  let company: string | undefined = Cookies.get("company");

  return Promise.resolve({
    ...config,
    headers: {
      ...config.headers,
      authorization: adminInfo ? `Bearer ${adminInfo.token}` : null,
      company: company ? company : null,
    },
  });
},
  (error) => {
    // Handle request errors here
    return Promise.reject(error);
  }
);


const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const requests = {
  get: <T>(url: string, headers?: AxiosRequestConfig) =>
    instance.get<T>(url, headers).then(responseBody),

  post: <T>(url: string, body: any, headers?: AxiosRequestConfig) =>
    instance.post<T>(url, body, headers).then(responseBody),

  put: <T>(url: string, body: any, headers?: AxiosRequestConfig) =>
    instance.put<T>(url, body, headers).then(responseBody),

  patch: <T>(url: string, body: any, headers?: AxiosRequestConfig) =>
    instance.patch<T>(url, body, headers).then(responseBody),

  delete: <T>(url: string, headers?: AxiosRequestConfig) =>
    instance.delete<T>(url, headers).then(responseBody),
};

export default requests;
