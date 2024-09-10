'use client'

import Image from 'next/image'
import './biblioteca.scss'
import bibliotecaTitle from '@/assets/bibliotecaTitle.png'
import FirstSongUpload from '@/components/firstSongUpload/FirstSongUpload';
import TableLibrary from '@/components/tableLibrary/TableLibrary';

const data=[
  {
    id:'1',
    name:'Soltera',
    duration:'2:41',
    creation:'06/09/2024',
    state:'inProcess'
  },
  {
    id:'2',
    name:'My Space',
    duration:'1:41',
    creation:'06/09/2024',
    state:'finished'
  },
  {
    id:'3',
    name:'Am',
    duration:'1:41',
    creation:'06/09/2024',
    state:'notStarted'
  },{
    id:'4',
    name:'Soltera',
    duration:'2:41',
    creation:'06/09/2024',
    state:'inProcess'
  },
  {
    id:'5',
    name:'My Space',
    duration:'1:41',
    creation:'06/09/2024',
    state:'finished'
  },
  {
    id:'6',
    name:'Am',
    duration:'1:41',
    creation:'06/09/2024',
    state:'notStarted'
  },
]

const data1=[]

const Biblioteca = () => {

  return (
                 
      <section className="container">      
          <div className="library-container">
              <Image className="image-title-section" src={bibliotecaTitle} width={520} height={300} alt="title" />
              {(data1.length===0) ? (
                <FirstSongUpload />
              ):(
                <div className='w-full'>
                  <TableLibrary data={data} />
                </div>
              )} 
          </div>
      </section>
  )
}

export default Biblioteca