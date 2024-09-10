import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import { getSession } from 'next-auth/react'

export const axiosInstance=axios.create(
    {baseURL:process.env.NEXT_PUBLIC_API_URL}
)

const onRequest = async (
    config: InternalAxiosRequestConfig,
    ): Promise<InternalAxiosRequestConfig> => {
        try {
            const session:any=await getSession();
            if (session) {
                config.headers.Authorization = `Bearer ${session?.token}`;
            }
        }
        catch(error){
            console.log(error)
        }    
    return config
}

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
    console.error(`[onRequestError error] [${JSON.stringify(error)}]`);
    return Promise.reject(error);
  };
  
const onResponse = (response: AxiosResponse): AxiosResponse => {    
    return response;
};
  
const onResponseError = async (error: AxiosError): Promise<AxiosError> => {     
    console.error(`[onResponseError error] [${JSON.stringify(error)}]`);
    return Promise.reject(error);    
};

axiosInstance.interceptors.request.use(onRequest, onRequestError);
axiosInstance.interceptors.response.use(onResponse, onResponseError);
