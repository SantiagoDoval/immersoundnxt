import { axiosInstance } from "@/common/axios-instance";
import { GET_SUPPORT } from "@/constants/api-endpoints";
import { AxiosResponse } from "axios";

export class PaymentServices{
    static getSupport(
        id:any,
    ):Promise<AxiosResponse<any>>{
        return axiosInstance.get(GET_SUPPORT)
    }

}