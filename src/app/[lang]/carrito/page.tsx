'use client'

// export const runtime = 'edge';

import Image from "next/image"
import './carrito.scss'
import logo from '@/assets/LogoW.png'
import paypal from '@/assets/paypal.png'
import stripe from '@/assets/stripe.png'
import checkCircle from '@/assets/check-circle.png'
import { useState } from "react"
import Link from "next/link"
import { AuthenticationServices } from "@/services/authentication/authentication.services"
import { PaymentServices } from "@/services/payment/payment.services"
import toast, { Toaster } from "react-hot-toast"
import { useRouter } from "next/navigation"
import useGetText from "@/hooks/useGetText"
import { RedirectTo } from "@/utils/redirectTo"

const Carrito = () => {
    const {t,lang}=useGetText('page','shoppingCart')
    const route=useRouter();
    const [toggle, setToggle] = useState(false)

    const handlePayment = async () => {
        const payload = {
            "packageId": 3,
            "userId": 6,
            "paymentMethod": "STRIPE",
            "quantity": 1,
            "promocode": "PRIMERAVEZ"
        }

        try {
            // const response = await PaymentServices.stripePayment(payload)
            const response={
                status:200,
                data:{
                    code:200,
                    data:{
                        id:'',
                        redirecTo:'https://checkout.stripe.com/c/pay/cs_test_a1Urg5stL9LHoWKbdPsIWFONzdvEoE263R6ARdhCbCpTFMlZeaAOevu0QU#fidkdWxOYHwnPyd1blpxYHZxWjA0Sn9JdnFGNUFXTTN2N3NxZF1ia3ZydVJ2YjxwRHEzaHB2dnZ1fTFkaTxdXzFhUXNdZnF9aT1ONm5OYjRsZ0p8VzdqTDc2cUJOSmtkRmdhYzNdckY0d1I3NTUxfDUzPTQ9NCcpJ2N3amhWYHdzYHcnP3F3cGApJ2lkfGpwcVF8dWAnPyd2bGtiaWBabHFgaCcpJ2BrZGdpYFVpZGZgbWppYWB3dic%2FcXdwYHgl'
                    }
                }
            }
            if (response.status !== 200 ) {
                toast('Algo salio mal');
            }
            if (response.status === 200 && response.data.code === 200) {                
                window.open(response.data.data.redirecTo, '_blank', 'noopener,noreferrer');                
                route.push(`/${lang}/biblioteca`)
            }
        } catch (error) {
            toast.error('Algo salio mal');
        }
    }
    return (
        <section className="container">
            <div className="main-container">
                <Image className="logo" src={logo} width={510} height={310} alt="Logo" />
                {!toggle ?
                    (<div className="shopping-container">
                        <h3 className="text-white my-3 text-xl">{t?.title}</h3>
                        <div className="blue-card-1">
                            <div className="select-cont">
                                <select className="select-style">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </select>
                            </div>
                            <div><p>{t?.song}</p></div>
                            <div>
                                <div className="select-cont">
                                    <select className="select-style">
                                        <option value="dolby">Dolby</option>
                                        <option value="360">360</option>
                                    </select>
                                </div>
                            </div>
                            <div><p>$49</p></div>
                        </div>
                        <div className="cupon-cont">
                            <p className="text-white my-1">{t?.cuponText}</p>
                            <input type="text" placeholder={t?.cupon}className="input-form-style !h-7" />
                        </div>
                        <div className="blue-card-2 gap-3">
                            <div className="info-card">
                                <p>{t?.cupon}</p>
                                <p>-$40</p>
                            </div>
                            <div className="info-card total">
                                <p>{t?.total}</p>
                                <p>$9</p>
                            </div>
                        </div>
                        <p className="p-info text-white">{t?.payMethod}</p>
                        <div className="flex mx-auto items-center justify-center w-14 my-5">
                            {/* <Image src={paypal} width={236} height={236} alt="" /> */}
                            <Image src={stripe} width={236} height={236} alt="" />
                        </div>
                        <button onClick={handlePayment} className="btn-blue">{t?.pay}</button>
                        <Toaster />
                        <p className="p-info text-white">{t?.tandcDescription} </p>
                        <p className="p-link-white">{t?.tandc}</p>
                    </div>)
                    :
                    (<div className="success-container">
                        <Image className="check-icon" width={300} height={300} src={checkCircle} alt="check" />
                        <h2 className="text-white">Tu pago ha sido exitoso!</h2>
                        <p className="p-info text-white !my-5">(Ya puedes empezar a subir tus archivos de audio...)</p>
                        <Link href={RedirectTo('biblioteca')}>
                            <button className="btn-blue">Empezar</button>
                        </Link>
                    </div>)

                }


            </div>
        </section>

    )
}

export default Carrito