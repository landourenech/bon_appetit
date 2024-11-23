import React from 'react'
import Image from "next/image"
import {motion} from 'framer-motion'



export default function Cartemenu()  {

  
  return (
    <>
       <div className='flex justify-center lg:flex-row gap-16  md:flex-row flex-col mt-20 items-center mb-6 lg:ml-60 lg:mr-48 ml-28  mr-32'>
        <div >
        <Image
        
        className='lg:w-[400px] lg:h-[400px] w-[600px] rounded-full h-[200px] flex justify-center items-center' src="/Asiatique.jpg" alt="" width={1000} height={1000}/>
       </div>
        <div className='text-center lg:w-[600px] md:w-[600px] w-[380px]  flex flex-col justify-center items-center '>
          <h3 className='text-3xl font-bold ml-1' >Votre menu de la semaine</h3>
           <p className='mt-5 text-sm ml-2'>Du lundi au vendredi, retrouvez des recettes pour manger équilibré et de saison, en passant peu de temps en cuisine !</p>
           <button className='border-2  p-2 w-56 rounded-lg border-black mt-5'>Découvrez votre menu</button>
        </div>
        
        </div> 
    </>
  )
}

