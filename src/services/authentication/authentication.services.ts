import { axiosInstance } from "@/common/axios-instance";
import { FORGOT_PASSWORD, LOGIN, SIGN_UP } from "@/constants/api-endpoints";
import { AxiosResponse } from "axios";

export class AuthenticationServices{
    static userRegistration(
        payload:IUserRegistration,
    ):Promise<AxiosResponse<IUserRegistrationResponse>>{
        return axiosInstance.post(SIGN_UP,payload)
    }

    static userRecoveryPassword(
        payload:IUserRecoveryPassword,
    ):Promise<AxiosResponse<any>>{
        return axiosInstance.post(FORGOT_PASSWORD,payload)
    }

    static userLogin(
        payload:IUserLogin,
    ):Promise<AxiosResponse<any>>{
        return axiosInstance.post(LOGIN,payload)        
    }
}