import React from 'react'
import Image from "next/image"


export default function Cartemenu()  {
  return (
    <>
       <div className='flex justify-center mt-20'>
        <Image className='w-[800px] h-[600px] ml-10' src="/Asiatique.jpg" alt="" width={1000} height={1000}/>

        <div>
          <h3 className='text-3xl font-bold' >Votre menu de la semaine</h3>
           <p>Du lundi au vendredi, retrouvez des recettes pour manger équilibré et de saison, en passant peu de temps en cuisine !</p>
        </div>
        
        </div> 
    </>
  )
}

