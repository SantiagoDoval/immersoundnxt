import Image from 'next/image'
import './estado.scss'
import titleState from '@/assets/estadoTitle.png'
// import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';

const Estado = () => {
  return (
    <section className="container">
        <div className="state-container">
            <div className="back-cont">
                <button className="btn-style-1 volver">Volver</button>
            </div>
            <Image className="image-title-section" src={titleState} width={710} alt="title"/>
            <div className="box-light">
                <p className=''>Vamos a estar mezclando tu canción en vivo, conectate el dia 12 de mayo en el siguiente link!</p>
                <p className="link">Ir a la mezcla en vivo</p>
            </div>
            <div className="state-data-cont">
                <div className="left-cont">
                <div className="information-cont">
                    <div className="state-subtitle">
                    {/* <mat-icon fontIcon="bookmark"></mat-icon> */}
                    <h4>Información</h4> 
                    </div>
                    <p>Nombre: <span>Nombre_cancion</span></p>
                    <p>Artista: <span>Nombre_Artista</span></p>
                    <p>Especialidad: <span>Media</span></p>
                </div>
                <button className="btn-blue">Necesito soporte</button>
                </div>
                <div className="right-cont">
                    <div className="history-cont">
                        <div className="state-subtitle">
                        {/* <mat-icon fontIcon="bookmark"></mat-icon> */}
                        <h4>Historial</h4>
                        </div>
                    </div>
                    <div className="row-input-2 mt-5">
                        <button className="btn-dark">+ CARGAR MASTER(.wav)</button>
                        <button className="btn-dark">+ CARGAR STEMS(.zip)</button>
                    </div>
                </div>
            </div>
            <div className="progress-data-cont">
                <div className="state-subtitle">
                {/* <mat-icon fontIcon="bookmark"></mat-icon> */}
                <h4>Progreso</h4>
                </div>
                {/* <LinearProgressWithLabel value={progress} /> */}

            </div>
        </div>
        </section>
  )
}

export default Estado