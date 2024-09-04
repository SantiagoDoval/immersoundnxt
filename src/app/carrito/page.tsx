'use client'

import Image from "next/image"
import './carrito.scss'
import logo from '@/assets/LogoW.png'
import paypal from '@/assets/paypal.png'
import stripe from '@/assets/stripe.png'
import checkCircle from '@/assets/check-circle.png'
import { useState } from "react"
import Link from "next/link"

const Carrito = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <section className="container">
            <div className="main-container">
                <Image className="logo" src={logo} width={510} height={310} alt="Logo" />
                {!toggle ?
                    (<div className="shopping-container">
                        <h3 className="text-white my-3 text-xl">Productos en tu carrito</h3>
                        <div className="blue-card-1">
                            <div className="select-cont">
                                <select className="select-style">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </select>
                            </div>
                            <div><p>Canción</p></div>
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
                            <p className="text-white my-1">¿Tienes un cupón?</p>
                            <input type="text" placeholder="ingresa cupón" className="input-form-style !h-7" />
                        </div>
                        <div className="blue-card-2 gap-3">
                            <div className="info-card">
                                <p>Cupón</p>
                                <p>-$40</p>
                            </div>
                            <div className="info-card total">
                                <p>Total</p>
                                <p>$9</p>
                            </div>
                        </div>
                        <p className="p-info text-white">Escoge tu método de pago</p>
                        <div className="pay-cont">
                            <Image src={paypal} width={236} height={236} alt="" />
                            <Image src={stripe} width={236} height={236} alt="" />
                        </div>
                        <button onClick={() => setToggle(prev => !prev)} className="btn-blue">Pagar</button>
                        <p className="p-info text-white">Al hacer click en pagar estas aceptando los </p>
                        <p className="p-link-white">términos y condiciones</p>
                    </div>)
                    :
                    (<div className="success-container">
                        <Image className="check-icon" width={300} height={300} src={checkCircle} alt="check" />
                        <h2 className="text-white">Tu pago ha sido exitoso!</h2>
                        <p className="p-info text-white !my-5">(Ya puedes empezar a subir tus archivos de audio...)</p>
                        <Link href={'/biblioteca'}>
                            <button className="btn-blue">Empezar</button>
                        </Link>
                    </div>)

                }


            </div>
        </section>

    )
}

export default Carrito