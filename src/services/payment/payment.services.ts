import { axiosInstance } from "@/common/axios-instance";
import { PAYMENT_STRIPE, SIGN_UP } from "@/constants/api-endpoints";
import { AxiosResponse } from "axios";

export class PaymentServices{
    static stripePayment(
        payload:any,
    ):Promise<AxiosResponse<any>>{
        return axiosInstance.post(PAYMENT_STRIPE,payload)
    }

}