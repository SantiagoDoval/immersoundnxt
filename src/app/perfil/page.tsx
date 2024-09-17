export const runtime = "edge";
import { TextField } from '@mui/material'
import './perfil.scss'
import { inputStyle } from '@/utils/inputStyle'
const Perfil = () => {
  return (
    <section className="container">
        <div className="profile-container">
            {/* <img className="image-title-section" src="/assets/perfilTitle.png" alt="title"> */}
            <div className="info-profile-cont">
                <div className="image-profile">
                {/* <img src="/assets/photoProfile.png" alt=""> */}
                <button className="btn-dark">Editar perfil</button>
                </div>
                <div className="data-profile input-white">
                    <div className="line"></div>
                    <p className='text-white my-6'>Información General</p>
                    <div className="row-input-2 my-2">
                        <TextField 
                            className='w-full' 
                            id="outlined-basic" 
                            label="Nombre" 
                            type='text'
                            variant="outlined" 
                            sx={inputStyle}/> 
                        <TextField 
                            className='w-full' 
                            id="outlined-basic" 
                            label="Apellido" 
                            type='text'
                            variant="outlined" 
                            sx={inputStyle}/> 
                    </div>
                    <div className="row-input-2 my-2">
                        <TextField 
                                className='w-full' 
                                id="outlined-basic" 
                                label="Pais" 
                                type='text'
                                variant="outlined" 
                                sx={inputStyle}/> 
                            <TextField 
                                className='w-full' 
                                id="outlined-basic" 
                                label="Correo" 
                                type='text'
                                variant="outlined" 
                                sx={inputStyle}/> 
                    </div>
                    <button className="btn-blue !my-5">Guardar</button>
                    <div className="line"></div>
                    <p className='text-white my-5'>Contraseña</p>
                    <div className="row-input-1 my-2 gap-5">
                        <TextField 
                                className='w-full' 
                                id="outlined-basic" 
                                label="Contraseña" 
                                type='password'
                                variant="outlined" 
                                sx={inputStyle}/> 
                        <TextField 
                                className='w-full' 
                                id="outlined-basic" 
                                label="Contraseña" 
                                type='password'
                                variant="outlined" 
                                sx={inputStyle}/>
                        <TextField 
                                className='w-full' 
                                id="outlined-basic" 
                                label="Contraseña" 
                                type='password'
                                variant="outlined" 
                                sx={inputStyle}/> 

                    </div>
                    <button className="btn-blue !my-5">Actualizar contraseña</button>
                </div>
            </div>
        </div>
    </section>


  )
}

export default Perfil