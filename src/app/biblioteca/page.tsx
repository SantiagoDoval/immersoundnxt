'use client'
import { useState } from 'react';

import Image from 'next/image'
import './biblioteca.scss'
import bibliotecaTitle from '@/assets/bibliotecaTitle.png'
import logoBlack from '@/assets/LogoBlack.png'

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';
import { TextField } from '@mui/material';

import RouteProtected from '@/components/RouteProtected/RouteProtected'

const Biblioteca = () => {
  const [open, setOpen] = useState(false);
  const [openTutorial, setOpenTutorial] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpenTutorial = () => {
    setOpenTutorial(true);
  };

  const handleCloseTutorial = () => {
    setOpenTutorial(false);
  };

  return (
                 
      <section className="container">      
          <div className="library-container">
              <Image className="image-title-section" src={bibliotecaTitle} width={520} height={300} alt="title" />
              <p className="p-info">Ya puedes empezar a subir tus archivos de audio, si no estás seguro de como empezar puedes ver nuestro tutorial aquí</p>
              <div className="upload-container !py-20 text-white">
                  {/* <mat-icon className="icon" svgIcon="upload_icon" aria-hidden="false" aria-label="Example thumbs up SVG icon"></mat-icon> */}

                  
                  <button className="btn-blue" onClick={handleClickOpen}>Agregar una canción</button>
                  <p className="p-info">No tienes canciones.<br/>Para empezar agrega tus archivos acá:</p>
                  <p onClick={handleClickOpenTutorial} className="p-link-white">Ver tutorial</p>
              </div>
          </div>
          <Dialog
            open={open}
            onClose={handleClose}          
            >
            <DialogTitle id="alert-dialog-title" className='flex'>
              <h3 className='w-full text-center'>Sube tu canción</h3>
              <CloseIcon  onClick={handleClose} className='cursor-pointer' />
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description" className='flex flex-col items-center'>
                <Image className="logo-modal" width={85} src={logoBlack} alt="Immersound logo black" />
                <div className='pt-5 flex gap-2'>
                    <TextField id="outlined-basic" label="Nombre" variant="outlined" />                  
                    <TextField id="outlined-basic" label="Artista" variant="outlined" />
                    <TextField id="outlined-basic" label="Especialidad" variant="outlined" />
                </div>
                <div className='flex py-7 gap-5'>
                    <button className='btn-blue'>+ CARGA MASTER (.wav)</button>
                    <button className='btn-blue'>+ CARGA STEMS (.zip)</button>
                </div>             
              </DialogContentText>
            </DialogContent>         
          </Dialog>
          <Dialog
            open={openTutorial}
            onClose={handleCloseTutorial}          
            >
            <DialogTitle id="alert-dialog-title" className='flex justify-end'>            
              <CloseIcon  onClick={handleCloseTutorial} className='cursor-pointer' />
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description" className='flex flex-col items-center'>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/XHOmBV4js_E?si=Gzw_NIYwhleXUAD1" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>             
              </DialogContentText>
            </DialogContent>         
          </Dialog>
      </section>
  )
}

export default Biblioteca