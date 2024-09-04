import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios'

export const axiosInstance=axios.create(
    {baseURL:process.env.NEXT_PUBLIC_API_URL}
)
// console.log('():',process.env.NEXT_PUBLIC_API_URL)
const onRequest = async (
    config: InternalAxiosRequestConfig,
    ): Promise<InternalAxiosRequestConfig> => {
        try {
            //Todo aqui enviar el bearer token
            //config.headers!.Authorization = token;
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
    //console.info(`[onResponse => response] [${JSON.stringify(response)}]`)
    return response;
};
  
  const onResponseError = async (error: AxiosError): Promise<AxiosError> => {     
    console.error(`[onResponseError error] [${JSON.stringify(error)}]`);
    return Promise.reject(error);    
  };

axiosInstance.interceptors.request.use(onRequest, onRequestError);
axiosInstance.interceptors.response.use(onResponse, onResponseError);
